import { Metadata } from "next";
import Link from "next/link";
import type { CSSProperties } from "react";
import QuoteCta from "@/components/forms/QuoteCta";
import VideoEmbed from "./VideoEmbed";
import GoogleReviews from "@/components/ui/GoogleReviews";
import Reveal from "@/components/ui/Reveal";
import PhotoFrame from "@/components/ui/PhotoFrame";
import SectionNav from "@/components/ui/SectionNav";
import CloseBand from "@/components/ui/CloseBand";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta(
  "Site Classification & Soil Test Sydney | AS 2870 | SFGEO",
  "AS 2870 site classifications for Sydney homes and granny flats — fixed fees from $800 + GST, the engineer on site, reports as soon as 2 business days.",
  "/site-classification",
);

const d = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

const REPORT_CONTENTS = [
  "Site classification to AS 2870, with the characteristic surface movement behind it",
  "Allowable bearing pressures for the footing types on your plans",
  "The subsurface profile, layer by layer, with groundwater observations",
  "Engineer-logged borehole records and a plan of where each hole went",
  "Laboratory results, where tested, and what they mean for the footing",
  "Founding recommendations — depth, and the fill, trees, slope or drainage your engineer has to design around",
  "Written to your certifier's requirements and signed by the Principal Engineer",
];

const CLASSES = [
  { cls: "A", desc: "Stable. Minimal movement. Sand or rock." },
  { cls: "S", desc: "Slightly reactive. Standard footings." },
  { cls: "M", desc: "Moderately reactive. Stiffened slab." },
  { cls: "H1", desc: "Highly reactive, 40–60mm surface movement." },
  { cls: "H2", desc: "Highly reactive, 60–75mm." },
  { cls: "E", desc: "Extremely reactive, greater than 75mm." },
];

const COMPARE = [
  { volume: "Fieldwork done without the signing engineer present", sfgeo: "Principal Engineer on every site" },
  { volume: "Templated reports, one size fits all", sfgeo: "Tailored to your certifier, structural engineer and council" },
  { volume: "Lab testing applied by default, billed regardless", sfgeo: "Lab testing when the site warrants it, not as padding" },
  { volume: "Engineer meets the site via the borehole log", sfgeo: "Principal reviews your block and plans before quoting" },
  { volume: "Separate quotes for drilling, engineering and construction advice", sfgeo: "One professional, one scope" },
];

const PROCESS = [
  { t: "Send The Address", d: "A short project description and any plans you have. Answered within one business day." },
  { t: "Desktop Review & Fixed Fee", d: "The Principal reviews the block, the geology and your plans, and the fee is confirmed in writing within one business day. A site walkover is arranged where the site warrants it." },
  { t: "Fieldwork", d: "The Principal attends and logs the profile on site — with lab testing through a NATA-accredited laboratory only when the site warrants it." },
  { t: "Report, Signed", d: "Written against your certifier's and structural engineer's requirements. As soon as 2 business days from fieldwork; urgent turnaround by arrangement." },
];

const NAV = [
  { id: "what", label: "What It Does" },
  { id: "difference", label: "The SFGEO Way" },
  { id: "pricing", label: "Pricing" },
  { id: "access", label: "Access" },
  { id: "classes", label: "The Classes" },
  { id: "report", label: "Your Report" },
];

export default function SiteClassificationPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "item": { "@id": "https://sfgeo.com.au/", "name": "Home" } },
      { "@type": "ListItem", "position": 2, "item": { "@id": "https://sfgeo.com.au/geotechnical", "name": "Geotechnical" } },
      { "@type": "ListItem", "position": 3, "item": { "@id": "https://sfgeo.com.au/site-classification", "name": "Site Classification" } }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Site Classification",
    "serviceType": "Site Classification",
    "description": "Fast, accurate AS2870 site classifications for Sydney homes, extensions, granny flats and duplexes. Independent, NATA lab-backed, fixed-fee. Signed by the engineer on your ground.",
    "url": "https://sfgeo.com.au/site-classification",
    "provider": { "@id": "https://sfgeo.com.au/#organization" },
    "areaServed": { "@type": "City", "name": "Sydney, New South Wales, Australia" },
    "offers": [
      {
        "@type": "Offer",
        "name": "Ancillary residential",
        "description": "Granny flats. Small additions. New homes on cleared blocks. Tightly scoped projects with straightforward access, priced from $800. Every fee is set against your specific block.",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "800",
          "priceCurrency": "AUD",
          "valueAddedTaxIncluded": false,
          "description": "from $800 + GST"
        }
      },
      {
        "@type": "Offer",
        "name": "Standard residential",
        "description": "The right tier for most Sydney custom builds. Single or double-storey homes on established streets. Pool additions, duplexes, and dwellings with in-ground pools. From $1,000, priced against the work your site actually needs.",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "1000",
          "priceCurrency": "AUD",
          "valueAddedTaxIncluded": false,
          "description": "from $1,000 + GST"
        }
      }
    ]
  };

  return (
    <div className="bg-white text-slate-950 font-inter selection:bg-forest-green selection:text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      {/* Hero */}
      <section className="pt-36 pb-20 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <p className="hero-line text-sm uppercase tracking-[0.2em] text-forest-green mb-6 font-semibold">
            Site Classification &middot; AS 2870 &middot; Fixed Fee
          </p>
          <h1 className="text-[min(2.25rem,8.2vw)] sm:text-6xl font-montserrat font-light tracking-tight leading-[1.08] mb-8">
            <span className="hero-mask"><span className="mask-line mask-d1"><span>Site Classifications Sydney.</span></span></span>
            <span className="hero-mask"><span className="mask-line mask-d2"><span className="font-semibold h-bold">Engineered Properly.</span></span></span>
          </h1>
          <div className="hero-line hero-d2 w-[96px] h-[3px] bg-forest-green mb-8" />
          <p className="hero-line hero-d2 text-lg sm:text-xl text-gray-600 font-light leading-relaxed mb-10">
            The AS 2870 report your whole build stands on — led by the Principal Engineer, tailored to your site, your design and your certifier. No templates. No surprises.
          </p>
          <div className="hero-line hero-d3 flex flex-col sm:flex-row items-start gap-4">
            <QuoteCta
              source="site-classification hero"
              label="Get Your Fixed-Fee Quote"
              className="flex items-center justify-center px-8 py-2.5 bg-gradient-to-b from-[#346b43] to-forest-green text-white rounded-full shadow-[0_8px_20px_-6px_rgba(45,90,58,0.4)] hover:shadow-[0_12px_24px_-8px_rgba(45,90,58,0.6)] hover:brightness-105 transition-all hover:-translate-y-0.5 w-full sm:w-auto h-[46px] text-xs font-semibold tracking-wide"
            />
            <Link
              href="tel:+61423483555"
              className="flex items-center justify-center px-8 py-2.5 bg-white text-forest-green rounded-full shadow-[inset_0_0_0_1px_rgba(45,90,58,0.25),0_4px_10px_-4px_rgba(0,0,0,0.05)] hover:bg-forest-green/5 hover:shadow-[inset_0_0_0_1px_rgba(45,90,58,0.4),0_6px_14px_-4px_rgba(0,0,0,0.1)] transition-all hover:-translate-y-0.5 w-full sm:w-auto h-[46px] text-xs font-semibold tracking-wide"
            >
              Call 0423 483 555
            </Link>
          </div>
          <p className="hero-line hero-d3 mt-5 text-sm text-gray-500 font-light tracking-wide">From $800 + GST &middot; Reports as soon as 2 business days from fieldwork &middot; Response within one business day</p>
        </div>
      </section>

      <SectionNav items={NAV} />

      {/* 01 — What it does, with the fieldwork film */}
      <section id="what" className="py-20 lg:py-24 px-6 lg:px-12 max-w-7xl mx-auto border-t border-gray-100 scroll-mt-[136px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <Reveal variant="group">
            <figure>
              <div data-fx="scale" className="w-full aspect-video rounded-2xl overflow-hidden shadow-[0_26px_60px_-26px_rgba(5,10,7,0.4)]">
                <VideoEmbed
                  id="F4pXJ63gAUM"
                  title="Site Classification to AS 2870 — SFGEO geotechnical investigation in Cherrybrook, NSW"
                />
              </div>
              <figcaption data-fx="rise" style={d(240)} className="mt-3 text-[11px] uppercase tracking-[0.25em] text-gray-500 font-semibold text-center">
                SFGEO Fieldwork &middot; The Work Behind Every Report
              </figcaption>
            </figure>
          </Reveal>
          <Reveal variant="group">
            <p data-fx="rise" className="text-sm uppercase tracking-[0.2em] text-forest-green mb-4 font-semibold">01 &middot; What It Does</p>
            <h2 data-fx="rise" style={d(80)} className="text-3xl sm:text-4xl font-montserrat font-light tracking-tight text-slate-950 mb-5">
              More Than <span className="font-semibold h-bold">Paperwork.</span>
            </h2>
            <div data-fx="line" style={d(200)} className="h-px bg-forest-green w-12 mb-7" />
            <p data-fx="rise" style={d(160)} className="text-gray-600 font-light leading-relaxed mb-7">
              Often called a soil test or geotech report, a site classification under AS 2870 — done properly, and done early — works for you four ways:
            </p>
            <ul data-stagger style={d(240)} className="space-y-3 mb-2">
              {[
                "Lets your architect design with the ground, not around it — before redesign fees exist",
                "Gives your structural engineer real data: a properly read Class M instead of an assumed worst-case H1 is tens of thousands in concrete and steel",
                "Moves cleanly through DA and CDC — written to your certifier's requirements, not a template",
                "Protects the finished home from the cracks that show up quietly, years later",
              ].map((s) => (
                <li key={s} className="flex items-start gap-3 text-[15px] text-gray-600 font-light leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-forest-green mt-[9px] shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* 02 — The SFGEO way */}
      <section id="difference" className="py-20 lg:py-24 px-6 lg:px-12 max-w-7xl mx-auto border-t border-gray-100 scroll-mt-[136px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-14">
          <PhotoFrame
            src="/sfgeo-principal-engineer-reviewing-architectural-plans-as2870.jpg"
            alt="SFGEO Principal Engineer reviewing architectural plans against AS 2870"
            caption={<>02 &middot; The SFGEO Way</>}
            aspect="aspect-[4/3]"
            sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 50vw, 600px"
            wrapperClassName="lg:order-2"
          />
          <Reveal variant="group">
            <p data-fx="rise" className="text-sm uppercase tracking-[0.2em] text-forest-green mb-4 font-semibold">02 &middot; The SFGEO Way</p>
            <h2 data-fx="rise" style={d(80)} className="text-3xl sm:text-4xl font-montserrat font-light tracking-tight text-slate-950 mb-5">
              Built On The <span className="font-semibold h-bold">Opposite Model.</span>
            </h2>
            <div data-fx="line" style={d(200)} className="h-px bg-forest-green w-12 mb-7" />
            <p data-fx="rise" style={d(160)} className="text-gray-600 font-light leading-relaxed">
              Most Sydney geotechnical firms run on volume: cheap headline fees, templated reports, conservative defaults — and a signing engineer who never set foot on the property. You pay for that model either way, in concrete you didn&rsquo;t need or a report your certifier rejects. At SFGEO, the person reading your ground has drilled ground like it, built against ground like it, and carries the engineering qualifications on top — one professional, not three.
            </p>
          </Reveal>
        </div>
        <Reveal variant="group">
          <div data-fx="rise" className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
            <div className="hidden md:grid grid-cols-2 border-b border-gray-100">
              <div className="px-8 py-5 font-semibold text-gray-500 uppercase tracking-[0.2em] text-[11px]">The Volume Model</div>
              <div className="px-8 py-5 font-semibold text-forest-green border-l border-gray-100 uppercase tracking-[0.2em] text-[11px]">The SFGEO Way</div>
            </div>
            <div className="divide-y divide-gray-100">
              {COMPARE.map((row, idx) => (
                <div key={idx} className="flex flex-col md:grid md:grid-cols-2 p-8 md:p-0">
                  <div className="md:px-8 md:py-6 text-gray-500 font-light md:border-r border-gray-100 pb-3 md:pb-6 leading-relaxed">
                    <span className="block md:hidden text-[11px] font-bold uppercase tracking-widest text-gray-500 mb-1.5">The Volume Model</span>
                    {row.volume}
                  </div>
                  <div className="md:px-8 md:py-6 text-slate-950 font-medium leading-relaxed">
                    <span className="block md:hidden text-[11px] font-bold uppercase tracking-widest text-forest-green mb-1.5 mt-2">The SFGEO Way</span>
                    {row.sfgeo}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* 03 — Pricing */}
      <section id="pricing" className="py-20 lg:py-24 px-6 lg:px-12 max-w-7xl mx-auto border-t border-gray-100 scroll-mt-[136px]">
        <Reveal variant="group" className="mb-14 max-w-3xl">
          <p data-fx="rise" className="text-sm uppercase tracking-[0.2em] text-forest-green mb-4 font-semibold">03 &middot; Scope &amp; Pricing</p>
          <h2 data-fx="rise" style={d(80)} className="text-3xl sm:text-4xl font-montserrat font-light tracking-tight text-slate-950 mb-5">
            Fixed Fees. <span className="font-semibold h-bold">In Writing. First.</span>
          </h2>
          <div data-fx="line" style={d(200)} className="h-px bg-forest-green w-12 mb-7" />
          <p data-fx="rise" style={d(160)} className="text-gray-600 font-light leading-relaxed">
            The figures below are starting points — what drives a real quote is the site itself: access, ground conditions, existing structures, slope, and the depth of investigation your project actually needs. Every fee is confirmed in writing before work begins.
          </p>
          <p data-fx="rise" style={d(220)} className="mt-4 text-gray-600 font-light leading-relaxed">
            Full price bands and what moves a quote: <Link href="/geotechnical-report-cost-sydney" className="text-forest-green hover:underline font-medium">geotechnical report cost guide</Link>.
          </p>
        </Reveal>
        <Reveal variant="group">
          <div data-stagger className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { k: "ANCILLARY RESIDENTIAL", price: <>$800</>, from: true, d: "Granny flats. Small additions. New homes on cleared blocks. Tightly scoped projects with straightforward access, priced from $800. Every fee is set against your specific block." },
              { k: "STANDARD RESIDENTIAL", price: <>$1,000</>, from: true, d: "The right tier for most Sydney custom builds. Single or double-storey homes on established streets. Pool additions, duplexes, and dwellings with in-ground pools." },
              { k: "COMPLEX PROJECTS & SITES", price: <>Custom</>, from: false, d: "Basements. Multi-storey. Retaining walls. Sloping blocks. Restricted access. Strata. Prestige-suburb projects. Every complex site is different, and we price them that way." },
            ].map((c) => (
              <div key={c.k} className="card-lift flex flex-col h-full bg-white border border-gray-100 p-10 rounded-2xl shadow-sm">
                <h3 className="text-[11px] font-semibold tracking-[0.2em] text-forest-green uppercase mb-6">{c.k}</h3>
                <p className="text-4xl font-montserrat font-light text-slate-950 tracking-tight mb-6 flex items-baseline gap-2">
                  {c.from && <span className="text-lg text-gray-600 font-medium lowercase">from</span>} {c.price} {c.from && <span className="text-lg text-gray-600 font-medium">+ GST</span>}
                </p>
                <p className="text-[15px] text-gray-600 font-light leading-relaxed flex-grow">{c.d}</p>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal variant="group">
          <div data-fx="rise" className="mt-12 text-center">
            <QuoteCta
              source="site-classification pricing"
              label="Get Your Fixed-Fee Quote"
              className="inline-flex items-center justify-center px-8 py-2.5 bg-gradient-to-b from-[#346b43] to-forest-green text-white rounded-full shadow-[0_8px_20px_-6px_rgba(45,90,58,0.4)] hover:shadow-[0_12px_24px_-8px_rgba(45,90,58,0.6)] hover:brightness-105 transition-all hover:-translate-y-0.5 h-[46px] text-xs font-semibold tracking-wide"
            />
            <p className="mt-4 text-sm text-gray-500 font-light">Send the address and what you&rsquo;re building — a fixed fee in writing within one business day.</p>
          </div>
        </Reveal>
      </section>

      {/* 04 — Access */}
      <section id="access" className="py-20 lg:py-24 px-6 lg:px-12 max-w-7xl mx-auto border-t border-gray-100 scroll-mt-[136px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="grid grid-cols-2 gap-4">
            <PhotoFrame
              src="/sfgeo-4wd-rig-suburban-block-willoughby.jpg"
              alt="SFGEO 4WD drill rig set up on the front lawn of a suburban Sydney home with the engineer at the hole"
              caption="Backyards"
              aspect="aspect-[3/4]"
              sizes="(max-width: 1024px) 50vw, 30vw"
              className="shadow-[0_20px_50px_-20px_rgba(5,10,7,0.35)]"
              delay={0}
            />
            <PhotoFrame
              src="/sfgeo-hand-auger-paved-courtyard.jpg"
              alt="Hand auger boring through lifted pavers in a courtyard where a rig cannot reach, spoil and field log alongside"
              caption="By Hand"
              aspect="aspect-[3/4]"
              sizes="(max-width: 1024px) 50vw, 30vw"
              className="shadow-[0_20px_50px_-20px_rgba(5,10,7,0.35)]"
              wrapperClassName="lg:mt-8"
              delay={120}
            />
          </div>
          <Reveal variant="group">
            <p data-fx="rise" className="text-sm uppercase tracking-[0.2em] text-forest-green mb-4 font-semibold">04 &middot; Access</p>
            <h2 data-fx="rise" style={d(80)} className="text-3xl sm:text-4xl font-montserrat font-light tracking-tight text-slate-950 mb-5">
              Where Standard Rigs <span className="font-semibold h-bold">Stop At The Kerb.</span>
            </h2>
            <div data-fx="line" style={d(200)} className="h-px bg-forest-green w-12 mb-7" />
            <p data-fx="rise" style={d(160)} className="text-gray-600 font-light leading-relaxed mb-8">
              Inner West terraces, battleaxe blocks, rear-yard granny flat positions, stepped sites with deep investigation points — SFGEO runs a 4WD-mounted rig for the sites conventional trucks can&rsquo;t reach, with motorised hand augers covering zero-clearance and internal courtyard work. Access-ready from first contact, so your program doesn&rsquo;t slip waiting on a rig that can&rsquo;t get in.
            </p>
            <Link data-fx="rise" style={d(220)} href="/tight-access-drilling" className="text-sm font-semibold tracking-wide text-forest-green group inline-flex items-center gap-2">
              <span className="draw-link">Explore Tight Access Capability</span>
              <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 05 — The classes */}
      <section id="classes" className="py-20 lg:py-24 px-6 lg:px-12 max-w-7xl mx-auto border-t border-gray-100 scroll-mt-[136px]">
        <Reveal variant="group" className="mb-14 max-w-3xl">
          <p data-fx="rise" className="text-sm uppercase tracking-[0.2em] text-forest-green mb-4 font-semibold">05 &middot; The Classes</p>
          <h2 data-fx="rise" style={d(80)} className="text-[min(1.875rem,6.9vw)] sm:text-4xl font-montserrat font-light tracking-tight text-slate-950 mb-5">
            Six Classes. <span className="font-semibold h-bold">One Letter That Matters.</span>
          </h2>
          <div data-fx="line" style={d(200)} className="h-px bg-forest-green w-12 mb-7" />
          <p data-fx="rise" style={d(160)} className="text-gray-600 font-light leading-relaxed">
            AS 2870 classifies your site by how much the ground moves with moisture — and that letter drives every footing decision your structural engineer makes.
          </p>
        </Reveal>
        <Reveal variant="group">
          <div data-fx="rise" className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm mb-8 max-w-4xl">
            <div className="divide-y divide-gray-100">
              {CLASSES.map((row) => (
                <div key={row.cls} className="grid grid-cols-[90px_1fr] md:grid-cols-[140px_1fr]">
                  <div className="px-8 py-5 font-montserrat font-semibold text-forest-green text-2xl border-r border-gray-100 flex items-center">{row.cls}</div>
                  <div className="px-8 py-5 text-slate-950 font-light flex items-center text-[16px] leading-relaxed">{row.desc}</div>
                </div>
              ))}
            </div>
          </div>
          <p data-fx="rise" style={d(160)} className="text-gray-600 font-light leading-relaxed max-w-3xl">
            <strong className="font-medium text-slate-950">Class P</strong> sits outside the reactivity scale — applied when conditions fall outside the standard framework: fill, steep slope, soft or collapsing soils, reactivity beyond Class E, or proximity to significant trees and watercourses. It requires individual engineering assessment, and often a full <Link href="/geotechnical-investigations" className="text-forest-green hover:underline">geotechnical investigation</Link>.
          </p>
        </Reveal>
      </section>

      {/* 06 — What you receive */}
      <section id="report" className="py-20 lg:py-24 px-6 lg:px-12 max-w-7xl mx-auto border-t border-gray-100 scroll-mt-[136px]">
        <Reveal variant="group" className="mb-14 max-w-3xl">
          <p data-fx="rise" className="text-sm uppercase tracking-[0.2em] text-forest-green mb-4 font-semibold">06 &middot; What You Receive</p>
          <h2 data-fx="rise" style={d(80)} className="text-3xl sm:text-4xl font-montserrat font-light tracking-tight text-slate-950 mb-5">
            One Report. <span className="font-semibold h-bold">Everything Your Engineer Needs.</span>
          </h2>
          <div data-fx="line" style={d(200)} className="h-px bg-forest-green w-12 mb-7" />
          <p data-fx="rise" style={d(160)} className="text-gray-600 font-light leading-relaxed">
            A signed PDF written to your certifier&rsquo;s and structural engineer&rsquo;s requirements — the document the footing design is drawn from.
          </p>
        </Reveal>
        <Reveal variant="group">
          <ul data-stagger className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 max-w-4xl">
            {REPORT_CONTENTS.map((s) => (
              <li key={s} className="flex items-start gap-3 text-[15px] text-gray-600 font-light leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-forest-green mt-[9px] shrink-0" />
                {s}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* Statement band */}
      <section className="relative overflow-hidden bg-[#050A07] text-white grain aurora">
        <div className="max-w-4xl mx-auto px-6 py-24 lg:py-28 text-center">
          <Reveal variant="group">
            <p data-fx="rise" className="text-2xl sm:text-4xl font-montserrat font-light leading-snug tracking-tight">
              &ldquo;Two doors down from a Class S site, your land may be a Class H1 site. This is why the fieldwork — <span className="font-semibold text-[#8FBF9F]">engineered properly</span> — matters.&rdquo;
            </p>
          </Reveal>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <GoogleReviews />
      </section>

      <CloseBand
        source="site-classification close"
        heading={<>Start With <span className="font-semibold h-bold">The Address.</span></>}
        sub="Every SFGEO engagement begins with the Principal Engineer reading your block and your plans — and standing on your ground on the day."
      >
        <div className="max-w-2xl mx-auto text-left">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-5">
            {PROCESS.map((p, i) => (
              <div key={p.t} className="flex items-start gap-4">
                <span className="font-montserrat font-light text-[#8FBF9F] text-xl leading-none mt-0.5">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <p className="text-sm font-semibold text-white mb-1">{p.t}</p>
                  <p className="text-[13px] text-gray-400 font-light leading-relaxed">{p.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CloseBand>
    </div>
  );
}
