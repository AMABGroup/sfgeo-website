// Small in-memory throttle for the public API routes. Serverless instances do not
// share memory, so this bounds bursts per instance rather than globally; it is a
// backstop behind the honeypot, not a substitute for a WAF rule.
const buckets = new Map<string, number[]>();

export function clientIp(request: Request): string {
  const h = request.headers;
  return (
    h.get("x-nf-client-connection-ip") ||
    h.get("x-forwarded-for")?.split(",")[0].trim() ||
    h.get("x-real-ip") ||
    "unknown"
  );
}

/** Returns true when the caller has exceeded `limit` hits in the trailing `windowMs`. */
export function rateLimited(key: string, limit: number, windowMs: number): boolean {
  const now = Date.now();
  const hits = (buckets.get(key) || []).filter((t) => now - t < windowMs);
  hits.push(now);
  buckets.set(key, hits);
  if (buckets.size > 5000) {
    for (const [k, v] of buckets) if (v.every((t) => now - t >= windowMs)) buckets.delete(k);
  }
  return hits.length > limit;
}
