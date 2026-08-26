import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import QuoteCta from "@/components/forms/QuoteCta";
import PhotoPlaceholder from "@/components/ui/PhotoPlaceholder";
import { FadeIn } from "../site-classification/MotionWrapper";

export const metadata: Metadata = {
  title: "Geotechnical Design Parameters Sydney | For Engineers | SFGEO",
  description: "Site-specific geotechnical design inputs for structural and civil teams — bearing capacities, pile design values, retaining wall parameters to AS 4678, pavements and working platforms.",
  alternates: { canonical: '/geotechnical-design' },
  openGraph: { images: ['/og/sfgeo-og-card.jpg'], title: "Geotechnical Design Parameters Sydney | For Engineers | SFGEO", description: "Site-specific geotechnical design inputs for structural and civil teams — bearing capacities, pile design values, retaining wall parameters to AS 4678, pavements and working platforms.", url: '/geotechnical-design' },
  twitter: { card: "summary_large_image", images: ['/og/sfgeo-og-card.jpg'], title: "Geotechnical Design Parameters Sydney | For Engineers | SFGEO", description: "Site-specific geotechnical design inputs for structural and civil teams — bearing capacities, pile design values, retaining wall parameters to AS 4678, pavements and working platforms." },
};

const ITEMS = [
  { t: "Bearing Capacities", d: "Allowable bearing for shallow footings and piers, by stratum and depth." },
  { t: "Pile Design Values", d: "End bearing and shaft adhesion for bored piers and piles, with socket and construction guidance." },
  { t: "Retaining Walls (AS 4678)", d: "Unit weights, strength values and earth pressure coefficients per stratum." },
  { t: "Pavement & Subgrade", d: "CBR values and subgrade advice for driveways, car parks and civil pavements." },
  { t: "Working Platforms", d: "Platform bearing verification for cranes, rigs and heavy plant." },
  { t: "Excavation & Groundwater", d: "Batter guidance, excavatability and groundwater observations for basements and cuts." },
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
    "description": "Site-specific geotechnical design inputs for structural and civil teams — bearing capacities, pile design values, retaining wall parameters to AS 4678, pavements and working platforms.",
    "url": "https://sfgeo.com.au/geotechnical-design",
    "provider": { "@id": "https://sfgeo.com.au/#organization" },
    "areaServed": { "@type": "City", "name": "Sydney, New South Wales, Australia" }
  };

  return (
    <div className="bg-white text-slate-950 font-inter selection:bg-forest-green selection:text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <section className="pt-36 pb-16 px-6 lg:px-12 max-w-7xl mx-auto">
        <FadeIn className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.2em] text-forest-green mb-6 font-semibold">Geotechnical Design &middot; For Structural & Civil Teams</p>
          <h1 className="text-4xl sm:text-6xl font-montserrat font-light tracking-tight leading-[1.08] mb-8">
            The Numbers Under <span className="font-semibold h-bold">The Design.</span>
          </h1>
          <div className="w-[96px] h-[3px] bg-forest-green mb-8" />
          <p className="text-lg sm:text-xl text-gray-600 font-light leading-relaxed">Your structure is only as good as the parameters beneath it. SFGEO supplies the site-specific inputs structural and civil engineers design from — investigated, derived and signed by the engineer who read the ground.</p>
        </FadeIn>
      </section>

      <section className="py-16 px-6 lg:px-12 max-w-7xl mx-auto border-t border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <FadeIn>
            <PhotoPlaceholder
              subject="Where the numbers come from — SPT or in-situ testing underway, or field data being written up into design parameters."
              caption="Derived From The Ground"
              className="aspect-[4/3] rounded-2xl shadow-[0_26px_60px_-26px_rgba(5,10,7,0.4)]"
            />
          </FadeIn>
          <FadeIn delay={0.12}>
            <h2 className="text-3xl font-montserrat font-light tracking-tight text-slate-950 mb-5">Derived From The Ground, <span className="font-semibold h-bold">Not The Textbook</span></h2>
            <div className="h-px bg-forest-green w-12 mb-7" />
            <p className="text-gray-600 font-light leading-relaxed">Every parameter traces to fieldwork on your site — boreholes, penetrometers, laboratory results — not presumptive values copied between reports. We do not carry the structural design; we make sure the numbers under it are real, and we stand behind them.</p>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 px-6 lg:px-12 max-w-7xl mx-auto border-t border-gray-100">
        <FadeIn className="mb-12">
          <h2 className="text-3xl font-montserrat font-light tracking-tight text-slate-950">Parameters We <span className="font-semibold h-bold">Deliver</span></h2>
          <div className="mt-6 h-px bg-forest-green w-12" />
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ITEMS.map((it) => (
            <FadeIn key={it.t}>
              <div className="p-8 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow h-full">
                <h3 className="text-lg font-montserrat font-semibold text-slate-950 mb-3">{it.t}</h3>
                <p className="text-gray-600 font-light leading-relaxed text-[15px]">{it.d}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* How we plug in */}
      <section className="py-16 lg:py-20 px-6 lg:px-12 max-w-7xl mx-auto border-t border-gray-100">
        <FadeIn className="mb-12">
          <p className="text-sm uppercase tracking-[0.2em] text-forest-green mb-4 font-semibold">Working With Design Teams</p>
          <h2 className="text-3xl sm:text-4xl font-montserrat font-light tracking-tight">Built To Slot Into <span className="font-semibold h-bold">Your Workflow.</span></h2>
          <div className="mt-5 h-px bg-forest-green w-12" />
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { t: "Parameters, Not Prose", d: "Design values delivered as memos and tables your software takes directly — with the derivation available when reviewers ask." },
            { t: "Alternatives Reviewed", d: "When the contractor proposes a different footing system mid-build, we review it against the ground data fast — so the program holds." },
            { t: "On Call Through Construction", d: "The engineer who derived the numbers stays reachable when the excavation opens and the ground asks its own questions." },
          ].map((c) => (
            <FadeIn key={c.t}>
              <div className="p-8 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow h-full">
                <h3 className="text-lg font-montserrat font-semibold text-slate-950 mb-3">{c.t}</h3>
                <p className="text-gray-600 font-light leading-relaxed text-[15px]">{c.d}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="mt-8 relative overflow-hidden bg-[#050A07] text-white grain">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(45,90,58,0.3),transparent_60%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center px-6 py-24 relative z-10">
          <FadeIn>
            <h2 className="text-4xl sm:text-5xl font-montserrat font-light tracking-tight mb-8">Designing On Sydney Ground? <span className="font-semibold h-bold">Get Real Numbers.</span></h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="tel:+61423483555" className="flex items-center justify-center px-8 py-2.5 bg-gradient-to-b from-[#346b43] to-forest-green text-white rounded-full shadow-[0_8px_20px_-6px_rgba(45,90,58,0.4)] hover:brightness-105 transition-all hover:-translate-y-0.5 w-full sm:w-[280px] h-[46px] text-xs font-semibold tracking-wide">Call 0423 483 555</Link>
              <QuoteCta source="geotechnical-design close" className="flex items-center justify-center px-8 py-2.5 bg-white/5 text-white rounded-full shadow-[inset_0_0_0_1px_rgba(255,255,255,0.25)] hover:bg-white/10 transition-all hover:-translate-y-0.5 w-full sm:w-[280px] h-[46px] text-xs font-semibold tracking-wide backdrop-blur-sm" />
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
