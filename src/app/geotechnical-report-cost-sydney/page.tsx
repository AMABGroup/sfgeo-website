import { Metadata } from "next";
import Link from "next/link";
import type { CSSProperties } from "react";
import QuoteCta from "@/components/forms/QuoteCta";
import Reveal from "@/components/ui/Reveal";
import SectionNav from "@/components/ui/SectionNav";
import CloseBand from "@/components/ui/CloseBand";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta(
  "Geotechnical Report Cost Sydney | From $800 + GST | SFGEO",
  "Geotechnical report and soil test costs in Sydney: site classification from $800 + GST, coring from $120 + GST per hole, and how investigations are quoted.",
  "/geotechnical-report-cost-sydney",
);

const d = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

// The three site-classification tiers — copied verbatim from /site-classification.
const TIERS = [
  { k: "ANCILLARY RESIDENTIAL", price: <>$800</>, from: true, d: "Granny flats. Small additions. New homes on cleared blocks. Tightly scoped projects with straightforward access, priced from $800. Every fee is set against your specific block." },
  { k: "STANDARD RESIDENTIAL", price: <>$1,000</>, from: true, d: "The right tier for most Sydney custom builds. Single or double-storey homes on established streets. Pool additions, duplexes, and dwellings with in-ground pools." },
  { k: "COMPLEX PROJECTS & SITES", price: <>Custom</>, from: false, d: "Basements. Multi-storey. Retaining walls. Sloping blocks. Restricted access. Strata. Prestige-suburb projects. Every complex site is different, and we price them that way." },
];

const DRIVERS = [
  { t: "Access", d: "A 4WD rig on a cleared block is the base case. A battleaxe block, a rear yard behind a carport or an internal courtyard means motorised hand augers and more time at the hole." },
  { t: "Ground conditions", d: "Reactive clay, uncontrolled fill and shallow rock each change how deep the holes go and what has to be sampled." },
  { t: "Existing structures", d: "Footings, slabs, pools and neighbouring buildings shape where the holes can go and what the report has to answer." },
  { t: "Slope", d: "A sloping block brings retaining and stability questions into the scope." },
  { t: "Investigation depth", d: "Holes are sized to the base of the excavation plus what the footing design needs below it — a basement is a different job to a slab on ground." },
  { t: "Laboratory program", d: "Testing through a NATA-accredited laboratory when the site warrants it, not as padding." },
];

const FAQS = [
  {
    q: "Does a soil test cost extra on top of the report?",
    a: "No. A site classification is the soil test — one fee covers the fieldwork, laboratory testing where the site warrants it, and the signed report. There is no separate soil-test line.",
  },
  {
    q: "Is the fee fixed?",
    a: "Yes. The bands on this page are starting points; the fee for your block is confirmed in writing before work begins, and that is the figure you are invoiced.",
  },
  {
    q: "What if the ground turns out worse than expected?",
    a: "The fee is fixed before fieldwork, so a harder day at the hole is ours. If what comes up genuinely changes the scope — fill or slope that calls for a full geotechnical investigation, for example — we tell you before doing more work, and the extra scope is quoted the same way: in writing, before it starts.",
  },
  {
    q: "Do you charge for a quote?",
    a: "No. Send the address and what you are building, and you will have a fixed fee in writing within one business day.",
  },
];

const NAV = [
  { id: "site-classification", label: "Site Classification" },
  { id: "what-moves-a-quote", label: "What Moves A Quote" },
  { id: "concrete-coring", label: "Coring" },
  { id: "investigations", label: "Investigations" },
  { id: "turnaround", label: "Turnaround" },
  { id: "questions", label: "Questions" },
];

export default function GeotechnicalReportCostPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "item": { "@id": "https://sfgeo.com.au/", "name": "Home" } },
      { "@type": "ListItem", "position": 2, "item": { "@id": "https://sfgeo.com.au/geotechnical-report-cost-sydney", "name": "Geotechnical Report Cost Sydney" } }
    ]
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQS.map((f) => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a },
    })),
  };

  return (
    <div className="bg-white text-slate-950 font-inter selection:bg-forest-green selection:text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="pt-36 pb-20 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <p className="hero-line text-sm uppercase tracking-[0.2em] text-forest-green mb-6 font-semibold">
            Cost Guide &middot; Fixed Fees &middot; Sydney
          </p>
          <h1 className="text-4xl sm:text-6xl font-montserrat font-light tracking-tight leading-[1.08] mb-8">
            <span className="hero-mask"><span className="mask-line mask-d1"><span>How Much Does A Geotechnical Report</span></span></span>
            <span className="hero-mask"><span className="mask-line mask-d2"><span className="font-semibold h-bold">Cost In Sydney?</span></span></span>
          </h1>
          <div className="hero-line hero-d2 w-[96px] h-[3px] bg-forest-green mb-8" />
          <p className="hero-line hero-d2 text-lg sm:text-xl text-gray-600 font-light leading-relaxed mb-10">
            It depends on the block, not the size of the build — but the starting points are published, and every fee is confirmed in writing before anyone drills. Here is what each kind of report costs and what moves the number.
          </p>
          <div className="hero-line hero-d3 flex flex-col sm:flex-row items-start gap-4">
            <Link
              href="tel:+61423483555"
              className="flex items-center justify-center px-8 py-2.5 bg-gradient-to-b from-[#346b43] to-forest-green text-white rounded-full shadow-[0_8px_20px_-6px_rgba(45,90,58,0.4)] hover:shadow-[0_12px_24px_-8px_rgba(45,90,58,0.6)] hover:brightness-105 transition-all hover:-translate-y-0.5 w-full sm:w-auto h-[46px] text-xs font-semibold tracking-wide"
            >
              Call 0423 483 555
            </Link>
            <QuoteCta
              source="cost guide hero"
              label="Get Your Fixed-Fee Quote"
              className="flex items-center justify-center px-8 py-2.5 bg-white text-forest-green rounded-full shadow-[inset_0_0_0_1px_rgba(45,90,58,0.25),0_4px_10px_-4px_rgba(0,0,0,0.05)] hover:bg-forest-green/5 hover:shadow-[inset_0_0_0_1px_rgba(45,90,58,0.4),0_6px_14px_-4px_rgba(0,0,0,0.1)] transition-all hover:-translate-y-0.5 w-full sm:w-auto h-[46px] text-xs font-semibold tracking-wide"
            />
          </div>
        </div>
      </section>

      <SectionNav items={NAV} />

      {/* 01 — Site classification tiers */}
      <section id="site-classification" className="py-20 lg:py-24 px-6 lg:px-12 max-w-7xl mx-auto border-t border-gray-100 scroll-mt-[136px]">
        <Reveal variant="group" className="mb-14 max-w-3xl">
          <p data-fx="rise" className="text-sm uppercase tracking-[0.2em] text-forest-green mb-4 font-semibold">01 &middot; Site Classification</p>
          <h2 data-fx="rise" style={d(80)} className="text-3xl sm:text-4xl font-montserrat font-light tracking-tight text-slate-950 mb-5">
            Site Classification. <span className="font-semibold h-bold">Three Tiers.</span>
          </h2>
          <div data-fx="line" style={d(200)} className="h-px bg-forest-green w-12 mb-7" />
          <p data-fx="rise" style={d(160)} className="text-gray-600 font-light leading-relaxed">
            The AS 2870 <Link href="/site-classification" className="text-forest-green hover:underline">site classification</Link> is the report most Sydney homes, extensions, pools and granny flats need. It is fixed-fee, and the tier is set by the complexity of your block, not the size of your project.
          </p>
        </Reveal>
        <Reveal variant="group">
          <div data-stagger className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TIERS.map((c) => (
              <div key={c.k} className="card-lift flex flex-col h-full bg-white border border-gray-100 p-10 rounded-2xl shadow-sm">
                <span className="text-[11px] font-semibold tracking-[0.2em] text-forest-green uppercase mb-6">{c.k}</span>
                <h3 className="text-4xl font-montserrat font-light text-slate-950 tracking-tight mb-6 flex items-baseline gap-2">
                  {c.from && <span className="text-lg text-gray-600 font-medium lowercase">from</span>} {c.price} {c.from && <span className="text-lg text-gray-600 font-medium">+ GST</span>}
                </h3>
                <p className="text-[15px] text-gray-600 font-light leading-relaxed flex-grow">{c.d}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* 02 — What moves a quote */}
      <section id="what-moves-a-quote" className="py-20 lg:py-24 px-6 lg:px-12 max-w-7xl mx-auto border-t border-gray-100 scroll-mt-[136px]">
        <Reveal variant="group" className="mb-14 max-w-3xl">
          <p data-fx="rise" className="text-sm uppercase tracking-[0.2em] text-forest-green mb-4 font-semibold">02 &middot; What Moves A Quote</p>
          <h2 data-fx="rise" style={d(80)} className="text-3xl sm:text-4xl font-montserrat font-light tracking-tight text-slate-950 mb-5">
            The Bands Are Starting Points. <span className="font-semibold h-bold">The Site Sets The Fee.</span>
          </h2>
          <div data-fx="line" style={d(200)} className="h-px bg-forest-green w-12 mb-7" />
          <p data-fx="rise" style={d(160)} className="text-gray-600 font-light leading-relaxed">
            What drives a real quote is the site itself. Six things move the number.
          </p>
        </Reveal>
        <Reveal variant="group">
          <div data-stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DRIVERS.map((dr) => (
              <div key={dr.t} className="card-lift p-8 bg-white border border-gray-100 rounded-2xl shadow-sm h-full">
                <h3 className="text-lg font-montserrat font-semibold text-slate-950 mb-3">{dr.t}</h3>
                <p className="text-gray-600 font-light leading-relaxed text-[15px]">{dr.d}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* 03 — Concrete coring */}
      <section id="concrete-coring" className="py-20 lg:py-24 px-6 lg:px-12 max-w-7xl mx-auto border-t border-gray-100 scroll-mt-[136px]">
        <Reveal variant="group" className="max-w-3xl">
          <p data-fx="rise" className="text-sm uppercase tracking-[0.2em] text-forest-green mb-4 font-semibold">03 &middot; Concrete Coring</p>
          <h2 data-fx="rise" style={d(80)} className="text-3xl sm:text-4xl font-montserrat font-light tracking-tight text-slate-950 mb-5">
            Concrete Coring. <span className="font-semibold h-bold">Per Hole.</span>
          </h2>
          <div data-fx="line" style={d(200)} className="h-px bg-forest-green w-12 mb-7" />
          <p data-fx="rise" style={d(160)} className="text-gray-600 font-light leading-relaxed mb-8">
            <Link href="/concrete-coring" className="text-forest-green hover:underline">Engineer-supervised concrete coring</Link> is $120 + GST per hole, with a three-hole minimum per visit. The final fee depends on core size, location, access and time on site — quoted fixed, in writing, before the barrel touches concrete.
          </p>
          <div data-fx="rise" style={d(220)}>
            <Link href="/concrete-coring" className="text-sm font-semibold tracking-wide text-forest-green group inline-flex items-center gap-2">
              <span className="draw-link">What Coring Covers</span>
              <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
            </Link>
          </div>
        </Reveal>
      </section>

      {/* 04 — Investigations, assessments and design parameters */}
      <section id="investigations" className="py-20 lg:py-24 px-6 lg:px-12 max-w-7xl mx-auto border-t border-gray-100 scroll-mt-[136px]">
        <Reveal variant="group" className="max-w-3xl">
          <p data-fx="rise" className="text-sm uppercase tracking-[0.2em] text-forest-green mb-4 font-semibold">04 &middot; Investigations, Assessments &amp; Design Parameters</p>
          <h2 data-fx="rise" style={d(80)} className="text-3xl sm:text-4xl font-montserrat font-light tracking-tight text-slate-950 mb-5">
            Bigger Questions. <span className="font-semibold h-bold">Quoted Per Site.</span>
          </h2>
          <div data-fx="line" style={d(200)} className="h-px bg-forest-green w-12 mb-7" />
          <p data-fx="rise" style={d(160)} className="text-gray-600 font-light leading-relaxed mb-6">
            <Link href="/geotechnical-investigations" className="text-forest-green hover:underline">Geotechnical investigations</Link>, assessments and design parameters carry no published band, because no two are alike. Each is quoted against the number and depth of boreholes, the access, and the laboratory program the design needs.
          </p>
          <p data-fx="rise" style={d(220)} className="text-gray-600 font-light leading-relaxed mb-6">
            The Complex Projects tier above is the signpost: basements, multi-storey, retaining walls, sloping blocks, restricted access, strata and prestige-suburb projects. Every complex site is different, and we price them that way.
          </p>
          <p data-fx="rise" style={d(280)} className="text-gray-600 font-light leading-relaxed mb-8">
            <Link href="/contact" className="text-forest-green hover:underline">Send the address and the plans you have</Link> — a fixed fee in writing within one business day.
          </p>
          <div data-fx="rise" style={d(340)}>
            <Link href="/geotechnical-investigations" className="text-sm font-semibold tracking-wide text-forest-green group inline-flex items-center gap-2">
              <span className="draw-link">What An Investigation Involves</span>
              <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
            </Link>
          </div>
        </Reveal>
      </section>

      {/* 05 — Turnaround */}
      <section id="turnaround" className="py-20 lg:py-24 px-6 lg:px-12 max-w-7xl mx-auto border-t border-gray-100 scroll-mt-[136px]">
        <Reveal variant="group" className="max-w-3xl">
          <p data-fx="rise" className="text-sm uppercase tracking-[0.2em] text-forest-green mb-4 font-semibold">05 &middot; Turnaround</p>
          <h2 data-fx="rise" style={d(80)} className="text-3xl sm:text-4xl font-montserrat font-light tracking-tight text-slate-950 mb-5">
            Quote In A Day. <span className="font-semibold h-bold">Report In Days.</span>
          </h2>
          <div data-fx="line" style={d(200)} className="h-px bg-forest-green w-12 mb-7" />
          <p data-fx="rise" style={d(160)} className="text-gray-600 font-light leading-relaxed">
            A fixed fee in writing within one business day of your enquiry. Site classification reports as soon as 2–3 business days from fieldwork; urgent turnaround by arrangement. Investigation and design timelines are set out in the written quote.
          </p>
        </Reveal>
      </section>

      {/* 06 — Common questions */}
      <section id="questions" className="py-20 lg:py-24 px-6 lg:px-12 max-w-7xl mx-auto border-t border-gray-100 scroll-mt-[136px]">
        <Reveal variant="group" className="mb-12 max-w-3xl">
          <p data-fx="rise" className="text-sm uppercase tracking-[0.2em] text-forest-green mb-4 font-semibold">06 &middot; Common Questions</p>
          <h2 data-fx="rise" style={d(80)} className="text-3xl sm:text-4xl font-montserrat font-light tracking-tight text-slate-950 mb-5">
            Before You Ask. <span className="font-semibold h-bold">Straight Answers.</span>
          </h2>
          <div data-fx="line" style={d(200)} className="h-px bg-forest-green w-12" />
        </Reveal>
        <Reveal variant="group">
          <dl data-stagger className="max-w-3xl divide-y divide-gray-100 border-y border-gray-100">
            {FAQS.map((f) => (
              <div key={f.q} className="py-7">
                <dt className="text-lg font-montserrat font-semibold text-slate-950 mb-3">{f.q}</dt>
                <dd className="text-gray-600 font-light leading-relaxed">{f.a}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </section>

      <CloseBand
        source="cost guide close"
        heading={<>Know The Fee <span className="font-semibold h-bold">Before The Rig.</span></>}
        sub={<>Send the address and what you&rsquo;re building. The Principal reads it and comes back with a fixed fee in writing within one business day.</>}
      />
    </div>
  );
}
