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
      <td style="padding:8px 12px;background:#f7f7f5;color:#6B6B6B;font-size:12px;width:160px;text-transform:uppercase;letter-spacing:0.5px;">${escapeHtml(label)}</td>
      <td style="padding:8px 12px;color:#111111;font-size:14px;">${escapeHtml(value || "—")}</td>
    </tr>`;

  return `<!doctype html>
<html><body style="margin:0;padding:0;font-family:Carlito,Calibri,-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;background:#fafafa;color:#111111;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#fafafa;padding:24px 0;">
    <tr><td align="center">
      <table role="presentation" width="640" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.05);">
        <tr>
          <td style="padding:20px 24px;border-bottom:2px solid #236734;">
            <table role="presentation" width="100%"><tr>
              <td style="font-size:18px;font-weight:700;color:#111111;">Solid Foundation Geotechnical</td>
              <td style="text-align:right;font-size:12px;color:#6B6B6B;letter-spacing:0.6px;">SITE INSPECTION DOCKET</td>
            </tr></table>
          </td>
        </tr>
        <tr>
          <td style="padding:24px;">
            <p style="margin:0 0 8px 0;font-size:13px;color:#6B6B6B;text-transform:uppercase;letter-spacing:1px;">Docket lodged</p>
            <p style="margin:0 0 4px 0;font-size:22px;font-weight:700;color:#111111;font-family:Carlito,Calibri,monospace;">${escapeHtml(data.docketNumber)}</p>
            <p style="margin:0 0 22px 0;font-size:14px;color:#111111;">${escapeHtml(data.projectName || "")}</p>
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border:1px solid #eee;border-radius:6px;overflow:hidden;">
              ${row("Project ref", data.projectRef || "")}
              ${row("Visit", data.visitNumber || "")}
              ${row("Inspection date", data.inspectionDate)}
              ${row("Inspector", data.inspectorName)}
              ${row("Type", `${data.jobType}${data.jobTypeDetail ? ` — ${data.jobTypeDetail}` : ""}`)}
              ${row("Site", data.siteAddress)}
              ${row("Start / End", `${data.timeOn || "—"}  →  ${data.timeOff || "—"}`)}
              ${data.travelHours ? row("Travel", `${data.travelHours} hrs`) : ""}
              ${row("Total hours", data.totalHours ? `${data.totalHours} hrs` : "—")}
              ${row("Client", `${data.clientName}${data.clientCompany ? ` (${data.clientCompany})` : ""}`)}
              ${data.siteContactName ? row("Site contact", [data.siteContactName, data.siteContactRole, data.siteContactPhone].filter(Boolean).join(" · ")) : ""}
            </table>
            ${(data.reportToFollow || data.siteNote || data.noReportRequired) ? `<div style="margin-top:18px;font-size:13px;color:#111111;">
              <div style="font-size:12px;color:#6B6B6B;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:6px;">Status</div>
              ${data.reportToFollow ? "<div>✓ Report to follow</div>" : ""}
              ${data.siteNote ? "<div>✓ Site Note</div>" : ""}
              ${data.noReportRequired ? "<div>✓ No report required</div>" : ""}
            </div>` : ""}
            ${data.notes ? `<div style="margin-top:20px;">
              <div style="font-size:12px;color:#6B6B6B;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:6px;">Site notes</div>
              <div style="font-size:14px;line-height:1.6;color:#111111;white-space:pre-wrap;">${escapeHtml(data.notes)}</div>
            </div>` : ""}
          </td>
        </tr>
        <tr>
          <td style="background:#f7f7f5;padding:14px 24px;font-size:11px;color:#6B6B6B;">
            AMAB Group Pty Ltd t/a SFGEO  ·  ABN 54 686 815 252  ·  0423 483 555  ·  sfgeo.com.au
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

  let body: Partial<DocketData> & {
    docketId?: string;
    reportToFollow?: boolean;
    siteNote?: boolean;
    noReportRequired?: boolean;
    siteContactSignature?: string;
  };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const required: (keyof DocketData)[] = [
    "projectRef",
    "projectName",
    "inspectionDate",
    "inspectorName",
    "jobType",
    "clientName",
    "clientEmail",
    "siteAddress",
  ];
  for (const field of required) {
    if (!body[field] || String(body[field]).trim() === "") {
      return NextResponse.json({ error: `Missing field: ${field}` }, { status: 400 });
    }
  }

  const projectRef = String(body.projectRef);
  const visitNumber = (body.visitNumber ? String(body.visitNumber) : "01").padStart(2, "0");
  const docketNumber = body.docketId ? String(body.docketId) : `${projectRef}-${visitNumber}`;

  const data: DocketData = {
    docketNumber,
    projectRef,
    visitNumber,
    projectName: String(body.projectName),
    inspectionDate: String(body.inspectionDate),
    inspectorName: String(body.inspectorName),
    jobType: String(body.jobType),
    jobTypeDetail: body.jobTypeDetail ? String(body.jobTypeDetail) : undefined,
    clientName: String(body.clientName),
    clientCompany: body.clientCompany ? String(body.clientCompany) : undefined,
    clientEmail: String(body.clientEmail),
    clientPhone: body.clientPhone ? String(body.clientPhone) : "",
    siteContactName: body.siteContactName ? String(body.siteContactName) : "",
    siteContactPhone: body.siteContactPhone ? String(body.siteContactPhone) : "",
    siteContactRole: body.siteContactRole ? String(body.siteContactRole) : "",
    siteAddress: String(body.siteAddress),
    timeOn: body.timeOn ? String(body.timeOn) : "",
    timeOff: body.timeOff ? String(body.timeOff) : "",
    travelHours: body.travelHours ? String(body.travelHours) : "",
    totalHours: body.totalHours ? String(body.totalHours) : "",
    notes: body.notes ? String(body.notes) : "",
    reportToFollow: !!body.reportToFollow,
    siteNote: !!body.siteNote,
    noReportRequired: !!body.noReportRequired,
    siteContactSignature: body.siteContactSignature ? String(body.siteContactSignature) : undefined,
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

  try {
    const { error } = await resend.emails.send({
      from: process.env.DOCKET_FROM_EMAIL || "SFGEO Dockets <admin@sfgeo.com.au>",
      to: [data.clientEmail],
      bcc: ADMIN_BCC,
      replyTo: "alli@sfgeo.com.au",
      subject: `SFGEO Site Inspection Docket ${data.docketNumber} — ${data.projectName}`,
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

  return NextResponse.json({ success: true, docketId: data.docketNumber });
}
