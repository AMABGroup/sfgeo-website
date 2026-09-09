"use client";

import { useEffect, useRef, useState } from "react";

export type ProofItem = {
  /** e.g. "$800", "2–3", "1", "15+". The leading number counts up. */
  value: string;
  label: string;
  note?: string;
};

type Props = {
  items: ProofItem[];
  variant?: "light" | "dark";
  className?: string;
};

const NUM = /^([^\d]*)(\d[\d,]*)(.*)$/;

function useCountUp(active: boolean, target: number, ms = 1400) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!active) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setN(target);
      return;
    }
    let raf = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / ms);
      const e = 1 - Math.pow(2, -10 * p); // ease-out expo
      setN(Math.round(target * (p >= 1 ? 1 : e)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target, ms]);
  return n;
}

function Value({ value, active }: { value: string; active: boolean }) {
  const m = value.match(NUM);
  const target = m ? parseInt(m[2].replace(/,/g, ""), 10) : 0;
  const n = useCountUp(active, target);
  if (!m) return <>{value}</>;
  const shown = active ? n.toLocaleString("en-AU") : "0";
  // A word in the prefix ("From $800") is set small so the numeral stays
  // the headline and the value holds one line.
  const pm = m[1].match(/^([A-Za-z]+)\s*(.*)$/);
  return (
    <>
      {pm ? (
        <>
          <span className="text-[0.42em] font-normal tracking-wide align-[0.35em] mr-2">{pm[1]}</span>
          {pm[2]}
        </>
      ) : (
        m[1]
      )}
      <span className="tabular-nums">{shown}</span>
      {m[3]}
    </>
  );
}

/**
 * A strip of the numbers that matter — fee from, turnaround, response —
 * counting up as it enters the viewport.
 */
export default function ProofStrip({ items, variant = "light", className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (el.getBoundingClientRect().bottom < 0) {
      setActive(true);
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setActive(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const dark = variant === "dark";
  return (
    <div
      ref={ref}
      className={`grid grid-cols-2 lg:grid-cols-4 ${dark ? "divide-white/10" : "divide-gray-200"} divide-x divide-y lg:divide-y-0 border-y ${dark ? "border-white/10" : "border-gray-200"} ${className}`}
    >
      {items.map((it, i) => (
        <div key={it.label} className={`px-6 py-8 lg:py-10 ${i % 2 === 1 ? "" : "border-l-0"} ${i >= 2 ? "lg:border-t-0" : ""}`}>
          <p className={`font-montserrat font-light tracking-tight text-4xl lg:text-5xl leading-none ${dark ? "text-white" : "text-slate-950"}`}>
            <Value value={it.value} active={active} />
          </p>
          <p className={`mt-3 text-[11px] uppercase tracking-[0.22em] font-semibold ${dark ? "text-[#8FBF9F]" : "text-forest-green"}`}>{it.label}</p>
          {it.note && <p className={`mt-1.5 text-[13px] font-light leading-snug ${dark ? "text-white/55" : "text-gray-500"}`}>{it.note}</p>}
        </div>
      ))}
    </div>
  );
}
