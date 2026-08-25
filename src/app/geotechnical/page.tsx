import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "../site-classification/MotionWrapper";

export const metadata: Metadata = {
  title: "Geotechnical Engineering Sydney | The Full Suite | SFGEO",
  description: "The full geotechnical suite for Sydney — site classifications, investigations, assessments, construction phase support and design parameters. Principal-led, fixed-fee, family owned.",
  alternates: { canonical: '/geotechnical' },
  openGraph: {
    images: ['/og/sfgeo-og-card.jpg'],
    title: "Geotechnical Engineering Sydney | The Full Suite | SFGEO",
    description: "Site classifications, investigations, assessments, construction support and design — principal-led, fixed-fee.",
    url: '/geotechnical',
  },
  twitter: {
    card: "summary_large_image",
    images: ['/og/sfgeo-og-card.jpg'],
    title: "Geotechnical Engineering Sydney | SFGEO",
    description: "The full geotechnical suite — principal-led, fixed-fee, family owned.",
  },
};

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
    link: { href: "/geotechnical-investigations", label: "Explore Investigations" },
  },
  {
    n: "03",
    id: "assessments",
    title: "Geotechnical Assessments",
    image: "/sfgeo-sandstone-cuttings-hand.jpg",
    alt: "Sandstone cuttings read in hand at the auger",
    body: "The specific questions that need an engineering answer: slope stability and retaining assessments, settlement and cracking investigations, compliance records for council orders, and second opinions on someone else's report. Scoped to the question, answered in writing.",
    link: { href: "/contact", label: "Ask The Question" },
  },
  {
    n: "04",
    id: "cps",
    title: "Construction Phase Support",
    image: "/sfgeo-strip-footing-inspection.jpg",
    alt: "Strip footing trench inspection along a garden path",
    body: "Footing, pier and pile inspections at bearing level, proof rolls, and engineered fill to AS 3798 — verified on site and confirmed in writing before the pour, so an open excavation never waits. Single visits for builders; standing engagements for commercial contractors.",
    link: { href: "/contact", label: "Book An Inspection" },
  },
  {
    n: "05",
    id: "design",
    title: "Geotechnical Design",
    image: "/sfgeo-sc-soil-sequence-willoughby.jpg",
    alt: "A soil sequence laid out across pavers during fieldwork",
    body: "Site-specific inputs for structural and civil teams — bearing capacities, pile design values, retaining wall parameters to AS 4678, pavement and working platform assessments. We don't carry the structural design; we make sure the numbers under it are real.",
    link: { href: "/contact", label: "Request Design Parameters" },
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
        <FadeIn className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.2em] text-forest-green mb-6 font-semibold">
            Geotechnical &middot; Principal-Led &middot; Sydney
          </p>
          <h1 className="text-4xl sm:text-6xl font-montserrat font-light tracking-tight leading-[1.08] mb-8">
            Geotechnical. <span className="font-semibold">The Full Suite.</span>
          </h1>
          <div className="w-[96px] h-[3px] bg-forest-green mb-8" />
          <p className="text-lg sm:text-xl text-gray-600 font-light leading-relaxed">
            From the first hole on an empty block to the last inspection before the pour — one team carries the whole geotechnical scope, and the Principal is across every job.
          </p>
        </FadeIn>
      </section>

      {/* The suite — numbered editorial rows */}
      {SECTIONS.map((sec, idx) => (
        <section key={sec.id} id={sec.id} className="py-20 lg:py-24 px-6 lg:px-12 max-w-7xl mx-auto border-t border-gray-100 scroll-mt-[90px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <FadeIn className={idx % 2 === 1 ? "lg:order-2" : ""}>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_26px_60px_-26px_rgba(5,10,7,0.4)]">
                <Image src={sec.image} alt={sec.alt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050A07]/40 via-transparent to-transparent" />
                <p className="absolute bottom-5 left-6 text-[11px] uppercase tracking-[0.25em] text-white/80 font-semibold">{sec.n} &middot; {sec.title}</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.12}>
              <p className="text-sm uppercase tracking-[0.2em] text-forest-green mb-4 font-semibold">{sec.n}</p>
              <h2 className="text-3xl sm:text-4xl font-montserrat font-light tracking-tight text-slate-950 mb-5">
                {sec.title.split(" ").slice(0, -1).join(" ")} <span className="font-semibold">{sec.title.split(" ").slice(-1)}</span>
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

      {/* Who we work with */}
      <section className="py-24 lg:py-28 px-6 lg:px-12 max-w-7xl mx-auto border-t border-gray-100">
        <FadeIn className="mb-14">
          <p className="text-sm uppercase tracking-[0.2em] text-forest-green mb-4 font-semibold">Who We Work With</p>
          <h2 className="text-3xl sm:text-4xl font-montserrat font-light tracking-tight">
            Same Ground. <span className="font-semibold">Different Questions.</span>
          </h2>
          <div className="mt-5 h-px bg-forest-green w-12" />
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {AUDIENCES.map((a) => (
            <FadeIn key={a.t}>
              <div className="p-8 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow h-full">
                <h3 className="text-lg font-montserrat font-semibold text-slate-950 mb-3">{a.t}</h3>
                <p className="text-gray-600 font-light leading-relaxed text-[15px]">{a.d}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Close */}
      <section className="relative overflow-hidden bg-[#050A07] text-white grain">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(45,90,58,0.3),transparent_60%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center px-6 py-28 lg:py-32 relative z-10">
          <FadeIn>
            <h2 className="text-4xl sm:text-6xl font-montserrat font-light tracking-tight mb-8">
              Not Sure Which <span className="font-semibold">You Need?</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 font-light leading-relaxed max-w-2xl mx-auto mb-12">
              Describe the project in a sentence. The Principal will tell you what it needs — and what it doesn&rsquo;t.
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
