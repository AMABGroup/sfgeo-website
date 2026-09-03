import Image, { getImageProps } from "next/image";
import Link from "next/link";
import GoogleReviews from "@/components/ui/GoogleReviews";
import QuoteCta from "@/components/forms/QuoteCta";
import QuickQuoteCard from "@/components/forms/QuickQuoteCard";
import ServiceIndex from "@/components/sections/ServiceIndex";
import HomeFaq from "@/components/sections/HomeFaq";
import HomeReviews from "@/components/sections/HomeReviews";
import Reveal from "@/components/ui/Reveal";
import HeroParallax from "@/components/ui/HeroParallax";
import OpeningVeil from "@/components/ui/OpeningVeil";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Geotechnical Engineer Sydney | Solid Foundation Geotechnical",
  "Sydney's boutique geotechnical consultancy. Principal-led site classifications, investigations, and 4WD drilling with fixed-fee quotes and local expertise.",
  "/"
);

const caseStudies = [
  {
    href: "/projects#kenthurst",
    image: "/projects/project-kenthurst.jpg",
    alt: "SFGEO drill rig investigating a rural-residential estate lot in Kenthurst",
    tag: "Geotechnical Investigation",
    location: "Kenthurst",
    title: "A Rural Estate, Read Hole By Hole",
    line: "Eight boreholes across a 2-hectare lot — reactive clay over shallow sandstone, mapped before a single footing was sized.",
  },
  {
    href: "/projects#coogee",
    image: "/projects/project-coogee.jpg",
    alt: "Drilling from the road verge above a steep Coogee allotment",
    tag: "Geotechnical Investigation",
    location: "Coogee",
    title: "A Pile Wall Designed From The Street",
    line: "Five metres of fall, one borehole from the council verge — the full retaining parameter set, issued in 48 hours.",
  },
  {
    href: "/projects#hunters-hill",
    image: "/projects/project-hunters-hill.jpg",
    alt: "Boardwalk through the tidal mangroves at Buffalo Creek Reserve",
    tag: "Investigation For A Consultancy",
    location: "Hunters Hill",
    title: "A Boardwalk Read Between Tides",
    line: "All-manual fieldwork through a tidal wetland — a founding map another consultancy designed from directly.",
  },
];

export default function Home() {
  // One art-directed hero. A <picture> lets the browser fetch a single
  // source per viewport, where two <Image priority> tags preloaded both
  // crops on every device.
  const heroImage = {
    alt: "The SFGEO team drilling on the Georges River, Sydney",
    title: "SFGEO team drilling — Georges River, Sydney",
    fill: true,
    sizes: "100vw",
    className: "object-cover object-center",
  };
  const { props: { srcSet: heroDesktopSrcSet } } = getImageProps({ ...heroImage, src: "/sfgeo-crew-waterside-drilling.jpg" });
  const { props: heroMobile } = getImageProps({ ...heroImage, src: "/sfgeo-crew-waterside-drilling-portrait.jpg" });

  return (
    <div className="bg-white text-slate-950 font-inter selection:bg-forest-green selection:text-white">
      <OpeningVeil />

      {/* ============ Cinematic hero — server-rendered, CSS choreography ============ */}
      <section className="relative px-6 lg:px-12 pt-40 pb-28 min-h-[100svh] flex flex-col justify-center overflow-hidden bg-[#050A07] grain">
        <div className="absolute inset-0 z-0">
          <HeroParallax>
          <div className="absolute inset-[-12%_0_0_0] hero-kenburns">
            {/* Art-directed: a landscape frame crops to roughly a third of its
                width in a portrait viewport, so phones get their own crop
                rather than a 3x upscale of the wide one. */}
            <picture>
              <source media="(min-width: 1024px)" srcSet={heroDesktopSrcSet} sizes="100vw" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img {...heroMobile} fetchPriority="high" loading="eager" />
            </picture>
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
              <h1 className="text-[clamp(2.75rem,7vw,6.6rem)] lg:text-[clamp(2.8rem,5.5vw,6.6rem)] xl:text-[clamp(3.2rem,7vw,6.6rem)] tracking-[-0.02em] font-montserrat font-light text-white leading-[1.04] mb-8">
                <span className="mask-line mask-d1"><span>Geotechnical.</span></span>{" "}
                <span className="mask-line mask-d2"><span className="font-semibold h-bold">Done Properly.</span></span>
              </h1>
              <div className="hero-line hero-d2 w-[96px] h-[3px] bg-forest-green mt-5 mb-5 mx-auto lg:mx-0"></div>

              <p className="hero-line hero-d3 text-lg sm:text-xl text-gray-300 font-light leading-relaxed mb-8 max-w-xl w-full">
                Family owned. Sydney grown. A principal-led team with you from the first conversation to the final certificate.
              </p>

              {/* Mobile CTAs — the form itself lives in the desktop column */}
              <div className="hero-line hero-d3 lg:hidden flex flex-col sm:flex-row items-center gap-4 w-full">
                <QuoteCta
                  source="homepage hero mobile"
                  className="flex items-center justify-center px-5 py-2.5 bg-gradient-to-b from-[#346b43] to-forest-green text-white rounded-full shadow-[0_8px_20px_-6px_rgba(45,90,58,0.4)] hover:shadow-[0_12px_24px_-8px_rgba(45,90,58,0.6)] hover:brightness-105 transition-all hover:-translate-y-0.5 w-[70%] sm:w-[240px] h-[46px] text-xs font-semibold tracking-wide"
                />
                <Link
                  href="/contact?subject=b2b-enquiry"
                  className="flex items-center justify-center px-5 py-2.5 bg-[#050A07]/45 text-white rounded-full shadow-[inset_0_0_0_1px_rgba(255,255,255,0.25)] hover:bg-white/10 hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.45)] transition-all hover:-translate-y-0.5 w-[70%] sm:w-[240px] h-[46px] backdrop-blur-sm"
                >
                  <span className="text-xs font-semibold tracking-wide">B2B Enquiries</span>
                </Link>
              </div>
            </div>

            {/* The permanent home of the quote form */}
            <div className="hidden lg:flex flex-col items-center shrink-0">
              <QuickQuoteCard
                source="homepage hero"
                headingId="hero-quote-heading"
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
            "EA + AGS",
            "Family Owned",
            "Inner West Based",
            "PI & PL Insured",
            "NATA-Accredited Testing",
          ].map((c) => (
            <span key={c} className="text-[11px] uppercase tracking-[0.22em] font-semibold text-gray-500">
              {c}
            </span>
          ))}
        </div>
      </section>

      {/* ============ Service index ============ */}
      <section className="py-36 lg:py-44 px-6 lg:px-12 max-w-7xl mx-auto">
        <Reveal className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-forest-green mb-4 font-semibold">01 &middot; What We Do</p>
            <h2 className="text-4xl font-light tracking-tight sm:text-5xl font-montserrat">
              Full Suite. <span className="font-semibold h-bold">One Team.</span>
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
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-32 lg:py-40 grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-14 lg:gap-20 items-center relative z-10">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.2em] text-[#8FBF9F] mb-6 font-semibold">02 &middot; Family Owned</p>
            <h2 className="text-3xl sm:text-5xl font-montserrat font-light tracking-tight leading-[1.15] mb-8">
              Family Owned. <span className="font-semibold h-bold">Sydney Grown.</span>
            </h2>
            <div className="w-[96px] h-[3px] bg-forest-green mb-8" />
            <p className="text-lg text-gray-300 font-light leading-relaxed mb-6 max-w-xl">
              A principal-led team backed by a trusted partner network, carrying fifteen years of Sydney ground — from Sydney Gateway, the M12 and Western Sydney Airport to granny flats, extensions and knockdown rebuilds across the metro. Hired from the Inner West and working for it: the street lighting and signals a suburb walks home under, as much as its terraces and pools.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-white group"
            >
              <span className="draw-link">Meet The Team</span>
              <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
            </Link>
          </Reveal>
          <Reveal delay={120}>
            <div className="relative aspect-[4/3.4] max-w-lg mx-auto lg:mx-0 lg:ml-auto rounded-2xl overflow-hidden shadow-[0_32px_80px_-32px_rgba(0,0,0,0.8)]">
              <div className="unveil absolute inset-0">
              <Image
                src="/sfgeo-crew-drill-rig-western-sydney.jpg"
                alt="Two SFGEO crew at the drill rig under a stormy Western Sydney sky"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#050A07]/80 via-[#050A07]/25 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <p className="text-[11px] uppercase tracking-[0.25em] text-white font-semibold">The Crew &middot; Western Sydney</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ Recent work ============ */}
      <section className="py-36 lg:py-44 px-6 lg:px-12 max-w-7xl mx-auto">
        <Reveal className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-forest-green mb-4 font-semibold">03 &middot; Recent Work</p>
            <h2 className="text-4xl font-light tracking-tight sm:text-5xl font-montserrat">
              Proven On <span className="font-semibold h-bold">Sydney Ground</span>
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
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050A07]/80 via-[#050A07]/25 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-5">
                    <p className="text-[11px] uppercase tracking-[0.25em] text-white font-semibold mb-1">{cs.tag}</p>
                    <p className="text-white font-montserrat text-lg font-light">{cs.location}</p>
                  </div>
                </div>
                <div className="flex flex-col flex-grow p-7">
                  <h3 className="text-lg font-montserrat font-semibold tracking-tight mb-3 min-h-[3.5rem] group-hover:text-forest-green transition-colors">{cs.title}</h3>
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

      {/* ============ FAQ ============ */}
      <section className="pt-0 pb-36 lg:pb-44 px-6 lg:px-12 max-w-4xl mx-auto">
        <Reveal className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-forest-green mb-4 font-semibold">04 &middot; Before You Call</p>
          <h2 className="text-3xl font-light tracking-tight font-montserrat text-slate-950">
            Common <span className="font-semibold h-bold">Questions</span>
          </h2>
          <div className="mt-6 h-px bg-forest-green w-12 mx-auto" />
        </Reveal>
        <HomeFaq />
      </section>

      {/* ============ Reviews — gallery-neutral band ============ */}
      <section className="py-32 lg:py-36 bg-white border-y border-gray-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <HomeReviews />
        </div>
      </section>

      {/* ============ Close — start with the ground + the office ============ */}
      <section className="relative overflow-hidden bg-[#050A07] text-white grain">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_-20%,rgba(45,90,58,0.4),transparent_65%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-32 lg:py-40 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center relative z-10">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.2em] text-[#8FBF9F] mb-6 font-semibold">05 &middot; Marrickville, Sydney</p>
            <h2 className="text-3xl sm:text-5xl font-montserrat font-light tracking-tight leading-[1.1] mb-6">
              Start With <span className="font-semibold h-bold">The Ground.</span>
            </h2>
            <p className="text-gray-400 font-light leading-relaxed mb-10 max-w-md">
              Fixed-fee quotes, scoped to your block. Response within one business day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="tel:+61423483555"
                className="flex items-center justify-center px-8 py-2.5 bg-gradient-to-b from-[#346b43] to-forest-green text-white rounded-full shadow-[0_8px_20px_-6px_rgba(45,90,58,0.4)] hover:shadow-[0_12px_24px_-8px_rgba(45,90,58,0.6)] hover:brightness-105 transition-all hover:-translate-y-0.5 h-[46px] text-xs font-semibold tracking-wide"
              >
                Call 0423 483 555
              </Link>
              <QuoteCta
                source="homepage close"
                label="Request A Quote"
                className="flex items-center justify-center px-8 py-2.5 bg-white/5 text-white rounded-full shadow-[inset_0_0_0_1px_rgba(255,255,255,0.25)] hover:bg-white/10 hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.45)] transition-all hover:-translate-y-0.5 h-[46px] text-xs font-semibold tracking-wide backdrop-blur-sm"
              />
            </div>
            <p className="text-[12px] text-white/60 font-light tracking-wide mt-9">
              Suite 3.01, Level 3, 107 Sydenham Road, Marrickville NSW 2204 &middot; Mon&ndash;Fri 6am&ndash;6pm &middot; Sat 8am&ndash;2pm
            </p>
            <div className="mt-8 pt-7 border-t border-white/10">
              <p className="text-[11px] uppercase tracking-[0.25em] text-white/50 font-semibold mb-4">Follow The Fieldwork</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://au.linkedin.com/company/sfgeo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-5 h-[42px] bg-white rounded-full shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 sm:w-[220px] group/link"
                >
                  <svg className="w-4 h-4 shrink-0 text-[#0A66C2] transition-transform group-hover/link:scale-110" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.475-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span className="text-xs font-semibold text-slate-950 tracking-wide">Connect On LinkedIn</span>
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
                <a
                  href="https://instagram.com/sfgeo.syd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-5 h-[42px] bg-white rounded-full shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 sm:w-[220px] group/link"
                >
                  <svg className="w-4 h-4 shrink-0 text-[#E1306C] transition-transform group-hover/link:scale-110" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs font-semibold text-slate-950 tracking-wide">Follow On Instagram</span>
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="relative aspect-[16/11] rounded-2xl overflow-hidden shadow-[0_40px_90px_-34px_rgba(0,0,0,0.85)]">
              <iframe
                src="https://www.google.com/maps?q=SFGEO%20Suite%203.01%20Level%203%20107%20Sydenham%20Road%20Marrickville%20NSW%202204&output=embed"
                title="SFGEO office — Marrickville"
                className="absolute inset-0 w-full h-full"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
