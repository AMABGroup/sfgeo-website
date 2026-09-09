"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  /** Delay in ms before the entrance starts. */
  delay?: number;
  /**
   * "self"  — the wrapper itself fades and rises (the original behaviour).
   * "group" — the wrapper is static; children carry data-fx / data-stagger
   *           and enter in choreography. Use this for any section block.
   */
  variant?: "self" | "group";
  as?: "div" | "section" | "figure" | "li" | "header";
  id?: string;
  style?: CSSProperties;
};

/**
 * Scroll reveal. Adds `.is-in` when the element enters the viewport; the
 * motion itself lives in globals.css and collapses to nothing under
 * prefers-reduced-motion or without JavaScript, so content never renders
 * invisible on the server.
 */
export default function Reveal({ children, className = "", delay = 0, variant = "self", as: Tag = "div", id, style }: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Already scrolled past before hydration: reveal immediately.
    if (el.getBoundingClientRect().bottom < 0) {
      el.classList.add("is-in");
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-in");
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.08 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const cls = `reveal ${variant === "group" ? "reveal-group " : ""}${className}`.trim();
  const st: CSSProperties | undefined = delay
    ? variant === "group"
      ? ({ ...(style || {}), "--d": `${delay}ms` } as CSSProperties)
      : { ...(style || {}), transitionDelay: `${delay}ms` }
    : style;

  // A generic element with a shared ref type: the tag set is closed, so the
  // cast is safe and keeps the JSX simple.
  const El = Tag as unknown as "div";
  return (
    <El ref={ref as React.RefObject<HTMLDivElement>} id={id} className={cls} style={st}>
      {children}
    </El>
  );
}
