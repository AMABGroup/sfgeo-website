"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeftIcon, PlusIcon, MinusIcon } from "@heroicons/react/24/outline";

function ExpandableDetails({ title, items }: { title: string, items: string[] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-10 border-t border-gray-100 pt-6">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 text-[13px] font-bold tracking-widest text-forest-green hover:text-slate-black transition-colors uppercase group w-full text-left"
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
            <ul className="pt-6 pb-2 space-y-4 font-medium text-[15px] text-slate-black pl-2">
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

export default function ServicesHubPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  return (
    <div className="bg-white text-slate-black font-inter min-h-screen">
      
      <section className="pt-32 pb-16 px-6 lg:px-12 max-w-7xl mx-auto">
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          
          {/* Single horizontal row for header signature */}
          <motion.div variants={fadeIn} className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 pb-10 border-b border-gray-100">
            <h3 className="text-[11px] font-bold tracking-[0.2em] text-forest-green uppercase m-0 max-w-sm">
              LOCALLY OWNED • INDEPENDENT • SYDNEY BASED
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
                <span className="text-xs font-semibold text-slate-black tracking-wide">Connect on LinkedIn</span>
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
                <span className="text-xs font-semibold text-slate-black tracking-wide">Follow on Instagram</span>
              </a>
            </div>
          </motion.div>

          <motion.h1 
            variants={fadeIn} 
            className="text-4xl sm:text-5xl font-montserrat font-bold tracking-tight text-slate-black max-w-4xl"
          >
            Geotechnical Engineering Services
          </motion.h1>
        </motion.div>
      </section>

      {/* Content Blocks */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-32">
        
        {/* Block 1: Site Investigations & Soil Reports (Image Left / Text Right) */}
        <section id="site-class" className="scroll-mt-[100px] py-24 lg:py-32 border-t border-gray-100 flex flex-col md:flex-row items-center gap-16 lg:gap-24">
          <div className="w-full md:w-1/2 relative aspect-[4/3] rounded-sm overflow-hidden bg-gray-100 shadow-sm group">
            <Image 
              src="/service-investigation-detail.jpg" 
              alt="Site Investigations & Soil Reports" 
              fill 
              className="object-cover transition-transform duration-1000 ease-in-out group-hover:scale-105" 
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-montserrat font-bold text-slate-black mb-6">Site Investigations & Soil Reports</h2>
            <p className="text-lg text-gray-600 font-light leading-loose">
              We provide the technical certainty required before you break ground. From architectural home sites to larger developments, we translate complex soil data into clear foundation design and excavation guidance.
            </p>
            <ExpandableDetails 
              title="Technical Details"
              items={[
                "Geotechnical Investigation",
                "Soil Reports",
                "Site Classification (AS 2870)",
                "Pavement Investigation",
                "and related testing"
              ]}
            />
          </div>
        </section>

        {/* Block 2: Construction Phase Support (Text Left / Image Right) */}
        <section id="inspections" className="scroll-mt-[100px] py-24 lg:py-32 border-t border-gray-100 flex flex-col md:flex-row-reverse items-center gap-16 lg:gap-24">
          <div className="w-full md:w-1/2 relative aspect-[4/3] rounded-sm overflow-hidden bg-gray-100 shadow-sm group">
            <Image 
              src="/service-construction-detail.jpg" 
              alt="Construction Phase Support" 
              fill 
              className="object-cover transition-transform duration-1000 ease-in-out group-hover:scale-105" 
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-montserrat font-bold text-slate-black mb-6">Construction Phase Support</h2>
            <p className="text-lg text-gray-600 font-light leading-loose">
              Keep your site moving. We provide rapid, on-site verification for footings, piers, and piles, giving builders the technical sign-offs needed to avoid downtime and maintain project momentum.
            </p>
            <ExpandableDetails 
              title="Technical Details"
              items={[
                "Footing & Pile Inspections",
                "Proof Rolls (AS 3798)",
                "Bearing Capacity Checks",
                "Crane/Pump Setup Checks",
                "and more"
              ]}
            />
          </div>
        </section>

        {/* Block 3: Contractor & Commercial Support (Image Left / Text Right) */}
        <section id="geotech" className="scroll-mt-[100px] py-24 lg:py-32 border-t border-gray-100 flex flex-col md:flex-row items-center gap-16 lg:gap-24">
          <div className="w-full md:w-1/2 relative aspect-[4/3] rounded-sm overflow-hidden bg-gray-100 shadow-sm group">
            <Image 
              src="/service-commercial-detail.jpg" 
              alt="Contractor & Commercial Support" 
              fill 
              className="object-cover transition-transform duration-1000 ease-in-out group-hover:scale-105" 
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-montserrat font-bold text-slate-black mb-6">Contractor & Commercial Support</h2>
            <p className="text-lg text-gray-600 font-light leading-loose">
              Practical geotechnical support for complex site operations. We specialise in heavy-duty temporary works like piling platform design and commercial borehole drilling to keep high-capacity projects safe and compliant.
            </p>
            <ExpandableDetails 
              title="Technical Details"
              items={[
                "Piling Platform Design & Verification",
                "Borehole Drilling",
                "Rock Coring",
                "Pavement Design",
                "and more"
              ]}
            />
          </div>
        </section>

        {/* Block 4: Professional Partner Network (Text Left / Image Right) */}
        <section id="partners" className="scroll-mt-[100px] py-24 lg:py-32 border-t border-gray-100 flex flex-col md:flex-row-reverse items-center gap-16 lg:gap-24">
          <div className="w-full md:w-1/2 relative aspect-[4/3] rounded-sm overflow-hidden bg-gray-100 shadow-sm group">
            <Image 
              src="/service-partner-detail.jpg" 
              alt="Professional Partner Network" 
              fill 
              className="object-cover transition-transform duration-1000 ease-in-out group-hover:scale-105" 
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-montserrat font-bold text-slate-black mb-6">Professional Partner Network</h2>
            <p className="text-lg text-gray-600 font-light leading-loose">
              A coordinated project is a successful one. We connect our clients with a proven network of structural engineers, surveyors, and specialists we’ve trusted over 15 years of Sydney project experience.
            </p>
            <ExpandableDetails 
              title="Our Network"
              items={[
                "Structural Engineers",
                "Land Surveyors",
                "Environmental Consultants",
                "Specialised trades"
              ]}
            />
          </div>
        </section>

      </div>
    </div>
  );
}
