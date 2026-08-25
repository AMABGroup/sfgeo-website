import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FadeIn, StaggerContainer, FadeInChild } from "../site-classification/MotionWrapper";
import QuickQuoteCard from "@/components/forms/QuickQuoteCard";
import GoogleReviews from "@/components/ui/GoogleReviews";

export const metadata: Metadata = {
  title: "Geotechnical Investigations Sydney | DA & Footing Reports | SFGEO",
  description: "Principal-led geotechnical investigations for Sydney DAs, footings, basements and retaining structures. Fixed-fee quotes, reports certifiers accept.",
  alternates: {
    canonical: '/geotechnical-investigations',
  },
  openGraph: {
    images: ['/og/sfgeo-og-card.jpg'],
    title: "Geotechnical Investigations Sydney | DA & Footing Reports | SFGEO",
    description: "Principal-led geotechnical investigations for Sydney DAs, footings, basements and retaining structures. Fixed-fee quotes, reports certifiers accept.",
    url: '/geotechnical-investigations',
  },
  twitter: {
    card: "summary_large_image",
    images: ['/og/sfgeo-og-card.jpg'],
    title: "Geotechnical Investigations Sydney | DA & Footing Reports | SFGEO",
    description: "Principal-led geotechnical investigations for Sydney DAs, footings, basements and retaining structures. Fixed-fee quotes, reports certifiers accept.",
  },
};

export default function GeotechnicalInvestigationsPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": { "@id": "https://sfgeo.com.au/", "name": "Home" }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": { "@id": "https://sfgeo.com.au/geotechnical-investigations", "name": "Geotechnical Investigations" }
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Geotechnical Investigation",
    "serviceType": "Geotechnical Investigation",
    "description": "Geotechnical investigations and reports for Sydney development applications, complying development, footing and basement design, and retaining structures. Borehole drilling, DCP testing and NATA lab-backed reporting, led by the Principal Engineer.",
    "url": "https://sfgeo.com.au/geotechnical-investigations",
    "provider": { "@id": "https://sfgeo.com.au/#organization" },
    "areaServed": { "@type": "City", "name": "Sydney, New South Wales, Australia" }
  };

  const scopes = [
    {
      title: "DA & CDC reports",
      desc: "Geotechnical reports written to answer the questions your council, certifier or structural engineer will actually ask — prepared with the approval pathway in mind from the first borehole."
    },
    {
      title: "Footing & slab design input",
      desc: "Investigation depths, bearing parameters and founding recommendations your structural engineer can design from directly, without a second round of questions."
    },
    {
      title: "Basements, excavations & retaining",
      desc: "Subsurface profiles, groundwater observations and lateral parameters for basements, cut batters and retaining structures on Sydney's stepped and sloping blocks."
    },
    {
      title: "Drilling, DCP & lab testing",
      desc: "Borehole drilling with our 4WD-mounted rig and motorised hand augers for tight access, dynamic cone penetrometer testing, and NATA-accredited laboratory testing where the design calls for it."
    },
  ];

  return (
    <div className="bg-white text-slate-950 font-inter selection:bg-forest-green selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-12">
          <FadeIn className="flex-1 max-w-3xl">
            <p className="text-sm uppercase tracking-[0.2em] text-forest-green mb-6 font-semibold">
              Principal-led &middot; Independent &middot; Sydney based
            </p>
            <h1 className="text-4xl sm:text-6xl font-montserrat font-light tracking-tight leading-[1.1] mb-8">
              Geotechnical Investigations <br />
              <span className="font-semibold">Engineered Properly.</span>
            </h1>
            <div className="w-[96px] h-[3px] bg-forest-green mb-8" />
            <p className="text-lg sm:text-xl text-gray-600 font-light leading-relaxed mb-8">
              Boreholes, penetrometers and NATA-backed laboratory data, turned into reports your certifier, council and structural engineer can act on — for DAs, complying development, footings, basements and retaining structures across Sydney. The engineer who drills your ground is the engineer who signs your report.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Link
                href="tel:+61423483555"
                className="flex items-center justify-center px-8 py-2.5 bg-gradient-to-b from-[#346b43] to-forest-green text-white rounded-full shadow-[0_8px_20px_-6px_rgba(45,90,58,0.4)] hover:shadow-[0_12px_24px_-8px_rgba(45,90,58,0.6)] hover:brightness-105 transition-all hover:-translate-y-0.5 w-full sm:w-auto h-[46px] text-xs font-semibold tracking-wide"
              >
                Call the Principal Engineer
              </Link>
              <Link
                href="/faq"
                className="flex items-center justify-center px-8 py-2.5 bg-white text-forest-green rounded-full shadow-[inset_0_0_0_1px_rgba(45,90,58,0.25),0_4px_10px_-4px_rgba(0,0,0,0.05)] hover:bg-forest-green/5 hover:shadow-[inset_0_0_0_1px_rgba(45,90,58,0.4),0_6px_14px_-4px_rgba(0,0,0,0.1)] transition-all hover:-translate-y-0.5 w-full sm:w-auto h-[46px] text-xs font-semibold tracking-wide"
              >
                Read our FAQ
              </Link>
            </div>
          </FadeIn>
          <FadeIn delay={0.2} className="w-full lg:w-auto shrink-0 flex justify-center">
            <QuickQuoteCard source="geotechnical-investigations page" />
          </FadeIn>
        </div>
      </section>

      {/* What the investigation covers */}
      <section className="py-16 px-6 lg:px-12 max-w-7xl mx-auto border-t border-gray-100">
        <FadeIn className="mb-12">
          <h2 className="text-3xl font-light tracking-tight font-montserrat text-slate-950">
            What your investigation covers
          </h2>
          <div className="mt-6 h-px bg-forest-green w-12" />
        </FadeIn>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {scopes.map((scope, idx) => (
            <FadeInChild key={idx} className="p-8 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-medium text-slate-950 mb-4">{scope.title}</h3>
              <p className="text-gray-600 font-light leading-relaxed">{scope.desc}</p>
            </FadeInChild>
          ))}
        </StaggerContainer>
      </section>

      {/* Fieldwork imagery band */}
      <section className="py-16 px-6 lg:px-12 max-w-7xl mx-auto border-t border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16 items-center">
          <FadeIn>
            <h2 className="text-3xl font-light tracking-tight font-montserrat text-slate-950 mb-6">
              Fieldwork, done by <br className="hidden lg:inline" />the engineer
            </h2>
            <div className="h-px bg-forest-green w-12 mb-8" />
            <p className="text-lg text-gray-600 font-light leading-relaxed">
              No subcontracted drill crews, no drive-by inspections. The Principal Engineer operates the rig, logs the profile as it comes out of the ground, and cross-checks it with in-situ testing on the spot — so by the time the report is written, the ground has already been read twice.
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-[0_20px_50px_-20px_rgba(5,10,7,0.35)]">
                <Image
                  src="/sfgeo-gi-rig-golden-coogee.jpg"
                  alt="Drill rig in golden morning light above a steep Coogee allotment"
                  fill
                  sizes="(max-width: 1024px) 50vw, 30vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-[0_20px_50px_-20px_rgba(5,10,7,0.35)] lg:mt-10">
                <Image
                  src="/sfgeo-gi-core-measure-auburn.jpg"
                  alt="Concrete core stack being measured during an Auburn investigation"
                  fill
                  sizes="(max-width: 1024px) 50vw, 30vw"
                  className="object-cover"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Why it matters — loss framing, premium voice */}
      <section className="py-16 px-6 lg:px-12 max-w-4xl mx-auto border-t border-gray-100">
        <FadeIn>
          <h2 className="text-3xl font-light tracking-tight font-montserrat text-slate-950 mb-6">
            Ground conditions found late cost the most
          </h2>
          <p className="text-lg text-gray-600 font-light leading-relaxed">
            <span className="block">Unexpected rock, fill, or reactive clay discovered after contracts are signed becomes a variation — priced by whoever holds the leverage at that moment. An investigation done properly, and done early, converts those unknowns into design parameters while every option is still open and competitively priced.</span>
            <span className="block mt-6">Turnaround is scoped at first contact, and urgent DA, CC and settlement timelines can be accommodated — call the Principal directly to arrange priority scheduling.</span>
          </p>
        </FadeIn>
      </section>

      {/* Access capability */}
      <section className="py-16 px-6 lg:px-12 max-w-4xl mx-auto border-t border-gray-100">
        <FadeIn>
          <h2 className="text-3xl font-light tracking-tight font-montserrat text-slate-950 mb-6">
            Sites other rigs cannot reach
          </h2>
          <p className="text-lg text-gray-600 font-light leading-relaxed">
            Inner West terraces, Eastern Suburbs battleaxe blocks, rear-yard granny flat positions, stepped blocks with deep investigation points. SFGEO operates a 4WD-mounted rig for sites where standard rigs stop at the kerb, with motorised hand augers covering zero-clearance and internal courtyard work. <Link href="/drilling" className="text-forest-green hover:underline font-medium">Full access capability.</Link>
          </p>
        </FadeIn>
      </section>

      {/* Reviews */}
      <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto border-t border-gray-100">
        <GoogleReviews />
      </section>

      {/* Close CTA */}
      <section className="mt-16 py-24 px-6 lg:px-12 bg-[#050A07] text-white rounded-t-[3rem] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(45,90,58,0.15),transparent)] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <FadeIn>
            <h2 className="text-4xl sm:text-6xl font-montserrat font-light tracking-tight mb-8">
              Start with the <span className="font-semibold">ground.</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 font-light leading-relaxed max-w-2xl mx-auto mb-12">
              Every SFGEO engagement begins with the Principal Engineer on your ground, reading your plans and your soil. Detailed answers to common questions are on <Link href="/faq" className="text-white underline hover:text-white/80 transition-colors">the full FAQ</Link>.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href="/contact"
                className="flex items-center justify-center px-8 py-2.5 bg-gradient-to-b from-[#346b43] to-forest-green text-white rounded-full shadow-[0_8px_20px_-6px_rgba(45,90,58,0.4)] hover:shadow-[0_12px_24px_-8px_rgba(45,90,58,0.6)] hover:brightness-105 transition-all hover:-translate-y-0.5 w-full sm:w-[280px] h-[46px] text-xs font-semibold tracking-wide"
              >
                Book a site meeting
              </Link>
              <Link
                href="tel:+61423483555"
                className="flex items-center justify-center px-8 py-2.5 bg-white text-forest-green rounded-full shadow-[inset_0_0_0_1px_rgba(45,90,58,0.25),0_4px_10px_-4px_rgba(0,0,0,0.05)] hover:bg-forest-green/5 hover:shadow-[inset_0_0_0_1px_rgba(45,90,58,0.4),0_6px_14px_-4px_rgba(0,0,0,0.1)] transition-all hover:-translate-y-0.5 w-full sm:w-[280px] h-[46px] text-xs font-semibold tracking-wide"
              >
                Discuss your project
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
