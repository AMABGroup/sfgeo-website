import { Metadata } from "next";
import Link from "next/link";
import type { CSSProperties } from "react";
import Reveal from "@/components/ui/Reveal";
import CloseBand from "@/components/ui/CloseBand";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta(
  "Geotechnical, Drilling & Environmental Services | SFGEO",
  "Every SFGEO service line in one place — geotechnical, drilling, environmental testing, specialist services and concrete coring. Principal-led, Sydney-wide.",
  "/services",
);

const d = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

const SEGMENTS = [
  {
    n: "01",
    title: "Geotechnical",
    href: "/geotechnical",
    d: "From the first hole on an empty block to the last inspection before the pour — classifications, investigations, assessments, construction support and design parameters.",
    children: [
      { name: "Site Classification", href: "/site-classification" },
      { name: "Geotechnical Investigations", href: "/geotechnical-investigations" },
      { name: "Assessments", href: "/geotechnical-assessments" },
      { name: "Construction Phase Support", href: "/construction-phase-support" },
      { name: "Geotechnical Design", href: "/geotechnical-design" },
    ],
  },
  {
    n: "02",
    title: "Drilling",
    href: "/drilling",
    d: "One 4WD-mounted rig, engineer operated — borehole drilling, NMLC rock coring and subcontract capacity for builders, consultancies and bigger firms, metro and regional.",
    children: [
      { name: "Borehole Drilling", href: "/borehole-drilling" },
      { name: "Rock Coring", href: "/drilling#rock-coring" },
      { name: "Tight Access", href: "/tight-access-drilling" },
      { name: "Subcontract Drilling", href: "/subcontract-drilling" },
    ],
  },
  {
    n: "03",
    title: "Environmental & Soil Testing",
    href: "/environmental",
    d: "What the ground is carrying — contaminated land investigations, acid sulfate soils, waste classification and laboratory testing, sampled by the crew that drills it.",
    children: [
      { name: "Contaminated Land (PSI & DSI)", href: "/environmental#psi-dsi" },
      { name: "Acid Sulfate Soils", href: "/environmental#ass" },
      { name: "Waste Classification", href: "/environmental#waste" },
      { name: "Soil & Lab Testing", href: "/environmental#lab" },
    ],
  },
  {
    n: "04",
    title: "Other Professional Services",
    href: "/other-services",
    d: "The disciplines around the ground — utility location and GPR, dilapidation reports, surveys and specialist engineering, delivered through one point of contact.",
    children: [
      { name: "Utility Location & GPR", href: "/other-services#utility-gpr" },
      { name: "Dilapidation Reports", href: "/other-services#dilapidation" },
      { name: "Surveying", href: "/other-services#surveying" },
      { name: "Structural, Civil & Hydraulic", href: "/other-services#specialist" },
    ],
  },
  {
    n: "05",
    title: "Concrete Coring",
    href: "/concrete-coring",
    d: "Engineer-supervised coring of slabs, pavements and penetrations — logged, verified and strength-tested when the question needs a number.",
    children: [],
  },
];

export default function ServicesIndexPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "item": { "@id": "https://sfgeo.com.au/", "name": "Home" } },
      { "@type": "ListItem", "position": 2, "item": { "@id": "https://sfgeo.com.au/services", "name": "Services" } }
    ]
  };

  return (
    <div className="bg-white text-slate-950 font-inter selection:bg-forest-green selection:text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="pt-36 pb-20 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <p className="hero-line text-sm uppercase tracking-[0.2em] text-forest-green mb-6 font-semibold [text-wrap:balance]">
            <span className="whitespace-nowrap">All Services</span> &middot; <span className="whitespace-nowrap">Principal-Led</span> &middot; <span className="whitespace-nowrap">Sydney</span>
          </p>
          <h1 className="text-4xl sm:text-6xl font-montserrat font-light tracking-tight leading-[1.08] mb-8">
            <span className="hero-mask"><span className="mask-line mask-d1"><span>Geotechnical Services Sydney.</span></span></span>
            <span className="hero-mask"><span className="mask-line mask-d2"><span className="font-semibold h-bold">One Team.</span></span></span>
          </h1>
          <div className="hero-line hero-d2 w-[96px] h-[3px] bg-forest-green mb-8" />
          <p className="hero-line hero-d2 text-lg sm:text-xl text-gray-600 font-light leading-relaxed">
            Five service lines, one standard, one point of contact — and the Principal across every job. Start with the segment, or just tell us the project and we&rsquo;ll tell you what it needs.
          </p>
        </div>
      </section>

      {/* Index */}
      {SEGMENTS.map((seg) => (
        <section key={seg.n} className="px-6 lg:px-12 max-w-7xl mx-auto border-t border-gray-100">
          <Reveal variant="group">
            <div className="py-14 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12">
              <div data-fx="rise" className="lg:col-span-1">
                <p className="font-montserrat font-light text-forest-green text-2xl">{seg.n}</p>
              </div>
              <div data-fx="rise" style={d(80)} className="lg:col-span-5">
                <Link href={seg.href} className="group inline-flex items-start gap-3">
                  <h2 className="text-2xl sm:text-3xl font-montserrat font-light tracking-tight text-slate-950 group-hover:text-forest-green transition-colors">
                    {seg.title}
                  </h2>
                  <span className="text-forest-green text-xl mt-1 transition-transform group-hover:translate-x-1">&rarr;</span>
                </Link>
              </div>
              <div className="lg:col-span-6">
                <p data-fx="rise" style={d(160)} className="text-gray-600 font-light leading-relaxed mb-5">{seg.d}</p>
                {seg.children.length > 0 && (
                  <div data-stagger style={d(220)} className="flex flex-wrap gap-x-6 gap-y-0">
                    {seg.children.map((c) => (
                      <Link key={c.name} href={c.href} className="inline-block py-2 text-sm font-medium text-gray-500 hover:text-forest-green underline underline-offset-4 decoration-gray-200 hover:decoration-forest-green transition-colors">
                        {c.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </Reveal>
        </section>
      ))}

      <CloseBand
        source="services index close"
        className="mt-8"
        heading={<>Not Sure Where <span className="font-semibold h-bold">To Start?</span></>}
        sub={<>Describe the project in a sentence. The Principal will tell you what it needs — and what it doesn&rsquo;t.</>}
      />
    </div>
  );
}
