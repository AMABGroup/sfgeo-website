import { Metadata } from "next";
import Link from "next/link";
import type { CSSProperties } from "react";
import QuoteCta from "@/components/forms/QuoteCta";
import Reveal from "@/components/ui/Reveal";
import PhotoFrame from "@/components/ui/PhotoFrame";
import CloseBand from "@/components/ui/CloseBand";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta(
  "Borehole Drilling Sydney | Engineer-Logged Boreholes | SFGEO",
  "Borehole drilling in Sydney with a 4WD-mounted rig — solid flight and hollow stem augers, SPT and DCP testing, every profile logged by the engineer on site.",
  "/borehole-drilling",
);

const d = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

const DELIVERS = [
  { t: "The Soil Profile", d: "Every layer logged as it comes off the flights — material, moisture, consistency — by the engineer standing at the hole, not reconstructed later." },
  { t: "In-Situ Strength", d: "Standard Penetration Testing down the hole and Dynamic Cone Penetrometer testing beside it, so the log carries numbers as well as descriptions." },
  { t: "Groundwater Observations", d: "Seepage and standing water levels recorded during and after drilling — the observation that changes basement and footing design most often." },
  { t: "Samples For The Lab", d: "Disturbed and undisturbed samples taken at the depths that matter, bagged, labelled and tracked to NATA-accredited laboratories when testing is warranted." },
];

export default function BoreholeDrillingPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "item": { "@id": "https://sfgeo.com.au/", "name": "Home" } },
      { "@type": "ListItem", "position": 2, "item": { "@id": "https://sfgeo.com.au/drilling", "name": "Drilling" } },
      { "@type": "ListItem", "position": 3, "item": { "@id": "https://sfgeo.com.au/borehole-drilling", "name": "Borehole Drilling" } }
    ]
  };
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Borehole Drilling",
    "serviceType": "Borehole drilling and in-situ testing",
    "description": "Borehole drilling across Sydney with a 4WD-mounted rig — solid flight and hollow stem augers, SPT and DCP in-situ testing, engineer-logged profiles and sampling for laboratory testing.",
    "url": "https://sfgeo.com.au/borehole-drilling",
    "provider": { "@id": "https://sfgeo.com.au/#organization" },
    "areaServed": [
      { "@type": "City", "name": "Sydney, New South Wales, Australia" },
      { "@type": "State", "name": "New South Wales, Australia" }
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
            Borehole Drilling &middot; Engineer Operated &middot; Sydney
          </p>
          <h1 className="text-[min(2.25rem,7.4vw)] sm:text-6xl font-montserrat font-light tracking-tight leading-[1.08] mb-8">
            <span className="hero-mask"><span className="mask-line mask-d1"><span>Borehole Drilling.</span></span></span>
            <span className="hero-mask"><span className="mask-line mask-d2"><span className="font-semibold h-bold">Logged As It Comes Up.</span></span></span>
          </h1>
          <div className="hero-line hero-d2 w-[96px] h-[3px] bg-forest-green mb-8" />
          <p className="hero-line hero-d2 text-lg sm:text-xl text-gray-600 font-light leading-relaxed mb-10">
            A borehole is only as good as the person reading it. SFGEO&rsquo;s 4WD-mounted rig drills Sydney&rsquo;s clays, sands, shales and residual profiles with the engineer at the hole — logging every layer as it surfaces, testing as it goes, and sampling what the design will need. Metro and regional NSW.
          </p>
          <div className="hero-line hero-d3 flex flex-col sm:flex-row items-start gap-4">
            <QuoteCta
              source="borehole-drilling hero"
              label="Request Drilling"
              eyebrow="Borehole drilling"
              heading="Request Drilling"
              subheading="Send the site, the hole count and the depth. A rate in writing within one business day."
              className="flex items-center justify-center px-8 py-2.5 bg-gradient-to-b from-[#346b43] to-forest-green text-white rounded-full shadow-[0_8px_20px_-6px_rgba(45,90,58,0.4)] hover:shadow-[0_12px_24px_-8px_rgba(45,90,58,0.6)] hover:brightness-105 transition-all hover:-translate-y-0.5 w-full sm:w-auto h-[46px] text-xs font-semibold tracking-wide"
            />
            <Link
              href="tel:+61423483555"
              className="flex items-center justify-center px-8 py-2.5 bg-white text-forest-green rounded-full shadow-[inset_0_0_0_1px_rgba(45,90,58,0.25),0_4px_10px_-4px_rgba(0,0,0,0.05)] hover:bg-forest-green/5 hover:shadow-[inset_0_0_0_1px_rgba(45,90,58,0.4),0_6px_14px_-4px_rgba(0,0,0,0.1)] transition-all hover:-translate-y-0.5 w-full sm:w-auto h-[46px] text-xs font-semibold tracking-wide"
            >
              Call 0423 483 555
            </Link>
          </div>
        </div>
      </section>

      {/* 01 — The method */}
      <section className="py-20 lg:py-24 px-6 lg:px-12 max-w-7xl mx-auto border-t border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16 items-center">
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            <PhotoFrame
              src="/sfgeo-borehole-auger-advancing.jpg"
              alt="Clay-loaded auger flight advancing a borehole"
              caption="The Flight"
              aspect="aspect-[3/4]"
              sizes="(max-width: 1024px) 50vw, 30vw"
              className="shadow-[0_20px_50px_-20px_rgba(5,10,7,0.35)]"
              delay={0}
            />
            <PhotoFrame
              src="/sfgeo-borehole-sample-in-hand.jpg"
              alt="Sand sample read in the engineer's hand at the borehole"
              caption="The Sample"
              aspect="aspect-[3/4]"
              sizes="(max-width: 1024px) 50vw, 30vw"
              className="shadow-[0_20px_50px_-20px_rgba(5,10,7,0.35)] lg:mt-10"
              delay={120}
            />
          </div>
          <Reveal variant="group">
            <p data-fx="rise" className="text-sm uppercase tracking-[0.2em] text-forest-green mb-4 font-semibold">01 &middot; The Method</p>
            <h2 data-fx="rise" style={d(80)} className="text-3xl sm:text-4xl font-light tracking-tight font-montserrat text-slate-950 mb-5">
              From The Flight <span className="font-semibold h-bold">To The Log.</span>
            </h2>
            <div data-fx="line" style={d(200)} className="h-px bg-forest-green w-12 mb-7" />
            <p data-fx="rise" style={d(160)} className="text-gray-600 font-light leading-relaxed">
              Solid flight augers for Sydney&rsquo;s clays and residual soils; hollow stem when the hole needs support; SPT and DCP testing to put numbers behind the descriptions. The material comes up, gets read in the hand, and goes on the log in the field — because the ground doesn&rsquo;t look the same in a photo the next day.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 02 — What a borehole buys you */}
      <section className="py-20 lg:py-24 px-6 lg:px-12 max-w-7xl mx-auto border-t border-gray-100">
        <Reveal variant="group" className="mb-12">
          <p data-fx="rise" className="text-sm uppercase tracking-[0.2em] text-forest-green mb-4 font-semibold">02 &middot; The Deliverables</p>
          <h2 data-fx="rise" style={d(80)} className="text-3xl sm:text-4xl font-light tracking-tight font-montserrat text-slate-950">
            What A Borehole <span className="font-semibold h-bold">Buys You.</span>
          </h2>
          <div data-fx="line" style={d(200)} className="mt-5 h-px bg-forest-green w-12" />
        </Reveal>
        <Reveal variant="group">
          <div data-stagger className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {DELIVERS.map((it) => (
              <div key={it.t} className="card-lift p-8 bg-white border border-gray-100 rounded-2xl shadow-sm h-full">
                <h3 className="text-lg font-montserrat font-semibold text-slate-950 mb-3">{it.t}</h3>
                <p className="text-gray-600 font-light leading-relaxed text-[15px]">{it.d}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* 03 — Where the holes go */}
      <section className="py-20 lg:py-24 px-6 lg:px-12 max-w-7xl mx-auto border-t border-gray-100">
        <Reveal variant="group" className="max-w-3xl">
          <p data-fx="rise" className="text-sm uppercase tracking-[0.2em] text-forest-green mb-4 font-semibold">03 &middot; Scoped To The Job</p>
          <h2 data-fx="rise" style={d(80)} className="text-3xl sm:text-4xl font-light tracking-tight font-montserrat text-slate-950 mb-5">
            As Deep As The Question. <span className="font-semibold h-bold">No Deeper.</span>
          </h2>
          <div data-fx="line" style={d(200)} className="h-px bg-forest-green w-12 mb-7" />
          <p data-fx="rise" style={d(160)} className="text-gray-600 font-light leading-relaxed mb-8">
            A granny flat doesn&rsquo;t need the borehole a basement does. Investigation depths are scoped to the structure and the ground — through the reactive zone for footings, below founding level for piers, deep enough to see what a basement excavation will meet. Where the ground turns to rock, <Link href="/drilling#rock-coring" className="text-forest-green hover:underline font-medium">NMLC rock coring</Link> takes over; where the rig can&rsquo;t reach, <Link href="/tight-access-drilling" className="text-forest-green hover:underline font-medium">tight access methods</Link> do.
          </p>
          <Link data-fx="rise" style={d(220)} href="/drilling" className="text-sm font-semibold tracking-wide text-forest-green group inline-flex items-center gap-2">
            <span className="draw-link">All Drilling Services</span>
            <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
          </Link>
        </Reveal>
      </section>

      <CloseBand
        source="borehole-drilling close"
        heading={<>Holes This Week? <span className="font-semibold h-bold">Ask.</span></>}
        sub="Send the address, the number of holes and the depths if you know them — a fixed fee in writing within one business day."
        quoteLabel="Request Drilling"
        quote={{
          eyebrow: "Borehole drilling",
          heading: "Request Drilling",
          subheading: "Send the site, the hole count and the depth. A rate in writing within one business day.",
        }}
      />
    </div>
  );
}
