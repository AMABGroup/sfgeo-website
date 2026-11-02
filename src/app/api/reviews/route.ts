import { NextResponse } from 'next/server';
import { getPlace, hasPlacesKey } from '@/lib/googleReviews';

export const revalidate = 86400; // Cache the response for 24 hours to prevent exceeding limits

export async function GET() {
  const place = await getPlace();
  if (place) return NextResponse.json(place);

  // No key: an empty payload rather than a failure. A failed call stays an
  // error, which is not cached, so the next request tries again.
  if (!hasPlacesKey()) {
    return NextResponse.json({ rating: null, user_ratings_total: 0, reviews: [] });
  }
  return NextResponse.json({ error: 'Failed to fetch reviews' }, { status: 502 });
}
