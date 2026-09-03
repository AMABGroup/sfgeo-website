"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Ambient clip that costs nothing until it is needed.
 *
 * - No `src` and `preload="none"` at render, so the file is not fetched at
 *   page load; an IntersectionObserver attaches the source and starts
 *   playback ~200px before the clip scrolls into view, and pauses it when
 *   it leaves.
 * - Honours prefers-reduced-motion: the poster is shown and the clip only
 *   plays if the visitor presses play.
 * - Carries a small pause/play control so a looping clip can be stopped
 *   (WCAG 2.2.2). Kept low-key until hover/focus.
 */
export default function LazyVideo({
  src,
  poster,
  label,
  className = "",
}: {
  src: string;
  poster: string;
  label: string;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [armed, setArmed] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!armed) setArmed(true);
          if (!reduced) el.play().catch(() => {});
        } else {
          el.pause();
        }
      },
      { rootMargin: "200px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [armed, reduced]);

  const toggle = () => {
    const el = ref.current;
    if (!el) return;
    if (!armed) setArmed(true);
    if (el.paused) el.play().catch(() => {});
    else el.pause();
  };

  return (
    <>
      <video
        ref={ref}
        src={armed ? src : undefined}
        poster={poster}
        preload="none"
        muted
        loop
        playsInline
        aria-label={label}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        className={className}
      />
      <button
        type="button"
        onClick={toggle}
        aria-pressed={playing}
        aria-label={playing ? "Pause video" : "Play video"}
        className="absolute top-3 right-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-[#050A07]/55 text-white/85 opacity-60 backdrop-blur-sm transition-opacity hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        {playing ? (
          <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <rect x="6" y="5" width="4" height="14" rx="1" />
            <rect x="14" y="5" width="4" height="14" rx="1" />
          </svg>
        ) : (
          <svg className="h-3.5 w-3.5 translate-x-px" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </button>
    </>
  );
}
