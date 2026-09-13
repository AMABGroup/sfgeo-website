import { Metadata } from "next";
import Link from "next/link";
import type { CSSProperties } from "react";
import QuoteCta from "@/components/forms/QuoteCta";
import PhotoFrame from "@/components/ui/PhotoFrame";
import Reveal from "@/components/ui/Reveal";
import CloseBand from "@/components/ui/CloseBand";
import { pageMeta } from "@/lib/seo";
import QuietFaq from "@/components/sections/QuietFaq";

export const metadata: Metadata = pageMeta(
  "Geotechnical Design Parameters Sydney | SFGEO",
  "Geotechnical design parameters for Sydney structural and civil engineers: bearing, pile and retaining values. Fixed fee in writing within one business day.",
  "/geotechnical-design",
);

const d = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

const ITEMS = [
  { t: "Bearing Capacities", d: "Allowable bearing for shallow footings and piers, by stratum and depth." },
  { t: "Pile Design Values", d: "End bearing and shaft adhesion for bored piers and piles, with socket and construction guidance." },
  { t: "Retaining Walls (AS 4678)", d: "Unit weights, strength values and earth pressure coefficients per stratum." },
  { t: "Pavement & Subgrade", d: "CBR values and subgrade advice for driveways, car parks and civil pavements." },
  { t: "Working Platforms", d: "Platform bearing verification for cranes, rigs and heavy plant." },
  { t: "Excavation & Groundwater", d: "Batter guidance, excavatability and groundwater observations for basements and cuts." },
];

// Rendered visibly below and mirrored into the FAQPage schema: the two must stay in step.
const FAQS = [
  {
    q: "What geotechnical design parameters does SFGEO provide?",
    a: "SFGEO provides the design parameters for footings, piles, retaining walls, pavements, working platforms and excavations. Allowable bearing pressures are given by stratum and depth for shallow footings and piers. Pile values cover end bearing and shaft adhesion. Retaining walls take AS 4678 parameters per stratum. Pavements take CBR values. Working platforms are verified for cranes and heavy plant. Basements and cuts get batter guidance, excavatability and groundwater observations.",
  },
  {
    q: "Which investigation do the design parameters come from?",
    a: "A geotechnical investigation on your site: boreholes drilled by the engineer with the 4WD-mounted rig or motorised hand augers, penetrometer tests, and laboratory testing through NATA-accredited laboratories where the site warrants it. Residential boreholes are sized to the base of excavation plus one to two metres. No value is a presumptive figure copied between reports. See geotechnical investigations.",
  },
  {
    q: "What form do the design parameters come in?",
    a: "The parameters arrive as a signed memo with tables your design software takes directly. The derivation is available on request. SFGEO does not carry the structural design. Your engineer reads the values into the footing, pile or retaining wall design. If the contractor proposes another footing system, SFGEO reviews it against the ground data. Once the excavation opens, construction phase support verifies the values at bearing level.",
  },
  {
    q: "How is geotechnical design work priced?",
    a: "The fee is set against the number and depth of boreholes, site access and the laboratory programme. Send the site address and the structural concept. The quote is a fixed fee in writing within one business day. An investigation that includes laboratory testing is typically five to seven business days from fieldwork, confirmed in the written quote. Laboratory testing is applied where the site warrants it, not by default.",
  },
];

export default function Page() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "item": { "@id": "https://sfgeo.com.au/", "name": "Home" } },
      { "@type": "ListItem", "position": 2, "item": { "@id": "https://sfgeo.com.au/geotechnical", "name": "Geotechnical" } },
      { "@type": "ListItem", "position": 3, "item": { "@id": "https://sfgeo.com.au/geotechnical-design", "name": "Geotechnical Design" } }
    ]
  };
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Geotechnical Design",
    "serviceType": "Geotechnical design parameters",
    "description": "Site-specific geotechnical design inputs for structural and civil engineers: bearing capacities, pile values, AS 4678 retaining parameters and pavements.",
    "url": "https://sfgeo.com.au/geotechnical-design",
    "provider": { "@id": "https://sfgeo.com.au/#organization" },
    "areaServed": { "@type": "City", "name": "Sydney, New South Wales, Australia" }
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="pt-36 pb-20 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <p className="hero-line text-sm uppercase tracking-[0.2em] text-forest-green mb-6 font-semibold">Geotechnical Design &middot; For Structural &amp; Civil Teams</p>
          <h1 className="text-[min(2.25rem,8.2vw)] sm:text-6xl font-montserrat font-light tracking-tight leading-[1.08] mb-8">
            <span className="hero-mask"><span className="mask-line mask-d1"><span>Geotechnical Design Parameters.</span></span></span>{" "}
            <span className="hero-mask"><span className="mask-line mask-d2"><span className="font-semibold h-bold">The Numbers Under The Design.</span></span></span>
          </h1>
          <div className="hero-line hero-d2 w-[96px] h-[3px] bg-forest-green mb-8" />
          <p className="hero-line hero-d2 text-lg sm:text-xl text-gray-600 font-light leading-relaxed">Your structure is only as good as the parameters beneath it. SFGEO supplies the site-specific inputs structural and civil engineers design from, investigated, derived and signed by the engineer who read the ground.</p>
          <div className="hero-line hero-d3 mt-10 flex flex-col sm:flex-row items-start gap-4">
            <Link
              href="tel:+61423483555"
              className="flex items-center justify-center px-8 py-2.5 bg-gradient-to-b from-[#346b43] to-forest-green text-white rounded-full shadow-[0_8px_20px_-6px_rgba(45,90,58,0.4)] hover:shadow-[0_12px_24px_-8px_rgba(45,90,58,0.6)] hover:brightness-105 transition-all hover:-translate-y-0.5 w-full sm:w-auto h-[46px] text-xs font-semibold tracking-wide"
            >
              Call 0423 483 555
            </Link>
            <QuoteCta
              source="geotechnical-design hero"
              label="Request Design Parameters"
              eyebrow="Design parameters"
              heading="Request Design Parameters"
              subheading="Send the structural concept and the site. Scope and fee in writing within one business day."
              className="flex items-center justify-center px-8 py-2.5 bg-white text-forest-green rounded-full shadow-[inset_0_0_0_1px_rgba(45,90,58,0.25),0_4px_10px_-4px_rgba(0,0,0,0.05)] hover:bg-forest-green/5 hover:shadow-[inset_0_0_0_1px_rgba(45,90,58,0.4),0_6px_14px_-4px_rgba(0,0,0,0.1)] transition-all hover:-translate-y-0.5 w-full sm:w-auto h-[46px] text-xs font-semibold tracking-wide"
            />
          </div>
          <p className="hero-line hero-d3 mt-5 text-xs text-gray-400 font-light tracking-wide">For structural and civil engineers &middot; Fixed fee in writing within one business day &middot; Reports typically five to seven business days from fieldwork</p>
        </div>
      </section>

      <section className="py-20 lg:py-24 px-6 lg:px-12 max-w-7xl mx-auto border-t border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <PhotoFrame
            src="/sfgeo-weathered-rock-in-hand-newport.jpg"
            alt="Cupped hands holding fragments of weathered Newport Formation rock brought up from a hand-auger borehole"
            caption="Derived From The Ground"
            aspect="aspect-[4/3]"
            sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 50vw, 600px"
            className="shadow-[0_26px_60px_-26px_rgba(5,10,7,0.4)]"
          />
          <Reveal variant="group">
            <p data-fx="rise" className="text-sm uppercase tracking-[0.2em] text-forest-green mb-4 font-semibold">01 &middot; The Approach</p>
            <h2 data-fx="rise" style={d(80)} className="text-3xl sm:text-4xl font-montserrat font-light tracking-tight text-slate-950 mb-5">Derived From The Ground, <span className="font-semibold h-bold">Not The Textbook.</span></h2>
            <div data-fx="line" style={d(200)} className="h-px bg-forest-green w-12 mb-7" />
            <p data-fx="rise" style={d(160)} className="text-gray-600 font-light leading-relaxed">Every parameter traces to fieldwork on your site: <Link href="/geotechnical-investigations" className="text-forest-green underline underline-offset-4 decoration-forest-green/40 hover:decoration-forest-green font-medium">boreholes, penetrometers, laboratory results</Link>, not presumptive values copied between reports. We do not carry the structural design; we make sure the numbers under it are real, and we stand behind them. Once the excavation opens, <Link href="/construction-phase-support" className="text-forest-green underline underline-offset-4 decoration-forest-green/40 hover:decoration-forest-green font-medium">construction phase support</Link> verifies them at bearing level.</p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 lg:py-24 px-6 lg:px-12 max-w-7xl mx-auto border-t border-gray-100">
        <Reveal variant="group" className="mb-12">
          <p data-fx="rise" className="text-sm uppercase tracking-[0.2em] text-forest-green mb-4 font-semibold">02 &middot; What We Deliver</p>
          <h2 data-fx="rise" style={d(80)} className="text-3xl sm:text-4xl font-montserrat font-light tracking-tight text-slate-950">Parameters We <span className="font-semibold h-bold">Deliver.</span></h2>
          <div data-fx="line" style={d(200)} className="mt-6 h-px bg-forest-green w-12" />
        </Reveal>
        <Reveal variant="group">
          <div data-stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ITEMS.map((it) => (
              <div key={it.t} className="card-lift p-8 bg-white border border-gray-100 rounded-2xl shadow-sm h-full">
                <h3 className="text-lg font-montserrat font-semibold text-slate-950 mb-3">{it.t}</h3>
                <p className="text-gray-600 font-light leading-relaxed text-[15px]">{it.d}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* How we plug in */}
      <section className="py-20 lg:py-24 px-6 lg:px-12 max-w-7xl mx-auto border-t border-gray-100">
        <Reveal variant="group" className="mb-12">
          <p data-fx="rise" className="text-sm uppercase tracking-[0.2em] text-forest-green mb-4 font-semibold">03 &middot; Working With Design Teams</p>
          <h2 data-fx="rise" style={d(80)} className="text-3xl sm:text-4xl font-montserrat font-light tracking-tight">Built To Slot Into <span className="font-semibold h-bold">Your Workflow.</span></h2>
          <div data-fx="line" style={d(200)} className="mt-5 h-px bg-forest-green w-12" />
        </Reveal>
        <Reveal variant="group">
          <div data-stagger className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { t: "Parameters, Not Prose", d: "Design values delivered as memos and tables your software takes directly, with the derivation available when reviewers ask." },
              { t: "Alternatives Reviewed", d: "When the contractor proposes a different footing system mid-build, we review it against the ground data fast, so the program holds." },
              { t: "On Call Through Construction", d: "The engineer who derived the numbers stays reachable when the excavation opens and the ground asks its own questions." },
            ].map((c) => (
              <div key={c.t} className="card-lift p-8 bg-white border border-gray-100 rounded-2xl shadow-sm h-full">
                <h3 className="text-lg font-montserrat font-semibold text-slate-950 mb-3">{c.t}</h3>
                <p className="text-gray-600 font-light leading-relaxed text-[15px]">{c.d}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <QuietFaq intro={<>SFGEO supplies the site-specific inputs structural and civil engineers design from. They cover bearing pressures, pile values, AS 4678 retaining parameters and pavement CBR values. The engineer who read the ground derives and signs each value. Every scope is quoted per site, a fixed fee in writing within one business day. With laboratory testing, reports are typically five to seven business days from fieldwork, confirmed in the written quote.</>} faqs={FAQS} />

      <CloseBand
        source="geotechnical-design close"
        heading={<>Designing On Sydney Ground? <span className="font-semibold h-bold">Get Real Numbers.</span></>}
        sub="Send the drawings and the site. The parameters come back derived from the ground, signed, and in a form your software takes directly."
      />
    </div>
  );
}
