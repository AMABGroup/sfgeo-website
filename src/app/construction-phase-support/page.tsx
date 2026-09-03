import { Metadata } from "next";
import Link from "next/link";
import type { CSSProperties } from "react";
import QuoteCta from "@/components/forms/QuoteCta";
import Reveal from "@/components/ui/Reveal";
import PhotoFrame from "@/components/ui/PhotoFrame";
import CloseBand from "@/components/ui/CloseBand";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta(
  "Footing & Pier Inspections Sydney | Proof Rolls | SFGEO",
  "Footing, pier and pile inspections, proof rolls and engineered fill to AS 3798 across Sydney — verified on site, confirmed in writing before the pour.",
  "/construction-phase-support",
);

const d = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

const ITEMS = [
  { t: "Footings & Piers", d: "Founding material verified against the structural drawings’ bearing requirement at excavation level." },
  { t: "Piles & Anchors", d: "Founding and socket verification for bored piers and piles, with the geotechnical record certifiers ask for." },
  { t: "Engineered Fill (AS 3798)", d: "Layer-by-layer placement supervision and testing frequency to the standard your certifier expects." },
  { t: "Proof Rolls", d: "Subgrade proof rolling observed and documented before the pavement goes down." },
  { t: "Working Platforms", d: "Platform assessments supporting safe temporary works for cranes, rigs and heavy plant." },
  { t: "Compliance Records", d: "Inspection records written against council orders and certifier directions — the documents that get sites moving again." },
];

export default function Page() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "item": { "@id": "https://sfgeo.com.au/", "name": "Home" } },
      { "@type": "ListItem", "position": 2, "item": { "@id": "https://sfgeo.com.au/geotechnical", "name": "Geotechnical" } },
      { "@type": "ListItem", "position": 3, "item": { "@id": "https://sfgeo.com.au/construction-phase-support", "name": "Construction Phase Support" } }
    ]
  };
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Construction Phase Support",
    "serviceType": "Construction phase geotechnical inspections",
    "description": "Footing, pier and pile inspections, proof rolls and engineered fill to AS 3798 across Sydney — verified on site, confirmed in writing before the pour.",
    "url": "https://sfgeo.com.au/construction-phase-support",
    "provider": { "@id": "https://sfgeo.com.au/#organization" },
    "areaServed": { "@type": "City", "name": "Sydney, New South Wales, Australia" }
  };

  return (
    <div className="bg-white text-slate-950 font-inter selection:bg-forest-green selection:text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <section className="pt-36 pb-20 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <p className="hero-line text-sm uppercase tracking-[0.2em] text-forest-green mb-6 font-semibold">Construction Phase Support &middot; Sydney-Wide</p>
          <h1 className="text-[min(2.25rem,8.2vw)] sm:text-6xl font-montserrat font-light tracking-tight leading-[1.08] mb-8">
            <span className="hero-mask"><span className="mask-line mask-d1"><span>Footing &amp; Pier Inspections.</span></span></span>
            <span className="hero-mask"><span className="mask-line mask-d2"><span className="font-semibold h-bold">Verified Before The Pour.</span></span></span>
          </h1>
          <div className="hero-line hero-d2 w-[96px] h-[3px] bg-forest-green mb-8" />
          <p className="hero-line hero-d2 text-lg sm:text-xl text-gray-600 font-light leading-relaxed mb-10">An open excavation costs money every hour it waits. SFGEO inspects footings, piers and fill at the moment it matters, confirms the ground against the design on site, and puts the record in writing — so the next trade starts on time.</p>
          <div className="hero-line hero-d3 flex flex-col sm:flex-row items-start gap-4">
            <Link
              href="tel:+61423483555"
              className="flex items-center justify-center px-8 py-2.5 bg-gradient-to-b from-[#346b43] to-forest-green text-white rounded-full shadow-[0_8px_20px_-6px_rgba(45,90,58,0.4)] hover:shadow-[0_12px_24px_-8px_rgba(45,90,58,0.6)] hover:brightness-105 transition-all hover:-translate-y-0.5 w-full sm:w-auto h-[46px] text-xs font-semibold tracking-wide"
            >
              Call 0423 483 555
            </Link>
            <QuoteCta
              source="construction-phase-support hero"
              label="Book An Inspection"
              className="flex items-center justify-center px-8 py-2.5 bg-white text-forest-green rounded-full shadow-[inset_0_0_0_1px_rgba(45,90,58,0.25),0_4px_10px_-4px_rgba(0,0,0,0.05)] hover:bg-forest-green/5 hover:shadow-[inset_0_0_0_1px_rgba(45,90,58,0.4),0_6px_14px_-4px_rgba(0,0,0,0.1)] transition-all hover:-translate-y-0.5 w-full sm:w-auto h-[46px] text-xs font-semibold tracking-wide"
            />
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 px-6 lg:px-12 max-w-7xl mx-auto border-t border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <PhotoFrame
            src="/sfgeo-dcp-open-excavation-newtown.jpg"
            alt="SFGEO engineer running a dynamic cone penetrometer in an open excavation beside a Newtown terrace before the pour"
            caption="At Bearing Level"
            aspect="aspect-[4/3]"
            sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 50vw, 600px"
            priority
          />
          <Reveal variant="group">
            <p data-fx="rise" className="text-sm uppercase tracking-[0.2em] text-forest-green mb-4 font-semibold">01 &middot; On Site</p>
            <h2 data-fx="rise" style={d(80)} className="text-3xl sm:text-4xl font-montserrat font-light tracking-tight text-slate-950 mb-5">The Answer, <span className="font-semibold h-bold">On Site.</span></h2>
            <div data-fx="line" style={d(200)} className="h-px bg-forest-green w-12 mb-7" />
            <p data-fx="rise" style={d(160)} className="text-gray-600 font-light leading-relaxed">The engineer inspects at bearing level, logs the exposed stratum, and gives the call before leaving site — proceed, deepen, or adjust — with the formal record following within days. Compaction testing through our partners is folded into the same visit where the spec calls for it. Single visits are quoted as a fixed fee per inspection, in writing, within one business day.</p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 lg:py-24 px-6 lg:px-12 max-w-7xl mx-auto border-t border-gray-100">
        <Reveal variant="group" className="mb-12">
          <p data-fx="rise" className="text-sm uppercase tracking-[0.2em] text-forest-green mb-4 font-semibold">02 &middot; Scope</p>
          <h2 data-fx="rise" style={d(80)} className="text-3xl sm:text-4xl font-montserrat font-light tracking-tight text-slate-950">Footing Inspections. <span className="font-semibold h-bold">What We Verify.</span></h2>
          <div data-fx="line" style={d(200)} className="mt-6 h-px bg-forest-green w-12" />
        </Reveal>
        <Reveal variant="group">
          <div data-stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ITEMS.map((it) => (
              <div key={it.t} className="card-lift p-8 bg-white border border-gray-100 rounded-2xl shadow-sm h-full">
                <h3 className="text-lg font-montserrat font-semibold text-slate-950 mb-3">{it.t}</h3>
                <p className="text-gray-600 font-light leading-relaxed text-[15px]">{it.d}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* How a visit runs */}
      <section className="py-20 lg:py-24 px-6 lg:px-12 max-w-7xl mx-auto border-t border-gray-100">
        <Reveal variant="group" className="mb-12">
          <p data-fx="rise" className="text-sm uppercase tracking-[0.2em] text-forest-green mb-4 font-semibold">03 &middot; How A Visit Runs</p>
          <h2 data-fx="rise" style={d(80)} className="text-3xl sm:text-4xl font-montserrat font-light tracking-tight">Booked Fast. <span className="font-semibold h-bold">Called On Site.</span></h2>
          <div data-fx="line" style={d(200)} className="mt-5 h-px bg-forest-green w-12" />
        </Reveal>
        <Reveal variant="group">
          <div data-stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { n: "01", t: "Call Or Book", d: "Send the drawings and the excavation date — single visits for builders, standing schedule-of-rates for contractors." },
              { n: "02", t: "Engineer On Site", d: "At bearing level when the excavation is open — day works, night works, or the morning the formwork is due." },
              { n: "03", t: "The Call, There", d: "Proceed, deepen or adjust — read against the drawings and the original investigation before anyone leaves." },
              { n: "04", t: "Record In Writing", d: "The formal inspection record follows within days, written to what your certifier needs to close it out." },
            ].map((step) => (
              <div key={step.n} className="h-full">
                <p className="font-montserrat font-light text-forest-green text-3xl mb-4">{step.n}</p>
                <h3 className="text-base font-montserrat font-semibold text-slate-950 mb-2">{step.t}</h3>
                <p className="text-gray-600 font-light leading-relaxed text-[14px]">{step.d}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Proof */}
      <section className="py-20 lg:py-24 px-6 lg:px-12 max-w-7xl mx-auto border-t border-gray-100">
        <Reveal variant="group" className="max-w-3xl">
          <p data-fx="rise" className="text-sm uppercase tracking-[0.2em] text-forest-green mb-4 font-semibold">04 &middot; Proven On Site</p>
          <h2 data-fx="rise" style={d(80)} className="text-3xl sm:text-4xl font-montserrat font-light tracking-tight text-slate-950 mb-5">Calls We&rsquo;ve Made <span className="font-semibold h-bold">Standing In The Hole.</span></h2>
          <div data-fx="line" style={d(200)} className="h-px bg-forest-green w-12 mb-7" />
          <p data-fx="rise" style={d(160)} className="text-gray-600 font-light leading-relaxed mb-8">
            A church expansion&rsquo;s tank base verified at 500 kPa and approved the same visit. A signal-pole footing on a six-lane State road failed against the standard at 2am — called not-suitable on the spot, backfilled, and the road open by morning. The value of construction phase support is the judgement at the moment it&rsquo;s needed, either way it goes.
          </p>
          <Link data-fx="rise" style={d(220)} href="/projects" className="text-sm font-semibold tracking-wide text-forest-green group inline-flex items-center gap-2">
            <span className="draw-link">Read The Case Studies</span>
            <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
          </Link>
        </Reveal>
      </section>

      <CloseBand
        source="construction-phase-support close"
        heading={<>Open Excavation? <span className="font-semibold h-bold">Call Now.</span></>}
        sub="Send the drawings and the date the excavation opens — the engineer is on site at bearing level, and the call is made before anyone leaves."
      />
    </div>
  );
}
