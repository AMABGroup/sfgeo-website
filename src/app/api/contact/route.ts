import { NextResponse } from "next/server";
import { Resend } from "resend";
import { PROJECT_TYPES, START_DATES } from "@/data/projectTypes";
import { clientIp, rateLimited } from "@/lib/rateLimit";
import { getPlanStore } from "@/lib/planStore";
import {
  collectPlans,
  dropAttachments,
  parsePlanRequest,
  planEmailBlock,
  plansComplete,
  purgeStaleUploads,
  removeUpload,
  unsentPlanNames,
  withTimeout,
  type PlanResult,
} from "@/lib/enquiryPlans";

const MAX_BODY_BYTES = 20_000;
const LIMITS = { name: 120, email: 254, phone: 40, siteAddress: 300, message: 3000 } as const;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const CLICK_IDS = ["gclid", "gbraid", "wbraid"] as const;
const UTMS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"] as const;
const SOURCE_KEYS = [...CLICK_IDS, ...UTMS, "landing", "referrer"] as const;
const SOURCE_MAX = 300;
// Housekeeping after a send is cut off at these, so it never holds up the reply.
const CLEANUP_MS = 1_500;
const PURGE_MS = 1_500;

function str(v: unknown, max: number): string | null {
  if (typeof v !== "string") return null;
  const t = v.trim();
  return t.length <= max ? t : null;
}
// Trimmed text, cut only at the body cap, so a lead that breaks a field limit
// still arrives in full in its [CHECK] email.
const text = (v: unknown) => (typeof v === "string" ? v.trim().slice(0, MAX_BODY_BYTES) : "");
const oneLine = (s: string) => s.replace(/[\r\n]+/g, " ");
const allowed = (list: readonly { value: string }[] | readonly string[], v: string) =>
  (list as readonly unknown[]).some((x) => (typeof x === "string" ? x : (x as { value: string }).value) === v);

// Every refusal is logged with its reason and the form placement only (never a
// name, email or phone) so rejected enquiries can be counted in the function log.
function reject(status: number, error: string, reason: string, placement: string) {
  console.warn(`Contact rejected (${status}): ${reason} [placement: ${placement}]`);
  return NextResponse.json({ error }, { status });
}

type LeadSource = Partial<Record<(typeof SOURCE_KEYS)[number], string>>;

// Optional first-touch source sent by the forms (src/lib/leadSource.ts). Only
// known keys are kept, each on one line and capped. A missing or malformed
// source is never a reason to refuse the lead.
function leadSource(v: unknown): LeadSource {
  const out: LeadSource = {};
  if (!v || typeof v !== "object" || Array.isArray(v)) return out;
  for (const k of SOURCE_KEYS) {
    const x = (v as Record<string, unknown>)[k];
    if (typeof x === "string" && x.trim()) out[k] = oneLine(x.trim()).slice(0, SOURCE_MAX);
  }
  return out;
}

function sourceBlock(placement: string, s: LeadSource): string {
  const clicks = CLICK_IDS.filter((k) => s[k]).map((k) => `${k} ${s[k]}`);
  const utms = UTMS.filter((k) => s[k]).map((k) => `${k.slice(4)}=${s[k]}`);
  return [
    "Lead source",
    `Form: ${placement}`,
    `Ad click (gclid/gbraid/wbraid): ${clicks.length ? `yes, ${clicks.join(", ")}` : "no"}`,
    `UTM: ${utms.length ? utms.join(", ") : "(none)"}`,
    `Landing page: ${s.landing || "(not recorded)"}`,
    `Referrer: ${s.referrer || "(none)"}`,
  ].join("\n");
}

export async function POST(request: Request) {
  let placement = "unknown, body not read";
  try {
    const length = Number(request.headers.get("content-length") || 0);
    if (length > MAX_BODY_BYTES) return reject(413, "Request too large", `body of ${length} bytes`, placement);

    if (rateLimited(`contact:${clientIp(request)}`, 5, 10 * 60_000)) {
      return reject(429, "Too many requests. Please call 0423 483 555.", "rate limit", placement);
    }

    const body = (await request.json()) as Record<string, unknown>;
    placement = oneLine(str(body.placement, 80) || "not given");

    // Honeypot: bots fill the hidden field; humans never see it.
    if (typeof body.website === "string" && body.website.length > 0) {
      console.warn(`Honeypot triggered, submission ignored [placement: ${placement}]`);
      return NextResponse.json({ success: true }, { status: 200 });
    }

    const fields = {
      name: text(body.name),
      email: text(body.email),
      phone: text(body.phone),
      siteAddress: text(body.siteAddress),
      message: text(body.message),
    };
    const { name, email, phone, siteAddress, message } = fields;
    const projectType = str(body.projectType, 80);
    const startDate = str(body.startDate, 80);

    // Both forms only offer values from these lists, so a miss here is not a person.
    if (!projectType || !startDate || !allowed(PROJECT_TYPES, projectType) || !allowed(START_DATES, startDate)) {
      return reject(400, "Invalid selection", "project type or start date not on the list", placement);
    }

    const sanitizedPhone = phone.replace(/\D/g, "");
    const validEmail = EMAIL_RE.test(email);

    // Checks a real person can fail: a placeholder phone, two addresses in the
    // email field, a long message. A lead that fails one but can still be
    // contacted is sent as a [CHECK] email instead of being dropped.
    const failed: string[] = [];
    for (const key of Object.keys(LIMITS) as (keyof typeof LIMITS)[]) {
      if (!fields[key] && key !== "message") failed.push(`${key} missing`);
      else if (fields[key].length > LIMITS[key]) failed.push(`${key} over ${LIMITS[key]} characters`);
    }
    if (email && !validEmail) failed.push("email format");
    if (phone && sanitizedPhone.length < 6) failed.push("phone under 6 digits");

    const check = failed.length > 0;
    if (check && sanitizedPhone.length < 6 && !/\S@\S/.test(email)) {
      return reject(400, "Missing or invalid fields", `${failed.join(", ")}; no usable phone or email`, placement);
    }

    if (!process.env.RESEND_API_KEY) {
      console.error(`RESEND_API_KEY is not set; enquiry not delivered [placement: ${placement}]`);
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Plans (optional): /api/upload has stored them under the upload id. A plan
    // problem never refuses or loses the lead: it is sent as [CHECK] with the
    // reason, and whatever reached storage is kept for 7 days.
    const planRequest = parsePlanRequest(body.uploadId, body.files);
    const unsent = unsentPlanNames(body.plansNotSent);
    const store = await getPlanStore();
    // Runs alongside the send; awaited (with a cap) before replying.
    const purge = store ? withTimeout(purgeStaleUploads(store, planRequest?.uploadId ?? null), PURGE_MS) : null;
    const plans: PlanResult | null = planRequest ? await collectPlans(store, planRequest) : null;

    const send = async (attach: boolean) => {
      const planCheck = plans !== null && !plansComplete(plans);
      const planText = planEmailBlock(plans, unsent);
      try {
        return await resend.emails.send({
          from: "SFGEO Website <noreply@sfgeo.com.au>",
          to: ["alli@sfgeo.com.au"],
          // Only a well-formed address goes in Reply-To, so a malformed one cannot fail the send.
          ...(validEmail ? { replyTo: email } : {}),
          subject: oneLine(`${check || planCheck ? "[CHECK] " : ""}New enquiry from ${name.slice(0, LIMITS.name) || "(no name)"}: ${projectType}`),
          text: `
New enquiry received via sfgeo.com.au contact form.
${check ? `\nFailed checks: ${failed.join(", ")}. Sent so the lead is not lost; check the details before replying.\n` : ""}${planCheck ? "\nNot every plan could be attached; see Plans below.\n" : ""}
Name: ${oneLine(name)}
Email: ${oneLine(email)}
Phone: ${oneLine(phone)} (${sanitizedPhone || "no digits"})
Site address: ${oneLine(siteAddress)}
Project type: ${projectType}
Proposed start date: ${startDate}

Message:
${message || "(none provided)"}
${planText ? `\n${planText}\n` : ""}
${sourceBlock(placement, leadSource(body.source))}

---
Submitted at: ${new Date().toISOString()}
      `,
          ...(attach && plans?.attachments.length ? { attachments: plans.attachments } : {}),
        });
      } catch (err) {
        return { data: null, error: { name: "exception", message: err instanceof Error ? err.message : String(err) } };
      }
    };

    let { error } = await send(true);
    if (error && plans?.attachments.length) {
      // Most likely the attachments themselves: send the lead without them.
      console.error(`Resend refused the enquiry with plans attached; resending without them [placement: ${placement}]:`, error);
      dropAttachments(plans, `email service refused the attachments: ${error.name}`);
      ({ error } = await send(false));
    }

    if (error) {
      console.error(`Resend error [placement: ${placement}]:`, error);
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }

    if (store && plans?.uploadId && plansComplete(plans)) await withTimeout(removeUpload(store, plans.uploadId), CLEANUP_MS);
    if (purge) await purge;
    if (plans && !plansComplete(plans)) console.warn(`Contact sent as [CHECK]: plans not attached [placement: ${placement}]`);

    if (check) console.warn(`Contact sent as [CHECK]: ${failed.join(", ")} [placement: ${placement}]`);
    // Tells the form whether to ask the visitor to email their plans instead.
    return NextResponse.json(
      { success: true, ...(plans ? { plans: plansComplete(plans) ? "attached" : "not_attached" } : {}) },
      { status: 200 }
    );
  } catch (error) {
    console.error(`API error [placement: ${placement}]:`, error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
