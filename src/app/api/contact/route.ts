import { NextResponse } from "next/server";
import { Resend } from "resend";
import { PROJECT_TYPES, START_DATES } from "@/data/projectTypes";
import { clientIp, rateLimited } from "@/lib/rateLimit";

const MAX_BODY_BYTES = 20_000;
const LIMITS = { name: 120, email: 254, phone: 40, siteAddress: 300, message: 3000 } as const;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function str(v: unknown, max: number): string | null {
  if (typeof v !== "string") return null;
  const t = v.trim();
  return t.length <= max ? t : null;
}
const oneLine = (s: string) => s.replace(/[\r\n]+/g, " ");
const allowed = (list: readonly { value: string }[] | readonly string[], v: string) =>
  (list as readonly unknown[]).some((x) => (typeof x === "string" ? x : (x as { value: string }).value) === v);

export async function POST(request: Request) {
  try {
    const length = Number(request.headers.get("content-length") || 0);
    if (length > MAX_BODY_BYTES) return NextResponse.json({ error: "Request too large" }, { status: 413 });

    if (rateLimited(`contact:${clientIp(request)}`, 5, 10 * 60_000)) {
      return NextResponse.json({ error: "Too many requests. Please call 0423 483 555." }, { status: 429 });
    }

    const body = (await request.json()) as Record<string, unknown>;

    // Honeypot: bots fill the hidden field; humans never see it.
    if (typeof body.website === "string" && body.website.length > 0) {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    const name = str(body.name, LIMITS.name);
    const email = str(body.email, LIMITS.email);
    const phone = str(body.phone, LIMITS.phone);
    const siteAddress = str(body.siteAddress, LIMITS.siteAddress);
    const projectType = str(body.projectType, 80);
    const startDate = str(body.startDate, 80);
    const message = body.message == null ? "" : str(body.message, LIMITS.message);

    if (!name || !email || !phone || !siteAddress || !projectType || !startDate || message === null) {
      return NextResponse.json({ error: "Missing or invalid fields" }, { status: 400 });
    }
    if (!EMAIL_RE.test(email)) return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    if (!allowed(PROJECT_TYPES, projectType) || !allowed(START_DATES, startDate)) {
      return NextResponse.json({ error: "Invalid selection" }, { status: 400 });
    }

    const sanitizedPhone = phone.replace(/\D/g, "");
    if (sanitizedPhone.length < 6) return NextResponse.json({ error: "Invalid phone number" }, { status: 400 });

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not set; enquiry not delivered");
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }
    const resend = new Resend(process.env.RESEND_API_KEY);

    const { error } = await resend.emails.send({
      from: "SFGEO Website <noreply@sfgeo.com.au>",
      to: ["alli@sfgeo.com.au"],
      replyTo: email,
      subject: oneLine(`New enquiry from ${name}: ${projectType}`),
      text: `
New enquiry received via sfgeo.com.au contact form.

Name: ${oneLine(name)}
Email: ${email}
Phone: ${oneLine(phone)} (${sanitizedPhone})
Site address: ${oneLine(siteAddress)}
Project type: ${projectType}
Proposed start date: ${startDate}

Message:
${message || "(none provided)"}

---
Submitted at: ${new Date().toISOString()}
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
