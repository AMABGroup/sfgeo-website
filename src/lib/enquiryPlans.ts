// Server side of plans attached to an enquiry: read back the slices that
// /api/upload stored, rebuild each file, describe the result for the enquiry
// email, and clean up. Nothing here throws into /api/contact: a plan problem is
// reported in the email and never costs the lead.
import {
  PLAN_MAX_AGE_MS,
  PLAN_MAX_FILES,
  PLAN_MAX_TOTAL_BYTES,
  UPLOAD_ID_RE,
  cleanPlanName,
  formatPlanSize,
  planChunkCount,
  planExtensionAllowed,
} from "@/lib/planLimits";
import { chunkKey, deleteUpload, readMeta, type PlanStore } from "@/lib/planStore";

export type PlanEntry = { index: number; name: string; size: number; chunks: number };
export type PlanRequest = { uploadId: string | null; files: PlanEntry[]; invalid?: string };
export type PlanResult = {
  uploadId: string | null;
  attachments: { filename: string; content: string }[];
  attached: PlanEntry[];
  notAttached: { name: string; size: number; reason: string }[];
  /** A problem with the whole set, such as storage being unavailable. */
  note?: string;
};

/**
 * Store reads for one enquiry stop after this; the lead is sent either way.
 * With the send (up to about 27 MB of base64 to Resend) and the capped cleanup,
 * the whole request stays inside the 10 second function limit.
 */
const READ_BUDGET_MS = 4_000;
/** Upload directories checked for age per enquiry. */
const PURGE_SAMPLE = 5;

const isInt = (v: unknown): v is number => typeof v === "number" && Number.isInteger(v);

/** Resolves to undefined if `promise` takes longer than `ms`. Never rejects. */
export function withTimeout<T>(promise: Promise<T>, ms: number): Promise<T | undefined> {
  let timer: ReturnType<typeof setTimeout> | undefined;
  const timeout = new Promise<undefined>((resolve) => {
    timer = setTimeout(() => resolve(undefined), ms);
  });
  return Promise.race([promise.catch(() => undefined), timeout]).finally(() => clearTimeout(timer));
}

/** The upload id and file list the form sent, or null when it sent none. */
export function parsePlanRequest(uploadId: unknown, files: unknown): PlanRequest | null {
  if (uploadId === undefined && files === undefined) return null;
  const id = typeof uploadId === "string" && UPLOAD_ID_RE.test(uploadId) ? uploadId : null;
  const bad = (invalid: string): PlanRequest => ({ uploadId: id, files: [], invalid });
  if (!id) return bad("upload id missing or malformed");
  if (!Array.isArray(files) || files.length < 1 || files.length > PLAN_MAX_FILES) return bad("file list missing or too long");

  const out: PlanEntry[] = [];
  for (const f of files as unknown[]) {
    const e = (f && typeof f === "object" ? f : {}) as Record<string, unknown>;
    const { index, name, size, chunks } = e;
    if (!isInt(index) || index < 0 || index >= PLAN_MAX_FILES || out.some((x) => x.index === index)) return bad("file index");
    if (typeof name !== "string" || !name || cleanPlanName(name) !== name || !planExtensionAllowed(name)) return bad("file name");
    if (!isInt(size) || size < 1 || size > PLAN_MAX_TOTAL_BYTES) return bad("file size");
    if (!isInt(chunks) || chunks !== planChunkCount(size)) return bad("chunk count");
    out.push({ index, name, size, chunks });
  }
  if (out.reduce((n, f) => n + f.size, 0) > PLAN_MAX_TOTAL_BYTES) return bad("over 20 MB in total");
  return { uploadId: id, files: out };
}

/** Names of plans the form could not upload (it then asked the visitor to email them). */
export function unsentPlanNames(v: unknown): string[] {
  if (!Array.isArray(v)) return [];
  return v
    .filter((x): x is string => typeof x === "string")
    .slice(0, PLAN_MAX_FILES)
    .map((x) => cleanPlanName(x))
    .filter(Boolean);
}

async function assemble(store: PlanStore, req: PlanRequest & { uploadId: string }, result: PlanResult) {
  const meta = await readMeta(store, req.uploadId);
  const built = await Promise.all(
    req.files.map(async (f) => {
      const known = meta?.files[String(f.index)];
      if (!known) return { f, reason: "no upload record" };
      if (known.name !== f.name || known.size !== f.size || known.chunks !== f.chunks) {
        return { f, reason: "upload record does not match" };
      }
      const parts = await Promise.all(
        Array.from({ length: f.chunks }, (_, c) => store.get(chunkKey(req.uploadId, f.index, c)))
      );
      const gone = parts.findIndex((p) => !p);
      if (gone >= 0) return { f, reason: `part ${gone + 1} of ${f.chunks} missing` };
      const bytes = Buffer.concat(parts.map((p) => Buffer.from(p as ArrayBuffer)));
      if (bytes.length !== f.size) return { f, reason: `${bytes.length} bytes stored, ${f.size} expected` };
      return { f, bytes };
    })
  );
  for (const b of built) {
    if ("bytes" in b && b.bytes) {
      result.attachments.push({ filename: b.f.name, content: b.bytes.toString("base64") });
      result.attached.push(b.f);
    } else {
      result.notAttached.push({ name: b.f.name, size: b.f.size, reason: b.reason ?? "not readable" });
    }
  }
}

/** Reads and checks every plan in the request. Never throws; problems are listed in the result. */
export async function collectPlans(store: PlanStore | null, req: PlanRequest): Promise<PlanResult> {
  const result: PlanResult = { uploadId: req.uploadId, attachments: [], attached: [], notAttached: [] };
  if (req.invalid || !req.uploadId) {
    result.note = `The form sent a plan list the site could not read (${req.invalid ?? "no upload id"}).`;
    return result;
  }
  const failAll = (reason: string) => {
    result.attachments = [];
    result.attached = [];
    result.notAttached = req.files.map((f) => ({ name: f.name, size: f.size, reason }));
  };
  if (!store) {
    failAll("plan storage unavailable");
    return result;
  }
  // Built in a scratch result so a read that finishes after the deadline cannot change what was emailed.
  const scratch: PlanResult = { uploadId: req.uploadId, attachments: [], attached: [], notAttached: [] };
  const outcome = await withTimeout(
    assemble(store, { uploadId: req.uploadId, files: req.files }, scratch).then(
      () => "ok" as const,
      (err) => {
        console.error(`Plan store read failed: ${err instanceof Error ? `${err.name}: ${err.message}` : "unknown error"}`);
        return "failed" as const;
      }
    ),
    READ_BUDGET_MS
  );
  if (outcome === "ok") {
    result.attachments = scratch.attachments;
    result.attached = scratch.attached;
    result.notAttached = scratch.notAttached;
  } else {
    failAll(outcome === "failed" ? "storage read failed" : "storage did not answer in time");
  }
  return result;
}

export const plansComplete = (r: PlanResult) => r.notAttached.length === 0 && !r.note;

/** Marks every plan as not attached, for when the email service refuses the attachments. */
export function dropAttachments(r: PlanResult, reason: string) {
  r.notAttached = [...r.attached.map((f) => ({ name: f.name, size: f.size, reason })), ...r.notAttached];
  r.attached = [];
  r.attachments = [];
}

/** The plans block for the enquiry email; empty when the visitor attached nothing. */
export function planEmailBlock(r: PlanResult | null, unsent: string[]): string {
  const lines: string[] = [];
  if (r) {
    const total = r.attached.length + r.notAttached.length;
    if (plansComplete(r)) lines.push(`Plans attached (${total})`);
    else if (r.attached.length) lines.push(`Plans attached: ${r.attached.length} of ${total}`);
    else lines.push("Plans not attached");
    for (const f of r.attached) lines.push(`${f.name}, ${formatPlanSize(f.size)}`);
    for (const f of r.notAttached) lines.push(`Not attached: ${f.name}, ${formatPlanSize(f.size)} (${f.reason})`);
    if (r.note) lines.push(r.note);
    if (!plansComplete(r)) {
      lines.push(
        r.uploadId
          ? `Whatever reached storage is kept for 7 days in Netlify Blobs (store enquiry-plans, upload id ${r.uploadId}). Ask the client to email the plans if you need them.`
          : "Ask the client to email the plans if you need them."
      );
    }
  }
  if (unsent.length) {
    lines.push(
      `Plans not received: the visitor chose ${unsent.join(", ")}, but the upload did not finish. The site asked them to email the plans to info@sfgeo.com.au.`
    );
  }
  return lines.join("\n");
}

/** Removes an upload once its plans are in a sent email. Best effort. */
export async function removeUpload(store: PlanStore, uploadId: string): Promise<void> {
  try {
    await deleteUpload(store, uploadId);
  } catch (err) {
    console.warn(`Plan upload not removed after send: ${err instanceof Error ? err.name : "unknown error"}`);
  }
}

/**
 * Housekeeping for uploads no enquiry ever claimed (the visitor attached plans
 * and left). Checks a few upload directories at random per enquiry and deletes
 * any older than 7 days, or without a meta record. Random picks mean a backlog
 * clears over several enquiries without slowing any one of them.
 */
export async function purgeStaleUploads(store: PlanStore, keep: string | null, now = Date.now()): Promise<number> {
  const { directories } = await store.list("", { directories: true });
  const ids = directories.filter((d) => UPLOAD_ID_RE.test(d) && d !== keep);
  for (let i = ids.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [ids[i], ids[j]] = [ids[j], ids[i]];
  }
  let removed = 0;
  await Promise.all(
    ids.slice(0, PURGE_SAMPLE).map(async (id) => {
      const meta = await readMeta(store, id);
      if (meta && now - meta.created < PLAN_MAX_AGE_MS) return;
      await deleteUpload(store, id);
      removed++;
    })
  );
  if (removed) console.info(`Removed ${removed} plan upload(s) older than 7 days`);
  return removed;
}
