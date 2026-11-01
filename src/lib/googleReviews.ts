// The Google Business Profile rating and reviews, read on the server so both
// are in the served HTML. Server only: the API key must never reach a browser.
//
// Every page that shows them sets `export const revalidate = 86400`, so a day
// is the most a figure can lag. The fetch is cached under one key across those
// pages and /api/reviews, so a day costs one Places call however many pages
// rebuild. The API key is capped at 30 calls a day.

const PLACE_ID = "ChIJkbo3DVqq1IMRQYQUbuD9XDc"; // SFGEO Place ID
const DAY_SECONDS = 86400;

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

export const hasPlacesKey = () => Boolean(process.env.GOOGLE_PLACES_API_KEY || process.env.GOOGLE_MAPS_API_KEY);

/** The place as Google reports it, or null without a key or when the call fails. Never throws. */
export async function getPlace(): Promise<PlaceDetails | null> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY || process.env.GOOGLE_MAPS_API_KEY;
  if (!apiKey) return null;

  // Places API (New). The legacy `maps/api/place/details/json` endpoint this
  // site used previously is not enabled on Google Cloud projects created after
  // March 2025 and answers REQUEST_DENIED.
  try {
    const response = await fetch(`https://places.googleapis.com/v1/places/${PLACE_ID}`, {
      headers: {
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": "rating,userRatingCount,googleMapsUri,reviews",
      },
      next: { revalidate: DAY_SECONDS },
    });

    if (!response.ok) {
      console.error("Places API (New) error:", response.status, await response.text());
      return null;
    }

    const data = (await response.json()) as PlacesNewResponse;
    return {
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
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return null;
  }
}
