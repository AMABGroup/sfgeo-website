import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import Reveal from "@/components/ui/Reveal";
import PhotoFrame from "@/components/ui/PhotoFrame";
import CloseBand from "@/components/ui/CloseBand";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta(
  "Geotechnical Engineers Marrickville & Inner West | SFGEO",
  "Family owned, principal-led geotechnical engineers based in Marrickville — the Inner West team behind every classification, investigation and drilling job.",
  "/about",
);

const d = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

const VALUES = [
  { t: "Direct Access. Always.", d: "Call, email, turn up. You reach the team doing the work directly — no admin queues, no message chains." },
  { t: "Sydney Is Our Backyard.", d: "Locally owned, locally based. We know Sydney's ground, its councils and its sites — the Principal has worked them for 15 years, from Sydney Gateway to backyard footings." },
  { t: "On Site. On Time. On Call.", d: "A fixed fee within one business day, classification reports as soon as 2–3 business days from fieldwork, and the Principal's mobile answered — not a switchboard." },
];

const PEDIGREE = [
  { image: "/commercial-geotechnical-eastern-creek-light-horse.jpeg", alt: "Aerial view of geotechnical site support at the Light Horse Interchange, Eastern Creek", t: "Light Horse Interchange", loc: "Eastern Creek" },
  { image: "/infrastructure-drilling-sydney-gateway-airport.jpeg", alt: "Infrastructure drilling on the Sydney Gateway project beside Sydney Airport", t: "Sydney Gateway", loc: "Sydney Airport" },
  { image: "/civil-geotechnical-data-m7-m12-link-sydney.jpeg", alt: "Civil infrastructure fieldwork on the M7-M12 Link in south-west Sydney", t: "M7–M12 Link", loc: "South West Sydney" },
  { image: "/tier-1-infrastructure-drilling-sydney-metro-hurlstone.jpg", alt: "Drilling for Sydney Metro rail infrastructure at Hurlstone Park", t: "Sydney Metro", loc: "Hurlstone Park" },
];

const COMMUNITY = [
  {
    place: "Telopea",
    title: "Safety Lighting, Footpaths Open",
    line: "Five boreholes down a residential verge so new street lighting had ground it could stand on — footpaths open the whole time.",
    href: "/projects#telopea",
  },
  {
    place: "Lakemba",
    title: "Safety Lighting, Night Shift",
    line: "A night shift under full traffic control on Haldon Street, drilled through the carriageway and reopened before the shops were.",
    href: "/projects#lakemba",
  },
  {
    place: "Blakehurst",
    title: "Traffic Signals",
    line: "A signal mast footing checked at depth under night closure — and failed, because a pole over six lanes should stand on verified ground.",
    href: "/projects#blakehurst",
  },
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
      <section className="pt-36 pb-20 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <p className="hero-line text-sm uppercase tracking-[0.2em] text-forest-green mb-6 font-semibold">
            About SFGEO &middot; Family Owned &middot; Inner West Based
          </p>
          <h1 className="text-[min(2.25rem,8.2vw)] sm:text-6xl font-montserrat font-light tracking-tight leading-[1.08] mb-8">
            <span className="hero-mask"><span className="mask-line mask-d1"><span>Boutique Geotechnical</span></span></span>
            <span className="hero-mask"><span className="mask-line mask-d2"><span className="font-semibold h-bold">Engineers. Sydney.</span></span></span>
          </h1>
          <div className="hero-line hero-d2 w-[96px] h-[3px] bg-forest-green mb-8" />
          <p className="hero-line hero-d2 text-lg sm:text-xl text-gray-600 font-light leading-relaxed">
            A principal-led team, hired locally, backed by a trusted partner network — carrying fifteen years of Sydney ground from landmark infrastructure to backyard footings. When you work with SFGEO, you work with the same team, start to finish.
          </p>
        </div>
      </section>

      {/* Full-width banner */}
      <section className="px-6 lg:px-12 max-w-7xl mx-auto pb-20">
        <PhotoFrame
          src="/sfgeo-night-works-high-street-sydney.jpg"
          alt="A Sydney high street closed under traffic control for overnight geotechnical works, shopfronts shut and the lane coned off"
          caption={<>Night Works &middot; Sydney</>}
          aspect="aspect-[16/9] lg:aspect-[21/9]"
          sizes="(max-width: 1024px) 100vw, 1216px"
          priority
        />
      </section>

      {/* Story + the crew */}
      <section id="team" className="py-20 lg:py-24 px-6 lg:px-12 max-w-7xl mx-auto border-t border-gray-100 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <Reveal variant="group" className="lg:col-span-7">
          <p data-fx="rise" className="text-sm uppercase tracking-[0.2em] text-forest-green mb-4 font-semibold">Our Foundation</p>
          <h2 data-fx="rise" style={d(80)} className="text-3xl sm:text-4xl font-montserrat font-light tracking-tight text-slate-950 mb-5">
            Built On <span className="font-semibold h-bold">Direct Access.</span>
          </h2>
          <div data-fx="line" style={d(200)} className="h-px bg-forest-green w-12 mb-7" />
          <p data-fx="rise" style={d(160)} className="text-lg text-gray-600 font-light leading-loose mb-6">
            SFGEO is a locally-owned, independent geotechnical consultancy based in Marrickville, built on 15 years of hands-on Sydney experience across residential <Link href="/site-classification" className="text-forest-green hover:underline">site classifications</Link>, bespoke architectural homes, and landmark infrastructure.
          </p>
          <p data-fx="rise" style={d(220)} className="text-lg text-gray-600 font-light leading-loose mb-6">
            We were founded on a simple belief: clients deserve direct access to the professional doing the work, not a corporate chain. SFGEO is family owned and Sydney grown — the engineer who quotes your job is the one who drills it and signs the report.
          </p>
          <p data-fx="rise" style={d(280)} className="text-lg text-gray-600 font-light leading-loose">
            Our Principal Engineer has contributed to Sydney Gateway, the M12 Motorway, Western Sydney Airport, and the Canterbury Aquatic Centre. That depth of experience now serves your project with the responsiveness, transparency, and personal care that only an independent practice can offer.
          </p>
        </Reveal>
        <PhotoFrame
          src="/sfgeo-crew-drill-rig-western-sydney.jpg"
          alt="The two-person SFGEO crew beside the 4WD drill rig under a stormy Western Sydney sky"
          caption={<>The Crew &middot; Western Sydney</>}
          aspect="aspect-[4/3]"
          sizes="(max-width: 1024px) 100vw, 42vw"
          wrapperClassName="lg:col-span-5"
          delay={120}
        />
      </section>

      {/* Community — the why */}
      <section className="relative overflow-hidden bg-[#050A07] text-white grain aurora">
        <Image
          src="/sfgeo-street-handed-back-dawn.jpg"
          alt=""
          fill
          sizes="100vw"
          className="absolute object-cover opacity-[0.28] hidden lg:block"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050A07] via-[#050A07]/60 to-[#050A07]" />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
          <Reveal variant="group">
            <p data-fx="rise" className="text-sm uppercase tracking-[0.2em] text-[#8FBF9F] mb-6 font-semibold">Our Community</p>
            <h2 data-fx="rise" style={d(80)} className="text-[min(1.875rem,7.5vw)] sm:text-5xl font-montserrat font-light tracking-tight leading-[1.12] mb-8 max-w-3xl">
              For The Community, <span className="font-semibold h-bold">From The Community.</span>
            </h2>
            <div data-fx="line" style={d(200)} className="w-[96px] h-[3px] bg-[#8FBF9F] mb-8" />
            <div className="max-w-2xl space-y-5">
              <p data-fx="rise" style={d(180)} className="text-lg text-gray-300 font-light leading-relaxed">
                The people who do this work grew up in Sydney&rsquo;s inner west and west, and it is the same suburbs the work goes back into. We hire locally and we train young engineers and drillers from our own neighbourhoods, because the opportunities we were given should keep going to people from here.
              </p>
              <p data-fx="rise" style={d(260)} className="text-lg text-gray-300 font-light leading-relaxed">
                It matters most on the jobs nobody puts a name to. Street lighting, traffic signals &mdash; public safety infrastructure that a suburb only notices when it isn&rsquo;t there. On those, the engineer reading the ground is someone who lives here too.
              </p>
            </div>
          </Reveal>

          <Reveal variant="group" className="mt-16">
            <div data-stagger className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
              {COMMUNITY.map((c) => (
                <Link key={c.href} href={c.href} className="group block border-t border-white/15 pt-6 hover:border-[#8FBF9F]/50 transition-colors">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-[#8FBF9F]/80 font-semibold mb-3">{c.place}</p>
                  <h3 className="text-xl font-montserrat font-light tracking-tight mb-3 group-hover:text-[#8FBF9F] transition-colors">{c.title}</h3>
                  <p className="text-sm text-white/60 font-light leading-relaxed">{c.line}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-[12px] font-semibold tracking-wide text-white/70 group-hover:text-white transition-colors">
                    See the project <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                  </span>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* How we work */}
      <section className="py-24 lg:py-28 px-6 lg:px-12 max-w-7xl mx-auto">
        <Reveal variant="group" className="mb-14">
          <p data-fx="rise" className="text-sm uppercase tracking-[0.2em] text-forest-green mb-4 font-semibold">How We Work</p>
          <h2 data-fx="rise" style={d(80)} className="text-3xl sm:text-4xl font-montserrat font-light tracking-tight">
            Small Team. <span className="font-semibold h-bold">Serious Standards.</span>
          </h2>
          <div data-fx="line" style={d(200)} className="mt-5 h-px bg-forest-green w-12" />
        </Reveal>
        <Reveal variant="group">
          <div data-stagger className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {VALUES.map((v) => (
              <div key={v.t} className="card-lift p-8 bg-white border border-gray-100 rounded-2xl shadow-sm h-full">
                <h3 className="text-lg font-montserrat font-semibold text-slate-950 mb-3">{v.t}</h3>
                <p className="text-gray-600 font-light leading-relaxed text-[15px]">{v.d}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Infrastructure pedigree */}
      <section id="projects" className="py-24 lg:py-28 px-6 lg:px-12 max-w-7xl mx-auto border-t border-gray-100">
        <Reveal variant="group" className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <p data-fx="rise" className="text-sm uppercase tracking-[0.2em] text-forest-green mb-4 font-semibold">Previous Project Experience</p>
            <h2 data-fx="rise" style={d(80)} className="text-3xl sm:text-4xl font-montserrat font-light tracking-tight">
              Where We <span className="font-semibold h-bold">Cut Our Teeth.</span>
            </h2>
            <div data-fx="line" style={d(200)} className="mt-5 h-px bg-forest-green w-12" />
          </div>
          <p data-fx="rise" style={d(160)} className="text-sm text-gray-500 max-w-md font-light leading-relaxed">
            Before SFGEO carried its own name, its Principal carried these — landmark Sydney infrastructure, now serving every backyard we classify. For current work, see <Link href="/projects" className="text-forest-green hover:underline">our projects</Link>.
          </p>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PEDIGREE.map((p, i) => (
            <PhotoFrame
              key={p.t}
              src={p.image}
              alt={p.alt}
              aspect="aspect-[4/3]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              delay={i * 90}
              className="shadow-[0_20px_50px_-20px_rgba(5,10,7,0.35)]"
            >
              <div data-fx="rise" style={d(i * 90 + 420)} className="absolute bottom-4 left-5 right-5">
                <p className="text-[13px] font-semibold text-white leading-tight">{p.t}</p>
                <p className="text-[11px] uppercase tracking-[0.2em] text-white font-semibold mt-1">{p.loc}</p>
              </div>
            </PhotoFrame>
          ))}
        </div>
      </section>

      {/* Accreditations */}
      <section id="accreditations" className="py-24 lg:py-28 px-6 lg:px-12 max-w-7xl mx-auto border-t border-gray-100">
        <Reveal variant="group" className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <p data-fx="rise" className="text-sm uppercase tracking-[0.2em] text-forest-green mb-4 font-semibold">Accreditation &amp; Assurance</p>
            <h2 data-fx="rise" style={d(80)} className="text-3xl sm:text-4xl font-montserrat font-light tracking-tight">
              Credentials <span className="font-semibold h-bold">That Hold.</span>
            </h2>
            <div data-fx="line" style={d(200)} className="mt-5 h-px bg-forest-green w-12" />
          </div>
          <p data-fx="rise" style={d(160)} className="text-sm text-gray-500 max-w-md font-light leading-relaxed">
            Fieldwork and reporting follow AS 1726, AS 2870 and AS 3798, written to what your certifier, council or Sydney Water actually asks for.
          </p>
        </Reveal>
        <Reveal variant="group">
          <div data-stagger className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="card-lift p-8 bg-white border border-gray-100 rounded-2xl shadow-sm flex flex-col items-center justify-center text-center h-full">
              <div className="relative h-16 w-full mb-6 max-w-[150px]">
                <Image src="/ea-logo.png" alt="SFGEO is a member of Engineers Australia" fill className="object-contain" />
              </div>
              <span className="block text-sm font-semibold tracking-wide uppercase">Engineers Australia</span>
            </div>
            <div className="card-lift p-8 bg-white border border-gray-100 rounded-2xl shadow-sm flex flex-col items-center justify-center text-center h-full">
              <div className="relative h-16 w-full mb-6 max-w-[150px]">
                <Image src="/ags-logo.png" alt="SFGEO is a member of the Australian Geomechanics Society" fill className="object-contain" />
              </div>
              <span className="block text-sm font-semibold tracking-wide uppercase">Australian Geomechanics Society</span>
            </div>
            <div className="card-lift p-8 bg-white border border-gray-100 rounded-2xl shadow-sm flex flex-col items-center justify-center text-center h-full">
              <span className="block text-slate-950 font-montserrat font-semibold text-lg mb-3">Fully Insured &amp; Compliant</span>
              <p className="text-sm font-light leading-relaxed text-gray-600">
                Professional Indemnity (PI) and Public Liability (PL) insurance covering geotechnical engineering and drilling — certificates of currency on request.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <CloseBand
        source="about close"
        kicker="Marrickville, Sydney"
        heading={<>Work With <span className="font-semibold h-bold">The Same Team.</span></>}
        sub="From the first phone call to the final report — one team, one standard, and the Principal across every job."
      />
    </div>
  );
}
