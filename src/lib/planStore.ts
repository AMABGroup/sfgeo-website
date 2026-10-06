// Where uploaded plans wait between /api/upload and /api/contact: the Netlify
// Blobs store "enquiry-plans" in production. Server only.
//
// Key layout, per enquiry upload:
//   <uploadId>/meta                  JSON UploadMeta (written before any slice)
//   <uploadId>/<fileIndex>/<chunk>   raw bytes of one slice
//
// Tests inject a store with setPlanStoreForTesting(). PLAN_STORE_MEMORY=1 uses a
// process-local Map instead of Blobs, for running the site on this machine only:
// serverless instances do not share memory, so it must never be set on Netlify.

export type PlanStore = {
  set(key: string, value: ArrayBuffer | string): Promise<void>;
  get(key: string): Promise<ArrayBuffer | null>;
  delete(key: string): Promise<void>;
  /** Keys under `prefix`; with `directories`, only the next path level is listed as directories. */
  list(prefix: string, options?: { directories?: boolean }): Promise<{ keys: string[]; directories: string[] }>;
};

export type UploadMeta = {
  created: number;
  files: Record<string, { name: string; size: number; chunks: number }>;
};

export const metaKey = (uploadId: string) => `${uploadId}/meta`;
export const chunkKey = (uploadId: string, file: number, chunk: number) => `${uploadId}/${file}/${chunk}`;

export function memoryPlanStore(log = false): PlanStore {
  const map = new Map<string, ArrayBuffer>();
  return {
    async set(key, value) {
      const bytes = typeof value === "string" ? new TextEncoder().encode(value).buffer : value.slice(0);
      map.set(key, bytes as ArrayBuffer);
      if (log) console.info(`[plan-store:memory] set ${key} (${bytes.byteLength} bytes)`);
    },
    async get(key) {
      return map.get(key)?.slice(0) ?? null;
    },
    async delete(key) {
      map.delete(key);
      if (log) console.info(`[plan-store:memory] delete ${key}`);
    },
    async list(prefix, options) {
      const keys: string[] = [];
      const directories = new Set<string>();
      for (const key of map.keys()) {
        if (!key.startsWith(prefix)) continue;
        const rest = key.slice(prefix.length);
        const slash = rest.indexOf("/");
        if (options?.directories && slash >= 0) directories.add(prefix + rest.slice(0, slash));
        else keys.push(key);
      }
      return { keys, directories: [...directories] };
    },
  };
}

let injected: PlanStore | null = null;
export function setPlanStoreForTesting(store: PlanStore | null) {
  injected = store;
}

/** The plan store, or null when Netlify Blobs is not available here. Never throws. */
export async function getPlanStore(): Promise<PlanStore | null> {
  if (injected) return injected;
  if (process.env.PLAN_STORE_MEMORY === "1") {
    // One Map per process, shared by every route bundle.
    const g = globalThis as typeof globalThis & { __sfgeoPlanStore?: PlanStore };
    return (g.__sfgeoPlanStore ??= memoryPlanStore(true));
  }
  try {
    const { getStore } = await import("@netlify/blobs");
    const store = getStore({ name: "enquiry-plans", consistency: "strong" });
    return {
      async set(key, value) {
        await store.set(key, value);
      },
      async get(key) {
        return store.get(key, { type: "arrayBuffer" });
      },
      async delete(key) {
        await store.delete(key);
      },
      async list(prefix, options) {
        const { blobs, directories } = await store.list({
          ...(prefix ? { prefix } : {}),
          directories: options?.directories ?? false,
        });
        return { keys: blobs.map((b) => b.key), directories };
      },
    };
  } catch (err) {
    console.error(`Plan store unavailable: ${err instanceof Error ? `${err.name}: ${err.message}` : "unknown error"}`);
    return null;
  }
}

export async function readMeta(store: PlanStore, uploadId: string): Promise<UploadMeta | null> {
  const raw = await store.get(metaKey(uploadId));
  if (!raw) return null;
  try {
    const meta = JSON.parse(new TextDecoder().decode(raw)) as UploadMeta;
    if (typeof meta?.created !== "number" || !meta.files || typeof meta.files !== "object") return null;
    return meta;
  } catch {
    return null;
  }
}

export async function writeMeta(store: PlanStore, uploadId: string, meta: UploadMeta): Promise<void> {
  await store.set(metaKey(uploadId), JSON.stringify(meta));
}

/** Deletes every slice of an upload, then its meta record last, so a part-deleted upload has no meta and the purge removes the rest. */
export async function deleteUpload(store: PlanStore, uploadId: string): Promise<void> {
  const { keys } = await store.list(`${uploadId}/`);
  const meta = metaKey(uploadId);
  await Promise.all(keys.filter((k) => k !== meta).map((k) => store.delete(k)));
  await store.delete(meta);
}
