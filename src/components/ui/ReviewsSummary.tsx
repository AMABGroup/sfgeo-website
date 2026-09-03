"use client";

import { useEffect, useState } from "react";
import { StarIcon } from "@heroicons/react/24/solid";

interface Summary {
  rating: number | null;
  total: number | null;
}

/**
 * Stars + "5.0 on Google · 20 reviews" from /api/reviews. Renders nothing
 * until a numeric rating arrives — never a defaulted 5.0.
 */
export default function ReviewsSummary() {
  const [summary, setSummary] = useState<Summary | null>(null);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      try {
        const response = await fetch("/api/reviews");
        if (!response.ok) return;
        const data = await response.json();
        if (cancelled) return;
        setSummary({
          rating: typeof data?.rating === "number" ? data.rating : null,
          total: typeof data?.user_ratings_total === "number" ? data.user_ratings_total : null,
        });
      } catch (error) {
        console.error("Failed to fetch reviews summary", error);
      }
    }
    load();
    return () => {
      cancelled = true;
    };
  }, []);

  const overallRating = summary?.rating ?? null;
  const ratingTotal = summary?.total ?? null;

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
