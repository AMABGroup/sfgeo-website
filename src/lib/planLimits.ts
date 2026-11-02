// Limits for plans attached to an enquiry. Shared by both forms (checked
// before anything is sent) and by /api/upload and /api/contact (enforced).
// No Node or browser APIs here, so it is safe on either side.

/** One upload request carries one slice of one file. Netlify Functions accept a
 *  request of about 6 MB and binary bodies arrive base64 encoded (4/3 larger),
 *  so 4 MiB is the largest round slice that fits. */
export const PLAN_CHUNK_BYTES = 4 * 1024 * 1024;
export const PLAN_MAX_FILES = 5;
export const PLAN_MAX_TOTAL_BYTES = 20 * 1024 * 1024;
export const PLAN_NAME_MAX = 180;
/** Uploads never claimed by an enquiry are deleted after this long. */
export const PLAN_MAX_AGE_MS = 7 * 24 * 60 * 60 * 1000;

export const PLAN_EXTENSIONS = [".pdf", ".jpg", ".jpeg", ".png", ".heic", ".heif", ".webp", ".dwg", ".dxf"] as const;

/** For the file picker: extensions plus the common types, which some phone pickers need. */
export const PLAN_ACCEPT = [
  ...PLAN_EXTENSIONS,
  "application/pdf",
  "image/jpeg",
  "image/png",
  "image/heic",
  "image/heif",
  "image/webp",
].join(",");

/** crypto.randomUUID() output: version 4, lower case. */
export const UPLOAD_ID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/;

export const planChunkCount = (size: number) => Math.max(1, Math.ceil(size / PLAN_CHUNK_BYTES));

/** Byte length the server expects for slice `chunk` of a file of `size` bytes. */
export const planChunkLength = (size: number, chunk: number) =>
  Math.min(PLAN_CHUNK_BYTES, size - chunk * PLAN_CHUNK_BYTES);

export function planExtensionAllowed(name: string): boolean {
  const dot = name.lastIndexOf(".");
  if (dot <= 0) return false;
  return (PLAN_EXTENSIONS as readonly string[]).includes(name.slice(dot).toLowerCase());
}

/** Drops UTF-16 halves without their partner, which encodeURIComponent refuses. */
function wellFormed(s: string): string {
  let out = "";
  for (let i = 0; i < s.length; i++) {
    const c = s.charCodeAt(i);
    if (c >= 0xd800 && c <= 0xdbff) {
      const d = s.charCodeAt(i + 1);
      if (d >= 0xdc00 && d <= 0xdfff) {
        out += s[i] + s[i + 1];
        i++;
      }
    } else if (c < 0xdc00 || c > 0xdfff) {
      out += s[i];
    }
  }
  return out;
}

/** The first `max` UTF-16 units of `s`, never ending on half a character. */
function cut(s: string, max: number): string {
  if (s.length <= max) return s;
  const c = s.charCodeAt(max - 1);
  return s.slice(0, c >= 0xd800 && c <= 0xdbff ? max - 1 : max);
}

/**
 * The file name as stored and emailed: no control or direction-override
 * characters, no path separators or double quotes, single spaces, at most
 * PLAN_NAME_MAX characters with the extension kept, and always safe for
 * encodeURIComponent. Idempotent, so the form and the server agree on it.
 */
export function cleanPlanName(raw: string): string {
  const name = wellFormed(raw)
    .replace(/[\u0000-\u001f\u007f‎‏‪-‮⁦-⁩]/g, "")
    .replace(/[\\/]/g, "_")
    .replace(/"/g, "'")
    .replace(/\s+/g, " ")
    .trim();
  if (name.length <= PLAN_NAME_MAX) return name;
  const dot = name.lastIndexOf(".");
  const ext = dot > 0 && name.length - dot <= 10 ? name.slice(dot) : "";
  return cut(name, PLAN_NAME_MAX - ext.length).trimEnd() + ext;
}

/** "840 KB", "8.6 MB". Binary units, matching the 20 MB limit. */
export function formatPlanSize(bytes: number): string {
  if (bytes < 1024 * 1024) return `${Math.max(1, Math.round(bytes / 1024))} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}
