import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "../site-classification/MotionWrapper";

export const metadata: Metadata = {
  title: "Other Professional Services Sydney | Utility Location, Dilap, Surveys | SFGEO",
  description: "The disciplines a project needs around the ground — utility location and GPR scanning, dilapidation reports, land and detail surveys, and structural, civil and hydraulic specialists. One point of contact.",
  alternates: { canonical: '/other-services' },
  openGraph: {
    images: ['/og/sfgeo-og-card.jpg'],
    title: "Other Professional Services Sydney | Utility Location, Dilap, Surveys | SFGEO",
    description: "Utility location and GPR, dilapidation reports, surveys and specialist engineering — arranged through one point of contact.",
    url: '/other-services',
  },
  twitter: {
    card: "summary_large_image",
    images: ['/og/sfgeo-og-card.jpg'],
    title: "Other Professional Services | SFGEO Sydney",
    description: "Utility location & GPR, dilapidation reports, surveys, specialist engineering — one point of contact.",
  },
};

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
    body: "Before anything drills, digs or cores — services located and marked, concrete scanned, and the expensive unknowns taken off the table. Arranged through our specialist partner network and coordinated with the fieldwork it protects, so one engagement covers the scan and the work that follows it.",
    link: { href: "/contact", label: "Book A Services Scan" },
  },
  {
    n: "02",
    id: "dilapidation",
    kicker: "02 · Dilapidation Reports",
    titleLight: "Dilapidation",
    titleBold: "Reports.",
    caption: "02 · Dilapidation Reports",
    image: "/sfgeo-dilapidation-condition-measure.jpg",
    alt: "Measuring an exposed footing face during a condition investigation",
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
    body: "Boundary, level and detail surveys through trusted surveying partners — commissioned alongside the geotechnical scope, so the design team receives one aligned package instead of fragments from three separate vendors. SFGEO coordinates; the surveyors survey.",
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
    body: "Some ground questions end in a structural answer — underpinning, retaining, stormwater, remediation. When a project needs disciplines beyond geotechnics, we introduce specialist structural, civil and hydraulic engineers we already work with, and stay in the room: one team around the project, not a referral and a goodbye.",
    link: { href: "/contact", label: "Assemble The Team" },
  },
];

const ALSO = [
  { t: "Groundwater Monitoring Wells & Water Bores", d: "Monitoring well installation and water bore works, delivered end to end — one engagement from drilling to a commissioned well." },
  { t: "Working Platform Assessments", d: "Platform verification to support safe temporary works planning for cranes, rigs and heavy plant." },
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
        <FadeIn className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.2em] text-forest-green mb-6 font-semibold">
            Other Professional Services &middot; One Point Of Contact &middot; Sydney
          </p>
          <h1 className="text-4xl sm:text-6xl font-montserrat font-light tracking-tight leading-[1.08] mb-8">
            The Disciplines <span className="font-semibold">Around The Ground.</span>
          </h1>
          <div className="w-[96px] h-[3px] bg-forest-green mb-8" />
          <p className="text-lg sm:text-xl text-gray-600 font-light leading-relaxed">
            Utility location, dilapidation records, surveys, specialist engineering — the services a project needs beside the geotechnics. Delivered through a trusted partner network, coordinated by SFGEO, under one engagement and one point of contact.
          </p>
        </FadeIn>
      </section>

      {/* The services — numbered editorial rows */}
      {SECTIONS.map((sec, idx) => (
        <section key={sec.id} id={sec.id} className="py-20 lg:py-24 px-6 lg:px-12 max-w-7xl mx-auto border-t border-gray-100 scroll-mt-[90px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <FadeIn className={idx % 2 === 1 ? "lg:order-2" : ""}>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_26px_60px_-26px_rgba(5,10,7,0.4)]">
                <Image src={sec.image} alt={sec.alt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050A07]/40 via-transparent to-transparent" />
                <p className="absolute bottom-5 left-6 text-[11px] uppercase tracking-[0.25em] text-white/80 font-semibold">{sec.caption}</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.12}>
              <p className="text-sm uppercase tracking-[0.2em] text-forest-green mb-4 font-semibold">{sec.kicker}</p>
              <h2 className="text-3xl sm:text-4xl font-montserrat font-light tracking-tight text-slate-950 mb-5">
                {sec.titleLight} <span className="font-semibold">{sec.titleBold}</span>
              </h2>
              <div className="h-px bg-forest-green w-12 mb-7" />
              <p className="text-gray-600 font-light leading-relaxed mb-8">{sec.body}</p>
              <Link href={sec.link.href} className="text-sm font-semibold tracking-wide text-forest-green group inline-flex items-center gap-2">
                <span className="draw-link">{sec.link.label}</span>
                <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
              </Link>
            </FadeIn>
          </div>
        </section>
      ))}

      {/* Also delivered by SFGEO */}
      <section className="py-24 lg:py-28 px-6 lg:px-12 max-w-7xl mx-auto border-t border-gray-100">
        <FadeIn className="mb-14">
          <p className="text-sm uppercase tracking-[0.2em] text-forest-green mb-4 font-semibold">Also Under One Engagement</p>
          <h2 className="text-3xl sm:text-4xl font-montserrat font-light tracking-tight">
            Delivered By <span className="font-semibold">SFGEO.</span>
          </h2>
          <div className="mt-5 h-px bg-forest-green w-12" />
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ALSO.map((a) => (
            <FadeIn key={a.t}>
              <div className="p-8 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow h-full">
                <h3 className="text-lg font-montserrat font-semibold text-slate-950 mb-3">{a.t}</h3>
                <p className="text-gray-600 font-light leading-relaxed text-[15px]">{a.d}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* How the network works */}
      <section className="py-24 lg:py-28 px-6 lg:px-12 max-w-7xl mx-auto border-t border-gray-100">
        <div className="max-w-3xl">
          <FadeIn>
            <p className="text-sm uppercase tracking-[0.2em] text-forest-green mb-4 font-semibold">How It Works</p>
            <h2 className="text-3xl sm:text-4xl font-montserrat font-light tracking-tight text-slate-950 mb-5">
              One Engagement. <span className="font-semibold">Not A Handball.</span>
            </h2>
            <div className="h-px bg-forest-green w-12 mb-7" />
            <p className="text-gray-600 font-light leading-relaxed">
              Every partner in the network is a specialist we&rsquo;ve worked beside on real Sydney projects. SFGEO scopes the work, engages the right firm, coordinates it with the geotechnical program and stays accountable for the whole package — you deal with one team, one invoice trail and one standard, from the first phone call to the last report.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Close */}
      <section className="relative overflow-hidden bg-[#050A07] text-white grain">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(45,90,58,0.3),transparent_60%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center px-6 py-28 lg:py-32 relative z-10">
          <FadeIn>
            <h2 className="text-4xl sm:text-6xl font-montserrat font-light tracking-tight mb-8">
              One Call Covers <span className="font-semibold">The Lot.</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 font-light leading-relaxed max-w-2xl mx-auto mb-12">
              Tell us what the project needs — even if it isn&rsquo;t geotechnical. If it&rsquo;s not ours to do, we&rsquo;ll put the right specialist on it and stay across the result.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="tel:+61423483555" className="flex items-center justify-center px-8 py-2.5 bg-gradient-to-b from-[#346b43] to-forest-green text-white rounded-full shadow-[0_8px_20px_-6px_rgba(45,90,58,0.4)] hover:shadow-[0_12px_24px_-8px_rgba(45,90,58,0.6)] hover:brightness-105 transition-all hover:-translate-y-0.5 w-full sm:w-[280px] h-[46px] text-xs font-semibold tracking-wide">
                Call 0423 483 555
              </Link>
              <Link href="/contact" className="flex items-center justify-center px-8 py-2.5 bg-white/5 text-white rounded-full shadow-[inset_0_0_0_1px_rgba(255,255,255,0.25)] hover:bg-white/10 hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.45)] transition-all hover:-translate-y-0.5 w-full sm:w-[280px] h-[46px] text-xs font-semibold tracking-wide backdrop-blur-sm">
                Request A Quote
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
