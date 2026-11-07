import { Metadata } from "next";
import Link from "next/link";
import type { CSSProperties } from "react";
import QuoteCta from "@/components/forms/QuoteCta";
import Reveal from "@/components/ui/Reveal";
import CloseBand from "@/components/ui/CloseBand";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta(
  "Geotechnical Engineer North Shore | SFGEO",
  "Site classifications and geotechnical investigations on Sydney's North Shore, shown through real SFGEO jobs. Fixed fee in writing within one business day.",
  "/geotechnical-engineer-north-shore",
);

const d = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

// Each card is written from that job's issued report and field record only (North Shore draft, 1 Nov 2026;
// jobs chosen by Alli, 6-7 Nov 2026). No figure appears that the field record does not support.
type Job = {
  service: string;
  title: string;
  meta: string;
  paras: { label?: string; text: string }[];
  facts?: string;
  /** A short card spans the full row on desktop instead of standing as a tall, mostly empty column. */
  wide?: boolean;
};

const JOBS: Job[] = [
  {
    service: "Geotechnical Investigation",
    title: "A Granny Flat Over Fill And Stepped Rock",
    meta: "Neutral Bay · lightweight granny flat on a sloping block",
    paras: [
      { label: "The brief.", text: "A lightweight modular granny flat on piers, on the lower level of a sloping block. Access was by stairs, so the work was done with hand-portable equipment." },
      { label: "On the ground.", text: "Five hand-auger boreholes refused in fill at 0.3 to 0.5 metres. Four penetrometer tests refused at 0.6 to 2.5 metres, read as the rock surface. Weathered sandstone was exposed across the garden, and the Sydney 1:100,000 Geological Series Sheet 9130 maps the site on Hawkesbury Sandstone." },
      { label: "The outcome.", text: "The rock surface was stepped and irregular, so levels could not be carried between test positions. The founding stratum is to be confirmed at each support." },
    ],
    facts: "5 hand-auger boreholes + 4 DCPs · Hand-portable access · Founding to be confirmed at each support",
  },
  {
    service: "Geotechnical Investigation",
    title: "Ground Checked After The Bulk Dig",
    meta: "Hunters Hill · new three-storey home on piles",
    paras: [
      { label: "The brief.", text: "A new three-storey home designed on bored piles socketed into rock. The old house had been demolished and the site cut to a level platform, so the work read the ground then exposed against the pile design." },
      { label: "On the ground.", text: "Two excavator test pits went to practical refusal through orange-brown to grey silty clay, into material with the look and feel of weathered shale and laminite. Published 1:100,000 mapping shows Ashfield Shale." },
      { label: "The outcome.", text: "The inferred rock surface fell from west to east across the site, so it was reported as indicative only, with geotechnical inspection of the first piles to confirm the founding." },
    ],
    facts: "2 excavator test pits · Weathered shale and laminite at refusal · Pile inspections recommended",
  },
  {
    service: "Footing Inspection",
    title: "Checked Before Concrete",
    meta: "Hornsby · retaining wall footing",
    wide: true,
    paras: [
      { text: "We inspected a block retaining wall footing against the structural drawings, with penetrometer testing, before concrete." },
    ],
  },
];

const SERVICES = [
  { title: "Site Classification", desc: "AS 2870 site classifications for homes and granny flats.", href: "/site-classification" },
  { title: "Geotechnical Investigations", desc: "Investigations to AS 1726 for DAs, CDCs, basements and footings.", href: "/geotechnical-investigations" },
  { title: "Construction Phase Support", desc: "Inspections, up to the last one before the pour.", href: "/construction-phase-support" },
  { title: "Tight Access", desc: "Motorised hand augers carry through a standard doorway or side passage, so rear yards and courtyards can be investigated without vehicle access.", href: "/tight-access-drilling" },
  { title: "Testing", desc: "Dynamic cone penetrometer testing, and NATA-accredited laboratory testing where the design calls for it." },
];

export default function NorthShorePage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "item": { "@id": "https://sfgeo.com.au/", "name": "Home" } },
      { "@type": "ListItem", "position": 2, "item": { "@id": "https://sfgeo.com.au/geotechnical", "name": "Geotechnical" } },
      { "@type": "ListItem", "position": 3, "item": { "@id": "https://sfgeo.com.au/geotechnical-engineer-north-shore", "name": "North Shore" } }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Geotechnical Engineering, North Shore",
    "serviceType": "Geotechnical Investigation",
    "description": "Site classifications, geotechnical investigations and footing inspections on Sydney's North Shore, led by the Principal Engineer.",
    "url": "https://sfgeo.com.au/geotechnical-engineer-north-shore",
    "provider": { "@id": "https://sfgeo.com.au/#organization" },
    "areaServed": { "@type": "Place", "name": "North Shore, Sydney, New South Wales, Australia" }
  };

  return (
    <div className="bg-white text-slate-950 font-inter selection:bg-forest-green selection:text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      {/* Hero */}
      <section className="pt-36 pb-20 px-6 lg:px-12 max-w-7xl mx-auto">
        {/* On phones the buttons sit above the paragraph, so they show without scrolling. */}
        <div className="max-w-[52rem] flex flex-col sm:block">
          <p className="hero-line -order-1 sm:order-none text-sm uppercase tracking-[0.2em] text-forest-green mb-6 font-semibold">
            North Shore &middot; Principal-Led &middot; Sydney
          </p>
          <h1 className="-order-1 sm:order-none text-[min(2.25rem,8.2vw)] sm:text-6xl font-montserrat font-light tracking-tight leading-[1.08] mb-8">
            <span className="hero-mask"><span className="mask-line mask-d1"><span>Geotechnical Engineering.</span></span></span>{" "}
            <span className="hero-mask"><span className="mask-line mask-d2"><span className="font-semibold h-bold">North Shore.</span></span></span>
          </h1>
          <div className="hero-line hero-d2 -order-1 sm:order-none w-[96px] h-[3px] bg-forest-green mb-8" />
          <p className="hero-line hero-d2 text-lg sm:text-xl text-gray-600 font-light leading-relaxed sm:mb-10">
            Site classifications, geotechnical investigations and footing inspections on Sydney&rsquo;s North Shore. This is what we found on our own jobs here. Each result belongs to its site, so send us your address and we will read yours.
          </p>
          <div className="hero-line hero-d3 -order-1 sm:order-none mb-8 sm:mb-0 flex flex-col sm:flex-row items-start gap-4">
            <Link
              href="tel:+61423483555"
              className="flex items-center justify-center px-8 py-2.5 bg-gradient-to-b from-[#346b43] to-forest-green text-white rounded-full shadow-[0_8px_20px_-6px_rgba(45,90,58,0.4)] hover:shadow-[0_12px_24px_-8px_rgba(45,90,58,0.6)] hover:brightness-105 transition-all hover:-translate-y-0.5 w-full sm:w-auto h-[46px] text-xs font-semibold tracking-wide"
            >
              Call The Principal Engineer
            </Link>
            <QuoteCta
              source="north-shore hero"
              label="Request A Quote"
              className="flex items-center justify-center px-8 py-2.5 bg-white text-forest-green rounded-full shadow-[inset_0_0_0_1px_rgba(45,90,58,0.25),0_4px_10px_-4px_rgba(0,0,0,0.05)] hover:bg-forest-green/5 hover:shadow-[inset_0_0_0_1px_rgba(45,90,58,0.4),0_6px_14px_-4px_rgba(0,0,0,0.1)] transition-all hover:-translate-y-0.5 w-full sm:w-auto h-[46px] text-xs font-semibold tracking-wide"
            />
          </div>
          <p className="hero-line hero-d3 mt-5 text-xs text-gray-400 font-light tracking-wide">Fixed fee in writing within one business day</p>
        </div>
      </section>

      {/* 01 — Recent jobs */}
      <section id="recent-jobs" className="py-20 lg:py-24 px-6 lg:px-12 max-w-7xl mx-auto border-t border-gray-100">
        <Reveal variant="group" className="mb-14">
          <p data-fx="rise" className="text-sm uppercase tracking-[0.2em] text-forest-green mb-4 font-semibold">01 &middot; Recent Jobs</p>
          <h2 data-fx="rise" style={d(80)} className="text-3xl sm:text-4xl font-montserrat font-light tracking-tight">
            What We Found, <span className="font-semibold h-bold">Job By Job.</span>
          </h2>
          <div data-fx="line" style={d(200)} className="mt-5 h-px bg-forest-green w-12" />
        </Reveal>
        <Reveal variant="group">
          <div data-stagger className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {JOBS.map((job) => (
              <article key={job.title} className={`card-lift p-8 bg-white border border-gray-100 rounded-2xl shadow-sm h-full flex flex-col${job.wide ? " lg:col-span-2" : ""}`}>
                <p className="text-xs uppercase tracking-[0.18em] text-forest-green font-semibold mb-3">{job.service}</p>
                <h3 className="text-lg font-montserrat font-semibold text-slate-950 mb-2">{job.title}</h3>
                <p className="text-sm italic text-gray-500 font-light mb-5">{job.meta}</p>
                <div className={`space-y-4 flex-1${job.wide ? " max-w-3xl" : ""}`}>
                  {job.paras.map((p, i) => (
                    <p key={i} className="text-gray-600 font-light leading-relaxed text-[15px]">
                      {p.label && <span className="font-semibold text-slate-950">{p.label} </span>}
                      {p.text}
                    </p>
                  ))}
                </div>
                {job.facts && (
                  <p className="mt-6 pt-5 border-t border-gray-100 text-xs text-gray-500 font-light tracking-wide leading-relaxed">{job.facts}</p>
                )}
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      {/* 02 — Services */}
      <section id="services" className="py-20 lg:py-24 px-6 lg:px-12 max-w-7xl mx-auto border-t border-gray-100">
        <Reveal variant="group" className="mb-14">
          <p data-fx="rise" className="text-sm uppercase tracking-[0.2em] text-forest-green mb-4 font-semibold">02 &middot; Services</p>
          <h2 data-fx="rise" style={d(80)} className="text-3xl sm:text-4xl font-montserrat font-light tracking-tight">
            What We Do <span className="font-semibold h-bold">Here.</span>
          </h2>
          <div data-fx="line" style={d(200)} className="mt-5 h-px bg-forest-green w-12" />
        </Reveal>
        <Reveal variant="group">
          <div data-stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <div key={s.title} className="card-lift p-8 bg-white border border-gray-100 rounded-2xl shadow-sm h-full">
                <h3 className="text-lg font-montserrat font-semibold text-slate-950 mb-3">
                  {s.href ? (
                    <Link href={s.href} className="hover:text-forest-green transition-colors">{s.title}</Link>
                  ) : s.title}
                </h3>
                <p className="text-gray-600 font-light leading-relaxed text-[15px]">{s.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <CloseBand
        source="north-shore close"
        heading={<>Start With <span className="font-semibold h-bold">The Ground.</span></>}
        sub={<>Send the address. The desktop geology is checked before we even quote.</>}
      />
    </div>
  );
}
