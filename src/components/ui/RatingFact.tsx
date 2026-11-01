import { getPlace } from "@/lib/googleReviews";

/**
 * Closes a hero facts line with the live Google rating: " · 5.0 from 30 Google
 * reviews". Renders nothing without both figures from Google, so a line never
 * carries a stale or defaulted number.
 */
export default async function RatingFact() {
  const place = await getPlace();
  if (place?.rating == null || !place.user_ratings_total) return null;
  return (
    <>
      {" "}
      &middot; {place.rating.toFixed(1)} from {place.user_ratings_total} Google review{place.user_ratings_total === 1 ? "" : "s"}
    </>
  );
}
