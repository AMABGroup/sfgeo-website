import { Metadata } from "next";
import Link from "next/link";
import type { CSSProperties } from "react";
import PhotoPlaceholder from "@/components/ui/PhotoPlaceholder";
import Reveal from "@/components/ui/Reveal";
import PhotoFrame from "@/components/ui/PhotoFrame";
import CloseBand from "@/components/ui/CloseBand";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta(
  "Dilapidation Reports, Utility Location & Surveys Sydney | SFGEO",
  "Dilapidation reports, utility location and GPR scanning, land surveys and structural, civil and hydraulic specialists — SFGEO coordinates, one engagement.",
  "/other-services",
);

const d = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

const SECTIONS = [
  {
    n: "01",
    id: "utility-gpr",
    kicker: "01 · Utility Location & GPR",
    titleLight: "Utility Location",
    titleBold: "& GPR Scanning.",
    caption: "01 · Utility Location & GPR",
    image: "/sfgeo-exposed-services-excavation.jpg",
    alt: "Exposed services in an open excavation with a tape measure",
    body: (
      <>
        Before anything drills, digs or cores — services located and marked, concrete scanned, and the expensive unknowns taken off the table. Arranged through our specialist partner network and coordinated with the <Link href="/borehole-drilling" className="text-forest-green hover:underline">borehole drilling</Link> or <Link href="/concrete-coring" className="text-forest-green hover:underline">concrete coring</Link> it protects, so one engagement covers the scan and the work that follows it.
      </>
    ),
    link: { href: "/contact", label: "Book A Services Scan" },
  },
  {
    n: "02",
    id: "dilapidation",
    kicker: "02 · Dilapidation Reports",
    titleLight: "Dilapidation",
    titleBold: "Reports.",
    caption: "02 · Dilapidation Reports",
    image: null,
    shot: "A dilapidation record being taken — crack gauge or tape against a neighbouring wall, or the photographer documenting a boundary structure.",
    body: "Pre- and post-construction condition records of neighbouring structures — the evidence that protects everyone before excavation, demolition or heavy vibration starts next door. Delivered through our partner network, with SFGEO setting the scope and timing so the record exists before the first machine arrives.",
    link: { href: "/contact", label: "Arrange A Dilapidation Record" },
  },
  {
    n: "03",
    id: "surveying",
    kicker: "03 · Land & Detail Surveys",
    titleLight: "Land & Detail",
    titleBold: "Surveys.",
    caption: "03 · Land & Detail Surveys",
    image: "/sfgeo-level-check-graded-pad.jpg",
    alt: "Level staff standing on a freshly graded pad during earthworks",
    body: (
      <>
        Boundary, level and detail surveys through trusted surveying partners — commissioned alongside the <Link href="/geotechnical-investigations" className="text-forest-green hover:underline">geotechnical investigation</Link>, so the design team receives one aligned package instead of fragments from three separate vendors. SFGEO coordinates; the surveyors survey.
      </>
    ),
    link: { href: "/contact", label: "Coordinate A Survey" },
  },
  {
    n: "04",
    id: "specialist",
    kicker: "04 · Structural, Civil & Hydraulic",
    titleLight: "Structural, Civil",
    titleBold: "& Hydraulic.",
    caption: "04 · Structural, Civil & Hydraulic",
    image: "/sfgeo-piling-rig-civil-works.jpg",
    alt: "Piling rig working beside a brick building on a Sydney site",
    body: (
      <>
        Some ground questions end in a structural answer — underpinning, <Link href="/geotechnical-design" className="text-forest-green hover:underline">retaining walls</Link>, stormwater, remediation. When a project needs disciplines beyond geotechnics, we introduce specialist structural, civil and hydraulic engineers we already work with, and stay in the room: one team around the project, not a referral and a goodbye.
      </>
    ),
    link: { href: "/contact", label: "Assemble The Team" },
  },
];

const FIRST_IMAGE_ID = SECTIONS.find((s) => s.image)?.id;

const ALSO = [
  { t: "Groundwater Monitoring Wells & Water Bores", d: "Scoped and managed by SFGEO and installed by a licensed drilling contractor — one engagement, with the engineer who logs the ground writing the report." },
  {
    t: "Working Platform Assessments",
    d: (
      <>
        <Link href="/construction-phase-support" className="text-forest-green hover:underline">Platform verification</Link> to support safe temporary works planning for cranes, rigs and heavy plant.
      </>
    ),
  },
];

export default function OtherServicesPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "item": { "@id": "https://sfgeo.com.au/", "name": "Home" } },
      { "@type": "ListItem", "position": 2, "item": { "@id": "https://sfgeo.com.au/other-services", "name": "Other Professional Services" } }
    ]
  };
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Other Professional Services",
    "serviceType": "Utility location, dilapidation reports, surveying and specialist engineering coordination",
    "description": "Utility location and GPR scanning, dilapidation reports, land and detail surveys, and structural, civil and hydraulic engineering — arranged through SFGEO's partner network under one point of contact.",
    "url": "https://sfgeo.com.au/other-services",
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
            Other Professional Services &middot; One Point Of Contact &middot; Sydney
          </p>
          <h1 className="text-[min(2.25rem,8.2vw)] sm:text-6xl font-montserrat font-light tracking-tight leading-[1.08] mb-8">
            <span className="hero-mask"><span className="mask-line mask-d1"><span>The Disciplines</span></span></span>
            <span className="hero-mask"><span className="mask-line mask-d2"><span className="font-semibold h-bold">Around The Ground.</span></span></span>
          </h1>
          <div className="hero-line hero-d2 w-[96px] h-[3px] bg-forest-green mb-8" />
          <p className="hero-line hero-d2 text-lg sm:text-xl text-gray-600 font-light leading-relaxed">
            Utility location, dilapidation records, surveys, specialist engineering — the services a project needs beside the geotechnics. Delivered through a trusted partner network, coordinated by SFGEO, under one engagement and one point of contact.
          </p>
        </div>
      </section>

      {/* The services — numbered editorial rows */}
      {SECTIONS.map((sec, idx) => (
        <section key={sec.id} id={sec.id} className="py-20 lg:py-24 px-6 lg:px-12 max-w-7xl mx-auto border-t border-gray-100 scroll-mt-[90px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {sec.image ? (
              <PhotoFrame
                src={sec.image}
                alt={sec.alt}
                caption={sec.caption}
                aspect="aspect-[4/3]"
                sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 50vw, 600px"
                priority={sec.id === FIRST_IMAGE_ID}
                wrapperClassName={idx % 2 === 1 ? "lg:order-2" : ""}
              />
            ) : (
              <Reveal variant="group" className={idx % 2 === 1 ? "lg:order-2" : ""}>
                <div data-fx="scale">
                  <PhotoPlaceholder
                    subject={sec.shot ?? ""}
                    caption={sec.caption}
                    className="aspect-[4/3] rounded-2xl shadow-[0_26px_60px_-26px_rgba(5,10,7,0.4)]"
                  />
                </div>
              </Reveal>
            )}
            <Reveal variant="group">
              <p data-fx="rise" className="text-sm uppercase tracking-[0.2em] text-forest-green mb-4 font-semibold">{sec.kicker}</p>
              <h2 data-fx="rise" style={d(80)} className="text-3xl sm:text-4xl font-montserrat font-light tracking-tight text-slate-950 mb-5">
                {sec.titleLight} <span className="font-semibold h-bold">{sec.titleBold}</span>
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

      {/* Also delivered by SFGEO */}
      <section className="py-24 lg:py-28 px-6 lg:px-12 max-w-7xl mx-auto border-t border-gray-100">
        <Reveal variant="group" className="mb-14">
          <p data-fx="rise" className="text-sm uppercase tracking-[0.2em] text-forest-green mb-4 font-semibold">Also Available</p>
          <h2 data-fx="rise" style={d(80)} className="text-3xl sm:text-4xl font-montserrat font-light tracking-tight">
            Under One <span className="font-semibold h-bold">Engagement.</span>
          </h2>
          <div data-fx="line" style={d(200)} className="mt-5 h-px bg-forest-green w-12" />
        </Reveal>
        <Reveal variant="group">
          <div data-stagger className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ALSO.map((a) => (
              <div key={a.t} className="card-lift p-8 bg-white border border-gray-100 rounded-2xl shadow-sm h-full">
                <h3 className="text-lg font-montserrat font-semibold text-slate-950 mb-3">{a.t}</h3>
                <p className="text-gray-600 font-light leading-relaxed text-[15px]">{a.d}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* How the network works */}
      <section className="py-24 lg:py-28 px-6 lg:px-12 max-w-7xl mx-auto border-t border-gray-100">
        <Reveal variant="group" className="max-w-3xl">
          <p data-fx="rise" className="text-sm uppercase tracking-[0.2em] text-forest-green mb-4 font-semibold">How It Works</p>
          <h2 data-fx="rise" style={d(80)} className="text-3xl sm:text-4xl font-montserrat font-light tracking-tight text-slate-950 mb-5">
            One Engagement. <span className="font-semibold h-bold">Not A Handball.</span>
          </h2>
          <div data-fx="line" style={d(200)} className="h-px bg-forest-green w-12 mb-7" />
          <p data-fx="rise" style={d(160)} className="text-gray-600 font-light leading-relaxed">
            Every partner in the network is a specialist we&rsquo;ve worked beside on real Sydney projects. SFGEO scopes the work, engages the right firm, coordinates it with the geotechnical program and stays accountable for the whole package — you deal with one team, one invoice trail and one standard, from the first phone call to the last report.
          </p>
        </Reveal>
      </section>

      <CloseBand
        source="other-services close"
        heading={<>One Call Covers <span className="font-semibold h-bold">The Lot.</span></>}
        sub={<>Tell us what the project needs — even if it isn&rsquo;t geotechnical. If it&rsquo;s not ours to do, we&rsquo;ll put the right specialist on it and stay across the result.</>}
      />
    </div>
  );
}
