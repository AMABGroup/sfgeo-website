import { getPlace } from "@/lib/googleReviews";

/**
 * The live Google rating in a hero's fine print: closes a facts line with
 * " · 5.0 from 30 Google reviews", or with `lineClassName` stands as its own
 * line. Renders nothing without both figures from Google, so the page never
 * carries a stale or defaulted number.
 */
export default async function RatingFact({ lineClassName }: { lineClassName?: string }) {
  const place = await getPlace();
  if (place?.rating == null || !place.user_ratings_total) return null;
  const fact = `${place.rating.toFixed(1)} from ${place.user_ratings_total} Google review${place.user_ratings_total === 1 ? "" : "s"}`;
  if (lineClassName) return <p className={lineClassName}>{fact}</p>;
  return <> &middot; <span className="whitespace-nowrap">{fact}</span></>;
}
