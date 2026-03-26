"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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
        { name: "Site Classification", href: "/services#site-class" },
        { name: "Geotechnical Investigation", href: "/services#investigation" },
        { name: "Construction Phase Support", href: "/services#inspections" },
        { name: "Geotechnical Design", href: "/services#design" },
        { name: "Partner Network", href: "/services#partners" }
      ]
    },
    { 
      name: "Drilling & Sampling", 
      href: "/drilling-and-sampling",
      sublinks: [
        { name: "Borehole Drilling", href: "/drilling-and-sampling#drilling" },
        { name: "Environmental Sampling", href: "/drilling-and-sampling#environmental" },
        { name: "Limited Access Specialist", href: "/drilling-and-sampling#tight-access" }
      ]
    },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 transition-all duration-300">
      <nav className="mx-auto flex max-w-[90rem] items-center justify-between p-4 lg:px-12" aria-label="Global">
        <div className="flex">
          <Link href="/" className="-m-1.5 p-2.5 flex items-center gap-3">
            <span className="sr-only">Solid Foundation Geotechnical</span>
            <div className="relative h-12 w-32 sm:h-14 sm:w-40">
              <Image 
                src="/SFGEO_logo_black.png" 
                alt="SFGEO Logo" 
                fill 
                className="object-contain"
                priority
              />
            </div>
          </Link>
        </div>
        
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-full p-2.5 text-slate-black"
            onClick={() => setIsOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-14 items-center pl-8">
          {navLinks.map((item) => (
            <div key={item.name} className="relative group py-2">
              <Link
                href={item.href}
                className="text-sm font-semibold leading-6 text-slate-black hover:text-forest-green transition-colors flex items-center gap-1"
              >
                {item.name}
              </Link>
              {item.sublinks && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-72 rounded-xl bg-white/90 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-white/40 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 overflow-hidden">
                  <div className="py-2">
                    {item.sublinks.map((sublink) => (
                      <Link
                        key={sublink.name}
                        href={sublink.href}
                        className="block px-6 py-3 text-sm text-gray-600 hover:bg-gray-50 hover:text-forest-green transition-colors font-medium relative overflow-hidden group/link"
                      >
                        <span className="relative z-10">{sublink.name}</span>
                        <div className="absolute inset-0 bg-gray-50/50 translate-y-full group-hover/link:translate-y-0 transition-transform duration-300 ease-out" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-50 lg:hidden bg-off-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 h-screen overflow-y-auto ml-auto"
          >
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5" onClick={() => setIsOpen(false)}>
                <span className="sr-only">Solid Foundation Geotechnical</span>
                <div className="relative h-10 w-28">
                  <Image src="/SFGEO_logo_black.png" alt="SFGEO Logo" fill className="object-contain" />
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
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navLinks.map((item) => (
                    <div key={item.name}>
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="-mx-3 block rounded-full px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
