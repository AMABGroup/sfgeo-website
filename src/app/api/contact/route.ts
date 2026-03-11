import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, siteAddress, message } = body;

    // Validate minimum required fields
    if (!name || !email || !phone || !siteAddress || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Configure Nodemailer transporter using Environment Variables
    // Note: To use this in production, create a .env file and add these SMTP variables.
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Verify connection configuration (optional, helps with debugging if auth fails)
    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
        await transporter.verify();
    } else {
        console.warn("SMTP credentials not provided in .env. Form submission will be mocked.");
    }

    const mailOptions = {
      from: process.env.SMTP_USER, // Sender address (must match authenticated user)
      replyTo: email,              // Allow direct reply to the lead
      to: 'info@sfgeo.com.au',     // Primary Recipient
      cc: 'all.m.atmar@outlook.com', // CC Recipient
      subject: `New SFGEO Website Enquiry from ${name}`,
      text: `
You have received a new enquiry via the SFGEO Contact Form.

Name: ${name}
Email: ${email}
Contact Number: ${phone}
Site Address: ${siteAddress}

Message:
${message}
      `,
      html: `
        <div style="font-family: sans-serif; color: #333; max-w-xl; margin: 0 auto;">
          <h2 style="color: #1b4b36;">New Website Enquiry</h2>
          <p>You have received a new message via the SFGEO Contact Form.</p>
          <hr style="border: 1px solid #eaeaea; margin: 20px 0;" />
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Contact Number:</strong> ${phone}</p>
          <p><strong>Site Address:</strong> ${siteAddress}</p>
          <br />
          <p><strong>Message:</strong></p>
          <p style="background-color: #f9f9f9; padding: 15px; border-radius: 5px;">${message.replace(/\n/g, '<br />')}</p>
        </div>
      `,
    };

    // If SMTP credentials exist, attempt to send real email. Otherwise mock it for preview mode.
    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
        await transporter.sendMail(mailOptions);
    } else {
        // Mock successful email send for local frontend testing
        console.log("Mock Email Dispatched:", mailOptions);
        // Simulate a tiny network delay
        await new Promise(resolve => setTimeout(resolve, 1000));
    }

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
