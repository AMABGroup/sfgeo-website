"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

/**
 * Grand entrance, after the monumental-restraint reference: the hero
 * photograph sits letterboxed on a white canvas beneath the Acknowledgment
 * of Country, then the frame expands to full bleed and the veil dissolves
 * as the headline rises (hero entrance held via .veil-hold until then).
 * Plays once per browser session; skipped for reduced-motion users.
 */
export default function OpeningVeil() {
  const [phase, setPhase] = useState<"hidden" | "ack" | "expand" | "fade" | "done">("hidden");

  useEffect(() => {
    if (sessionStorage.getItem("sfgeo-veil")) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    sessionStorage.setItem("sfgeo-veil", "1");
    document.documentElement.classList.add("veil-hold");
    setPhase("ack");
    const t1 = setTimeout(() => setPhase("expand"), 3100);
    const t2 = setTimeout(() => {
      setPhase("fade");
      // release the hero entrance as the veil dissolves
      document.documentElement.classList.remove("veil-hold");
    }, 4800);
    const t3 = setTimeout(() => setPhase("done"), 5600);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      document.documentElement.classList.remove("veil-hold");
    };
  }, []);

  if (phase === "hidden" || phase === "done") return null;

  const expanded = phase === "expand" || phase === "fade";

  return (
    <div
      className={`fixed inset-0 z-[100] bg-white pointer-events-none transition-opacity duration-700 ease-out ${phase === "fade" ? "opacity-0" : "opacity-100"}`}
      aria-hidden="true"
    >
      {/* The framed photograph — expands to full bleed */}
      <div
        className={`absolute overflow-hidden transition-all duration-[1700ms] ease-[cubic-bezier(0.87,0,0.13,1)] ${
          expanded
            ? "inset-0"
            : "left-[8vw] right-[8vw] top-[16svh] bottom-[16svh] sm:left-[21vw] sm:right-[21vw] sm:top-[19svh] sm:bottom-[19svh]"
        }`}
      >
        <Image
          src="/sfgeo-crew-waterside-drilling.jpg"
          alt=""
          fill
          sizes="100vw"
          quality={60}
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#050A07]/45" />

        {/* Acknowledgment of Country */}
        <div className={`absolute inset-0 flex items-center justify-center px-8 transition-opacity duration-700 ${phase === "ack" ? "opacity-100" : "opacity-0"}`}>
          <p className="veil-ack max-w-md text-center text-[12px] sm:text-[13px] leading-[1.9] tracking-[0.08em] text-white/85 font-light">
            We acknowledge the Traditional Custodians of the lands on which we live and work, and pay our respects to Elders past and present.
          </p>
        </div>
      </div>
    </div>
  );
}
