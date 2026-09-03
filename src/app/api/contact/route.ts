import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { 
      name, 
      email, 
      phone, 
      siteAddress, 
      projectType, 
      startDate, 
      message, 
      website // Honeypot
    } = body;

    // Check Honeypot
    if (website && website.length > 0) {
      console.log("Honeypot triggered, silently ignoring submission.");
      return NextResponse.json({ success: true }, { status: 200 });
    }

    // Validate required fields
    if (!name || !email || !phone || !siteAddress || !projectType || !startDate) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Sanitize phone number (strip non-digits)
    const sanitizedPhone = phone.replace(/\D/g, "");

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { data, error } = await resend.emails.send({
      from: "SFGEO Website <noreply@sfgeo.com.au>",
      to: ["alli@sfgeo.com.au"],
      replyTo: email,
      subject: `New enquiry from ${name} — ${projectType}`,
      text: `
New enquiry received via sfgeo.com.au contact form.

Name: ${name}
Email: ${email}
Phone: ${phone.trim()} (${sanitizedPhone})
Site address: ${siteAddress}
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
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
