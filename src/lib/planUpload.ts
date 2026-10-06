// Browser side of plans attached to an enquiry: choose files within the
// limits, then send them to /api/upload one 4 MiB slice at a time (a single
// request to a Netlify Function is capped at about 6 MB). The enquiry itself
// goes to /api/contact afterwards with the upload id and the file list.
import {
  PLAN_CHUNK_BYTES,
  PLAN_MAX_FILES,
  PLAN_MAX_TOTAL_BYTES,
  cleanPlanName,
  planChunkCount,
  planExtensionAllowed,
} from "@/lib/planLimits";

export type PlanManifestEntry = { index: number; name: string; size: number; chunks: number };

const totalBytes = (files: File[]) => files.reduce((n, f) => n + f.size, 0);

/** Adds picked files to the current list, keeping only what fits the limits. */
export function addPlans(current: File[], picked: File[]): { files: File[]; error: string } {
  const files = [...current];
  const problems: string[] = [];
  for (const f of picked) {
    if (files.some((x) => x.name === f.name && x.size === f.size && x.lastModified === f.lastModified)) continue;
    // Checked on the name as it will be sent, which is what the server checks.
    if (!planExtensionAllowed(cleanPlanName(f.name))) {
      problems.push(`${f.name} cannot be attached. Use PDF, JPG, PNG, HEIC, WEBP, DWG or DXF.`);
    } else if (f.size === 0) {
      problems.push(`${f.name} is an empty file.`);
    } else if (files.length >= PLAN_MAX_FILES) {
      problems.push(`Up to ${PLAN_MAX_FILES} files can be attached.`);
      break;
    } else if (totalBytes(files) + f.size > PLAN_MAX_TOTAL_BYTES) {
      problems.push(`${f.name} takes the plans over 20 MB. Email larger sets to info@sfgeo.com.au.`);
    } else {
      files.push(f);
    }
  }
  return { files, error: problems.slice(0, 2).join(" ") };
}

function newUploadId(): string {
  if (typeof crypto.randomUUID === "function") return crypto.randomUUID();
  // Older Safari: the same version 4 format from random bytes.
  const b = crypto.getRandomValues(new Uint8Array(16));
  b[6] = (b[6] & 0x0f) | 0x40;
  b[8] = (b[8] & 0x3f) | 0x80;
  const h = Array.from(b, (x) => x.toString(16).padStart(2, "0")).join("");
  return `${h.slice(0, 8)}-${h.slice(8, 12)}-${h.slice(12, 16)}-${h.slice(16, 20)}-${h.slice(20)}`;
}

/** One slice, retried once after a dropped connection or a server hiccup. */
async function sendSlice(headers: Record<string, string>, body: Blob): Promise<void> {
  for (let attempt = 0; ; attempt++) {
    let status = 0;
    try {
      const res = await fetch("/api/upload", { method: "POST", headers, body });
      if (res.ok) return;
      status = res.status;
    } catch {
      // Network error: status stays 0.
    }
    const retry = attempt === 0 && (status === 0 || status === 500 || status === 502 || status === 504);
    if (!retry) throw new Error(`Plan upload failed (${status || "network"})`);
    await new Promise((r) => setTimeout(r, 1000));
  }
}

/**
 * Uploads every file in order and returns what /api/contact needs. Throws on
 * the first slice that fails; the form then sends the enquiry without plans.
 */
export async function uploadPlans(
  files: File[],
  onProgress: (percent: number) => void
): Promise<{ uploadId: string; files: PlanManifestEntry[] }> {
  const uploadId = newUploadId();
  const total = totalBytes(files) || 1;
  const manifest: PlanManifestEntry[] = [];
  let sent = 0;
  onProgress(0);
  for (const [index, file] of files.entries()) {
    const name = cleanPlanName(file.name);
    const chunks = planChunkCount(file.size);
    for (let chunk = 0; chunk < chunks; chunk++) {
      const slice = file.slice(chunk * PLAN_CHUNK_BYTES, (chunk + 1) * PLAN_CHUNK_BYTES);
      await sendSlice(
        {
          "Content-Type": "application/octet-stream",
          "x-upload-id": uploadId,
          "x-file-index": String(index),
          "x-chunk-index": String(chunk),
          "x-chunk-count": String(chunks),
          "x-file-name": encodeURIComponent(name),
          "x-file-size": String(file.size),
        },
        slice
      );
      sent += slice.size;
      onProgress(Math.min(100, Math.round((sent / total) * 100)));
    }
    manifest.push({ index, name, size: file.size, chunks });
  }
  return { uploadId, files: manifest };
}
