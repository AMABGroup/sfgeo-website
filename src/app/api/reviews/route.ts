import { NextResponse } from 'next/server';

export const revalidate = 86400; // Cache the response for 24 hours to prevent exceeding limits

const PLACE_ID = 'ChIJkbo3DVqq1IMRQYQUbuD9XDc'; // SFGEO Place ID
const FALLBACK_MAPS_URL = `https://www.google.com/maps/place/?q=place_id:${PLACE_ID}`;

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
  error?: { message?: string; status?: string };
}

/** Shape the client component consumes. Kept stable across API migrations. */
interface NormalisedPlace {
  reviews: { author_name: string; rating: number; text: string; time: number }[];
  rating: number | null;
  user_ratings_total: number | null;
  maps_url: string;
}

export async function GET() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY || process.env.GOOGLE_MAPS_API_KEY;

  // No key: answer with an empty payload so the client components render
  // nothing rather than spin. (The previous fallback fetched the production
  // URL, which on the production host is this route calling itself.)
  if (!apiKey) {
    return NextResponse.json({ rating: null, user_ratings_total: 0, reviews: [] });
  }

  // Places API (New). The legacy `maps/api/place/details/json` endpoint this
  // route used previously is not enabled on Google Cloud projects created after
  // March 2025 and answers REQUEST_DENIED, which surfaced as a permanent
  // "Loading latest reviews..." on the homepage.
  try {
    const response = await fetch(`https://places.googleapis.com/v1/places/${PLACE_ID}`, {
      headers: {
        'X-Goog-Api-Key': apiKey,
        'X-Goog-FieldMask': 'rating,userRatingCount,googleMapsUri,reviews',
      },
      next: { revalidate: 86400 },
    });

    const data: PlacesNewResponse = await response.json();

    if (!response.ok) {
      // Log Google's actual message — the previous version swallowed it, which
      // made the 500 undiagnosable from the outside.
      console.error('Places API (New) error:', response.status, JSON.stringify(data));
      return NextResponse.json(
        { error: data?.error?.message ?? 'Failed to fetch reviews' },
        { status: 502 }
      );
    }

    const payload: NormalisedPlace = {
      rating: typeof data.rating === 'number' ? data.rating : null,
      user_ratings_total:
        typeof data.userRatingCount === 'number' ? data.userRatingCount : null,
      maps_url: data.googleMapsUri ?? FALLBACK_MAPS_URL,
      reviews: (data.reviews ?? []).map((review) => ({
        author_name: review.authorAttribution?.displayName ?? 'Google user',
        rating: typeof review.rating === 'number' ? review.rating : 0,
        text: review.text?.text ?? review.originalText?.text ?? '',
        time: review.publishTime ? Date.parse(review.publishTime) : 0,
      })),
    };

    return NextResponse.json(payload);
  } catch (error) {
    console.error('Error fetching reviews:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
