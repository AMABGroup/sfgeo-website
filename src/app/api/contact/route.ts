import { NextResponse } from "next/server";
import { Resend } from "resend";
import { PROJECT_TYPES, START_DATES } from "@/data/projectTypes";
import { clientIp, rateLimited } from "@/lib/rateLimit";

const MAX_BODY_BYTES = 20_000;
const LIMITS = { name: 120, email: 254, phone: 40, siteAddress: 300, message: 3000 } as const;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const CLICK_IDS = ["gclid", "gbraid", "wbraid"] as const;
const UTMS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"] as const;
const SOURCE_KEYS = [...CLICK_IDS, ...UTMS, "landing", "referrer"] as const;
const SOURCE_MAX = 300;

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

    const { error } = await resend.emails.send({
      from: "SFGEO Website <noreply@sfgeo.com.au>",
      to: ["alli@sfgeo.com.au"],
      // Only a well-formed address goes in Reply-To, so a malformed one cannot fail the send.
      ...(validEmail ? { replyTo: email } : {}),
      subject: oneLine(`${check ? "[CHECK] " : ""}New enquiry from ${name.slice(0, LIMITS.name) || "(no name)"}: ${projectType}`),
      text: `
New enquiry received via sfgeo.com.au contact form.
${check ? `\nFailed checks: ${failed.join(", ")}. Sent so the lead is not lost; check the details before replying.\n` : ""}
Name: ${oneLine(name)}
Email: ${oneLine(email)}
Phone: ${oneLine(phone)} (${sanitizedPhone || "no digits"})
Site address: ${oneLine(siteAddress)}
Project type: ${projectType}
Proposed start date: ${startDate}

Message:
${message || "(none provided)"}

${sourceBlock(placement, leadSource(body.source))}

---
Submitted at: ${new Date().toISOString()}
      `,
    });

    if (error) {
      console.error(`Resend error [placement: ${placement}]:`, error);
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }

    if (check) console.warn(`Contact sent as [CHECK]: ${failed.join(", ")} [placement: ${placement}]`);
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error(`API error [placement: ${placement}]:`, error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
