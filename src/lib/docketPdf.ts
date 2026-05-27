import { PDFDocument, StandardFonts, rgb, PDFPage, PDFFont } from "pdf-lib";

export type DocketData = {
  docketNumber: string;
  inspectionDate: string;
  inspectorName: string;
  jobType: string;
  clientName: string;
  clientCompany?: string;
  clientEmail: string;
  clientPhone: string;
  siteAddress: string;
  timeOn: string;
  timeOff: string;
  notes: string;
  inspectorSignature?: string;
  clientSignature?: string;
};

const forestGreen = rgb(45 / 255, 90 / 255, 58 / 255);
const black = rgb(0.04, 0.04, 0.04);
const grey = rgb(0.4, 0.4, 0.4);
const lightGrey = rgb(0.9, 0.9, 0.9);

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

export async function buildDocketPdf(data: DocketData): Promise<Uint8Array> {
  const pdf = await PDFDocument.create();
  const font = await pdf.embedFont(StandardFonts.Helvetica);
  const bold = await pdf.embedFont(StandardFonts.HelveticaBold);

  const page: PDFPage = pdf.addPage([595.28, 841.89]); // A4 portrait
  const { width, height } = page.getSize();
  const margin = 48;
  let y = height - margin;

  // Header bar
  page.drawRectangle({ x: 0, y: height - 90, width, height: 90, color: forestGreen });
  page.drawText("SFGEO", {
    x: margin,
    y: height - 50,
    size: 22,
    font: bold,
    color: rgb(1, 1, 1),
  });
  page.drawText("Solid Foundation Geotechnical", {
    x: margin,
    y: height - 70,
    size: 10,
    font,
    color: rgb(1, 1, 1),
  });
  page.drawText("INSPECTION DOCKET", {
    x: width - margin - bold.widthOfTextAtSize("INSPECTION DOCKET", 14),
    y: height - 50,
    size: 14,
    font: bold,
    color: rgb(1, 1, 1),
  });
  const docketLabel = `# ${data.docketNumber}`;
  page.drawText(docketLabel, {
    x: width - margin - font.widthOfTextAtSize(docketLabel, 10),
    y: height - 70,
    size: 10,
    font,
    color: rgb(1, 1, 1),
  });

  y = height - 120;

  const drawSectionHeading = (label: string) => {
    page.drawText(label.toUpperCase(), {
      x: margin,
      y,
      size: 9,
      font: bold,
      color: forestGreen,
    });
    y -= 6;
    page.drawLine({
      start: { x: margin, y },
      end: { x: width - margin, y },
      thickness: 0.5,
      color: lightGrey,
    });
    y -= 14;
  };

  const drawField = (label: string, value: string, col: 0 | 1 = 0) => {
    const colWidth = (width - margin * 2 - 16) / 2;
    const x = col === 0 ? margin : margin + colWidth + 16;
    page.drawText(label.toUpperCase(), {
      x,
      y,
      size: 7,
      font: bold,
      color: grey,
    });
    page.drawText(value || "—", {
      x,
      y: y - 12,
      size: 11,
      font,
      color: black,
    });
    if (col === 1) y -= 32;
  };

  const drawRowOfTwo = (
    l1: string,
    v1: string,
    l2: string,
    v2: string
  ) => {
    drawField(l1, v1, 0);
    drawField(l2, v2, 1);
  };

  // Job header
  drawSectionHeading("Job details");
  drawRowOfTwo("Inspection date", data.inspectionDate, "Job type", data.jobType);
  drawRowOfTwo("Inspector", data.inspectorName, "Time on / Time off", `${data.timeOn || "—"}  →  ${data.timeOff || "—"}`);
  y -= 4;

  // Client details
  drawSectionHeading("Client");
  drawRowOfTwo("Name", data.clientName, "Company", data.clientCompany || "—");
  drawRowOfTwo("Email", data.clientEmail, "Phone", data.clientPhone);
  y -= 4;

  // Site
  drawSectionHeading("Site");
  page.drawText("ADDRESS", { x: margin, y, size: 7, font: bold, color: grey });
  page.drawText(data.siteAddress || "—", {
    x: margin,
    y: y - 12,
    size: 11,
    font,
    color: black,
  });
  y -= 32;

  // Notes
  drawSectionHeading("Notes");
  const noteLines = wrapText(data.notes || "—", font, 10.5, width - margin * 2);
  for (const line of noteLines) {
    if (y < margin + 200) break; // leave space for signatures
    page.drawText(line || " ", { x: margin, y, size: 10.5, font, color: black });
    y -= 14;
  }
  y -= 8;

  // Signatures
  if (y < margin + 170) y = margin + 170;
  drawSectionHeading("Signatures");

  const sigBoxWidth = (width - margin * 2 - 16) / 2;
  const sigBoxHeight = 90;
  const sigTop = y;
  const sigBottom = sigTop - sigBoxHeight;

  const drawSigBox = async (
    label: string,
    name: string,
    sigDataUrl: string | undefined,
    x: number
  ) => {
    page.drawText(label.toUpperCase(), {
      x,
      y: sigTop,
      size: 7,
      font: bold,
      color: grey,
    });
    page.drawRectangle({
      x,
      y: sigBottom,
      width: sigBoxWidth,
      height: sigBoxHeight - 16,
      borderColor: lightGrey,
      borderWidth: 0.5,
    });
    const sig = await embedPngFromDataUrl(pdf, sigDataUrl);
    if (sig) {
      const sigDims = sig.scale(1);
      const targetW = sigBoxWidth - 8;
      const targetH = sigBoxHeight - 24;
      const ratio = Math.min(targetW / sigDims.width, targetH / sigDims.height);
      const w = sigDims.width * ratio;
      const h = sigDims.height * ratio;
      page.drawImage(sig, {
        x: x + (sigBoxWidth - w) / 2,
        y: sigBottom + ((sigBoxHeight - 16) - h) / 2,
        width: w,
        height: h,
      });
    }
    page.drawText(name || "", {
      x,
      y: sigBottom - 14,
      size: 9,
      font,
      color: black,
    });
  };

  await drawSigBox("Inspector signature", data.inspectorName, data.inspectorSignature, margin);
  await drawSigBox("Client signature", data.clientName, data.clientSignature, margin + sigBoxWidth + 16);

  // Footer
  const footerY = 36;
  page.drawLine({
    start: { x: margin, y: footerY + 16 },
    end: { x: width - margin, y: footerY + 16 },
    thickness: 0.5,
    color: lightGrey,
  });
  page.drawText("Solid Foundation Geotechnical  ·  sfgeo.com.au  ·  0423 483 555", {
    x: margin,
    y: footerY,
    size: 8,
    font,
    color: grey,
  });
  const generated = `Generated ${new Date().toISOString().replace("T", " ").slice(0, 16)} UTC`;
  page.drawText(generated, {
    x: width - margin - font.widthOfTextAtSize(generated, 8),
    y: footerY,
    size: 8,
    font,
    color: grey,
  });

  return pdf.save();
}
