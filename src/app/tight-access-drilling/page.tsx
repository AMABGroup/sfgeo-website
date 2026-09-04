import { Metadata } from "next";
import Link from "next/link";
import type { CSSProperties } from "react";
import QuoteCta from "@/components/forms/QuoteCta";
import Accordion from "@/components/ui/Accordion";
import Reveal from "@/components/ui/Reveal";
import PhotoFrame from "@/components/ui/PhotoFrame";
import CloseBand from "@/components/ui/CloseBand";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta(
  "Tight Access Drilling Sydney | Restricted Sites | SFGEO",
  "Tight-access geotechnical drilling across Sydney — terraces, battleaxe blocks, backyards and basements. Motorised hand augers and a 4WD rig, engineer operated.",
  "/tight-access-drilling",
);

const d = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

const SITE_TYPES = [
  { t: "Inner West Terraces", d: "Through the hallway or over the back fence — motorised hand augers reach rear yards no rig can." },
  { t: "Battleaxe Blocks", d: "Long shared driveways and landlocked building envelopes, drilled without disturbing the neighbours." },
  { t: "Rear-Yard Granny Flats", d: "Investigation points behind an occupied home, with the yard left the way we found it." },
  { t: "Basements & Under Cover", d: "Restricted-height drilling inside garages, basements and undercrofts." },
  { t: "Sloping & Stepped Sites", d: "Benched blocks and steep boundaries where a truck-mounted rig stops at the kerb." },
  { t: "Zero-Clearance Courtyards", d: "Internal courtyards and side passages down to a doorway's width." },
];

// Rendered visibly below and mirrored into the FAQPage schema — the two must stay in step.
const FAQS = [
  {
    q: "Can you drill in a backyard with no side access?",
    a: "Yes. Motorised hand augers carry through a standard doorway or side passage, so rear yards, courtyards and granny-flat positions can be investigated without vehicle access. Where a rig is needed, our 4WD-mounted unit reaches positions conventional truck rigs cannot.",
  },
  {
    q: "Does tight access change the quality of the investigation?",
    a: "No. Hand-auger boreholes are logged to the same standard and supplemented with dynamic cone penetrometer testing, so the data is cross-checked on site regardless of how the hole was advanced.",
  },
  {
    q: "How much does tight-access drilling cost in Sydney?",
    a: "SFGEO quotes fixed fees, scoped to the block. Access is one of the drivers of a quote, so send the address and a short description and you will have a written fixed fee before any work begins.",
  },
];

export default function TightAccessDrillingPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "item": { "@id": "https://sfgeo.com.au/", "name": "Home" } },
      { "@type": "ListItem", "position": 2, "item": { "@id": "https://sfgeo.com.au/drilling", "name": "Drilling" } },
      { "@type": "ListItem", "position": 3, "item": { "@id": "https://sfgeo.com.au/tight-access-drilling", "name": "Tight Access Drilling" } }
    ]
  };
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Tight Access Drilling",
    "serviceType": "Tight access geotechnical drilling",
    "description": "Restricted-access geotechnical drilling for Sydney terraces, battleaxe blocks, backyards, basements and zero-clearance sites. Motorised hand augers and 4WD-mounted rig, engineer operated.",
    "url": "https://sfgeo.com.au/tight-access-drilling",
    "provider": { "@id": "https://sfgeo.com.au/#organization" },
    "areaServed": { "@type": "City", "name": "Sydney, New South Wales, Australia" }
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQS.map((f) => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a }
    }))
  };

  return (
    <div className="bg-white text-slate-950 font-inter selection:bg-forest-green selection:text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="pt-36 pb-20 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="flex-1 max-w-3xl">
          <p className="hero-line text-sm uppercase tracking-[0.2em] text-forest-green mb-6 font-semibold">
            Tight Access &middot; Principal-Led &middot; Sydney
          </p>
          <h1 className="text-[min(2.25rem,8.2vw)] sm:text-6xl font-montserrat font-light tracking-tight leading-[1.08] mb-8">
            <span className="hero-mask"><span className="mask-line mask-d1"><span>Tight Access Drilling.</span></span></span>
            <span className="hero-mask"><span className="mask-line mask-d2"><span className="font-semibold h-bold">No Site Out Of Reach.</span></span></span>
          </h1>
          <div className="hero-line hero-d2 w-[96px] h-[3px] bg-forest-green mb-8" />
          <p className="hero-line hero-d2 text-lg sm:text-xl text-gray-600 font-light leading-relaxed mb-8">
            Terraces, battleaxe blocks, backyards and basements — the Sydney sites where standard rigs stop at the kerb. SFGEO investigates them with motorised hand augers and a 4WD-mounted rig, operated by the engineer who logs the ground and <Link href="/site-classification" className="text-forest-green hover:underline font-medium">signs the report</Link>. Fixed fees, scoped to your block.
          </p>
          <div className="hero-line hero-d3 flex flex-col sm:flex-row items-start gap-4">
            <Link
              href="tel:+61423483555"
              className="flex items-center justify-center px-8 py-2.5 bg-gradient-to-b from-[#346b43] to-forest-green text-white rounded-full shadow-[0_8px_20px_-6px_rgba(45,90,58,0.4)] hover:shadow-[0_12px_24px_-8px_rgba(45,90,58,0.6)] hover:brightness-105 transition-all hover:-translate-y-0.5 w-full sm:w-auto h-[46px] text-xs font-semibold tracking-wide"
            >
              Discuss Your Site Access
            </Link>
            <QuoteCta source="tight-access-drilling hero" label="Quote A Tight-Access Site" className="flex items-center justify-center px-8 py-2.5 bg-white text-forest-green rounded-full shadow-[inset_0_0_0_1px_rgba(45,90,58,0.25),0_4px_10px_-4px_rgba(0,0,0,0.05)] hover:bg-forest-green/5 hover:shadow-[inset_0_0_0_1px_rgba(45,90,58,0.4),0_6px_14px_-4px_rgba(0,0,0,0.1)] transition-all hover:-translate-y-0.5 w-full sm:w-auto h-[46px] text-xs font-semibold tracking-wide" />
          </div>
        </div>
      </section>

      {/* Imagery + method */}
      <section className="py-20 lg:py-24 px-6 lg:px-12 max-w-7xl mx-auto border-t border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16 items-center">
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            <PhotoFrame
              src="/sfgeo-hand-auger-borehole-restricted-access-sydney-backyard.jpg"
              alt="Motorised hand-auger borehole in a restricted-access Sydney backyard"
              caption="Backyard Borehole"
              aspect="aspect-[3/4]"
              sizes="(max-width: 1024px) 50vw, 30vw"
              className="shadow-[0_20px_50px_-20px_rgba(5,10,7,0.35)]"
              delay={0}
            />
            <PhotoFrame
              src="/sfgeo-tight-access-rig-terrace-courtyard.jpg"
              alt="The SFGEO 4WD drill rig set up inside a narrow terrace courtyard in Enmore, mast up against the rendered wall"
              caption={<>Terrace Courtyard &middot; Inner West</>}
              aspect="aspect-[3/4]"
              sizes="(max-width: 1024px) 50vw, 30vw"
              className="shadow-[0_20px_50px_-20px_rgba(5,10,7,0.35)]"
              wrapperClassName="lg:mt-10"
              delay={120}
            />
          </div>
          <Reveal variant="group">
            <p data-fx="rise" className="text-sm uppercase tracking-[0.2em] text-forest-green mb-4 font-semibold">01 &middot; The Method</p>
            <h2 data-fx="rise" style={d(80)} className="text-3xl sm:text-4xl font-light tracking-tight font-montserrat text-slate-950 mb-5">
              Same Data. <span className="font-semibold h-bold">Harder Sites.</span>
            </h2>
            <div data-fx="line" style={d(200)} className="h-px bg-forest-green w-12 mb-8" />
            <p data-fx="rise" style={d(160)} className="text-lg text-gray-600 font-light leading-relaxed">
              A tight site should not mean a thinner report. Hand-auger boreholes are logged to the same standard as rig holes and cross-checked with <Link href="/borehole-drilling" className="text-forest-green hover:underline font-medium">dynamic cone penetrometer testing</Link> on the spot — so your structural engineer gets the same parameters whether the hole was advanced by a rig on the street or an auger carried through the hallway.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Site types */}
      <section className="py-20 lg:py-24 px-6 lg:px-12 max-w-7xl mx-auto border-t border-gray-100">
        <Reveal variant="group" className="mb-12">
          <p data-fx="rise" className="text-sm uppercase tracking-[0.2em] text-forest-green mb-4 font-semibold">02 &middot; Site Types</p>
          <h2 data-fx="rise" style={d(80)} className="text-3xl sm:text-4xl font-light tracking-tight font-montserrat text-slate-950">
            The Sites We&rsquo;re <span className="font-semibold h-bold">Built For.</span>
          </h2>
          <div data-fx="line" style={d(200)} className="mt-6 h-px bg-forest-green w-12" />
        </Reveal>
        <Reveal variant="group">
          <div data-stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SITE_TYPES.map((s) => (
              <div key={s.t} className="card-lift p-8 bg-white border border-gray-100 rounded-2xl shadow-sm h-full">
                <h3 className="text-lg font-montserrat font-semibold text-slate-950 mb-3">{s.t}</h3>
                <p className="text-gray-600 font-light leading-relaxed text-[15px]">{s.d}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Where we work */}
      <section className="py-20 lg:py-24 px-6 lg:px-12 max-w-4xl mx-auto border-t border-gray-100">
        <Reveal variant="group">
          <p data-fx="rise" className="text-sm uppercase tracking-[0.2em] text-forest-green mb-4 font-semibold">03 &middot; Where We Work</p>
          <h2 data-fx="rise" style={d(80)} className="text-3xl sm:text-4xl font-light tracking-tight font-montserrat text-slate-950 mb-5">
            Where The Hard Sites <span className="font-semibold h-bold">Are.</span>
          </h2>
          <p data-fx="rise" style={d(160)} className="text-lg text-gray-600 font-light leading-relaxed">
            Marrickville, Newtown, Enmore and the Inner West terraces we call home. Paddington and Surry Hills rows. Eastern Suburbs battleaxe blocks, North Shore slopes, and the granny-flat boom across Canterbury-Bankstown and the Hills. If the rig cannot reach it, the augers can — and the engineer comes with them.
          </p>
        </Reveal>
      </section>

      {/* FAQ — the visible half of the FAQPage schema above */}
      <section className="py-20 lg:py-24 px-6 lg:px-12 max-w-4xl mx-auto border-t border-gray-100">
        <Reveal variant="group">
          <p data-fx="rise" className="text-sm uppercase tracking-[0.2em] text-forest-green mb-4 font-semibold">04 &middot; Common Questions</p>
          <h2 data-fx="rise" style={d(80)} className="text-3xl sm:text-4xl font-light tracking-tight font-montserrat text-slate-950 mb-5">
            Tight Access. <span className="font-semibold h-bold">Common Questions.</span>
          </h2>
          <div data-fx="line" style={d(200)} className="h-px bg-forest-green w-12 mb-6" />
          <div data-stagger style={d(240)} className="border-t border-gray-200">
            {FAQS.map((f) => (
              <Accordion key={f.q} title={f.q}>
                {f.a}
              </Accordion>
            ))}
          </div>
        </Reveal>
      </section>

      <CloseBand
        source="tight-access-drilling close"
        heading={<>Hard To Reach? <span className="font-semibold h-bold">Perfect.</span></>}
        sub={<>Send the address and a photo of the access. You&rsquo;ll have a fixed fee in writing within one business day.</>}
        quoteLabel="Request A Fixed-Fee Quote"
      />
    </div>
  );
}
