import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import QuoteCta from "@/components/forms/QuoteCta";
import PhotoPlaceholder from "@/components/ui/PhotoPlaceholder";
import { FadeIn } from "../site-classification/MotionWrapper";

export const metadata: Metadata = {
  title: "Subcontract Drilling Sydney | Rig Hire With Engineer | SFGEO",
  description: "Subcontract drilling for consultancies, environmental consultants, builders and civil contractors — an engineer-operated 4WD rig on your program and your paperwork, Sydney metro and regional NSW.",
  alternates: { canonical: '/subcontract-drilling' },
  openGraph: {
    images: ['/og/sfgeo-og-card.jpg'],
    title: "Subcontract Drilling Sydney | Rig Hire With Engineer | SFGEO",
    description: "Engineer-operated rig capacity under your scope — consultancies, environmental programs, builders and majors.",
    url: '/subcontract-drilling',
  },
  twitter: {
    card: "summary_large_image",
    images: ['/og/sfgeo-og-card.jpg'],
    title: "Subcontract Drilling Sydney | SFGEO",
    description: "Your scope, our rig — engineer operated, metro and regional NSW.",
  },
};

const CLIENTS = [
  { t: "Engineering Consultancies", d: "Boutique practices to some of the bigger firms in Sydney ground — field data with engineer-grade logging you can put your letterhead on without re-checking it." },
  { t: "Environmental Consultants", d: "Drilling, sampling and monitoring well installation for PSI and DSI programs — clean execution, chain of custody kept, your sampling plan followed to the letter." },
  { t: "Builders & Civil Contractors", d: "Holes without the overhead of an in-house crew — footing probes, pavement investigations, service trenching support, booked around your program." },
  { t: "Bigger Firms & Majors", d: "Reliable capacity when the fleet is booked out — night works, staged access and standing arrangements, delivered at the same standard every visit." },
];

const TERMS = [
  { t: "Your Scope Or Ours", d: "Drill to your borehole schedule under your supervision, or hand us the brief and take back finished logs — both run every week." },
  { t: "Rates In Writing", d: "Day rates or per-hole pricing confirmed in writing before the rig moves. No surprises on the invoice, ever." },
  { t: "Your Format", d: "Logs, samples and chain-of-custody delivered the way your templates and your lab expect them." },
  { t: "Insured & Credentialed", d: "PI and PL insurance for consultant engagements, with the supplier paperwork your procurement team needs, handled once." },
];

export default function SubcontractDrillingPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "item": { "@id": "https://sfgeo.com.au/", "name": "Home" } },
      { "@type": "ListItem", "position": 2, "item": { "@id": "https://sfgeo.com.au/drilling", "name": "Drilling" } },
      { "@type": "ListItem", "position": 3, "item": { "@id": "https://sfgeo.com.au/subcontract-drilling", "name": "Subcontract Drilling" } }
    ]
  };
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Subcontract Drilling",
    "serviceType": "Subcontract geotechnical and environmental drilling",
    "description": "Engineer-operated subcontract drilling for engineering consultancies, environmental consultants, builders and civil contractors across Sydney and regional NSW.",
    "url": "https://sfgeo.com.au/subcontract-drilling",
    "provider": { "@id": "https://sfgeo.com.au/#organization" },
    "areaServed": { "@type": "City", "name": "Sydney, New South Wales, Australia" }
  };

  return (
    <div className="bg-white text-slate-950 font-inter selection:bg-forest-green selection:text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      {/* Hero */}
      <section className="pt-36 pb-16 px-6 lg:px-12 max-w-7xl mx-auto">
        <FadeIn className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.2em] text-forest-green mb-6 font-semibold">
            Subcontract Drilling &middot; B2B &middot; Metro + Regional NSW
          </p>
          <h1 className="text-4xl sm:text-6xl font-montserrat font-light tracking-tight leading-[1.08] mb-8">
            Subcontract Drilling. <span className="font-semibold h-bold">Your Scope. Our Rig.</span>
          </h1>
          <div className="w-[96px] h-[3px] bg-forest-green mb-8" />
          <p className="text-lg sm:text-xl text-gray-600 font-light leading-relaxed mb-10">
            An engineer-operated 4WD rig available under your paperwork — for the consultancies, environmental programs, builders and bigger firms that need holes in the ground without owning the machine that makes them. Rapid mobilisation, engineer logging as standard, and the same crew every time.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <Link
              href="/contact?subject=Subcontract%20Drilling%20Enquiry"
              className="flex items-center justify-center px-8 py-2.5 bg-gradient-to-b from-[#346b43] to-forest-green text-white rounded-full shadow-[0_8px_20px_-6px_rgba(45,90,58,0.4)] hover:shadow-[0_12px_24px_-8px_rgba(45,90,58,0.6)] hover:brightness-105 transition-all hover:-translate-y-0.5 w-full sm:w-auto h-[46px] text-xs font-semibold tracking-wide"
            >
              Enquire About Capacity
            </Link>
            <Link
              href="tel:+61423483555"
              className="flex items-center justify-center px-8 py-2.5 bg-white text-forest-green rounded-full shadow-[inset_0_0_0_1px_rgba(45,90,58,0.25),0_4px_10px_-4px_rgba(0,0,0,0.05)] hover:bg-forest-green/5 hover:shadow-[inset_0_0_0_1px_rgba(45,90,58,0.4),0_6px_14px_-4px_rgba(0,0,0,0.1)] transition-all hover:-translate-y-0.5 w-full sm:w-auto h-[46px] text-xs font-semibold tracking-wide"
            >
              Call 0423 483 555
            </Link>
          </div>
        </FadeIn>
      </section>

      {/* 01 — The arrangement */}
      <section className="py-16 lg:py-20 px-6 lg:px-12 max-w-7xl mx-auto border-t border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16 items-center">
          <FadeIn>
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <PhotoPlaceholder
                subject="Working under someone else's banner — rig on a commercial or civil site alongside the head contractor's works."
                caption="Mobilised"
                className="aspect-[3/4] rounded-2xl shadow-[0_20px_50px_-20px_rgba(5,10,7,0.35)]"
              />
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-[0_20px_50px_-20px_rgba(5,10,7,0.35)] lg:mt-10">
                <Image src="/sfgeo-subcontract-rig-working-rear.jpg" alt="Rig with mast raised working a borehole above the river" fill sizes="(max-width: 1024px) 50vw, 30vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050A07]/40 via-transparent to-transparent" />
                <p className="absolute bottom-4 left-4 text-[10px] uppercase tracking-[0.2em] text-white/80 font-semibold">On The Hole</p>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-sm uppercase tracking-[0.2em] text-forest-green mb-4 font-semibold">01 &middot; Why It Works</p>
            <h2 className="text-3xl sm:text-4xl font-light tracking-tight font-montserrat text-slate-950 mb-5">
              A Crew That Reads The Ground, <span className="font-semibold h-bold">Not Just Drills It.</span>
            </h2>
            <div className="h-px bg-forest-green w-12 mb-7" />
            <p className="text-gray-600 font-light leading-relaxed">
              Most drill crews hand you spoil and a diary. This one hands you engineer-grade logs, because the operator is an engineer — the anomaly gets flagged on site, the extra SPT gets taken without a phone call, and the day doesn&rsquo;t end with a hole in your data. That&rsquo;s the difference between hiring a rig and hiring SFGEO.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 02 — Who we drill for */}
      <section className="py-16 lg:py-20 px-6 lg:px-12 max-w-7xl mx-auto border-t border-gray-100">
        <FadeIn className="mb-12">
          <p className="text-sm uppercase tracking-[0.2em] text-forest-green mb-4 font-semibold">02 &middot; Who We Drill For</p>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight font-montserrat text-slate-950">
            Under Your Banner. <span className="font-semibold h-bold">At Our Standard.</span>
          </h2>
          <div className="mt-5 h-px bg-forest-green w-12" />
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CLIENTS.map((c) => (
            <FadeIn key={c.t}>
              <div className="p-8 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow h-full">
                <h3 className="text-lg font-montserrat font-semibold text-slate-950 mb-3">{c.t}</h3>
                <p className="text-gray-600 font-light leading-relaxed text-[15px]">{c.d}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* 03 — The terms */}
      <section className="py-16 lg:py-20 px-6 lg:px-12 max-w-7xl mx-auto border-t border-gray-100">
        <FadeIn className="mb-12">
          <p className="text-sm uppercase tracking-[0.2em] text-forest-green mb-4 font-semibold">03 &middot; The Arrangement</p>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight font-montserrat text-slate-950">
            Simple To Engage. <span className="font-semibold h-bold">Simple To Repeat.</span>
          </h2>
          <div className="mt-5 h-px bg-forest-green w-12" />
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TERMS.map((t, i) => (
            <FadeIn key={t.t}>
              <div className="h-full">
                <p className="font-montserrat font-light text-forest-green text-3xl mb-4">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="text-base font-montserrat font-semibold text-slate-950 mb-2">{t.t}</h3>
                <p className="text-gray-600 font-light leading-relaxed text-[14px]">{t.d}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Close */}
      <section className="mt-8 relative overflow-hidden bg-[#050A07] text-white grain">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(45,90,58,0.3),transparent_60%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center px-6 py-28 lg:py-32 relative z-10">
          <FadeIn>
            <h2 className="text-4xl sm:text-6xl font-montserrat font-light tracking-tight mb-8">
              Fleet Booked Out? <span className="font-semibold h-bold">Ours Isn&rsquo;t.</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 font-light leading-relaxed max-w-2xl mx-auto mb-12">
              Send the borehole schedule and the window. You&rsquo;ll have rates in writing within one business day — and a rig that turns up when it said it would.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="tel:+61423483555" className="flex items-center justify-center px-8 py-2.5 bg-gradient-to-b from-[#346b43] to-forest-green text-white rounded-full shadow-[0_8px_20px_-6px_rgba(45,90,58,0.4)] hover:brightness-105 transition-all hover:-translate-y-0.5 w-full sm:w-[280px] h-[46px] text-xs font-semibold tracking-wide">
                Call 0423 483 555
              </Link>
              <QuoteCta source="subcontract-drilling close" label="Enquire About Capacity" className="flex items-center justify-center px-8 py-2.5 bg-white/5 text-white rounded-full shadow-[inset_0_0_0_1px_rgba(255,255,255,0.25)] hover:bg-white/10 transition-all hover:-translate-y-0.5 w-full sm:w-[280px] h-[46px] text-xs font-semibold tracking-wide backdrop-blur-sm" />
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
