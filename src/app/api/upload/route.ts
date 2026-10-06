import { NextResponse } from "next/server";
import { clientIp, rateLimited } from "@/lib/rateLimit";
import {
  PLAN_CHUNK_BYTES,
  PLAN_MAX_FILES,
  PLAN_MAX_TOTAL_BYTES,
  UPLOAD_ID_RE,
  cleanPlanName,
  planChunkCount,
  planChunkLength,
  planExtensionAllowed,
} from "@/lib/planLimits";
import { chunkKey, getPlanStore, readMeta, writeMeta } from "@/lib/planStore";

export const runtime = "nodejs";

// One slice (at most 4 MiB) of one plan file attached to an enquiry. The forms
// send each file in order, slice by slice, then post the enquiry to
// /api/contact with the upload id, which attaches the files to the email.
// Headers: x-upload-id, x-file-index (0 to 4), x-chunk-index, x-chunk-count,
// x-file-name (URI encoded), x-file-size. Body: the raw bytes.

const INT = /^\d{1,9}$/;

// Logged with the reason only: never a file name, which can carry a name or address.
function refuse(status: number, error: string, reason: string) {
  console.warn(`Plan upload rejected (${status}): ${reason}`);
  return NextResponse.json({ error }, { status });
}

export async function POST(request: Request) {
  try {
    const h = request.headers;
    const length = Number(h.get("content-length") || 0);
    if (length > PLAN_CHUNK_BYTES) return refuse(413, "Too large", `body of ${length} bytes`);

    // Separate from the enquiry bucket: one enquiry with plans is up to ten slices.
    if (rateLimited(`upload:${clientIp(request)}`, 60, 10 * 60_000)) {
      return refuse(429, "Too many requests", "rate limit");
    }

    if (!(h.get("content-type") || "").toLowerCase().startsWith("application/octet-stream")) {
      return refuse(400, "Invalid upload", "content type is not application/octet-stream");
    }

    const uploadId = h.get("x-upload-id") || "";
    if (!UPLOAD_ID_RE.test(uploadId)) return refuse(400, "Invalid upload", "upload id is not a v4 UUID");

    const raw = ["x-file-index", "x-chunk-index", "x-chunk-count", "x-file-size"].map((k) => h.get(k) || "");
    if (!raw.every((v) => INT.test(v))) return refuse(400, "Invalid upload", "index, count or size header not an integer");
    const [fileIndex, chunkIndex, chunkCount, size] = raw.map(Number);

    if (fileIndex >= PLAN_MAX_FILES) return refuse(400, "Invalid upload", `file index ${fileIndex}`);
    if (size < 1) return refuse(400, "Invalid upload", "empty file");
    if (size > PLAN_MAX_TOTAL_BYTES) return refuse(413, "Plans over 20 MB", `file of ${size} bytes`);
    if (chunkCount !== planChunkCount(size) || chunkIndex >= chunkCount) {
      return refuse(400, "Invalid upload", `chunk ${chunkIndex} of ${chunkCount} for ${size} bytes`);
    }

    let name: string;
    try {
      name = cleanPlanName(decodeURIComponent(h.get("x-file-name") || ""));
    } catch {
      return refuse(400, "Invalid upload", "file name not URI encoded");
    }
    if (!planExtensionAllowed(name)) return refuse(400, "File type not accepted", "extension not on the list");

    const body = await request.arrayBuffer();
    const expected = planChunkLength(size, chunkIndex);
    if (body.byteLength > PLAN_CHUNK_BYTES) return refuse(413, "Too large", `body of ${body.byteLength} bytes`);
    if (body.byteLength !== expected) {
      return refuse(400, "Invalid upload", `slice of ${body.byteLength} bytes, expected ${expected}`);
    }

    const store = await getPlanStore();
    if (!store) return refuse(503, "Plan storage unavailable", "plan store unavailable");

    try {
      const meta = (await readMeta(store, uploadId)) ?? { created: Date.now(), files: {} };
      const known = meta.files[String(fileIndex)];
      if (known) {
        if (known.name !== name || known.size !== size || known.chunks !== chunkCount) {
          return refuse(400, "Invalid upload", "slice does not match the file already recorded at this index");
        }
      } else {
        const total = Object.values(meta.files).reduce((n, f) => n + f.size, 0) + size;
        if (total > PLAN_MAX_TOTAL_BYTES) return refuse(413, "Plans over 20 MB", `upload total of ${total} bytes`);
        meta.files[String(fileIndex)] = { name, size, chunks: chunkCount };
        // Meta first: an upload directory without meta is always safe for the purge to remove.
        await writeMeta(store, uploadId, meta);
      }
      await store.set(chunkKey(uploadId, fileIndex, chunkIndex), body);
    } catch (err) {
      console.error(`Plan store write failed: ${err instanceof Error ? `${err.name}: ${err.message}` : "unknown error"}`);
      return NextResponse.json({ error: "Plan storage unavailable" }, { status: 503 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(`Plan upload error: ${err instanceof Error ? `${err.name}: ${err.message}` : "unknown error"}`);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}
