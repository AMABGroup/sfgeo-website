import { PDFDocument, StandardFonts, rgb, PDFPage, PDFFont } from "pdf-lib";

export type DocketData = {
  docketNumber: string;
  inspectionDate: string;
  inspectorName: string;
  jobType: string;
  jobTypeDetail?: string;
  clientName: string;
  clientCompany?: string;
  clientEmail: string;
  clientPhone: string;
  siteAddress: string;
  timeOn: string;
  timeOff: string;
  travelHours?: string;
  totalHours?: string;
  notes: string;
  reportToFollow?: boolean;
  siteNote?: boolean;
  noReportRequired?: boolean;
  inspectorSignature?: string;
  clientSignature?: string;
};

// Palette tuned to the SFGEO tax-invoice template
const forestGreen = rgb(45 / 255, 90 / 255, 58 / 255);
const ink = rgb(0.06, 0.07, 0.09);
const subtleInk = rgb(0.25, 0.28, 0.32);
const meta = rgb(0.45, 0.48, 0.52);
const rule = rgb(0.85, 0.86, 0.88);
const zebra = rgb(0.96, 0.96, 0.94);

function wrapText(text: string, font: PDFFont, size: number, maxWidth: number): string[] {
  const paragraphs = text.split(/\r?\n/);
  const out: string[] = [];
  for (const para of paragraphs) {
    if (!para.trim()) {
      out.push("");
      continue;
    }
    const words = para.split(/\s+/);
    let line = "";
    for (const word of words) {
      const test = line ? `${line} ${word}` : word;
      if (font.widthOfTextAtSize(test, size) > maxWidth) {
        if (line) out.push(line);
        line = word;
      } else {
        line = test;
      }
    }
    if (line) out.push(line);
  }
  return out;
}

async function embedPngFromDataUrl(pdf: PDFDocument, dataUrl?: string) {
  if (!dataUrl || !dataUrl.startsWith("data:image/png;base64,")) return null;
  const base64 = dataUrl.split(",")[1];
  const bytes = Uint8Array.from(Buffer.from(base64, "base64"));
  try {
    return await pdf.embedPng(bytes);
  } catch {
    return null;
  }
}

function formatDateLong(iso: string): string {
  const d = new Date(iso + (iso.length === 10 ? "T00:00:00" : ""));
  if (Number.isNaN(d.getTime())) return iso;
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
}

function formatHours(value?: string): string {
  if (!value) return "—";
  const num = parseFloat(value);
  if (!Number.isFinite(num)) return value;
  return num.toFixed(num % 1 === 0 ? 0 : 2).replace(/\.00$/, "") + " hrs";
}

export async function buildDocketPdf(data: DocketData): Promise<Uint8Array> {
  const pdf = await PDFDocument.create();
  const font = await pdf.embedFont(StandardFonts.Helvetica);
  const bold = await pdf.embedFont(StandardFonts.HelveticaBold);

  const page: PDFPage = pdf.addPage([595.28, 841.89]); // A4 portrait
  const { width, height } = page.getSize();
  const left = 56;
  const right = width - 56;
  const innerWidth = right - left;
  let y = height - 64;

  // ---- Top reference line + monogram ----
  page.drawText(`SFGEO-DOC-${data.docketNumber}`, {
    x: left, y, size: 8.5, font, color: meta,
  });
  page.drawText("·", { x: left + font.widthOfTextAtSize(`SFGEO-DOC-${data.docketNumber}`, 8.5) + 6, y, size: 8.5, font, color: meta });
  page.drawText("Inspection Docket", {
    x: left + font.widthOfTextAtSize(`SFGEO-DOC-${data.docketNumber}`, 8.5) + 14, y,
    size: 8.5, font, color: meta,
  });

  // SFG monogram (top right) — stylised stack
  const monoX = right - 28;
  const monoY = y - 4;
  page.drawText("SF", { x: monoX, y: monoY + 6, size: 14, font: bold, color: forestGreen });
  page.drawLine({
    start: { x: monoX - 1, y: monoY + 4 },
    end:   { x: monoX + 21, y: monoY + 4 },
    thickness: 1.2,
    color: forestGreen,
  });
  page.drawText("G", { x: monoX + 4, y: monoY - 8, size: 14, font: bold, color: forestGreen });

  y -= 36;

  // ---- Subtitle (job type detail / job type) ----
  const lead = data.jobTypeDetail?.trim() || data.jobType;
  page.drawText(lead, { x: left, y, size: 12, font, color: subtleInk });
  y -= 30;

  // ---- Big title ----
  page.drawText("Inspection Docket", { x: left, y, size: 34, font: bold, color: ink });
  y -= 22;

  // ---- Subtitle: job type · site address ----
  const subtitle = `${data.jobType}${data.jobTypeDetail ? ` (${data.jobTypeDetail})` : ""}  ·  ${data.siteAddress}`;
  const subtitleLines = wrapText(subtitle, font, 11, innerWidth);
  for (const line of subtitleLines) {
    page.drawText(line, { x: left, y, size: 11, font, color: subtleInk });
    y -= 14;
  }
  y -= 6;

  // ---- Horizontal rule ----
  page.drawLine({ start: { x: left, y }, end: { x: right, y }, thickness: 0.6, color: rule });
  y -= 22;

  // ---- Meta block (two columns, like Bill To / Site / Project) ----
  const labelColW = 92;
  const drawMetaRow = (label: string, lines: string[]) => {
    page.drawText(label.toUpperCase(), { x: left, y, size: 8, font, color: meta });
    let lineY = y;
    for (let i = 0; i < lines.length; i++) {
      page.drawText(lines[i], {
        x: left + labelColW,
        y: lineY,
        size: 11,
        font: i === 0 ? bold : font,
        color: ink,
      });
      lineY -= 14;
    }
    y = lineY - 4;
  };

  const clientLines = [
    data.clientName,
    ...(data.clientCompany ? [data.clientCompany] : []),
    `Email: ${data.clientEmail}`,
    `Phone: ${data.clientPhone}`,
  ];
  drawMetaRow("Client", clientLines);
  drawMetaRow("Site", [data.siteAddress]);
  drawMetaRow(
    "Job Type",
    [data.jobType + (data.jobTypeDetail ? `  —  ${data.jobTypeDetail}` : "")]
  );
  drawMetaRow("Inspector", [data.inspectorName]);
  drawMetaRow("Docket No", [data.docketNumber]);
  drawMetaRow("Issued", [formatDateLong(data.inspectionDate)]);

  y -= 4;

  // ---- Section 1 · Inspection notes ----
  const drawNumberedHeading = (num: number, title: string) => {
    y -= 10;
    page.drawText(String(num), { x: left, y, size: 11, font, color: forestGreen });
    page.drawText(title, { x: left + 16, y, size: 11, font, color: forestGreen });
    y -= 6;
    page.drawLine({ start: { x: left, y }, end: { x: right, y }, thickness: 0.6, color: rule });
    y -= 16;
  };

  drawNumberedHeading(1, "Inspection notes");
  const notesText = (data.notes && data.notes.trim()) || "No additional notes recorded on site.";
  const noteLines = wrapText(notesText, font, 10.5, innerWidth);
  for (const line of noteLines) {
    if (y < 300) break;
    page.drawText(line || " ", { x: left, y, size: 10.5, font, color: ink });
    y -= 14;
  }
  y -= 4;

  // ---- Section 2 · Time summary (invoice-style table) ----
  drawNumberedHeading(2, "Time summary");

  const rowH = 26;
  const tableLeft = left;
  const tableRight = right;
  const valueX = tableRight - 8;
  const drawRow = (label: string, value: string, opts?: { shaded?: boolean; emphasis?: boolean }) => {
    if (opts?.shaded) {
      page.drawRectangle({
        x: tableLeft, y: y - rowH + 8,
        width: tableRight - tableLeft, height: rowH,
        color: zebra,
      });
    }
    page.drawText(label, { x: tableLeft + 12, y: y - 8, size: 11, font: opts?.emphasis ? bold : font, color: ink });
    const valStr = value || "—";
    page.drawText(valStr, {
      x: valueX - font.widthOfTextAtSize(valStr, 11),
      y: y - 8,
      size: 11,
      font: opts?.emphasis ? bold : font,
      color: ink,
    });
    y -= rowH;
  };

  drawRow("Start time", data.timeOn || "—");
  drawRow("End time", data.timeOff || "—", { shaded: true });
  drawRow("Travel time", formatHours(data.travelHours));
  // Inverted total row (matches "TOTAL DUE")
  page.drawRectangle({
    x: tableLeft, y: y - rowH + 8,
    width: tableRight - tableLeft, height: rowH,
    color: ink,
  });
  page.drawText("TOTAL HOURS", {
    x: tableLeft + 12, y: y - 8,
    size: 10, font: bold, color: rgb(1, 1, 1),
  });
  const totalStr = formatHours(data.totalHours);
  page.drawText(totalStr, {
    x: valueX - bold.widthOfTextAtSize(totalStr, 11),
    y: y - 8, size: 11, font: bold, color: rgb(1, 1, 1),
  });
  y -= rowH + 4;
  page.drawText("Minimum 4 hours applies per SFGEO booking policy.", {
    x: tableLeft, y, size: 8.5, font, color: meta,
  });
  y -= 16;

  // ---- Section 3 · Status & Signatures ----
  drawNumberedHeading(3, "Status & signatures");

  // Checkbox row
  const drawCheckbox = (x: number, cy: number, checked: boolean) => {
    page.drawRectangle({
      x, y: cy, width: 11, height: 11,
      borderColor: ink, borderWidth: 0.8,
    });
    if (checked) {
      page.drawLine({ start: { x: x + 2, y: cy + 5 }, end: { x: x + 4.5, y: cy + 2 }, thickness: 1.4, color: ink });
      page.drawLine({ start: { x: x + 4.5, y: cy + 2 }, end: { x: x + 9, y: cy + 9 }, thickness: 1.4, color: ink });
    }
  };
  const checkboxes: Array<{ label: string; checked: boolean }> = [
    { label: "Report to follow", checked: !!data.reportToFollow },
    { label: "Site Note", checked: !!data.siteNote },
    { label: "No report required", checked: !!data.noReportRequired },
  ];
  const colSpacing = innerWidth / 3;
  for (let i = 0; i < checkboxes.length; i++) {
    const cb = checkboxes[i];
    const cx = left + i * colSpacing;
    drawCheckbox(cx, y - 2, cb.checked);
    page.drawText(cb.label, { x: cx + 18, y, size: 10.5, font, color: ink });
  }
  y -= 28;

  // Signature boxes
  if (y < 180) y = 180;
  const sigBoxW = (innerWidth - 16) / 2;
  const sigBoxH = 84;
  const sigTop = y;
  const sigBottom = sigTop - sigBoxH;

  const drawSigBox = async (
    label: string,
    name: string,
    sigDataUrl: string | undefined,
    x: number
  ) => {
    page.drawText(label.toUpperCase(), { x, y: sigTop, size: 8, font, color: meta });
    page.drawRectangle({
      x, y: sigBottom,
      width: sigBoxW, height: sigBoxH - 16,
      borderColor: rule, borderWidth: 0.6,
    });
    const sig = await embedPngFromDataUrl(pdf, sigDataUrl);
    if (sig) {
      const dims = sig.scale(1);
      const targetW = sigBoxW - 12;
      const targetH = sigBoxH - 28;
      const ratio = Math.min(targetW / dims.width, targetH / dims.height);
      const w = dims.width * ratio;
      const h = dims.height * ratio;
      page.drawImage(sig, {
        x: x + (sigBoxW - w) / 2,
        y: sigBottom + ((sigBoxH - 16) - h) / 2,
        width: w, height: h,
      });
    }
    page.drawText(name || "", {
      x, y: sigBottom - 14, size: 9, font, color: ink,
    });
  };

  await drawSigBox("Inspector signature", data.inspectorName, data.inspectorSignature, left);
  await drawSigBox("Client signature", data.clientName, data.clientSignature, left + sigBoxW + 16);

  // ---- Footer band ----
  const footerY = 50;
  page.drawLine({
    start: { x: left, y: footerY + 18 }, end: { x: right, y: footerY + 18 },
    thickness: 0.5, color: rule,
  });
  page.drawText("AMAB Group Pty Ltd t/a SFGEO", { x: left, y: footerY, size: 8.5, font, color: forestGreen });
  const pageLabel = "Page 1 of 1";
  page.drawText(pageLabel, {
    x: left + innerWidth / 2 - font.widthOfTextAtSize(pageLabel, 8.5) / 2,
    y: footerY, size: 8.5, font, color: meta,
  });
  const site = "sfgeo.com.au";
  page.drawText(site, {
    x: right - font.widthOfTextAtSize(site, 8.5),
    y: footerY, size: 8.5, font, color: forestGreen,
  });

  return pdf.save();
}
