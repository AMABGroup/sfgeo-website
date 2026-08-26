"use client";

import GoogleReviews from "@/components/ui/GoogleReviews";

/** Reviews band — individual reviews are clamped with per-card Read More,
 *  so the section stays uniform without a wrapper collapse. */
export default function HomeReviews() {
  return <GoogleReviews />;
}
