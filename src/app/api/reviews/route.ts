import { NextResponse } from 'next/server';
import { getCheckedPlace, hasPlacesKey } from '@/lib/googleReviews';

// Reads the same stored figure as the pages (src/lib/googleReviews.ts), so a
// request here never costs more than the one Places call a day they share.
export const revalidate = 3600;

export async function GET() {
  const checked = await getCheckedPlace();
  if (checked) {
    return NextResponse.json({ ...checked.place, checked_at: new Date(checked.checkedAt).toISOString() });
  }

  // No key: an empty payload rather than a failure. No figure from the last
  // 14 days stays an error, which is not cached.
  if (!hasPlacesKey()) {
    return NextResponse.json({ rating: null, user_ratings_total: 0, reviews: [] });
  }
  return NextResponse.json({ error: 'Failed to fetch reviews' }, { status: 502 });
}
