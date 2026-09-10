import { Metadata } from "next";
import Link from "next/link";
import type { CSSProperties } from "react";
import Reveal from "@/components/ui/Reveal";
import PhotoFrame from "@/components/ui/PhotoFrame";
import CloseBand from "@/components/ui/CloseBand";
import { pageMeta } from "@/lib/seo";
import Accordion from "@/components/ui/Accordion";

export const metadata: Metadata = pageMeta(
  "Dilapidation Reports & Utility Location Sydney | SFGEO",
  "Dilapidation reports, utility location, GPR, surveys and specialist engineers in Sydney, coordinated by SFGEO. Fixed fee in writing within one business day.",
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
        Before anything drills, digs or cores: services located and marked, concrete scanned, and the expensive unknowns taken off the table. Arranged through our specialist partner network and coordinated with the <Link href="/borehole-drilling" className="text-forest-green underline underline-offset-4 decoration-forest-green/40 hover:decoration-forest-green">borehole drilling</Link> or <Link href="/concrete-coring" className="text-forest-green underline underline-offset-4 decoration-forest-green/40 hover:decoration-forest-green">concrete coring</Link> it protects, so one engagement covers the scan and the work that follows it.
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
    image: "/sfgeo-dilapidation-crack-caliper.jpg",
    alt: "A stepped crack in a rendered wall measured with a vernier caliper during a dilapidation inspection in Naremburn",
    body: "Pre- and post-construction condition records of neighbouring structures, the evidence that protects everyone before excavation, demolition or heavy vibration starts next door. Delivered through our partner network, with SFGEO setting the scope and timing so the record exists before the first machine arrives.",
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
        Boundary, level and detail surveys through trusted surveying partners, commissioned alongside the <Link href="/geotechnical-investigations" className="text-forest-green underline underline-offset-4 decoration-forest-green/40 hover:decoration-forest-green">geotechnical investigation</Link>, so the design team receives one aligned package instead of fragments from three separate vendors. SFGEO coordinates; the surveyors survey.
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
        Some ground questions end in a structural answer: underpinning, <Link href="/geotechnical-design" className="text-forest-green underline underline-offset-4 decoration-forest-green/40 hover:decoration-forest-green">retaining walls</Link>, stormwater, remediation. When a project needs disciplines beyond geotechnics, we introduce specialist structural, civil and hydraulic engineers we already work with, and stay in the room: one team around the project, not a referral and a goodbye.
      </>
    ),
    link: { href: "/contact", label: "Assemble The Team" },
  },
];

const FIRST_IMAGE_ID = SECTIONS.find((s) => s.image)?.id;

const ALSO = [
  { t: "Groundwater Monitoring Wells & Water Bores", d: "Scoped and managed by SFGEO and installed by a licensed drilling contractor. One engagement, with the engineer who logs the ground writing the report." },
  {
    t: "Working Platform Assessments",
    d: (
      <>
        <Link href="/construction-phase-support" className="text-forest-green underline underline-offset-4 decoration-forest-green/40 hover:decoration-forest-green">Platform verification</Link> to support safe temporary works planning for cranes, rigs and heavy plant.
      </>
    ),
  },
];

// Rendered visibly below and mirrored into the FAQPage schema: the two must stay in step.
const FAQS = [
  {
    q: "How much does a dilapidation report cost in Sydney?",
    a: "Dilapidation reports are quoted per site, as a fixed fee in writing within one business day of receiving the site address. There is no published figure: the scope of the record sets the fee. SFGEO sets that scope and a partner firm carries out the inspection. Send the site address and any plans you have.",
  },
  {
    q: "When should a dilapidation report be done?",
    a: "Before the works begin. The pre-construction record documents the condition of the neighbouring structures before excavation, demolition or vibration-heavy work starts, and the post-construction record is taken when the works are complete. A record taken late cannot show what state the structures were in beforehand, so SFGEO sets the inspection date against the construction programme and engages the partner firm to that date.",
  },
  {
    q: "Do I need utility location before drilling or coring?",
    a: "Yes. Underground services are located and marked before a borehole goes in, and a slab is scanned with GPR before a core goes through it. SFGEO arranges the scan through a specialist partner and schedules it ahead of the borehole drilling or concrete coring, so the scan and the drilling sit inside the same SFGEO engagement rather than two separate bookings.",
  },
  {
    q: "Does SFGEO do the utility location and dilapidation inspections itself?",
    a: "No. Utility location, dilapidation records, surveys and structural, civil and hydraulic engineering are carried out by specialist partner firms SFGEO has worked beside on Sydney projects. SFGEO sets the scope, chooses the firm, fits the timing to the geotechnical programme and remains accountable for the package. The geotechnical report itself is SFGEO work, written and signed by the engineer who logged the ground.",
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
    "description": "Utility location and GPR scanning, dilapidation reports, land and detail surveys, and structural, civil and hydraulic engineering, arranged through SFGEO’s partner network under one point of contact.",
    "url": "https://sfgeo.com.au/other-services",
    "provider": { "@id": "https://sfgeo.com.au/#organization" },
    "areaServed": { "@type": "City", "name": "Sydney, New South Wales, Australia" }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQS.map((f) => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a },
    })),
  };

  return (
    <div className="bg-white text-slate-950 font-inter selection:bg-forest-green selection:text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="pt-36 pb-20 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <p className="hero-line text-sm uppercase tracking-[0.2em] text-forest-green mb-6 font-semibold">
            Other Professional Services &middot; One Point Of Contact &middot; Sydney
          </p>
          <h1 className="text-[min(2.25rem,8.2vw)] sm:text-6xl font-montserrat font-light tracking-tight leading-[1.08] mb-8">
            <span className="hero-mask"><span className="mask-line mask-d1"><span>Dilapidation Reports, Utility Location &amp; Surveys.</span></span></span>{" "}
            <span className="hero-mask"><span className="mask-line mask-d2"><span className="font-semibold h-bold">One Engagement.</span></span></span>
          </h1>
          <div className="hero-line hero-d2 w-[96px] h-[3px] bg-forest-green mb-8" />
          <p className="hero-line hero-d2 text-lg sm:text-xl text-gray-600 font-light leading-relaxed">
            The services a project needs beside the geotechnics, for owners, builders and design teams across Sydney: dilapidation records, utility location and GPR scanning, land surveys and structural, civil and hydraulic engineering. Partner firms do the work. SFGEO scopes it, times it against the geotechnical programme and answers for the result. Every service is quoted per site, as a fixed fee in writing within one business day.
          </p>
          <p className="hero-line hero-d3 mt-5 text-sm text-gray-500 font-light tracking-wide">Partner-delivered under one SFGEO engagement &middot; Quoted per site &middot; Fixed fee in writing within one business day</p>
        </div>
      </section>

      {/* The services — numbered editorial rows */}
      {SECTIONS.map((sec, idx) => (
        <section key={sec.id} id={sec.id} className="py-20 lg:py-24 px-6 lg:px-12 max-w-7xl mx-auto border-t border-gray-100 scroll-mt-[90px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <PhotoFrame
                src={sec.image}
                alt={sec.alt}
                caption={sec.caption}
                captionClassName="hidden lg:block"
                aspect="aspect-[4/3]"
                sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 50vw, 600px"
                priority={sec.id === FIRST_IMAGE_ID}
                wrapperClassName={idx % 2 === 1 ? "lg:order-2" : ""}
              />
            <Reveal variant="group">
              <p data-fx="rise" className="text-sm uppercase tracking-[0.2em] text-forest-green mb-4 font-semibold">{sec.kicker}</p>
              <h2 data-fx="rise" style={d(80)} className="text-3xl sm:text-4xl font-montserrat font-light tracking-tight text-slate-950 mb-5">
                {sec.titleLight} <span className="font-semibold h-bold">{sec.titleBold}</span>
              </h2>
              <div data-fx="line" style={d(200)} className="h-px bg-forest-green w-12 mb-7" />
              <p data-fx="rise" style={d(160)} className="text-gray-600 font-light leading-relaxed mb-8">{sec.body}</p>
              <Link data-fx="rise" style={d(220)} href={sec.link.href} className="text-sm font-semibold tracking-wide text-forest-green group inline-flex items-center gap-2 min-h-[44px]">
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
            Every partner in the network is a specialist we&rsquo;ve worked beside on real Sydney projects. SFGEO scopes the work, engages the right firm, coordinates it with the geotechnical program and stays accountable for the whole package. You deal with one team, one invoice trail and one standard, from the first phone call to the last report.
          </p>
        </Reveal>
      </section>

      {/* FAQ: the visible half of the FAQPage schema above */}
      <section className="py-20 lg:py-24 px-6 lg:px-12 max-w-7xl mx-auto border-t border-gray-100">
        <Reveal variant="group" className="max-w-4xl">
          <p data-fx="rise" className="text-sm uppercase tracking-[0.2em] text-forest-green mb-4 font-semibold">05 &middot; Common Questions</p>
          <h2 data-fx="rise" style={d(80)} className="text-3xl sm:text-4xl font-light tracking-tight font-montserrat text-slate-950 mb-5">
            Other Services. <span className="font-semibold h-bold">Common Questions.</span>
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
        source="other-services close"
        heading={<>One Call Covers <span className="font-semibold h-bold">The Lot.</span></>}
        sub={<>Tell us what the project needs, even if it isn&rsquo;t geotechnical. If it&rsquo;s not ours to do, we&rsquo;ll put the right specialist on it and stay across the result.</>}
      />
    </div>
  );
}
