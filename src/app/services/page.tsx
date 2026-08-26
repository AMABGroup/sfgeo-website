import { Metadata } from "next";
import Link from "next/link";
import QuoteCta from "@/components/forms/QuoteCta";
import { FadeIn } from "../site-classification/MotionWrapper";

export const metadata: Metadata = {
  title: "Geotechnical Services Sydney | SFGEO",
  description: "Every SFGEO service line in one place — geotechnical, drilling, environmental and soil testing, other professional services and concrete coring. Principal-led, Sydney-wide.",
  alternates: { canonical: '/services' },
  openGraph: {
    images: ['/og/sfgeo-og-card.jpg'],
    title: "Geotechnical Services Sydney | SFGEO",
    description: "Every SFGEO service line in one place — geotechnical, drilling, environmental, professional services and concrete coring.",
    url: '/services',
  },
  twitter: {
    card: "summary_large_image",
    images: ['/og/sfgeo-og-card.jpg'],
    title: "Geotechnical Services Sydney | SFGEO",
    description: "Every SFGEO service line in one place.",
  },
};

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
    d: "Engineer-supervised coring of slabs, pavements and penetrations — logged, verified and strength-tested when the question needs a number. From $120 + GST per hole.",
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
        <FadeIn className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.2em] text-forest-green mb-6 font-semibold">
            All Services &middot; Principal-Led &middot; Sydney
          </p>
          <h1 className="text-4xl sm:text-6xl font-montserrat font-light tracking-tight leading-[1.08] mb-8">
            Full Suite. <span className="font-semibold h-bold">One Team.</span>
          </h1>
          <div className="w-[96px] h-[3px] bg-forest-green mb-8" />
          <p className="text-lg sm:text-xl text-gray-600 font-light leading-relaxed">
            Five service lines, one standard, one point of contact — and the Principal across every job. Start with the segment, or just tell us the project and we&rsquo;ll tell you what it needs.
          </p>
        </FadeIn>
      </section>

      {/* Index */}
      {SEGMENTS.map((seg) => (
        <section key={seg.n} className="px-6 lg:px-12 max-w-7xl mx-auto border-t border-gray-100">
          <FadeIn>
            <div className="py-14 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12">
              <div className="lg:col-span-1">
                <p className="font-montserrat font-light text-forest-green text-2xl">{seg.n}</p>
              </div>
              <div className="lg:col-span-5">
                <Link href={seg.href} className="group inline-flex items-start gap-3">
                  <h2 className="text-2xl sm:text-3xl font-montserrat font-light tracking-tight text-slate-950 group-hover:text-forest-green transition-colors">
                    {seg.title}
                  </h2>
                  <span className="text-forest-green text-xl mt-1 transition-transform group-hover:translate-x-1">&rarr;</span>
                </Link>
              </div>
              <div className="lg:col-span-6">
                <p className="text-gray-600 font-light leading-relaxed mb-5">{seg.d}</p>
                {seg.children.length > 0 && (
                  <div className="flex flex-wrap gap-x-6 gap-y-2">
                    {seg.children.map((c) => (
                      <Link key={c.name} href={c.href} className="text-sm font-medium text-gray-500 hover:text-forest-green underline underline-offset-4 decoration-gray-200 hover:decoration-forest-green transition-colors">
                        {c.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </FadeIn>
        </section>
      ))}

      {/* Close */}
      <section className="mt-8 relative overflow-hidden bg-[#050A07] text-white grain">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(45,90,58,0.3),transparent_60%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center px-6 py-28 lg:py-32 relative z-10">
          <FadeIn>
            <h2 className="text-4xl sm:text-6xl font-montserrat font-light tracking-tight mb-8">
              Not Sure Where <span className="font-semibold h-bold">To Start?</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 font-light leading-relaxed max-w-2xl mx-auto mb-12">
              Describe the project in a sentence. The Principal will tell you what it needs — and what it doesn&rsquo;t.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="tel:+61423483555" className="flex items-center justify-center px-8 py-2.5 bg-gradient-to-b from-[#346b43] to-forest-green text-white rounded-full shadow-[0_8px_20px_-6px_rgba(45,90,58,0.4)] hover:shadow-[0_12px_24px_-8px_rgba(45,90,58,0.6)] hover:brightness-105 transition-all hover:-translate-y-0.5 w-full sm:w-[280px] h-[46px] text-xs font-semibold tracking-wide">
                Call 0423 483 555
              </Link>
              <QuoteCta source="services index close" className="flex items-center justify-center px-8 py-2.5 bg-white/5 text-white rounded-full shadow-[inset_0_0_0_1px_rgba(255,255,255,0.25)] hover:bg-white/10 hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.45)] transition-all hover:-translate-y-0.5 w-full sm:w-[280px] h-[46px] text-xs font-semibold tracking-wide backdrop-blur-sm" />
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
