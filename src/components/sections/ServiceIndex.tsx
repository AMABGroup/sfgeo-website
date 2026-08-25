"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const SERVICES = [
  {
    n: "01",
    title: "Site Classification",
    desc: "AS 2870 classifications for homes, extensions, granny flats and pools — the report your structural engineer designs from.",
    href: "/site-classification",
    image: "/sfgeo-hand-auger-sidepath-naremburn.jpg",
    alt: "Engineer at a hand-auger borehole in a sunlit Naremburn side path",
  },
  {
    n: "02",
    title: "Geotechnical Investigations",
    desc: "Boreholes, penetrometers and NATA-backed laboratory data for DAs, footings, basements and retaining structures.",
    href: "/geotechnical-investigations",
    image: "/sfgeo-drill-rig-mast-up-rural-sydney.jpg",
    alt: "SFGEO 4WD drill rig with mast raised on a rural Sydney block",
  },
  {
    n: "03",
    title: "Construction Phase Support",
    desc: "Footing, pier and engineered-fill inspections that keep an open excavation moving — verified bearing, in writing, fast.",
    href: "/services#inspections",
    image: "/sfgeo-strip-footing-inspection.jpg",
    alt: "Strip footing trench inspection along a Sydney garden path",
  },
  {
    n: "04",
    title: "Drilling services",
    desc: "4WD rig and crew — for builders, consultancies and major contractors. Tight-access augers, engineer operated.",
    href: "/drilling",
    image: "/sfgeo-rig-major-earthworks-sydney.jpg",
    alt: "SFGEO drill rig working beside major earthworks in Sydney",
  },
];

/**
 * Architectural service index: numbered rows on the left, a tall photo
 * panel on the right that crossfades to the hovered service. On mobile
 * each row carries its own image.
 */
export default function ServiceIndex() {
  const [active, setActive] = useState(0);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-20 items-start">
      <div>
        {SERVICES.map((s, i) => (
          <Link
            key={s.n}
            href={s.href}
            onMouseEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
            className="group block border-t border-gray-200 py-8 lg:py-9 transition-colors"
          >
            <div className="flex items-baseline gap-6">
              <span className={`text-xs font-semibold tracking-[0.2em] tabular-nums transition-colors ${active === i ? "text-forest-green" : "text-gray-400"}`}>
                {s.n}
              </span>
              <div className="flex-1">
                <h3 className={`font-montserrat text-2xl sm:text-[1.85rem] font-light tracking-tight transition-all duration-300 ${active === i ? "text-forest-green translate-x-1.5" : "text-slate-950"}`}>
                  {s.title}
                </h3>
                <p className="mt-2.5 text-sm text-gray-500 font-light leading-relaxed max-w-md">
                  {s.desc}
                </p>
              </div>
              <span
                aria-hidden="true"
                className={`hidden sm:block text-xl font-light transition-all duration-300 ${active === i ? "text-forest-green translate-x-1" : "text-gray-300"}`}
              >
                &rarr;
              </span>
            </div>
            {/* Mobile image per row */}
            <div className="lg:hidden relative aspect-[16/10] rounded-2xl overflow-hidden mt-6">
              <Image src={s.image} alt={s.alt} fill sizes="100vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050A07]/45 via-transparent to-transparent" />
            </div>
          </Link>
        ))}
        <div className="border-t border-gray-200" />
      </div>

      {/* Desktop crossfade panel */}
      <div className="hidden lg:block sticky top-28">
        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-[0_24px_60px_-24px_rgba(5,10,7,0.4)]">
          {SERVICES.map((s, i) => (
            <Image
              key={s.n}
              src={s.image}
              alt={s.alt}
              fill
              sizes="45vw"
              className={`object-cover transition-opacity duration-500 ease-out ${active === i ? "opacity-100" : "opacity-0"}`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050A07]/55 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 p-7">
            <p className="text-[11px] uppercase tracking-[0.25em] text-white/70 font-semibold mb-1.5">
              {SERVICES[active].n} &middot; SFGEO fieldwork
            </p>
            <p className="text-white font-montserrat text-xl font-light">{SERVICES[active].title}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
