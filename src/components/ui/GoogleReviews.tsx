"use client";

import { useEffect, useState, type CSSProperties } from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import Reveal from "./Reveal";

interface Review {
  author_name: string;
  rating: number;
  text: string;
  time: number;
}

interface PlaceDetails {
  reviews?: Review[];
  rating?: number | null;
  user_ratings_total?: number | null;
  maps_url?: string;
}

const PLACE_ID = "ChIJkbo3DVqq1IMRQYQUbuD9XDc";
// Google retired /local/reviews?placeid= — it now answers 404. The Maps place
// deep link is the supported way to send visitors to the review list.
export const READ_REVIEWS_URL = `https://www.google.com/maps/place/?q=place_id:${PLACE_ID}`;
const WRITE_REVIEW_URL = `https://search.google.com/local/writereview?placeid=${PLACE_ID}`;

const d = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

// Excerpts of published Google reviews (5.0 · 20 reviews at 4 Sep 2026), shown
// whenever the live Places call returns nothing — so the band never goes bare.
const FALLBACK_REVIEWS: Review[] = [
  {
    author_name: "Ehsan N.",
    rating: 5,
    text: "I recently engaged Solid Foundation Geotechnical for a geotechnical investigation and was extremely impressed with the quality of service and professionalism from start to finish.",
    time: 0,
  },
  {
    author_name: "Mina B.",
    rating: 5,
    text: "I had an excellent experience with Solid Foundation Geotechnical. The team was professional, knowledgeable, and responsive throughout the entire process.",
    time: 0,
  },
];

function Stars({ n, size = "w-4 h-4" }: { n: number; size?: string }) {
  return (
    <span className="flex gap-0.5" aria-hidden="true">
      {[...Array(5)].map((_, i) => (
        <StarIcon key={i} className={`${size} ${i < Math.round(n) ? "text-yellow-500" : "text-gray-300"}`} />
      ))}
    </span>
  );
}

type Props = {
  /** "grid": centred heading + three cards (service pages). "column": a quiet
   *  stacked column for sitting beside another block (home). */
  layout?: "grid" | "column";
};

export default function GoogleReviews({ layout = "grid" }: Props) {
  const [data, setData] = useState<PlaceDetails | null>(null);
  const [expanded, setExpanded] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const response = await fetch("/api/reviews");
        if (response.ok) {
          const result = await response.json();
          setData(result);
        }
      } catch (error) {
        console.error("Failed to fetch reviews", error);
      } finally {
        setLoading(false);
      }
    }
    fetchReviews();
  }, []);

  if (loading) {
    return (
      <div className={`${layout === "column" ? "min-h-[160px]" : "min-h-[300px]"} flex items-center justify-center`}>
        <div className="w-6 h-6 border-2 border-forest-green border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  const column = layout === "column";
  // High-quality reviews with real text only; three on the grid, two in a column.
  const liveReviews = data?.reviews?.filter((r) => r.rating >= 4 && r.text && r.text.trim().length > 0).slice(0, column ? 2 : 3) || [];
  const topReviews = liveReviews.length ? liveReviews : FALLBACK_REVIEWS;
  // Only ever render a rating we actually received.
  const overallRating = typeof data?.rating === "number" ? data.rating : null;
  const ratingTotal = typeof data?.user_ratings_total === "number" ? data.user_ratings_total : null;
  const readReviewsUrl = data?.maps_url ?? READ_REVIEWS_URL;

  const readBtn = (cls: string) => (
    <a href={readReviewsUrl} target="_blank" rel="noopener noreferrer" className={cls}>
      Read Our Reviews<span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
  const writeBtn = (cls: string) => (
    <a href={WRITE_REVIEW_URL} target="_blank" rel="noopener noreferrer" className={cls}>
      Leave A Review<span className="sr-only"> (opens in a new tab)</span>
    </a>
  );

  const card = (review: Review, index: number, quiet: boolean) => (
    <div
      key={index}
      className={
        quiet
          ? "flex flex-col border-t border-gray-200 pt-6"
          : "card-lift flex flex-col relative px-8 py-10 rounded-2xl bg-white border border-gray-100 shadow-sm"
      }
    >
      <div className="mb-4">
        <Stars n={review.rating} />
      </div>
      <blockquote className={`text-gray-700 leading-relaxed font-light flex-grow ${quiet ? "text-[15px]" : "text-base"}`}>
        <span className={expanded === index ? "" : "line-clamp-4"}>&ldquo;{review.text}&rdquo;</span>
      </blockquote>
      {review.text.length > 220 && (
        <button
          type="button"
          onClick={() => setExpanded(expanded === index ? null : index)}
          className="self-start inline-flex items-center min-h-[44px] pr-4 -mb-2 text-xs font-semibold tracking-wide text-forest-green hover:text-slate-950 transition-colors"
        >
          {expanded === index ? "Show Less" : "Read More"}
        </button>
      )}
      <p className={`text-sm font-semibold tracking-wide text-slate-950 ${quiet ? "mt-4" : "pt-6 mt-2 border-t border-gray-200"}`}>{review.author_name}</p>
    </div>
  );

  if (column) {
    return (
      <Reveal variant="group">
        <p data-fx="rise" className="text-[11px] uppercase tracking-[0.28em] text-forest-green font-semibold mb-4">What Clients Say On Google</p>
        {overallRating !== null ? (
          <div data-fx="rise" style={d(80)} className="flex items-baseline gap-4 mb-2">
            <span className="font-montserrat font-light text-5xl leading-none text-slate-950 tabular-nums">{overallRating.toFixed(1)}</span>
            <span className="flex flex-col gap-1">
              <Stars n={overallRating} />
              {ratingTotal !== null && <span className="text-[12px] text-gray-500 font-light">{ratingTotal} Google review{ratingTotal === 1 ? "" : "s"}</span>}
            </span>
          </div>
        ) : (
          <p data-fx="rise" style={d(80)} className="text-[15px] text-gray-600 font-light leading-relaxed mb-2">
            Homeowners, builders and engineers across Sydney, in their own words.
          </p>
        )}
        {topReviews.length > 0 && (
          <div data-stagger style={d(160)} className="mt-6 flex flex-col gap-6">
            {topReviews.map((r, i) => card(r, i, true))}
          </div>
        )}
        <div data-fx="rise" style={d(300)} className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3">
          {readBtn("text-sm font-semibold tracking-wide text-forest-green draw-link")}
          {writeBtn("text-sm font-semibold tracking-wide text-slate-950 hover:text-forest-green transition-colors draw-link")}
        </div>
      </Reveal>
    );
  }

  return (
    <>
      <Reveal variant="group" className="text-center mb-16">
        <h2 data-fx="rise" className="text-3xl font-light tracking-tight font-montserrat text-slate-950">
          Client <span className="font-semibold h-bold">Feedback.</span>
        </h2>
        <div data-fx="line" style={d(200)} className="mt-6 h-px bg-forest-green w-12 mx-auto [transform-origin:center]" />
        {overallRating === null ? (
          <p data-fx="rise" style={d(120)} className="mt-5 text-sm text-gray-500 font-light max-w-md mx-auto leading-relaxed">
            Homeowners, builders and engineers across Sydney &mdash; read what they say about the work on Google.
          </p>
        ) : (
          <div data-fx="rise" style={d(120)} className="mt-5 flex items-center justify-center gap-3">
            <Stars n={overallRating} size="w-5 h-5" />
            <span className="text-sm font-semibold text-slate-950 tracking-wide">
              {overallRating.toFixed(1)} on Google
              {ratingTotal !== null && ` · ${ratingTotal} review${ratingTotal === 1 ? "" : "s"}`}
            </span>
          </div>
        )}
      </Reveal>

      {topReviews.length > 0 && (
        <Reveal variant="group">
          <div data-stagger className={`grid grid-cols-1 gap-8 ${topReviews.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2 max-w-4xl mx-auto"}`}>
            {topReviews.map((r, i) => card(r, i, false))}
          </div>
        </Reveal>
      )}

      <Reveal variant="group">
        <div data-stagger className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6">
          {readBtn("flex items-center justify-center px-8 h-[46px] bg-white text-forest-green rounded-full shadow-[inset_0_0_0_1px_rgba(45,90,58,0.25),0_4px_10px_-4px_rgba(0,0,0,0.05)] hover:bg-forest-green/5 transition-all hover:-translate-y-0.5 text-xs font-semibold tracking-wide")}
          {writeBtn("flex items-center justify-center px-8 h-[46px] bg-gradient-to-b from-[#346b43] to-forest-green text-white rounded-full text-xs font-semibold tracking-wide shadow-[0_8px_20px_-6px_rgba(45,90,58,0.4)] hover:shadow-[0_12px_24px_-8px_rgba(45,90,58,0.6)] hover:brightness-105 transition-all hover:-translate-y-0.5")}
        </div>
      </Reveal>
    </>
  );
}
