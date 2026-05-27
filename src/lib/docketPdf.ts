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

// Palette pulled from the SFGEO Tax Invoice Receipt master template
const BRAND_GREEN = rgb(0x23 / 255, 0x67 / 255, 0x34 / 255); // #236734
const INK = rgb(0x11 / 255, 0x11 / 255, 0x11 / 255);          // #111111
const LABEL = rgb(0x6b / 255, 0x6b / 255, 0x6b / 255);        // #6B6B6B
const RULE = rgb(0.78, 0.78, 0.78);
const FAINT = rgb(0.92, 0.92, 0.90);

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

  const M = 50; // margin
  const left = M;
  const right = width - M;
  const W = right - left; // content width

  // Drawing helpers
  const cellLineWidth = 0.6;
  const drawCellBorder = (x: number, y: number, w: number, h: number) => {
    page.drawRectangle({
      x, y, width: w, height: h,
      borderColor: RULE, borderWidth: cellLineWidth,
    });
  };
  const drawLabel = (text: string, x: number, y: number) => {
    page.drawText(text.toUpperCase(), {
      x, y, size: 7.5, font: bold, color: LABEL,
    });
  };
  const drawValue = (
    text: string,
    x: number,
    y: number,
    opts?: { bold?: boolean; size?: number; color?: typeof INK }
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
  const logoDims = logo.scale(1);
  const targetH = 52;
  const logoRatio = targetH / logoDims.height;
  const logoW = logoDims.width * logoRatio;
  page.drawImage(logo, {
    x: left, y: headerTop - targetH - 4,
    width: logoW, height: targetH,
  });

  // Brand text next to logo
  const brandX = left + logoW + 14;
  page.drawText("Solid Foundation Geotechnical", {
    x: brandX, y: headerTop - 20,
    size: 14, font: bold, color: INK,
  });
  page.drawText("Site Inspection Docket", {
    x: brandX, y: headerTop - 36,
    size: 11, font, color: LABEL,
  });

  // Docket-number box (top-right)
  const boxW = 168;
  const boxH = 56;
  const boxX = right - boxW;
  const boxY = headerTop - boxH - 4;
  page.drawRectangle({
    x: boxX, y: boxY, width: boxW, height: boxH,
    borderColor: BRAND_GREEN, borderWidth: 1.2,
  });
  // Green strip on top
  page.drawRectangle({
    x: boxX, y: boxY + boxH - 18, width: boxW, height: 18,
    color: BRAND_GREEN,
  });
  page.drawText("DOCKET No.", {
    x: boxX + 10, y: boxY + boxH - 13,
    size: 8.5, font: bold, color: rgb(1, 1, 1),
  });
  page.drawText(data.docketNumber, {
    x: boxX + 10, y: boxY + 14,
    size: 16, font: bold, color: INK,
  });

  // Heavy green rule beneath header
  const headerRuleY = headerBottom - 6;
  page.drawRectangle({
    x: left, y: headerRuleY,
    width: W, height: 2,
    color: BRAND_GREEN,
  });

  // ============================================================
  //                       GRID LAYOUT
  // ============================================================
  let cursorY = headerRuleY - 12;

  // Helper: draw a row of cells with labels + values
  type Cell = {
    label: string;
    lines: string[];
    boldFirstLine?: boolean;
  };
  const drawCellRow = (cells: { cell: Cell; width: number }[], rowH: number) => {
    let cursorX = left;
    const rowTop = cursorY;
    const rowBottom = rowTop - rowH;
    for (const { cell, width: cw } of cells) {
      drawCellBorder(cursorX, rowBottom, cw, rowH);
      drawLabel(cell.label, cursorX + 10, rowTop - 14);
      let textY = rowTop - 28;
      for (let i = 0; i < cell.lines.length; i++) {
        const useBold = i === 0 && (cell.boldFirstLine ?? true);
        drawValue(cell.lines[i], cursorX + 10, textY, { bold: useBold });
        textY -= 13;
      }
      cursorX += cw;
    }
    cursorY = rowBottom;
  };

  // ROW 1 — Date + Inspector (2 cells)
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

  // ROW 2 — Job type (full-width, supports long descriptions)
  {
    const jobTypeText = data.jobTypeDetail
      ? `${data.jobType} — ${data.jobTypeDetail}`
      : data.jobType;
    const jobLines = wrapText(jobTypeText, bold, 11, W - 20);
    const rowH = 28 + jobLines.length * 13 + 6;
    drawCellRow(
      [{ cell: { label: "Job type", lines: jobLines }, width: W }],
      rowH
    );
  }

  // ROW 2 — Client (left) + Site (right)
  {
    const w = W / 2;
    const clientLines = [
      data.clientName,
      ...(data.clientCompany ? [data.clientCompany] : []),
      data.clientEmail,
      data.clientPhone,
    ];
    const siteLines = wrapText(data.siteAddress, font, 11, w - 20);
    const rowH = Math.max(28 + clientLines.length * 13, 28 + siteLines.length * 13, 90);
    drawCellRow(
      [
        { cell: { label: "Client", lines: clientLines }, width: w },
        { cell: { label: "Site", lines: siteLines, boldFirstLine: false }, width: w },
      ],
      rowH
    );
  }

  // ROW 3 — Work performed / Notes (large cell)
  {
    const rowH = 230;
    const rowTop = cursorY;
    const rowBottom = rowTop - rowH;
    drawCellBorder(left, rowBottom, W, rowH);
    drawLabel("Work performed / Notes", left + 10, rowTop - 14);

    // Notes content
    const notesText = (data.notes && data.notes.trim()) || "No additional notes recorded on site.";
    const notesLines = wrapText(notesText, font, 11, W - 20);
    let ty = rowTop - 30;
    const notesEndY = rowBottom + 70; // leave bottom area for ruled lines
    let notesIdx = 0;
    for (; notesIdx < notesLines.length; notesIdx++) {
      if (ty < notesEndY) break;
      const line = notesLines[notesIdx];
      drawValue(line || " ", left + 10, ty, { bold: false });
      ty -= 14;
    }
    if (notesIdx < notesLines.length) {
      page.drawText("… (notes truncated)", {
        x: left + 10, y: ty,
        size: 9, font, color: LABEL,
      });
    }

    // Faint ruled lines beneath notes (like a paper docket pad)
    const ruleSpacing = 16;
    let ry = ty - 8;
    if (ry > notesEndY) ry = notesEndY + 6 + ruleSpacing * Math.floor((ry - notesEndY) / ruleSpacing);
    for (; ry > rowBottom + 14; ry -= ruleSpacing) {
      page.drawLine({
        start: { x: left + 10, y: ry },
        end: { x: left + W - 10, y: ry },
        thickness: 0.4, color: FAINT,
      });
    }

    cursorY = rowBottom;
  }

  // ROW 4 — Start, End, Travel, Total (4 cells, total emphasized)
  {
    const tw1 = W * 0.22;
    const tw2 = W * 0.22;
    const tw3 = W * 0.22;
    const tw4 = W - tw1 - tw2 - tw3;
    const rowH = 46;
    const rowTop = cursorY;
    const rowBottom = rowTop - rowH;

    let cx = left;
    const cellW = [tw1, tw2, tw3, tw4];
    const cellL = ["Start", "End", "Travel", "Total hours"];
    const cellV = [
      data.timeOn || "—",
      data.timeOff || "—",
      formatHours(data.travelHours),
      formatHours(data.totalHours),
    ];
    for (let i = 0; i < 4; i++) {
      drawCellBorder(cx, rowBottom, cellW[i], rowH);
      if (i === 3) {
        // Emphasised total cell
        page.drawRectangle({
          x: cx, y: rowBottom, width: cellW[i], height: rowH,
          color: INK,
        });
        page.drawText("TOTAL HOURS", {
          x: cx + 10, y: rowTop - 14,
          size: 7.5, font: bold, color: rgb(1, 1, 1),
        });
        page.drawText(cellV[i], {
          x: cx + 10, y: rowTop - 32,
          size: 15, font: bold, color: rgb(1, 1, 1),
        });
      } else {
        drawLabel(cellL[i], cx + 10, rowTop - 14);
        drawValue(cellV[i], cx + 10, rowTop - 32, { bold: true, size: 13 });
      }
      cx += cellW[i];
    }
    cursorY = rowBottom;
  }

  // ROW 5 — Status (single cell with three checkboxes)
  {
    const rowH = 36;
    const rowTop = cursorY;
    const rowBottom = rowTop - rowH;
    drawCellBorder(left, rowBottom, W, rowH);
    drawLabel("Status", left + 10, rowTop - 14);

    const drawCheck = (cx: number, cy: number, checked: boolean) => {
      page.drawRectangle({
        x: cx, y: cy, width: 11, height: 11,
        borderColor: INK, borderWidth: 0.8,
      });
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

  // ROW 6 — Signatures (two cells)
  {
    const w = W / 2;
    const rowH = 100;
    const rowTop = cursorY;
    const rowBottom = rowTop - rowH;

    const drawSigCell = async (x: number, label: string, name: string, sigDataUrl?: string) => {
      drawCellBorder(x, rowBottom, w, rowH);
      drawLabel(label, x + 10, rowTop - 14);

      const sigAreaY = rowBottom + 22;
      const sigAreaH = rowH - 50;
      const sigAreaW = w - 20;

      // Faint underline above the printed name
      page.drawLine({
        start: { x: x + 10, y: rowBottom + 22 },
        end: { x: x + w - 10, y: rowBottom + 22 },
        thickness: 0.4, color: FAINT,
      });

      const sig = await embedPngFromDataUrl(pdf, sigDataUrl);
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
      page.drawText(name || "—", {
        x: x + 10, y: rowBottom + 8,
        size: 10, font, color: INK,
      });
    };

    await drawSigCell(left, "Inspector signature", data.inspectorName, data.inspectorSignature);
    await drawSigCell(left + w, "Client signature", data.clientName, data.clientSignature);
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
