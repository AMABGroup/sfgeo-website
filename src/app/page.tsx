"use client";

import { useState } from "react";
import { homeFaqs } from "@/data/faqs";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import GoogleReviews from "@/components/ui/GoogleReviews";
import QuickQuoteCard from "@/components/forms/QuickQuoteCard";
import ServiceAreaBlock from "@/components/sections/ServiceAreaBlock";

export default function Home() {

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white text-slate-950 font-inter selection:bg-forest-green selection:text-white">
      {/* ArchDaily Minimal Hero Section */}
      <section className="relative px-6 lg:px-12 py-32 min-h-[90vh] flex flex-col justify-center overflow-hidden">
        {/* Full Bleed Background Image with Subtle Gradient */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/img_0078_v3.png"
            alt="Sydney geotechnical engineer site assessment — SFGEO"
            title="Sydney geotechnical engineer conducting site assessment - SFGEO"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/60 to-white/95" />
          {/* Structural Plan line-art overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(45,90,58,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(45,90,58,0.2)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none mix-blend-multiply" />
        </div>
        
        <div className="mx-auto max-w-7xl relative z-10 w-full">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col lg:flex-row lg:items-center justify-between gap-10"
          >
            {/* H1 and Subhead Block */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left flex-1 max-w-3xl">
              <motion.p variants={fadeIn} className="text-sm uppercase tracking-[0.2em] text-forest-green mb-6 font-semibold">
                Sydney, Australia
              </motion.p>
              <motion.h1 
                variants={fadeIn}
                className="text-5xl tracking-tight sm:text-7xl font-montserrat font-light text-slate-950 leading-[1.1] mb-8"
              >
                Geotechnical. <br />
                <span className="font-semibold">Done Properly.</span>
              </motion.h1>
              <div className="w-[96px] h-[3px] bg-forest-green mt-5 mb-5 mx-auto lg:mx-0"></div>
              
              {/* Mobile CTAs */}
              <motion.div variants={fadeIn} className="lg:hidden flex flex-col items-center gap-4 w-full mb-8">
                <Link
                  href="/contact?subject=site-inspection"
                  className="flex items-center justify-center px-5 py-2.5 bg-gradient-to-b from-[#346b43] to-forest-green text-white rounded-full shadow-[0_8px_20px_-6px_rgba(45,90,58,0.4)] hover:shadow-[0_12px_24px_-8px_rgba(45,90,58,0.6)] hover:brightness-105 transition-all hover:-translate-y-0.5 w-[70%] sm:w-[240px] h-[46px]"
                >
                  <span className="text-xs font-semibold tracking-wide">Request an Inspection</span>
                </Link>
                <Link
                  href="/contact?subject=b2b-enquiry"
                  className="flex items-center justify-center px-5 py-2.5 bg-white text-forest-green rounded-full shadow-[inset_0_0_0_1px_rgba(45,90,58,0.25),0_4px_10px_-4px_rgba(0,0,0,0.05)] hover:bg-forest-green/5 hover:shadow-[inset_0_0_0_1px_rgba(45,90,58,0.4),0_6px_14px_-4px_rgba(0,0,0,0.1)] transition-all hover:-translate-y-0.5 w-[70%] sm:w-[240px] h-[46px]"
                >
                  <span className="text-xs font-semibold tracking-wide">B2B Enquiries</span>
                </Link>
              </motion.div>

              <motion.p variants={fadeIn} className="text-lg sm:text-xl text-gray-600 font-light leading-relaxed mb-6 max-w-3xl w-full">
                Solid Foundation Geotechnical is a locally-owned, independent Sydney consultancy. Built on local expertise, we are your trusted consulting engineers. There from discussing ideas with your architect to the day your slab is poured, making sure it's built right.
              </motion.p>
            </div>

            {/* Desktop enquiry card */}
            <motion.div variants={fadeIn} className="hidden lg:flex flex-col items-center gap-4 shrink-0">
              <QuickQuoteCard source="homepage hero" />
              <Link
                href="/contact?subject=b2b-enquiry"
                className="text-xs font-semibold tracking-wide text-forest-green hover:underline"
              >
                B2B and subcontract enquiries &rarr;
              </Link>
            </motion.div>

          </motion.div>
        </div>
      </section>


      {/* Main Service Sections */}
      <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-8"
        >
          <div>
            <motion.h2 variants={fadeIn} className="text-3xl font-light tracking-tight sm:text-4xl font-montserrat">
              Geotechnical Services | <span className="font-semibold">Drilling Services</span>
            </motion.h2>
            <motion.div variants={fadeIn} className="mt-4 h-px bg-forest-green w-12" />
          </div>
          <motion.p variants={fadeIn} className="text-sm text-gray-500 max-w-md font-light">
            Expert engineering guidance for Sydney’s residential and commercial projects, from initial soil testing to final construction sign-offs.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
          
          {/* Pillar 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group flex flex-col h-full bg-white border border-gray-100 p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300"
          >
            <div className="relative h-32 mb-6 overflow-hidden rounded-lg bg-gray-100 flex-shrink-0">
              <Image 
                src="/clay-sample.webp" 
                alt="Residential soil sample AS2870 site classification Sydney" 
                fill 
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <h3 className="text-xl font-montserrat font-semibold mb-3 tracking-tight">Preliminary Site Works</h3>
            <p className="text-sm text-gray-600 font-light leading-relaxed flex-grow mb-6">
              Essential soil testing for residential projects—from new homes and extensions to granny flats and in-ground pools. We deliver fast, accurate <Link href="/site-classification" className="text-forest-green hover:underline font-medium relative z-10">Site Classifications (AS2870)</Link> and Geotechnical Investigations (AS1726). We provide clear foundation advice and the geotechnical reporting necessary to support DA and CDC pathways, partnering directly with homeowners, architects, and builders to get projects out of the ground.
            </p>
            <Link 
              href="/services" 
              className="mt-auto text-sm font-medium tracking-wide flex items-center gap-1.5 text-slate-950 hover:text-forest-green transition-colors group/link after:absolute after:inset-0 after:z-0"
              title="Learn more about our Preliminary Site Works & Soil Testing Services in Sydney"
              aria-label="Explore Preliminary Site Works"
            >
              <span className="relative overflow-hidden z-10">
                Explore Preliminary Works
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-forest-green transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover/link:scale-x-100" />
              </span>
            </Link>
          </motion.div>

          {/* Pillar 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group flex flex-col h-full bg-white border border-gray-100 p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300"
          >
            <div className="relative h-32 mb-6 overflow-hidden rounded-lg bg-gray-100 flex-shrink-0">
              <Image 
                src="/construction-support.jpg" 
                alt="Geotechnical construction phase inspection Sydney footing" 
                title="Geotechnical engineer performing footing inspection on a Sydney construction site"
                fill 
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <h3 className="text-xl font-montserrat font-semibold mb-3 tracking-tight">Construction Phase Support</h3>
            <p className="text-sm text-gray-600 font-light leading-relaxed flex-grow mb-6">
              Keep your site moving safely. We provide rapid, on-site geotechnical inspections for footings, piers, retaining walls, and engineered fill (AS3798). Whether you are a local builder needing a quick proof roll or a structural engineer requiring verified bearing capacity data, we deliver practical, plain-English advice when it matters most to avoid heavy downtime.
            </p>
            <Link 
              href="/services#inspections" 
              className="mt-auto text-sm font-medium tracking-wide flex items-center gap-1.5 text-slate-950 hover:text-forest-green transition-colors group/link after:absolute after:inset-0 after:z-0"
              title="Learn more about our Geotechnical Inspections and Construction Phase Support in Sydney"
              aria-label="Explore Construction Phase Support"
            >
              <span className="relative overflow-hidden z-10">
                Explore Construction Support
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-forest-green transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover/link:scale-x-100" />
              </span>
            </Link>
          </motion.div>

          {/* Pillar 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group flex flex-col h-full bg-white border border-gray-100 p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300"
          >
            <div className="relative h-32 mb-6 overflow-hidden rounded-lg bg-gray-100 flex-shrink-0">
              <Image 
                src="/rw-design.png" 
                alt="Geotechnical design parameters retaining wall Sydney" 
                title="Geotechnical design parameters for retaining walls - Sydney project"
                fill 
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <h3 className="text-xl font-montserrat font-semibold mb-3 tracking-tight">Geotechnical Design</h3>
            <p className="text-sm text-gray-600 font-light leading-relaxed flex-grow mb-6">
              Providing the critical foundational data that structural and civil engineers rely on. From precise soil parameters to pile design inputs and retaining wall design parameters, we equip your team with the reliable geotechnical metrics required for technically demanding structures. We also provide working platform assessments to support safe temporary works planning.
            </p>
            <Link 
              href="/services#design" 
              className="mt-auto text-sm font-medium tracking-wide flex items-center gap-1.5 text-slate-950 hover:text-forest-green transition-colors group/link after:absolute after:inset-0 after:z-0"
              title="Learn more about our Geotechnical Design, Pile Design, and Foundation Parameters in Sydney"
              aria-label="Explore Geotechnical Design"
            >
              <span className="relative overflow-hidden z-10">
                Explore Geotechnical Design
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-forest-green transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover/link:scale-x-100" />
              </span>
            </Link>
          </motion.div>

          {/* Pillar 4 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="group flex flex-col h-full bg-white border border-gray-100 p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300"
          >
            <div className="relative h-32 mb-6 overflow-hidden rounded-lg bg-gray-100 flex-shrink-0">
              <Image 
                src="/drilling-bh.png" 
                alt="4WD borehole drilling geotechnical investigation Sydney" 
                title="4WD mounted drill rig performing borehole drilling in Sydney"
                fill 
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <h3 className="text-xl font-montserrat font-semibold mb-3 tracking-tight">Drilling Services</h3>
            <p className="text-sm text-gray-600 font-light leading-relaxed flex-grow mb-6">
              Our <Link href="/drilling" className="text-forest-green hover:underline font-medium">4WD Mounted Drill Rig</Link> mobilises rapidly across the Sydney Metro. From prestige North Shore sites to tight Inner West terraces. For zero-clearance locations, internal courtyards, and rear-yard investigations, we deploy motorised hand augers and in-situ testing that extract the same quality data without machinery access.
            </p>
            <Link 
              href="/drilling#drilling" 
              className="mt-auto text-sm font-medium tracking-wide flex items-center gap-1.5 text-slate-950 hover:text-forest-green transition-colors group/link after:absolute after:inset-0 after:z-0"
              title="Learn more about our Tight-Access Drilling & Environmental Sampling Services in Sydney Metro"
              aria-label="Explore Drilling Services"
            >
              <span className="relative overflow-hidden z-10">
                Explore Drilling Services
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-forest-green transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover/link:scale-x-100" />
              </span>
            </Link>
          </motion.div>

        </div>
      </section>


{/* Client Success / Testimonials via Glassmorphism */}
      <section className="py-32 relative overflow-hidden bg-slate-200 border-y border-gray-200">
        <div className="absolute inset-0 z-0">
          <Image src="/img_0078_v3.png" alt="Sydney geotechnical engineer site assessment — SFGEO" title="Sydney geotechnical engineering site investigation - SFGEO" fill className="object-cover opacity-60 blur-xl scale-110" />
          <div className="absolute inset-0 bg-slate-100/40 mix-blend-overlay" />
        </div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-12 relative z-10">
           <GoogleReviews />
        </div>
      </section>



      
      {/* Homepage FAQ Section (Big 10) */}
      <section className="py-24 px-6 lg:px-12 max-w-4xl mx-auto">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeIn} className="text-3xl font-light tracking-tight font-montserrat text-slate-950 mb-6">
            Common Questions about Geotechnical Services in Sydney
          </motion.h2>
          <motion.div variants={fadeIn} className="mt-4 h-px bg-forest-green w-12 mx-auto" />
        </motion.div>

        <div className="max-w-4xl mx-auto divide-y divide-gray-100 border-t border-gray-100 mt-8">
          {homeFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="py-6">
                <button 
                  onClick={() => toggleFaq(index)}
                  className={`flex w-full items-center justify-between text-left transition-colors duration-200 ${isOpen ? 'text-forest-green' : 'text-slate-950 hover:text-forest-green'}`}
                  aria-expanded={isOpen}
                >
                  <span className="text-lg font-montserrat font-semibold pr-8">
                    {faq.question}
                  </span>
                  <span className={`p-1.5 rounded-full transition-colors flex-shrink-0 ${isOpen ? 'bg-forest-green/10 text-forest-green' : 'bg-gray-50 text-gray-400 group-hover:bg-gray-100'}`}>
                    {isOpen ? <MinusIcon className="w-5 h-5" /> : <PlusIcon className="w-5 h-5" />}
                  </span>
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
                      <div 
                        className="pt-6 pb-2 text-base text-gray-600 font-light leading-loose"
                        dangerouslySetInnerHTML={{ __html: faq.answer }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      <ServiceAreaBlock pageType="home" />


    </div>
  );
}
