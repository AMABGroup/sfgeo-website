import { Metadata } from "next";
import Link from "next/link";
import type { CSSProperties } from "react";
import QuoteCta from "@/components/forms/QuoteCta";
import GoogleReviews from "@/components/ui/GoogleReviews";
import Reveal from "@/components/ui/Reveal";
import PhotoFrame from "@/components/ui/PhotoFrame";
import SectionNav from "@/components/ui/SectionNav";
import CloseBand from "@/components/ui/CloseBand";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta(
  "Geotechnical Investigations & Reports Sydney | SFGEO",
  "Principal-led geotechnical investigations for Sydney DAs, footings, basements and retaining structures. Fixed-fee quotes, reports certifiers accept.",
  "/geotechnical-investigations",
);

const d = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

const SCOPES = [
  {
    title: "DA & CDC Reports",
    desc: "Geotechnical reports written to answer the questions your council, certifier or structural engineer will actually ask — prepared with the approval pathway in mind from the first borehole."
  },
  {
    title: "Footing & Slab Design Input",
    desc: "Investigation depths, bearing parameters and founding recommendations your structural engineer can design from directly, without a second round of questions."
  },
  {
    title: "Basements, Excavations & Retaining",
    desc: "Subsurface profiles, groundwater observations and lateral parameters for basements, cut batters and retaining structures on Sydney's stepped and sloping blocks."
  },
  {
    title: "Drilling, DCP & Lab Testing",
    desc: "Borehole drilling with our 4WD-mounted rig and motorised hand augers for tight access, dynamic cone penetrometer testing, and NATA-accredited laboratory testing where the design calls for it."
  },
];

const REGIONS = [
  { title: "Inner West", desc: "Ashfield Shale country — residual clays over weathered shale, often moderately to highly reactive. Investigations here focus on clay depth and shale weathering, because the difference decides the footing system. Class M and H1 outcomes are common." },
  { title: "North Shore", desc: "Hawkesbury Sandstone, with outcomes hinging on how much weathered soil sits above the rock. Shallow rock founds beautifully — bored piers to sandstone carry most of the harbour's basements. Deeper profiles behave like clay and need proper investigation." },
  { title: "Western Sydney", desc: "Bringelly Shale — the most reactive common profile in metropolitan Sydney. Across the Cumberland Plain, H1 and H2 outcomes are frequent, and movement estimates need boreholes deep enough to see the whole active zone." },
  { title: "South West Corridor", desc: "Legacy fill, alluvial soils and reactive clays push a higher proportion of sites into Class P — common across Liverpool and Campbelltown. The investigation's first job is finding where the fill stops and natural ground begins." },
  { title: "Eastern Suburbs & Coast", desc: "Dune sands over sandstone, steep marine slopes and tight streets. Sand profiles found well but cave in open excavations; the rock surface dips sharply block to block. Investigations here earn their keep on access and depth-to-rock." },
];

const NAV = [
  { id: "scope", label: "Scope" },
  { id: "fieldwork", label: "Fieldwork" },
  { id: "sydney-ground", label: "Sydney Ground" },
  { id: "why-early", label: "Why Early" },
];

export default function GeotechnicalInvestigationsPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "item": { "@id": "https://sfgeo.com.au/", "name": "Home" } },
      { "@type": "ListItem", "position": 2, "item": { "@id": "https://sfgeo.com.au/geotechnical", "name": "Geotechnical" } },
      { "@type": "ListItem", "position": 3, "item": { "@id": "https://sfgeo.com.au/geotechnical-investigations", "name": "Geotechnical Investigations" } }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Geotechnical Investigation",
    "serviceType": "Geotechnical Investigation",
    "description": "Geotechnical investigations and reports for Sydney development applications, complying development, footing and basement design, and retaining structures. Borehole drilling, DCP testing and NATA lab-backed reporting, led by the Principal Engineer.",
    "url": "https://sfgeo.com.au/geotechnical-investigations",
    "provider": { "@id": "https://sfgeo.com.au/#organization" },
    "areaServed": { "@type": "City", "name": "Sydney, New South Wales, Australia" }
  };

  return (
    <div className="bg-white text-slate-950 font-inter selection:bg-forest-green selection:text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      {/* Hero */}
      <section className="pt-36 pb-20 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="max-w-[52rem]">
          <p className="hero-line text-sm uppercase tracking-[0.2em] text-forest-green mb-6 font-semibold">
            Geotechnical Investigations &middot; Principal-Led &middot; Sydney
          </p>
          <h1 className="text-[min(2.25rem,8.2vw)] sm:text-6xl font-montserrat font-light tracking-tight leading-[1.08] mb-8">
            <span className="hero-mask"><span className="mask-line mask-d1"><span>Geotechnical Investigations.</span></span></span>
            <span className="hero-mask"><span className="mask-line mask-d2"><span className="font-semibold h-bold">Engineered Properly.</span></span></span>
          </h1>
          <div className="hero-line hero-d2 w-[96px] h-[3px] bg-forest-green mb-8" />
          <p className="hero-line hero-d2 text-lg sm:text-xl text-gray-600 font-light leading-relaxed mb-10">
            Boreholes, penetrometers and NATA-backed laboratory data, turned into reports your certifier, council and structural engineer can act on — for DAs, complying development, footings, basements and retaining structures across Sydney. The engineer who drills your ground is the engineer who signs your report.
          </p>
          <div className="hero-line hero-d3 flex flex-col sm:flex-row items-start gap-4">
            <Link
              href="tel:+61423483555"
              className="flex items-center justify-center px-8 py-2.5 bg-gradient-to-b from-[#346b43] to-forest-green text-white rounded-full shadow-[0_8px_20px_-6px_rgba(45,90,58,0.4)] hover:shadow-[0_12px_24px_-8px_rgba(45,90,58,0.6)] hover:brightness-105 transition-all hover:-translate-y-0.5 w-full sm:w-auto h-[46px] text-xs font-semibold tracking-wide"
            >
              Call The Principal Engineer
            </Link>
            <QuoteCta
              source="geotechnical-investigations hero"
              label="Request A Quote"
              className="flex items-center justify-center px-8 py-2.5 bg-white text-forest-green rounded-full shadow-[inset_0_0_0_1px_rgba(45,90,58,0.25),0_4px_10px_-4px_rgba(0,0,0,0.05)] hover:bg-forest-green/5 hover:shadow-[inset_0_0_0_1px_rgba(45,90,58,0.4),0_6px_14px_-4px_rgba(0,0,0,0.1)] transition-all hover:-translate-y-0.5 w-full sm:w-auto h-[46px] text-xs font-semibold tracking-wide"
            />
          </div>
        </div>
      </section>

      <SectionNav items={NAV} />

      {/* 01 — What the investigation covers */}
      <section id="scope" className="py-20 lg:py-24 px-6 lg:px-12 max-w-7xl mx-auto border-t border-gray-100 scroll-mt-[136px]">
        <Reveal variant="group" className="mb-14">
          <p data-fx="rise" className="text-sm uppercase tracking-[0.2em] text-forest-green mb-4 font-semibold">01 &middot; Scope</p>
          <h2 data-fx="rise" style={d(80)} className="text-3xl sm:text-4xl font-montserrat font-light tracking-tight">
            What The Investigation <span className="font-semibold h-bold">Covers.</span>
          </h2>
          <div data-fx="line" style={d(200)} className="mt-5 h-px bg-forest-green w-12" />
        </Reveal>
        <Reveal variant="group">
          <div data-stagger className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SCOPES.map((scope) => (
              <div key={scope.title} className="card-lift p-8 bg-white border border-gray-100 rounded-2xl shadow-sm">
                <h3 className="text-lg font-montserrat font-semibold text-slate-950 mb-3">{scope.title}</h3>
                <p className="text-gray-600 font-light leading-relaxed text-[15px]">{scope.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* 02 — Fieldwork imagery band */}
      <section id="fieldwork" className="py-20 lg:py-24 px-6 lg:px-12 max-w-7xl mx-auto border-t border-gray-100 scroll-mt-[136px]">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16 items-center">
          <Reveal variant="group">
            <p data-fx="rise" className="text-sm uppercase tracking-[0.2em] text-forest-green mb-4 font-semibold">02 &middot; Fieldwork</p>
            <h2 data-fx="rise" style={d(80)} className="text-3xl sm:text-4xl font-montserrat font-light tracking-tight text-slate-950 mb-5">
              Done By <span className="font-semibold h-bold">The Engineer.</span>
            </h2>
            <div data-fx="line" style={d(200)} className="h-px bg-forest-green w-12 mb-7" />
            <p data-fx="rise" style={d(160)} className="text-gray-600 font-light leading-relaxed">
              No subcontracted drill crews, no drive-by inspections. The Principal Engineer operates the rig, logs the profile as it comes out of the ground, and cross-checks it with in-situ testing on the spot — so by the time the report is written, the ground has already been read twice.
            </p>
          </Reveal>
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            <PhotoFrame
              src="/sfgeo-night-works-crew-at-rig.jpg"
              alt="SFGEO engineers working the rig at a borehole during night works on a Sydney street"
              caption="Fieldwork"
              aspect="aspect-[3/4]"
              sizes="(max-width: 1024px) 50vw, 30vw"
              className="shadow-[0_20px_50px_-20px_rgba(5,10,7,0.35)]"
              delay={0}
            />
            <PhotoFrame
              src="/sfgeo-spt-sample-logged-on-site.jpg"
              alt="Split-spoon sample opened beside the field board recording BH01, 0.50-0.95 m and an SPT N value of 10"
              caption="Logged On Site"
              aspect="aspect-[3/4]"
              sizes="(max-width: 1024px) 50vw, 30vw"
              className="shadow-[0_20px_50px_-20px_rgba(5,10,7,0.35)]"
              wrapperClassName="lg:mt-10"
              delay={120}
            />
          </div>
        </div>
      </section>

      {/* 03 — Sydney ground by region */}
      <section id="sydney-ground" className="py-20 lg:py-24 px-6 lg:px-12 max-w-7xl mx-auto border-t border-gray-100 scroll-mt-[136px]">
        <Reveal variant="group" className="mb-14 max-w-3xl">
          <p data-fx="rise" className="text-sm uppercase tracking-[0.2em] text-forest-green mb-4 font-semibold">03 &middot; Sydney Ground</p>
          <h2 data-fx="rise" style={d(80)} className="text-3xl sm:text-4xl font-montserrat font-light tracking-tight text-slate-950 mb-5">
            The Ground Changes <span className="font-semibold h-bold">By Suburb.</span>
          </h2>
          <div data-fx="line" style={d(200)} className="h-px bg-forest-green w-12 mb-7" />
          <p data-fx="rise" style={d(160)} className="text-gray-600 font-light leading-relaxed">
            Sydney sits on a handful of very different geologies, and the investigation is scoped to the one under your block — not a city-wide average. Two doors down from a stable site, your land can behave completely differently.
          </p>
        </Reveal>
        <PhotoFrame
          src="/sfgeo-rock-core-bh2-trays.jpg"
          alt="Four runs of rock core in a tray at BH2, coring from 4.1 metres, laid out and labelled for logging"
          caption={<>Rock Core &middot; BH2 From 4.1 m</>}
          aspect="aspect-[16/9] sm:aspect-[7/2]"
          sizes="(max-width: 1024px) 100vw, 1216px"
          position="object-center"
          wrapperClassName="mb-10 lg:mb-12"
        />
        <Reveal variant="group">
          <div data-stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REGIONS.map((r) => (
              <div key={r.title} className="card-lift p-8 bg-white border border-gray-100 rounded-2xl shadow-sm h-full">
                <h3 className="text-lg font-montserrat font-semibold text-slate-950 mb-3">{r.title}</h3>
                <p className="text-gray-600 font-light leading-relaxed text-[15px]">{r.desc}</p>
              </div>
            ))}
            <div className="card-lift p-8 bg-[#050A07] text-white rounded-2xl h-full flex flex-col justify-between relative overflow-hidden grain">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_70%_-20%,rgba(45,90,58,0.35),transparent_60%)] pointer-events-none" />
              <p className="relative z-10 text-lg font-montserrat font-light leading-snug mb-6">
                Not sure which one you&rsquo;re on? Send the address — the desktop geology is checked before we even quote.
              </p>
              <QuoteCta
                source="geotechnical-investigations regions"
                label="Check My Block"
                className="relative z-10 inline-flex items-center justify-center px-6 py-2.5 bg-gradient-to-b from-[#346b43] to-forest-green text-white rounded-full shadow-[0_8px_20px_-6px_rgba(45,90,58,0.4)] hover:brightness-105 transition-all hover:-translate-y-0.5 h-[44px] text-xs font-semibold tracking-wide w-fit"
              />
            </div>
          </div>
        </Reveal>
      </section>

      {/* 04 — Found late costs most */}
      <section id="why-early" className="py-20 lg:py-24 px-6 lg:px-12 max-w-7xl mx-auto border-t border-gray-100 scroll-mt-[136px]">
        <Reveal variant="group" className="max-w-3xl">
          <p data-fx="rise" className="text-sm uppercase tracking-[0.2em] text-forest-green mb-4 font-semibold">04 &middot; Why Early</p>
          <h2 data-fx="rise" style={d(80)} className="text-3xl sm:text-4xl font-montserrat font-light tracking-tight text-slate-950 mb-5">
            Ground Found Late <span className="font-semibold h-bold">Costs The Most.</span>
          </h2>
          <div data-fx="line" style={d(200)} className="h-px bg-forest-green w-12 mb-7" />
          <p data-fx="rise" style={d(160)} className="text-gray-600 font-light leading-relaxed mb-6">
            Unexpected rock, fill, or reactive clay discovered after contracts are signed becomes a variation — priced by whoever holds the leverage at that moment. An investigation done properly, and done early, converts those unknowns into design parameters while every option is still open and competitively priced.
          </p>
          <p data-fx="rise" style={d(220)} className="text-gray-600 font-light leading-relaxed mb-6">
            Turnaround is scoped at first contact, and urgent DA, CC and settlement timelines can be accommodated — call the Principal directly to arrange priority scheduling. And where standard rigs stop at the kerb, our 4WD rig and motorised hand augers keep going: <Link href="/tight-access-drilling" className="text-forest-green hover:underline font-medium">full access capability</Link>.
          </p>
          <p data-fx="rise" style={d(280)} className="text-gray-600 font-light leading-relaxed">
            Investigations are quoted fixed-fee against the number and depth of boreholes, access and the laboratory program — most fall under our Complex Projects tier (basements, multi-storey, retaining walls, sloping or restricted-access blocks), and the fee is confirmed in writing within one business day. What moves the figure is set out in the <Link href="/geotechnical-report-cost-sydney" className="text-forest-green hover:underline font-medium">geotechnical report cost guide</Link>.
          </p>
        </Reveal>
      </section>

      {/* Reviews */}
      <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto border-t border-gray-100">
        <GoogleReviews />
      </section>

      <CloseBand
        source="geotechnical-investigations close"
        heading={<>Start With <span className="font-semibold h-bold">The Ground.</span></>}
        sub={
          <>
            Every SFGEO engagement begins with the Principal Engineer reading your block and your plans — and standing on your ground on the day. Detailed answers to common questions are on <Link href="/faq" className="text-white underline hover:text-white/80 transition-colors">the full FAQ</Link>.
          </>
        }
      />
    </div>
  );
}
