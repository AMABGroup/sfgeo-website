import { NextResponse } from 'next/server';

export const revalidate = 86400; // Cache the response for 24 hours to prevent exceeding limits

export async function GET() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = 'ChIJkbo3DVqq1IMRQYQUbuD9XDc'; // SFGEO Place ID

  if (!apiKey) {
    return NextResponse.json({ error: 'API key not configured' }, { status: 500 });
  }

  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&key=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();

    if (data.status === 'OK' && data.result) {
      return NextResponse.json(data.result);
    } else {
      console.error('Google Places API Error:', data);
      return NextResponse.json({ error: 'Failed to fetch reviews' }, { status: 500 });
    }
  } catch (error) {
    console.error('Error fetching reviews:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
