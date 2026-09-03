"use client";

import { useState } from "react";
import Image, { getImageProps } from "next/image";
import Link from "next/link";

const SERVICES = [
  {
    n: "01",
    title: "Geotechnical",
    desc: "Site classifications, investigations, assessments, construction phase support and design — the ground read before anything is built on it.",
    href: "/geotechnical",
    image: "/sfgeo-soil-profile-sequence.jpg",
    alt: "A soil profile laid out in sequence on site",
  },
  {
    n: "02",
    title: "Drilling",
    desc: "Borehole drilling, tight access and rock coring — 4WD rig and crew, for our investigations and yours.",
    href: "/drilling",
    image: "/sfgeo-rig-major-earthworks-clean.jpg",
    alt: "SFGEO rig drilling beside major earthworks",
  },
  {
    n: "03",
    title: "Environmental & Soil Testing",
    desc: "Contaminated land fieldwork, acid sulfate soils, waste classification and lab testing.",
    href: "/environmental",
    image: "/environmental-soil-groundwater-sampling-rock-logging-geotechnical-engineer.webp",
    alt: "Soil and groundwater sampling with core logging",
  },
  {
    n: "04",
    title: "Other Professional Services",
    desc: "Utility location and GPR, dilapidation reports, surveying, structural, civil and hydraulic — one point of contact.",
    href: "/other-services",
    image: "/sfgeo-night-works-team.jpg",
    alt: "The SFGEO team on night works at a Sydney intersection",
  },
  {
    n: "05",
    title: "Concrete Coring",
    desc: "Slabs, pavements and walls — cored with the engineering attached.",
    href: "/concrete-coring",
    image: "/sfgeo-concrete-coring-trinitas.jpg",
    alt: "Concrete coring in progress on a major slab",
  },
];

// Panel renders in a ~560px column inside max-w-7xl; 45vw below xl.
const PANEL_SIZES = "(min-width: 1280px) 600px, 45vw";

/**
 * Architectural service index: numbered rows on the left, a tall photo
 * panel on the right that crossfades to the hovered service. On mobile
 * each row carries its own image.
 */
export default function ServiceIndex() {
  const [active, setActive] = useState(0);
  // The frame fading out under the new active one — only these two are
  // mounted, rather than all five stacked at opacity 0.
  const [prev, setPrev] = useState<number | null>(null);

  const select = (i: number) => {
    if (i === active) return;
    setPrev(active);
    setActive(i);
  };

  // Warm the row the cursor is most likely heading to next, using the
  // same candidate set the panel's <Image> will request.
  const warm = (i: number) => {
    const s = SERVICES[i];
    if (!s || typeof window === "undefined") return;
    if (!window.matchMedia("(min-width: 1024px)").matches) return;
    const { props } = getImageProps({ src: s.image, alt: "", fill: true, sizes: PANEL_SIZES });
    const img = new window.Image();
    if (props.sizes) img.sizes = props.sizes;
    if (props.srcSet) img.srcset = props.srcSet;
    img.src = props.src;
  };

  const frames = prev === null || prev === active ? [active] : [active, prev];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-20 items-start">
      <div>
        {SERVICES.map((s, i) => (
          <Link
            key={s.n}
            href={s.href}
            onMouseEnter={() => {
              select(i);
              warm(i + 1);
            }}
            onFocus={() => select(i)}
            className="group block border-t border-gray-200 py-8 lg:py-9 transition-colors"
          >
            <div className="flex items-baseline gap-6">
              <span className={`text-xs font-semibold tracking-[0.2em] tabular-nums transition-colors ${active === i ? "text-forest-green" : "text-gray-500"}`}>
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
          {frames.map((i) => {
            const s = SERVICES[i];
            return (
              <Image
                key={s.n}
                src={s.image}
                alt={active === i ? s.alt : ""}
                aria-hidden={active !== i}
                fill
                sizes={PANEL_SIZES}
                className={`object-cover transition-opacity duration-500 ease-out ${active === i ? "opacity-100" : "opacity-0"}`}
              />
            );
          })}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050A07]/80 via-[#050A07]/25 to-transparent" />
          <div className="absolute bottom-0 left-0 p-7">
            <p className="text-[11px] uppercase tracking-[0.25em] text-white font-semibold mb-1.5">
              {SERVICES[active].n} &middot; SFGEO fieldwork
            </p>
            <p className="text-white font-montserrat text-xl font-light">{SERVICES[active].title}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
