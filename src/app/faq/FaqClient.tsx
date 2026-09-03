"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { faqs } from "@/data/faqs";

export default function FaqClient() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white text-slate-950 font-inter min-h-screen">
      <section className="pt-36 pb-16 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16">
          <p className="hero-line text-sm uppercase tracking-[0.2em] text-forest-green mb-6 font-semibold">
            FAQ &middot; Straight Answers &middot; Sydney
          </p>
          <h1 className="hero-line hero-d1 text-4xl sm:text-6xl font-montserrat font-light tracking-tight leading-[1.08] mb-8">
            Frequently Asked <span className="font-semibold h-bold">Questions.</span>
          </h1>
          <div className="hero-line hero-d2 w-[96px] h-[3px] bg-forest-green mb-8" />
          <p className="hero-line hero-d2 text-lg sm:text-xl text-gray-600 font-light leading-relaxed">
            Clear answers on soil testing, reports, access and process — from the team that does the work.
          </p>
        </div>
        <div className="max-w-4xl divide-y divide-gray-100 border-t border-gray-100">
          {["Cost & Process", "For Homeowners", "For Builders & Engineers", "Access & Coverage", "About SFGEO"].map((groupName) => (
            <div key={groupName} className="pt-10 first:pt-0">
              <h2 className="text-sm uppercase tracking-[0.22em] text-forest-green font-semibold mb-2">{groupName}</h2>
              {faqs.filter((f) => (f as { group?: string }).group === groupName).map((faq) => {
                const index = faqs.indexOf(faq);
            const isOpen = openIndex === index;
            return (
              <div key={index}>
                <button 
                  onClick={() => toggleFaq(index)}
                  className={`flex w-full items-center justify-between py-6 text-left transition-colors duration-200 ${isOpen ? 'text-forest-green' : 'text-slate-950 hover:text-forest-green'}`}
                  aria-expanded={isOpen}
                >
                  <span className="text-lg font-montserrat font-semibold pr-8">
                    {faq.question}
                  </span>
                  <span className={`p-1.5 rounded-full transition-colors flex-shrink-0 ${isOpen ? 'bg-forest-green/10 text-forest-green' : 'bg-gray-50 text-gray-500 group-hover:bg-gray-100'}`}>
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
                        className="pb-6 text-base text-gray-600 font-light leading-loose [&_a]:text-forest-green [&_a]:underline [&_a]:underline-offset-4 [&_a]:decoration-forest-green/40 [&_a:hover]:decoration-forest-green"
                        dangerouslySetInnerHTML={{ __html: faq.answer }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
            </div>
          ))}
        </div>
      </section>

      {/* Close */}
      <section className="relative overflow-hidden bg-[#050A07] text-white grain mt-24">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(45,90,58,0.3),transparent_60%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center px-6 py-28 lg:py-32 relative z-10">
          <h2 className="text-4xl sm:text-6xl font-montserrat font-light tracking-tight mb-8">
            Still Have <span className="font-semibold h-bold">A Question?</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 font-light leading-relaxed max-w-2xl mx-auto mb-12">
            Ask the engineer, not a form robot. Call, or send the question with your site address — answered within one business day.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="tel:+61423483555" className="flex items-center justify-center px-8 py-2.5 bg-gradient-to-b from-[#346b43] to-forest-green text-white rounded-full shadow-[0_8px_20px_-6px_rgba(45,90,58,0.4)] hover:shadow-[0_12px_24px_-8px_rgba(45,90,58,0.6)] hover:brightness-105 transition-all hover:-translate-y-0.5 w-full sm:w-[280px] h-[46px] text-xs font-semibold tracking-wide">
              Call 0423 483 555
            </Link>
            <Link href="/contact" className="flex items-center justify-center px-8 py-2.5 bg-white/5 text-white rounded-full shadow-[inset_0_0_0_1px_rgba(255,255,255,0.25)] hover:bg-white/10 hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.45)] transition-all hover:-translate-y-0.5 w-full sm:w-[280px] h-[46px] text-xs font-semibold tracking-wide backdrop-blur-sm">
              Ask A Question
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}