"use client";

import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

interface VideoEmbedProps {
  id: string;
  title: string;
  poster?: "maxresdefault" | "hqdefault" | "mqdefault" | "sddefault";
  webp?: boolean;
}

export default function VideoEmbed({ id, title, poster = "maxresdefault", webp = true }: VideoEmbedProps) {
  return (
    <LiteYouTubeEmbed
      id={id}
      title={title}
      poster={poster}
      webp={webp}
      params="modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&controls=1&playsinline=1"
    />
  );
}
