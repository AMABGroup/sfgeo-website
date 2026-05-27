import { readFile } from "fs/promises";
import path from "path";
import { PDFDocument, rgb, PDFPage, PDFFont } from "pdf-lib";
import fontkit from "@pdf-lib/fontkit";

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

// Exact palette pulled from the SFGEO Tax Invoice Receipt master template
const BRAND_GREEN = rgb(0x23 / 255, 0x67 / 255, 0x34 / 255); // #236734
const INK = rgb(0x11 / 255, 0x11 / 255, 0x11 / 255);          // #111111
const LABEL = rgb(0x6b / 255, 0x6b / 255, 0x6b / 255);        // #6B6B6B
const RULE = rgb(0.86, 0.86, 0.86);
const WHITE = rgb(1, 1, 1);

const ASSET_DIR = path.join(process.cwd(), "public", "docket");

async function loadAsset(file: string): Promise<Uint8Array> {
  const buf = await readFile(path.join(ASSET_DIR, file));
  return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength);
}

function wrapText(text: string, font: PDFFont, size: number, maxWidth: number): string[] {
  const paragraphs = text.split(/\r?\n/);
  const out: string[] = [];
  for (const para of paragraphs) {
    if (!para.trim()) { out.push(""); continue; }
    const words = para.split(/\s+/);
    let line = "";
    for (const word of words) {
      const test = line ? `${line} ${word}` : word;
      if (font.widthOfTextAtSize(test, size) > maxWidth) {
        if (line) out.push(line);
        line = word;
      } else line = test;
    }
    if (line) out.push(line);
  }
  return out;
}

async function embedPngFromDataUrl(pdf: PDFDocument, dataUrl?: string) {
  if (!dataUrl || !dataUrl.startsWith("data:image/png;base64,")) return null;
  const base64 = dataUrl.split(",")[1];
  const bytes = Uint8Array.from(Buffer.from(base64, "base64"));
  try { return await pdf.embedPng(bytes); } catch { return null; }
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
  const fixed = num.toFixed(num % 1 === 0 ? 0 : 2).replace(/\.00$/, "").replace(/0$/, "");
  return `${fixed} hrs`;
}

export async function buildDocketPdf(data: DocketData): Promise<Uint8Array> {
  const pdf = await PDFDocument.create();
  pdf.registerFontkit(fontkit);

  const [regularBytes, boldBytes, logoBytes] = await Promise.all([
    loadAsset("fonts/Carlito-Regular.ttf"),
    loadAsset("fonts/Carlito-Bold.ttf"),
    loadAsset("sfgeo-logo.png"),
  ]);

  const font = await pdf.embedFont(regularBytes);
  const bold = await pdf.embedFont(boldBytes);
  const logo = await pdf.embedPng(logoBytes);

  const page: PDFPage = pdf.addPage([595.28, 841.89]); // A4 portrait
  const { width, height } = page.getSize();

  // Margins approximate the Word template (~25mm)
  const left = 71;
  const right = width - 71;
  const innerWidth = right - left;
  const topMargin = 64;
  const bottomMargin = 56;
  let y = height - topMargin;

  // ---------------- HEADER REFERENCE LINE + LOGO ----------------
  const headerRef = `${data.docketNumber}.   Inspection Docket`;
  page.drawText(headerRef, { x: left, y, size: 9, font, color: LABEL });

  // Logo in top-right corner
  const logoSize = 56;
  const logoDims = logo.scale(1);
  const logoRatio = Math.min(logoSize / logoDims.width, logoSize / logoDims.height);
  const logoW = logoDims.width * logoRatio;
  const logoH = logoDims.height * logoRatio;
  page.drawImage(logo, {
    x: right - logoW,
    y: y - logoH + 12,
    width: logoW, height: logoH,
  });

  y -= 56;

  // ---------------- LEAD-IN (project / job-type detail) ----------------
  const leadText = data.jobTypeDetail?.trim() || data.jobType;
  page.drawText(leadText, { x: left, y, size: 13, font, color: INK });
  y -= 36;

  // ---------------- BIG TITLE ----------------
  page.drawText("Inspection Docket", { x: left, y, size: 28, font: bold, color: INK });
  y -= 22;

  // ---------------- SUBTITLE ----------------
  const subtitle = data.jobTypeDetail
    ? `${data.siteAddress}  ·  ${data.jobType}`
    : data.siteAddress;
  const subtitleLines = wrapText(subtitle, font, 11, innerWidth);
  for (const line of subtitleLines) {
    page.drawText(line, { x: left, y, size: 11, font, color: INK });
    y -= 14;
  }
  y -= 4;

  page.drawLine({ start: { x: left, y }, end: { x: right, y }, thickness: 0.6, color: RULE });
  y -= 24;

  // ---------------- META BLOCK (Issued To / Site / Project / ...) ----------------
  const metaLabelCol = 130;
  const drawMetaRow = (label: string, lines: string[]) => {
    page.drawText(label.toUpperCase(), {
      x: left, y, size: 9, font, color: LABEL,
    });
    let lineY = y;
    for (let i = 0; i < lines.length; i++) {
      const useBold = i === 0;
      page.drawText(lines[i], {
        x: left + metaLabelCol,
        y: lineY,
        size: 11,
        font: useBold ? bold : font,
        color: INK,
      });
      lineY -= 13;
    }
    y = lineY - 2;
  };

  const contactLine = `${data.clientEmail}   ·   ${data.clientPhone}`;
  const issuedTo = [
    data.clientName,
    ...(data.clientCompany ? [data.clientCompany] : []),
    contactLine,
  ];
  drawMetaRow("Issued To", issuedTo);
  drawMetaRow("Site", [data.siteAddress]);
  // "Project" is shown only when distinct from Job Type
  const projectLine = data.jobTypeDetail?.trim();
  if (projectLine && projectLine !== data.jobType) {
    drawMetaRow("Project", [projectLine]);
  }
  drawMetaRow("Docket No", [data.docketNumber]);
  drawMetaRow("Job Type", [data.jobType]);
  drawMetaRow("Inspector", [data.inspectorName]);
  drawMetaRow("Date", [formatDateLong(data.inspectionDate)]);
  y -= 4;

  // ---------------- NUMBERED SECTION HEADING ----------------
  const drawNumberedHeading = (num: number, title: string) => {
    y -= 8;
    page.drawText(String(num), { x: left, y, size: 13, font, color: BRAND_GREEN });
    page.drawText(title, { x: left + 22, y, size: 13, font, color: BRAND_GREEN });
    y -= 8;
    page.drawLine({ start: { x: left, y }, end: { x: right, y }, thickness: 0.6, color: RULE });
    y -= 16;
  };

  // Anchor positions for predictable bottom layout
  const SECTION_3_TOP_Y = 220;         // top of "3 Status & signatures" heading
  const SECTION_2_TOP_Y = 388;         // top of "2 Time summary" heading
  // Notes (section 1) can flow down to SECTION_2_TOP_Y

  // ---------------- SECTION 1 · INSPECTION NOTES ----------------
  drawNumberedHeading(1, "Inspection notes");
  const notesText = (data.notes && data.notes.trim()) || "No additional notes recorded on site.";
  const noteLines = wrapText(notesText, font, 11, innerWidth);
  let truncated = false;
  for (const line of noteLines) {
    if (y - 15 < SECTION_2_TOP_Y) { truncated = true; break; }
    page.drawText(line || " ", { x: left, y, size: 11, font, color: INK });
    y -= 15;
  }
  if (truncated) {
    page.drawText("… (notes truncated for one-page docket)", {
      x: left, y, size: 9, font, color: LABEL,
    });
  }
  y = SECTION_2_TOP_Y + 8; // anchor for section 2

  // ---------------- SECTION 2 · TIME SUMMARY ----------------
  drawNumberedHeading(2, "Time summary");
  const rowH = 26;
  const valueX = right - 8;
  const drawRow = (label: string, value: string, opts?: { shaded?: boolean }) => {
    if (opts?.shaded) {
      page.drawRectangle({
        x: left, y: y - rowH + 8,
        width: innerWidth, height: rowH,
        color: rgb(0.965, 0.965, 0.945),
      });
    }
    page.drawText(label, { x: left + 12, y: y - 8, size: 11, font, color: INK });
    const s = value || "—";
    page.drawText(s, {
      x: valueX - font.widthOfTextAtSize(s, 11),
      y: y - 8, size: 11, font, color: INK,
    });
    y -= rowH;
  };

  drawRow("Start time", data.timeOn || "—");
  drawRow("End time", data.timeOff || "—", { shaded: true });
  drawRow("Travel time", formatHours(data.travelHours));

  // Inverted TOTAL HOURS row (mirrors PAID row on invoice)
  page.drawRectangle({
    x: left, y: y - rowH + 8,
    width: innerWidth, height: rowH,
    color: INK,
  });
  page.drawText("TOTAL HOURS", { x: left + 12, y: y - 8, size: 10, font: bold, color: WHITE });
  const totalStr = formatHours(data.totalHours);
  page.drawText(totalStr, {
    x: valueX - bold.widthOfTextAtSize(totalStr, 11),
    y: y - 8, size: 11, font: bold, color: WHITE,
  });
  y -= rowH + 6;

  page.drawText("Minimum 4 hours applies per SFGEO booking policy.", {
    x: left, y, size: 9, font, color: LABEL,
  });
  y -= 18;

  // ---------------- SECTION 3 · STATUS & SIGNATURES ----------------
  y = SECTION_3_TOP_Y + 8;
  drawNumberedHeading(3, "Status & signatures");

  const drawCheckbox = (x: number, cy: number, checked: boolean) => {
    page.drawRectangle({ x, y: cy, width: 11, height: 11, borderColor: INK, borderWidth: 0.8 });
    if (checked) {
      page.drawLine({ start: { x: x + 1.6, y: cy + 5 }, end: { x: x + 4.5, y: cy + 2 }, thickness: 1.5, color: INK });
      page.drawLine({ start: { x: x + 4.5, y: cy + 2 }, end: { x: x + 9.5, y: cy + 9 }, thickness: 1.5, color: INK });
    }
  };
  const checks: Array<{ label: string; checked: boolean }> = [
    { label: "Report to follow", checked: !!data.reportToFollow },
    { label: "Site Note", checked: !!data.siteNote },
    { label: "No report required", checked: !!data.noReportRequired },
  ];
  const colW = innerWidth / 3;
  for (let i = 0; i < checks.length; i++) {
    const cx = left + i * colW;
    drawCheckbox(cx, y - 2, checks[i].checked);
    page.drawText(checks[i].label, { x: cx + 18, y, size: 11, font, color: INK });
  }
  y -= 36;

  // Signature boxes
  const sigBoxW = (innerWidth - 16) / 2;
  const sigBoxH = 72;
  const sigTop = y;
  const sigBottom = sigTop - sigBoxH;

  const drawSigBox = async (label: string, name: string, sigDataUrl: string | undefined, x: number) => {
    page.drawText(label.toUpperCase(), { x, y: sigTop, size: 9, font, color: LABEL });
    page.drawRectangle({
      x, y: sigBottom,
      width: sigBoxW, height: sigBoxH - 16,
      borderColor: RULE, borderWidth: 0.6,
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
    page.drawText(name || "", { x, y: sigBottom - 14, size: 9.5, font, color: INK });
  };

  await drawSigBox("Inspector signature", data.inspectorName, data.inspectorSignature, left);
  await drawSigBox("Client signature", data.clientName, data.clientSignature, left + sigBoxW + 16);

  // ---------------- FOOTER ----------------
  const footerY = bottomMargin - 28;
  page.drawLine({
    start: { x: left, y: footerY + 24 }, end: { x: right, y: footerY + 24 },
    thickness: 0.5, color: RULE,
  });
  page.drawText("AMAB Group Pty Ltd t/a SFGEO  ·  ABN 54 686 815 252", {
    x: left, y: footerY + 8, size: 9, font, color: BRAND_GREEN,
  });
  const pageLabel = "Page 1 of 1";
  page.drawText(pageLabel, {
    x: left + innerWidth / 2 - font.widthOfTextAtSize(pageLabel, 9) / 2,
    y: footerY + 8, size: 9, font, color: LABEL,
  });
  const site = "sfgeo.com.au";
  page.drawText(site, {
    x: right - font.widthOfTextAtSize(site, 9),
    y: footerY + 8, size: 9, font, color: BRAND_GREEN,
  });
  page.drawText(
    "This document records an on-site inspection performed by SFGEO for the parties named above.",
    { x: left, y: footerY - 4, size: 8, font, color: LABEL }
  );

  return pdf.save();
}
