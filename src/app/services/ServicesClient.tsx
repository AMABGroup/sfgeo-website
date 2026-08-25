"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeIn, StaggerContainer, FadeInChild } from "../site-classification/MotionWrapper";

/**
 * Services hub — the index of everything SFGEO does, segmented the way the
 * business actually runs: Investigate / Support / Drill, with partner-
 * delivered services alongside. Anchors #inspections, #design and #partners
 * are preserved for existing nav and inbound links.
 */

const SEGMENTS = [
  {
    id: "investigate",
    kicker: "01 · Investigate",
    title: "Read The Ground",
    intro:
      "Before anything is designed or built — classifications and investigations that turn unknown ground into design parameters. For homeowners, architects, builders, certifiers and developers.",
    image: "/sfgeo-gi-rig-golden-coogee.jpg",
    imageAlt: "Drill rig in golden morning light above a Coogee allotment",
    links: [
      { name: "Site Classification (AS 2870)", href: "/site-classification", line: "The report your structural engineer designs from — homes, extensions, granny flats, pools." },
      { name: "Geotechnical Investigations (AS 1726)", href: "/geotechnical-investigations", line: "Boreholes, penetrometers and lab data for DAs, footings, basements and retaining structures." },
    ],
  },
  {
    id: "support",
    kicker: "02 · Support",
    title: "Keep The Build Moving",
    intro:
      "Once construction starts — verification at the moments that can't wait. For builders on open excavations and commercial contractors on programmed works.",
    image: "/sfgeo-rock-verification-marking.jpg",
    imageAlt: "Excavation level verification marked on exposed rock",
    links: [
      { name: "Construction Phase Support", href: "#inspections", line: "Footing, pier and pile inspections, proof rolls and engineered fill to AS 3798 — verified bearing, in writing, fast." },
      { name: "Geotechnical Design Parameters", href: "#design", line: "Foundation, retaining and pavement inputs for structural and civil teams." },
    ],
  },
  {
    id: "drill",
    kicker: "03 · Drill",
    title: "The Rig And The Crew",
    intro:
      "Drilling as a service — for our own investigations, and on subcontract for engineering firms, environmental consultants and major contractors, on their programs and their supervision.",
    image: "/sfgeo-drilling-verge-telopea.jpg",
    imageAlt: "SFGEO rig with mast raised on a Telopea verge",
    links: [
      { name: "Drilling Services", href: "/drilling", line: "Borehole drilling, rock coring, SPT and sampling — 4WD-mounted rig, engineer operated." },
      { name: "Tight Access Drilling", href: "/tight-access-drilling", line: "Terraces, battleaxe blocks, backyards and basements — no site out of reach." },
      { name: "Concrete Coring", href: "/concrete-coring", line: "Slabs and pavements, cored with the engineering attached." },
      { name: "Environmental Sampling", href: "/other-services", line: "PSI and DSI fieldwork support for environmental consultants." },
    ],
  },
];

export default function ServicesClient() {
  return (
    <div className="bg-white text-slate-950 font-inter selection:bg-forest-green selection:text-white">
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 lg:px-12 max-w-7xl mx-auto">
        <FadeIn className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.2em] text-forest-green mb-6 font-semibold">
            All Services &middot; Principal-Led &middot; Sydney
          </p>
          <h1 className="text-4xl sm:text-6xl font-montserrat font-light tracking-tight leading-[1.1] mb-8">
            Investigate. Support. <span className="font-semibold">Drill.</span>
          </h1>
          <div className="w-[96px] h-[3px] bg-forest-green mb-8" />
          <p className="text-lg sm:text-xl text-gray-600 font-light leading-relaxed">
            Everything SFGEO does sits in one of three segments — reading the ground before you design, verifying it while you build, and putting holes in it for whoever needs them. One team across all three, backed by a partner network for the rest.
          </p>
        </FadeIn>
      </section>

      {/* Segments */}
      {SEGMENTS.map((seg, idx) => (
        <section key={seg.id} id={seg.id} className="py-16 px-6 lg:px-12 max-w-7xl mx-auto border-t border-gray-100 scroll-mt-[100px]">
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center`}>
            <FadeIn className={idx % 2 === 1 ? "lg:order-2" : ""}>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_26px_60px_-26px_rgba(5,10,7,0.4)]">
                <Image src={seg.image} alt={seg.imageAlt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050A07]/45 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <p className="text-[11px] uppercase tracking-[0.25em] text-white/75 font-semibold">{seg.kicker}</p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.12}>
              <p className="text-sm uppercase tracking-[0.2em] text-forest-green mb-4 font-semibold">{seg.kicker}</p>
              <h2 className="text-3xl sm:text-4xl font-montserrat font-light tracking-tight text-slate-950 mb-5">
                {seg.title.split(" ").slice(0, -1).join(" ")} <span className="font-semibold">{seg.title.split(" ").slice(-1)}</span>
              </h2>
              <div className="h-px bg-forest-green w-12 mb-7" />
              <p className="text-gray-600 font-light leading-relaxed mb-8">{seg.intro}</p>
              <div className="flex flex-col divide-y divide-gray-100 border-y border-gray-100">
                {seg.links.map((l) => (
                  <Link key={l.name} href={l.href} className="group py-5 flex items-start justify-between gap-6">
                    <div>
                      <span className="font-montserrat font-semibold text-slate-950 group-hover:text-forest-green transition-colors">{l.name}</span>
                      <p className="text-sm text-gray-500 font-light mt-1.5 max-w-md">{l.line}</p>
                    </div>
                    <span className="text-forest-green opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all mt-1">&rarr;</span>
                  </Link>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>
      ))}

      {/* CPS detail — anchor preserved */}
      <section id="inspections" className="py-16 px-6 lg:px-12 max-w-4xl mx-auto border-t border-gray-100 scroll-mt-[100px]">
        <FadeIn>
          <h2 className="text-3xl font-light tracking-tight font-montserrat text-slate-950 mb-6">
            Construction Phase <span className="font-semibold">Support</span>
          </h2>
          <p className="text-lg text-gray-600 font-light leading-relaxed mb-6">
            Open trenches and idle machinery cost money. SFGEO provides rapid, practical verification across Greater Sydney — footings, piers and piles at bearing level, proof rolls, and engineered fill to AS 3798 — with the record in writing before the next pour. Single visits for local builders; standing schedule-of-rates engagements for commercial contractors.
          </p>
          <Link href="/contact" className="text-sm font-semibold tracking-wide text-forest-green group inline-flex items-center gap-2">
            <span className="draw-link">Book An Inspection</span>
            <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
          </Link>
        </FadeIn>
      </section>

      {/* Design detail — anchor preserved */}
      <section id="design" className="py-16 px-6 lg:px-12 max-w-4xl mx-auto border-t border-gray-100 scroll-mt-[100px]">
        <FadeIn>
          <h2 className="text-3xl font-light tracking-tight font-montserrat text-slate-950 mb-6">
            Geotechnical <span className="font-semibold">Design Parameters</span>
          </h2>
          <p className="text-lg text-gray-600 font-light leading-relaxed mb-6">
            We partner with structural and civil engineers, supplying the site-specific inputs their designs rely on — bearing capacities, pile design inputs, retaining wall parameters to AS 4678, and working platform assessments. We don&rsquo;t carry the structural design; we make sure the numbers under it are real.
          </p>
          <Link href="/contact" className="text-sm font-semibold tracking-wide text-forest-green group inline-flex items-center gap-2">
            <span className="draw-link">Request Design Parameters</span>
            <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
          </Link>
        </FadeIn>
      </section>

      {/* Partners — anchor preserved */}
      <section id="partners" className="py-16 px-6 lg:px-12 max-w-4xl mx-auto border-t border-gray-100 scroll-mt-[100px]">
        <FadeIn>
          <h2 className="text-3xl font-light tracking-tight font-montserrat text-slate-950 mb-6">
            Delivered With <span className="font-semibold">Partners</span>
          </h2>
          <p className="text-lg text-gray-600 font-light leading-relaxed mb-6">
            Dilapidation reports, land and detail surveys, NATA laboratory testing and specialist engineering — arranged through a network built over fifteen years, with SFGEO as your single point of contact.
          </p>
          <Link href="/other-services" className="text-sm font-semibold tracking-wide text-forest-green group inline-flex items-center gap-2">
            <span className="draw-link">Environmental &amp; Partner Services</span>
            <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
          </Link>
        </FadeIn>
      </section>

      {/* Close */}
      <section className="mt-16 py-24 px-6 lg:px-12 bg-[#050A07] text-white rounded-t-[3rem] relative overflow-hidden grain">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(45,90,58,0.15),transparent)] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
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
