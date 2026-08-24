import Image from "next/image";
import Link from "next/link";
import GoogleReviews from "@/components/ui/GoogleReviews";
import QuickQuoteCard from "@/components/forms/QuickQuoteCard";
import ServiceAreaBlock from "@/components/sections/ServiceAreaBlock";
import ServiceIndex from "@/components/sections/ServiceIndex";
import HomeFaq from "@/components/sections/HomeFaq";
import Reveal from "@/components/ui/Reveal";
import HeroParallax from "@/components/ui/HeroParallax";

const caseStudies = [
  {
    href: "/projects#kenthurst",
    image: "/projects/project-kenthurst.jpg",
    alt: "SFGEO drill rig investigating a rural-residential estate lot in Kenthurst",
    tag: "Geotechnical Investigation",
    location: "Kenthurst",
    title: "A rural estate, read hole by hole",
    line: "Eight boreholes across a 2-hectare lot — reactive clay over shallow sandstone, mapped before a single footing was sized.",
  },
  {
    href: "/projects#bexley-north",
    image: "/projects/project-bexley-north.jpg",
    alt: "Restricted-access hand-auger investigation in a Bexley North rear yard",
    tag: "Limited-Scope Investigation",
    location: "Bexley North",
    title: "The pod that needed different foundations",
    line: "Buried demolition fill ruled out the planned screw piles. The report redesigned the founding system — in seven days.",
  },
  {
    href: "/projects#newport",
    image: "/projects/project-newport.jpg",
    alt: "Geotechnical fieldwork alongside an occupied strata building in Newport",
    tag: "Geotechnical Investigation",
    location: "Newport",
    title: "Remedial works in a live building",
    line: "Balcony reconstruction on an occupied strata building — assumptions tested, bearing upgraded, certifier requirements closed out.",
  },
];

export default function Home() {
  return (
    <div className="bg-white text-slate-950 font-inter selection:bg-forest-green selection:text-white">

      {/* ============ Cinematic hero — server-rendered, CSS choreography ============ */}
      <section className="relative px-6 lg:px-12 pt-40 pb-28 min-h-[100svh] flex flex-col justify-center overflow-hidden bg-[#050A07] grain">
        <div className="absolute inset-0 z-0">
          <HeroParallax>
          <div className="absolute inset-[-12%_0_0_0] hero-kenburns">
            <Image
              src="/sfgeo-drill-rig-mast-up-rural-sydney.jpg"
              alt="SFGEO 4WD-mounted drill rig with mast raised on a rural Sydney block"
              title="SFGEO drill rig on site — Sydney geotechnical investigation"
              fill
              sizes="100vw"
              quality={60}
              className="object-cover object-center"
              priority
            />
          </div>
          </HeroParallax>
          <div className="absolute inset-0 bg-gradient-to-r from-[#050A07]/95 via-[#050A07]/65 to-[#050A07]/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050A07] via-transparent to-[#050A07]/45" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(143,191,159,0.25)_1px,transparent_1px),linear-gradient(90deg,rgba(143,191,159,0.25)_1px,transparent_1px)] bg-[size:40px_40px] opacity-10 pointer-events-none" />
        </div>

        <div className="mx-auto max-w-7xl relative z-10 w-full">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left flex-1 max-w-3xl">
              <p className="hero-line text-sm uppercase tracking-[0.2em] text-[#8FBF9F] mb-6 font-semibold">
                Independent Geotechnical Consultancy &middot; Sydney
              </p>
              <h1 className="text-[clamp(3.2rem,7vw,6.6rem)] tracking-[-0.02em] font-montserrat font-light text-white leading-[1.04] mb-8">
                <span className="mask-line mask-d1"><span>Geotechnical.</span></span>
                <span className="mask-line mask-d2"><span className="font-semibold">Done Properly.</span></span>
              </h1>
              <div className="hero-line hero-d2 w-[96px] h-[3px] bg-forest-green mt-5 mb-5 mx-auto lg:mx-0"></div>

              {/* Mobile CTAs */}
              <div className="hero-line hero-d3 lg:hidden flex flex-col items-center gap-4 w-full mb-8">
                <Link
                  href="/contact?subject=site-inspection"
                  className="flex items-center justify-center px-5 py-2.5 bg-gradient-to-b from-[#346b43] to-forest-green text-white rounded-full shadow-[0_8px_20px_-6px_rgba(45,90,58,0.4)] hover:shadow-[0_12px_24px_-8px_rgba(45,90,58,0.6)] hover:brightness-105 transition-all hover:-translate-y-0.5 w-[70%] sm:w-[240px] h-[46px]"
                >
                  <span className="text-xs font-semibold tracking-wide">Request an Inspection</span>
                </Link>
                <Link
                  href="/contact?subject=b2b-enquiry"
                  className="flex items-center justify-center px-5 py-2.5 bg-white/5 text-white rounded-full shadow-[inset_0_0_0_1px_rgba(255,255,255,0.25)] hover:bg-white/10 hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.45)] transition-all hover:-translate-y-0.5 w-[70%] sm:w-[240px] h-[46px] backdrop-blur-sm"
                >
                  <span className="text-xs font-semibold tracking-wide">B2B Enquiries</span>
                </Link>
              </div>

              <p className="hero-line hero-d3 text-lg sm:text-xl text-gray-300 font-light leading-relaxed mb-6 max-w-xl w-full">
                Solid Foundation Geotechnical is an independent Sydney consultancy led in the field by its Principal Engineer — the engineer who walks your block, drills your ground, and signs your report. From the first conversation with your architect to the day the slab is poured.
              </p>
            </div>

            <div className="hidden lg:flex flex-col items-center shrink-0">
              <QuickQuoteCard
                source="homepage hero"
                secondaryLink={{ href: "/contact?subject=b2b-enquiry", label: "B2B and subcontract enquiries" }}
              />
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="hero-line hero-d4 absolute bottom-7 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-3 pointer-events-none">
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-semibold">Scroll</span>
          <span className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent scroll-cue" />
        </div>
      </section>

      {/* ============ Credential strip ============ */}
      <section className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-7 flex flex-wrap items-center justify-center lg:justify-between gap-x-10 gap-y-3">
          {[
            "Engineers Australia",
            "Australian Geomechanics Society",
            "PI & PL insured",
            "Family owned — Marrickville, Sydney",
          ].map((c) => (
            <span key={c} className="text-[11px] uppercase tracking-[0.22em] font-semibold text-gray-400">
              {c}
            </span>
          ))}
        </div>
      </section>

      {/* ============ Service index ============ */}
      <section className="py-32 lg:py-36 px-6 lg:px-12 max-w-7xl mx-auto">
        <Reveal className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-forest-green mb-4 font-semibold">01 &middot; What we do</p>
            <h2 className="text-4xl font-light tracking-tight sm:text-5xl font-montserrat">
              Four services. <span className="font-semibold">One engineer.</span>
            </h2>
            <div className="mt-4 h-px bg-forest-green w-12" />
          </div>
          <p className="text-sm text-gray-500 max-w-md font-light">
            One consultancy across the whole arc of a build — from the first borehole to the final inspection, scoped and delivered by the engineer who does the work.
          </p>
        </Reveal>
        <Reveal delay={80}>
          <ServiceIndex />
        </Reveal>
      </section>

      {/* ============ The engineer — dark anchor band ============ */}
      <section className="relative overflow-hidden bg-[#050A07] text-white grain">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_-10%,rgba(45,90,58,0.28),transparent_60%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-28 grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-14 lg:gap-20 items-center relative z-10">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.2em] text-[#8FBF9F] mb-6 font-semibold">02 &middot; The Principal Engineer</p>
            <h2 className="text-3xl sm:text-5xl font-montserrat font-light tracking-tight leading-[1.15] mb-8">
              The engineer who answers the phone <span className="font-semibold">is the one on the rig.</span>
            </h2>
            <div className="w-[96px] h-[3px] bg-forest-green mb-8" />
            <p className="text-lg text-gray-300 font-light leading-relaxed mb-6 max-w-xl">
              SFGEO is deliberately small. One Principal Engineer walks your site, drills your ground, logs the profile as it comes out of the hole, and signs the report — carrying fifteen years of Sydney ground, from Sydney Gateway, the M12 and Western Sydney Airport to terraces, granny flats and pools across the metro.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-white group"
            >
              <span className="draw-link">Meet the engineer</span>
              <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
            </Link>
          </Reveal>
          <Reveal delay={120}>
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0 lg:ml-auto rounded-2xl overflow-hidden shadow-[0_32px_80px_-32px_rgba(0,0,0,0.8)]">
              <div className="unveil absolute inset-0">
              <Image
                src="/sfgeo-sandstone-cuttings-hand.jpg"
                alt="Fresh sandstone cuttings held in hand at the auger — SFGEO fieldwork"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#050A07]/50 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <p className="text-[11px] uppercase tracking-[0.25em] text-white/70 font-semibold">Hawkesbury sandstone &middot; Kenthurst</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ Recent work ============ */}
      <section className="py-32 lg:py-36 px-6 lg:px-12 max-w-7xl mx-auto">
        <Reveal className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-forest-green mb-4 font-semibold">03 &middot; Recent work</p>
            <h2 className="text-4xl font-light tracking-tight sm:text-5xl font-montserrat">
              Proven on <span className="font-semibold">Sydney ground</span>
            </h2>
            <div className="mt-4 h-px bg-forest-green w-12" />
          </div>
          <div className="flex flex-col items-start md:items-end gap-3">
            <p className="text-sm text-gray-500 max-w-md font-light md:text-right">
              Real projects from our issued reports — what the client needed, what the ground turned out to be, and what the engineering did about it.
            </p>
            <Link href="/projects" className="text-sm font-semibold tracking-wide text-forest-green group inline-flex items-center gap-2">
              <span className="draw-link">All projects</span>
              <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
            </Link>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((cs, i) => (
            <Reveal key={cs.href} delay={i * 90}>
              <Link
                href={cs.href}
                className="group flex flex-col h-full rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={cs.image}
                    alt={cs.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050A07]/70 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 p-5">
                    <p className="text-[10px] uppercase tracking-[0.25em] text-white/70 font-semibold mb-1">{cs.tag}</p>
                    <p className="text-white font-montserrat text-lg font-light">{cs.location}</p>
                  </div>
                </div>
                <div className="flex flex-col flex-grow p-7">
                  <h3 className="text-lg font-montserrat font-semibold tracking-tight mb-3 group-hover:text-forest-green transition-colors">{cs.title}</h3>
                  <p className="text-sm text-gray-600 font-light leading-relaxed flex-grow">{cs.line}</p>
                  <span className="mt-5 text-sm font-medium tracking-wide text-slate-950 group-hover:text-forest-green transition-colors">
                    Read the project &rarr;
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ Photographic interlude — statement over fieldwork ============ */}
      <section className="relative h-[72vh] min-h-[500px] overflow-hidden grain">
        <Image
          src="/sfgeo-dcp-kenthurst-paddock.jpg"
          alt="A dynamic cone penetrometer standing in a Kenthurst paddock — SFGEO fieldwork"
          fill
          sizes="100vw"
          quality={70}
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#050A07]/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050A07]/55 via-transparent to-[#050A07]/35" />
        <div className="absolute inset-0 flex items-center justify-center px-6 lg:px-12">
          <Reveal>
            <p className="text-[clamp(1.9rem,4.2vw,3.6rem)] font-montserrat font-light tracking-[-0.015em] leading-[1.2] text-white text-center max-w-4xl text-balance">
              We read the ground <span className="font-semibold">before you build on it</span> — so the surprises happen in the report, not the excavation.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============ Reviews — gallery-neutral band ============ */}
      <section className="py-24 bg-[#f4f6f4] border-y border-gray-200/70">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <GoogleReviews />
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="py-28 px-6 lg:px-12 max-w-4xl mx-auto">
        <Reveal className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-forest-green mb-4 font-semibold">04 &middot; Before you call</p>
          <h2 className="text-3xl font-light tracking-tight font-montserrat text-slate-950">
            Common <span className="font-semibold">questions</span>
          </h2>
          <div className="mt-6 h-px bg-forest-green w-12 mx-auto" />
        </Reveal>
        <HomeFaq />
      </section>

      <ServiceAreaBlock pageType="home" />
    </div>
  );
}
