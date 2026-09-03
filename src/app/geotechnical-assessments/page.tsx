import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import QuoteCta from "@/components/forms/QuoteCta";
import { FadeIn } from "../site-classification/MotionWrapper";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta(
  "Geotechnical Assessments Sydney | Slope & Settlement | SFGEO",
  "Slope stability and retaining assessments, settlement and cracking investigations, compliance records and second opinions across Sydney — answered in writing.",
  "/geotechnical-assessments",
);

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
    "description": "Slope stability and retaining assessments, settlement and cracking investigations, compliance records and second opinions across Sydney — answered in writing.",
    "url": "https://sfgeo.com.au/geotechnical-assessments",
    "provider": { "@id": "https://sfgeo.com.au/#organization" },
    "areaServed": { "@type": "City", "name": "Sydney, New South Wales, Australia" }
  };

  return (
    <div className="bg-white text-slate-950 font-inter selection:bg-forest-green selection:text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <section className="pt-36 pb-20 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <p className="hero-line text-sm uppercase tracking-[0.2em] text-forest-green mb-6 font-semibold">Geotechnical Assessments &middot; Principal-Led</p>
          <h1 className="hero-line hero-d1 text-[min(2.25rem,8.2vw)] sm:text-6xl font-montserrat font-light tracking-tight leading-[1.08] mb-8">
            Geotechnical Assessments. <span className="font-semibold h-bold">The Specific Question, Answered.</span>
          </h1>
          <div className="hero-line hero-d2 w-[96px] h-[3px] bg-forest-green mb-8" />
          <p className="hero-line hero-d2 text-lg sm:text-xl text-gray-600 font-light leading-relaxed">Not every job is a full investigation. Sometimes there is one question — is this slope stable, why is this wall cracking, will council accept this — and it needs an engineering answer in writing. That is an assessment.</p>
          <div className="hero-line hero-d3 mt-10 flex flex-col sm:flex-row items-start gap-4">
            <Link
              href="tel:+61423483555"
              className="flex items-center justify-center px-8 py-2.5 bg-gradient-to-b from-[#346b43] to-forest-green text-white rounded-full shadow-[0_8px_20px_-6px_rgba(45,90,58,0.4)] hover:shadow-[0_12px_24px_-8px_rgba(45,90,58,0.6)] hover:brightness-105 transition-all hover:-translate-y-0.5 w-full sm:w-auto h-[46px] text-xs font-semibold tracking-wide"
            >
              Call 0423 483 555
            </Link>
            <QuoteCta
              source="geotechnical-assessments hero"
              label="Scope An Assessment"
              eyebrow="Geotechnical assessment"
              heading="Scope An Assessment"
              subheading="Tell us the question — the slope, the crack, the council condition. A fixed fee in writing within one business day."
              className="flex items-center justify-center px-8 py-2.5 bg-white text-forest-green rounded-full shadow-[inset_0_0_0_1px_rgba(45,90,58,0.25),0_4px_10px_-4px_rgba(0,0,0,0.05)] hover:bg-forest-green/5 hover:shadow-[inset_0_0_0_1px_rgba(45,90,58,0.4),0_6px_14px_-4px_rgba(0,0,0,0.1)] transition-all hover:-translate-y-0.5 w-full sm:w-auto h-[46px] text-xs font-semibold tracking-wide"
            />
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 px-6 lg:px-12 max-w-7xl mx-auto border-t border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <FadeIn>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_26px_60px_-26px_rgba(5,10,7,0.4)]">
              <Image src="/sfgeo-retaining-wall-assessment-face.jpg" alt="Undermined retaining wall face exposed during a geotechnical assessment" fill sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 50vw, 600px" priority className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050A07]/80 via-[#050A07]/25 to-transparent" />
              <p className="absolute bottom-5 left-6 text-[11px] uppercase tracking-[0.25em] text-white font-semibold">Retaining Wall &middot; Assessed</p>
            </div>
          </FadeIn>
          <FadeIn delay={0.12}>
            <p className="text-sm uppercase tracking-[0.2em] text-forest-green mb-4 font-semibold">01 &middot; The Approach</p>
            <h2 className="text-3xl sm:text-4xl font-montserrat font-light tracking-tight text-slate-950 mb-5">Scoped To The Question, <span className="font-semibold h-bold">Not The Template.</span></h2>
            <div className="h-px bg-forest-green w-12 mb-7" />
            <p className="text-gray-600 font-light leading-relaxed">The Principal reads the site, the structure and the history, does exactly the fieldwork the question requires — sometimes none, sometimes a day — and answers it in a signed engineering document your certifier, council, insurer or buyer can act on.</p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 lg:py-24 px-6 lg:px-12 max-w-7xl mx-auto border-t border-gray-100">
        <FadeIn className="mb-12">
          <p className="text-sm uppercase tracking-[0.2em] text-forest-green mb-4 font-semibold">02 &middot; Scope</p>
          <h2 className="text-3xl sm:text-4xl font-montserrat font-light tracking-tight text-slate-950">Slope Stability, Settlement &amp; Council Orders. <span className="font-semibold h-bold">Questions We Answer.</span></h2>
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

      {/* What you get */}
      <section className="py-20 lg:py-24 px-6 lg:px-12 max-w-7xl mx-auto border-t border-gray-100">
        <FadeIn>
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.2em] text-forest-green mb-4 font-semibold">03 &middot; What You Get</p>
            <h2 className="text-3xl sm:text-4xl font-montserrat font-light tracking-tight text-slate-950 mb-5">An Answer You Can <span className="font-semibold h-bold">Act On.</span></h2>
            <div className="h-px bg-forest-green w-12 mb-7" />
            <p className="text-gray-600 font-light leading-relaxed">
              Every assessment ends in a signed engineering document scoped to its purpose — a letter for a certifier or council order, a report for a settlement investigation, an opinion you can put in front of a lawyer or insurer. It states what was observed, what it means, and what to do next. Where the question needs boreholes, it becomes a <Link href="/geotechnical-investigations" className="text-forest-green hover:underline font-medium">geotechnical investigation</Link>; where it needs a record at footing level, <Link href="/construction-phase-support" className="text-forest-green hover:underline font-medium">construction phase support</Link> — and we say which before the fee does.
            </p>
          </div>
        </FadeIn>
      </section>

      <section className="relative overflow-hidden bg-[#050A07] text-white grain">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(45,90,58,0.3),transparent_60%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center px-6 py-28 lg:py-32 relative z-10">
          <FadeIn>
            <h2 className="text-4xl sm:text-6xl font-montserrat font-light tracking-tight mb-8">One Question? <span className="font-semibold h-bold">Ask It.</span></h2>
            <p className="text-lg sm:text-xl text-gray-400 font-light leading-relaxed max-w-2xl mx-auto mb-12">
              Tell us the question and the address — the Principal will say what it takes to answer it in writing, within one business day.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="tel:+61423483555" className="flex items-center justify-center px-8 py-2.5 bg-gradient-to-b from-[#346b43] to-forest-green text-white rounded-full shadow-[0_8px_20px_-6px_rgba(45,90,58,0.4)] hover:brightness-105 transition-all hover:-translate-y-0.5 w-full sm:w-[280px] h-[46px] text-xs font-semibold tracking-wide">Call 0423 483 555</Link>
              <QuoteCta source="geotechnical-assessments close" className="flex items-center justify-center px-8 py-2.5 bg-white/5 text-white rounded-full shadow-[inset_0_0_0_1px_rgba(255,255,255,0.25)] hover:bg-white/10 transition-all hover:-translate-y-0.5 w-full sm:w-[280px] h-[46px] text-xs font-semibold tracking-wide backdrop-blur-sm" />
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
