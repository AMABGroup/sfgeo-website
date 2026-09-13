"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/outline";

interface AccordionProps {
  title: string;
  defaultOpen?: boolean;
  /** "quiet": fine-print rows for the foot-of-page question strips. */
  variant?: "default" | "quiet";
  children: React.ReactNode;
}

export default function Accordion({ title, defaultOpen = false, variant = "default", children }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const quiet = variant === "quiet";

  return (
    <div className={`group ${quiet ? "border-b border-gray-100 py-3.5" : "border-b border-gray-200 py-6"}`}>
      {/* Heading wraps the button (valid HTML; the question enters the document outline). */}
      <h3 className="m-0">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex justify-between items-center text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-forest-green"
          aria-expanded={isOpen}
        >
          <span className={quiet
            ? "text-sm sm:text-[15px] font-light text-gray-600 group-hover:text-forest-green transition-colors pr-6"
            : "text-xl sm:text-2xl font-light font-montserrat text-slate-black group-hover:text-forest-green transition-colors"}>
            {title}
          </span>
          <span className={`p-1.5 transition-colors flex-shrink-0 ${isOpen ? 'text-forest-green' : 'text-gray-400 group-hover:text-forest-green'}`}>
            {isOpen ? <MinusIcon className={quiet ? "w-3.5 h-3.5" : "w-5 h-5"} /> : <PlusIcon className={quiet ? "w-3.5 h-3.5" : "w-5 h-5"} />}
          </span>
        </button>
      </h3>
      {/* Always rendered so the answer is in the served HTML (crawlers, FAQPage schema); collapsed panels are inert. */}
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
        aria-hidden={!isOpen}
        inert={!isOpen}
      >
        <div className={quiet ? "pt-3 pb-1 text-sm font-light text-gray-500 leading-relaxed md:pr-12" : "pt-6 pb-2 text-lg font-light text-gray-600 leading-relaxed md:pr-12"}>
          {children}
        </div>
      </motion.div>
    </div>
  );
}
