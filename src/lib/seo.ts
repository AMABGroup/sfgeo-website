/**
 * Shared metadata fragments. Page-level `openGraph` objects REPLACE the root
 * one rather than merging with it, so every sub-page that spreads OG_BASE
 * keeps og:type, og:site_name, og:locale and the sized/alt'd image that the
 * root layout emits. Twitter follows the same pattern via TWITTER_BASE.
 */
export const SITE_URL = "https://sfgeo.com.au";

export const OG_IMAGE = {
  url: "/og/sfgeo-og-card.jpg",
  width: 1200,
  height: 630,
  alt: "SFGEO Geotechnical Engineering Sydney",
};

export const OG_BASE = {
  siteName: "SFGEO",
  locale: "en_AU",
  type: "website" as const,
  images: [OG_IMAGE],
};

export const TWITTER_BASE = {
  card: "summary_large_image" as const,
  images: [OG_IMAGE.url],
};

/** Build a complete page metadata block from a title, description and path. */
export function pageMeta(title: string, description: string, path: string) {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { ...OG_BASE, title, description, url: path },
    twitter: { ...TWITTER_BASE, title, description },
  };
}
