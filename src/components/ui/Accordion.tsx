"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/outline";

interface AccordionProps {
  title: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
}

export default function Accordion({ title, defaultOpen = false, children }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-gray-200 py-6 group">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-forest-green"
        aria-expanded={isOpen}
      >
        <h3 className="text-xl sm:text-2xl font-light font-montserrat text-slate-black group-hover:text-forest-green transition-colors m-0">
          {title}
        </h3>
        <span className={`p-1.5 transition-colors flex-shrink-0 ${isOpen ? 'text-forest-green' : 'text-gray-400 group-hover:text-forest-green'}`}>
          {isOpen ? <MinusIcon className="w-5 h-5" /> : <PlusIcon className="w-5 h-5" />}
        </span>
      </button>
      {/* Always rendered so the answer is in the served HTML (crawlers, FAQPage schema); collapsed panels are inert. */}
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
        aria-hidden={!isOpen}
        inert={!isOpen}
      >
        <div className="pt-6 pb-2 text-lg font-light text-gray-600 leading-relaxed md:pr-12">
          {children}
        </div>
      </motion.div>
    </div>
  );
}
