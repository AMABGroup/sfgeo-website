"use client";


import { faqs } from "@/data/faqs";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import GoogleReviews from "@/components/ui/GoogleReviews";
import ServiceAreaBlock from "@/components/sections/ServiceAreaBlock";

export default function Home() {

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "GeotechnicalEngineer", 
    "name": "Solid Foundation Geotechnical",
    "image": "https://www.sfgeo.com.au/SFGEO_logo.png",
    "@id": "https://www.sfgeo.com.au/#organization",
    "url": "https://www.sfgeo.com.au",
    "telephone": "+61423483555",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Suite 3.01, Level 3, 107 Sydenham Road",
      "addressLocality": "Marrickville",
      "addressRegion": "NSW",
      "postalCode": "2204",
      "addressCountry": "AU"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -33.911,
      "longitude": 151.166
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    },
    "areaServed": [
      { "@type": "City", "name": "Sydney" },
      { "@type": "City", "name": "Inner West" },
      { "@type": "City", "name": "Eastern Suburbs" },
      { "@type": "City", "name": "Western Sydney" },
      { "@type": "City", "name": "Northern Beaches" },
      { "@type": "City", "name": "Sutherland Shire" },
      { "@type": "City", "name": "North Shore" },
      { "@type": "City", "name": "Hills District" },
      { "@type": "City", "name": "Parramatta" },
      { "@type": "City", "name": "Liverpool" },
      { "@type": "City", "name": "Campbelltown" },
      { "@type": "City", "name": "Marrickville" },
      { "@type": "City", "name": "Newtown" },
      { "@type": "City", "name": "Ashfield" },
      { "@type": "City", "name": "Burwood" },
      { "@type": "City", "name": "Strathfield" },
      { "@type": "City", "name": "Surry Hills" },
      { "@type": "City", "name": "Paddington" },
      { "@type": "City", "name": "Bondi" },
      { "@type": "City", "name": "Randwick" },
      { "@type": "City", "name": "Coogee" },
      { "@type": "City", "name": "Manly" },
      { "@type": "City", "name": "Mosman" },
      { "@type": "City", "name": "Chatswood" },
      { "@type": "City", "name": "Ryde" },
      { "@type": "City", "name": "Epping" },
      { "@type": "City", "name": "Blacktown" },
      { "@type": "City", "name": "Penrith" },
      { "@type": "City", "name": "Bankstown" },
      { "@type": "City", "name": "Hurstville" },
      { "@type": "City", "name": "Cronulla" }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Geotechnical Engineering Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": { "@type": "Service", "name": "Residential Soil Testing" }
        },
        {
          "@type": "Offer",
          "itemOffered": { "@type": "Service", "name": "AS2870 Site Classification" }
        },
        {
          "@type": "Offer",
          "itemOffered": { "@type": "Service", "name": "Geotechnical Investigation & Reporting" }
        },
        {
          "@type": "Offer",
          "itemOffered": { "@type": "Service", "name": "Construction Phase Support" }
        },
        {
          "@type": "Offer",
          "itemOffered": { "@type": "Service", "name": "Footing & Pier Inspections" }
        },
        {
          "@type": "Offer",
          "itemOffered": { "@type": "Service", "name": "Tight Access Drilling Services" }
        },
        {
          "@type": "Offer",
          "itemOffered": { "@type": "Service", "name": "Permeability & Infiltration Testing" }
        },
        {
          "@type": "Offer",
          "itemOffered": { "@type": "Service", "name": "Slope Stability Assessment" }
        },
        {
          "@type": "Offer",
          "itemOffered": { "@type": "Service", "name": "Level 1 Earthworks Supervision" }
        }
      ]
    }
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  return (
    <div className="bg-white text-slate-950 font-inter selection:bg-forest-green selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* ArchDaily Minimal Hero Section */}
      <section className="relative px-6 lg:px-12 py-32 min-h-[90vh] flex flex-col justify-center overflow-hidden">
        {/* Full Bleed Background Image with Subtle Gradient */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/img_0078_v3.png"
            alt="Geotechnical Engineering Sydney - SFGEO Skyline View"
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
              className="text-5xl tracking-tight sm:text-7xl font-montserrat font-light text-slate-950 leading-[1.1]"
            >
              Geotechnical <br className="hidden sm:block" />
              Clarity. <span className="font-semibold">Built On</span> <br className="hidden sm:block" />
              <span className="font-semibold">Local Expertise.</span>
            </motion.h1>
            <motion.div variants={fadeIn} className="mt-8 h-px bg-slate-black/20 w-1/4" />
            <motion.p variants={fadeIn} className="text-xl sm:text-2xl text-gray-600 font-light leading-relaxed mb-6 max-w-3xl">
              Solid Foundation Geotechnical is a boutique Sydney <br className="hidden sm:block" />
              consultancy delivering tailored site classifications and <br className="hidden sm:block" />
              soil testing for homeowners, architects, and builders.
            </motion.p>
            <motion.div variants={fadeIn} className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <Link
                href="/contact"
                className="group relative px-6 sm:px-8 py-3.5 text-sm sm:text-base font-medium text-white bg-slate-950 overflow-hidden flex items-center justify-center gap-2 rounded-full hover:bg-slate-800 transition-colors shadow-sm hover:shadow-md w-full sm:w-auto text-center"
              >
                Request a Fixed-Fee Quote <ArrowRightIcon className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="group relative px-6 sm:px-8 py-3.5 text-sm sm:text-base font-medium text-slate-950 bg-white border border-slate-950 overflow-hidden flex items-center justify-center gap-2 rounded-full hover:bg-gray-50 transition-colors shadow-sm hover:shadow-md w-full sm:w-auto text-center"
              >
                Professional Enquiry <ArrowRightIcon className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1" />
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
              Geotechnical Services | <span className="font-semibold">Drilling & Sampling</span>
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
                src="/clay-sample.png" 
                alt="Residential Soil Testing and AS2870 Site Classifications Sydney" 
                fill 
                className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <h3 className="text-xl font-montserrat font-semibold mb-3 tracking-tight">Preliminary Site Works</h3>
            <p className="text-sm text-gray-600 font-light leading-relaxed flex-grow mb-6">
              Essential soil testing for residential projects—from new homes and extensions to granny flats and in-ground pools. We deliver fast, accurate Site Classifications (AS2870) and Geotechnical Investigations (AS1726). We provide clear foundation advice and the geotechnical reporting necessary to support DA and CDC pathways, partnering directly with homeowners, architects, and builders to get projects out of the ground.
            </p>
            <Link 
              href="/services#site-class" 
              className="mt-auto text-sm font-medium tracking-wide flex items-center gap-1.5 text-slate-950 hover:text-forest-green transition-colors group/link"
              title="Learn more about our Preliminary Site Works & Soil Testing Services in Sydney"
              aria-label="Explore Preliminary Site Works"
            >
              <span className="relative overflow-hidden">
                Explore Preliminary Works &rarr;
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
                alt="Geotechnical Construction Support and Footing Inspections Sydney" 
                fill 
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
              className="mt-auto text-sm font-medium tracking-wide flex items-center gap-1.5 text-slate-950 hover:text-forest-green transition-colors group/link"
              title="Learn more about our Geotechnical Inspections and Construction Phase Support in Sydney"
              aria-label="Explore Construction Phase Support"
            >
              <span className="relative overflow-hidden">
                Explore Construction Support &rarr;
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
                alt="Geotechnical Design and Deep Foundation Parameters Sydney" 
                fill 
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
              className="mt-auto text-sm font-medium tracking-wide flex items-center gap-1.5 text-slate-950 hover:text-forest-green transition-colors group/link"
              title="Learn more about our Geotechnical Design, Pile Design, and Foundation Parameters in Sydney"
              aria-label="Explore Geotechnical Design"
            >
              <span className="relative overflow-hidden">
                Explore Geotechnical Design &rarr;
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
                alt="Tight Access Drilling and Geotechnical Sampling Services Sydney" 
                fill 
                className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <h3 className="text-xl font-montserrat font-semibold mb-3 tracking-tight">Drilling & Sampling Services</h3>
            <p className="text-sm text-gray-600 font-light leading-relaxed flex-grow mb-6">
              The core of our field capability. We operate specialized, highly mobile rigs for auger drilling, tight-access drilling, and DCP testing across the Sydney Metro. We conduct in-situ testing for our own investigations and provide specialist drilling services to consulting firms requiring additional capacity. We also extract precise soil and groundwater samples to support environmental consultants undertaking Stage 1 & Stage 2 investigations (PSI & DSI).
            </p>
            <Link 
              href="/drilling-and-sampling#drilling" 
              className="mt-auto text-sm font-medium tracking-wide flex items-center gap-1.5 text-slate-950 hover:text-forest-green transition-colors group/link"
              title="Learn more about our Tight-Access Drilling & Environmental Sampling Services in Sydney Metro"
              aria-label="Explore Drilling & Sampling Services"
            >
              <span className="relative overflow-hidden">
                Explore Drilling Services &rarr;
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-forest-green transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover/link:scale-x-100" />
              </span>
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

        <div className="space-y-8 pt-8 border-t border-gray-100">
          {faqs.slice(0, 5).map((faq, index) => (
            <div key={index} className="bg-white p-8 rounded-[4px] shadow-[0_15px_40px_-5px_rgba(0,0,0,0.08)]">
              <h3 className="text-lg font-bold font-montserrat mb-4 text-forest-green">
                {faq.question}
              </h3>
              <div 
                className="text-base text-gray-600 font-light leading-loose"
                dangerouslySetInnerHTML={{ __html: faq.answer }}
              />
            </div>
          ))}
        </div>
      </section>

      <ServiceAreaBlock pageType="home" />


    </div>
  );
}
