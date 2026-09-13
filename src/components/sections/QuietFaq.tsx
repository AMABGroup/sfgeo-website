import type { ReactNode } from "react";
import Accordion from "@/components/ui/Accordion";

type Faq = { q: string; a: string };

/**
 * Fine-print strip at the foot of a service page: a small label, an optional
 * one-paragraph summary and the page's questions as collapsed rows. Every
 * word is in the served HTML (the FAQPage schema describes these rows);
 * nothing competes with the page above it.
 */
export default function QuietFaq({ intro, faqs = [], label }: { intro?: ReactNode; faqs?: Faq[]; label?: string }) {
  const heading = label ?? (faqs.length ? "Common Questions" : "In Brief");
  return (
    <section aria-label={heading} className="px-6 lg:px-12 max-w-7xl mx-auto border-t border-gray-100 py-12 lg:py-14">
      <div className="max-w-3xl">
        <h2 className="text-[11px] uppercase tracking-[0.28em] text-gray-400 font-semibold mb-4">{heading}</h2>
        {intro && <p className="text-sm text-gray-500 font-light leading-relaxed mb-5">{intro}</p>}
        {faqs.length > 0 && (
          <div className="border-t border-gray-100">
            {faqs.map((f) => (
              <Accordion key={f.q} title={f.q} variant="quiet">
                {f.a}
              </Accordion>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
