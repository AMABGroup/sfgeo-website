import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import QuoteCta from "@/components/forms/QuoteCta";
import PhotoPlaceholder from "@/components/ui/PhotoPlaceholder";
import { FadeIn } from "../site-classification/MotionWrapper";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta(
  "Contaminated Land & Environmental Testing Sydney | SFGEO",
  "Contaminated land (PSI & DSI), acid sulfate soils, waste classification and NATA lab testing across Sydney — one crew drills, samples and reports.",
  "/environmental",
);

const SECTIONS = [
  {
    n: "01",
    id: "psi-dsi",
    kicker: "01 · PSI & DSI",
    titleLight: "Contaminated Land.",
    titleBold: "PSI & DSI.",
    caption: "01 · Contaminated Land",
    image: null,
    shot: "Contaminated land fieldwork — monitoring well or sampling rig on a former industrial site, or gloved hands bagging a suspect soil sample.",
    body: "When a site's history raises questions — old fill, past industry, a council condition on the DA — a Preliminary Site Investigation traces what happened on the ground, and a Detailed Site Investigation drills, samples and tests to answer it. Every sample is logged by an engineer, tracked under chain of custody and analysed at NATA-accredited laboratories. And because the crew taking the samples is the crew that drills Sydney ground every week, one mobilisation can carry your geotechnical and environmental scope together.",
    link: { href: "/contact", label: "Scope A Site Investigation" },
  },
  {
    n: "02",
    id: "ass",
    kicker: "02 · Acid Sulfate Soils",
    titleLight: "Acid Sulfate",
    titleBold: "Soils.",
    caption: "02 · Acid Sulfate Soils",
    image: "/sfgeo-acid-sulfate-soils-riverbank-drilling.jpg",
    alt: "Drill rig and crew sampling low-lying ground beside a Sydney river",
    body: "Low-lying and estuarine ground across Sydney can hold sulfides that stay harmless until they're exposed to air — then turn acidic, attack concrete and steel, and stall an excavation under council conditions. We drill, sample and test the ground before works start, and where acid sulfate soils are present, report the findings with a management plan so excavation and dewatering can proceed with conditions settled.",
    link: { href: "/contact", label: "Ask About Your Site" },
  },
  {
    n: "03",
    id: "waste",
    kicker: "03 · Waste Classification",
    titleLight: "Waste",
    titleBold: "Classification (VENM & ENM).",
    caption: "03 · Waste Classification",
    image: null,
    shot: "Waste classification sampling — spoil stockpile being sampled, or labelled sample jars ready for the laboratory.",
    body: "Spoil can't leave site on a guess — receiving facilities need a classification, and the wrong one is paid for twice. We sample stockpiles and in-situ ground, test at NATA-accredited laboratories and classify to the NSW EPA guidelines, from virgin excavated natural material (VENM) and excavated natural material (ENM) through to general solid waste — with the paperwork your facility and your certifier both need.",
    link: { href: "/contact", label: "Classify Your Spoil" },
  },
  {
    n: "04",
    id: "lab",
    kicker: "04 · Soil & Lab Testing",
    titleLight: "Soil & Lab",
    titleBold: "Testing.",
    caption: "04 · Soil & Lab Testing",
    image: "/sfgeo-contaminated-land-sampling-sydney.jpg",
    alt: "Labelled soil sample bag and field tablet during sampling for laboratory testing",
    body: (
      <>
        Behind every report is a laboratory program scoped to the question — CBR and compaction for pavements, <Link href="/site-classification" className="text-forest-green hover:underline">Atterberg limits and shrink–swell for footings</Link>, pH, sulfate and chloride where concrete meets aggressive ground, and contamination suites where history demands them. Samples are logged in the field by the engineer who took them, and results come back interpreted — numbers with a recommendation, not a spreadsheet to decode.
      </>
    ),
    link: { href: "/contact", label: "Build A Testing Program" },
  },
];

const FIRST_IMAGE_ID = SECTIONS.find((s) => s.image)?.id;

const AUDIENCES = [
  { t: "Buyers & Developers", d: "Due diligence before the contract goes unconditional, and the investigations a DA condition calls for — scoped to the risk, not the template." },
  { t: "Builders & Contractors", d: "Waste classifications that keep trucks moving, and answers on the fill the excavator just turned up — before it becomes a variation." },
  { t: "Homeowners", d: "Straight answers on old fill, buried rubbish or a suspect smell in the ground — explained in plain English, priced fixed." },
  {
    t: "Consultants & Engineers",
    d: (
      <>
        <Link href="/subcontract-drilling" className="text-forest-green hover:underline">Drilling and sampling</Link> for your own assessment programs — clean field data, chain of custody kept. Monitoring wells go in through a licensed bore driller under our scope.
      </>
    ),
  },
];

export default function EnvironmentalHubPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "item": { "@id": "https://sfgeo.com.au/", "name": "Home" } },
      { "@type": "ListItem", "position": 2, "item": { "@id": "https://sfgeo.com.au/environmental", "name": "Environmental & Soil Testing" } }
    ]
  };
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Environmental & Soil Testing",
    "serviceType": "Environmental site assessment and soil testing services",
    "description": "Environmental and soil testing for Sydney: contaminated land investigations (PSI and DSI), acid sulfate soil assessment, waste classification and laboratory soil testing.",
    "url": "https://sfgeo.com.au/environmental",
    "provider": { "@id": "https://sfgeo.com.au/#organization" },
    "areaServed": { "@type": "City", "name": "Sydney, New South Wales, Australia" }
  };

  return (
    <div className="bg-white text-slate-950 font-inter selection:bg-forest-green selection:text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      {/* Hero */}
      <section className="pt-36 pb-20 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <p className="hero-line text-sm uppercase tracking-[0.2em] text-forest-green mb-6 font-semibold">
            Environmental &amp; Soil Testing &middot; Engineer-Led &middot; Sydney
          </p>
          <h1 className="hero-line hero-d1 text-[min(2.25rem,7.8vw)] sm:text-6xl font-montserrat font-light tracking-tight leading-[1.08] mb-8">
            Environmental Testing Sydney. <span className="font-semibold h-bold">What&rsquo;s In The Ground.</span>
          </h1>
          <div className="hero-line hero-d2 w-[96px] h-[3px] bg-forest-green mb-8" />
          <p className="hero-line hero-d2 text-lg sm:text-xl text-gray-600 font-light leading-relaxed mb-10">
            Geotechnical tells you how the ground behaves. Environmental tells you what it&rsquo;s carrying — contamination, acid sulfate risk, spoil that needs a classification before it moves. One crew drills, samples and reports on both.
          </p>
          <div className="hero-line hero-d3 flex flex-col sm:flex-row items-start gap-4">
            <Link
              href="tel:+61423483555"
              className="flex items-center justify-center px-8 py-2.5 bg-gradient-to-b from-[#346b43] to-forest-green text-white rounded-full shadow-[0_8px_20px_-6px_rgba(45,90,58,0.4)] hover:shadow-[0_12px_24px_-8px_rgba(45,90,58,0.6)] hover:brightness-105 transition-all hover:-translate-y-0.5 w-full sm:w-auto h-[46px] text-xs font-semibold tracking-wide"
            >
              Call 0423 483 555
            </Link>
            <QuoteCta
              source="environmental hero"
              label="Scope A Site Investigation"
              className="flex items-center justify-center px-8 py-2.5 bg-white text-forest-green rounded-full shadow-[inset_0_0_0_1px_rgba(45,90,58,0.25),0_4px_10px_-4px_rgba(0,0,0,0.05)] hover:bg-forest-green/5 hover:shadow-[inset_0_0_0_1px_rgba(45,90,58,0.4),0_6px_14px_-4px_rgba(0,0,0,0.1)] transition-all hover:-translate-y-0.5 w-full sm:w-auto h-[46px] text-xs font-semibold tracking-wide"
            />
          </div>
        </div>
      </section>

      {/* The suite — numbered editorial rows */}
      {SECTIONS.map((sec, idx) => (
        <section key={sec.id} id={sec.id} className="py-20 lg:py-24 px-6 lg:px-12 max-w-7xl mx-auto border-t border-gray-100 scroll-mt-[90px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <FadeIn className={idx % 2 === 1 ? "lg:order-2" : ""}>
              {sec.image ? (
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_26px_60px_-26px_rgba(5,10,7,0.4)]">
                  <Image src={sec.image} alt={sec.alt} fill sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 50vw, 600px" priority={sec.id === FIRST_IMAGE_ID} className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050A07]/80 via-[#050A07]/25 to-transparent" />
                  <p className="absolute bottom-5 left-6 text-[11px] uppercase tracking-[0.25em] text-white font-semibold">{sec.caption}</p>
                </div>
              ) : (
                <PhotoPlaceholder
                  subject={sec.shot ?? ""}
                  caption={sec.caption}
                  className="aspect-[4/3] rounded-2xl shadow-[0_26px_60px_-26px_rgba(5,10,7,0.4)]"
                />
              )}
            </FadeIn>
            <FadeIn delay={0.12}>
              <p className="text-sm uppercase tracking-[0.2em] text-forest-green mb-4 font-semibold">{sec.kicker}</p>
              <h2 className="text-3xl sm:text-4xl font-montserrat font-light tracking-tight text-slate-950 mb-5">
                {sec.titleLight} <span className="font-semibold h-bold">{sec.titleBold}</span>
              </h2>
              <div className="h-px bg-forest-green w-12 mb-7" />
              <p className="text-gray-600 font-light leading-relaxed mb-8">{sec.body}</p>
              <Link href={sec.link.href} className="text-sm font-semibold tracking-wide text-forest-green group inline-flex items-center gap-2">
                <span className="draw-link">{sec.link.label}</span>
                <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
              </Link>
            </FadeIn>
          </div>
        </section>
      ))}

      {/* Who we work with */}
      <section className="py-24 lg:py-28 px-6 lg:px-12 max-w-7xl mx-auto border-t border-gray-100">
        <FadeIn className="mb-14">
          <p className="text-sm uppercase tracking-[0.2em] text-forest-green mb-4 font-semibold">Who We Work With</p>
          <h2 className="text-3xl sm:text-4xl font-montserrat font-light tracking-tight">
            Same Ground. <span className="font-semibold h-bold">Different Stakes.</span>
          </h2>
          <div className="mt-5 h-px bg-forest-green w-12" />
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {AUDIENCES.map((a) => (
            <FadeIn key={a.t}>
              <div className="p-8 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow h-full">
                <h3 className="text-lg font-montserrat font-semibold text-slate-950 mb-3 min-h-[56px]">{a.t}</h3>
                <p className="text-gray-600 font-light leading-relaxed text-[15px]">{a.d}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Close */}
      <section className="relative overflow-hidden bg-[#050A07] text-white grain">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(45,90,58,0.3),transparent_60%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center px-6 py-28 lg:py-32 relative z-10">
          <FadeIn>
            <h2 className="text-4xl sm:text-6xl font-montserrat font-light tracking-tight mb-8">
              The Ground Has A History. <span className="font-semibold h-bold">Know It.</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 font-light leading-relaxed max-w-2xl mx-auto mb-12">
              Tell us the site and the question — a purchase, a DA condition, a stockpile, or something the excavator just turned up. You&rsquo;ll have a straight answer on scope and cost within one business day.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="tel:+61423483555" className="flex items-center justify-center px-8 py-2.5 bg-gradient-to-b from-[#346b43] to-forest-green text-white rounded-full shadow-[0_8px_20px_-6px_rgba(45,90,58,0.4)] hover:shadow-[0_12px_24px_-8px_rgba(45,90,58,0.6)] hover:brightness-105 transition-all hover:-translate-y-0.5 w-full sm:w-[280px] h-[46px] text-xs font-semibold tracking-wide">
                Call 0423 483 555
              </Link>
              <QuoteCta source="environmental close" className="flex items-center justify-center px-8 py-2.5 bg-white/5 text-white rounded-full shadow-[inset_0_0_0_1px_rgba(255,255,255,0.25)] hover:bg-white/10 hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.45)] transition-all hover:-translate-y-0.5 w-full sm:w-[280px] h-[46px] text-xs font-semibold tracking-wide backdrop-blur-sm" />
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
