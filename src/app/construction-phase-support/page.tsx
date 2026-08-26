import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import QuoteCta from "@/components/forms/QuoteCta";
import { FadeIn } from "../site-classification/MotionWrapper";

export const metadata: Metadata = {
  title: "Construction Phase Support Sydney | Footing & Pier Inspections | SFGEO",
  description: "Footing, pier and pile inspections, proof rolls and engineered fill to AS 3798 across Sydney — verified on site, confirmed in writing before the pour. Rapid mobilisation, fixed fees.",
  alternates: { canonical: '/construction-phase-support' },
  openGraph: { images: ['/og/sfgeo-og-card.jpg'], title: "Construction Phase Support Sydney | Footing & Pier Inspections | SFGEO", description: "Footing, pier and pile inspections, proof rolls and engineered fill to AS 3798 across Sydney — verified on site, confirmed in writing before the pour. Rapid mobilisation, fixed fees.", url: '/construction-phase-support' },
  twitter: { card: "summary_large_image", images: ['/og/sfgeo-og-card.jpg'], title: "Construction Phase Support Sydney | Footing & Pier Inspections | SFGEO", description: "Footing, pier and pile inspections, proof rolls and engineered fill to AS 3798 across Sydney — verified on site, confirmed in writing before the pour. Rapid mobilisation, fixed fees." },
};

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
    "description": "Footing, pier and pile inspections, proof rolls and engineered fill to AS 3798 across Sydney — verified on site, confirmed in writing before the pour. Rapid mobilisation, fixed fees.",
    "url": "https://sfgeo.com.au/construction-phase-support",
    "provider": { "@id": "https://sfgeo.com.au/#organization" },
    "areaServed": { "@type": "City", "name": "Sydney, New South Wales, Australia" }
  };

  return (
    <div className="bg-white text-slate-950 font-inter selection:bg-forest-green selection:text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <section className="pt-36 pb-16 px-6 lg:px-12 max-w-7xl mx-auto">
        <FadeIn className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.2em] text-forest-green mb-6 font-semibold">Construction Phase Support &middot; Sydney Metro</p>
          <h1 className="text-4xl sm:text-6xl font-montserrat font-light tracking-tight leading-[1.08] mb-8">
            Verified Before <span className="font-semibold">The Pour.</span>
          </h1>
          <div className="w-[96px] h-[3px] bg-forest-green mb-8" />
          <p className="text-lg sm:text-xl text-gray-600 font-light leading-relaxed">An open excavation costs money every hour it waits. SFGEO inspects footings, piers and fill at the moment it matters, confirms the ground against the design on site, and puts the record in writing — so the next trade starts on time.</p>
        </FadeIn>
      </section>

      <section className="py-16 px-6 lg:px-12 max-w-7xl mx-auto border-t border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <FadeIn>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_26px_60px_-26px_rgba(5,10,7,0.4)]">
              <Image src="/sfgeo-rock-verification-marking.jpg" alt="Excavation level verification marked on exposed rock" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            </div>
          </FadeIn>
          <FadeIn delay={0.12}>
            <h2 className="text-3xl font-montserrat font-light tracking-tight text-slate-950 mb-5">The Answer, <span className="font-semibold">On Site</span></h2>
            <div className="h-px bg-forest-green w-12 mb-7" />
            <p className="text-gray-600 font-light leading-relaxed">The engineer inspects at bearing level, logs the exposed stratum, and gives the call before leaving site — proceed, deepen, or adjust — with the formal record following within days. Single visits for local builders; standing schedule-of-rates engagements for commercial contractors, paired with compaction testing through our partners.</p>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 px-6 lg:px-12 max-w-7xl mx-auto border-t border-gray-100">
        <FadeIn className="mb-12">
          <h2 className="text-3xl font-montserrat font-light tracking-tight text-slate-950">What We <span className="font-semibold">Verify</span></h2>
          <div className="mt-6 h-px bg-forest-green w-12" />
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ITEMS.map((it) => (
            <FadeIn key={it.t}>
              <div className="p-8 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow h-full">
                <h3 className="text-lg font-montserrat font-semibold text-slate-950 mb-3">{it.t}</h3>
                <p className="text-gray-600 font-light leading-relaxed text-[15px]">{it.d}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* How a visit runs */}
      <section className="py-16 lg:py-20 px-6 lg:px-12 max-w-7xl mx-auto border-t border-gray-100">
        <FadeIn className="mb-12">
          <p className="text-sm uppercase tracking-[0.2em] text-forest-green mb-4 font-semibold">How A Visit Runs</p>
          <h2 className="text-3xl sm:text-4xl font-montserrat font-light tracking-tight">Booked Fast. <span className="font-semibold">Called On Site.</span></h2>
          <div className="mt-5 h-px bg-forest-green w-12" />
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { n: "01", t: "Call Or Book", d: "Send the drawings and the excavation date — single visits for builders, standing schedule-of-rates for contractors." },
            { n: "02", t: "Engineer On Site", d: "At bearing level when the excavation is open — day works, night works, or the morning the formwork is due." },
            { n: "03", t: "The Call, There", d: "Proceed, deepen or adjust — read against the drawings and the original investigation before anyone leaves." },
            { n: "04", t: "Record In Writing", d: "The formal inspection record follows within days, written to what your certifier needs to close it out." },
          ].map((step) => (
            <FadeIn key={step.n}>
              <div className="h-full">
                <p className="font-montserrat font-light text-forest-green text-3xl mb-4">{step.n}</p>
                <h3 className="text-base font-montserrat font-semibold text-slate-950 mb-2">{step.t}</h3>
                <p className="text-gray-600 font-light leading-relaxed text-[14px]">{step.d}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Proof */}
      <section className="py-16 lg:py-20 px-6 lg:px-12 max-w-7xl mx-auto border-t border-gray-100">
        <FadeIn>
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.2em] text-forest-green mb-4 font-semibold">Proven On Site</p>
            <h2 className="text-3xl sm:text-4xl font-montserrat font-light tracking-tight text-slate-950 mb-5">Calls We&rsquo;ve Made <span className="font-semibold">Standing In The Hole.</span></h2>
            <div className="h-px bg-forest-green w-12 mb-7" />
            <p className="text-gray-600 font-light leading-relaxed mb-8">
              A church expansion&rsquo;s tank base verified at 500 kPa and approved the same visit. A signal-pole footing on a six-lane State road failed against the standard at 2am — called not-suitable on the spot, backfilled, and the road open by morning. The value of construction phase support is the judgement at the moment it&rsquo;s needed, either way it goes.
            </p>
            <Link href="/projects" className="text-sm font-semibold tracking-wide text-forest-green group inline-flex items-center gap-2">
              <span className="draw-link">Read The Case Studies</span>
              <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
            </Link>
          </div>
        </FadeIn>
      </section>

      <section className="mt-8 relative overflow-hidden bg-[#050A07] text-white grain">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(45,90,58,0.3),transparent_60%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center px-6 py-24 relative z-10">
          <FadeIn>
            <h2 className="text-4xl sm:text-5xl font-montserrat font-light tracking-tight mb-8">Open Excavation? <span className="font-semibold">Call Now.</span></h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="tel:+61423483555" className="flex items-center justify-center px-8 py-2.5 bg-gradient-to-b from-[#346b43] to-forest-green text-white rounded-full shadow-[0_8px_20px_-6px_rgba(45,90,58,0.4)] hover:brightness-105 transition-all hover:-translate-y-0.5 w-full sm:w-[280px] h-[46px] text-xs font-semibold tracking-wide">Call 0423 483 555</Link>
              <QuoteCta source="construction-phase-support close" className="flex items-center justify-center px-8 py-2.5 bg-white/5 text-white rounded-full shadow-[inset_0_0_0_1px_rgba(255,255,255,0.25)] hover:bg-white/10 transition-all hover:-translate-y-0.5 w-full sm:w-[280px] h-[46px] text-xs font-semibold tracking-wide backdrop-blur-sm" />
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
