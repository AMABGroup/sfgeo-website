import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "../site-classification/MotionWrapper";

export const metadata: Metadata = {
  title: "Geotechnical Assessments Sydney | Slope Stability & Settlement | SFGEO",
  description: "Slope stability and retaining assessments, settlement and cracking investigations, compliance records and second opinions across Sydney — the specific questions answered in writing.",
  alternates: { canonical: '/geotechnical-assessments' },
  openGraph: { images: ['/og/sfgeo-og-card.jpg'], title: "Geotechnical Assessments Sydney | Slope Stability & Settlement | SFGEO", description: "Slope stability and retaining assessments, settlement and cracking investigations, compliance records and second opinions across Sydney — the specific questions answered in writing.", url: '/geotechnical-assessments' },
  twitter: { card: "summary_large_image", images: ['/og/sfgeo-og-card.jpg'], title: "Geotechnical Assessments Sydney | Slope Stability & Settlement | SFGEO", description: "Slope stability and retaining assessments, settlement and cracking investigations, compliance records and second opinions across Sydney — the specific questions answered in writing." },
};

const ITEMS = [
  { t: "Slope Stability & Retaining", d: "Batters, cuttings and retaining walls assessed — stability, surcharge and remediation options in plain terms." },
  { t: "Settlement & Cracking", d: "Why the wall cracked, whether it is moving, and what to do about it — investigation before speculation." },
  { t: "Council Orders & Compliance", d: "Engineering records written against development control orders and certifier directions." },
  { t: "Second Opinions", d: "An independent read of someone else’s report before you build, buy or litigate on it." },
  { t: "Purchase Due Diligence", d: "The ground read before you sign — fill, slopes, trees and drainage flagged while you can still walk away." },
  { t: "Pool & Excavation Feasibility", d: "What the dig will hit, what it will cost to hold up, and whether the machine can even get in." },
];

export default function Page() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "item": { "@id": "https://sfgeo.com.au/", "name": "Home" } },
      { "@type": "ListItem", "position": 2, "item": { "@id": "https://sfgeo.com.au/geotechnical", "name": "Geotechnical" } },
      { "@type": "ListItem", "position": 3, "item": { "@id": "https://sfgeo.com.au/geotechnical-assessments", "name": "Geotechnical Assessments" } }
    ]
  };
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Geotechnical Assessments",
    "serviceType": "Geotechnical and slope stability assessments",
    "description": "Slope stability and retaining assessments, settlement and cracking investigations, compliance records and second opinions across Sydney — the specific questions answered in writing.",
    "url": "https://sfgeo.com.au/geotechnical-assessments",
    "provider": { "@id": "https://sfgeo.com.au/#organization" },
    "areaServed": { "@type": "City", "name": "Sydney, New South Wales, Australia" }
  };

  return (
    <div className="bg-white text-slate-950 font-inter selection:bg-forest-green selection:text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <section className="pt-36 pb-16 px-6 lg:px-12 max-w-7xl mx-auto">
        <FadeIn className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.2em] text-forest-green mb-6 font-semibold">Geotechnical Assessments &middot; Principal-Led</p>
          <h1 className="text-4xl sm:text-6xl font-montserrat font-light tracking-tight leading-[1.08] mb-8">
            The Specific Question, <span className="font-semibold">Answered.</span>
          </h1>
          <div className="w-[96px] h-[3px] bg-forest-green mb-8" />
          <p className="text-lg sm:text-xl text-gray-600 font-light leading-relaxed">Not every job is a full investigation. Sometimes there is one question — is this slope stable, why is this wall cracking, will council accept this — and it needs an engineering answer in writing. That is an assessment.</p>
        </FadeIn>
      </section>

      <section className="py-16 px-6 lg:px-12 max-w-7xl mx-auto border-t border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <FadeIn>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_26px_60px_-26px_rgba(5,10,7,0.4)]">
              <Image src="/sfgeo-sandstone-outcrop-hunters-hill.jpg" alt="Layered sandstone outcrop above a Sydney site" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            </div>
          </FadeIn>
          <FadeIn delay={0.12}>
            <h2 className="text-3xl font-montserrat font-light tracking-tight text-slate-950 mb-5">Scoped To The Question, <span className="font-semibold">Not The Template</span></h2>
            <div className="h-px bg-forest-green w-12 mb-7" />
            <p className="text-gray-600 font-light leading-relaxed">The Principal reads the site, the structure and the history, does exactly the fieldwork the question requires — sometimes none, sometimes a day — and answers it in a signed engineering document your certifier, council, insurer or buyer can act on.</p>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 px-6 lg:px-12 max-w-7xl mx-auto border-t border-gray-100">
        <FadeIn className="mb-12">
          <h2 className="text-3xl font-montserrat font-light tracking-tight text-slate-950">Questions We <span className="font-semibold">Answer</span></h2>
          <div className="mt-6 h-px bg-forest-green w-12" />
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ITEMS.map((it) => (
            <FadeIn key={it.t}>
              <div className="p-8 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow h-full">
                <h3 className="text-lg font-montserrat font-semibold text-slate-950 mb-3">{it.t}</h3>
                <p className="text-gray-600 font-light leading-relaxed text-[15px]">{it.d}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="mt-8 relative overflow-hidden bg-[#050A07] text-white grain">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(45,90,58,0.3),transparent_60%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center px-6 py-24 relative z-10">
          <FadeIn>
            <h2 className="text-4xl sm:text-5xl font-montserrat font-light tracking-tight mb-8">One Question? <span className="font-semibold">Ask It.</span></h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="tel:+61423483555" className="flex items-center justify-center px-8 py-2.5 bg-gradient-to-b from-[#346b43] to-forest-green text-white rounded-full shadow-[0_8px_20px_-6px_rgba(45,90,58,0.4)] hover:brightness-105 transition-all hover:-translate-y-0.5 w-full sm:w-[280px] h-[46px] text-xs font-semibold tracking-wide">Call 0423 483 555</Link>
              <Link href="/contact" className="flex items-center justify-center px-8 py-2.5 bg-white/5 text-white rounded-full shadow-[inset_0_0_0_1px_rgba(255,255,255,0.25)] hover:bg-white/10 transition-all hover:-translate-y-0.5 w-full sm:w-[280px] h-[46px] text-xs font-semibold tracking-wide backdrop-blur-sm">Request A Quote</Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
