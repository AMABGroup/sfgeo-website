import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import QuoteCta from "@/components/forms/QuoteCta";
import Reveal from "./Reveal";

type Props = {
  /** Analytics source passed to the quote modal, e.g. "site-classification close". */
  source: string;
  kicker?: ReactNode;
  heading: ReactNode;
  sub?: ReactNode;
  quoteLabel?: string;
  quote?: { eyebrow?: string; heading?: string; subheading?: string };
  /** Anything between the sub-line and the buttons (a process grid, an address). */
  children?: ReactNode;
  align?: "center" | "left";
  /** Extra classes on the section. */
  className?: string;
};

const CALL =
  "flex items-center justify-center px-8 py-2.5 bg-gradient-to-b from-[#346b43] to-forest-green text-white rounded-full shadow-[0_8px_20px_-6px_rgba(45,90,58,0.4)] hover:shadow-[0_12px_24px_-8px_rgba(45,90,58,0.6)] hover:brightness-105 transition-all hover:-translate-y-0.5 w-full sm:w-[280px] h-[46px] text-xs font-semibold tracking-wide";
const QUOTE =
  "flex items-center justify-center px-8 py-2.5 bg-white/5 text-white rounded-full shadow-[inset_0_0_0_1px_rgba(255,255,255,0.25)] hover:bg-white/10 hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.45)] transition-all hover:-translate-y-0.5 w-full sm:w-[280px] h-[46px] text-xs font-semibold tracking-wide backdrop-blur-sm";

const d = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

/**
 * The dark closing band every page ends on: aurora glow, grain and a
 * staggered entrance, with the Call + Quote pair.
 */
export default function CloseBand({ source, kicker, heading, sub, quoteLabel, quote, children, align = "center", className = "" }: Props) {
  const center = align === "center";
  return (
    <section className={`relative overflow-hidden bg-[#050A07] text-white grain aurora ${className}`}>
      <div className={`max-w-4xl mx-auto px-6 py-28 lg:py-36 ${center ? "text-center" : ""}`}>
        <Reveal variant="group">
          {kicker && (
            <p data-fx="rise" className="text-sm uppercase tracking-[0.2em] text-[#8FBF9F] mb-6 font-semibold">
              {kicker}
            </p>
          )}
          <h2 data-fx="rise" style={d(80)} className="text-4xl sm:text-6xl font-montserrat font-light tracking-tight leading-[1.06] mb-8">
            {heading}
          </h2>
          {sub && (
            <p data-fx="rise" style={d(160)} className={`text-lg sm:text-xl text-gray-400 font-light leading-relaxed max-w-2xl mb-12 ${center ? "mx-auto" : ""}`}>
              {sub}
            </p>
          )}
          {children && (
            <div data-fx="rise" style={d(240)} className="mb-12">
              {children}
            </div>
          )}
          <div data-fx="rise" style={d(320)} className={`flex flex-col sm:flex-row items-center gap-6 ${center ? "justify-center" : ""}`}>
            <Link href="tel:+61423483555" className={CALL}>
              Call 0423 483 555
            </Link>
            <QuoteCta source={source} label={quoteLabel} eyebrow={quote?.eyebrow} heading={quote?.heading} subheading={quote?.subheading} className={QUOTE} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
