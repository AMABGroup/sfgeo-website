"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

/**
 * V3 grand opening, choreographed with the hero: counter climbs, the green
 * seam draws and flares, the curtain splits — and the hero headline rises
 * through the parting curtain (its CSS entrance is held via .veil-hold until
 * the split begins). Plays once per browser session; skipped for
 * reduced-motion users.
 */
export default function OpeningVeil() {
  const [phase, setPhase] = useState<"hidden" | "count" | "armed" | "split" | "done">("hidden");
  const [n, setN] = useState(0);

  useEffect(() => {
    if (sessionStorage.getItem("sfgeo-veil")) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    sessionStorage.setItem("sfgeo-veil", "1");
    document.documentElement.classList.add("veil-hold");
    setPhase("count");
    const T = 1800;
    const t0 = performance.now();
    const ease = (t: number) => 1 - Math.pow(1 - t, 3);
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / T);
      setN(Math.round(ease(p) * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else {
        setPhase("armed");
        setTimeout(() => {
          setPhase("split");
          // release the hero entrance as the curtains part
          document.documentElement.classList.remove("veil-hold");
        }, 700);
        setTimeout(() => setPhase("done"), 2300);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      document.documentElement.classList.remove("veil-hold");
    };
  }, []);

  if (phase === "hidden" || phase === "done") return null;

  return (
    <div className="fixed inset-0 z-[100] pointer-events-none" aria-hidden="true">
      {/* Curtains */}
      <div className={`absolute left-0 right-0 top-0 h-[50.2%] bg-[#050A07] grain transition-transform duration-[1400ms] ease-[cubic-bezier(0.87,0,0.13,1)] ${phase === "split" ? "-translate-y-[101%]" : ""}`} />
      <div className={`absolute left-0 right-0 bottom-0 h-[50.2%] bg-[#050A07] grain transition-transform duration-[1400ms] ease-[cubic-bezier(0.87,0,0.13,1)] ${phase === "split" ? "translate-y-[101%]" : ""}`} />

      {/* The seam — draws, then flares before the split */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[2px] bg-forest-green transition-all ease-[cubic-bezier(0.77,0,0.18,1)] ${
          phase === "count"
            ? "w-[120px] duration-700 shadow-[0_0_24px_rgba(45,90,58,0.9)]"
            : phase === "armed"
            ? "w-screen duration-700 shadow-[0_0_60px_6px_rgba(85,160,110,0.95)] veil-seam-flare"
            : phase === "split"
            ? "w-screen duration-500 opacity-0 shadow-[0_0_60px_6px_rgba(85,160,110,0.95)]"
            : "w-0 duration-700"
        }`}
      />

      {/* Wordmark + tagline */}
      <div className={`absolute inset-0 flex flex-col items-center justify-center gap-7 transition-all duration-700 ${phase === "split" ? "opacity-0 scale-[1.05] blur-[2px]" : ""}`}>
        <div className="overflow-hidden">
          <div className="relative w-[clamp(220px,38vw,460px)] h-[clamp(60px,10vw,120px)] veil-logo-rise">
            <Image src="/SFGEO_logo.png" alt="SFGEO — Solid Foundation Geotechnical" fill sizes="460px" className="object-contain" priority />
          </div>
        </div>
        <p className="veil-tagline text-[11px] sm:text-xs uppercase text-white/70 font-semibold text-center px-6">
          Start Your Project Right &middot; Start With Solid Foundation Geotechnical
        </p>
      </div>

      {/* Counter */}
      <span className={`absolute left-6 lg:left-12 bottom-7 font-montserrat font-extralight text-white/60 text-lg tracking-[0.22em] tabular-nums transition-opacity duration-500 ${phase === "split" ? "opacity-0" : ""}`}>
        {String(n).padStart(2, "0")}
      </span>
    </div>
  );
}
