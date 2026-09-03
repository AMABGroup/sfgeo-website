import { Metadata } from "next";
import Link from "next/link";
import type { CSSProperties } from "react";
import PhotoPlaceholder from "@/components/ui/PhotoPlaceholder";
import Reveal from "@/components/ui/Reveal";
import PhotoFrame from "@/components/ui/PhotoFrame";
import CloseBand from "@/components/ui/CloseBand";
import { OG_BASE, TWITTER_BASE } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Geotechnical Engineering Sydney | The Full Suite | SFGEO",
  description: "The full geotechnical suite for Sydney — site classifications, investigations, assessments, construction phase support and design. Principal-led, fixed-fee.",
  alternates: { canonical: '/geotechnical' },
  openGraph: {
    ...OG_BASE,
    title: "Geotechnical Engineering Sydney | The Full Suite | SFGEO",
    description: "Site classifications, investigations, assessments, construction support and design — principal-led, fixed-fee.",
    url: '/geotechnical',
  },
  twitter: {
    ...TWITTER_BASE,
    title: "Geotechnical Engineering Sydney | SFGEO",
    description: "The full geotechnical suite — principal-led, fixed-fee, family owned.",
  },
};

const d = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

const SECTIONS = [
  {
    n: "01",
    id: "site-classification",
    title: "Site Classification",
    image: "/sfgeo-sc-hand-auger-panania.jpg",
    alt: "Hand auger mid-borehole in a Panania backyard",
    body: "The AS 2870 report your structural engineer designs from — homes, extensions, granny flats, duplexes and pools, scoped to your block rather than a template. Fixed fees from $800 + GST, reports as soon as 2–3 business days from fieldwork.",
    link: { href: "/site-classification", label: "Explore Site Classification" },
  },
  {
    n: "02",
    id: "investigations",
    title: "Geotechnical Investigations",
    image: "/sfgeo-gi-rig-golden-coogee.jpg",
    alt: "Drill rig in golden morning light above a Coogee allotment",
    body: "Boreholes, penetrometers and NATA-backed laboratory data for DAs, complying development, footings, basements and retaining structures. The engineer who drills your ground is the engineer who signs your report.",
    link: { href: "/geotechnical-investigations", label: "Explore Geotechnical Investigations" },
  },
  {
    n: "03",
    id: "assessments",
    title: "Geotechnical Assessments",
    image: "/sfgeo-sandstone-outcrop-hunters-hill.jpg",
    alt: "Layered sandstone outcrop above a Sydney site",
    body: "The specific questions that need an engineering answer: slope stability and retaining assessments, settlement and cracking investigations, compliance records for council orders, and second opinions on someone else's report. Scoped to the question, answered in writing.",
    link: { href: "/geotechnical-assessments", label: "Explore Assessments" },
  },
  {
    n: "04",
    id: "cps",
    title: "Construction Phase Support",
    image: "/footing-pile-inspection-north-willoughby-geotechnical.jpg",
    alt: "Footing and pier inspection at bearing level",
    body: "Footing, pier and pile inspections at bearing level, proof rolls, and engineered fill to AS 3798 — verified on site and confirmed in writing before the pour, so an open excavation never waits. Single visits for builders; standing engagements for commercial contractors.",
    link: { href: "/construction-phase-support", label: "Explore Construction Phase Support" },
  },
  {
    n: "05",
    id: "design",
    title: "Geotechnical Design",
    image: null,
    shot: "Design parameters being derived — the engineer at the plans desk, or a marked-up structural drawing beside the borehole log.",
    body: "Site-specific inputs for structural and civil teams — bearing capacities, pile design values, retaining wall parameters to AS 4678, pavement and working platform assessments. We don't carry the structural design; we make sure the numbers under it are real.",
    link: { href: "/geotechnical-design", label: "Explore Geotechnical Design" },
  },
];

const AUDIENCES = [
  { t: "Homeowners", d: "A classification or investigation for the home, pool or granny flat — explained in plain English, priced fixed." },
  { t: "Architects & Builders", d: "Reports written to your certifier's requirements, and inspections that keep the program moving." },
  { t: "Engineers & Developers", d: "Parameters your designs can rely on, investigations at any access, peer-review depth on request." },
  { t: "Councils & Asset Owners", d: "Compliance records, asset investigations and assessments that stand up to scrutiny." },
];

export default function GeotechnicalHubPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "item": { "@id": "https://sfgeo.com.au/", "name": "Home" } },
      { "@type": "ListItem", "position": 2, "item": { "@id": "https://sfgeo.com.au/geotechnical", "name": "Geotechnical" } }
    ]
  };
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Geotechnical Engineering",
    "serviceType": "Geotechnical engineering services",
    "description": "Full-suite geotechnical engineering for Sydney: site classifications, investigations, assessments, construction phase support and geotechnical design parameters.",
    "url": "https://sfgeo.com.au/geotechnical",
    "provider": { "@id": "https://sfgeo.com.au/#organization" },
    "areaServed": { "@type": "City", "name": "Sydney, New South Wales, Australia" }
  };

  return (
    <div className="bg-white text-slate-950 font-inter selection:bg-forest-green selection:text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      {/* Hero */}
      <section className="pt-36 pb-20 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <p className="hero-line text-sm uppercase tracking-[0.2em] text-forest-green mb-6 font-semibold">
            Geotechnical &middot; Principal-Led &middot; Sydney
          </p>
          <h1 className="text-4xl sm:text-6xl font-montserrat font-light tracking-tight leading-[1.08] mb-8">
            <span className="hero-mask"><span className="mask-line mask-d1"><span>Geotechnical.</span></span></span>
            <span className="hero-mask"><span className="mask-line mask-d2"><span className="font-semibold h-bold">The Full Suite.</span></span></span>
          </h1>
          <div className="hero-line hero-d2 w-[96px] h-[3px] bg-forest-green mb-8" />
          <p className="hero-line hero-d2 text-lg sm:text-xl text-gray-600 font-light leading-relaxed">
            From the first hole on an empty block to the last inspection before the pour — one team carries the whole geotechnical scope, and the Principal is across every job.
          </p>
        </div>
      </section>

      {/* The suite — numbered editorial rows */}
      {SECTIONS.map((sec, idx) => (
        <section key={sec.id} id={sec.id} className="py-20 lg:py-24 px-6 lg:px-12 max-w-7xl mx-auto border-t border-gray-100 scroll-mt-[90px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {sec.image ? (
              <PhotoFrame
                src={sec.image}
                alt={sec.alt}
                caption={<>{sec.n} &middot; {sec.title}</>}
                aspect="aspect-[4/3]"
                sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 50vw, 600px"
                priority={idx === 0}
                wrapperClassName={idx % 2 === 1 ? "lg:order-2" : ""}
              />
            ) : (
              <Reveal variant="group" className={idx % 2 === 1 ? "lg:order-2" : ""}>
                <div data-fx="scale">
                  <PhotoPlaceholder
                    subject={sec.shot ?? ""}
                    caption={`${sec.n} · ${sec.title}`}
                    className="aspect-[4/3] rounded-2xl shadow-[0_26px_60px_-26px_rgba(5,10,7,0.4)]"
                  />
                </div>
              </Reveal>
            )}
            <Reveal variant="group">
              <p data-fx="rise" className="text-sm uppercase tracking-[0.2em] text-forest-green mb-4 font-semibold">{sec.n}</p>
              <h2 data-fx="rise" style={d(80)} className="text-3xl sm:text-4xl font-montserrat font-light tracking-tight text-slate-950 mb-5">
                {sec.title.split(" ").slice(0, -1).join(" ")} <span className="font-semibold h-bold">{sec.title.split(" ").slice(-1)}</span>
              </h2>
              <div data-fx="line" style={d(200)} className="h-px bg-forest-green w-12 mb-7" />
              <p data-fx="rise" style={d(160)} className="text-gray-600 font-light leading-relaxed mb-8">{sec.body}</p>
              <Link data-fx="rise" style={d(220)} href={sec.link.href} className="text-sm font-semibold tracking-wide text-forest-green group inline-flex items-center gap-2">
                <span className="draw-link">{sec.link.label}</span>
                <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
              </Link>
            </Reveal>
          </div>
        </section>
      ))}

      {/* Who we work with */}
      <section className="py-24 lg:py-28 px-6 lg:px-12 max-w-7xl mx-auto border-t border-gray-100">
        <Reveal variant="group" className="mb-14">
          <p data-fx="rise" className="text-sm uppercase tracking-[0.2em] text-forest-green mb-4 font-semibold">Who We Work With</p>
          <h2 data-fx="rise" style={d(80)} className="text-3xl sm:text-4xl font-montserrat font-light tracking-tight">
            Same Ground. <span className="font-semibold h-bold">Different Questions.</span>
          </h2>
          <div data-fx="line" style={d(200)} className="mt-5 h-px bg-forest-green w-12" />
        </Reveal>
        <Reveal variant="group">
          <div data-stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {AUDIENCES.map((a) => (
              <div key={a.t} className="card-lift p-8 bg-white border border-gray-100 rounded-2xl shadow-sm h-full">
                <h3 className="text-lg font-montserrat font-semibold text-slate-950 mb-3 min-h-[56px]">{a.t}</h3>
                <p className="text-gray-600 font-light leading-relaxed text-[15px]">{a.d}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <CloseBand
        source="geotechnical close"
        heading={<>Not Sure Which <span className="font-semibold h-bold">You Need?</span></>}
        sub={<>Describe the project in a sentence. The Principal will tell you what it needs &mdash; and what it doesn&rsquo;t.</>}
      />
    </div>
  );
}
