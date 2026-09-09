"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

/**
 * Grand entrance — THE SECTION CUT. The screen opens as a geological
 * section drawing: a depth scale draws down the left, strata boundaries
 * and labels register across the dark ground, the wordmark sits centred —
 * then the ground excavates open, layer by layer, and the headline rises
 * through it (hero entrance held via .veil-hold until the cut begins).
 * Brand-native: the borehole log is the house motif. Plays once per
 * session; skipped for reduced-motion users.
 */

// The ground itself: the drive through the Harbour Bridge arch at dusk,
// shot from the ute, looping beneath the section lines. Each stratum band
// is a translucent layer over it, so the city reads at the surface and is
// buried as the section goes down; the excavation then pulls the bands
// apart to reveal the drive before the hero takes over.
const VEIL_VIDEO_MP4 = "/veil/harbour-bridge.mp4";
const VEIL_VIDEO_MOBILE_MP4 = "/veil/harbour-bridge-mobile.mp4";
const VEIL_POSTER = "/veil/harbour-bridge-poster.jpg";

// How much of the drive shows through each stratum: legible at the surface,
// near-black at depth.
const DEPTH_FADE = [0.66, 0.46, 0.30, 0.17, 0.09];

const STRATA = [
  { label: "TOPSOIL", depth: "0.0 m" },
  { label: "SILTY CLAY", depth: "2.0 m" },
  { label: "RESIDUAL CLAY", depth: "4.0 m" },
  { label: "SHALE", depth: "6.0 m" },
  { label: "SANDSTONE", depth: "8.0 m" },
];

export default function OpeningVeil() {
  const [phase, setPhase] = useState<"hidden" | "draw" | "excavate" | "done">("hidden");
  const [videoSrc, setVideoSrc] = useState(VEIL_VIDEO_MP4);

  useEffect(() => {
    // The inline script in layout.tsx may have painted the ground before hydration; from here the
    // component owns the veil, so release that ground on every path out of this effect.
    const release = () => document.documentElement.classList.remove("veil-pre");
    if (sessionStorage.getItem("sfgeo-veil")) return release();
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return release();
    // Data saver or a slow link: skip the video entirely rather than fight for bandwidth.
    const conn = (navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } }).connection;
    if (conn && (conn.saveData || (conn.effectiveType && conn.effectiveType !== "4g"))) return release();
    if (window.innerWidth <= 768) setVideoSrc(VEIL_VIDEO_MOBILE_MP4);
    // Late hydration (slow network / CPU): if the inline script never painted the ground, the hero
    // has been visible and read, so don't drop the intro over it. If the ground has been up since
    // first paint, nothing has been seen yet and the intro can still run.
    const prePainted = document.documentElement.classList.contains("veil-pre");
    if (!prePainted && performance.now() > 1200) return release();
    sessionStorage.setItem("sfgeo-veil", "1");
    release();
    document.documentElement.classList.add("veil-hold");
    setPhase("draw");
    let cutting = false;
    let t2: ReturnType<typeof setTimeout> | undefined;
    let t3: ReturnType<typeof setTimeout> | undefined;
    // The cut: excavate now, release the hero entrance as the upper layers
    // clear, then clear the veil. Same choreography whether the drawing
    // phase runs its course or the visitor skips ahead.
    const cut = () => {
      if (cutting) return;
      cutting = true;
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("pointerdown", skip);
      setPhase("excavate");
      // Release the hero entrance as the upper bands clear (700 ms), dissolve
      // the veil over the rising headline (800–1900 ms), then unmount.
      t2 = setTimeout(() => {
        document.documentElement.classList.remove("veil-hold");
      }, 700);
      t3 = setTimeout(() => setPhase("done"), 2000);
    };
    // Escape hatch while the section is drawing: Escape or any pointer cuts
    // straight to the excavation.
    const skip = () => {
      clearTimeout(t1);
      cut();
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") skip();
    };
    const t1 = setTimeout(cut, 3600);
    window.addEventListener("keydown", onKey);
    window.addEventListener("pointerdown", skip);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("pointerdown", skip);
      document.documentElement.classList.remove("veil-hold");
    };
  }, []);

  if (phase === "hidden" || phase === "done") return null;

  const cutting = phase === "excavate";

  return (
    <div
      className={`fixed inset-0 z-[100] pointer-events-none overflow-hidden bg-[#050A07] transition-opacity duration-[1100ms] ease-in-out ${cutting ? "opacity-0 delay-[800ms]" : ""}`}
      aria-hidden="true"
    >
      {/* The drive: muted, looping, poster until the first frame decodes */}
      <video
        className={`absolute inset-0 w-full h-full object-cover transition-transform duration-[2400ms] ease-out ${cutting ? "scale-[1.06]" : "scale-100"}`}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={VEIL_POSTER}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      {/* The ground — five strata over the drive, excavated in sequence */}
      {STRATA.map((s, i) => (
        <div
          key={s.label}
          className={`absolute left-0 right-0 transition-transform duration-[1050ms] ease-[cubic-bezier(0.87,0,0.13,1)] ${
            cutting ? (i % 2 === 0 ? "-translate-x-[103%]" : "translate-x-[103%]") : ""
          }`}
          style={{
            top: `${i * 20.05}svh`,
            height: "20.15svh",
            backgroundColor: `rgba(5, 10, 7, ${(1 - DEPTH_FADE[i]).toFixed(2)})`,
            transitionDelay: cutting ? `${i * 120}ms` : "0ms",
          }}
        >
          {/* contact shadow at the stratum boundary — reads as geology and
              keeps the drafting furniture legible over bright ground */}
          <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#050A07]/85 via-[#050A07]/45 to-transparent pointer-events-none" />
          {i > 0 && <div className="absolute top-0 left-0 right-0 h-px bg-white/[0.16]" />}
          {/* stratum label, drafting-style */}
          <span
            className="veil-reg absolute right-6 lg:right-12 text-[10px] uppercase tracking-[0.3em] text-white/30 font-semibold"
            style={{ top: i === 0 ? "1.75rem" : "0.75rem", animationDelay: `${650 + i * 230}ms` }}
          >
            {s.label}
          </span>
          {/* depth marker at the layer boundary */}
          <span
            className="veil-reg absolute left-6 lg:left-12 text-[10px] tracking-[0.14em] tabular-nums text-[#8FBF9F]/70 font-medium"
            style={{ top: i === 0 ? "1.75rem" : "0.75rem", animationDelay: `${520 + i * 230}ms` }}
          >
            {s.depth}
          </span>

        </div>
      ))}

      {/* Skip hint: any pointer or Escape already cuts to the site */}
      <span
        className={`veil-reg absolute bottom-5 right-6 lg:right-12 text-[10px] uppercase tracking-[0.3em] text-white/45 font-semibold transition-opacity duration-300 ${cutting ? "opacity-0" : ""}`}
        style={{ animationDelay: "1200ms" }}
      >
        Skip &middot; Click Or Esc
      </span>

      {/* Depth scale — draws down the left edge */}
      <div className={`absolute left-[4.5rem] lg:left-[7.5rem] top-0 bottom-0 w-px bg-gradient-to-b from-white/20 via-white/10 to-white/20 veil-scale transition-opacity duration-300 ${cutting ? "opacity-0" : ""}`} />

      {/* Wordmark, centred on the section */}
      <div className={`absolute inset-0 flex flex-col items-center justify-center gap-6 transition-all duration-500 ${cutting ? "opacity-0 scale-[1.03]" : ""}`}>
        <div className="overflow-hidden">
          <div className="relative w-[clamp(200px,32vw,400px)] h-[clamp(52px,8.5vw,105px)] veil-logo">
            <Image src="/SFGEO_logo.png" alt="SFGEO, Solid Foundation Geotechnical" fill sizes="400px" className="object-contain" priority />
          </div>
        </div>
        <p className="veil-reg text-[10px] sm:text-[11px] uppercase tracking-[0.34em] text-white/50 font-semibold text-center px-6" style={{ animationDelay: "1500ms" }}>
          Start Your Project Right &middot; Start With Solid Foundation Geotechnical
        </p>
      </div>
    </div>
  );
}
