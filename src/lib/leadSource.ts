// First-touch lead source for the visit: ad click ids, UTM tags, the landing
// page and the referrer, read on the first page view of the session and kept
// in sessionStorage so an enquiry sent later in the visit can say where it came
// from. Client only. Storage can be blocked (private mode, strict settings), so
// every access is guarded and a form still sends without it.

const KEY = "sfgeo-lead-source";

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

export type LeadSource = Partial<Record<(typeof PARAMS)[number] | "landing" | "referrer", string>>;

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

/** Stores the source once per session; later page views never overwrite it. */
export function captureLeadSource(): void {
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
    if (stored) return JSON.parse(stored) as LeadSource;
  } catch {
    // Fall through to a live read.
  }
  try {
    return snapshot();
  } catch {
    return {};
  }
}
