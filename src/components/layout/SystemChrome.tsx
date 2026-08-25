"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import QuickQuoteCard from "@/components/forms/QuickQuoteCard";

/**
 * V3 chrome per Alli's annotated review (25 Aug): green/black locked;
 * desktop menu = 4 tight columns with Concrete Coring above the SFGEO
 * wordmark block and a real Google Map filling the right column; mobile
 * menu = accordion dropdowns, no map, no contact details.
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
    links: [{ name: "Slabs, Pavements & Walls", href: "/concrete-coring" }],
  },
];

const COMPANY = [
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

const MAP_SRC =
  "https://www.google.com/maps?q=SFGEO%20Suite%203.01%20Level%203%20107%20Sydenham%20Road%20Marrickville%20NSW%202204&output=embed";

function GroupHeading({ name, hub }: { name: string; hub: string }) {
  return (
    <Link
      href={hub}
      className="block text-[12px] uppercase tracking-[0.3em] text-[#8FBF9F] hover:text-white font-semibold mb-4 transition-colors"
    >
      {name} &rarr;
    </Link>
  );
}

function GroupLinks({ links }: { links: { name: string; href: string }[] }) {
  return (
    <ul className="space-y-2">
      {links.map((l) => (
        <li key={l.name + l.href}>
          <Link
            href={l.href}
            className="font-disp text-lg lg:text-xl font-light leading-[1.5] text-white/85 hover:text-white transition-colors"
          >
            {l.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function SystemHeader() {
  const [open, setOpen] = useState(false);
  const [quote, setQuote] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const pathname = usePathname();
  const overDark = pathname === "/" && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open || quote ? "hidden" : "";
  }, [open, quote]);

  useEffect(() => {
    setOpen(false);
    setQuote(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`${pathname === "/" ? "fixed" : "sticky"} top-0 z-[70] w-full transition-all duration-500 ${overDark || open ? "bg-transparent" : "bg-white/95 backdrop-blur border-b border-gray-100"}`}
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
            <button onClick={() => setQuote(false)} className="absolute top-4 right-4 z-10 text-white/70 hover:text-white text-xs font-semibold tracking-[0.2em] uppercase">
              Close ✕
            </button>
            <QuickQuoteCard source="menu quote modal" />
          </div>
        </div>
      )}

      {/* Fullscreen menu */}
      <div
        className={`fixed inset-0 z-[60] bg-[#0A130D] text-white transition-all duration-500 grain ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_-10%,rgba(64,120,80,0.45),transparent_65%)] pointer-events-none" />
        <div className="h-full overflow-y-auto px-6 lg:px-12 lg:flex lg:items-center pt-24 lg:pt-20 pb-10">

          {/* ============ Desktop: four tight columns ============ */}
          <div className="hidden lg:grid w-full max-w-[90rem] mx-auto grid-cols-[1fr_1fr_1fr_1.15fr] gap-12">
            <div className="space-y-10">
              <div><GroupHeading name="Geotechnical" hub="/geotechnical" /><GroupLinks links={GROUPS[0].links} /></div>
              <div><GroupHeading name="Environmental & Soil Testing" hub="/environmental" /><GroupLinks links={GROUPS[2].links} /></div>
            </div>
            <div className="space-y-10">
              <div><GroupHeading name="Drilling" hub="/drilling" /><GroupLinks links={GROUPS[1].links} /></div>
              <div><GroupHeading name="Other Professional Services" hub="/other-services" /><GroupLinks links={GROUPS[3].links} /></div>
            </div>
            <div className="space-y-10">
              <div><GroupHeading name="Concrete Coring" hub="/concrete-coring" /><GroupLinks links={GROUPS[4].links} /></div>
              <div>
                <p className="text-[12px] uppercase tracking-[0.3em] text-[#8FBF9F] font-semibold mb-4">SFGEO</p>
                <GroupLinks links={COMPANY} />
              </div>
              <div className="space-y-1.5 text-[13px] font-light text-white/60 border-t border-white/10 pt-6 text-center lg:text-left">
                <p><a href="tel:+61423483555" className="text-white text-base font-medium hover:text-[#8FBF9F] transition-colors">0423 483 555</a></p>
                <p><a href="mailto:info@sfgeo.com.au" className="text-white text-base font-medium hover:text-[#8FBF9F] transition-colors">info@sfgeo.com.au</a></p>
                <p className="pt-1.5">Suite 3.01, Level 3, 107 Sydenham Road, Marrickville</p>
                <p>Mon&ndash;Fri 6am&ndash;6pm &middot; Sat 8am&ndash;2pm</p>
                <button onClick={() => setQuote(true)} className="mt-4 mx-auto flex items-center justify-center px-7 h-[44px] bg-gradient-to-b from-[#346b43] to-forest-green text-white rounded-full text-xs font-semibold tracking-wide shadow-[0_8px_20px_-6px_rgba(45,90,58,0.5)] hover:brightness-105 transition-all">
                  Request A Quote
                </button>
              </div>
            </div>
            {/* Live Google Map fills the column */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 min-h-[560px]">
              {open && (
                <iframe
                  src={MAP_SRC}
                  title="SFGEO office — Marrickville"
                  className="absolute inset-0 w-full h-full"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              )}
            </div>
          </div>

          {/* ============ Mobile: accordion dropdowns, no map, no contact ============ */}
          <div className="lg:hidden max-w-xl mx-auto divide-y divide-white/10 border-y border-white/10">
            {GROUPS.map((g) => {
              const on = openGroup === g.name;
              return (
                <div key={g.name}>
                  <button
                    onClick={() => setOpenGroup(on ? null : g.name)}
                    className="w-full flex items-center justify-between py-5 text-left"
                    aria-expanded={on}
                  >
                    <span className={`text-[12px] uppercase tracking-[0.28em] font-semibold transition-colors ${on ? "text-white" : "text-[#8FBF9F]"}`}>{g.name}</span>
                    <span className={`text-[#8FBF9F] transition-transform duration-300 ${on ? "rotate-45" : ""}`} aria-hidden="true">+</span>
                  </button>
                  <div className={`overflow-hidden transition-all duration-400 ${on ? "max-h-96 pb-5" : "max-h-0"}`}>
                    <ul className="space-y-3">
                      <li>
                        <Link href={g.hub} className="font-disp text-lg font-light text-white hover:text-[#8FBF9F] transition-colors">
                          All {g.name} &rarr;
                        </Link>
                      </li>
                      {g.links.map((l) => (
                        <li key={l.name}>
                          <Link href={l.href} className="font-disp text-lg font-light leading-[1.5] text-white/80 hover:text-white transition-colors">{l.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
            <div className="py-5">
              <p className="text-[12px] uppercase tracking-[0.28em] font-semibold text-[#8FBF9F] mb-4">SFGEO</p>
              <ul className="space-y-3">
                {COMPANY.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="font-disp text-lg font-light text-white/80 hover:text-white transition-colors">{l.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="py-6">
              <button onClick={() => setQuote(true)} className="w-full inline-flex items-center justify-center h-[46px] bg-gradient-to-b from-[#346b43] to-forest-green text-white rounded-full text-xs font-semibold tracking-wide shadow-[0_8px_20px_-6px_rgba(45,90,58,0.5)]">
                Request A Quote
              </button>
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
