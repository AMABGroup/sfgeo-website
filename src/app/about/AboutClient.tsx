"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import ServiceAreaBlock from "@/components/sections/ServiceAreaBlock";

export default function AboutClient() {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "GeotechnicalEngineer", 
    "name": "Solid Foundation Geotechnical (SFGEO)",
    "description": "Boutique geotechnical engineering consultancy based in Marrickville, delivering precise site investigations, soil testing, and practical foundation advice directly to residential clients, architects, and local builders.",
    "founder": {
      "@type": "Person",
      "name": "Company Director"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Marrickville",
      "addressRegion": "NSW",
      "addressCountry": "AU"
    },
    "areaServed": [
      { "@type": "City", "name": "Sydney Metro" },
      { "@type": "City", "name": "Greater Sydney" },
      { "@type": "City", "name": "North Shore" },
      { "@type": "City", "name": "Inner West" },
      { "@type": "City", "name": "Western Sydney" },
      { "@type": "City", "name": "Eastern Suburbs" },
      { "@type": "City", "name": "Sutherland Shire" }
    ]
  };

  return (
    <div className="bg-white text-slate-950 font-inter min-h-screen pb-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      {/* 1. Eyebrow */}
      <div className="pt-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 pb-10 border-b border-gray-100"
        >
          <h3 className="text-[11px] font-bold tracking-[0.2em] text-forest-green uppercase m-0 max-w-sm">
            FAMILY OWNED • INDEPENDENT • SYDNEY BASED
          </h3>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://au.linkedin.com/company/sfgeo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 rounded-full shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 group/link w-max"
            >
              <svg
                className="w-4 h-4 text-[#0A66C2] transition-transform group-hover/link:scale-110"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.475-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <span className="text-xs font-semibold text-slate-950 tracking-wide">
                Connect on LinkedIn
              </span>
            </a>
            <a
              href="https://www.instagram.com/sfgeo_syd/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 rounded-full shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 group/link w-max"
            >
              <svg
                className="w-4 h-4 text-[#E1306C] transition-transform group-hover/link:scale-110"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-xs font-semibold text-slate-950 tracking-wide">
                Follow on Instagram
              </span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* 2. Hero Section */}
      <section className="relative px-6 lg:px-12 pt-32 pb-48 sm:pb-32 min-h-[90vh] flex flex-col justify-center overflow-hidden mb-24">
        {/* Full Bleed Background Image with Subtle Gradient */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/canada-bay.jpg"
            alt="Boutique Geotechnical Consultancy Sydney - SFGEO Canada Bay Workspace"
            fill
            className="object-cover"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/50 to-white/90" />
          {/* Structural Plan line-art overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(45,90,58,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(45,90,58,0.2)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none mix-blend-multiply" />
        </div>

        <div className="mx-auto max-w-7xl relative z-10 w-full">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.p
              variants={fadeIn}
              className="text-sm uppercase tracking-[0.2em] text-forest-green mb-6 font-semibold"
            >
              Sydney, Australia
            </motion.p>
            <motion.h1 
              variants={fadeIn}
              className="text-4xl tracking-tight sm:text-6xl font-montserrat text-slate-950 leading-tight mb-8"
            >
              <span className="font-light block">Solid Foundation.</span>
              <span className="font-semibold block">Build With Confidence.</span>
            </motion.h1>
            <motion.div
              variants={fadeIn}
              className="mt-8 h-px bg-slate-black/20 w-1/4"
            />
            <motion.p
              variants={fadeIn}
              className="text-lg sm:text-xl text-slate-800 font-normal leading-relaxed mb-6 max-w-3xl"
            >
              Whether you are extending a tight Surry Hills terrace, building a new home in Dural, or planning a duplex in Kellyville, an accurate geotechnical report is the foundation for every decision that follows. We don't just drill holes; we deliver the site data and plain-English advice needed to reduce costly guesswork, keep your project moving, and give your structural engineer the reliable parameters required for design.
            </motion.p>
            <motion.div
              variants={fadeIn}
              className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6"
            >
              <Link
                href="/contact"
                className="group relative px-8 py-3.5 font-medium text-white bg-slate-950 overflow-hidden flex items-center gap-2 rounded-full hover:bg-slate-800 transition-colors shadow-sm hover:shadow-md"
              >
                Request a Fixed-Fee Quote{" "}
                <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="group relative px-8 py-3.5 font-medium text-slate-950 bg-white border border-slate-950 overflow-hidden flex items-center gap-2 rounded-full hover:bg-gray-50 transition-colors shadow-sm hover:shadow-md"
              >
                Talk to a Geotechnical Engineer{" "}
                <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. Foundation and Team Layout */}
      <section className="px-6 lg:px-12 max-w-7xl mx-auto mb-32 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="lg:col-span-8"
        >
          <h2 className="text-3xl font-light tracking-tight font-montserrat text-slate-950 mb-8">
            Our Foundation & Mission
          </h2>
          <p className="text-lg text-gray-600 font-light leading-loose mb-6">
            I founded Solid Foundation Geotechnical (SFGEO) to bridge a gap I kept seeing in the industry. After a career spanning the construction trades, geotechnical drilling, and senior engineering roles on major commercial projects, I saw residential clients and local builders receiving conservative, heavily caveated reports that didn't reflect actual site conditions—and paying for structural designs to match.
          </p>
          <p className="text-lg text-gray-600 font-light leading-loose mb-6">
            SFGEO was built to bring commercial-grade geotechnical expertise into the residential and local building space. As a proud small business, we understand the pressures that local builders, developers, and fellow consultants face. We actively partner with and support other local businesses by providing the precise, site-specific soil parameters that give your structural engineer the confidence to right-size their design.
          </p>
          <p className="text-lg text-gray-600 font-light leading-loose">
            Our mission is to deliver practical, plain-English advice that connects the dirt to the build, keeping your foundation costs grounded in what the site actually needs—not just in our report, but throughout your entire construction process.
          </p>
        </motion.div>

        {/* Elegantly Placed Portrait Image */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-4 relative aspect-[3/4] rounded-none bg-gray-50 flex items-center justify-center overflow-hidden shadow-none group w-full"
        >
          <Image
            src="/geotechnical-engineer-led-field-operations-sydney.jpg"
            alt="SFGEO geotechnical engineer supervising field drilling operations."
            fill
            sizes="(max-width: 1024px) 100vw, 33vw"
            quality={75}
            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-black/20 to-transparent pointer-events-none" />
        </motion.div>
      </section>

      {/* 4. Three Cards (Why Choose) */}
      <section className="px-6 lg:px-12 max-w-7xl mx-auto mb-32 border-t border-gray-100 pt-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <motion.div
            variants={fadeIn}
            className="bg-white p-10 rounded-none border-[1px] border-gray-200 shadow-none hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-1"
          >
            <h3 className="text-xl font-bold font-montserrat mb-4 tracking-tight">
              Direct Access
            </h3>
            <p className="text-gray-600 font-light leading-relaxed">
              Principal-led from start to finish, with direct access from initial site consult, until handover and you recieve the keys.
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn}
            className="bg-white p-10 rounded-none border-[1px] border-gray-200 shadow-none hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-1"
          >
            <h3 className="text-xl font-bold font-montserrat mb-4 tracking-tight">
              Responsive & Local
            </h3>
            <p className="text-gray-600 font-light leading-relaxed">
              Based in Marrickville and working across Sydney Metro and Greater Sydney. From North Shore sandstone to Western Sydney reactive clays.
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn}
            className="bg-white p-10 rounded-none border-[1px] border-gray-200 shadow-none hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-1"
          >
            <h3 className="text-xl font-bold font-montserrat mb-4 tracking-tight">
              Agile & Cost-Effective
            </h3>
            <p className="text-gray-600 font-light leading-relaxed">
              Lean, fixed-fee service with practical geotechnical advice for efficient, cost-conscious project decisions.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* 5. Projects Gallery */}
      <section className="py-24 bg-slate-50 border-y border-gray-200 mb-32">
        <div className="px-6 lg:px-12 max-w-7xl mx-auto">
          {/* Header styled like Landing Page */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-8"
          >
            <div>
              <motion.h2 variants={fadeIn} className="text-3xl font-light tracking-tight font-montserrat text-slate-950">
                Project Experience | <span className="font-semibold">Current &amp; Previous</span>
              </motion.h2>
              <motion.div variants={fadeIn} className="mt-4 h-px bg-forest-green w-12" />
            </div>
            <motion.p
              variants={fadeIn}
              className="text-sm text-gray-500 max-w-md font-light"
            >
              From localized residential soil testing to comprehensive
              infrastructure and commercial ground engineering across Sydney.
            </motion.p>
          </motion.div>

          {/* Gallery Rows */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex flex-col gap-6"
          >
            {/* Top Row: Current Projects */}
            <div>
              <motion.h4
                variants={fadeIn}
                className="text-sm font-semibold tracking-widest uppercase text-forest-green mb-6 border-b border-gray-200 pb-2"
              >
                Current Projects
              </motion.h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="relative aspect-[4/3] rounded-none border border-gray-200 overflow-hidden group shadow-none">
                  <Image
                    src="/footing-pile-inspection-north-willoughby-geotechnical.jpg"
                    alt="Responsive construction-phase footing and pile inspections in North Willoughby by SFGEO."
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
                    <p className="text-white text-sm tracking-widest font-semibold uppercase text-center leading-relaxed">
                      Footing & Pile Inspection <br/><span className="text-xs font-light text-gray-300">North Willoughby</span>
                    </p>
                  </div>
                </div>
                <div className="relative aspect-[4/3] rounded-none border border-gray-200 overflow-hidden group shadow-none">
                  <Image
                    src="/geotechnical-investigation-borehole-baulkham-hills.jpg"
                    alt="Comprehensive subsurface drilling and soil testing for residential foundation design in Baulkham Hills."
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
                    <p className="text-white text-sm tracking-widest font-semibold uppercase text-center leading-relaxed">
                      Geotechnical Investigation <br/><span className="text-xs font-light text-gray-300">Baulkham Hills</span>
                    </p>
                  </div>
                </div>
                <div className="relative aspect-[4/3] rounded-none border border-gray-200 overflow-hidden group shadow-none">
                  <Image
                    src="/geotechnical-project-management-marrickville.png"
                    alt="Local geotechnical project management and precise field data collection in Marrickville."
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
                    <p className="text-white text-sm tracking-widest font-semibold uppercase text-center leading-relaxed">
                      Project Management <br/><span className="text-xs font-light text-gray-300">Marrickville</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Row: Previous Experience */}
            <div className="pt-8">
              <motion.h4
                variants={fadeIn}
                className="text-sm font-semibold tracking-widest uppercase text-forest-green mb-6 border-b border-gray-200 pb-2"
              >
                Previous Project Experience
              </motion.h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="relative aspect-[4/3] rounded-none border border-gray-200 overflow-hidden group shadow-none">
                  <Image
                    src="/commercial-geotechnical-eastern-creek-light-horse.jpeg"
                    alt="Commercial geotechnical site support for large-scale infrastructure at Light Horse Interchange."
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
                    <p className="text-white text-sm tracking-widest font-semibold uppercase text-center leading-relaxed">
                      Light Horse Interchange <br/><span className="text-xs font-light text-gray-300">Eastern Creek</span>
                    </p>
                  </div>
                </div>
                <div className="relative aspect-[4/3] rounded-none border border-gray-200 overflow-hidden group shadow-none">
                  <Image
                    src="/infrastructure-drilling-sydney-gateway-airport.jpeg"
                    alt="Complex infrastructure geotechnical drilling and site investigation at Sydney Gateway Airport."
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
                    <p className="text-white text-sm tracking-widest font-semibold uppercase text-center leading-relaxed">
                      Sydney Gateway <br/><span className="text-xs font-light text-gray-300">Sydney Airport</span>
                    </p>
                  </div>
                </div>
                <div className="relative aspect-[4/3] rounded-none border border-gray-200 overflow-hidden group shadow-none">
                  <Image
                    src="/civil-geotechnical-data-m7-m12-link-sydney.jpeg"
                    alt="Large-scale civil infrastructure fieldwork delivering reliable geotechnical data for the M7-M12 Link."
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
                    <p className="text-white text-sm tracking-widest font-semibold uppercase text-center leading-relaxed">
                      M7-M12 Link <br/><span className="text-xs font-light text-gray-300">South West Sydney</span>
                    </p>
                  </div>
                </div>
                <div className="relative aspect-[4/3] rounded-none border border-gray-200 overflow-hidden group shadow-none">
                  <Image
                    src="/tier-1-infrastructure-drilling-sydney-metro-hurlstone.jpg"
                    alt="Specialised geotechnical drilling for Tier-1 rail infrastructure at Sydney Metro Hurlstone Park."
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
                    <p className="text-white text-sm tracking-widest font-semibold uppercase text-center leading-relaxed">
                      Sydney Metro <br/><span className="text-xs font-light text-gray-300">Hurlstone Park</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 6. Accreditations & Assurances */}
      <section className="px-6 lg:px-12 max-w-7xl mx-auto">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-8"
        >
          <div>
            <motion.h2 variants={fadeIn} className="text-3xl font-light tracking-tight font-montserrat text-slate-950">
              Professional Accreditation | <span className="font-semibold">Assurances</span>
            </motion.h2>
            <motion.div variants={fadeIn} className="mt-4 h-px bg-forest-green w-12" />
          </div>
          <motion.p variants={fadeIn} className="text-sm text-gray-500 max-w-md font-light leading-relaxed">
            SFGEO strictly complies with AS1726, AS2870, and AS3798, with fieldwork and reporting fully tailored to meet Sydney Water, local Council, and CDC requirements.
          </motion.p>
        </motion.div>

        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
            <motion.div variants={fadeIn} className="bg-white p-8 rounded-none border-[1px] border-gray-200 shadow-none hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-500 flex flex-col items-center justify-center text-center group">
              <div className="relative h-16 w-full mb-6 max-w-[150px]">
                <Image src="/ea-logo.png" alt="SFGEO is a member of Engineers Australia" fill className="object-contain" />
              </div>
              <span className="block text-sm font-semibold tracking-wide uppercase">Engineers Australia</span>
            </motion.div>
            
            <motion.div variants={fadeIn} className="bg-white p-8 rounded-none border-[1px] border-gray-200 shadow-none hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-500 flex flex-col items-center justify-center text-center group">
              <div className="relative h-16 w-full mb-6 max-w-[150px]">
                 <Image src="/ags-logo.png" alt="SFGEO is a member of the Australian Geomechanics Society" fill className="object-contain" />
              </div>
              <span className="block text-sm font-semibold tracking-wide uppercase">Australian Geomechanics Society</span>
            </motion.div>

            <motion.div variants={fadeIn} className="bg-white p-8 rounded-none border-[1px] border-gray-200 shadow-none hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-500 flex flex-col items-center justify-center text-center group h-full">
              <span className="block text-slate-950 font-bold text-lg mb-3 mt-auto">Fully Insured & Compliant</span>
              <p className="text-sm font-light leading-relaxed text-gray-600 mb-auto">
                Comprehensive Professional Indemnity (PI) and Public Liability (PL) insurance for major site sign-offs.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>
      
      <ServiceAreaBlock pageType="about" />
    </div>
  );
}
