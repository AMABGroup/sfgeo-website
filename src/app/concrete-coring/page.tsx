import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "../site-classification/MotionWrapper";

export const metadata: Metadata = {
  title: "Concrete Coring Sydney | Engineer-Supervised | SFGEO",
  description: "Engineer-supervised concrete coring across Sydney — slabs, pavements and penetrations, with core logging and strength context a cutting contractor can't give you. Fixed-fee quotes.",
  alternates: { canonical: '/concrete-coring' },
  openGraph: {
    images: ['/og/sfgeo-og-card.jpg'],
    title: "Concrete Coring Sydney | Engineer-Supervised | SFGEO",
    description: "Slabs, pavements and penetrations — cored under engineering supervision, with logging and strength context.",
    url: '/concrete-coring',
  },
  twitter: {
    card: "summary_large_image",
    images: ['/og/sfgeo-og-card.jpg'],
    title: "Concrete Coring Sydney | SFGEO",
    description: "Engineer-supervised concrete coring — slabs, pavements, penetrations.",
  },
};

export default function ConcreteCoringPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "item": { "@id": "https://sfgeo.com.au/", "name": "Home" } },
      { "@type": "ListItem", "position": 2, "item": { "@id": "https://sfgeo.com.au/other-services", "name": "Other Services" } },
      { "@type": "ListItem", "position": 3, "item": { "@id": "https://sfgeo.com.au/concrete-coring", "name": "Concrete Coring" } }
    ]
  };
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Concrete Coring",
    "serviceType": "Concrete coring and core sampling",
    "description": "Engineer-supervised concrete coring for slabs, pavements and penetrations across Sydney, with core logging, thickness verification and strength-testing pathways through NATA-accredited laboratories.",
    "url": "https://sfgeo.com.au/concrete-coring",
    "provider": { "@id": "https://sfgeo.com.au/#organization" },
    "areaServed": { "@type": "City", "name": "Sydney, New South Wales, Australia" }
  };

  const USES = [
    { t: "Slab Verification", d: "Thickness, reinforcement cover and condition — cored, logged and photographed, with strength testing through a NATA-accredited laboratory when the question needs a number." },
    { t: "Pavement Investigation", d: "Core through the pavement and keep going — the same visit can log the layers above and the subgrade below, one report instead of two contractors." },
    { t: "Penetrations & Services", d: "Clean, located penetrations through slabs and walls for services — positioned with the structure in mind, not just the drawing." },
    { t: "Investigation Access", d: "Coring through existing slabs so a geotechnical investigation can reach the ground beneath a building that was never meant to be drilled." },
  ];

  return (
    <div className="bg-white text-slate-950 font-inter selection:bg-forest-green selection:text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 lg:px-12 max-w-7xl mx-auto">
        <FadeIn className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.2em] text-forest-green mb-6 font-semibold">
            Concrete Coring &middot; Engineer-Supervised &middot; Sydney
          </p>
          <h1 className="text-4xl sm:text-6xl font-montserrat font-light tracking-tight leading-[1.1] mb-8">
            Concrete Coring, <br />
            <span className="font-semibold">With The Engineering Attached.</span>
          </h1>
          <div className="w-[96px] h-[3px] bg-forest-green mb-8" />
          <p className="text-lg sm:text-xl text-gray-600 font-light leading-relaxed mb-8">
            Any cutting contractor can put a hole in a slab. SFGEO cores it under engineering supervision — the core is logged, the thickness verified, and when strength matters the sample goes to a NATA-accredited laboratory. One engagement, from the hole to the answer.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <Link
              href="/contact"
              className="flex items-center justify-center px-8 py-2.5 bg-gradient-to-b from-[#346b43] to-forest-green text-white rounded-full shadow-[0_8px_20px_-6px_rgba(45,90,58,0.4)] hover:shadow-[0_12px_24px_-8px_rgba(45,90,58,0.6)] hover:brightness-105 transition-all hover:-translate-y-0.5 w-full sm:w-auto h-[46px] text-xs font-semibold tracking-wide"
            >
              Request A Fixed-Fee Quote
            </Link>
            <Link
              href="tel:+61423483555"
              className="flex items-center justify-center px-8 py-2.5 bg-white text-forest-green rounded-full shadow-[inset_0_0_0_1px_rgba(45,90,58,0.25),0_4px_10px_-4px_rgba(0,0,0,0.05)] hover:bg-forest-green/5 hover:shadow-[inset_0_0_0_1px_rgba(45,90,58,0.4),0_6px_14px_-4px_rgba(0,0,0,0.1)] transition-all hover:-translate-y-0.5 w-full sm:w-auto h-[46px] text-xs font-semibold tracking-wide"
            >
              Call 0423 483 555
            </Link>
          </div>
        </FadeIn>
      </section>

      {/* What we core */}
      <section className="py-16 px-6 lg:px-12 max-w-7xl mx-auto border-t border-gray-100">
        <FadeIn className="mb-12">
          <h2 className="text-3xl font-light tracking-tight font-montserrat text-slate-950">
            What We <span className="font-semibold">Core</span>
          </h2>
          <div className="mt-6 h-px bg-forest-green w-12" />
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {USES.map((u) => (
            <FadeIn key={u.t}>
              <div className="p-8 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow h-full">
                <h3 className="text-lg font-montserrat font-semibold text-slate-950 mb-3">{u.t}</h3>
                <p className="text-gray-600 font-light leading-relaxed text-[15px]">{u.d}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Why engineer-supervised */}
      <section className="py-16 px-6 lg:px-12 max-w-4xl mx-auto border-t border-gray-100">
        <FadeIn>
          <h2 className="text-3xl font-light tracking-tight font-montserrat text-slate-950 mb-6">
            Why The Engineer <span className="font-semibold">Matters</span>
          </h2>
          <p className="text-lg text-gray-600 font-light leading-relaxed">
            A core is evidence. Where it was taken, what the layers show, whether the surprise in the barrel changes the design question — those calls are engineering, not cutting. SFGEO positions each core deliberately, records what comes out, and puts the result in context, so the hole you pay for answers the question you actually have. Fixed fees, quoted in writing before the barrel touches concrete.
          </p>
        </FadeIn>
      </section>

      {/* Close CTA */}
      <section className="mt-16 py-24 px-6 lg:px-12 bg-[#050A07] text-white rounded-t-[3rem] relative overflow-hidden grain">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(45,90,58,0.15),transparent)] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <FadeIn>
            <h2 className="text-4xl sm:text-6xl font-montserrat font-light tracking-tight mb-8">
              One Hole. <span className="font-semibold">The Whole Answer.</span>
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/contact" className="flex items-center justify-center px-8 py-2.5 bg-gradient-to-b from-[#346b43] to-forest-green text-white rounded-full shadow-[0_8px_20px_-6px_rgba(45,90,58,0.4)] hover:shadow-[0_12px_24px_-8px_rgba(45,90,58,0.6)] hover:brightness-105 transition-all hover:-translate-y-0.5 w-full sm:w-[280px] h-[46px] text-xs font-semibold tracking-wide">
                Request A Quote
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
