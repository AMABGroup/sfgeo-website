// First-touch lead source for the visit: ad click ids, UTM tags, the landing
// page and the referrer, read on the first page view of the session and kept
// in sessionStorage so an enquiry sent later in the visit can say where it came
// from. Client only. Storage can be blocked (private mode, strict settings), so
// every access is guarded and a form still sends without it.
//
// The ad click ids (gclid, gbraid, wbraid) are also kept in localStorage, with
// the landing page and the time first seen, for 90 days. A visitor who clicked
// an ad and comes back in a new session still carries the click id. A stored
// click id is not overwritten by a visit without one; a new click id replaces it.
// No cookie is read or written.

const KEY = "sfgeo-lead-source";
const CLICK_KEY = "sfgeo-click-id";
const CLICK_LIFE_MS = 90 * 24 * 60 * 60 * 1000;
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

export type LeadSource = Partial<
  Record<(typeof PARAMS)[number] | "landing" | "referrer" | "click_first_seen", string>
>;

function snapshot(): LeadSource {
  const query = new URLSearchParams(window.location.search);
  const source: LeadSource = {
    landing: window.location.pathname + window.location.search,
    referrer: document.referrer,
  };
  for (const p of PARAMS) {
    const v = query.get(p);
    if (v) source[p] = v;
  }
  return source;
}

function hasClick(s: LeadSource): boolean {
  return CLICK_IDS.some((k) => !!s[k]);
}

/** The stored click ids, landing path and ISO first-seen time, if under 90 days old. */
function readClick(): LeadSource | null {
  try {
    const raw = localStorage.getItem(CLICK_KEY);
    if (!raw) return null;
    const stored = JSON.parse(raw) as LeadSource;
    const seen = Date.parse(stored.click_first_seen ?? "");
    if (!hasClick(stored) || Number.isNaN(seen) || Date.now() - seen > CLICK_LIFE_MS) {
      localStorage.removeItem(CLICK_KEY);
      return null;
    }
    return stored;
  } catch {
    return null;
  }
}

/** Keeps this visit's click ids. The same ids keep their first-seen time; new ids replace old ones. */
function storeClick(current: LeadSource): void {
  try {
    if (!hasClick(current)) return;
    const stored = readClick();
    if (stored && CLICK_IDS.every((k) => (stored[k] ?? "") === (current[k] ?? ""))) return;
    const entry: LeadSource = { landing: current.landing, click_first_seen: new Date().toISOString() };
    for (const k of CLICK_IDS) if (current[k]) entry[k] = current[k];
    localStorage.setItem(CLICK_KEY, JSON.stringify(entry));
  } catch {
    // Storage unavailable: the session copy still carries the click id.
  }
}

/** Fills in the stored click id when this session has none of its own. */
function withStoredClick(source: LeadSource): LeadSource {
  if (hasClick(source)) return source;
  const click = readClick();
  return click ? { ...source, ...click } : source;
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
    sessionStorage.setItem(KEY, JSON.stringify(snapshot()));
  } catch {
    // Storage unavailable: readLeadSource falls back to the current page.
  }
}

/** The stored first-touch source, or the current page if nothing was stored. */
export function readLeadSource(): LeadSource {
  try {
    const stored = sessionStorage.getItem(KEY);
    if (stored) return withStoredClick(JSON.parse(stored) as LeadSource);
  } catch {
    // Fall through to a live read.
  }
  try {
    return withStoredClick(snapshot());
  } catch {
    return {};
  }
}
