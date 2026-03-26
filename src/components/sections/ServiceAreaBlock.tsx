"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

type PageType = "services" | "drilling" | "faq" | "contact" | "home" | "about";

interface ServiceAreaBlockProps {
  pageType: PageType;
}

export default function ServiceAreaBlock({ pageType }: ServiceAreaBlockProps) {
  const intros = {
    services: "Headquartered in Marrickville with rapid mobilisation across Parramatta and the wider metropolitan region, we provide responsive geotechnical support across:",
    drilling: "Headquartered in Marrickville and regularly servicing Parramatta, North Shore, Eastern Suburbs and Western Sydney, our drilling and sampling teams mobilise rapidly across:",
    faq: "With our headquarters in Marrickville and regular servicing across Parramatta, North Shore and Eastern Suburbs, we support residential, commercial, and consultant clients across:",
    contact: "Headquartered in Marrickville with rapid response times across the Parramatta corridor and the wider metropolitan region, we are ready to deploy to your site across:",
    home: "Headquartered in Marrickville and regularly servicing the Parramatta corridor, our family-owned team provides expert geotechnical and drilling support across the wider Sydney metropolitan region, including:",
    about: "From our Marrickville roots to regular deployments across Parramatta and the Greater Sydney region, our geotechnical engineers and drilling teams are positioned to support projects right across:",
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="scroll-mt-[100px] py-24 bg-slate-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="max-w-4xl"
        >
          <h3 className="text-2xl sm:text-3xl font-light tracking-tight font-montserrat text-slate-950 mb-8">
            Geotechnical & Drilling Services Across Greater Sydney
          </h3>
          <p className="text-lg text-gray-600 font-light leading-relaxed mb-12">
            {intros[pageType]}
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
            <div className="space-y-10">
              <div>
                <h4 className="text-[13px] font-bold tracking-widest text-forest-green uppercase mb-4">Inner West & City</h4>
                <p className="text-base text-gray-600 font-light">Marrickville, Newtown, Surry Hills, Petersham, Leichhardt, and surrounds.</p>
              </div>
              <div>
                <h4 className="text-[13px] font-bold tracking-widest text-forest-green uppercase mb-4">Parramatta & Western Sydney</h4>
                <p className="text-base text-gray-600 font-light">Parramatta, Merrylands, Auburn, Homebush, Blacktown, and surrounds.</p>
              </div>
            </div>
            <div className="space-y-10">
              <div>
                <h4 className="text-[13px] font-bold tracking-widest text-forest-green uppercase mb-4">North Shore, Ryde & Hills</h4>
                <p className="text-base text-gray-600 font-light">Chatswood, St Leonards, Mosman, Ryde, Kellyville, Rouse Hill, and surrounds.</p>
              </div>
              <div>
                <h4 className="text-[13px] font-bold tracking-widest text-forest-green uppercase mb-4">Eastern Suburbs & Southern Sydney</h4>
                <p className="text-base text-gray-600 font-light">Randwick, Bondi, Vaucluse, Hurstville, Cronulla, and the Sutherland Shire.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-16 pt-10 border-t border-gray-200/60 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-[11px] font-bold tracking-[0.2em] text-gray-400 uppercase">
              Family Owned • Sydney Born & Bred
            </div>
            <Link 
              href="/contact" 
              className="text-forest-green font-bold text-sm tracking-widest uppercase hover:text-slate-950 transition-colors flex items-center gap-2 group"
            >
              Secure Your Field Dates
              <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-2" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
