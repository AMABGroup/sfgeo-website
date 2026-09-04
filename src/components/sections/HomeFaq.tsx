"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/outline";
import { homeFaqs } from "@/data/faqs";

export default function HomeFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="divide-y divide-gray-100 border-t border-gray-100">
      {homeFaqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index}>
            <button
              onClick={() => toggleFaq(index)}
              className={`flex w-full items-center justify-between py-6 text-left transition-colors duration-200 ${isOpen ? "text-forest-green" : "text-slate-950 hover:text-forest-green"}`}
              aria-expanded={isOpen}
            >
              <span className="text-[17px] sm:text-lg font-montserrat font-semibold pr-8 leading-snug">
                {faq.question}
              </span>
              <span className={`p-1.5 rounded-full transition-colors flex-shrink-0 ${isOpen ? "bg-forest-green/10 text-forest-green" : "bg-gray-50 text-gray-500"}`}>
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
  );
}
