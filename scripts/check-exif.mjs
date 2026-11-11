#!/usr/bin/env node
// Fails the build if any image under public/ carries location data.
// Phone photographs embed GPS coordinates in their EXIF block; a photo taken at a
// client's property would publish that position. No dependencies: reads the bytes.
//
//   node scripts/check-exif.mjs          check public/
//   node scripts/check-exif.mjs <dir>    check another folder
//
// To clear a flagged file, strip its EXIF and XMP (keep the Orientation tag if the
// photo is rotated), then run this again.

import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative, extname } from "node:path";

const ROOT = process.argv[2] ?? "public";
const IMAGE_EXT = new Set([".jpg", ".jpeg", ".png", ".webp"]);
const GPS_IFD_TAG = 0x8825;
const XMP_GPS = /GPS(Latitude|Longitude|Altitude)\b/;

function walk(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) out.push(...walk(p));
    else if (IMAGE_EXT.has(extname(name).toLowerCase())) out.push(p);
  }
  return out;
}

// True when a TIFF block's first directory points at a GPS directory with entries.
function tiffHasGps(buf, start) {
  if (start + 8 > buf.length) return false;
  const order = buf.toString("latin1", start, start + 2);
  if (order !== "II" && order !== "MM") return false;
  const le = order === "II";
  const u16 = (o) => (le ? buf.readUInt16LE(o) : buf.readUInt16BE(o));
  const u32 = (o) => (le ? buf.readUInt32LE(o) : buf.readUInt32BE(o));
  const ifd = start + u32(start + 4);
  if (ifd + 2 > buf.length) return false;
  const count = u16(ifd);
  for (let i = 0; i < count; i++) {
    const entry = ifd + 2 + i * 12;
    if (entry + 12 > buf.length) return false;
    if (u16(entry) === GPS_IFD_TAG) {
      const gps = start + u32(entry + 8);
      return gps + 2 <= buf.length && u16(gps) > 0;
    }
  }
  return false;
}

function jpegHasGps(buf) {
  let i = 2;
  while (i + 4 <= buf.length && buf[i] === 0xff) {
    const marker = buf[i + 1];
    if (marker === 0xda) break; // image data starts
    if (marker === 0xd8 || marker === 0x01 || (marker >= 0xd0 && marker <= 0xd7)) {
      i += 2;
      continue;
    }
    const len = buf.readUInt16BE(i + 2);
    if (marker === 0xe1) {
      const body = buf.subarray(i + 4, i + 2 + len);
      if (body.toString("latin1", 0, 6) === "Exif\0\0") {
        if (tiffHasGps(body, 6)) return true;
      } else if (XMP_GPS.test(body.toString("latin1"))) {
        return true;
      }
    }
    i += 2 + len;
  }
  return false;
}

// The EXIF payload of a PNG (eXIf chunk) or WebP (EXIF chunk), or null.
function exifChunk(buf) {
  const tag = (o) => buf.toString("latin1", o, o + 4);
  if (tag(1) === "PNG\r") {
    let i = 8;
    while (i + 8 <= buf.length) {
      const len = buf.readUInt32BE(i);
      if (tag(i + 4) === "eXIf") return buf.subarray(i + 8, i + 8 + len);
      i += 12 + len;
    }
  } else if (tag(0) === "RIFF" && tag(8) === "WEBP") {
    let i = 12;
    while (i + 8 <= buf.length) {
      const len = buf.readUInt32LE(i + 4);
      if (tag(i) === "EXIF") return buf.subarray(i + 8, i + 8 + len);
      i += 8 + len + (len % 2);
    }
  }
  return null;
}

function containerHasGps(buf) {
  if (XMP_GPS.test(buf.toString("latin1"))) return true;
  const exif = exifChunk(buf);
  if (!exif) return false;
  // WebP may prefix the TIFF block with "Exif\0\0".
  const start = exif.toString("latin1", 0, 6) === "Exif\0\0" ? 6 : 0;
  return tiffHasGps(exif, start);
}

const flagged = [];
const files = walk(ROOT);
for (const file of files) {
  const buf = readFileSync(file);
  const isJpeg = buf[0] === 0xff && buf[1] === 0xd8;
  if (isJpeg ? jpegHasGps(buf) : containerHasGps(buf)) flagged.push(relative(".", file));
}

if (flagged.length) {
  console.error(`check-exif: ${flagged.length} image(s) carry location data:`);
  for (const f of flagged) console.error(`  ${f}`);
  console.error("Strip the EXIF and XMP from each file, then build again.");
  process.exit(1);
}
console.log(`check-exif: ${files.length} images under ${ROOT}, none carries location data.`);
