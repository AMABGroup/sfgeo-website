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

export default function DrillingClient() {
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
        <motion.div initial="hidden" animate="visible" variants={stagger} className="flex flex-col gap-10">
          
          {/* Row 1: Social Links */}
          <motion.div variants={fadeIn} className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 w-full border-b border-gray-100 lg:border-none pb-6 lg:pb-0">
            <h3 className="text-[11px] font-bold tracking-[0.2em] text-forest-green uppercase m-0 text-center lg:text-left w-full lg:w-auto">
              FAMILY OWNED • INDEPENDENT • SYDNEY BASED
            </h3>
            <div className="flex flex-row justify-center lg:justify-end gap-3 sm:gap-4 w-full lg:w-auto">
            <a 
              href="https://au.linkedin.com/company/sfgeo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-3 sm:px-5 py-2.5 bg-white border border-gray-200 rounded-full shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 sm:w-[240px] h-[46px] group/link"
            >
              <svg className="w-4 h-4 shrink-0 text-[#0A66C2] transition-transform group-hover/link:scale-110" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.475-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span className="text-[11px] sm:text-xs font-semibold text-slate-950 tracking-wide truncate">
                <span className="hidden sm:inline">Connect on </span>LinkedIn
              </span>
            </a>
            <a 
              href="https://instagram.com/sfgeo.syd" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-3 sm:px-5 py-2.5 bg-white border border-gray-200 rounded-full shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 sm:w-[240px] h-[46px] group/link"
            >
              <svg className="w-4 h-4 shrink-0 text-[#E1306C] transition-transform group-hover/link:scale-110" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
              <span className="text-[11px] sm:text-xs font-semibold text-slate-950 tracking-wide truncate">
                <span className="hidden sm:inline">Follow on </span>Instagram
              </span>
            </a>
            </div>
          </motion.div>

          {/* Row 2: H1 + CTAs */}
          <motion.div variants={fadeIn} className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">
            {/* H1 */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left flex-1">
              <motion.h1 className="text-4xl sm:text-5xl font-montserrat font-light tracking-tight text-slate-950 max-w-4xl mb-0 leading-tight w-full">
                Geotechnical & Environmental<br />
                <span className="font-semibold">Drilling Sydney</span>
              </motion.h1>
              
              <div className="w-[96px] h-[3px] bg-forest-green mt-5 mb-5 mx-auto lg:mx-0"></div>
              
              {/* Mobile CTAs sit here above subhead */}
              <div className="lg:hidden flex flex-col items-center gap-4 w-full mb-8">
                <Link 
                  href="/contact" 
                  className="flex items-center justify-center px-5 py-2.5 bg-gradient-to-b from-[#346b43] to-forest-green text-white rounded-full shadow-[0_8px_20px_-6px_rgba(45,90,58,0.4)] hover:shadow-[0_12px_24px_-8px_rgba(45,90,58,0.6)] hover:brightness-105 transition-all hover:-translate-y-0.5 w-[70%] sm:w-[240px] h-[46px]"
                >
                  <span className="text-xs font-semibold tracking-wide">Request a drilling quote</span>
                </Link>
                <Link 
                  href="tel:+61423483555" 
                  className="flex items-center justify-center px-5 py-2.5 bg-white text-forest-green rounded-full shadow-[inset_0_0_0_1px_rgba(45,90,58,0.25),0_4px_10px_-4px_rgba(0,0,0,0.05)] hover:bg-forest-green/5 hover:shadow-[inset_0_0_0_1px_rgba(45,90,58,0.4),0_6px_14px_-4px_rgba(0,0,0,0.1)] transition-all hover:-translate-y-0.5 w-[70%] sm:w-[240px] h-[46px]"
                >
                  <span className="text-xs font-semibold tracking-wide">Call us directly</span>
                </Link>
              </div>

              <motion.p className="text-xl text-gray-500 font-light leading-relaxed max-w-2xl mb-8 lg:mb-0 w-full">


              Headquartered in Marrickville with rapid mobilisation across the Sydney Metro, we provide specialist drilling and sampling support for environmental consultants, geotechnical firms, and residential projects across Sydney.
            
              
              </motion.p>
            </div>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex flex-row items-center gap-4 shrink-0">
              <Link 
                href="/contact" 
                className="flex items-center justify-center px-5 py-2.5 bg-gradient-to-b from-[#346b43] to-forest-green text-white rounded-full shadow-[0_8px_20px_-6px_rgba(45,90,58,0.4)] hover:shadow-[0_12px_24px_-8px_rgba(45,90,58,0.6)] hover:brightness-105 transition-all hover:-translate-y-0.5 w-[240px] h-[46px]"
              >
                <span className="text-xs font-semibold tracking-wide">Request a drilling quote</span>
              </Link>
              <Link 
                href="tel:+61423483555" 
                className="flex items-center justify-center px-5 py-2.5 bg-white text-forest-green rounded-full shadow-[inset_0_0_0_1px_rgba(45,90,58,0.25),0_4px_10px_-4px_rgba(0,0,0,0.05)] hover:bg-forest-green/5 hover:shadow-[inset_0_0_0_1px_rgba(45,90,58,0.4),0_6px_14px_-4px_rgba(0,0,0,0.1)] transition-all hover:-translate-y-0.5 w-[240px] h-[46px]"
              >
                <span className="text-xs font-semibold tracking-wide">Call us directly</span>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </section>
      {/* Content Blocks */}
      <OverlayGroup>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-32">
          
          {/* Block 1: Borehole Drilling & Rock Coring */}
          <section id="drilling" className="scroll-mt-[100px] py-24 lg:py-32 border-t border-gray-100 flex flex-col md:flex-row items-start gap-16 lg:gap-24">
            <div className="w-full md:w-1/2 relative aspect-[4/3] rounded-sm overflow-hidden bg-gray-100 shadow-sm group">
              <Image 
                src="/residential-soil-testing-drilling-rig.jpeg" 
                alt="Toyota Land Cruiser Drillman rig geotechnical drilling Sydney Metro" 
                title="Geotechnical drilling rig (Toyota Land Cruiser) on a Sydney Metro site"
                fill 
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={75}
                className="object-cover transition-transform duration-1000 ease-in-out group-hover:scale-105" 
              />
              <ImageOverlay hoverShow tracking="tracking-widest">
                Site Classification & <Link href="/services" className="hover:underline">Geotechnical Investigation</Link> Drilling | Sydney Metro
              </ImageOverlay>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-light tracking-tight font-montserrat text-slate-950 mb-8">Borehole Drilling & Rock Coring</h2>
              <div className="text-lg text-gray-600 font-light leading-relaxed space-y-6 mb-10">
                <p>
                  We operate a versatile drilling fleet anchored by agile 4WD ute-mounted rigs, capable of delivering precise borehole drilling and rock coring across a wide range of Sydney ground conditions. Please note that due to the specialised nature of the equipment, all rock coring services require advanced notice for booking and prepayment.
                </p>
                <p>
                  Whether we are coring through <span className="font-medium text-slate-950">Hawkesbury sandstone</span> on the North Shore or investigating Cumberland Plain soils and shale in Western Sydney, we extract the intact rock cores and geotechnical profiles that inform structural engineering decisions. We provide reliable in-situ testing for our own investigations, as well as specialist subcontract drilling and sampling support for other consulting firms requiring reliable field capacity.
                </p>
              </div>
              
              <div className="mb-10">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-slate-black text-white text-sm font-semibold tracking-wide rounded-full hover:bg-slate-800 transition-all hover:-translate-y-0.5 shadow-md h-[46px]"
                >
                  Request Drilling Services
                </Link>
              </div>

              <ExpandableDetails 
                title="View Rig Capabilities: 4WD Rigs, Coring & In-Situ Testing"
                items={[
                  "Agile 4WD ute-mounted drilling rigs for rapid site deployment",
                  "Solid Flight Auger (SFA) and Hollow Stem Auger drilling",
                  "NMLC Rock Coring for precise structural profiling and defect logging",
                  "Standard Penetration Testing (SPT) and Dynamic Cone Penetrometer (DCP)",
                  "Detailed geological logging tailored to complex Sydney site conditions"
                ]}
              />
            </div>
          </section>

          {/* Block 2: Tight-Access & Restricted Access Specialists */}
          <section id="tight-access" className="scroll-mt-[100px] py-24 lg:py-32 border-t border-gray-100 flex flex-col md:flex-row-reverse items-start gap-16 lg:gap-24">
            <div className="w-full md:w-1/2 relative aspect-[4/3] rounded-sm overflow-hidden bg-gray-100 shadow-sm group">
              <Image 
                src="/prelim-investigation.jpg" 
                alt="Restricted access drilling and preliminary geotechnical investigation in Sydney" 
                title="Tight-access geotechnical investigation and preliminary drilling in Sydney"
                fill 
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-1000 ease-in-out group-hover:scale-105" 
              />
              <ImageOverlay hoverShow tracking="tracking-widest">
                Restricted Access & Basement Drilling | Sydney Metro
              </ImageOverlay>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-light tracking-tight font-montserrat text-slate-950 mb-8">Tight & Restricted Access Drilling</h2>
              <div className="text-lg text-gray-600 font-light leading-relaxed space-y-6 mb-10">
                <p>
                  We specialise in narrow, restricted-access urban sites. From the heritage terraces of the Inner West to the steep, tight boundaries of the Eastern Suburbs, access shouldn't compromise your engineering data.
                </p>
                <p>
                  Alongside our standard fleet, we utilize specialised equipment including motorised hand augers, and can deploy track-mounted rigs for highly restricted sites. As with our standard coring operations, tight-access rock coring and track-mounted rigs require advanced notice and prepayment to secure your booking. We extract quality soil and rock samples from difficult-to-reach locations—including basements and zero-clearance environments—while helping minimise disruption to existing structures and finished surfaces.
                </p>
              </div>

              <div className="mb-10">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-slate-black text-white text-sm font-semibold tracking-wide rounded-full hover:bg-slate-800 transition-all hover:-translate-y-0.5 shadow-md h-[46px]"
                >
                  Discuss Your Site Access
                </Link>
              </div>

              <ExpandableDetails 
                title="View Capabilities: Hand Augers, Coring & Track Rigs"
                items={[
                  "Manual and motorised hand augering for restricted-access locations",
                  "Specialised tight-access rock coring",
                  "Access to specialised track-mounted rigs (advance scheduling required)",
                  "Basement and restricted-height drilling operations",
                  "Low-impact setup and practical site protection measures"
                ]}
              />
            </div>
          </section>

          {/* Block 3: Environmental Sampling for PSI/DSI Programs */}
          <section id="environmental" className="scroll-mt-[100px] py-24 lg:py-32 border-t border-gray-100 flex flex-col md:flex-row items-start gap-16 lg:gap-24">
            <div className="w-full md:w-1/2 relative aspect-[4/3] rounded-sm overflow-hidden bg-gray-100 shadow-sm group">
              <Image 
                src="/environmental-soil-groundwater-sampling-rock-logging-geotechnical-engineer.webp" 
                alt="Environmental soil and groundwater sampling PSI DSI fieldwork Sydney" 
                title="Environmental soil and groundwater sampling for PSI/DSI programs in Sydney"
                fill 
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={75}
                className="object-cover transition-transform duration-1000 ease-in-out group-hover:scale-105" 
              />
              <ImageOverlay hoverShow tracking="tracking-widest">
                Environmental Drilling & Sampling | Sydney Metro
              </ImageOverlay>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-light tracking-tight font-montserrat text-slate-950 mb-8">Environmental Sampling for PSI/DSI, VENM/ENM & Waste Classification</h2>
              <div className="text-lg text-gray-600 font-light leading-relaxed space-y-6 mb-10">
                <p>
                  Environmental investigations stall when fieldwork falls short. We provide precise, reliable fieldwork for environmental consultants and project managers undertaking contaminated land assessments.
                </p>
                <p>
                  From former industrial sites in Western Sydney to legacy Inner West properties, we carry out soil and groundwater sampling, monitoring well installation, and field documentation to support intrusive investigation programs. We do not prepare the final contaminated land or regulatory reports; we provide the field data, sampling execution, and chain-of-custody support those assessments rely on.
                </p>
              </div>

              <div className="mb-10">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-slate-black text-white text-sm font-semibold tracking-wide rounded-full hover:bg-slate-800 transition-all hover:-translate-y-0.5 shadow-md h-[46px]"
                >
                  Enquire About Environmental Sampling
                </Link>
              </div>

              <ExpandableDetails 
                title="View Scope: Soil, Groundwater & PSI/DSI Fieldwork"
                items={[
                  "Precision soil sampling for contaminant and hazardous material assessment",
                  "Groundwater monitoring well installation and profiling",
                  "Intrusive fieldwork support for Preliminary & Detailed Site Investigations (PSI/DSI)",
                  "Field data collection aligned with project sampling plans and chain-of-custody requirements"
                ]}
              />
            </div>
          </section>

          {/* Block 4: Subcontract & B2B Drilling */}
          <section id="b2b-drilling" className="scroll-mt-[100px] py-24 lg:py-32 border-t border-gray-100 flex flex-col md:flex-row-reverse items-start gap-16 lg:gap-24">
            <div className="w-full md:w-1/2 relative aspect-[4/3] rounded-sm overflow-hidden bg-gray-100 shadow-sm group">
              <Image 
                src="/4wd-geotechnical-drilling-rig-residential-sydney-mobilisation.jpg" 
                alt="SFGEO 4WD-mounted drill rig on subcontract deployment in Sydney." 
                title="SFGEO 4WD-mounted drill rig mobilising for a Sydney subcontract project"
                fill 
                className="object-cover transition-transform duration-1000 ease-in-out group-hover:scale-105" 
              />
              <ImageOverlay hoverShow tracking="tracking-widest">
                Subcontract & B2B Drilling | Engineers, Developers, Builders
              </ImageOverlay>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-light tracking-tight font-montserrat text-slate-950 mb-8">Rig Capacity for Your Next Project</h2>
              <div className="text-lg text-gray-600 font-light leading-relaxed space-y-6 mb-10">
                <p>
                  Our 4WD-mounted drill rig is available on a subcontract basis to engineering consultancies, civil contractors, and developers who need reliable rig capacity without the overhead of an in-house crew. Rapid mobilisation across the Sydney Metro, experienced drill supervision, and direct engineer oversight on every deployment.
                </p>
                <p>
                  Whether you are scoping boreholes for due diligence, a pavement investigation, or standing piles for a civil contract, we bring the rig, the logs, and the NATA-backed sampling — delivered under your scope or ours.
                </p>
              </div>

              <div className="mb-10">
                <Link
                  href="/contact?subject=Subcontract%20Drilling%20Enquiry"
                  className="inline-flex items-center justify-center gap-2 px-8 py-2.5 bg-gradient-to-b from-[#346b43] to-forest-green text-white text-sm font-semibold tracking-wide rounded-full shadow-[0_8px_20px_-6px_rgba(45,90,58,0.4)] hover:shadow-[0_12px_24px_-8px_rgba(45,90,58,0.6)] hover:brightness-105 transition-all hover:-translate-y-0.5 h-[46px]"
                >
                  Enquire About Subcontract Drilling
                </Link>
              </div>
            </div>
          </section>

        <ServiceAreaBlock pageType="drilling" />

        </div>
      </OverlayGroup>
   </div>
  );
}
