"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Bars3Icon, XMarkIcon, ChevronDownIcon, PhoneIcon } from "@heroicons/react/24/outline";

// Routes with a dark full-bleed hero: the bar starts transparent with white
// text and solidifies to white once the page scrolls.
const DARK_HERO_ROUTES = ["/"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<number | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const overHero = DARK_HERO_ROUTES.includes(pathname) && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { 
      name: "About", 
      href: "/about",
      sublinks: [
        { name: "Our Foundation & Team", href: "/about#team" },
        { name: "Project Gallery", href: "/about#projects" },
        { name: "Professional Accreditations", href: "/about#accreditations" }
      ]
    },
    { 
      name: "Geotechnical Services", 
      href: "/services",
      sublinks: [
        { name: "Site Classification", href: "/site-classification" },
        { name: "Geotechnical Investigations", href: "/geotechnical-investigations" },
        { name: "Construction Phase Support", href: "/services#inspections" },
        { name: "Tight Access Drilling", href: "/tight-access-drilling" },
        { name: "Concrete Coring", href: "/concrete-coring" },
        { name: "Other Services", href: "/other-services" }
      ]
    },
    { 
      name: "Drilling Services", 
      href: "/drilling",
      sublinks: [
        { name: "Borehole Drilling", href: "/drilling#drilling" },
        { name: "Environmental Sampling", href: "/drilling#environmental" },
        { name: "Tight Access Sites", href: "/drilling#tight-access" },
        { name: "B2B Drilling", href: "/drilling#b2b-drilling" }
      ]
    },
    { name: "Projects", href: "/projects" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  // Close submenus on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveSubmenu(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header
      className={`${DARK_HERO_ROUTES.includes(pathname) ? "fixed" : "sticky"} top-0 z-50 w-full transition-all duration-500 ${overHero ? "bg-transparent border-b border-transparent" : "bg-white border-b border-gray-200"}`}
    >
      <nav className="mx-auto flex max-w-[90rem] items-center justify-between p-4 lg:px-12" aria-label="Global">
        <div className="flex">
          <Link href="/" className="-m-1.5 p-2.5 flex items-center gap-3">
            <span className="sr-only">Solid Foundation Geotechnical</span>
            <div className="relative h-12 w-32 sm:h-14 sm:w-40">
              <Image 
                src="/SFGEO_logo_black.png" 
                alt="SFGEO Logo" 
                title="Solid Foundation Geotechnical - SFGEO"
                fill 
                sizes="160px"
                className={`object-contain transition-all duration-500 ${overHero ? "invert brightness-0" : ""}`}
              />
            </div>
          </Link>
        </div>
        
        <div className="flex lg:hidden items-center gap-2">
          <Link
            href="tel:+61423483555"
            aria-label="Call SFGEO"
            className={`inline-flex items-center justify-center rounded-full p-2.5 transition-colors ${overHero ? "text-white" : "text-forest-green"}`}
          >
            <PhoneIcon className="h-5 w-5" aria-hidden="true" />
          </Link>
          <button
            type="button"
            className={`-m-2.5 inline-flex items-center justify-center rounded-full p-2.5 transition-colors ${overHero ? "text-white" : "text-slate-black"}`}
            onClick={() => setIsOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-8 xl:gap-x-10 items-center pl-8">
          {navLinks.map((item, index) => (
            <div 
              key={item.name} 
              className="relative py-2"
              onMouseEnter={() => setActiveSubmenu(index)}
              onMouseLeave={() => setActiveSubmenu(null)}
            >
              <Link
                href={item.href}
                className={`text-sm font-semibold leading-6 whitespace-nowrap transition-colors flex items-center gap-1 focus:outline-none ${overHero ? "text-white/90 hover:text-white focus:text-white" : "text-slate-black hover:text-forest-green focus:text-forest-green"}`}
                onFocus={() => setActiveSubmenu(index)}
                aria-haspopup={item.sublinks ? "true" : undefined}
                aria-expanded={activeSubmenu === index}
                aria-controls={item.sublinks ? `submenu-${index}` : undefined}
              >
                {item.name}
                {item.sublinks && <ChevronDownIcon className="h-3 w-3" />}
              </Link>
              
              <AnimatePresence>
                {item.sublinks && activeSubmenu === index && (
                  <motion.div 
                    id={`submenu-${index}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-72 rounded-xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 overflow-hidden z-50"
                  >
                    <div className="py-2">
                      {item.sublinks.map((sublink, subIndex) => (
                        <Link
                          key={sublink.name}
                          href={sublink.href}
                          className="block px-6 py-3 text-sm text-gray-600 hover:bg-gray-50 hover:text-forest-green transition-colors font-medium"
                          onKeyDown={(e) => {
                            if (e.key === "Tab" && !e.shiftKey && subIndex === item.sublinks!.length - 1) {
                              setActiveSubmenu(null);
                            }
                            if (e.key === "Tab" && e.shiftKey && subIndex === 0) {
                              // Let default browser behavior take back to parent
                            }
                          }}
                        >
                          {sublink.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}

          {/* CTA cluster */}
          <div className="flex items-center gap-5 pl-2">
            <Link
              href="tel:+61423483555"
              className={`text-sm font-semibold tracking-wide whitespace-nowrap transition-colors ${overHero ? "text-white/90 hover:text-white" : "text-slate-950 hover:text-forest-green"}`}
            >
              0423 483 555
            </Link>
            <Link
              href="/contact"
              className="flex items-center justify-center whitespace-nowrap px-6 h-[42px] bg-gradient-to-b from-[#346b43] to-forest-green text-white rounded-full shadow-[0_8px_20px_-6px_rgba(45,90,58,0.4)] hover:shadow-[0_12px_24px_-8px_rgba(45,90,58,0.6)] hover:brightness-105 transition-all hover:-translate-y-0.5 text-xs font-semibold tracking-wide"
            >
              Request a quote
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 lg:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 z-50 w-full lg:hidden bg-white px-6 py-6 sm:max-w-sm shadow-2xl h-screen overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-8">
                <Link href="/" className="-m-1.5 p-1.5" onClick={() => setIsOpen(false)}>
                  <span className="sr-only">Solid Foundation Geotechnical</span>
                  <div className="relative h-10 w-28">
                    <Image src="/SFGEO_logo_black.png" alt="SFGEO Logo" title="Solid Foundation Geotechnical - SFGEO" fill className="object-contain" />
                  </div>
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-full p-2.5 text-slate-black"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              
              <div className="space-y-4">
                {navLinks.map((item, index) => (
                  <div key={item.name} className="border-b border-gray-50 pb-4">
                    {item.sublinks ? (
                      <div>
                        <button
                          onClick={() => setMobileExpanded(mobileExpanded === index ? null : index)}
                          className="flex w-full items-center justify-between text-base font-semibold leading-7 text-gray-900 py-2"
                        >
                          {item.name}
                          <ChevronDownIcon 
                            className={`h-4 w-4 transition-transform duration-200 ${mobileExpanded === index ? 'rotate-180' : ''}`} 
                          />
                        </button>
                        <AnimatePresence>
                          {mobileExpanded === index && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="pl-4 py-2 space-y-3">
                                <Link
                                  href={item.href}
                                  onClick={() => setIsOpen(false)}
                                  className="block text-sm font-medium text-forest-green"
                                >
                                  Visit {item.name} hub
                                </Link>
                                {item.sublinks.map((sublink) => (
                                  <Link
                                    key={sublink.name}
                                    href={sublink.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block text-sm font-medium text-gray-600 hover:text-forest-green"
                                  >
                                    {sublink.name}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="block text-base font-semibold leading-7 text-gray-900 py-2"
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
