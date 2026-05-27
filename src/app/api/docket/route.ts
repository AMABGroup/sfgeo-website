import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { Resend } from "resend";
import { getCookieName, verifyToken } from "@/lib/docketAuth";
import { buildDocketPdf, type DocketData } from "@/lib/docketPdf";

const ADMIN_BCC = ["admin@sfgeo.com.au", "helay@sfgeo.com.au"];

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildHtmlSummary(data: DocketData): string {
  const row = (label: string, value: string) => `
    <tr>
      <td style="padding:8px 12px;background:#f7f7f5;color:#666;font-size:12px;width:160px;text-transform:uppercase;letter-spacing:0.5px;">${escapeHtml(label)}</td>
      <td style="padding:8px 12px;color:#0a0a0a;font-size:14px;">${escapeHtml(value || "—")}</td>
    </tr>`;

  return `<!doctype html>
<html><body style="margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;background:#fafafa;color:#0a0a0a;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#fafafa;padding:24px 0;">
    <tr><td align="center">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.05);">
        <tr>
          <td style="background:#2D5A3A;padding:20px 24px;color:#fff;">
            <div style="font-size:20px;font-weight:700;letter-spacing:0.5px;">SFGEO</div>
            <div style="font-size:12px;opacity:0.85;margin-top:2px;">Inspection Docket #${escapeHtml(data.docketNumber)}</div>
          </td>
        </tr>
        <tr>
          <td style="padding:24px;">
            <p style="margin:0 0 16px 0;font-size:14px;line-height:1.6;color:#333;">
              Hi ${escapeHtml(data.clientName.split(" ")[0] || "there")},
            </p>
            <p style="margin:0 0 20px 0;font-size:14px;line-height:1.6;color:#333;">
              Please find attached your inspection docket from ${escapeHtml(data.inspectionDate)}. A copy is below for your records.
            </p>
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border:1px solid #eee;border-radius:6px;overflow:hidden;">
              ${row("Docket #", data.docketNumber)}
              ${row("Inspection date", data.inspectionDate)}
              ${row("Inspector", data.inspectorName)}
              ${row("Job type", data.jobType)}
              ${row("Site address", data.siteAddress)}
              ${row("Time on", data.timeOn)}
              ${row("Time off", data.timeOff)}
              ${row("Client", `${data.clientName}${data.clientCompany ? ` (${data.clientCompany})` : ""}`)}
            </table>
            ${data.notes ? `<div style="margin-top:20px;">
              <div style="font-size:12px;color:#666;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:6px;">Notes</div>
              <div style="font-size:14px;line-height:1.6;color:#0a0a0a;white-space:pre-wrap;">${escapeHtml(data.notes)}</div>
            </div>` : ""}
            <p style="margin:24px 0 0 0;font-size:13px;line-height:1.6;color:#666;">
              Any questions, reply to this email or call us on
              <a href="tel:0423483555" style="color:#2D5A3A;text-decoration:none;font-weight:600;">0423 483 555</a>.
            </p>
          </td>
        </tr>
        <tr>
          <td style="background:#f7f7f5;padding:16px 24px;font-size:11px;color:#888;text-align:center;">
            Solid Foundation Geotechnical · sfgeo.com.au · ABN-registered Sydney geotechnical consultancy
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body></html>`;
}

export async function POST(request: Request) {
  const cookieStore = await cookies();
  const token = cookieStore.get(getCookieName())?.value;
  if (!verifyToken(token)) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  let body: Partial<DocketData> & { sendCopyToClient?: boolean };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const required: (keyof DocketData)[] = [
    "docketNumber",
    "inspectionDate",
    "inspectorName",
    "jobType",
    "clientName",
    "clientEmail",
    "clientPhone",
    "siteAddress",
  ];
  for (const field of required) {
    if (!body[field] || String(body[field]).trim() === "") {
      return NextResponse.json({ error: `Missing field: ${field}` }, { status: 400 });
    }
  }

  const data: DocketData = {
    docketNumber: String(body.docketNumber),
    inspectionDate: String(body.inspectionDate),
    inspectorName: String(body.inspectorName),
    jobType: String(body.jobType),
    clientName: String(body.clientName),
    clientCompany: body.clientCompany ? String(body.clientCompany) : undefined,
    clientEmail: String(body.clientEmail),
    clientPhone: String(body.clientPhone),
    siteAddress: String(body.siteAddress),
    timeOn: body.timeOn ? String(body.timeOn) : "",
    timeOff: body.timeOff ? String(body.timeOff) : "",
    notes: body.notes ? String(body.notes) : "",
    inspectorSignature: body.inspectorSignature ? String(body.inspectorSignature) : undefined,
    clientSignature: body.clientSignature ? String(body.clientSignature) : undefined,
  };

  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json({ error: "Email service not configured" }, { status: 500 });
  }

  let pdfBytes: Uint8Array;
  try {
    pdfBytes = await buildDocketPdf(data);
  } catch (err) {
    console.error("PDF build error:", err);
    return NextResponse.json({ error: "Failed to build PDF" }, { status: 500 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const filename = `SFGEO-Docket-${data.docketNumber}.pdf`;
  const sendToClient = body.sendCopyToClient !== false;

  const toList = sendToClient ? [data.clientEmail] : ["alli@sfgeo.com.au"];

  try {
    const { error } = await resend.emails.send({
      from: "SFGEO Dockets <noreply@sfgeo.com.au>",
      to: toList,
      bcc: ADMIN_BCC,
      replyTo: "alli@sfgeo.com.au",
      subject: `SFGEO Inspection Docket #${data.docketNumber} — ${data.siteAddress}`,
      html: buildHtmlSummary(data),
      attachments: [
        {
          filename,
          content: Buffer.from(pdfBytes).toString("base64"),
        },
      ],
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Email send failed" }, { status: 502 });
    }
  } catch (err) {
    console.error("Email error:", err);
    return NextResponse.json({ error: "Email send failed" }, { status: 502 });
  }

  return NextResponse.json({ success: true, docketNumber: data.docketNumber });
}
