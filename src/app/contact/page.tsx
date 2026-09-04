import ContactForm from "@/components/forms/ContactForm";
import ReviewsSummary from "@/components/ui/ReviewsSummary";
import Reveal from "@/components/ui/Reveal";
import FollowFieldwork from "@/components/ui/FollowFieldwork";
import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta(
  "Contact Our Sydney Geotechnical Engineers | SFGEO",
  "Speak directly with a Sydney geotechnical consultant. Fixed-fee quotes for site classifications, investigations, and drilling services across Greater Sydney.",
  "/contact"
);

const d = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

// These two strings are also exported as MAP_SRC (SystemChrome.tsx) and
// READ_REVIEWS_URL (GoogleReviews.tsx). Both of those are "use client" modules,
// and a server component cannot import a plain value across that boundary
// (every export becomes a client-reference proxy), so they are mirrored here.
// Keep all three identical.
const MAP_SRC =
  "https://www.google.com/maps?q=SFGEO%20Suite%203.01%20Level%203%20107%20Sydenham%20Road%20Marrickville%20NSW%202204&output=embed";
const PLACE_ID = "ChIJkbo3DVqq1IMRQYQUbuD9XDc";
const READ_REVIEWS_URL = `https://www.google.com/maps/place/?q=place_id:${PLACE_ID}`;
const WRITE_REVIEW_URL = `https://search.google.com/local/writereview?placeid=${PLACE_ID}`;
const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=Solid+Foundation+Geotechnical+107+Sydenham+Road+Marrickville+NSW+2204&destination_place_id=${PLACE_ID}`;

const CARD = "card-lift p-8 rounded-2xl bg-white border border-gray-100 shadow-sm";
const LABEL = "block text-[11px] font-semibold text-gray-500 uppercase tracking-[0.2em] mb-3";

export default function ContactPage() {
  return (
    <div className="bg-white text-slate-950 font-inter selection:bg-forest-green selection:text-white">

      {/* Hero */}
      <section className="pt-36 pb-16 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="lg:flex lg:items-end lg:justify-between lg:gap-16">
          <div className="max-w-3xl">
            <p className="hero-line text-sm uppercase tracking-[0.2em] text-forest-green mb-6 font-semibold">
              Contact &middot; Marrickville<span className="hidden sm:inline"> &middot; Response Within One Business Day</span>
            </p>
            <h1 className="text-4xl sm:text-6xl font-montserrat font-light tracking-tight leading-[1.08] mb-8">
              <span className="hero-mask"><span className="mask-line mask-d1"><span>Talk To</span></span></span>
              <span className="hero-mask"><span className="mask-line mask-d2"><span className="font-semibold h-bold">The Engineer.</span></span></span>
            </h1>
            <div className="hero-line hero-d2 w-[96px] h-[3px] bg-forest-green mb-8" />
            <p className="hero-line hero-d2 text-lg sm:text-xl text-gray-600 font-light leading-relaxed">
              Send the address and a sentence about the project. You&rsquo;ll have a fixed-fee quote in writing within one business day — or call <a href="tel:+61423483555" className="text-forest-green font-semibold whitespace-nowrap">0423 483 555</a>.
            </p>
          </div>
          <FollowFieldwork className="hero-line hero-d3 mt-10 lg:mt-0 lg:shrink-0 lg:pb-2" />
        </div>
      </section>

      {/* Form + the office, beside the details */}
      <section className="py-16 lg:py-20 px-6 lg:px-12 max-w-7xl mx-auto border-t border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-14 lg:gap-20 items-start">
          <div>
            <Reveal variant="group">
              <div data-fx="rise">
                <ContactForm />
              </div>
            </Reveal>

            {/* The office sits under the form, so the column ends level with the details */}
            <Reveal variant="group" className="mt-16 pt-12 border-t border-gray-100">
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
                <div>
                  <p data-fx="rise" className="text-[11px] uppercase tracking-[0.25em] text-forest-green font-semibold mb-2">Marrickville</p>
                  <h2 data-fx="rise" style={d(80)} className="text-2xl sm:text-3xl font-montserrat font-light tracking-tight">
                    Find <span className="font-semibold h-bold">The Office.</span>
                  </h2>
                </div>
                <a
                  data-fx="rise"
                  style={d(160)}
                  href={DIRECTIONS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-forest-green group"
                >
                  <span className="draw-link">Get directions</span>
                  <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </div>
              <div data-fx="scale" style={d(200)} className="w-full rounded-2xl overflow-hidden shadow-[0_26px_60px_-26px_rgba(5,10,7,0.4)] aspect-[16/10]">
                <iframe
                  title="Map showing SFGEO office at Suite 3.01, 107 Sydenham Road, Marrickville NSW 2204"
                  src={MAP_SRC}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full border-0"
                  allowFullScreen
                />
              </div>
              <p data-fx="rise" style={d(260)} className="mt-5 text-sm text-gray-500 font-light leading-relaxed">
                Suite 3.01, Level 3, 107 Sydenham Road, Marrickville NSW 2204. Visits by appointment &mdash; fieldwork runs across Greater Sydney from here, and drilling programs travel into regional NSW.
              </p>
            </Reveal>
          </div>

          <Reveal variant="group">
            <div data-stagger style={d(120)} className="flex flex-col gap-6">
              <div className={CARD}>
                <span className={LABEL}>What To Send</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <p className="text-base text-slate-950 font-medium mb-2">Homeowners</p>
                    <ul className="text-[15px] text-gray-600 font-light leading-relaxed list-disc pl-4 space-y-1">
                      <li>The site address</li>
                      <li>Plans, if you have them</li>
                      <li>What you are building</li>
                      <li>Access notes</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-base text-slate-950 font-medium mb-2">Builders, engineers &amp; certifiers</p>
                    <ul className="text-[15px] text-gray-600 font-light leading-relaxed list-disc pl-4 space-y-1">
                      <li>The certifier&rsquo;s or council&rsquo;s exact wording</li>
                      <li>Structural concept or footing spec</li>
                      <li>Excavation depth</li>
                      <li>Borehole schedule, if you have one</li>
                      <li>Any existing reports</li>
                    </ul>
                  </div>
                </div>
                <p className="text-sm text-gray-500 font-light mt-4">
                  Plans too large for the form? Email <a href="mailto:info@sfgeo.com.au" className="text-forest-green font-semibold hover:underline">info@sfgeo.com.au</a>.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <a href="tel:+61423483555" className={`${CARD} group flex flex-col`}>
                  <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-[0.2em] mb-2">Speak To An Engineer</span>
                  <span className="text-[17px] font-montserrat font-semibold text-slate-950 group-hover:text-forest-green transition-colors whitespace-nowrap">0423 483 555</span>
                </a>
                <a href="mailto:info@sfgeo.com.au" className={`${CARD} group flex flex-col`}>
                  <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-[0.2em] mb-2">Email The Team</span>
                  <span className="text-[17px] font-montserrat font-semibold text-slate-950 group-hover:text-forest-green transition-colors whitespace-nowrap">info@sfgeo.com.au</span>
                </a>
              </div>

              <div className={CARD}>
                <span className={LABEL}>Hours</span>
                <div className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-1.5 text-[15px] max-w-xs">
                  <span className="font-medium">Mon–Fri</span><span className="font-light text-gray-500">6am – 6pm</span>
                  <span className="font-medium">Saturday</span><span className="font-light text-gray-500">8am – 2pm</span>
                  <span className="font-medium">Sunday</span><span className="font-light text-gray-500">Closed</span>
                </div>
                <p className="text-sm text-gray-500 font-light mt-4">The Principal&rsquo;s mobile is the number above &mdash; not a switchboard.</p>
              </div>

              <div className={CARD}>
                <ReviewsSummary />
                <p className="text-lg font-montserrat font-semibold text-slate-950 mb-2 leading-snug">
                  What Clients Say On Google.
                </p>
                <p className="text-[15px] text-gray-600 font-light leading-relaxed mb-6">
                  The Principal reads every enquiry. Fieldwork is scheduled at first contact, and on a straightforward classification the report can land as soon as 2–3 business days after it.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={READ_REVIEWS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold tracking-wide text-forest-green group inline-flex items-center gap-2"
                  >
                    <span className="draw-link">Read Our Reviews</span>
                    <span className="card-arrow">&rarr;</span>
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                  <a
                    href={WRITE_REVIEW_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold tracking-wide text-forest-green group inline-flex items-center gap-2 sm:ml-6"
                  >
                    <span className="draw-link">Leave A Review</span>
                    <span className="card-arrow">&rarr;</span>
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
