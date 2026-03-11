"use client";

import { useState } from "react";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/outline";
import { AnimatePresence } from "framer-motion";
import { faqs } from "@/data/faqs";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";

export default function Home() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.slice(0, 10).map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const reviews = [
    {
      name: "Marcus T., Architect",
      text: "SFGEO delivered our site classification with exceptional speed. Their bearing capacity assessment was thorough and allowed us to proceed with a complex cantilever design without delays.",
    },
    {
      name: "Sarah L., Homeowner",
      text: "Building our first duplex was stressful, but the team at Solid Foundation made the soil testing phase seamless. They explained the AS2870 standard in plain English. Highly recommended.",
    },
    {
      name: "David K., Commercial Builder",
      text: "We rely on SFGEO for all our construction phase support. Their on-call piling inspections and DCP testing have saved us countless hours of downtime on site. True professionals.",
    }
  ];

  return (
    <div className="bg-white text-slate-black font-inter selection:bg-forest-green selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ArchDaily Minimal Hero Section */}
      <section className="relative px-6 lg:px-12 py-32 min-h-[90vh] flex flex-col justify-center overflow-hidden">
        {/* Full Bleed Background Image with Subtle Gradient */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/img_0078_v3.png"
            alt="Sydney Skyline Dawn"
            fill
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
            className="max-w-3xl"
          >
            <motion.p variants={fadeIn} className="text-sm uppercase tracking-[0.2em] text-forest-green mb-6 font-semibold">
              Sydney, Australia
            </motion.p>
            <motion.h1 
              variants={fadeIn}
              className="text-5xl tracking-tight sm:text-7xl font-montserrat font-light text-slate-black leading-[1.1]"
            >
              Geotechnical Excellence. <br className="hidden sm:block" />
              <span className="font-semibold">Built on Local Expertise.</span>
            </motion.h1>
            <motion.div variants={fadeIn} className="mt-8 h-px bg-slate-black/20 w-1/4" />
            <motion.p variants={fadeIn} className="text-xl sm:text-2xl text-gray-600 font-light leading-relaxed mb-6 max-w-3xl">
              Solid Foundation Geotechnical (SFGEO) is a boutique consultancy. We provide highly specialised, conflict-free soil reporting and structural inspections across Greater Sydney for architects, builders, and elite homeowners.
            </motion.p>
            <motion.div variants={fadeIn} className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <Link
                href="/contact"
                className="group relative px-6 py-3 font-medium text-slate-black overflow-hidden flex items-center gap-2"
              >
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-slate-black transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100" />
                Discuss Your Project <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Thin Line Separator */}
      <div className="w-full h-px bg-gray-200" />

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
              Geotechnical Services &amp; <span className="font-semibold">Site Investigations</span>
            </motion.h2>
            <motion.div variants={fadeIn} className="mt-4 h-px bg-forest-green w-12" />
          </div>
          <motion.p variants={fadeIn} className="text-sm text-gray-500 max-w-md font-light">
            Expert engineering guidance for Sydney’s residential and commercial projects, from initial soil testing to final construction sign-offs.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          
          {/* Pillar 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group flex flex-col h-full bg-white border border-gray-100 p-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="relative h-24 mb-5 overflow-hidden rounded-lg bg-gray-100 flex-shrink-0">
              <Image 
                src="/prelim-investigation.jpg" 
                alt="Soil Reports & Site Classifications" 
                fill 
                className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-slate-black/10 transition-colors duration-500 group-hover:bg-transparent" />
            </div>
            <h4 className="text-lg font-montserrat font-semibold mb-3">Soil Reports &amp; Site Classifications</h4>
            <p className="text-sm text-gray-600 font-light leading-relaxed flex-grow mb-5">
              Professional geotechnical investigations and site classifications to AS 2870, providing the essential foundation data required for architectural and structural design.
            </p>
            <Link href="/services#site-class" className="mt-auto text-xs font-semibold tracking-wide flex items-center gap-1.5 hover:text-forest-green transition-colors text-slate-black">
              Explore Site Investigations <ArrowRightIcon className="w-3.5 h-3.5" />
            </Link>
          </motion.div>

          {/* Pillar 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group flex flex-col h-full bg-white border border-gray-100 p-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="relative h-24 mb-5 overflow-hidden rounded-lg bg-gray-100 flex-shrink-0">
              <Image 
                src="/construction-support.jpg" 
                alt="Construction Support & Site Inspections" 
                fill 
                className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-slate-black/10 transition-colors duration-500 group-hover:bg-transparent" />
            </div>
            <h4 className="text-lg font-montserrat font-semibold mb-3">Construction Support &amp; Site Inspections</h4>
            <p className="text-sm text-gray-600 font-light leading-relaxed flex-grow mb-5">
              Rapid on-site inspections for footings, piles, and proof rolls, delivering the technical verification and sign-offs required to keep your build moving.
            </p>
            <Link href="/services#inspections" className="mt-auto text-xs font-semibold tracking-wide flex items-center gap-1.5 hover:text-forest-green transition-colors text-slate-black">
              View Construction Services <ArrowRightIcon className="w-3.5 h-3.5" />
            </Link>
          </motion.div>

          {/* Pillar 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group flex flex-col h-full bg-white border border-gray-100 p-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="relative h-24 mb-5 overflow-hidden rounded-lg bg-gray-100 flex-shrink-0">
              <Image 
                src="/commercial-earthworks.jpg" 
                alt="Commercial Geotechnical & Earthworks" 
                fill 
                className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-slate-black/10 transition-colors duration-500 group-hover:bg-transparent" />
            </div>
            <h4 className="text-lg font-montserrat font-semibold mb-3">Commercial Geotechnical &amp; Earthworks</h4>
            <p className="text-sm text-gray-600 font-light leading-relaxed flex-grow mb-5">
              Specialist support for contractors and developers, including pavement design, piling platform verification, and comprehensive borehole drilling services.
            </p>
            <Link href="/services#geotech" className="mt-auto text-xs font-semibold tracking-wide flex items-center gap-1.5 hover:text-forest-green transition-colors text-slate-black">
              Commercial &amp; Earthworks Support <ArrowRightIcon className="w-3.5 h-3.5" />
            </Link>
          </motion.div>

          {/* Pillar 4 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="group flex flex-col h-full bg-white border border-gray-100 p-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="relative h-24 mb-5 overflow-hidden rounded-lg bg-slate-800 flex-shrink-0">
              <Image 
                src="/partner-network.jpg" 
                alt="Our Professional Partner Network" 
                fill 
                className="object-cover opacity-80 transition-transform duration-700 ease-in-out group-hover:scale-110"
              />
            </div>
            <h4 className="text-lg font-montserrat font-semibold mb-3">Our Professional Partner Network</h4>
            <p className="text-sm text-gray-600 font-light leading-relaxed flex-grow mb-5">
              Access our trusted network of structural engineers, land surveyors, and environmental consultants to streamline your project's professional requirements.
            </p>
            <Link href="/services#partners" className="mt-auto text-xs font-semibold tracking-wide flex items-center gap-1.5 hover:text-forest-green transition-colors text-slate-black">
              View Our Partners <ArrowRightIcon className="w-3.5 h-3.5" />
            </Link>
          </motion.div>

        </div>
      </section>


{/* Client Success / Testimonials via Glassmorphism */}
      <section className="py-32 relative overflow-hidden bg-slate-200 border-y border-gray-200">
        <div className="absolute inset-0 z-0">
          <Image src="/img_0078_v3.png" alt="Sydney Skyline Blur" fill className="object-cover opacity-60 blur-xl scale-110" />
          <div className="absolute inset-0 bg-slate-100/40 mix-blend-overlay" />
        </div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-12 relative z-10">
           <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeIn} className="text-3xl font-light tracking-tight font-montserrat text-slate-black">
              Client Feedback
            </motion.h2>
            <motion.div variants={fadeIn} className="mt-6 h-px bg-forest-green w-12 mx-auto" />
            <motion.div variants={fadeIn} className="mt-4 flex items-center justify-center gap-2">
              <div className="flex text-accent-gold gap-0.5">
                <StarIcon className="w-5 h-5 text-yellow-500" />
                <StarIcon className="w-5 h-5 text-yellow-500" />
                <StarIcon className="w-5 h-5 text-yellow-500" />
                <StarIcon className="w-5 h-5 text-yellow-500" />
                <StarIcon className="w-5 h-5 text-yellow-500" />
              </div>
              <span className="text-sm font-semibold text-slate-black tracking-wide ml-1">5.0 Google Reviews</span>
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="flex flex-col relative px-8 py-10 rounded-2xl backdrop-blur-xl bg-white/60 border border-white shadow-[0_8px_32px_0_rgba(31,38,135,0.05)] hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="flex gap-1 text-accent-gold mb-6">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 text-yellow-500 drop-shadow-sm" />
                  ))}
                </div>
                <blockquote className="text-gray-800 text-base leading-relaxed font-light mb-8 relative z-10 flex-grow">
                  "{review.text}"
                </blockquote>
                <div className="pt-6 border-t border-gray-300 flex flex-col gap-1">
                  <span className="text-slate-black font-semibold tracking-wide text-sm">{review.name}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <motion.a 
              variants={fadeIn}
              href="https://search.google.com/local/reviews?placeid=ChIJkbo3DVqq1IMRQYQUbuD9XDc"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-white text-slate-black text-sm font-semibold tracking-wide rounded-full shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 border border-gray-200"
            >
              Read Our Reviews
            </motion.a>
            <motion.a 
              variants={fadeIn}
              href="https://search.google.com/local/writereview?placeid=ChIJkbo3DVqq1IMRQYQUbuD9XDc"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-forest-green text-white text-sm font-semibold tracking-wide rounded-full shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 hover:bg-forest-green/90"
            >
              Leave a Review
            </motion.a>
          </motion.div>
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
          <motion.h2 variants={fadeIn} className="text-3xl font-light tracking-tight font-montserrat text-slate-black mb-6">
            Common Questions about Geotechnical Services in Sydney
          </motion.h2>
          <motion.div variants={fadeIn} className="mt-4 h-px bg-forest-green w-12 mx-auto" />
        </motion.div>

        <div className="divide-y divide-gray-100 border-t border-gray-100">
          {faqs.slice(0, 10).map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="py-6">
                <button 
                  onClick={() => toggleFaq(index)}
                  className={`flex w-full items-center justify-between text-left transition-colors duration-200 ${isOpen ? 'text-forest-green' : 'text-slate-black hover:text-forest-green'}`}
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
                        dangerouslySetInnerHTML={{ __html: faq.highlightedAnswer || faq.answer }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>


    </div>
  );
}
