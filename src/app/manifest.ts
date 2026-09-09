import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "SFGEO · Solid Foundation Geotechnical",
    short_name: "SFGEO",
    description: "Principal-led geotechnical engineers in Marrickville, Sydney.",
    start_url: "/",
    display: "browser",
    background_color: "#050A07",
    theme_color: "#2D5A3A",
    icons: [{ src: "/icon.png", sizes: "any", type: "image/png" }],
  };
}
