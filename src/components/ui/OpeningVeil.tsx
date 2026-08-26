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

// The ground itself: an Inner West aerial — Marrickville, Petersham,
// Lewisham, Stanmore, Newtown — graded to the green-black palette and
// ghosted beneath the section lines. Each band carries its own slice, so
// the excavation pulls the suburb apart with the strata.
const AERIAL: string | null = "/sfgeo-inner-west-aerial.jpg";
const AERIAL_CREDIT = "Base Imagery \u00A9 Google \u00B7 Landsat / Copernicus";

// The suburb is legible at the surface and buried as the section goes down.
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

  useEffect(() => {
    if (sessionStorage.getItem("sfgeo-veil")) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    sessionStorage.setItem("sfgeo-veil", "1");
    document.documentElement.classList.add("veil-hold");
    setPhase("draw");
    const t1 = setTimeout(() => setPhase("excavate"), 4400);
    const t2 = setTimeout(() => {
      // release the hero entrance as the upper layers clear
      document.documentElement.classList.remove("veil-hold");
    }, 4850);
    const t3 = setTimeout(() => setPhase("done"), 6100);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      document.documentElement.classList.remove("veil-hold");
    };
  }, []);

  if (phase === "hidden" || phase === "done") return null;

  const cutting = phase === "excavate";

  return (
    <div className="fixed inset-0 z-[100] pointer-events-none overflow-hidden" aria-hidden="true">
      {/* The ground — five strata, excavated in sequence */}
      {STRATA.map((s, i) => (
        <div
          key={s.label}
          className={`absolute left-0 right-0 bg-[#050A07] transition-transform duration-[1050ms] ease-[cubic-bezier(0.87,0,0.13,1)] ${
            cutting ? (i % 2 === 0 ? "-translate-x-[103%]" : "translate-x-[103%]") : ""
          }`}
          style={{ top: `${i * 20.05}svh`, height: "20.15svh", transitionDelay: cutting ? `${i * 120}ms` : "0ms" }}
        >
          {/* this band's slice of the ground imagery — the suburb reads at the
              surface and is progressively buried with depth */}
          {AERIAL && (
            <img
              src={AERIAL}
              alt=""
              className="absolute left-0 w-full max-w-none object-cover pointer-events-none"
              style={{
                top: `${-i * 20.05}svh`,
                height: "100.4svh",
                objectPosition: "center",
                opacity: DEPTH_FADE[i],
              }}
            />
          )}
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

          {/* source note — drawing furniture, excavates with the deepest layer */}
          {AERIAL && i === STRATA.length - 1 && (
            <span
              className="veil-reg absolute bottom-5 left-6 lg:left-12 text-[9px] uppercase tracking-[0.22em] text-white/30 font-medium"
              style={{ animationDelay: "1800ms" }}
            >
              {AERIAL_CREDIT}
            </span>
          )}
        </div>
      ))}

      {/* Depth scale — draws down the left edge */}
      <div className={`absolute left-[4.5rem] lg:left-[7.5rem] top-0 bottom-0 w-px bg-gradient-to-b from-white/20 via-white/10 to-white/20 veil-scale transition-opacity duration-300 ${cutting ? "opacity-0" : ""}`} />

      {/* Wordmark, centred on the section */}
      <div className={`absolute inset-0 flex flex-col items-center justify-center gap-6 transition-all duration-500 ${cutting ? "opacity-0 scale-[1.03]" : ""}`}>
        <div className="overflow-hidden">
          <div className="relative w-[clamp(200px,32vw,400px)] h-[clamp(52px,8.5vw,105px)] veil-logo">
            <Image src="/SFGEO_logo.png" alt="SFGEO — Solid Foundation Geotechnical" fill sizes="400px" className="object-contain" priority />
          </div>
        </div>
        <p className="veil-reg text-[10px] sm:text-[11px] uppercase tracking-[0.34em] text-white/50 font-semibold text-center px-6" style={{ animationDelay: "1500ms" }}>
          Start Your Project Right &middot; Start With Solid Foundation Geotechnical
        </p>
      </div>
    </div>
  );
}
