import { StarIcon } from "@heroicons/react/24/solid";
import { getPlace } from "@/lib/googleReviews";

/**
 * Stars + "5.0 on Google · 30 reviews", on the server. Renders nothing without
 * a numeric rating from Google: never a defaulted figure.
 */
export default async function ReviewsSummary() {
  const place = await getPlace();
  const overallRating = place?.rating ?? null;
  const ratingTotal = place?.user_ratings_total ?? null;

  if (overallRating === null) return null;

  return (
    <div className="mb-4 flex items-center gap-2">
      <div className="flex text-accent-gold gap-0.5">
        {[...Array(5)].map((_, i) => (
          <StarIcon key={i} className={`w-5 h-5 ${i < Math.round(overallRating) ? 'text-yellow-500' : 'text-gray-300'}`} />
        ))}
      </div>
      <span className="text-sm font-semibold text-slate-black tracking-wide ml-1">
        {overallRating.toFixed(1)} on Google
        {ratingTotal !== null && ` · ${ratingTotal} review${ratingTotal === 1 ? '' : 's'}`}
      </span>
    </div>
  );
}
