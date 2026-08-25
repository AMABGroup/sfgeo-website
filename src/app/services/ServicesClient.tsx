"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/outline";
import ServiceAreaBlock from "@/components/sections/ServiceAreaBlock";
import ImageOverlay from "@/components/ui/ImageOverlay";
import { OverlayGroup } from "@/components/ui/OverlayGroup";

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
        <div className="flex flex-col gap-10">
          
          {/* Row 1: Social Links */}
          

          {/* Row 2: H1 + CTAs */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">
            {/* H1 */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left flex-1">
              <h1 className="text-4xl sm:text-5xl font-montserrat font-light tracking-tight text-slate-950 max-w-4xl mb-0 leading-tight w-full">
                Geotechnical Services<br />
                Across <span className="font-semibold">Sydney Metro</span>
              </h1>
              
              <div className="w-[96px] h-[3px] bg-forest-green mt-5 mb-5 mx-auto lg:mx-0"></div>
              
              {/* Mobile CTAs sit here above subhead */}
              <div className="lg:hidden flex flex-col items-center gap-4 w-full mb-8">
                <Link 
                  href="/contact" 
                  className="flex items-center justify-center px-5 py-2.5 bg-gradient-to-b from-[#346b43] to-forest-green text-white rounded-full shadow-[0_8px_20px_-6px_rgba(45,90,58,0.4)] hover:shadow-[0_12px_24px_-8px_rgba(45,90,58,0.6)] hover:brightness-105 transition-all hover:-translate-y-0.5 w-[70%] sm:w-[240px] h-[46px]"
                >
                  <span className="text-xs font-semibold tracking-wide">Discuss your project</span>
                </Link>
                <Link 
                  href="tel:+61423483555" 
                  className="flex items-center justify-center px-5 py-2.5 bg-white text-forest-green rounded-full shadow-[inset_0_0_0_1px_rgba(45,90,58,0.25),0_4px_10px_-4px_rgba(0,0,0,0.05)] hover:bg-forest-green/5 hover:shadow-[inset_0_0_0_1px_rgba(45,90,58,0.4),0_6px_14px_-4px_rgba(0,0,0,0.1)] transition-all hover:-translate-y-0.5 w-[70%] sm:w-[240px] h-[46px]"
                >
                  <span className="text-xs font-semibold tracking-wide">Request a quote</span>
                </Link>
              </div>

              <p className="text-xl text-gray-500 font-light leading-relaxed max-w-2xl mb-8 lg:mb-0 w-full">


              Based in Marrickville and mobilising 4WD across the Sydney Metro, we bring infrastructure-grade geotechnical expertise to residential and commercial projects. Delivered with the personal attention that only an independent, locally-owned practice can offer.<br/><br/>Every service is scoped and delivered by our Principal. No subcontracted fieldwork, no templated reports. Site-specific data, signed by the Engineer who was on your ground.
            
              
              </p>
            </div>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex flex-row items-center gap-4 shrink-0">
              <Link 
                href="/contact" 
                className="flex items-center justify-center px-5 py-2.5 bg-gradient-to-b from-[#346b43] to-forest-green text-white rounded-full shadow-[0_8px_20px_-6px_rgba(45,90,58,0.4)] hover:shadow-[0_12px_24px_-8px_rgba(45,90,58,0.6)] hover:brightness-105 transition-all hover:-translate-y-0.5 w-[240px] h-[46px]"
              >
                <span className="text-xs font-semibold tracking-wide">Discuss your project</span>
              </Link>
              <Link 
                href="tel:+61423483555" 
                className="flex items-center justify-center px-5 py-2.5 bg-white text-forest-green rounded-full shadow-[inset_0_0_0_1px_rgba(45,90,58,0.25),0_4px_10px_-4px_rgba(0,0,0,0.05)] hover:bg-forest-green/5 hover:shadow-[inset_0_0_0_1px_rgba(45,90,58,0.4),0_6px_14px_-4px_rgba(0,0,0,0.1)] transition-all hover:-translate-y-0.5 w-[240px] h-[46px]"
              >
                <span className="text-xs font-semibold tracking-wide">Request a quote</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Content Blocks */}
      <OverlayGroup>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-32">
          
          <section id="site-class" className="scroll-mt-[100px] py-24 lg:py-32 border-t border-gray-100 flex flex-col md:flex-row items-center gap-16 lg:gap-24">
            <div className="w-full md:w-1/2 relative aspect-[4/3] rounded-sm overflow-hidden bg-gray-100 shadow-sm group">
              <Image 
                src="/residential-soil-testing-sydney.webp" 
                alt="Residential site classification and soil testing in Sydney by SFGEO." 
                title="Residential soil testing and site classification in Sydney - SFGEO"
                fill 
                className="object-cover transition-transform duration-1000 ease-in-out group-hover:scale-105" 
              />
              <ImageOverlay hoverShow tracking="tracking-widest">
                Residential Site Classification | Sydney
              </ImageOverlay>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-light tracking-tight font-montserrat text-slate-950 mb-6">Site Classification & Soil Reports for Homeowners, Builders & Designers</h2>
              <p className="text-lg text-gray-600 font-light leading-loose mb-8">
                Most people call it a "soil report." In engineering terms, it's a Site Classification — the AS2870 assessment that tells your structural engineer what footing system your ground will support. Whether it's an extension, a granny flat, a duplex, or an architect-designed home, we deliver site-specific classifications that move your DA or CDC pathway forward with less guesswork.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Link href="/site-classification" 
                  className="inline-flex items-center justify-center px-8 py-2.5 bg-forest-green text-white text-sm font-semibold tracking-wide rounded-full shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 hover:bg-forest-green/90 h-[46px]"
                >
                  Explore Site Classifications →
                </Link>
                <Link href="/contact" 
                  className="inline-flex items-center justify-center px-8 py-2.5 bg-white text-forest-green text-sm font-semibold tracking-wide rounded-full shadow-[inset_0_0_0_1px_rgba(45,90,58,0.25)] hover:shadow-md transition-all hover:-translate-y-0.5 h-[46px]"
                >
                  Get a Fixed-Fee Quote
                </Link>
              </div>
            </div>
          </section>

          {/* Block 2: Geotechnical Investigation */}
          <section id="investigation" className="scroll-mt-[100px] py-24 lg:py-32 border-t border-gray-100 flex flex-col md:flex-row-reverse items-center gap-16 lg:gap-24">
            <div className="w-full md:w-1/2 relative aspect-[4/3] rounded-sm overflow-hidden bg-gray-100 shadow-sm group">
              <Image 
                src="/service-investigation-detail.png" 
                alt="Comprehensive geotechnical subsurface investigations for commercial and residential projects." 
                title="Geotechnical subsurface investigation for Sydney commercial and residential sites"
                fill 
                className="object-cover transition-transform duration-1000 ease-in-out group-hover:scale-105" 
              />
              <ImageOverlay hoverShow tracking="tracking-widest">
                Geotechnical Investigations | Commercial & Residential
              </ImageOverlay>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-light tracking-tight font-montserrat text-slate-950 mb-6">Comprehensive Geotechnical & Pavement Investigations</h2>
              <p className="text-lg text-gray-600 font-light leading-loose mb-8">
                Built from real, ground-up experience spanning the trades, drilling, and senior engineering, we understand what is happening below your site surface. From our Sydney team, we carry out comprehensive geotechnical investigations for residential, commercial, and land development projects. We define subsurface conditions through boreholes and test pits, providing reliable parameters to support foundation design, excavation planning, and site remediation.
              </p>
              <motion.div variants={fadeIn}>
                <Link href="/contact" 
                  className="inline-flex items-center justify-center px-8 py-2.5 bg-slate-black text-white text-sm font-semibold tracking-wide rounded-full shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 hover:bg-slate-800 mb-2 h-[46px]"
                >
                  Discuss Your Site With an Engineer
                </Link>
                <p className="mt-3">
                  <Link href="/geotechnical-investigations" className="text-sm font-medium text-forest-green hover:underline">
                    Explore geotechnical investigations in detail &rarr;
                  </Link>
                </p>
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
                title="Geotechnical construction phase support and footing inspection in Sydney"
                fill 
                className="object-cover transition-transform duration-1000 ease-in-out group-hover:scale-105" 
              />
              <ImageOverlay hoverShow tracking="tracking-widest">
                Construction Phase Inspections | Rapid Response
              </ImageOverlay>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-light tracking-tight font-montserrat text-slate-950 mb-6">Construction Phase Support, Site Inspections & Testing</h2>
              <p className="text-lg text-gray-600 font-light leading-loose mb-8">
                We know that open trenches and idle machinery cost our local builders money. We provide highly responsive, practical site support across Greater Sydney. By delivering timely geotechnical site assessment findings and verification during the build, we help reduce avoidable delays and keep works progressing safely on site.
              </p>
              <motion.div variants={fadeIn}>
                <Link href="/contact" 
                  className="inline-flex items-center justify-center px-8 py-2.5 bg-forest-green text-white text-sm font-semibold tracking-wide rounded-full shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 hover:bg-forest-green/90 mb-2 h-[46px]"
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
                title="Geotechnical design parameters for complex structural and civil engineering"
                fill 
                className="object-cover transition-transform duration-1000 ease-in-out group-hover:scale-105" 
              />
              <ImageOverlay hoverShow tracking="tracking-widest">
                Geotechnical Design | Design Parameters
              </ImageOverlay>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-light tracking-tight font-montserrat text-slate-950 mb-6">Geotechnical Design & Parameters</h2>
              <p className="text-lg text-gray-600 font-light leading-loose mb-8">
                We partner with top structural and civil engineers, supplying the critical foundational data they rely on. We do not provide the structural design ourselves; instead, we deliver the site-specific geotechnical inputs and parameters your design team may use to engineer safe, efficient, and commercially sensible solutions for complex builds.
              </p>
              <motion.div variants={fadeIn}>
                <Link href="/contact" 
                  className="inline-flex items-center justify-center px-8 py-2.5 bg-slate-black text-white text-sm font-semibold tracking-wide rounded-full shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 hover:bg-slate-800 mb-2 h-[46px]"
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
                src="/commercial-geotechnical-eastern-creek-light-horse.jpeg" 
                alt="SFGEO's trusted partner network of Sydney structural engineers, civil engineers, and environmental consultants." 
                title="SFGEO partner network: structural engineers and environmental consultants in Sydney"
                fill 
                className="object-cover transition-transform duration-1000 ease-in-out group-hover:scale-105" 
              />
              <ImageOverlay hoverShow tracking="tracking-widest">
                Get in contact with our trusted partner network
              </ImageOverlay>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-light tracking-tight font-montserrat text-slate-950 mb-6">Our Trusted Partner Network</h2>
              <p className="text-lg text-gray-600 font-light leading-loose mb-8">
                As a proudly Sydney-bred independent practice, we believe in supporting the local ecosystem. Over the years, we have built a trusted network of highly reputable professionals who understand how to use precise, practical geotechnical data. If your project needs a collaborative team, we are happy to make a site-specific introduction.
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
      </OverlayGroup>
    </div>
  );
}
