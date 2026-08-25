"use client";

import { useEffect, useState } from "react";

/**
 * V3 grand opening: counter climbs, the green seam draws across, the
 * curtain splits along it. Plays once per browser session; skipped for
 * reduced-motion users. Approved in the concept rounds.
 */
export default function OpeningVeil() {
  const [phase, setPhase] = useState<"hidden" | "count" | "armed" | "split" | "done">("hidden");
  const [n, setN] = useState(0);

  useEffect(() => {
    if (sessionStorage.getItem("sfgeo-veil")) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    sessionStorage.setItem("sfgeo-veil", "1");
    setPhase("count");
    const T = 1700;
    const t0 = performance.now();
    const ease = (t: number) => 1 - Math.pow(1 - t, 3);
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / T);
      setN(Math.round(ease(p) * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else {
        setPhase("armed");
        setTimeout(() => setPhase("split"), 600);
        setTimeout(() => setPhase("done"), 1900);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  if (phase === "hidden" || phase === "done") return null;

  return (
    <div className="fixed inset-0 z-[100] pointer-events-none" aria-hidden="true">
      <div className={`absolute left-0 right-0 top-0 h-[50.2%] bg-[#050A07] grain transition-transform duration-[1150ms] ease-[cubic-bezier(0.77,0,0.18,1)] ${phase === "split" ? "-translate-y-[101%]" : ""}`} />
      <div className={`absolute left-0 right-0 bottom-0 h-[50.2%] bg-[#050A07] grain transition-transform duration-[1150ms] ease-[cubic-bezier(0.77,0,0.18,1)] ${phase === "split" ? "translate-y-[101%]" : ""}`} />
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[2px] bg-forest-green shadow-[0_0_24px_rgba(45,90,58,0.9)] transition-all duration-700 ease-[cubic-bezier(0.77,0,0.18,1)] ${phase === "count" ? "w-[120px]" : phase === "armed" || phase === "split" ? "w-screen" : "w-0"} ${phase === "split" ? "opacity-0" : ""}`} />
      <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${phase === "split" ? "opacity-0 scale-[1.04]" : ""}`}>
        <span className="font-montserrat font-light text-white tracking-[0.14em] text-[clamp(3rem,9vw,7rem)]">
          SF<span className="font-semibold">GEO</span>
        </span>
      </div>
      <span className={`absolute left-6 lg:left-12 bottom-7 font-montserrat font-light text-white/55 text-sm tracking-[0.18em] tabular-nums transition-opacity ${phase === "split" ? "opacity-0" : ""}`}>
        {String(n).padStart(2, "0")}
      </span>
    </div>
  );
}
