import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import QuoteCta from "@/components/forms/QuoteCta";
import { FadeIn } from "../site-classification/MotionWrapper";

export const metadata: Metadata = {
  title: "Geotechnical Engineers Sydney | About SFGEO",
  description: "Sydney's boutique geotechnical consultancy — family owned, principal-led, Inner West based. The team behind every classification, investigation and drilling job.",
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    images: ['/og/sfgeo-og-card.jpg'],
    title: "Geotechnical Engineers Sydney | About SFGEO",
    description: "Sydney's boutique geotechnical consultancy — family owned, principal-led, Inner West based.",
    url: '/about',
  },
  twitter: {
    card: "summary_large_image",
    images: ['/og/sfgeo-og-card.jpg'],
    title: "Geotechnical Engineers Sydney | About SFGEO",
    description: "Family owned, principal-led, Inner West based — the team behind the reports.",
  },
};

const VALUES = [
  { t: "Direct Access. Always.", d: "Call, email, turn up. You reach the team doing the work directly — no admin queues, no message chains." },
  { t: "Sydney Is Our Backyard.", d: "Locally owned, locally based. We know Sydney's ground conditions, its councils, and its sites — because we've worked them for 15 years." },
  { t: "On Site. On Time. On Call.", d: "We mobilise fast, deliver reports quickly, and pick up the phone when you need an answer. Quality work, without the wait." },
];

const PEDIGREE = [
  { image: "/commercial-geotechnical-eastern-creek-light-horse.jpeg", alt: "Aerial view of geotechnical site support at the Light Horse Interchange, Eastern Creek", t: "Light Horse Interchange", loc: "Eastern Creek" },
  { image: "/infrastructure-drilling-sydney-gateway-airport.jpeg", alt: "Infrastructure drilling on the Sydney Gateway project beside Sydney Airport", t: "Sydney Gateway", loc: "Sydney Airport" },
  { image: "/civil-geotechnical-data-m7-m12-link-sydney.jpeg", alt: "Civil infrastructure fieldwork on the M7-M12 Link in south-west Sydney", t: "M7–M12 Link", loc: "South West Sydney" },
  { image: "/tier-1-infrastructure-drilling-sydney-metro-hurlstone.jpg", alt: "Drilling for Sydney Metro rail infrastructure at Hurlstone Park", t: "Sydney Metro", loc: "Hurlstone Park" },
];

export default function About() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "item": { "@id": "https://sfgeo.com.au/", "name": "Home" } },
      { "@type": "ListItem", "position": 2, "item": { "@id": "https://sfgeo.com.au/about", "name": "About" } }
    ]
  };

  return (
    <div className="bg-white text-slate-950 font-inter selection:bg-forest-green selection:text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="pt-36 pb-16 px-6 lg:px-12 max-w-7xl mx-auto">
        <FadeIn className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.2em] text-forest-green mb-6 font-semibold">
            About SFGEO &middot; Family Owned &middot; Inner West Based
          </p>
          <h1 className="text-4xl sm:text-6xl font-montserrat font-light tracking-tight leading-[1.08] mb-8">
            Boutique Geotechnical <span className="font-semibold h-bold">Engineers. Sydney.</span>
          </h1>
          <div className="w-[96px] h-[3px] bg-forest-green mb-8" />
          <p className="text-lg sm:text-xl text-gray-600 font-light leading-relaxed">
            A principal-led team, hired locally, backed by a trusted partner network — carrying fifteen years of Sydney ground from landmark infrastructure to backyard footings. When you work with SFGEO, you work with the same team, start to finish.
          </p>
        </FadeIn>
      </section>

      {/* Full-width team photo */}
      <section className="px-6 lg:px-12 max-w-7xl mx-auto pb-20">
        <FadeIn>
          <div className="relative aspect-[21/9] rounded-2xl overflow-hidden shadow-[0_26px_60px_-26px_rgba(5,10,7,0.4)]">
            <Image
              src="/sfgeo-night-works-high-street-sydney.jpg"
              alt="A Sydney high street closed under traffic control for overnight geotechnical works, shopfronts shut and the lane coned off"
              fill
              sizes="(max-width: 1024px) 100vw, 1200px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050A07]/55 via-[#050A07]/10 to-transparent" />
            <p className="absolute bottom-5 left-6 text-[11px] uppercase tracking-[0.25em] text-white/75 font-semibold">
              Night Works &middot; Sydney
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Story + portrait */}
      <section id="team" className="py-20 lg:py-24 px-6 lg:px-12 max-w-7xl mx-auto border-t border-gray-100 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        <FadeIn className="lg:col-span-8">
          <p className="text-sm uppercase tracking-[0.2em] text-forest-green mb-4 font-semibold">Our Foundation</p>
          <h2 className="text-3xl sm:text-4xl font-montserrat font-light tracking-tight text-slate-950 mb-5">
            Built On <span className="font-semibold h-bold">Direct Access.</span>
          </h2>
          <div className="h-px bg-forest-green w-12 mb-7" />
          <p className="text-lg text-gray-600 font-light leading-loose mb-6">
            SFGEO is a locally-owned, independent geotechnical consultancy based in Marrickville, built on 15 years of hands-on Sydney experience across residential <Link href="/site-classification" className="text-forest-green hover:underline">site classifications</Link>, bespoke architectural homes, and landmark infrastructure.
          </p>
          <p className="text-lg text-gray-600 font-light leading-loose mb-6">
            We were founded on a simple belief: clients deserve direct access to the professional doing the work, not a corporate chain. SFGEO is family owned and Sydney grown — a principal-led team, hired locally, backed by a trusted partner network.
          </p>
          <p className="text-lg text-gray-600 font-light leading-loose">
            Our Principal Engineer has contributed to Sydney Gateway, the M12 Motorway, Western Sydney Airport, and the Canterbury Aquatic Centre. That depth of experience now serves your project with the responsiveness, transparency, and personal care that only an independent practice can offer.
          </p>
        </FadeIn>
        <FadeIn delay={0.12} className="lg:col-span-4">
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-[0_26px_60px_-26px_rgba(5,10,7,0.4)]">
            <Image
              src="/geotechnical-engineer-led-field-operations-sydney.jpg"
              alt="The Principal Engineer working on the drill rig"
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050A07]/40 via-transparent to-transparent" />
            <p className="absolute bottom-5 left-6 text-[11px] uppercase tracking-[0.25em] text-white/80 font-semibold">Principal-Led &middot; On The Rig</p>
          </div>
        </FadeIn>
      </section>

      {/* Community — the why */}
      <section className="relative overflow-hidden bg-[#050A07] text-white grain">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_70%_-20%,rgba(45,90,58,0.35),transparent_60%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-28 relative z-10">
          <FadeIn>
            <p className="text-sm uppercase tracking-[0.2em] text-[#8FBF9F] mb-6 font-semibold">Our Community</p>
            <h2 className="text-3xl sm:text-5xl font-montserrat font-light tracking-tight leading-[1.12] mb-8 max-w-3xl">
              From The Inner West, <span className="font-semibold h-bold">For The Inner West.</span>
            </h2>
            <div className="w-[96px] h-[3px] bg-forest-green mb-8" />
            <p className="text-lg text-gray-300 font-light leading-relaxed max-w-2xl">
              SFGEO grew up in Sydney&rsquo;s inner west and west — and the goal was never just helping homeowners build. It&rsquo;s helping the community we come from: hiring locally, training young engineers and drillers, and giving people from our neighbourhoods the opportunities we were given. Every job we take on here keeps that going.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Why choose */}
      <section className="py-24 lg:py-28 px-6 lg:px-12 max-w-7xl mx-auto">
        <FadeIn className="mb-14">
          <p className="text-sm uppercase tracking-[0.2em] text-forest-green mb-4 font-semibold">How We Work</p>
          <h2 className="text-3xl sm:text-4xl font-montserrat font-light tracking-tight">
            Small Team. <span className="font-semibold h-bold">Serious Standards.</span>
          </h2>
          <div className="mt-5 h-px bg-forest-green w-12" />
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {VALUES.map((v) => (
            <FadeIn key={v.t}>
              <div className="p-8 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow h-full">
                <h3 className="text-lg font-montserrat font-semibold text-slate-950 mb-3">{v.t}</h3>
                <p className="text-gray-600 font-light leading-relaxed text-[15px]">{v.d}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Infrastructure pedigree */}
      <section id="projects" className="py-24 lg:py-28 px-6 lg:px-12 max-w-7xl mx-auto border-t border-gray-100">
        <FadeIn className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-forest-green mb-4 font-semibold">Previous Project Experience</p>
            <h2 className="text-3xl sm:text-4xl font-montserrat font-light tracking-tight">
              Where We <span className="font-semibold h-bold">Cut Our Teeth.</span>
            </h2>
            <div className="mt-5 h-px bg-forest-green w-12" />
          </div>
          <p className="text-sm text-gray-500 max-w-md font-light leading-relaxed">
            Before SFGEO carried its own name, our engineers carried these — landmark Sydney infrastructure, now serving every backyard we classify. For current work, see <Link href="/projects" className="text-forest-green hover:underline">our projects</Link>.
          </p>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PEDIGREE.map((p) => (
            <FadeIn key={p.t}>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_20px_50px_-20px_rgba(5,10,7,0.35)]">
                <Image src={p.image} alt={p.alt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050A07]/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-5 right-5">
                  <p className="text-[13px] font-semibold text-white leading-tight">{p.t}</p>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-white/70 font-semibold mt-1">{p.loc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Accreditations */}
      <section id="accreditations" className="py-24 lg:py-28 px-6 lg:px-12 max-w-7xl mx-auto border-t border-gray-100">
        <FadeIn className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-forest-green mb-4 font-semibold">Accreditation &amp; Assurance</p>
            <h2 className="text-3xl sm:text-4xl font-montserrat font-light tracking-tight">
              Credentials <span className="font-semibold h-bold">That Hold.</span>
            </h2>
            <div className="mt-5 h-px bg-forest-green w-12" />
          </div>
          <p className="text-sm text-gray-500 max-w-md font-light leading-relaxed">
            SFGEO strictly complies with AS 1726, AS 2870 and AS 3798, with fieldwork and reporting fully site-specific to meet Sydney Water, local council and CDC requirements.
          </p>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <FadeIn>
            <div className="p-8 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center justify-center text-center h-full">
              <div className="relative h-16 w-full mb-6 max-w-[150px]">
                <Image src="/ea-logo.png" alt="SFGEO is a member of Engineers Australia" fill className="object-contain" />
              </div>
              <span className="block text-sm font-semibold tracking-wide uppercase">Engineers Australia</span>
            </div>
          </FadeIn>
          <FadeIn delay={0.08}>
            <div className="p-8 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center justify-center text-center h-full">
              <div className="relative h-16 w-full mb-6 max-w-[150px]">
                <Image src="/ags-logo.png" alt="SFGEO is a member of the Australian Geomechanics Society" fill className="object-contain" />
              </div>
              <span className="block text-sm font-semibold tracking-wide uppercase">Australian Geomechanics Society</span>
            </div>
          </FadeIn>
          <FadeIn delay={0.16}>
            <div className="p-8 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center justify-center text-center h-full">
              <span className="block text-slate-950 font-montserrat font-semibold text-lg mb-3">Fully Insured &amp; Compliant</span>
              <p className="text-sm font-light leading-relaxed text-gray-600">
                Comprehensive Professional Indemnity (PI) and Public Liability (PL) insurance for major site sign-offs.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Close */}
      <section className="relative overflow-hidden bg-[#050A07] text-white grain">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(45,90,58,0.3),transparent_60%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center px-6 py-28 lg:py-32 relative z-10">
          <FadeIn>
            <h2 className="text-4xl sm:text-6xl font-montserrat font-light tracking-tight mb-8">
              Work With <span className="font-semibold h-bold">The Same Team.</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 font-light leading-relaxed max-w-2xl mx-auto mb-12">
              From the first phone call to the final report — one team, one standard, and the Principal across every job.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="tel:+61423483555" className="flex items-center justify-center px-8 py-2.5 bg-gradient-to-b from-[#346b43] to-forest-green text-white rounded-full shadow-[0_8px_20px_-6px_rgba(45,90,58,0.4)] hover:shadow-[0_12px_24px_-8px_rgba(45,90,58,0.6)] hover:brightness-105 transition-all hover:-translate-y-0.5 w-full sm:w-[280px] h-[46px] text-xs font-semibold tracking-wide">
                Call 0423 483 555
              </Link>
              <QuoteCta source="about close" className="flex items-center justify-center px-8 py-2.5 bg-white/5 text-white rounded-full shadow-[inset_0_0_0_1px_rgba(255,255,255,0.25)] hover:bg-white/10 hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.45)] transition-all hover:-translate-y-0.5 w-full sm:w-[280px] h-[46px] text-xs font-semibold tracking-wide backdrop-blur-sm" />
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
