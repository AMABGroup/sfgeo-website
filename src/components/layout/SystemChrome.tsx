"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

/**
 * System-rebuild chrome: minimal header (wordmark + MENU), fullscreen
 * grouped overlay menu, per Alli's sign-off. Groups follow her five
 * segments; links point at live pages (hub URLs join as they are built).
 */

const GROUPS: { name: string; links: { name: string; href: string }[] }[] = [
  {
    name: "Geotechnical",
    links: [
      { name: "Site Classification", href: "/site-classification" },
      { name: "Geotechnical Investigations", href: "/geotechnical-investigations" },
      { name: "Construction Phase Support", href: "/services#inspections" },
      { name: "Geotechnical Design", href: "/services#design" },
    ],
  },
  {
    name: "Drilling",
    links: [
      { name: "Drilling Services", href: "/drilling" },
      { name: "Tight Access Drilling", href: "/tight-access-drilling" },
    ],
  },
  {
    name: "Environmental & Soil Testing",
    links: [{ name: "Environmental Sampling", href: "/other-services" }],
  },
  {
    name: "Concrete Coring",
    links: [{ name: "Concrete Coring", href: "/concrete-coring" }],
  },
  {
    name: "Other Professional Services",
    links: [{ name: "Partner & Professional Services", href: "/other-services" }],
  },
];

const COMPANY = [
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

export function SystemHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const overDark = pathname === "/" && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
  }, [open]);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <>
      <header
        className={`${pathname === "/" ? "fixed" : "sticky"} top-0 z-50 w-full transition-all duration-500 ${overDark && !open ? "bg-transparent" : open ? "bg-transparent" : "bg-white/95 backdrop-blur border-b border-gray-100"}`}
      >
        <nav className="mx-auto flex max-w-[90rem] items-center justify-between px-6 lg:px-12 h-[72px]">
          <Link href="/" className="relative h-9 w-28 z-[70]" aria-label="SFGEO home">
            <Image
              src="/SFGEO_logo_black.png"
              alt="SFGEO"
              fill
              sizes="140px"
              className={`object-contain object-left transition-all duration-500 ${overDark || open ? "invert brightness-0" : ""}`}
            />
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className={`z-[70] flex items-center gap-3 text-xs font-semibold tracking-[0.28em] uppercase transition-colors ${overDark || open ? "text-white" : "text-slate-950"}`}
            aria-expanded={open}
          >
            {open ? "Close" : "Menu"}
            <span className="relative w-6 h-4 block" aria-hidden="true">
              <span className={`absolute left-0 w-6 h-[1.5px] bg-current transition-all duration-300 ${open ? "top-1/2 rotate-45" : "top-0"}`} />
              <span className={`absolute left-0 top-1/2 w-6 h-[1.5px] bg-current transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
              <span className={`absolute left-0 w-6 h-[1.5px] bg-current transition-all duration-300 ${open ? "top-1/2 -rotate-45" : "top-full"}`} />
            </span>
          </button>
        </nav>
      </header>

      {/* Fullscreen menu */}
      <div
        className={`fixed inset-0 z-[60] bg-[#050A07] text-white transition-all duration-500 grain ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_-10%,rgba(45,90,58,0.35),transparent_60%)] pointer-events-none" />
        <div className="h-full overflow-y-auto pt-28 pb-14 px-6 lg:px-12">
          <div className="max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-[2fr_1fr_1.1fr] gap-14">
            {/* Segments */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
              {GROUPS.map((g) => (
                <div key={g.name}>
                  <p className="text-[11px] uppercase tracking-[0.3em] text-[#8FBF9F] font-semibold mb-4">{g.name}</p>
                  <ul className="space-y-2.5">
                    {g.links.map((l) => (
                      <li key={l.name + l.href}>
                        <Link href={l.href} className="font-serifd text-xl lg:text-2xl text-white/85 hover:text-white transition-colors">
                          {l.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            {/* Company */}
            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#8FBF9F] font-semibold mb-4">SFGEO</p>
              <ul className="space-y-2.5">
                {COMPANY.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="font-serifd text-xl lg:text-2xl text-white/85 hover:text-white transition-colors">{l.name}</Link>
                  </li>
                ))}
              </ul>
              <div className="mt-10 space-y-2 text-sm font-light text-white/60">
                <p><a href="tel:+61423483555" className="text-white font-medium hover:text-[#8FBF9F] transition-colors">0423 483 555</a></p>
                <p><a href="mailto:info@sfgeo.com.au" className="hover:text-white transition-colors">info@sfgeo.com.au</a></p>
                <Link href="/contact" className="inline-flex mt-4 items-center justify-center px-7 h-[44px] bg-gradient-to-b from-[#346b43] to-forest-green text-white rounded-full text-xs font-semibold tracking-wide shadow-[0_8px_20px_-6px_rgba(45,90,58,0.5)] hover:brightness-105 transition-all">
                  Request A Quote
                </Link>
              </div>
            </div>
            {/* Featured image */}
            <div className="hidden lg:block relative rounded-2xl overflow-hidden min-h-[420px]">
              <Image src="/sfgeo-drill-rig-mast-up-rural-sydney.jpg" alt="SFGEO drill rig, mast raised" fill sizes="30vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050A07]/70 via-transparent to-transparent" />
              <p className="absolute bottom-5 left-5 text-[11px] uppercase tracking-[0.25em] text-white/75 font-semibold">Proven On Sydney Ground</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function SystemFooter() {
  return (
    <footer className="bg-[#050A07] text-white/55 px-6 lg:px-12 py-12">
      <div className="max-w-[90rem] mx-auto flex flex-col gap-8">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <span className="font-montserrat text-2xl font-light tracking-[0.12em] text-white">SF<span className="font-semibold">GEO</span></span>
          <nav className="flex flex-wrap gap-x-7 gap-y-2 text-[13px] font-medium">
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <Link href="/projects" className="hover:text-white transition-colors">Projects</Link>
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
            <Link href="/faq" className="hover:text-white transition-colors">FAQ</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms-and-conditions" className="hover:text-white transition-colors">Terms</Link>
          </nav>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4 text-[12px] font-light border-t border-white/10 pt-6">
          <p className="max-w-xl">We acknowledge the Traditional Custodians of the lands on which we live and work, and pay our respects to Elders past and present.</p>
          <p className="whitespace-nowrap">&copy; SFGEO 2025&ndash;2026 &middot; Marrickville, Sydney &middot; ABN 54 686 815 252</p>
        </div>
      </div>
    </footer>
  );
}
