import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import QuoteCta from "@/components/forms/QuoteCta";
import LazyVideo from "@/components/ui/LazyVideo";
import Reveal from "@/components/ui/Reveal";
import PhotoFrame from "@/components/ui/PhotoFrame";
import SectionNav from "@/components/ui/SectionNav";
import CloseBand from "@/components/ui/CloseBand";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta(
  "Concrete Coring Sydney | Engineer-Supervised | SFGEO",
  "Engineer-supervised concrete coring across Sydney — slabs, pavements and penetrations, with core logging and strength context. From $120 + GST per hole, min. 3.",
  "/concrete-coring",
);

const d = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

const SECTIONS = [
  {
    n: "01",
    id: "slab-verification",
    kicker: "01 · Slab Verification",
    titleLight: "Slab",
    titleBold: "Verification.",
    caption: "01 · Slab Verification",
    image: null,
    video: "/sfgeo-concrete-core-extracted.mp4",
    poster: "/sfgeo-concrete-core-extracted.jpg",
    alt: "The extracted concrete core lying beside the cored hole, aggregate showing in the core face",
    body: "Thickness, reinforcement cover and condition — cored, logged and photographed, with strength testing through a NATA-accredited laboratory when the question needs a number. The core comes out as evidence, not just a hole in the floor.",
    cta: "Verify A Slab",
  },
  {
    n: "02",
    id: "pavement-investigation",
    kicker: "02 · Pavement Investigation",
    titleLight: "Pavement",
    titleBold: "Investigation.",
    caption: "02 · Pavement Investigation",
    image: "/sfgeo-concrete-core-thickness-tape.jpg",
    alt: "Extracted concrete core measured against a tape on site",
    body: "Core through the pavement and keep going — the same visit logs the concrete, the layers beneath it and the subgrade below, so you get one report instead of two contractors. Where the pavement question is really a ground question, the geotechnical crew is already standing on it.",
    cta: "Scope A Pavement Program",
  },
  {
    n: "03",
    id: "penetrations",
    kicker: "03 · Penetrations & Services",
    titleLight: "Penetrations",
    titleBold: "& Services.",
    caption: "03 · Penetrations & Services",
    image: "/sfgeo-concrete-coring-rig-wet-slab.jpg",
    alt: "Coring rig cutting a clean penetration through a concrete slab",
    body: "Clean, located penetrations through slabs and walls for services — positioned with the structure in mind, not just the drawing. Reinforcement is considered before the barrel spins, so the hole lands where it should and nothing load-bearing pays for it.",
    cta: "Book Penetrations",
  },
  {
    n: "04",
    id: "investigation-access",
    kicker: "04 · Investigation Access",
    titleLight: "Investigation",
    titleBold: "Access.",
    caption: "04 · Investigation Access",
    image: "/sfgeo-concrete-core-hole-depth-check.jpg",
    alt: "Tape measure checking depth down a cored hole through a slab",
    body: "Coring through existing slabs so a geotechnical investigation can reach the ground beneath a building that was never meant to be drilled — warehouses, factory floors, basements. One crew cores the concrete and drills the ground under it in the same mobilisation.",
    cta: "Open Up An Investigation",
  },
];

const NAV = [
  { id: "slab-verification", label: "Slab Verification" },
  { id: "pavement-investigation", label: "Pavement Investigation" },
  { id: "penetrations", label: "Penetrations & Services" },
  { id: "investigation-access", label: "Investigation Access" },
  { id: "commercial-industrial", label: "Commercial & Industrial" },
  { id: "pricing", label: "Pricing" },
];

export default function ConcreteCoringPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "item": { "@id": "https://sfgeo.com.au/", "name": "Home" } },
      { "@type": "ListItem", "position": 2, "item": { "@id": "https://sfgeo.com.au/concrete-coring", "name": "Concrete Coring" } }
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
    "areaServed": { "@type": "City", "name": "Sydney, New South Wales, Australia" },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "AUD",
      "lowPrice": "120.00",
      "description": "From $120 + GST per hole, three-hole minimum per visit. Final fee depends on core size, location, access and time on site."
    }
  };

  return (
    <div className="bg-white text-slate-950 font-inter selection:bg-forest-green selection:text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      {/* Hero */}
      <section className="pt-36 pb-20 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <p className="hero-line text-sm uppercase tracking-[0.2em] text-forest-green mb-6 font-semibold">
            Concrete Coring &middot; Engineer&#8209;Supervised &middot; Sydney
          </p>
          <h1 className="text-[min(2.25rem,7.4vw)] sm:text-6xl font-montserrat font-light tracking-tight leading-[1.08] mb-8">
            <span className="hero-mask"><span className="mask-line mask-d1"><span>Concrete Coring.</span></span></span>
            <span className="hero-mask"><span className="mask-line mask-d2"><span className="font-semibold h-bold">Engineering Attached.</span></span></span>
          </h1>
          <div className="hero-line hero-d2 w-[96px] h-[3px] bg-forest-green mb-8" />
          <p className="hero-line hero-d2 text-lg sm:text-xl text-gray-600 font-light leading-relaxed mb-10">
            Any cutting contractor can put a hole in a slab. SFGEO cores it under engineering supervision — the core is logged, the thickness verified, and when strength matters the sample goes to a NATA-accredited laboratory. One engagement, from the hole to the answer. Coring from $120 + GST per hole, three-hole minimum.
          </p>
          <div className="hero-line hero-d3 flex flex-col sm:flex-row items-start gap-4">
            <QuoteCta
              source="concrete-coring hero"
              label="Request A Fixed-Fee Quote"
              className="flex items-center justify-center px-8 py-2.5 bg-gradient-to-b from-[#346b43] to-forest-green text-white rounded-full shadow-[0_8px_20px_-6px_rgba(45,90,58,0.4)] hover:shadow-[0_12px_24px_-8px_rgba(45,90,58,0.6)] hover:brightness-105 transition-all hover:-translate-y-0.5 w-full sm:w-auto h-[46px] text-xs font-semibold tracking-wide"
            />
            <Link
              href="tel:+61423483555"
              className="flex items-center justify-center px-8 py-2.5 bg-white text-forest-green rounded-full shadow-[inset_0_0_0_1px_rgba(45,90,58,0.25),0_4px_10px_-4px_rgba(0,0,0,0.05)] hover:bg-forest-green/5 hover:shadow-[inset_0_0_0_1px_rgba(45,90,58,0.4),0_6px_14px_-4px_rgba(0,0,0,0.1)] transition-all hover:-translate-y-0.5 w-full sm:w-auto h-[46px] text-xs font-semibold tracking-wide"
            >
              Call 0423 483 555
            </Link>
          </div>
        </div>
      </section>

      <SectionNav items={NAV} />

      {/* What we core — numbered editorial rows */}
      {SECTIONS.map((sec, idx) => (
        <section key={sec.id} id={sec.id} className="py-20 lg:py-24 px-6 lg:px-12 max-w-7xl mx-auto border-t border-gray-100 scroll-mt-[136px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {sec.video ? (
              <Reveal variant="group" className={idx % 2 === 1 ? "lg:order-2" : ""}>
                <div data-fx="scale" className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_26px_60px_-26px_rgba(5,10,7,0.4)] bg-[#050A07] flex items-center justify-center">
                  {/* the poster frame, scaled up and blurred, so the portrait clip
                      sits on its own ground instead of two black bars */}
                  <Image src={sec.poster!} alt="" fill sizes="(max-width:1024px) 100vw, 50vw" priority className="object-cover blur-2xl scale-110 opacity-60" />
                  <div className="absolute inset-0 bg-[#050A07]/35" />
                  <LazyVideo
                    src={sec.video}
                    poster={sec.poster!}
                    label={sec.alt}
                    className="relative h-full w-auto max-w-full object-contain"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#050A07]/70 to-transparent pointer-events-none" />
                  <p className="absolute bottom-5 left-6 text-[11px] uppercase tracking-[0.25em] text-white/80 font-semibold pointer-events-none">{sec.caption}</p>
                </div>
              </Reveal>
            ) : (
              <PhotoFrame
                src={sec.image!}
                alt={sec.alt}
                caption={sec.caption}
                aspect="aspect-[4/3]"
                sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 50vw, 600px"
                wrapperClassName={idx % 2 === 1 ? "lg:order-2" : ""}
              />
            )}
            <Reveal variant="group">
              <p data-fx="rise" className="text-sm uppercase tracking-[0.2em] text-forest-green mb-4 font-semibold">{sec.kicker}</p>
              <h2 data-fx="rise" style={d(80)} className="text-3xl sm:text-4xl font-montserrat font-light tracking-tight text-slate-950 mb-5">
                {sec.titleLight} <span className="font-semibold h-bold">{sec.titleBold}</span>
              </h2>
              <div data-fx="line" style={d(200)} className="h-px bg-forest-green w-12 mb-7" />
              <p data-fx="rise" style={d(160)} className="text-gray-600 font-light leading-relaxed mb-8">{sec.body}</p>
              <div data-fx="rise" style={d(220)}>
                <QuoteCta source={`concrete-coring ${sec.id}`} label={sec.cta} className="text-sm font-semibold tracking-wide text-forest-green group inline-flex items-center gap-2 draw-link" />
              </div>
            </Reveal>
          </div>
        </section>
      ))}

      {/* Commercial hardstands — the second clip */}
      <section id="commercial-industrial" className="py-20 lg:py-24 px-6 lg:px-12 max-w-7xl mx-auto border-t border-gray-100 scroll-mt-[136px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <Reveal variant="group">
            <div data-fx="scale" className="relative mx-auto w-full max-w-[340px] aspect-[448/804] rounded-2xl overflow-hidden shadow-[0_26px_60px_-26px_rgba(5,10,7,0.5)]">
              <LazyVideo
                src="/sfgeo-concrete-coring-rig-hardstand.mp4"
                poster="/sfgeo-concrete-coring-rig-hardstand.jpg"
                label="Wet coring rig cutting a core through a container terminal hardstand"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <p className="absolute bottom-5 left-6 text-[11px] uppercase tracking-[0.25em] text-white/80 font-semibold pointer-events-none">Hardstand &middot; Container Terminal</p>
            </div>
          </Reveal>
          <Reveal variant="group">
            <p data-fx="rise" className="text-sm uppercase tracking-[0.2em] text-forest-green mb-4 font-semibold">Commercial &amp; Industrial</p>
            <h2 data-fx="rise" style={d(80)} className="text-3xl sm:text-4xl font-montserrat font-light tracking-tight text-slate-950 mb-5">
              Not Just <span className="font-semibold h-bold">Domestic Slabs.</span>
            </h2>
            <div data-fx="line" style={d(200)} className="h-px bg-forest-green w-12 mb-7" />
            <p data-fx="rise" style={d(160)} className="text-gray-600 font-light leading-relaxed">
              Hardstands, port and terminal pavements, warehouse floors and industrial yards &mdash; heavily loaded surfaces where the question is what the pavement is actually made of and whether it will keep taking the load. Wet coring, services marked before the barrel turns, holes reinstated, and the core logged rather than left on the ground.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Why engineer-supervised */}
      <section className="py-20 lg:py-24 px-6 lg:px-12 max-w-7xl mx-auto border-t border-gray-100">
        <Reveal variant="group" className="max-w-3xl">
          <p data-fx="rise" className="text-sm uppercase tracking-[0.2em] text-forest-green mb-4 font-semibold">Why The Engineer Matters</p>
          <h2 data-fx="rise" style={d(80)} className="text-3xl sm:text-4xl font-montserrat font-light tracking-tight text-slate-950 mb-5">
            A Core Is <span className="font-semibold h-bold">Evidence.</span>
          </h2>
          <div data-fx="line" style={d(200)} className="h-px bg-forest-green w-12 mb-7" />
          <p data-fx="rise" style={d(160)} className="text-gray-600 font-light leading-relaxed">
            Where it was taken, what the layers show, whether the surprise in the barrel changes the design question — those calls are engineering, not cutting. SFGEO positions each core deliberately, records what comes out, and puts the result in context, so the hole you pay for answers the question you actually have.
          </p>
        </Reveal>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 lg:py-24 px-6 lg:px-12 max-w-7xl mx-auto border-t border-gray-100 scroll-mt-[136px]">
        <Reveal variant="group" className="max-w-3xl">
          <p data-fx="rise" className="text-sm uppercase tracking-[0.2em] text-forest-green mb-4 font-semibold">Pricing</p>
          <h2 data-fx="rise" style={d(80)} className="text-3xl sm:text-4xl font-montserrat font-light tracking-tight text-slate-950 mb-5">
            From $120 + GST <span className="font-semibold h-bold">Per Hole.</span>
          </h2>
          <div data-fx="line" style={d(200)} className="h-px bg-forest-green w-12 mb-7" />
          <p data-fx="rise" style={d(160)} className="text-gray-600 font-light leading-relaxed">
            Three-hole minimum per visit. The final fee depends on core size, location, access and time on site — quoted fixed, in writing, before the barrel touches concrete.
          </p>
        </Reveal>
      </section>

      <CloseBand
        source="concrete-coring close"
        heading={<>One Hole. <span className="font-semibold h-bold">The Whole Answer.</span></>}
        sub="Tell us what the slab is hiding — or what you need to put through it. Fixed fee in writing within one business day."
      />
    </div>
  );
}
