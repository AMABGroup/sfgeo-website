import { readFile } from "fs/promises";
import path from "path";
import { PDFDocument, rgb, PDFPage, PDFFont, PDFImage } from "pdf-lib";
import fontkit from "@pdf-lib/fontkit";

export type DocketData = {
  docketNumber: string;       // "{projectRef}-{visit}" e.g. SFG-2026-037-01
  projectRef: string;         // "SFG-2026-037"
  visitNumber: string;        // "01"
  projectName: string;
  inspectionDate: string;
  inspectorName: string;
  jobType: string;
  jobTypeDetail?: string;

  clientName: string;
  clientCompany?: string;
  clientEmail: string;
  clientPhone: string;

  siteContactName: string;
  siteContactPhone: string;

  siteAddress: string;

  timeOn: string;
  timeOff: string;
  travelHours?: string;
  totalHours?: string;

  notes: string;

  reportToFollow?: boolean;
  siteNote?: boolean;
  noReportRequired?: boolean;

  siteContactSignature?: string; // data URL from on-site sig pad
};

// Palette from the SFGEO Tax Invoice Receipt master template
const BRAND_GREEN = rgb(0x23 / 255, 0x67 / 255, 0x34 / 255); // #236734
const INK = rgb(0x11 / 255, 0x11 / 255, 0x11 / 255);          // #111111
const LABEL = rgb(0x6b / 255, 0x6b / 255, 0x6b / 255);        // #6B6B6B
const RULE = rgb(0.78, 0.78, 0.78);
const FAINT = rgb(0.92, 0.92, 0.90);

const ASSET_DIR = path.join(process.cwd(), "public", "docket");
const PRIVATE_ASSET_DIR = path.join(process.cwd(), "src", "lib", "assets");

async function loadAsset(file: string): Promise<Uint8Array> {
  const buf = await readFile(path.join(ASSET_DIR, file));
  return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength);
}

async function loadPrivateAssetOpt(file: string): Promise<Uint8Array | null> {
  try {
    const buf = await readFile(path.join(PRIVATE_ASSET_DIR, file));
    return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength);
  } catch {
    return null;
  }
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
  // Inspector signature (Alli) — optional, embedded once dropped in private dir
  const inspectorSigBytes = await loadPrivateAssetOpt("inspector-signature.png");

  const font = await pdf.embedFont(regularBytes);
  const bold = await pdf.embedFont(boldBytes);
  const logo = await pdf.embedPng(logoBytes);
  let inspectorSig: PDFImage | null = null;
  if (inspectorSigBytes) {
    try { inspectorSig = await pdf.embedPng(inspectorSigBytes); } catch {}
  }

  const page: PDFPage = pdf.addPage([595.28, 841.89]); // A4
  const { width, height } = page.getSize();

  const M = 50;
  const left = M;
  const right = width - M;
  const W = right - left;

  // Cell helpers
  const drawCellBorder = (x: number, y: number, w: number, h: number) => {
    page.drawRectangle({ x, y, width: w, height: h, borderColor: RULE, borderWidth: 0.6 });
  };
  const drawLabel = (text: string, x: number, y: number) => {
    page.drawText(text.toUpperCase(), { x, y, size: 7.5, font: bold, color: LABEL });
  };
  const drawValue = (
    text: string,
    x: number,
    y: number,
    opts?: { bold?: boolean; size?: number; color?: typeof INK },
  ) => {
    page.drawText(text || "—", {
      x, y, size: opts?.size ?? 11,
      font: opts?.bold ? bold : font,
      color: opts?.color ?? INK,
    });
  };

  // ============================================================
  //                          HEADER
  // ============================================================
  const headerTop = height - M;
  const headerH = 64;
  const headerBottom = headerTop - headerH;

  // Logo
  const targetH = 52;
  const logoDims = logo.scale(1);
  const logoRatio = targetH / logoDims.height;
  const logoW = logoDims.width * logoRatio;
  page.drawImage(logo, { x: left, y: headerTop - targetH - 4, width: logoW, height: targetH });

  // Brand text
  const brandX = left + logoW + 14;
  page.drawText("Solid Foundation Geotechnical", { x: brandX, y: headerTop - 20, size: 14, font: bold, color: INK });
  page.drawText("Site Inspection Docket", { x: brandX, y: headerTop - 36, size: 11, font, color: LABEL });

  // Project ref + visit box (top-right)
  const boxW = 200;
  const boxH = 56;
  const boxX = right - boxW;
  const boxY = headerTop - boxH - 4;
  page.drawRectangle({ x: boxX, y: boxY, width: boxW, height: boxH, borderColor: BRAND_GREEN, borderWidth: 1.2 });
  // green strip
  page.drawRectangle({ x: boxX, y: boxY + boxH - 18, width: boxW, height: 18, color: BRAND_GREEN });
  page.drawText("PROJECT REF", { x: boxX + 10, y: boxY + boxH - 13, size: 8.5, font: bold, color: rgb(1, 1, 1) });
  page.drawText("Visit", { x: boxX + boxW - 70, y: boxY + boxH - 13, size: 8.5, font: bold, color: rgb(1, 1, 1) });
  // project ref value
  page.drawText(data.projectRef, { x: boxX + 10, y: boxY + 14, size: 14, font: bold, color: INK });
  // visit number (right side, divider line)
  page.drawLine({
    start: { x: boxX + boxW - 76, y: boxY + 6 },
    end:   { x: boxX + boxW - 76, y: boxY + boxH - 22 },
    thickness: 0.5, color: RULE,
  });
  page.drawText(data.visitNumber, { x: boxX + boxW - 50, y: boxY + 14, size: 14, font: bold, color: INK });

  // Heavy green rule beneath header
  const headerRuleY = headerBottom - 6;
  page.drawRectangle({ x: left, y: headerRuleY, width: W, height: 2, color: BRAND_GREEN });

  // ============================================================
  //                       GRID LAYOUT
  // ============================================================
  let cursorY = headerRuleY - 12;

  type Cell = { label: string; lines: string[]; boldFirstLine?: boolean };
  const drawCellRow = (cells: { cell: Cell; width: number }[], rowH: number) => {
    let cx = left;
    const rowTop = cursorY;
    const rowBottom = rowTop - rowH;
    for (const { cell, width: cw } of cells) {
      drawCellBorder(cx, rowBottom, cw, rowH);
      drawLabel(cell.label, cx + 10, rowTop - 14);
      let ty = rowTop - 28;
      for (let i = 0; i < cell.lines.length; i++) {
        const useBold = i === 0 && (cell.boldFirstLine ?? true);
        drawValue(cell.lines[i], cx + 10, ty, { bold: useBold });
        ty -= 13;
      }
      cx += cw;
    }
    cursorY = rowBottom;
  };

  // ROW 1 — Project name (full width — sets context immediately)
  {
    const nameLines = wrapText(data.projectName, bold, 12, W - 20);
    const rowH = 28 + nameLines.length * 14 + 4;
    drawCellRow([{ cell: { label: "Project name", lines: nameLines.slice(0, 2) }, width: W }], rowH);
  }

  // ROW 2 — Date + Inspector (50/50)
  {
    const w = W / 2;
    drawCellRow(
      [
        { cell: { label: "Date of inspection", lines: [formatDateLong(data.inspectionDate)] }, width: w },
        { cell: { label: "Inspector", lines: [data.inspectorName] }, width: w },
      ],
      44
    );
  }

  // ROW 3 — Inspection type (full-width)
  {
    const typeText = data.jobTypeDetail ? `${data.jobType} — ${data.jobTypeDetail}` : data.jobType;
    const lines = wrapText(typeText, bold, 11, W - 20);
    const rowH = 28 + lines.length * 13 + 4;
    drawCellRow([{ cell: { label: "Inspection type", lines }, width: W }], rowH);
  }

  // ROW 4 — Client + Site (50/50)
  {
    const w = W / 2;
    const clientLines = [
      data.clientName,
      ...(data.clientCompany ? [data.clientCompany] : []),
      data.clientEmail,
      data.clientPhone || "",
    ].filter(Boolean);
    const siteLines = wrapText(data.siteAddress, font, 11, w - 20);
    const rowH = Math.max(28 + clientLines.length * 13, 28 + siteLines.length * 13, 86);
    drawCellRow(
      [
        { cell: { label: "Client (engaging party)", lines: clientLines }, width: w },
        { cell: { label: "Site", lines: siteLines, boldFirstLine: false }, width: w },
      ],
      rowH
    );
  }

  // ROW 5 — Site contact (full width, compact)
  {
    const contactLines: string[] = [];
    if (data.siteContactName) {
      contactLines.push(data.siteContactName + (data.siteContactPhone ? `   ·   ${data.siteContactPhone}` : ""));
    } else {
      contactLines.push("—");
    }
    drawCellRow(
      [{ cell: { label: "Site contact (on-site signatory)", lines: contactLines, boldFirstLine: !!data.siteContactName }, width: W }],
      40
    );
  }

  // ROW 6 — Observations (5–6 lines worth)
  {
    const rowH = 124;
    const rowTop = cursorY;
    const rowBottom = rowTop - rowH;
    drawCellBorder(left, rowBottom, W, rowH);
    drawLabel("Observations", left + 10, rowTop - 14);

    const notesText = (data.notes && data.notes.trim()) || "No additional observations recorded on site.";
    const noteLines = wrapText(notesText, font, 10.5, W - 20);
    let ty = rowTop - 30;
    const maxNoteY = rowBottom + 14;
    let drawn = 0;
    for (const line of noteLines) {
      if (ty < maxNoteY) break;
      drawValue(line || " ", left + 10, ty, { size: 10.5 });
      ty -= 14;
      drawn++;
    }
    if (drawn < noteLines.length) {
      page.drawText("… (truncated)", { x: left + 10, y: ty, size: 9, font, color: LABEL });
    }
    cursorY = rowBottom;
  }

  // ROW 7 — Start / End / Travel / TOTAL HOURS (inverted)
  {
    const wEach = W / 4;
    const rowH = 46;
    const rowTop = cursorY;
    const rowBottom = rowTop - rowH;
    let cx = left;
    const cellL = ["Start", "End", "Travel", "Total hours"];
    const cellV = [
      data.timeOn || "—",
      data.timeOff || "—",
      formatHours(data.travelHours),
      formatHours(data.totalHours),
    ];
    for (let i = 0; i < 4; i++) {
      drawCellBorder(cx, rowBottom, wEach, rowH);
      if (i === 3) {
        page.drawRectangle({ x: cx, y: rowBottom, width: wEach, height: rowH, color: INK });
        page.drawText("TOTAL HOURS", { x: cx + 10, y: rowTop - 14, size: 7.5, font: bold, color: rgb(1, 1, 1) });
        page.drawText(cellV[i], { x: cx + 10, y: rowTop - 32, size: 15, font: bold, color: rgb(1, 1, 1) });
      } else {
        drawLabel(cellL[i], cx + 10, rowTop - 14);
        drawValue(cellV[i], cx + 10, rowTop - 32, { bold: true, size: 13 });
      }
      cx += wEach;
    }
    cursorY = rowBottom;
  }

  // ROW 8 — Status checkboxes
  {
    const rowH = 36;
    const rowTop = cursorY;
    const rowBottom = rowTop - rowH;
    drawCellBorder(left, rowBottom, W, rowH);
    drawLabel("Status", left + 10, rowTop - 14);

    const drawCheck = (cx: number, cy: number, checked: boolean) => {
      page.drawRectangle({ x: cx, y: cy, width: 11, height: 11, borderColor: INK, borderWidth: 0.8 });
      if (checked) {
        page.drawLine({ start: { x: cx + 1.6, y: cy + 5 }, end: { x: cx + 4.5, y: cy + 2 }, thickness: 1.5, color: INK });
        page.drawLine({ start: { x: cx + 4.5, y: cy + 2 }, end: { x: cx + 9.5, y: cy + 9 }, thickness: 1.5, color: INK });
      }
    };
    const checks = [
      { label: "Report to follow", checked: !!data.reportToFollow },
      { label: "Site Note", checked: !!data.siteNote },
      { label: "No report required", checked: !!data.noReportRequired },
    ];
    let cbX = left + 130;
    const cbY = rowTop - 22;
    for (const c of checks) {
      drawCheck(cbX, cbY, c.checked);
      page.drawText(c.label, { x: cbX + 16, y: cbY + 2, size: 10.5, font, color: INK });
      cbX += 130;
    }
    cursorY = rowBottom;
  }

  // ROW 9 — Signatures: Site contact (left, drawn live) + Engineer sign-off (right, auto)
  {
    const w = W / 2;
    const rowH = 110;
    const rowTop = cursorY;
    const rowBottom = rowTop - rowH;

    // LEFT: site contact signature (drawn live)
    {
      const x = left;
      drawCellBorder(x, rowBottom, w, rowH);
      drawLabel("Site contact signature", x + 10, rowTop - 14);

      const sigAreaH = rowH - 50;
      const sigAreaW = w - 20;
      const sigAreaY = rowBottom + 24;

      page.drawLine({
        start: { x: x + 10, y: rowBottom + 24 },
        end: { x: x + w - 10, y: rowBottom + 24 },
        thickness: 0.4, color: FAINT,
      });

      const sig = await embedPngFromDataUrl(pdf, data.siteContactSignature);
      if (sig) {
        const dims = sig.scale(1);
        const ratio = Math.min(sigAreaW / dims.width, sigAreaH / dims.height);
        const dw = dims.width * ratio;
        const dh = dims.height * ratio;
        page.drawImage(sig, {
          x: x + (w - dw) / 2,
          y: sigAreaY + (sigAreaH - dh) / 2,
          width: dw, height: dh,
        });
      }
      page.drawText(data.siteContactName || "—", { x: x + 10, y: rowBottom + 8, size: 10, font, color: INK });
    }

    // RIGHT: engineer sign-off (Alli, auto)
    {
      const x = left + w;
      drawCellBorder(x, rowBottom, w, rowH);
      drawLabel("Engineer sign-off", x + 10, rowTop - 14);

      const sigAreaH = rowH - 60;
      const sigAreaW = w - 24;
      const sigAreaY = rowBottom + 34;

      // Signature image area
      if (inspectorSig) {
        const dims = inspectorSig.scale(1);
        const ratio = Math.min(sigAreaW / dims.width, sigAreaH / dims.height);
        const dw = dims.width * ratio;
        const dh = dims.height * ratio;
        page.drawImage(inspectorSig, {
          x: x + (w - dw) / 2,
          y: sigAreaY + (sigAreaH - dh) / 2,
          width: dw, height: dh,
        });
      } else {
        // placeholder until signature PNG is dropped
        page.drawText("(signature on file)", {
          x: x + (w - font.widthOfTextAtSize("(signature on file)", 9.5)) / 2,
          y: sigAreaY + sigAreaH / 2,
          size: 9.5, font, color: LABEL,
        });
      }
      // Line above name
      page.drawLine({
        start: { x: x + 10, y: rowBottom + 32 },
        end: { x: x + w - 10, y: rowBottom + 32 },
        thickness: 0.4, color: FAINT,
      });
      page.drawText("Alli Atmar", { x: x + 10, y: rowBottom + 18, size: 11, font: bold, color: INK });
      page.drawText("Director  |  Principal Engineer", { x: x + 10, y: rowBottom + 6, size: 9.5, font, color: LABEL });
    }

    cursorY = rowBottom;
  }

  // ============================================================
  //                         FOOTER
  // ============================================================
  const footerY = M;
  page.drawText("AMAB Group Pty Ltd t/a SFGEO  ·  ABN 54 686 815 252  ·  0423 483 555", {
    x: left, y: footerY, size: 8.5, font, color: BRAND_GREEN,
  });
  const site = "sfgeo.com.au";
  page.drawText(site, {
    x: right - font.widthOfTextAtSize(site, 8.5),
    y: footerY, size: 8.5, font, color: BRAND_GREEN,
  });
  page.drawText(
    `Issued ${formatDateLong(new Date().toISOString().slice(0, 10))}  ·  Digital docket — retained on file by SFGEO.`,
    { x: left, y: footerY - 12, size: 7.5, font, color: LABEL }
  );

  return pdf.save();
}
