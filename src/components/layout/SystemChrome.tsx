"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import QuickQuoteCard from "@/components/forms/QuickQuoteCard";

/**
 * System-rebuild chrome: minimal header (wordmark + MENU), fullscreen
 * grouped overlay menu, per Alli's sign-off. Groups follow her five
 * segments; links point at live pages (hub URLs join as they are built).
 */

const GROUPS: { name: string; hub: string; links: { name: string; href: string }[] }[] = [
  {
    name: "Geotechnical",
    hub: "/geotechnical",
    links: [
      { name: "Site Classification", href: "/site-classification" },
      { name: "Geotechnical Investigations", href: "/geotechnical-investigations" },
      { name: "Geotechnical Assessments", href: "/geotechnical#assessments" },
      { name: "Construction Phase Support", href: "/geotechnical#cps" },
      { name: "Geotechnical Design", href: "/geotechnical#design" },
    ],
  },
  {
    name: "Drilling",
    hub: "/drilling",
    links: [
      { name: "Borehole Drilling", href: "/drilling#drilling" },
      { name: "Tight Access", href: "/tight-access-drilling" },
      { name: "Rock Coring", href: "/drilling#rock-coring" },
      { name: "Subcontract Drilling", href: "/drilling#b2b-drilling" },
    ],
  },
  {
    name: "Environmental & Soil Testing",
    hub: "/environmental",
    links: [
      { name: "Contaminated Land (PSI & DSI)", href: "/environmental#psi-dsi" },
      { name: "Acid Sulfate Soils", href: "/environmental#ass" },
      { name: "Waste Classification", href: "/environmental#waste" },
      { name: "Soil & Lab Testing", href: "/environmental#lab" },
    ],
  },
  {
    name: "Other Professional Services",
    hub: "/other-services",
    links: [
      { name: "Utility Location & GPR Scanning", href: "/other-services" },
      { name: "Dilapidation Reports", href: "/other-services" },
      { name: "Surveying", href: "/other-services" },
      { name: "Structural, Civil & Hydro", href: "/other-services" },
    ],
  },
  {
    name: "Concrete Coring",
    hub: "/concrete-coring",
    links: [
      { name: "Slabs, Pavements & Walls", href: "/concrete-coring" },
    ],
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
  const [quote, setQuote] = useState(false);
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
        className={`${pathname === "/" ? "fixed" : "sticky"} top-0 z-[70] w-full transition-all duration-500 ${overDark && !open ? "bg-transparent" : open ? "bg-transparent" : "bg-white/95 backdrop-blur border-b border-gray-100"}`}
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

      {/* Quote modal */}
      {quote && (
        <div className="fixed inset-0 z-[90] flex items-center justify-center p-4" role="dialog" aria-modal="true">
          <div className="absolute inset-0 bg-[#050A07]/80 backdrop-blur-sm" onClick={() => setQuote(false)} />
          <div className="relative max-h-[92vh] overflow-y-auto rounded-3xl">
            <button onClick={() => setQuote(false)} className="absolute top-4 right-4 z-10 text-white/70 hover:text-white text-xs font-semibold tracking-[0.2em] uppercase">Close ✕</button>
            <QuickQuoteCard source="menu quote modal" />
          </div>
        </div>
      )}

      {/* Fullscreen menu */}
      <div
        className={`fixed inset-0 z-[60] bg-[#0A130D] text-white transition-all duration-500 grain ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_-10%,rgba(64,120,80,0.45),transparent_65%)] pointer-events-none" />
        <div className="h-full overflow-y-auto pt-28 pb-14 px-6 lg:px-12">
          <div className="max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-[2fr_1fr_1.1fr] gap-14">
            {/* Segments */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
              {GROUPS.map((g) => (
                <div key={g.name}>
                  <Link href={g.hub} className="block text-[12px] uppercase tracking-[0.3em] text-[#8FBF9F] hover:text-white font-semibold mb-4 transition-colors">{g.name} &rarr;</Link>
                  <ul className="space-y-2">
                    {g.links.map((l) => (
                      <li key={l.name + l.href}>
                        <Link href={l.href} className="font-disp text-lg lg:text-xl font-light leading-[1.5] text-white/85 hover:text-white transition-colors">
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
              <ul className="space-y-2">
                {COMPANY.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="font-disp text-lg lg:text-xl font-light leading-[1.5] text-white/85 hover:text-white transition-colors">{l.name}</Link>
                  </li>
                ))}
              </ul>
              <div className="mt-10 space-y-2 text-sm font-light text-white/60">
                <p><a href="tel:+61423483555" className="text-white font-medium hover:text-[#8FBF9F] transition-colors">0423 483 555</a></p>
                <p><a href="mailto:info@sfgeo.com.au" className="hover:text-white transition-colors">info@sfgeo.com.au</a></p>
                <p className="pt-2 text-[13px] leading-relaxed">Suite 3.01, Level 3, 107 Sydenham Road<br/>Marrickville NSW 2204</p>
                <p className="text-[13px]">Mon&ndash;Fri 6am&ndash;6pm &middot; Sat 8am&ndash;2pm</p>
                <p className="text-[13px] text-[#8FBF9F]">Fixed-fee quotes &middot; response within one business day</p>
                <button onClick={() => setQuote(true)} className="inline-flex mt-4 items-center justify-center px-7 h-[44px] bg-gradient-to-b from-[#346b43] to-forest-green text-white rounded-full text-xs font-semibold tracking-wide shadow-[0_8px_20px_-6px_rgba(45,90,58,0.5)] hover:brightness-105 transition-all">
                  Request A Quote
                </button>
              </div>
            </div>
            {/* Office map */}
            <Link href="/contact" className="hidden lg:block relative rounded-2xl overflow-hidden min-h-[420px] group">
              <Image src="/sfgeo-map-inner-west.jpg" alt="Map of Sydney&rsquo;s inner west centred on SFGEO&rsquo;s Marrickville office" fill sizes="30vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
              <span className="absolute left-[33%] top-[38%] w-3 h-3 rounded-full bg-[#8FBF9F] shadow-[0_0_0_3px_rgba(5,10,7,0.5)] -translate-x-1/2 -translate-y-1/2" />
              <span className="absolute left-[33%] top-[38%] w-3 h-3 rounded-full bg-[#8FBF9F]/60 -translate-x-1/2 -translate-y-1/2 animate-ping" />
              <span className="absolute left-[33%] top-[38%] -translate-x-1/2 -translate-y-[210%] bg-[#050A07]/85 backdrop-blur-sm text-white font-montserrat font-light text-xs tracking-[0.12em] px-4 py-2 rounded-full border border-[#8FBF9F]/35 whitespace-nowrap">SF<span className="font-semibold">GEO</span> &middot; Marrickville</span>
              <p className="absolute bottom-4 left-5 text-[11px] uppercase tracking-[0.25em] text-white/75 font-semibold">Visit Us &middot; Marrickville</p>
              <p className="absolute right-2.5 bottom-1.5 text-[8px] text-white/40">&copy; OpenStreetMap contributors</p>
            </Link>
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
