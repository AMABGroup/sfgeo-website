// The Google Business Profile rating and reviews, read on the server so both
// are in the served HTML. Server only: the API key must never reach a browser.
//
// The key is capped at 30 Places calls a day (Google's day runs midnight to
// midnight Pacific time). On 2 Nov 2026 the evening's builds and testing used
// the cap up, the production build that followed got 429 for every call, and
// its pages carried no rating for a day. So the figure is held in one place:
//
// - The last good figure is kept in the Netlify Blobs store "google-place",
//   with the time Google returned it. Every page, every build (production and
//   deploy previews) and /api/reviews read it from there.
// - Places is called only when that figure is a day old, and only by the one
//   process that creates that hour's claim entry (a create-only write). The
//   others wait a few seconds for its answer, so a build with many workers, a
//   run of page rebuilds or several builds in a day make one call between them.
// - A failed call is never stored as the figure: the last good one stays in
//   use and the next attempt waits an hour.
// - A figure more than 14 days old is never shown: no number rather than a
//   stale one.
//
// Pages that show the figure revalidate hourly, so a page built while no
// figure was available picks one up within the hour.
//
// Without Netlify Blobs (a local build), the same record and claims live in
// .next/cache. Every Places call logs one "[google-rating] Places call" line,
// so a build log shows how many it made.

const PLACE_ID = "ChIJkbo3DVqq1IMRQYQUbuD9XDc"; // SFGEO Place ID
const STORE_NAME = "google-place";
const RECORD_KEY = "place";

const HOUR = 60 * 60 * 1000;
const REFRESH_MS = 24 * HOUR; // a good figure is refreshed once a day
const RETRY_MS = HOUR; // after a failed call, the next one waits this long
const MAX_AGE_MS = 14 * 24 * HOUR; // never show a figure older than this
const PLACES_TIMEOUT_MS = 8000;
const WAIT_MS = PLACES_TIMEOUT_MS + 4000; // how long a process waits for another's call
const POLL_MS = 500;
const MEMO_MS = 60 * 1000; // pages rendered together share one read

/** Shape returned by Places API (New) for the fields we request. */
interface PlacesNewReview {
  rating?: number;
  text?: { text?: string };
  originalText?: { text?: string };
  authorAttribution?: { displayName?: string };
  publishTime?: string;
}

interface PlacesNewResponse {
  rating?: number;
  userRatingCount?: number;
  googleMapsUri?: string;
  reviews?: PlacesNewReview[];
}

export interface PlaceReview {
  author_name: string;
  rating: number;
  text: string;
  time: number;
}

/** Kept stable across API migrations; /api/reviews answers with this shape. */
export interface PlaceDetails {
  reviews: PlaceReview[];
  rating: number | null;
  user_ratings_total: number | null;
  maps_url: string;
}

/** A figure from Google and when Google returned it (ms since epoch). */
export interface CheckedPlace {
  place: PlaceDetails;
  checkedAt: number;
}

/** What the store holds. `place` is only ever a successful answer. */
interface PlaceRecord {
  place: PlaceDetails | null;
  /** When `place` was returned by Google. */
  fetchedAt: number | null;
  /** When the latest call started. */
  attemptAt: number;
  /** When the latest call finished, ok or not. Before that, a call is in flight. */
  doneAt: number | null;
  /** Why the latest call failed, if it did. */
  error?: string;
}

interface PlaceStore {
  readonly kind: string;
  read(): Promise<PlaceRecord | null>;
  write(record: PlaceRecord): Promise<void>;
  /**
   * Creates the entry `name` only if it does not exist yet, and says whether
   * this call created it: the one process that does may call Places.
   */
  claim(name: string): Promise<boolean>;
  /** When the claim `name` was made (ms since epoch), or null. */
  claimedAt(name: string): Promise<number | null>;
  /** Removes claims from windows before `slot`. Best effort. */
  tidy(slot: number): Promise<void>;
}

type Fetch = typeof globalThis.fetch;

const apiKey = () => process.env.GOOGLE_PLACES_API_KEY || process.env.GOOGLE_MAPS_API_KEY;

export const hasPlacesKey = () => Boolean(apiKey());

/**
 * Next.js wraps fetch with its own data cache. The figure's caching lives in
 * the store, so Places and Blobs calls use the unwrapped fetch: the wrapper
 * would serve a cached answer at build time, and `cache: "no-store"` would
 * turn the pages dynamic.
 */
function plainFetch(): Fetch {
  const f = globalThis.fetch as Fetch & { _nextOriginalFetch?: Fetch };
  return f._nextOriginalFetch ?? f;
}

const errorText = (err: unknown) => (err instanceof Error ? `${err.name}: ${err.message}` : String(err));

/** A stored record, or null when there is none or it cannot be read. */
function parseRecord(raw: string | null | undefined): PlaceRecord | null {
  if (!raw) return null;
  try {
    const r = JSON.parse(raw) as Partial<PlaceRecord> | null;
    if (!r || typeof r !== "object" || typeof r.attemptAt !== "number") return null;
    if (r.fetchedAt !== null && typeof r.fetchedAt !== "number") return null;
    if (r.doneAt !== null && typeof r.doneAt !== "number") return null;
    return r as PlaceRecord;
  } catch {
    return null;
  }
}

// ---------------------------------------------------------------- stores

const CLAIM_PREFIX = "claim-";
const claimName = (slot: number) => `${CLAIM_PREFIX}${slot}`;
const isOldClaim = (name: string, slot: number) => name.startsWith(CLAIM_PREFIX) && Number(name.slice(CLAIM_PREFIX.length)) < slot;

async function blobStore(): Promise<PlaceStore | null> {
  let store;
  try {
    const { getStore } = await import("@netlify/blobs");
    store = getStore({ name: STORE_NAME, consistency: "strong", fetch: plainFetch() });
  } catch {
    // MissingBlobsEnvironmentError: not running on Netlify.
    return null;
  }
  return {
    kind: "Netlify Blobs",
    async read() {
      return parseRecord(await store.get(RECORD_KEY, { type: "text" }));
    },
    async write(record) {
      await store.setJSON(RECORD_KEY, record);
    },
    async claim(name) {
      const id = `${Date.now()}-${Math.random().toString(36).slice(2)}`;
      if (!(await store.setJSON(name, { at: Date.now(), id }, { onlyIfNew: true })).modified) return false;
      // A create-only write reports any answer but 412 as written, a 5xx
      // included, so the claim counts only once the entry reads back as ours.
      // Otherwise a store that reads but cannot write would let every process
      // call Places.
      const back = (await store.get(name, { type: "json" }).catch(() => null)) as { id?: unknown } | null;
      return back?.id === id;
    },
    async claimedAt(name) {
      const claim = (await store.get(name, { type: "json" }).catch(() => null)) as { at?: unknown } | null;
      return typeof claim?.at === "number" ? claim.at : null;
    },
    async tidy(slot) {
      const { blobs } = await store.list({ prefix: CLAIM_PREFIX });
      await Promise.all(blobs.filter((b) => isOldClaim(b.key, slot)).map((b) => store.delete(b.key)));
    },
  };
}

async function fileStore(): Promise<PlaceStore | null> {
  try {
    const fs = await import("node:fs/promises");
    const path = await import("node:path");
    const dir = path.join(process.cwd(), ".next", "cache", "sfgeo-google-place");
    const file = path.join(dir, `${RECORD_KEY}.json`);
    await fs.mkdir(dir, { recursive: true });
    return {
      kind: "local file",
      async read() {
        return parseRecord(await fs.readFile(file, "utf8").catch(() => null));
      },
      async write(record) {
        const tmp = `${file}.${process.pid}.${Math.random().toString(36).slice(2)}`;
        await fs.writeFile(tmp, JSON.stringify(record));
        await fs.rename(tmp, file);
      },
      async claim(name) {
        try {
          await (await fs.open(path.join(dir, name), "wx")).close();
          return true;
        } catch {
          return false;
        }
      },
      async claimedAt(name) {
        return (await fs.stat(path.join(dir, name)).catch(() => null))?.mtimeMs ?? null;
      },
      async tidy(slot) {
        const names = await fs.readdir(dir);
        await Promise.all(names.filter((n) => isOldClaim(n, slot)).map((n) => fs.rm(path.join(dir, n), { force: true })));
      },
    };
  } catch {
    return null;
  }
}

// ---------------------------------------------------------------- Places

async function callPlaces(key: string): Promise<{ place: PlaceDetails } | { error: string }> {
  // Places API (New). The legacy `maps/api/place/details/json` endpoint this
  // site used previously is not enabled on Google Cloud projects created after
  // March 2025 and answers REQUEST_DENIED.
  try {
    const response = await plainFetch()(`https://places.googleapis.com/v1/places/${PLACE_ID}`, {
      headers: {
        "X-Goog-Api-Key": key,
        "X-Goog-FieldMask": "rating,userRatingCount,googleMapsUri,reviews",
      },
      signal: AbortSignal.timeout(PLACES_TIMEOUT_MS),
    });

    if (!response.ok) {
      const body = await response.text().catch(() => "");
      const reason = /"status":\s*"([A-Z_]+)"/.exec(body)?.[1];
      const error = `${response.status}${reason ? ` ${reason}` : ""}`;
      console.error(`[google-rating] Places call failed: ${error} ${body.replace(/\s+/g, " ").slice(0, 300)}`);
      return { error };
    }

    const data = (await response.json()) as PlacesNewResponse;
    const place: PlaceDetails = {
      rating: typeof data.rating === "number" ? data.rating : null,
      user_ratings_total: typeof data.userRatingCount === "number" ? data.userRatingCount : null,
      maps_url: data.googleMapsUri ?? `https://www.google.com/maps/place/?q=place_id:${PLACE_ID}`,
      reviews: (data.reviews ?? []).map((review) => ({
        author_name: review.authorAttribution?.displayName ?? "Google user",
        rating: typeof review.rating === "number" ? review.rating : 0,
        text: review.text?.text ?? review.originalText?.text ?? "",
        time: review.publishTime ? Date.parse(review.publishTime) : 0,
      })),
    };
    if (place.rating === null || !place.user_ratings_total) {
      console.error("[google-rating] Places call failed: answer carried no rating");
      return { error: "no rating in answer" };
    }
    console.log(`[google-rating] Places call ok: ${place.rating.toFixed(1)} from ${place.user_ratings_total}`);
    return { place };
  } catch (error) {
    console.error(`[google-rating] Places call failed: ${errorText(error)}`);
    return { error: errorText(error).slice(0, 120) };
  }
}

// ---------------------------------------------------------------- the figure

/** The record's figure if it is recent enough to show, else null. */
function shown(record: PlaceRecord | null, now: number): CheckedPlace | null {
  if (!record?.place || record.fetchedAt === null) return null;
  if (now - record.fetchedAt > MAX_AGE_MS) return null;
  return { place: record.place, checkedAt: record.fetchedAt };
}

const inFlight = (record: PlaceRecord | null, now: number) =>
  Boolean(record && (record.doneAt === null || record.doneAt < record.attemptAt) && now - record.attemptAt < WAIT_MS);

/** Another process is calling Places: read the record until its answer, started at or after `since`, lands. */
async function waitForOther(store: PlaceStore, since: number): Promise<PlaceRecord | null> {
  const until = Date.now() + WAIT_MS;
  let record = await store.read();
  const landed = (r: PlaceRecord | null) => Boolean(r && r.attemptAt >= since && r.doneAt !== null && r.doneAt >= r.attemptAt);
  while (!landed(record) && Date.now() < until) {
    await new Promise((r) => setTimeout(r, POLL_MS));
    record = await store.read();
  }
  return record;
}

function describe(store: PlaceStore, record: PlaceRecord | null, now: number): string {
  if (!record?.fetchedAt) return `no figure in ${store.kind}`;
  const hours = ((now - record.fetchedAt) / HOUR).toFixed(1);
  return `figure from ${store.kind}, returned by Google ${new Date(record.fetchedAt).toISOString()} (${hours} h ago)`;
}

async function resolve(store: PlaceStore, key: string): Promise<CheckedPlace | null> {
  const now = Date.now();
  const record = await store.read();

  if (record?.fetchedAt && now - record.fetchedAt < REFRESH_MS) {
    console.log(`[google-rating] ${describe(store, record, now)}`);
    return shown(record, now);
  }
  if (record && inFlight(record, now)) {
    const latest = await waitForOther(store, record.attemptAt);
    console.log(`[google-rating] waited for another process: ${describe(store, latest, Date.now())}`);
    return shown(latest, Date.now());
  }
  if (record && now - record.attemptAt < RETRY_MS) {
    console.log(`[google-rating] last call failed (${record.error ?? "unfinished"}), next try after ${new Date(record.attemptAt + RETRY_MS).toISOString()}; ${describe(store, record, now)}`);
    return shown(record, now);
  }

  // One claim per retry window: of the processes that get here together,
  // only the one that creates this window's claim entry calls Places.
  const slot = Math.floor(now / RETRY_MS);
  if (!(await store.claim(claimName(slot)))) {
    // Wait only while that claim is young: a claimant that died leaves the
    // last good figure in use until the next window.
    const at = await store.claimedAt(claimName(slot));
    const latest = at !== null && Date.now() - at < WAIT_MS ? await waitForOther(store, slot * RETRY_MS) : record;
    console.log(`[google-rating] another process claimed this hour's call: ${describe(store, latest, Date.now())}`);
    return shown(latest, Date.now());
  }

  const base: PlaceRecord = record ?? { place: null, fetchedAt: null, attemptAt: 0, doneAt: null };
  const save = (next: PlaceRecord) =>
    store.write(next).catch((err) => console.error(`[google-rating] could not save to ${store.kind}: ${errorText(err)}`));
  await save({ ...base, attemptAt: now, doneAt: null, error: undefined });
  const result = await callPlaces(key);
  const done = Date.now();
  await store.tidy(slot).catch(() => {});
  if ("place" in result) {
    await save({ place: result.place, fetchedAt: now, attemptAt: now, doneAt: done });
    return { place: result.place, checkedAt: now };
  }
  await save({ ...base, attemptAt: now, doneAt: done, error: result.error });
  console.log(`[google-rating] keeping the last good figure: ${describe(store, record, done)}`);
  return shown(record, done);
}

/** No shared store at all: one call per process, a failure retried after an hour. */
let unshared: { at: number; ttl: number; value: CheckedPlace | null } | null = null;
async function resolveUnshared(key: string): Promise<CheckedPlace | null> {
  const now = Date.now();
  if (unshared && now - unshared.at < unshared.ttl) return unshared.value;
  console.log("[google-rating] no shared store here: this process calls Places itself");
  const result = await callPlaces(key);
  const value = "place" in result ? { place: result.place, checkedAt: now } : (unshared?.value ?? null);
  unshared = { at: now, ttl: "place" in result ? REFRESH_MS : RETRY_MS, value };
  return value && now - value.checkedAt <= MAX_AGE_MS ? value : null;
}

let memo: { at: number; value: Promise<CheckedPlace | null> } | null = null;

/** The figure and when Google returned it, or null when there is none from the last 14 days. Never throws. */
export function getCheckedPlace(): Promise<CheckedPlace | null> {
  const key = apiKey();
  if (!key) return Promise.resolve(null);
  const now = Date.now();
  if (memo && now - memo.at < MEMO_MS) return memo.value;
  const value = (async () => {
    try {
      const store = (await blobStore()) ?? (await fileStore());
      if (!store) return await resolveUnshared(key);
      try {
        return await resolve(store, key);
      } catch (err) {
        // The store failed mid-way. Showing nothing beats calling Places from every page.
        console.error(`[google-rating] ${store.kind} unavailable: ${errorText(err)}`);
        return null;
      }
    } catch (err) {
      console.error(`[google-rating] ${errorText(err)}`);
      return null;
    }
  })();
  memo = { at: now, value };
  return value;
}

/** The place as Google last reported it, within the last 14 days, or null. Never throws. */
export async function getPlace(): Promise<PlaceDetails | null> {
  return (await getCheckedPlace())?.place ?? null;
}
