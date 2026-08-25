import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "../site-classification/MotionWrapper";

export const metadata: Metadata = {
  title: "Environmental & Partner Services | Coring, Dilap, Surveys | SFGEO",
  description: "Beyond the core four — environmental sampling for PSI/DSI programs, engineer-supervised concrete coring, geotechnical design parameters, working platform assessments and a trusted partner network.",
  alternates: { canonical: '/other-services' },
  openGraph: {
    images: ['/og/sfgeo-og-card.jpg'],
    title: "Environmental & Partner Services | Coring, Dilap, Surveys | SFGEO",
    description: "Environmental sampling, concrete coring, geotechnical design parameters, working platforms and the partner network.",
    url: '/other-services',
  },
  twitter: {
    card: "summary_large_image",
    images: ['/og/sfgeo-og-card.jpg'],
    title: "Other Services | SFGEO Sydney",
    description: "Environmental sampling, concrete coring, design parameters, working platforms, partner network.",
  },
};

export default function OtherServicesPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "item": { "@id": "https://sfgeo.com.au/", "name": "Home" } },
      { "@type": "ListItem", "position": 2, "item": { "@id": "https://sfgeo.com.au/other-services", "name": "Other Services" } }
    ]
  };

  const CARDS = [
    { t: "Concrete Coring", d: "Engineer-supervised coring of slabs and pavements — logged, verified, and strength-tested through NATA-accredited laboratories when the question needs a number.", href: "/concrete-coring", cta: "Explore Concrete Coring" },
    { t: "Geotechnical Design", d: "Foundation, retaining and pavement parameters for structural and civil teams. We supply the site-specific inputs; your designers engineer from them.", href: "/services#design", cta: "Request Design Parameters" },
    { t: "Working Platform Assessments", d: "Platform verification to support safe temporary works planning for cranes, rigs and heavy plant.", href: "/contact", cta: "Discuss A Platform" },
  ];

  const PARTNER = [
    { t: "Dilapidation Reports", d: "Pre- and post-construction condition surveys of neighbouring structures — the record that protects everyone before excavation or demolition starts nearby." },
    { t: "Land & Detail Surveys", d: "Boundary, level and detail surveys through our trusted surveying partners — coordinated with the geotechnical work so the design team gets one aligned package." },
    { t: "Laboratory Testing", d: "Soil, rock and concrete testing through NATA-accredited partner laboratories — commissioned only when the design question warrants it." },
    { t: "Specialist Engineering", d: "Structural, civil and hydraulic specialists for the questions beyond geotechnics — introduced when the project calls for a collaborative team." },
  ];

  return (
    <div className="bg-white text-slate-950 font-inter selection:bg-forest-green selection:text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 lg:px-12 max-w-7xl mx-auto">
        <FadeIn className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.2em] text-forest-green mb-6 font-semibold">
            Beyond The Core Four &middot; With Partners
          </p>
          <h1 className="text-4xl sm:text-6xl font-montserrat font-light tracking-tight leading-[1.1] mb-8">
            Other <span className="font-semibold">Services.</span>
          </h1>
          <div className="w-[96px] h-[3px] bg-forest-green mb-8" />
          <p className="text-lg sm:text-xl text-gray-600 font-light leading-relaxed">
            The specialist work that rounds out an engagement — delivered by the same principal-led team, or through a partner network built over fifteen years of Sydney ground.
          </p>
        </FadeIn>
      </section>

      {/* Environmental feature row */}
      <section className="py-16 px-6 lg:px-12 max-w-7xl mx-auto border-t border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <FadeIn>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_26px_60px_-26px_rgba(5,10,7,0.4)]">
              <Image src="/environmental-soil-groundwater-sampling-rock-logging-geotechnical-engineer.webp" alt="Soil and groundwater sampling with rock core logging" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <h2 className="text-3xl font-light tracking-tight font-montserrat text-slate-950 mb-6">
              Environmental <span className="font-semibold">Sampling</span>
            </h2>
            <div className="h-px bg-forest-green w-12 mb-8" />
            <p className="text-lg text-gray-600 font-light leading-relaxed mb-6">
              Fieldwork for environmental consultants running contaminated land assessments — soil and groundwater sampling, monitoring well installation, and chain-of-custody support for PSI and DSI programs. We provide the field data and sampling execution; your consultant writes the assessment.
            </p>
            <Link href="/drilling#environmental" className="text-sm font-semibold tracking-wide text-forest-green group inline-flex items-center gap-2">
              <span className="draw-link">Environmental Drilling Detail</span>
              <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Cards */}
      <section className="py-16 px-6 lg:px-12 max-w-7xl mx-auto border-t border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CARDS.map((c) => (
            <FadeIn key={c.t}>
              <div className="p-9 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                <h3 className="text-xl font-montserrat font-semibold text-slate-950 mb-4">{c.t}</h3>
                <p className="text-gray-600 font-light leading-relaxed flex-grow mb-6">{c.d}</p>
                <Link href={c.href} className="text-sm font-semibold tracking-wide text-forest-green group inline-flex items-center gap-2">
                  <span className="draw-link">{c.cta}</span>
                  <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                </Link>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Partner services */}
      <section className="py-16 px-6 lg:px-12 max-w-7xl mx-auto border-t border-gray-100">
        <FadeIn className="mb-12">
          <p className="text-sm uppercase tracking-[0.2em] text-forest-green mb-4 font-semibold">Delivered With Partners</p>
          <h2 className="text-3xl font-light tracking-tight font-montserrat text-slate-950">
            One Engagement, <span className="font-semibold">The Whole Package</span>
          </h2>
          <div className="mt-6 h-px bg-forest-green w-12" />
          <p className="text-lg text-gray-600 font-light leading-relaxed mt-8 max-w-3xl">
            Some of what a project needs sits beyond geotechnics. Rather than leaving you to find and manage three more consultants, SFGEO arranges it through a partner network built over fifteen years — one point of contact, one coordinated deliverable.
          </p>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PARTNER.map((c) => (
            <FadeIn key={c.t}>
              <div className="p-9 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow h-full">
                <h3 className="text-xl font-montserrat font-semibold text-slate-950 mb-4">{c.t}</h3>
                <p className="text-gray-600 font-light leading-relaxed">{c.d}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Close */}
      <section className="mt-16 py-24 px-6 lg:px-12 bg-[#050A07] text-white rounded-t-[3rem] relative overflow-hidden grain">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(45,90,58,0.15),transparent)] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <FadeIn>
            <h2 className="text-4xl sm:text-6xl font-montserrat font-light tracking-tight mb-8">
              Not Sure Where <span className="font-semibold">To Start?</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 font-light leading-relaxed max-w-2xl mx-auto mb-12">
              Describe the project in a sentence. The Principal will tell you what it needs — and what it doesn&rsquo;t.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="tel:+61423483555" className="flex items-center justify-center px-8 py-2.5 bg-gradient-to-b from-[#346b43] to-forest-green text-white rounded-full shadow-[0_8px_20px_-6px_rgba(45,90,58,0.4)] hover:shadow-[0_12px_24px_-8px_rgba(45,90,58,0.6)] hover:brightness-105 transition-all hover:-translate-y-0.5 w-full sm:w-[280px] h-[46px] text-xs font-semibold tracking-wide">
                Call 0423 483 555
              </Link>
              <Link href="/contact" className="flex items-center justify-center px-8 py-2.5 bg-white text-forest-green rounded-full shadow-[inset_0_0_0_1px_rgba(45,90,58,0.25),0_4px_10px_-4px_rgba(0,0,0,0.05)] hover:bg-forest-green/5 transition-all hover:-translate-y-0.5 w-full sm:w-[280px] h-[46px] text-xs font-semibold tracking-wide">
                Request A Quote
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
