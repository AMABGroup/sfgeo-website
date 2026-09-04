"use client";

import { useState, type CSSProperties } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/outline";
import Reveal from "@/components/ui/Reveal";
import PhotoFrame from "@/components/ui/PhotoFrame";
import CloseBand from "@/components/ui/CloseBand";
import FollowFieldwork from "@/components/ui/FollowFieldwork";
import { faqs } from "@/data/faqs";

const d = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

const GROUPS = [
  { name: "Cost & Process", id: "cost-and-process", line: "What it costs, how long it takes, what you get." },
  { name: "For Homeowners", id: "for-homeowners", line: "Granny flats, extensions, pools and new homes." },
  { name: "For Builders & Engineers", id: "for-builders-and-engineers", line: "Certifiers, DA and CDC, inspections at the pour." },
  { name: "Access & Coverage", id: "access-and-coverage", line: "Tight sites, where we work, how the rig gets in." },
  { name: "About SFGEO", id: "about-sfgeo", line: "Who does the work, and how the practice runs." },
];

type Faq = (typeof faqs)[number] & { group?: string };

function splitLast(name: string): [string, string] {
  const i = name.lastIndexOf(" ");
  return i === -1 ? ["", name] : [name.slice(0, i), name.slice(i + 1)];
}

export default function FaqClient() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleFaq = (index: number) => setOpenIndex(openIndex === index ? null : index);
  const byGroup = GROUPS.map((g) => ({ ...g, items: (faqs as Faq[]).filter((f) => f.group === g.name) }));

  return (
    <div className="bg-white text-slate-950 font-inter min-h-screen selection:bg-forest-green selection:text-white">
      {/* Hero */}
      <section className="pt-36 pb-16 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="lg:flex lg:items-end lg:justify-between lg:gap-16">
          <div className="max-w-3xl">
            <p className="hero-line text-sm uppercase tracking-[0.2em] text-forest-green mb-6 font-semibold">
              FAQ &middot; Straight Answers &middot; Sydney
            </p>
            <h1 className="text-4xl sm:text-6xl font-montserrat font-light tracking-tight leading-[1.08] mb-8">
              <span className="hero-mask"><span className="mask-line mask-d1"><span>Frequently Asked</span></span></span>
              <span className="hero-mask"><span className="mask-line mask-d2"><span className="font-semibold h-bold">Questions.</span></span></span>
            </h1>
            <div className="hero-line hero-d2 w-[96px] h-[3px] bg-forest-green mb-8" />
            <p className="hero-line hero-d2 text-lg sm:text-xl text-gray-600 font-light leading-relaxed">
              Clear answers on soil testing, reports, access and process &mdash; from the team that does the work. If it isn&rsquo;t here, it&rsquo;s answered on the phone.
            </p>
          </div>
          <FollowFieldwork className="hero-line hero-d3 mt-10 lg:mt-0 lg:shrink-0 lg:pb-2" />
        </div>
      </section>

      {/* Questions, with a sidebar that stays with you */}
      <section className="px-6 lg:px-12 max-w-7xl mx-auto border-t border-gray-100 pt-16 lg:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 items-start">
          <aside className="lg:col-span-4 lg:sticky lg:top-28">
            <PhotoFrame
              src="/sfgeo-rock-verification-marking.jpg"
              alt="Founding level marked in blue on an exposed Sydney sandstone face"
              caption={<>Sandstone &middot; Founding Level Marked</>}
              aspect="aspect-[4/5]"
              sizes="(max-width: 1024px) 100vw, 33vw"
              position="object-center"
              wrapperClassName="hidden lg:block"
            />
            <Reveal variant="group" className="lg:mt-10">
              <p data-fx="rise" className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-semibold mb-4">On This Page</p>
              <ol data-stagger style={d(80)} className="divide-y divide-gray-100 border-y border-gray-100">
                {byGroup.map((g, i) => (
                  <li key={g.id}>
                    <a href={`#${g.id}`} className="group flex items-baseline gap-4 py-3.5 text-slate-950 hover:text-forest-green transition-colors">
                      <span className="text-[11px] font-semibold tracking-[0.2em] text-gray-400 tabular-nums group-hover:text-forest-green transition-colors">0{i + 1}</span>
                      <span className="text-[15px] font-medium">{g.name}</span>
                      <span className="ml-auto text-[11px] text-gray-400 tabular-nums">{g.items.length}</span>
                    </a>
                  </li>
                ))}
              </ol>
              <p data-fx="rise" style={d(300)} className="mt-7 text-[14px] text-gray-500 font-light leading-relaxed">
                Not answered here?{" "}
                <a href="tel:+61423483555" className="text-forest-green font-semibold whitespace-nowrap">0423 483 555</a>
                {" "}reaches the engineer, or{" "}
                <Link href="/contact" className="text-forest-green font-semibold">send the question</Link> with your site address.
              </p>
            </Reveal>
          </aside>

          <div className="lg:col-span-8">
            {byGroup.map((g, gi) => {
              const [light, bold] = splitLast(g.name);
              return (
                <section key={g.id} id={g.id} className={`scroll-mt-[100px] ${gi === 0 ? "" : "mt-20 lg:mt-24"}`}>
                  <Reveal variant="group" className="mb-6">
                    <p data-fx="rise" className="text-sm uppercase tracking-[0.2em] text-forest-green mb-3 font-semibold">0{gi + 1} &middot; {g.name}</p>
                    <h2 data-fx="rise" style={d(80)} className="text-3xl sm:text-4xl font-montserrat font-light tracking-tight text-slate-950 mb-4">
                      {light} <span className="font-semibold h-bold">{bold}.</span>
                    </h2>
                    <div data-fx="line" style={d(200)} className="h-px bg-forest-green w-12 mb-5" />
                    <p data-fx="rise" style={d(160)} className="text-gray-500 font-light leading-relaxed">{g.line}</p>
                  </Reveal>
                  <Reveal variant="group">
                    <div data-stagger style={d(120)} className="divide-y divide-gray-100 border-t border-gray-100">
                      {g.items.map((faq) => {
                        const index = faqs.indexOf(faq);
                        const isOpen = openIndex === index;
                        return (
                          <div key={index}>
                            <button
                              onClick={() => toggleFaq(index)}
                              className={`flex w-full items-center justify-between py-6 text-left transition-colors duration-200 ${isOpen ? "text-forest-green" : "text-slate-950 hover:text-forest-green"}`}
                              aria-expanded={isOpen}
                            >
                              <span className="text-[17px] sm:text-lg font-montserrat font-semibold pr-8 leading-snug">{faq.question}</span>
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
                  </Reveal>
                </section>
              );
            })}
          </div>
        </div>
      </section>

      <CloseBand
        source="faq close"
        heading={<>Still Have <span className="font-semibold h-bold">A Question?</span></>}
        sub="Ask the engineer, not a form robot. Call, or send the question with your site address — answered within one business day."
        className="mt-24 lg:mt-32"
      >
        <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-white/80 hover:text-white group">
          <span className="draw-link">Or send the question through the contact page</span>
          <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
        </Link>
      </CloseBand>
    </div>
  );
}
