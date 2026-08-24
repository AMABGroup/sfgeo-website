"use client";

import { useEffect, useRef } from "react";

/**
 * Lightweight scroll reveal: adds `.is-in` when the element enters the
 * viewport. Styling lives in globals.css (.reveal / .is-in) and collapses
 * to no motion under prefers-reduced-motion. Replaces framer-motion's
 * whileInView for server-rendered sections so content never SSRs invisible.
 */
export default function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-in");
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -60px 0px", threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${className}`} style={delay ? { transitionDelay: `${delay}ms` } : undefined}>
      {children}
    </div>
  );
}
