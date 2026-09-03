"use client";

import { useEffect, useRef, useState } from "react";

export type SectionNavItem = { id: string; label: string };

/**
 * Sticky in-page navigation for long pages: sits under the header, shows
 * where the reader is, and carries a page progress line. Sections are
 * addressed by id; each gets scroll-margin so anchors land below the bar.
 */
export default function SectionNav({ items, label = "On this page" }: { items: SectionNavItem[]; label?: string }) {
  const [active, setActive] = useState<string>(items[0]?.id ?? "");
  const [progress, setProgress] = useState(0);
  const barRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const targets = items.map((i) => document.getElementById(i.id)).filter((el): el is HTMLElement => !!el);
    const offset = 72 + 52 + 12;
    targets.forEach((t) => (t.style.scrollMarginTop = `${offset}px`));

    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
      // Active section = the last one whose top has passed the bar.
      let cur = targets[0]?.id ?? "";
      for (const t of targets) {
        if (t.getBoundingClientRect().top - offset <= 1) cur = t.id;
      }
      setActive(cur);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [items]);

  // Keep the active link in view on narrow screens.
  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;
    const a = bar.querySelector<HTMLAnchorElement>(`a[href="#${active}"]`);
    if (a && "scrollIntoView" in a) {
      const r = a.getBoundingClientRect();
      const b = bar.getBoundingClientRect();
      if (r.left < b.left || r.right > b.right) a.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
    }
  }, [active]);

  if (!items.length) return null;

  return (
    <nav ref={barRef} aria-label={label} className="sticky top-[72px] z-30 bg-white/85 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center gap-1 overflow-x-auto snap-x [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <span className="hidden lg:inline text-[10px] uppercase tracking-[0.28em] text-gray-400 font-semibold pr-6 shrink-0">{label}</span>
        {items.map((it) => {
          const on = it.id === active;
          return (
            <a
              key={it.id}
              href={`#${it.id}`}
              aria-current={on ? "location" : undefined}
              className={`snap-start shrink-0 h-[52px] flex items-center px-3 text-[12px] font-semibold tracking-wide transition-colors ${on ? "text-forest-green" : "text-gray-500 hover:text-slate-950"}`}
            >
              <span className={`draw-link ${on ? "[background-size:100%_1px]" : ""}`}>{it.label}</span>
            </a>
          );
        })}
      </div>
      <span aria-hidden="true" className="secnav-progress absolute left-0 bottom-[-1px] h-[2px] w-full bg-forest-green" style={{ "--p": progress } as React.CSSProperties} />
    </nav>
  );
}
