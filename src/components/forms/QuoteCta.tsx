"use client";

import { useEffect, useState } from "react";
import QuickQuoteCard from "./QuickQuoteCard";

type QuoteCtaProps = {
  source: string;
  label?: string;
  className?: string;
};

// A CTA button that pops the quote form as a modal — the site-wide
// replacement for inline QuickQuoteCard panels (menu modal pattern).
export default function QuoteCta({ source, label = "Request A Quote", className }: QuoteCtaProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={className}>
        {label}
      </button>
      {open && (
        <div className="fixed inset-0 z-[90] flex items-center justify-center p-4" role="dialog" aria-modal="true">
          <div className="absolute inset-0 bg-[#050A07]/80 backdrop-blur-sm" onClick={() => setOpen(false)} />
          <div className="relative max-h-[92vh] overflow-y-auto rounded-3xl">
            <button onClick={() => setOpen(false)} className="absolute top-4 right-4 z-10 text-white/70 hover:text-white text-xs font-semibold tracking-[0.2em] uppercase">
              Close ✕
            </button>
            <QuickQuoteCard source={source} />
          </div>
        </div>
      )}
    </>
  );
}
