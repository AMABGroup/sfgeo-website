"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PlusIcon, MinusIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import ServiceAreaBlock from "@/components/sections/ServiceAreaBlock";

function ExpandableDetails({ title, items }: { title: string, items: string[] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-10 border-t border-gray-100 pt-6">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 text-[13px] font-bold tracking-widest text-forest-green hover:text-slate-950 transition-colors uppercase group w-full text-left"
        aria-expanded={isOpen}
      >
        <span className="p-1.5 rounded-full bg-forest-green/10 group-hover:bg-slate-100 transition-colors">
          {isOpen ? <MinusIcon className="w-4 h-4" /> : <PlusIcon className="w-4 h-4" />}
        </span>
        {title}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <ul className="pt-6 pb-2 space-y-4 font-medium text-[15px] text-slate-950 pl-2">
              {items.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-forest-green mt-2 shrink-0 opacity-80" />
                  <span className="leading-relaxed font-light">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ServicesClient() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  return (
    <div className="bg-white text-slate-950 font-inter min-h-screen">
      
      <section className="pt-32 pb-16 px-6 lg:px-12 max-w-7xl mx-auto">
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          
          <motion.div variants={fadeIn} className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 pb-10 border-b border-gray-100">
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
                <svg className="w-4 h-4 text-[#0A66C2] transition-transform group-hover/link:scale-110" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.475-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span className="text-xs font-semibold text-slate-950 tracking-wide">Connect on LinkedIn</span>
              </a>
              <a 
                href="https://www.instagram.com/sfgeo_syd/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 rounded-full shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 group/link w-max"
              >
                <svg className="w-4 h-4 text-[#E1306C] transition-transform group-hover/link:scale-110" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
                <span className="text-xs font-semibold text-slate-950 tracking-wide">Follow on Instagram</span>
              </a>
            </div>
          </motion.div>

          {/* H1 and Subtitle */}
          <motion.h1 
            variants={fadeIn} 
            className="text-4xl sm:text-5xl font-montserrat font-light tracking-tight text-slate-950 max-w-4xl mb-6"
          >
            Geotechnical Services & Site Investigations Across Sydney
          </motion.h1>
          
          <motion.p variants={fadeIn} className="text-xl text-gray-500 font-light leading-relaxed max-w-2xl mb-16">
            Based in Marrickville and servicing Parramatta, Western Sydney, and the wider metropolitan region, we bring commercial-grade geotechnical expertise to residential and mid-scale commercial projects. As a proudly family-owned Sydney consultancy, we bridge the gap between the ground investigation and the build. We deliver site-specific soil parameters and practical advice for builders, contractors, engineers, and homeowners.
          </motion.p>
        </motion.div>
      </section>

      {/* Content Blocks */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-32">
        
        {/* Block 1: Site Classification */}
        <section id="site-class" className="scroll-mt-[100px] py-24 lg:py-32 border-t border-gray-100 flex flex-col md:flex-row items-center gap-16 lg:gap-24">
          <div className="w-full md:w-1/2 relative aspect-[4/3] rounded-sm overflow-hidden bg-gray-100 shadow-sm group">
            <Image 
              src="/residential-soil-testing-sydney.jpg" 
              alt="Residential site classification and soil testing in Sydney by SFGEO." 
              fill 
              className="object-cover transition-transform duration-1000 ease-in-out group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
              <p className="text-white text-sm md:text-base font-semibold tracking-widest uppercase">
                Residential Site Classification | Sydney
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-light tracking-tight font-montserrat text-slate-950 mb-6">Site Classification & Soil Reports for Homeowners</h2>
            <p className="text-lg text-gray-600 font-light leading-loose mb-8">
              Most people know it as a "soil report" or "geotechnical report"—in engineering terms, it's a Site Classification. Whether you are planning a simple house extension, a granny flat, a duplex, or a high-end architecturally designed home, we know Sydney ground conditions. We provide the site-specific AS2870 classifications and soil parameters to support your structural engineer’s footing design, helping your DA or CDC documentation pathway move forward with less guesswork.
            </p>
            <motion.div variants={fadeIn}>
              <Link href="/contact" 
                className="inline-flex items-center px-8 py-3.5 bg-forest-green text-white text-sm font-semibold tracking-wide rounded-full shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 hover:bg-forest-green/90 mb-2"
              >
                Get a Fixed-Fee Quote
              </Link>
            </motion.div>
            <ExpandableDetails 
              title="View Scope: AS2870, Lot Classifications & Testing"
              items={[
                "AS2870 Site & Lot Classifications for residential sites (Class A, S, M, H1, H2, E, and P)",
                "Soil profiling, Plasticity Index, and Salinity testing",
                "Surface reactivity and abnormal moisture observations",
                "Allowable bearing pressure parameters for residential basements and dwelling standards"
              ]}
            />
          </div>
        </section>

        {/* Block 2: Geotechnical Investigation */}
        <section id="investigation" className="scroll-mt-[100px] py-24 lg:py-32 border-t border-gray-100 flex flex-col md:flex-row-reverse items-center gap-16 lg:gap-24">
          <div className="w-full md:w-1/2 relative aspect-[4/3] rounded-sm overflow-hidden bg-gray-100 shadow-sm group">
            <Image 
              src="/service-investigation-detail.png" 
              alt="Comprehensive geotechnical subsurface investigations for commercial and residential projects." 
              fill 
              className="object-cover transition-transform duration-1000 ease-in-out group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
              <p className="text-white text-sm md:text-base font-semibold tracking-widest uppercase">
                Geotechnical Investigations | Commercial & Residential
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-light tracking-tight font-montserrat text-slate-950 mb-6">Comprehensive Geotechnical Investigations</h2>
            <p className="text-lg text-gray-600 font-light leading-loose mb-8">
              Built from real, ground-up experience spanning the trades, drilling, and senior engineering, we understand what is happening below your site surface. From our Sydney team, we carry out comprehensive geotechnical investigations for residential, commercial, and land development projects. We define subsurface conditions through boreholes and test pits, providing reliable parameters to support foundation design, excavation planning, and site remediation.
            </p>
            <motion.div variants={fadeIn}>
              <Link href="/contact" 
                className="inline-flex items-center px-8 py-3.5 bg-slate-black text-white text-sm font-semibold tracking-wide rounded-full shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 hover:bg-slate-800 mb-2"
              >
                Discuss Your Site With an Engineer
              </Link>
            </motion.div>
            <ExpandableDetails 
              title="View Scope: Boreholes, Slope Stability & Soil Testing"
              items={[
                "Deep borehole drilling, test pits, rock coring, and sampling",
                "Slope stability, landslip assessments, and rock face analysis",
                "Dynamic Cone Penetrometer (DCP) tests and California Bearing Ratio (CBR) testing",
                "Hydraulic conductivity, pavement investigations, and remediation guidance",
                "Groundwater observations (at the time of investigation)"
              ]}
            />
          </div>
        </section>

        {/* Block 3: Construction Phase Support */}
        <section id="inspections" className="scroll-mt-[100px] py-24 lg:py-32 border-t border-gray-100 flex flex-col md:flex-row items-center gap-16 lg:gap-24">
          <div className="w-full md:w-1/2 relative aspect-[4/3] rounded-sm overflow-hidden bg-gray-100 shadow-sm group">
            <Image 
              src="/service-construction-detail.jpg" 
              alt="Rapid response construction phase support and footing inspections in Greater Sydney." 
              fill 
              className="object-cover transition-transform duration-1000 ease-in-out group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
              <p className="text-white text-sm md:text-base font-semibold tracking-widest uppercase">
                Construction Phase Inspections | Rapid Response
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-light tracking-tight font-montserrat text-slate-950 mb-6">Construction Phase Support & Inspections</h2>
            <p className="text-lg text-gray-600 font-light leading-loose mb-8">
              We know that open trenches and idle machinery cost our local builders money. We provide highly responsive, practical site support across Greater Sydney. By delivering timely geotechnical site assessment findings and verification during the build, we help reduce avoidable delays and keep works progressing safely on site.
            </p>
            <motion.div variants={fadeIn}>
              <Link href="/contact" 
                className="inline-flex items-center px-8 py-3.5 bg-forest-green text-white text-sm font-semibold tracking-wide rounded-full shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 hover:bg-forest-green/90 mb-2"
              >
                Book a Site Inspection
              </Link>
            </motion.div>
            <ExpandableDetails 
              title="View Scope: Footings, Pier, Pile & Crane Inspections"
              items={[
                "Footing, pier, pile, and trench inspections",
                "Retaining wall foundation inspections",
                "Proof rolling, compaction testing, and engineered fill verification (AS3798)",
                "Initial and final subgrade assessment, base course inspections",
                "Subgrade and working platform verification for Mobile Roof Cranes (MRC), concrete boom pumps, and scaffolding setup",
                "Piling platform and temporary working platform verification"
              ]}
            />
          </div>
        </section>

        {/* Block 4: Geotechnical Inputs for Complex Design */}
        <section id="design" className="scroll-mt-[100px] py-24 lg:py-32 border-t border-gray-100 flex flex-col md:flex-row-reverse items-center gap-16 lg:gap-24">
          <div className="w-full md:w-1/2 relative aspect-[4/3] rounded-sm overflow-hidden bg-gray-100 shadow-sm group">
            <Image 
              src="/partner-network.jpg" 
              alt="Reliable geotechnical design parameters and inputs for complex structural engineering." 
              fill 
              className="object-cover transition-transform duration-1000 ease-in-out group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
              <p className="text-white text-sm md:text-base font-semibold tracking-widest uppercase">
                Geotechnical Design | Design Parameters
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-light tracking-tight font-montserrat text-slate-950 mb-6">Geotechnical Inputs for Complex Design</h2>
            <p className="text-lg text-gray-600 font-light leading-loose mb-8">
              We partner with top structural and civil engineers, supplying the critical foundational data they rely on. We do not provide the structural design ourselves; instead, we deliver the site-specific geotechnical inputs and parameters your design team may use to engineer safe, efficient, and commercially sensible solutions for complex builds.
            </p>
            <motion.div variants={fadeIn}>
              <Link href="/contact" 
                className="inline-flex items-center px-8 py-3.5 bg-slate-black text-white text-sm font-semibold tracking-wide rounded-full shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 hover:bg-slate-800 mb-2"
              >
                Request Design Parameters
              </Link>
            </motion.div>
            <ExpandableDetails 
              title="View Scope: Pavement, Piling & Retaining Wall Inputs"
              items={[
                "Geotechnical parameters for pavement design and remediation",
                "Soil parameters and bearing capacities for retaining wall design",
                "Subgrade inputs for piling platforms and temporary working platforms",
                "Geotechnical verification parameters to support third-party footing, pile, and pier designs"
              ]}
            />
          </div>
        </section>

        {/* Block 5: Our Trusted Partner Network */}
        <section id="partners" className="scroll-mt-[100px] py-24 lg:py-32 border-t border-gray-100 flex flex-col md:flex-row items-center gap-16 lg:gap-24">
          <div className="w-full md:w-1/2 relative aspect-[4/3] rounded-sm overflow-hidden bg-gray-100 shadow-sm group">
            <Image 
              src="/service-partner-detail-new.png" 
              alt="SFGEO's trusted partner network of Sydney structural engineers, civil engineers, and environmental consultants." 
              fill 
              className="object-cover transition-transform duration-1000 ease-in-out group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
              <p className="text-white text-sm md:text-base font-semibold tracking-widest uppercase">
                Get in contact with our trusted partner network
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-light tracking-tight font-montserrat text-slate-950 mb-6">Our Trusted Partner Network</h2>
            <p className="text-lg text-gray-600 font-light leading-loose mb-8">
              As a proudly Sydney-bred small business, we believe in supporting the local ecosystem. Over the years, we have built a trusted network of highly reputable professionals who understand how to utilize precise, practical geotechnical data. If your project needs a collaborative team, we are happy to make a tailored introduction.
            </p>
            <motion.div variants={fadeIn}>
              <Link href="/contact" 
                className="inline-flex items-center px-8 py-3.5 bg-forest-green text-white text-sm font-semibold tracking-wide rounded-full shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 hover:bg-forest-green/90 mb-2"
              >
                Explore Our Network
              </Link>
            </motion.div>
            <ExpandableDetails 
              title="View Our Network Expertise"
              items={[
                "Structural Engineers & Architects",
                "Civil & Hydrological Engineers",
                "Land Surveyors & Environmental Consultants",
                "Select heavy-duty trades"
              ]}
            />
          </div>
        </section>

      <ServiceAreaBlock pageType="services" />

      </div>
    </div>
  );
}
