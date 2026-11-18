// First-touch lead source for the visit: ad click ids, UTM tags, the landing
// page and the referrer, read on the first page view of the session and kept
// in sessionStorage so an enquiry sent later in the visit can say where it came
// from. Client only. Storage can be blocked (private mode, strict settings), so
// every access is guarded and a form still sends without it.
//
// The ad click ids (gclid, gbraid, wbraid) are also kept in localStorage, with
// the page the click landed on and the time first seen, for 90 days. A visitor
// who clicked an ad and comes back in a new session still carries the click id.
// A stored click id is not overwritten by a visit without one; a new click id
// replaces it. The session's own landing page and referrer are never replaced:
// the stored click travels beside them as click_landing and click_first_seen.
// No cookie is read or written.

const KEY = "sfgeo-lead-source";
const CLICK_KEY = "sfgeo-click-id";
const CLICK_LIFE_MS = 90 * 24 * 60 * 60 * 1000;
// Same cap the server applies to every source value.
const CAP = 300;
const CLICK_IDS = ["gclid", "gbraid", "wbraid"] as const;

const PARAMS = [
  "gclid",
  "gbraid",
  "wbraid",
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
] as const;

const FIELDS = [...PARAMS, "landing", "referrer", "click_first_seen", "click_landing"] as const;

export type LeadSource = Partial<Record<(typeof FIELDS)[number], string>>;

function snapshot(): LeadSource {
  const query = new URLSearchParams(window.location.search);
  const source: LeadSource = {
    landing: window.location.pathname + window.location.search,
    referrer: document.referrer,
  };
  for (const p of PARAMS) {
    const v = query.get(p);
    if (v) source[p] = (CLICK_IDS as readonly string[]).includes(p) ? v.slice(0, CAP) : v;
  }
  return source;
}

function hasClick(s: LeadSource): boolean {
  return CLICK_IDS.some((k) => !!s[k]);
}

function sameClick(a: LeadSource, b: LeadSource): boolean {
  return CLICK_IDS.every((k) => (a[k] ?? "") === (b[k] ?? ""));
}

/** Parsed storage that is a plain object whose known fields are all strings, else null. */
function plain(value: unknown): LeadSource | null {
  if (!value || typeof value !== "object" || Array.isArray(value)) return null;
  const out: LeadSource = {};
  for (const k of FIELDS) {
    const v = (value as Record<string, unknown>)[k];
    if (v === undefined) continue;
    if (typeof v !== "string") return null;
    out[k] = v;
  }
  return out;
}

function forget(): void {
  try {
    localStorage.removeItem(CLICK_KEY);
  } catch {
    // Nothing to remove.
  }
}

/** The stored click ids, click landing and ISO first-seen time, if under 90 days old. */
function readClick(): LeadSource | null {
  try {
    const raw = localStorage.getItem(CLICK_KEY);
    if (!raw) return null;
    const stored = plain(JSON.parse(raw));
    const seen = Date.parse(stored?.click_first_seen ?? "");
    if (!stored || !hasClick(stored) || Number.isNaN(seen) || Date.now() - seen > CLICK_LIFE_MS) {
      forget();
      return null;
    }
    return stored;
  } catch {
    forget();
    return null;
  }
}

/** Click ids, first-seen time and click landing for a visit that carries a click id. The same ids keep their stored time and landing. */
function clickFor(current: LeadSource): LeadSource {
  const stored = readClick();
  if (stored && sameClick(stored, current)) {
    return {
      click_first_seen: stored.click_first_seen,
      click_landing: (stored.click_landing ?? current.landing ?? "").slice(0, CAP),
    };
  }
  return {
    click_first_seen: new Date().toISOString(),
    click_landing: (current.landing ?? "").slice(0, CAP),
  };
}

/** Keeps this visit's click ids. The same ids keep their first-seen time; new ids replace old ones. */
function storeClick(current: LeadSource): void {
  try {
    if (!hasClick(current)) return;
    const stored = readClick();
    if (stored && sameClick(stored, current)) return;
    const entry: LeadSource = { ...clickFor(current) };
    for (const k of CLICK_IDS) if (current[k]) entry[k] = current[k];
    localStorage.setItem(CLICK_KEY, JSON.stringify(entry));
  } catch {
    // Storage unavailable: the session copy still carries the click id.
  }
}

/**
 * Adds the click facts. The session's own landing page, referrer and UTM tags
 * stay as they are. With a click id in the session, the first-seen time and
 * click landing come from the matching stored entry (or this visit). With none,
 * a stored click id fills in beside them.
 */
function withClick(source: LeadSource): LeadSource {
  if (hasClick(source)) {
    if (source.click_first_seen && source.click_landing) return source;
    return { ...clickFor(source), ...source };
  }
  const click = readClick();
  if (!click) return source;
  const merged: LeadSource = { ...source };
  for (const k of [...CLICK_IDS, "click_first_seen", "click_landing"] as const) {
    if (click[k]) merged[k] = click[k];
  }
  return merged;
}

/** Stores the source once per session; later page views never overwrite it. */
export function captureLeadSource(): void {
  try {
    storeClick(snapshot());
  } catch {
    // Nothing to keep.
  }
  try {
    if (sessionStorage.getItem(KEY)) return;
    const first = snapshot();
    sessionStorage.setItem(KEY, JSON.stringify(hasClick(first) ? withClick(first) : first));
  } catch {
    // Storage unavailable: readLeadSource falls back to the current page.
  }
}

/** The stored first-touch source, or the current page if nothing was stored. */
export function readLeadSource(): LeadSource {
  try {
    const raw = sessionStorage.getItem(KEY);
    if (raw) {
      const stored = plain(JSON.parse(raw));
      if (stored) return withClick(stored);
      sessionStorage.removeItem(KEY);
    }
  } catch {
    // Corrupt or blocked: drop the stored copy and fall through to a live read.
    try {
      sessionStorage.removeItem(KEY);
    } catch {
      // Nothing to remove.
    }
  }
  try {
    return withClick(snapshot());
  } catch {
    return {};
  }
}
