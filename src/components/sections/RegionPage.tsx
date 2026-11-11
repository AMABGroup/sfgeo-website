import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import QuoteCta from "@/components/forms/QuoteCta";
import Reveal from "@/components/ui/Reveal";
import PhotoFrame from "@/components/ui/PhotoFrame";
import CloseBand from "@/components/ui/CloseBand";
import RatingFact from "@/components/ui/RatingFact";
import QuietFaq from "@/components/sections/QuietFaq";
import OtherAreas from "@/components/ui/OtherAreas";
import type { PhraseLink } from "@/components/ui/linkPhrase";

/**
 * The region landing page, in the pattern of /geotechnical-engineer-north-shore:
 * hero with a facts line, a feature photograph, three job cards, the services
 * grid, three quiet questions and the close band. Each page supplies its own
 * jobs, photographs and questions; nothing here is region copy.
 */

const d = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

export type RegionPhoto = { src: string; alt: string; caption: string };

export type RegionJob = {
  service: string;
  title: string;
  meta: string;
  paras: { label?: string; text: string }[];
  facts?: string;
  /** The job's own site photograph: ground and work only, no house, street, plates or faces; metadata stripped. */
  photo?: RegionPhoto;
};

export type RegionService = { title: string; desc: string; href?: string };

export type RegionFaq = { q: string; a: string; link?: PhraseLink | PhraseLink[] };

export type RegionPageData = {
  /** URL path without the leading slash, e.g. "geotechnical-engineer-eastern-suburbs". */
  slug: string;
  /** Region name as written in headings and the breadcrumb, e.g. "Eastern Suburbs". */
  name: string;
  /** Analytics source stem, e.g. "eastern-suburbs". */
  source: string;
  kicker: string;
  intro: ReactNode;
  /** Wide band under the hero; left out where no photograph meets the standard. */
  feature?: RegionPhoto & { position?: string };
  jobs: RegionJob[];
  services: RegionService[];
  /** One fine-print sentence above the questions. */
  faqIntro?: string;
  faqs: RegionFaq[];
  closeSub: ReactNode;
  schemaDescription: string;
  areaServed: string;
};

export const REGION_FACTS = "Site classifications from $800 + GST · Footing inspections from $450 + GST · Fixed fee in writing within one business day";

export function regionSchemas(r: RegionPageData) {
  const url = `https://sfgeo.com.au/${r.slug}`;
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "item": { "@id": "https://sfgeo.com.au/", "name": "Home" } },
      { "@type": "ListItem", "position": 2, "item": { "@id": "https://sfgeo.com.au/geotechnical", "name": "Geotechnical" } },
      { "@type": "ListItem", "position": 3, "item": { "@id": url, "name": r.name } },
    ],
  };
  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `Geotechnical Engineering, ${r.name}`,
    "serviceType": "Geotechnical Investigation",
    "description": r.schemaDescription,
    "url": url,
    "provider": { "@id": "https://sfgeo.com.au/#organization" },
    "areaServed": { "@type": "Place", "name": r.areaServed },
    "offers": [
      {
        "@type": "Offer",
        "name": "Site classification",
        "description": "Site classifications from $800 + GST.",
        "priceSpecification": { "@type": "PriceSpecification", "minPrice": "800", "priceCurrency": "AUD", "valueAddedTaxIncluded": false, "description": "from $800 + GST" },
      },
      {
        "@type": "Offer",
        "name": "Footing inspection",
        "description": "Footing inspections from $450 + GST.",
        "priceSpecification": { "@type": "PriceSpecification", "minPrice": "450", "priceCurrency": "AUD", "valueAddedTaxIncluded": false, "description": "from $450 + GST per inspection" },
      },
    ],
  };
  // Mirrors the visible questions word for word: the two must stay in step.
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": r.faqs.map((f) => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a },
    })),
  };
  return [breadcrumb, service, faq];
}

export default function RegionPage({ region: r }: { region: RegionPageData }) {
  // The quote pop-up's copy for these pages: its own promise, never another service's turnaround.
  const quote = {
    eyebrow: r.name,
    subheading: "Send the address. Free site visit. A fixed fee in writing within one business day.",
  };
  const photoJobs = r.jobs.filter((job) => job.photo);
  const plainJobs = r.jobs.filter((job) => !job.photo);

  return (
    <div className="bg-white text-slate-950 font-inter selection:bg-forest-green selection:text-white">
      {regionSchemas(r).map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}

      {/* Hero */}
      <section className="pt-36 pb-20 px-6 lg:px-12 max-w-7xl mx-auto">
        {/* On phones the buttons sit above the paragraph, so they show without scrolling. */}
        <div className="max-w-[52rem] flex flex-col sm:block">
          <p className="hero-line -order-1 sm:order-none text-sm uppercase tracking-[0.2em] text-forest-green mb-6 font-semibold">
            {r.kicker}
          </p>
          <h1 className="-order-1 sm:order-none text-[min(2.25rem,8.2vw)] sm:text-6xl font-montserrat font-light tracking-tight leading-[1.08] mb-8">
            <span className="hero-mask"><span className="mask-line mask-d1"><span>Geotechnical Engineering.</span></span></span>{" "}
            <span className="hero-mask"><span className="mask-line mask-d2"><span className="font-semibold h-bold">{r.name}.</span></span></span>
          </h1>
          <div className="hero-line hero-d2 -order-1 sm:order-none w-[96px] h-[3px] bg-forest-green mb-8" />
          <p className="hero-line hero-d2 text-lg sm:text-xl text-gray-600 font-light leading-relaxed sm:mb-10">{r.intro}</p>
          <div className="hero-line hero-d3 -order-1 sm:order-none mb-8 sm:mb-0 flex flex-col sm:flex-row items-start gap-4">
            <Link
              href="tel:+61423483555"
              data-cta={`${r.slug} hero call`}
              className="flex items-center justify-center px-8 py-2.5 bg-gradient-to-b from-[#346b43] to-forest-green text-white rounded-full shadow-[0_8px_20px_-6px_rgba(45,90,58,0.4)] hover:shadow-[0_12px_24px_-8px_rgba(45,90,58,0.6)] hover:brightness-105 transition hover:-translate-y-0.5 w-full sm:w-auto h-[46px] text-xs font-semibold tracking-wide"
            >
              Call The Principal Engineer
            </Link>
            <QuoteCta
              {...quote}
              source={`${r.source} hero`}
              label="Request A Quote"
              className="flex items-center justify-center px-8 py-2.5 bg-white text-forest-green rounded-full shadow-[inset_0_0_0_1px_rgba(45,90,58,0.25),0_4px_10px_-4px_rgba(0,0,0,0.05)] hover:bg-forest-green/5 hover:shadow-[inset_0_0_0_1px_rgba(45,90,58,0.4),0_6px_14px_-4px_rgba(0,0,0,0.1)] transition hover:-translate-y-0.5 w-full sm:w-auto h-[46px] text-xs font-semibold tracking-wide"
            />
          </div>
          <p className="hero-line hero-d3 mt-5 text-xs text-gray-500 font-light tracking-wide">{REGION_FACTS}<RatingFact /></p>
        </div>
      </section>

      {/* Feature band */}
      {r.feature && (
        <section className="pb-20 lg:pb-24 px-6 lg:px-12 max-w-7xl mx-auto">
          <PhotoFrame
            src={r.feature.src}
            alt={r.feature.alt}
            caption={r.feature.caption}
            aspect="aspect-[16/10] sm:aspect-[5/2]"
            sizes="(max-width: 1024px) 100vw, 1216px"
            position={r.feature.position ?? "object-center"}
            className="shadow-[0_20px_50px_-20px_rgba(5,10,7,0.35)]"
          />
        </section>
      )}

      {/* 01 — Recent jobs */}
      <section id="recent-jobs" className="py-20 lg:py-24 px-6 lg:px-12 max-w-7xl mx-auto border-t border-gray-100">
        <Reveal variant="group" className="mb-14">
          <p data-fx="rise" className="text-sm uppercase tracking-[0.2em] text-forest-green mb-4 font-semibold">01 &middot; Recent Jobs</p>
          <h2 data-fx="rise" style={d(80)} className="text-3xl sm:text-4xl font-montserrat font-light tracking-tight">
            What We Found, <span className="font-semibold h-bold">Job By Job.</span>
          </h2>
          <div data-fx="line" style={d(200)} className="mt-5 h-px bg-forest-green w-12" />
        </Reveal>
        <div className="space-y-16 lg:space-y-24">
          {photoJobs.map((job, i) => (
            <article key={job.title} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">
              <PhotoFrame
                src={job.photo!.src}
                alt={job.photo!.alt}
                caption={job.photo!.caption}
                aspect="aspect-[4/3]"
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="shadow-[0_20px_50px_-20px_rgba(5,10,7,0.35)]"
                wrapperClassName={i % 2 ? "lg:order-2" : ""}
              />
              <Reveal variant="group">
                <p data-fx="rise" className="text-xs uppercase tracking-[0.18em] text-forest-green font-semibold mb-3">{job.service}</p>
                <h3 data-fx="rise" style={d(80)} className="text-2xl sm:text-3xl font-montserrat font-light tracking-tight text-slate-950 mb-2">{job.title}</h3>
                <p data-fx="rise" style={d(120)} className="text-sm italic text-gray-500 font-light mb-6">{job.meta}</p>
                <div data-fx="rise" style={d(160)} className="space-y-4">
                  {job.paras.map((p, k) => (
                    <p key={k} className="text-gray-600 font-light leading-relaxed text-[15px]">
                      {p.label && <span className="font-semibold text-slate-950">{p.label} </span>}
                      {p.text}
                    </p>
                  ))}
                </div>
                {job.facts && (
                  <p data-fx="rise" style={d(220)} className="mt-6 pt-5 border-t border-gray-100 text-xs text-gray-500 font-light tracking-wide leading-relaxed">{job.facts}</p>
                )}
              </Reveal>
            </article>
          ))}
          {plainJobs.length > 0 && (
            <Reveal variant="group">
              {plainJobs.map((job) => (
                <article key={job.title} className="card-lift p-8 bg-white border border-gray-100 rounded-2xl shadow-sm">
                  <p className="text-xs uppercase tracking-[0.18em] text-forest-green font-semibold mb-3">{job.service}</p>
                  <h3 className="text-lg font-montserrat font-semibold text-slate-950 mb-2">{job.title}</h3>
                  <p className="text-sm italic text-gray-500 font-light mb-5">{job.meta}</p>
                  <div className="space-y-4 max-w-3xl">
                    {job.paras.map((p, k) => (
                      <p key={k} className="text-gray-600 font-light leading-relaxed text-[15px]">
                        {p.label && <span className="font-semibold text-slate-950">{p.label} </span>}
                        {p.text}
                      </p>
                    ))}
                  </div>
                  {job.facts && (
                    <p className="mt-6 pt-5 border-t border-gray-100 text-xs text-gray-500 font-light tracking-wide leading-relaxed max-w-3xl">{job.facts}</p>
                  )}
                </article>
              ))}
            </Reveal>
          )}
        </div>
      </section>

      {/* 02 — Services */}
      <section id="services" className="py-20 lg:py-24 px-6 lg:px-12 max-w-7xl mx-auto border-t border-gray-100">
        <Reveal variant="group" className="mb-14">
          <p data-fx="rise" className="text-sm uppercase tracking-[0.2em] text-forest-green mb-4 font-semibold">02 &middot; Services</p>
          <h2 data-fx="rise" style={d(80)} className="text-3xl sm:text-4xl font-montserrat font-light tracking-tight">
            What We Do <span className="font-semibold h-bold">Here.</span>
          </h2>
          <div data-fx="line" style={d(200)} className="mt-5 h-px bg-forest-green w-12" />
        </Reveal>
        <Reveal variant="group">
          <div data-stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {r.services.map((s) => (
              <div key={s.title} className="card-lift p-8 bg-white border border-gray-100 rounded-2xl shadow-sm h-full">
                <h3 className="text-lg font-montserrat font-semibold text-slate-950 mb-3">
                  {s.href ? (
                    <Link href={s.href} className="hover:text-forest-green transition-colors">{s.title}</Link>
                  ) : s.title}
                </h3>
                <p className="text-gray-600 font-light leading-relaxed text-[15px]">{s.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <QuietFaq intro={r.faqIntro} faqs={r.faqs} footer={<OtherAreas current={`/${r.slug}`} />} />

      <CloseBand
        quote={quote}
        source={`${r.source} close`}
        heading={<>Start With <span className="font-semibold h-bold">The Ground.</span></>}
        sub={r.closeSub}
      />
    </div>
  );
}
