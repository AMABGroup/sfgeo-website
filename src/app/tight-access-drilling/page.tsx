import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import QuoteCta from "@/components/forms/QuoteCta";
import { FadeIn } from "../site-classification/MotionWrapper";

export const metadata: Metadata = {
  title: "Tight Access Drilling Sydney | Restricted Site Specialists | SFGEO",
  description: "Tight-access geotechnical drilling across Sydney — terraces, battleaxe blocks, backyards and basements. Motorised hand augers and a 4WD rig, engineer operated, fixed-fee quotes.",
  alternates: { canonical: '/tight-access-drilling' },
  openGraph: {
    images: ['/og/sfgeo-og-card.jpg'],
    title: "Tight Access Drilling Sydney | Restricted Site Specialists | SFGEO",
    description: "Terraces, battleaxe blocks, backyards and basements — engineer-operated tight-access drilling with fixed-fee quotes.",
    url: '/tight-access-drilling',
  },
  twitter: {
    card: "summary_large_image",
    images: ['/og/sfgeo-og-card.jpg'],
    title: "Tight Access Drilling Sydney | SFGEO",
    description: "Terraces, battleaxe blocks, backyards and basements — engineer-operated tight-access drilling.",
  },
};

const SITE_TYPES = [
  { t: "Inner West Terraces", d: "Through the hallway or over the back fence — motorised hand augers reach rear yards no rig can." },
  { t: "Battleaxe Blocks", d: "Long shared driveways and landlocked building envelopes, drilled without disturbing the neighbours." },
  { t: "Rear-Yard Granny Flats", d: "Investigation points behind an occupied home, with the yard left the way we found it." },
  { t: "Basements & Under Cover", d: "Restricted-height drilling inside garages, basements and undercrofts." },
  { t: "Sloping & Stepped Sites", d: "Benched blocks and steep boundaries where a truck-mounted rig stops at the kerb." },
  { t: "Zero-Clearance Courtyards", d: "Internal courtyards and side passages down to a doorway's width." },
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
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can you drill in a backyard with no side access?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes. Motorised hand augers carry through a standard doorway or side passage, so rear yards, courtyards and granny-flat positions can be investigated without vehicle access. Where a rig is needed, our 4WD-mounted unit reaches positions conventional truck rigs cannot." }
      },
      {
        "@type": "Question",
        "name": "Does tight access change the quality of the investigation?",
        "acceptedAnswer": { "@type": "Answer", "text": "No. Hand-auger boreholes are logged to the same standard and supplemented with dynamic cone penetrometer testing, so the data is cross-checked on site regardless of how the hole was advanced." }
      },
      {
        "@type": "Question",
        "name": "How much does tight-access drilling cost in Sydney?",
        "acceptedAnswer": { "@type": "Answer", "text": "SFGEO quotes fixed fees, scoped to the block. Access is one of the drivers of a quote, so send the address and a short description and you will have a written fixed fee before any work begins." }
      }
    ]
  };

  return (
    <div className="bg-white text-slate-950 font-inter selection:bg-forest-green selection:text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-12">
          <FadeIn className="flex-1 max-w-3xl">
            <p className="text-sm uppercase tracking-[0.2em] text-forest-green mb-6 font-semibold">
              Tight Access &middot; Principal-Led &middot; Sydney
            </p>
            <h1 className="text-4xl sm:text-6xl font-montserrat font-light tracking-tight leading-[1.1] mb-8">
              Tight Access Drilling. <br />
              <span className="font-semibold">No Site Out Of Reach.</span>
            </h1>
            <div className="w-[96px] h-[3px] bg-forest-green mb-8" />
            <p className="text-lg sm:text-xl text-gray-600 font-light leading-relaxed mb-8">
              Terraces, battleaxe blocks, backyards and basements — the Sydney sites where standard rigs stop at the kerb. SFGEO investigates them with motorised hand augers and a 4WD-mounted rig, operated by the engineer who logs the ground and signs the report. Fixed fees, scoped to your block.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Link
                href="tel:+61423483555"
                className="flex items-center justify-center px-8 py-2.5 bg-gradient-to-b from-[#346b43] to-forest-green text-white rounded-full shadow-[0_8px_20px_-6px_rgba(45,90,58,0.4)] hover:shadow-[0_12px_24px_-8px_rgba(45,90,58,0.6)] hover:brightness-105 transition-all hover:-translate-y-0.5 w-full sm:w-auto h-[46px] text-xs font-semibold tracking-wide"
              >
                Discuss Your Site Access
              </Link>
              <QuoteCta source="tight-access-drilling hero" label="Quote A Tight-Access Site" className="flex items-center justify-center px-8 py-2.5 bg-white text-forest-green rounded-full shadow-[inset_0_0_0_1px_rgba(45,90,58,0.25),0_4px_10px_-4px_rgba(0,0,0,0.05)] hover:bg-forest-green/5 hover:shadow-[inset_0_0_0_1px_rgba(45,90,58,0.4),0_6px_14px_-4px_rgba(0,0,0,0.1)] transition-all hover:-translate-y-0.5 w-full sm:w-auto h-[46px] text-xs font-semibold tracking-wide" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Imagery + method */}
      <section className="py-16 px-6 lg:px-12 max-w-7xl mx-auto border-t border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16 items-center">
          <FadeIn>
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-[0_20px_50px_-20px_rgba(5,10,7,0.35)]">
                <Image src="/sfgeo-hand-auger-borehole-restricted-access-sydney-backyard.jpg" alt="Motorised hand-auger borehole in a restricted-access Sydney backyard" fill sizes="(max-width: 1024px) 50vw, 30vw" className="object-cover" />
              </div>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-[0_20px_50px_-20px_rgba(5,10,7,0.35)] lg:mt-10">
                <Image src="/sfgeo-drilling-heritage-home-inner-west-sydney.jpg" alt="Drilling beside a heritage home in Sydney's Inner West" fill sizes="(max-width: 1024px) 50vw, 30vw" className="object-cover" />
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <h2 className="text-3xl font-light tracking-tight font-montserrat text-slate-950 mb-6">
              Same Data. <span className="font-semibold">Harder Sites.</span>
            </h2>
            <div className="h-px bg-forest-green w-12 mb-8" />
            <p className="text-lg text-gray-600 font-light leading-relaxed">
              A tight site should not mean a thinner report. Hand-auger boreholes are logged to the same standard as rig holes and cross-checked with dynamic cone penetrometer testing on the spot — so your structural engineer gets the same parameters whether the hole was advanced by a rig on the street or an auger carried through the hallway.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Site types */}
      <section className="py-16 px-6 lg:px-12 max-w-7xl mx-auto border-t border-gray-100">
        <FadeIn className="mb-12">
          <h2 className="text-3xl font-light tracking-tight font-montserrat text-slate-950">
            The Sites We&rsquo;re <span className="font-semibold">Built For</span>
          </h2>
          <div className="mt-6 h-px bg-forest-green w-12" />
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SITE_TYPES.map((s) => (
            <FadeIn key={s.t}>
              <div className="p-8 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow h-full">
                <h3 className="text-lg font-montserrat font-semibold text-slate-950 mb-3">{s.t}</h3>
                <p className="text-gray-600 font-light leading-relaxed text-[15px]">{s.d}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Where we work */}
      <section className="py-16 px-6 lg:px-12 max-w-4xl mx-auto border-t border-gray-100">
        <FadeIn>
          <h2 className="text-3xl font-light tracking-tight font-montserrat text-slate-950 mb-6">
            Where The Hard Sites <span className="font-semibold">Are</span>
          </h2>
          <p className="text-lg text-gray-600 font-light leading-relaxed">
            Marrickville, Newtown, Enmore and the Inner West terraces we call home. Paddington and Surry Hills rows. Eastern Suburbs battleaxe blocks, North Shore slopes, and the granny-flat boom across Canterbury-Bankstown and the Hills. If the rig cannot reach it, the augers can — and the engineer comes with them.
          </p>
        </FadeIn>
      </section>

      {/* Close CTA */}
      <section className="mt-16 py-24 px-6 lg:px-12 bg-[#050A07] text-white rounded-t-[3rem] relative overflow-hidden grain">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(45,90,58,0.15),transparent)] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <FadeIn>
            <h2 className="text-4xl sm:text-6xl font-montserrat font-light tracking-tight mb-8">
              Hard To Reach? <span className="font-semibold">Perfect.</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 font-light leading-relaxed max-w-2xl mx-auto mb-12">
              Send the address and a photo of the access. You&rsquo;ll have a fixed fee in writing — usually within one business day.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/contact" className="flex items-center justify-center px-8 py-2.5 bg-gradient-to-b from-[#346b43] to-forest-green text-white rounded-full shadow-[0_8px_20px_-6px_rgba(45,90,58,0.4)] hover:shadow-[0_12px_24px_-8px_rgba(45,90,58,0.6)] hover:brightness-105 transition-all hover:-translate-y-0.5 w-full sm:w-[280px] h-[46px] text-xs font-semibold tracking-wide">
                Request A Fixed-Fee Quote
              </Link>
              <Link href="tel:+61423483555" className="flex items-center justify-center px-8 py-2.5 bg-white text-forest-green rounded-full shadow-[inset_0_0_0_1px_rgba(45,90,58,0.25),0_4px_10px_-4px_rgba(0,0,0,0.05)] hover:bg-forest-green/5 transition-all hover:-translate-y-0.5 w-full sm:w-[280px] h-[46px] text-xs font-semibold tracking-wide">
                Call 0423 483 555
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
