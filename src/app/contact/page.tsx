import ContactForm from "@/components/forms/ContactForm";
import ReviewsSummary from "@/components/ui/ReviewsSummary";
import Reveal from "@/components/ui/Reveal";
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

export default function ContactPage() {
  return (
    <div className="bg-white text-slate-950 font-inter selection:bg-forest-green selection:text-white">

      {/* Hero */}
      <section className="pt-36 pb-16 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <p className="hero-line text-sm uppercase tracking-[0.2em] text-forest-green mb-6 font-semibold">
            Contact &middot; Family Owned<span className="hidden sm:inline"> &middot; Response Within One Business Day</span>
          </p>
          <h1 className="text-4xl sm:text-6xl font-montserrat font-light tracking-tight leading-[1.08] mb-8">
            <span className="hero-mask"><span className="mask-line mask-d1"><span>Contact</span></span></span>
            <span className="hero-mask"><span className="mask-line mask-d2"><span className="font-semibold h-bold">SFGEO.</span></span></span>
          </h1>
          <div className="hero-line hero-d2 w-[96px] h-[3px] bg-forest-green mb-8" />
          <p className="hero-line hero-d2 text-lg sm:text-xl text-gray-600 font-light leading-relaxed">
            Send the address and a sentence about the project. You&rsquo;ll have a fixed-fee quote in writing within one business day — or call <a href="tel:+61423483555" className="text-forest-green font-semibold whitespace-nowrap">0423 483 555</a>.
          </p>
        </div>
      </section>

      {/* Form + details */}
      <section className="py-16 lg:py-20 px-6 lg:px-12 max-w-7xl mx-auto border-t border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <Reveal variant="group">
            <div data-fx="rise">
              <ContactForm />
            </div>
          </Reveal>

          <Reveal variant="group">
            <div data-stagger style={d(120)} className="flex flex-col gap-6">
              <div className="card-lift p-8 rounded-2xl bg-white border border-gray-100 shadow-sm">
                <span className="block text-[11px] font-semibold text-gray-500 uppercase tracking-[0.2em] mb-3">What To Send</span>
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

              <a href="tel:+61423483555" className="card-lift group flex flex-col p-8 rounded-2xl bg-white border border-gray-100 shadow-sm">
                <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-[0.2em] mb-2">Speak To An Engineer</span>
                <span className="text-3xl font-montserrat font-semibold text-slate-950 group-hover:text-forest-green transition-colors">0423 483 555</span>
              </a>
              <a href="mailto:info@sfgeo.com.au" className="card-lift group flex flex-col p-8 rounded-2xl bg-white border border-gray-100 shadow-sm">
                <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-[0.2em] mb-2">Email The Team</span>
                <span className="text-xl sm:text-2xl font-montserrat font-semibold text-slate-950 group-hover:text-forest-green transition-colors">info@sfgeo.com.au</span>
              </a>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="card-lift p-8 rounded-2xl bg-white border border-gray-100 shadow-sm">
                  <span className="block text-[11px] font-semibold text-gray-500 uppercase tracking-[0.2em] mb-3">Office</span>
                  <address className="not-italic">
                    <p className="text-base text-slate-950 font-medium leading-relaxed">
                      Suite 3.01, Level 3, 107 Sydenham Road, Marrickville NSW 2204
                    </p>
                  </address>
                  <p className="text-sm text-gray-500 font-light mt-2">Visits by appointment. Fieldwork across Greater Sydney from the Inner West; drilling programs travel into regional NSW.</p>
                  <a
                    href={DIRECTIONS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 text-sm font-semibold tracking-wide text-forest-green group"
                  >
                    <span className="draw-link">Get directions</span>
                    <span className="card-arrow">&rarr;</span>
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </div>
                <div className="card-lift p-8 rounded-2xl bg-white border border-gray-100 shadow-sm">
                  <span className="block text-[11px] font-semibold text-gray-500 uppercase tracking-[0.2em] mb-3">Hours</span>
                  <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1.5 text-[15px]">
                    <span className="font-medium">Mon–Fri</span><span className="font-light text-gray-500">6am – 6pm</span>
                    <span className="font-medium">Saturday</span><span className="font-light text-gray-500">8am – 2pm</span>
                    <span className="font-medium">Sunday</span><span className="font-light text-gray-500">Closed</span>
                  </div>
                </div>
              </div>

              <div className="card-lift p-8 rounded-2xl bg-white border border-gray-100 shadow-sm">
                <ReviewsSummary />
                <p className="text-lg font-montserrat font-semibold text-slate-950 mb-2 leading-snug">
                  What Clients Say On Google.
                </p>
                <p className="text-[15px] text-gray-600 font-light leading-relaxed mb-6">
                  The Principal reads every enquiry. Fieldwork is scheduled at first contact, and reports land as soon as 2–3 business days after it.
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

      {/* Office Map */}
      <section className="py-20 lg:py-24 px-6 lg:px-12 max-w-7xl mx-auto border-t border-gray-100">
        <Reveal variant="group" className="mb-10">
          <p data-fx="rise" className="text-sm uppercase tracking-[0.2em] text-forest-green mb-4 font-semibold">Marrickville</p>
          <h2 data-fx="rise" style={d(80)} className="text-3xl sm:text-4xl font-montserrat font-light tracking-tight">
            Find <span className="font-semibold h-bold">The Office.</span>
          </h2>
          <div data-fx="line" style={d(200)} className="mt-5 h-px bg-forest-green w-12" />
        </Reveal>
        <Reveal variant="group">
          <div data-fx="scale" className="w-full rounded-2xl overflow-hidden shadow-[0_26px_60px_-26px_rgba(5,10,7,0.4)] aspect-[16/9] sm:aspect-[21/9]">
            <iframe
              title="Map showing SFGEO office at Suite 3.01, 107 Sydenham Road, Marrickville NSW 2204"
              src={MAP_SRC}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full border-0"
              allowFullScreen
            />
          </div>
        </Reveal>
        <Reveal variant="group">
          <p data-fx="rise" className="mt-10 text-[11px] uppercase tracking-[0.25em] text-gray-500 font-semibold mb-4">Follow The Fieldwork</p>
          <div data-stagger style={d(120)} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <a
              href="https://au.linkedin.com/company/sfgeo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-5 py-2.5 bg-white rounded-full shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 sm:w-[220px] h-[42px] group/link"
            >
              <svg className="w-4 h-4 shrink-0 text-[#0A66C2] transition-transform group-hover/link:scale-110" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.475-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span className="text-xs font-semibold text-slate-950 tracking-wide">Connect On LinkedIn</span>
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <a
              href="https://instagram.com/sfgeo.syd"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-5 py-2.5 bg-white rounded-full shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 sm:w-[220px] h-[42px] group/link"
            >
              <svg className="w-4 h-4 shrink-0 text-[#E1306C] transition-transform group-hover/link:scale-110" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
              <span className="text-xs font-semibold text-slate-950 tracking-wide">Follow On Instagram</span>
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
