"use client";

import { useEffect, useRef, useState } from "react";
import QuickQuoteCard from "./QuickQuoteCard";

type QuoteCtaProps = {
  source: string;
  label?: string;
  className?: string;
  eyebrow?: string;
  heading?: string;
  subheading?: string;
};

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

// A CTA button that pops the quote form as a modal — the site-wide
// replacement for inline QuickQuoteCard panels (menu modal pattern).
// `eyebrow` / `heading` / `subheading` let B2B pages replace the homeowner
// copy on the card; the defaults live in QuickQuoteCard.
export default function QuoteCta({ source, label = "Request A Quote", className, eyebrow, heading, subheading }: QuoteCtaProps) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const trigger = triggerRef.current;
    // Focus lands on the Close button so the dialog announces its name and
    // the first Tab reaches the form's first field.
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        return;
      }
      if (e.key !== "Tab" || !dialogRef.current) return;
      const focusable = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE)
      ).filter((el) => el.tabIndex >= 0 && el.getClientRects().length > 0);
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement as HTMLElement | null;
      const inside = active !== null && dialogRef.current.contains(active);
      if (e.shiftKey) {
        if (!inside || active === first) {
          e.preventDefault();
          last.focus();
        }
      } else if (!inside || active === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      // Hand focus back to whatever opened the dialog.
      trigger?.focus();
    };
  }, [open]);

  return (
    <>
      <button ref={triggerRef} type="button" onClick={() => setOpen(true)} className={className}>
        {label}
      </button>
      {open && (
        <div ref={dialogRef} className="fixed inset-0 z-[90] flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-labelledby="qq-heading">
          <div className="absolute inset-0 bg-[#050A07]/80 backdrop-blur-sm" onClick={() => setOpen(false)} />
          <div className="relative">
            <button
              ref={closeRef}
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close quote form"
              className="absolute top-2 right-2 z-10 inline-flex items-center justify-center min-h-[44px] min-w-[44px] px-3 text-white/80 hover:text-white text-xs font-semibold tracking-[0.2em] uppercase"
            >
              Close ✕
            </button>
            <div className="max-h-[92vh] overflow-y-auto rounded-3xl">
              <QuickQuoteCard source={source} eyebrow={eyebrow} heading={heading} subheading={subheading} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
