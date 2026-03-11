import re

with open('src/app/page.tsx', 'r') as f:
    content = f.read()

# Add imports
imports_to_add = """import { useState } from "react";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/outline";
import { AnimatePresence } from "framer-motion";
import { faqs } from "@/data/faqs";

"""

if "import { useState } from" not in content:
    content = content.replace('import Image from "next/image";', imports_to_add + 'import Image from "next/image";')

# Inject schema and states
states_to_add = """
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.slice(0, 5).map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
"""

content = content.replace("export default function Home() {", "export default function Home() {" + states_to_add)

# Inject schema markup at top of return
schema_markup = """
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
"""
content = content.replace('<div className="bg-white text-slate-black font-inter selection:bg-forest-green selection:text-white">', '<div className="bg-white text-slate-black font-inter selection:bg-forest-green selection:text-white">' + schema_markup)

# Inject FAQ Section just before Client Feedback
faq_section = """
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

"""

content = content.replace('{/* Client Success / Testimonials via Glassmorphism */}', faq_section + '{/* Client Success / Testimonials via Glassmorphism */}')

with open('src/app/page.tsx', 'w') as f:
    f.write(content)
