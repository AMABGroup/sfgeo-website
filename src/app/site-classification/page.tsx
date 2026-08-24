import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FadeIn, StaggerContainer, FadeInChild } from "./MotionWrapper";
import VideoEmbed from "./VideoEmbed";
import ImageOverlay from "@/components/ui/ImageOverlay";
import { OverlayGroup } from "@/components/ui/OverlayGroup";
import QuickQuoteCard from "@/components/forms/QuickQuoteCard";
import GoogleReviews from "@/components/ui/GoogleReviews";

export const metadata: Metadata = {
  title: "Site Classification Sydney | AS2870 Soil Reports | SFGEO",
  description: "AS2870 site classifications for Sydney homes and extensions. Principal-led, NATA lab-backed, fixed-fee — reports as soon as 2–3 business days.",
  alternates: {
    canonical: '/site-classification',
  },
  openGraph: {
    images: ['/og/sfgeo-og-card.jpg'],
    title: "Site Classification Sydney | AS2870 Soil Reports | SFGEO",
    description: "AS2870 site classifications for Sydney homes and extensions. Principal-led, NATA lab-backed, fixed-fee — reports as soon as 2–3 business days.",
    url: '/site-classification',
  },
  twitter: {
    card: "summary_large_image",
    images: ['/og/sfgeo-og-card.jpg'],
    title: "Site Classification Sydney | AS2870 Soil Reports | SFGEO",
    description: "AS2870 site classifications for Sydney homes and extensions. Principal-led, NATA lab-backed, fixed-fee — reports as soon as 2–3 business days.",
  },
};

export default function SiteClassificationPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@id": "https://sfgeo.com.au/",
          "name": "Home"
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@id": "https://sfgeo.com.au/site-classification",
          "name": "Site Classification"
        }
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Site Classification",
    "serviceType": "Site Classification",
    "description": "Fast, accurate AS2870 site classifications for Sydney homes, extensions, granny flats and duplexes. Independent, NATA lab-backed, fixed-fee. Signed by the engineer on your ground.",
    "url": "https://sfgeo.com.au/site-classification",
    "provider": {
      "@id": "https://sfgeo.com.au/#organization"
    },
    "areaServed": {
      "@type": "City",
      "name": "Sydney, New South Wales, Australia"
    },
    "offers": [
      {
        "@type": "Offer",
        "name": "Ancillary residential",
        "description": "Granny flats. Small additions. New homes on cleared blocks. Tightly scoped projects with straightforward access, priced from $800. Every fee is set against your specific block.",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "800",
          "priceCurrency": "AUD",
          "valueAddedTaxIncluded": false,
          "description": "from $800 + GST"
        }
      },
      {
        "@type": "Offer",
        "name": "Standard residential",
        "description": "The right tier for most Sydney custom builds. Single or double-storey homes on established streets. Pool additions, duplexes, and dwellings with in-ground pools. From $1,000, priced against the work your site actually needs.",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "1000",
          "priceCurrency": "AUD",
          "valueAddedTaxIncluded": false,
          "description": "from $1,000 + GST"
        }
      }
    ]
  };

  return (
    <div className="bg-white text-slate-950 font-inter min-h-screen selection:bg-forest-green selection:text-white pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Hero Section */}
                  <section className="pt-32 pb-16 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col gap-10">
          
          {/* Row 1: Social Links */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 w-full border-b border-gray-100 lg:border-none pb-6 lg:pb-0">
            <h3 className="text-[11px] font-bold tracking-[0.2em] text-forest-green uppercase m-0 text-center lg:text-left w-full lg:w-auto">
              FAMILY OWNED • INDEPENDENT • SYDNEY BASED
            </h3>
            <div className="flex flex-row justify-center lg:justify-end gap-3 sm:gap-4 w-full lg:w-auto">
            <a 
              href="https://au.linkedin.com/company/sfgeo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-3 sm:px-5 py-2.5 bg-white border border-gray-200 rounded-full shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 sm:w-[240px] h-[46px] group/link"
            >
              <svg className="w-4 h-4 shrink-0 text-[#0A66C2] transition-transform group-hover/link:scale-110" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.475-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span className="text-[11px] sm:text-xs font-semibold text-slate-950 tracking-wide truncate">
                <span className="hidden sm:inline">Connect on </span>LinkedIn
              </span>
            </a>
            <a 
              href="https://instagram.com/sfgeo.syd" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-3 sm:px-5 py-2.5 bg-white border border-gray-200 rounded-full shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 sm:w-[240px] h-[46px] group/link"
            >
              <svg className="w-4 h-4 shrink-0 text-[#E1306C] transition-transform group-hover/link:scale-110" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
              <span className="text-[11px] sm:text-xs font-semibold text-slate-950 tracking-wide truncate">
                <span className="hidden sm:inline">Follow on </span>Instagram
              </span>
            </a>
            </div>
          </div>

          {/* Row 2: H1 + CTAs */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">
            {/* H1 */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left flex-1">
              <h1 className="text-4xl sm:text-5xl font-montserrat font-light tracking-tight text-slate-950 max-w-4xl mb-0 leading-tight w-full">
                Site Classifications Sydney.<br />
                <span className="font-semibold">Engineered Properly.</span>
              </h1>
              
              <div className="w-[96px] h-[3px] bg-forest-green mt-5 mb-5 mx-auto lg:mx-0"></div>
              
              {/* Mobile CTAs sit here above subhead */}
              <div className="lg:hidden flex flex-col items-center gap-4 w-full mb-8">
                <Link 
                  href="tel:+61423483555" 
                  className="flex items-center justify-center px-5 py-2.5 bg-gradient-to-b from-[#346b43] to-forest-green text-white rounded-full shadow-[0_8px_20px_-6px_rgba(45,90,58,0.4)] hover:shadow-[0_12px_24px_-8px_rgba(45,90,58,0.6)] hover:brightness-105 transition-all hover:-translate-y-0.5 w-[70%] sm:w-[240px] h-[46px]"
                >
                  <span className="text-xs font-semibold tracking-wide">Discuss your project</span>
                </Link>
                <Link 
                  href="/faq" 
                  className="flex items-center justify-center px-5 py-2.5 bg-white text-forest-green rounded-full shadow-[inset_0_0_0_1px_rgba(45,90,58,0.25),0_4px_10px_-4px_rgba(0,0,0,0.05)] hover:bg-forest-green/5 hover:shadow-[inset_0_0_0_1px_rgba(45,90,58,0.4),0_6px_14px_-4px_rgba(0,0,0,0.1)] transition-all hover:-translate-y-0.5 w-[70%] sm:w-[240px] h-[46px]"
                >
                  <span className="text-xs font-semibold tracking-wide">Read our FAQ</span>
                </Link>
              </div>

              <p className="text-xl text-gray-500 font-light leading-relaxed max-w-2xl mb-8 lg:mb-0 w-full">


              Principal-Engineer-led, every geotechnical report is tailored to your site, your design, and your requirements. No templates. No surprises.
            
              
              </p>
            </div>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex flex-row items-center gap-4 shrink-0">
              <Link 
                href="tel:+61423483555" 
                className="flex items-center justify-center px-5 py-2.5 bg-gradient-to-b from-[#346b43] to-forest-green text-white rounded-full shadow-[0_8px_20px_-6px_rgba(45,90,58,0.4)] hover:shadow-[0_12px_24px_-8px_rgba(45,90,58,0.6)] hover:brightness-105 transition-all hover:-translate-y-0.5 w-[240px] h-[46px]"
              >
                <span className="text-xs font-semibold tracking-wide">Discuss your project</span>
              </Link>
              <Link 
                href="/faq" 
                className="flex items-center justify-center px-5 py-2.5 bg-white text-forest-green rounded-full shadow-[inset_0_0_0_1px_rgba(45,90,58,0.25),0_4px_10px_-4px_rgba(0,0,0,0.05)] hover:bg-forest-green/5 hover:shadow-[inset_0_0_0_1px_rgba(45,90,58,0.4),0_6px_14px_-4px_rgba(0,0,0,0.1)] transition-all hover:-translate-y-0.5 w-[240px] h-[46px]"
              >
                <span className="text-xs font-semibold tracking-wide">Read our FAQ</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Section 1: What a Site Classification actually does for you */}
      <section className="py-16 px-6 lg:px-12 w-full">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            {/* Mobile-only Heading: Stays at top of section */}
            <div className="max-w-4xl mx-auto lg:hidden mb-10">
              <h2 className="text-3xl font-light tracking-tight font-montserrat text-slate-950 mb-4">
                What does a Site Classification actually mean for you
              </h2>
              <div className="w-[64px] h-[2px] bg-forest-green"></div>
            </div>
            
            {/* Intro block: 3-column desktop grid (Heading+Paragraph | Divider | Video) */}
            <div className="max-w-6xl mx-auto mb-12 lg:mb-20">
              <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1px_1fr] gap-x-8 lg:gap-x-12 gap-y-10 items-center">
                
                {/* Left Column: Text (Heading + Paragraph) — appears second on mobile */}
                <div className="order-2 lg:order-none flex flex-col items-start text-left">
                  <h2 className="hidden lg:block text-3xl font-light tracking-tight font-montserrat text-slate-950 mb-4">
                    What does a Site Classification actually <br className="hidden lg:inline" /> mean for you
                  </h2>
                  <div className="hidden lg:block w-[64px] h-[2px] bg-forest-green mb-8"></div>
                  
                  <p className="text-lg text-gray-600 font-light leading-relaxed">
                    Often referred to as a soil test or geotech report, a Site Classification under AS 2870 is considerably more than <Link href="/services" className="text-forest-green hover:underline font-medium">paperwork your structural engineer asks for</Link>. Done properly, and done early, it works for you in four ways.
                  </p>
                </div>

                {/* Center Column: Vertical Divider — desktop only */}
                <div className="hidden lg:block bg-forest-green w-[1px] self-stretch lg:order-none" aria-hidden="true" />

                {/* Right Column: Video + Caption — appears first on mobile */}
                <div className="order-1 lg:order-none">
                  <figure>
                    <div className="w-full aspect-video rounded-xl overflow-hidden mb-3">
                      <VideoEmbed
                        id="F4pXJ63gAUM"
                        title="Site Classification to AS 2870 — SFGEO geotechnical investigation in Cherrybrook, NSW"
                      />
                    </div>
                    <figcaption className="text-sm italic text-gray-500 text-center lg:whitespace-nowrap">
                      SFGEO Fieldwork — the work behind every report.
                    </figcaption>
                  </figure>
                </div>

              </div>
            </div>

            {/* Numbered points block (Original narrower reading width) */}
            <div className="max-w-4xl mx-auto text-lg text-gray-600 font-light leading-relaxed">
              <ol className="list-decimal pl-5 space-y-4">
                <li><strong className="font-medium text-slate-950">Helps your architect design the right home for your ground.</strong> Commissioned at concept stage, it lets the design work with the ground conditions rather than redesigning around them later. Saves architect time and redesign fees.</li>
                <li><strong className="font-medium text-slate-950">Gives your structural engineer the data to size footings precisely.</strong> The difference between a well-read Class M and a defaulted Class H1 runs to tens of thousands of dollars in concrete and steel. Worth getting right.</li>
                <li><strong className="font-medium text-slate-950">Supports your DA or CDC approval.</strong> A report written to match your certifier's specific requirements moves through approvals cleanly. Generic reports get queried or bounced, and delay the project.</li>
                <li><strong className="font-medium text-slate-950">Protects the home you are about to build.</strong> An under-read site shows up quietly, years later, as cracks above doorways and doors that stop closing properly in February. The classification is what stops that conversation before it starts.</li>
              </ol>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Preparation & Execution Section */}
      <section className="py-16 px-6 lg:px-12 max-w-4xl mx-auto border-t border-gray-100">
        <FadeIn>
          <h2 className="text-3xl font-light tracking-tight font-montserrat text-slate-950 mb-8">
            Preparation & Execution
          </h2>
          <OverlayGroup>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden shadow-sm group">
                <Image 
                  src="/sfgeo-principal-engineer-reviewing-architectural-plans-as2870.jpg" 
                  alt="SFGEO principal engineer reviewing architectural plans against AS 2870" 
                  title="Site classification review — AS 2870"
                  fill 
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <ImageOverlay compact hoverReveal>
                  PREPARATION
                </ImageOverlay>
              </div>
              <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden shadow-sm group">
                <Image 
                  src="/sfgeo-drilling-heritage-home-inner-west-sydney.jpg" 
                  alt="Geotechnical drilling in progress at a heritage Inner West Sydney home" 
                  title="Geotechnical investigation, Inner West Sydney"
                  fill 
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <ImageOverlay compact hoverReveal>
                  EXECUTION
                </ImageOverlay>
              </div>
            </div>
          </OverlayGroup>
          <div className="text-lg text-gray-600 font-light leading-relaxed space-y-6">
            <p>
              <strong className="font-medium text-slate-950">One professional, not three.</strong> The Principal Engineer's background is hands-on residential construction across multiple trades, years of drilling Sydney sites personally, and the engineering qualifications on top. When the rig goes down, the person reading the ground has drilled ground like it before. When the plans come out, the person reading them has built against ground conditions before. That combination, in one professional, is rare in the Sydney market.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Section 2: How SFGEO does this differently */}
      <section className="py-16 px-6 lg:px-12 max-w-4xl mx-auto border-t border-gray-100">
        <FadeIn>
          <h2 className="text-3xl font-light tracking-tight font-montserrat text-slate-950 mb-8">
            How SFGEO does this differently
          </h2>
          <div className="text-lg text-gray-600 font-light leading-relaxed space-y-6 mb-12">
            <p>
              Most Sydney geotechnical firms operate on volume. Cheap headline fees, templated reports, conservative defaults to cover professional risk, and the engineer who signs the report has often never set foot on the property. You pay for that model either way. In concrete you did not need, or in a report your certifier rejects.
            </p>
            <p className="font-medium text-slate-950 text-xl">
              SFGEO is built on the opposite model.
            </p>
          </div>
        </FadeIn>
 
        <FadeIn>
          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] mb-12">
            {/* Desktop Table Header */}
            <div className="hidden md:grid grid-cols-2 bg-slate-50/50 border-b border-gray-200">
              <div className="px-8 py-5 font-semibold text-slate-950 uppercase tracking-wider text-[11px]">The volume model</div>
              <div className="px-8 py-5 font-semibold text-forest-green border-l border-gray-200 uppercase tracking-wider text-[11px] bg-forest-green/[0.02]">The SFGEO way</div>
            </div>
            {/* Rows */}
            <div className="divide-y divide-gray-100">
              {[
                { volume: "Fieldwork done without the signing engineer present", sfgeo: "Principal Engineer on every site" },
                { volume: "Templated reports, one size fits all", sfgeo: "Tailored to your certifier, structural engineer and council" },
                { volume: "Lab testing applied by default, billed regardless", sfgeo: "Lab testing when the site warrants it, not as padding" },
                { volume: "Engineer meets the site via the borehole log", sfgeo: "Principal meets you on site before quoting" },
                { volume: "Separate quotes for drilling, engineering and construction advice", sfgeo: "One professional, one scope" }
              ].map((row, idx) => (
                <div key={idx} className="flex flex-col md:grid md:grid-cols-2 p-8 md:p-0 group hover:bg-slate-50/30 transition-colors">
                  {/* Mobile labels shown only on small screens */}
                  <div className="md:px-8 md:py-6 text-gray-500 font-light md:border-r border-gray-200 pb-3 md:pb-6 leading-relaxed">
                    <span className="block md:hidden text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1.5">The volume model</span>
                    {row.volume}
                  </div>
                  <div className="md:px-8 md:py-6 text-slate-950 font-medium md:bg-forest-green/[0.01] leading-relaxed">
                    <span className="block md:hidden text-[10px] font-bold uppercase tracking-widest text-forest-green mb-1.5 mt-2">The SFGEO way</span>
                    {row.sfgeo}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Section 3: Process */}
      <section className="py-16 px-6 lg:px-12 max-w-4xl mx-auto border-t border-gray-100">
        <FadeIn>
          <h2 className="text-3xl font-light tracking-tight font-montserrat text-slate-950 mb-8">
            Process
          </h2>
          <ol className="list-decimal pl-5 space-y-4 text-lg text-gray-600 font-light leading-relaxed">
            <li><strong className="font-medium text-slate-950">Book a site meeting.</strong> Send the address, a short project description, and any plans you have.</li>
            <li><strong className="font-medium text-slate-950">On-site consultation.</strong> Principal Engineer walks the site with you. Construction-side perspective and engineering judgement in the same conversation.</li>
            <li><strong className="font-medium text-slate-950">Fixed-fee quote.</strong> Written, scoped, confirmed before work begins.</li>
            <li><strong className="font-medium text-slate-950">Fieldwork.</strong> Principal Engineer attends, logs the profile on site.</li>
            <li><strong className="font-medium text-slate-950">Lab testing, if indicated.</strong> Through a NATA-accredited partner laboratory. Only when the site warrants it.</li>
            <li><strong className="font-medium text-slate-950">Report, reviewed and signed.</strong> Prepared against your certifier's and structural engineer's specific requirements.</li>
            <li><strong className="font-medium text-slate-950">Delivery.</strong> Signed PDF, 2–3 business days from fieldwork.</li>
          </ol>
        </FadeIn>
      </section>

      {/* Section 4: Pricing */}
      <section className="py-24 px-6 lg:px-12 bg-slate-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="max-w-4xl mb-12">
              <h2 className="text-3xl font-light tracking-tight font-montserrat text-slate-950 mb-6">
                Scope & Pricing
              </h2>
              <div className="text-lg text-gray-600 font-light leading-relaxed space-y-6">
                <p>
                  Geotechnical reporting in Sydney has a transparency problem. Headline fees look sharp on first read, then return heavier once scope is actually scoped. Or the fee is cheap, and the report is thin, templated, and bounced by the certifier. Either way, you pay for it, often in concrete and steel that never had to be there.
                </p>
                <p>
                  SFGEO pricing is fixed-fee, confirmed in writing before work begins. The figures below are starting points. What drives a real quote is the site itself, access, ground conditions, existing structures, slope, the depth of investigation your project actually needs. That is why every engagement starts with the Principal Engineer on your ground.
                </p>
              </div>
            </div>
          </FadeIn>

          <StaggerContainer>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <FadeInChild>
                <Link href="/contact" aria-label="Enquire about ancillary residential pricing" className="group flex flex-col h-full bg-white border border-gray-100 p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer hover:-translate-y-1 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-forest-green/[0.03] rounded-bl-full -mr-16 -mt-16 transition-transform duration-500 group-hover:scale-110" />
                  <div className="mb-6">
                    <span className="text-[11px] font-bold tracking-[0.2em] text-forest-green uppercase">ANCILLARY RESIDENTIAL</span>
                  </div>
                  <h3 className="text-4xl font-montserrat font-light text-slate-950 tracking-tight mb-6 flex items-baseline gap-2">
                    <span className="text-lg text-gray-400 font-medium lowercase">from</span> $800 <span className="text-lg text-gray-400 font-medium">+ GST</span>
                  </h3>
                  <p className="text-base text-gray-500 font-light leading-relaxed mb-10 flex-grow">
                    Granny flats. Small additions. New homes on cleared blocks. Tightly scoped projects with straightforward access, priced from $800. Every fee is set against your specific block.
                  </p>
                  <div className="flex items-center justify-center px-5 py-2.5 bg-white text-forest-green rounded-full shadow-[inset_0_0_0_1px_rgba(45,90,58,0.25),0_4px_10px_-4px_rgba(0,0,0,0.05)] group-hover:bg-forest-green/5 transition-all text-xs font-semibold tracking-wide h-[46px] w-full">
                    Enquire Now
                  </div>
                </Link>
              </FadeInChild>
              
              {/* Card 2 */}
              <FadeInChild>
                <Link href="/contact" aria-label="Enquire about standard residential pricing" className="group flex flex-col h-full bg-white border border-gray-100 p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer hover:-translate-y-1 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-forest-green/[0.03] rounded-bl-full -mr-16 -mt-16 transition-transform duration-500 group-hover:scale-110" />
                  <div className="mb-6">
                    <span className="text-[11px] font-bold tracking-[0.2em] text-forest-green uppercase">STANDARD RESIDENTIAL</span>
                  </div>
                  <h3 className="text-4xl font-montserrat font-light text-slate-950 tracking-tight mb-6 flex items-baseline gap-2">
                    <span className="text-lg text-gray-400 font-medium lowercase">from</span> $1,000 <span className="text-lg text-gray-400 font-medium">+ GST</span>
                  </h3>
                  <p className="text-base text-gray-500 font-light leading-relaxed mb-10 flex-grow">
                    The right tier for most Sydney custom builds. Single or double-storey homes on established streets. Pool additions, duplexes, and dwellings with in-ground pools. From $1,000, priced against the work your site actually needs.
                  </p>
                  <div className="flex items-center justify-center px-5 py-2.5 bg-white text-forest-green rounded-full shadow-[inset_0_0_0_1px_rgba(45,90,58,0.25),0_4px_10px_-4px_rgba(0,0,0,0.05)] group-hover:bg-forest-green/5 transition-all text-xs font-semibold tracking-wide h-[46px] w-full">
                    Enquire Now
                  </div>
                </Link>
              </FadeInChild>
              
              {/* Card 3 */}
              <FadeInChild>
                <Link href="/contact" aria-label="Enquire about complex project and site pricing" className="group flex flex-col h-full bg-white border border-gray-100 p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer hover:-translate-y-1 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-forest-green/[0.03] rounded-bl-full -mr-16 -mt-16 transition-transform duration-500 group-hover:scale-110" />
                  <div className="mb-6">
                    <span className="text-[11px] font-bold tracking-[0.2em] text-forest-green uppercase">COMPLEX PROJECTS & SITES</span>
                  </div>
                  <h3 className="text-4xl font-montserrat font-light text-slate-950 tracking-tight mb-6 flex items-baseline gap-2">
                    Custom <span className="text-lg text-gray-400 font-medium">Quote</span>
                  </h3>
                  <p className="text-base text-gray-500 font-light leading-relaxed mb-10 flex-grow">
                    Basements. Multi-storey. Retaining walls. Sloping blocks. Restricted access. Strata. Prestige-suburb projects. Every complex site is different, and we price them that way.
                  </p>
                  <div className="flex items-center justify-center px-5 py-2.5 bg-white text-forest-green rounded-full shadow-[inset_0_0_0_1px_rgba(45,90,58,0.25),0_4px_10px_-4px_rgba(0,0,0,0.05)] group-hover:bg-forest-green/5 transition-all text-xs font-semibold tracking-wide h-[46px] w-full">
                    Enquire Now
                  </div>
                </Link>
              </FadeInChild>
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Quote card — placed at the pricing decision point */}
      <section className="py-16 px-6 lg:px-12">
        <FadeIn>
          <div className="max-w-md mx-auto">
            <QuickQuoteCard
              source="site-classification page"
              heading="Get your fixed-fee quote"
            />
          </div>
        </FadeIn>
      </section>

      {/* Section 5: Turnaround */}
      <section className="py-16 px-6 lg:px-12 max-w-4xl mx-auto border-b border-gray-100">
        <FadeIn>
          <h2 className="text-3xl font-light tracking-tight font-montserrat text-slate-950 mb-6">
            Turnaround
          </h2>
          <p className="text-lg text-gray-600 font-light leading-relaxed space-y-6">
            <span className="block">Reports can be delivered as soon as 2–3 business days from fieldwork. Complex sites, Class P investigations, and projects requiring laboratory testing take longer and are scoped at the site meeting.</span>
            <span className="block mt-6">Urgent turnaround is available where a DA, CC or settlement timeline requires it. Call the Principal directly to arrange priority scheduling.</span>
          </p>
        </FadeIn>
      </section>

      {/* Section 6: Access */}
      <section className="py-16 px-6 lg:px-12 max-w-4xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl font-light tracking-tight font-montserrat text-slate-950 mb-6">
            Access
          </h2>
          <p className="text-lg text-gray-600 font-light leading-relaxed mb-8">
            Many Sydney sites cannot be reached by a conventional truck-mounted rig. Inner West terraces, Eastern Suburbs battleaxe blocks, rear-yard granny flat positions, stepped blocks with deep investigation points. SFGEO operates a 4WD-mounted rig for sites where standard rigs stop at the kerb, with motorised hand augers covering zero-clearance and internal courtyard work. Access-ready from first contact, so your program does not slip waiting on a rig that cannot reach the investigation points. <Link href="/drilling" className="text-forest-green hover:underline font-medium">Full access capability.</Link>
          </p>
          <OverlayGroup>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden shadow-sm group">
                <Image 
                  src="/sfgeo-4wd-drill-rig-open-residential-block-sydney.jpg" 
                  alt="SFGEO 4WD-mounted geotechnical drill rig set up on an open residential block in Sydney" 
                  title="Standard residential access — drill rig deployed"
                  fill 
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <ImageOverlay compact hoverReveal>
                  STANDARD RESIDENTIAL ACCESS
                </ImageOverlay>
              </div>
              <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden shadow-sm group">
                <Image 
                  src="/sfgeo-hand-auger-borehole-restricted-access-sydney-backyard.jpg" 
                  alt="Hand auger borehole and field logging in a restricted-access Sydney backyard for AS 2870 site classification" 
                  title="Restricted access — hand auger investigation"
                  fill 
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <ImageOverlay compact hoverReveal>
                  RESTRICTED & TIGHT ACCESS
                </ImageOverlay>
              </div>
            </div>
          </OverlayGroup>
        </FadeIn>
      </section>

      {/* Section 7: The six classes of AS 2870 */}
      <section className="py-16 px-6 lg:px-12 max-w-4xl mx-auto border-t border-gray-100">
        <FadeIn>
          <h2 className="text-3xl font-light tracking-tight font-montserrat text-slate-950 mb-8">
            The six classes of AS 2870
          </h2>
          
          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] mb-8">
            {/* Desktop Table Header */}
            <div className="hidden md:grid grid-cols-[140px_1fr] bg-slate-50/50 border-b border-gray-200">
              <div className="px-8 py-5 font-semibold text-slate-950 uppercase tracking-wider text-[11px]">Class</div>
              <div className="px-8 py-5 font-semibold text-slate-950 border-l border-gray-200 uppercase tracking-wider text-[11px]">Ground behaviour</div>
            </div>
            {/* Rows */}
            <div className="divide-y divide-gray-100">
              {[
                { cls: "A", desc: "Stable. Minimal movement. Sand or rock." },
                { cls: "S", desc: "Slightly reactive. Standard footings." },
                { cls: "M", desc: "Moderately reactive. Stiffened slab." },
                { cls: "H1", desc: "Highly reactive, 40–60mm surface movement." },
                { cls: "H2", desc: "Highly reactive, 60–75mm." },
                { cls: "E", desc: "Extremely reactive, greater than 75mm." }
              ].map((row, idx) => (
                <div key={idx} className="flex flex-col md:grid md:grid-cols-[140px_1fr] p-8 md:p-0 group hover:bg-slate-50/30 transition-colors">
                  <div className="md:px-8 md:py-6 font-bold text-forest-green text-3xl md:text-2xl md:border-r border-gray-200 pb-3 md:pb-6 flex items-center">
                    <span className="block md:hidden text-[10px] font-bold uppercase tracking-widest text-slate-400 mr-4">Class</span>
                    {row.cls}
                  </div>
                  <div className="md:px-8 md:py-6 text-slate-950 font-light flex items-center text-lg leading-relaxed">
                    {row.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <p className="text-lg text-gray-600 font-light leading-relaxed">
            <strong className="font-medium text-slate-950">Class P</strong> sits outside the reactivity scale. Applied when conditions fall outside the standard AS 2870 framework, fill, steep slope, soft or collapsing soils, reactivity beyond Class E, or proximity to significant trees and water courses. Requires individual engineering assessment.
          </p>
        </FadeIn>
      </section>

      {/* Section 8: What that means for your suburb */}
      <section className="py-16 px-6 lg:px-12 max-w-4xl mx-auto border-t border-gray-100">
        <FadeIn>
          <h2 className="text-3xl font-light tracking-tight font-montserrat text-slate-950 mb-8">
            What that means for your suburb
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Inner West", desc: "Across Marrickville, Dulwich Hill, Petersham, Summer Hill and surrounds, sites typically sit on Ashfield Shale — residual clays over shale, often moderate to highly reactive. Class M and H1 outcomes are common." },
              { title: "North Shore", desc: "Most North Shore sites sit on Hawkesbury Sandstone. Outcomes depend on how much weathered soil sits above the rock. Shallow rock classifies favourably; deeper profiles behave like clay and need investigation." },
              { title: "Western Sydney", desc: "Bringelly Shale is the most reactive common profile in metropolitan Sydney. Across the Cumberland Plain, H1 and H2 outcomes are frequent." },
              { title: "South West Corridor", desc: "Legacy fill, alluvial soils, and reactive clays push a higher proportion of sites into Class P. Common across Liverpool and Campbelltown." }
            ].map((suburb, idx) => (
              <div key={idx} className="p-8 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-medium text-slate-950 mb-4">{suburb.title}</h3>
                <p className="text-gray-600 font-light leading-relaxed">{suburb.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 p-10 bg-slate-50 border border-gray-100 rounded-2xl">
            <p className="text-2xl font-light text-slate-950 leading-tight">
              "Two doors down from a Class S site, your land may be a Class H1 site. This is why the fieldwork — <span className="font-semibold text-forest-green">engineered properly</span> — matters."
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Reviews */}
      <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto border-t border-gray-100">
        <GoogleReviews />
      </section>

      {/* Section 9: Close CTA block */}
      <section className="mt-16 py-24 px-6 lg:px-12 bg-[#050A07] text-white rounded-t-[3rem] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(45,90,58,0.15),transparent)] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <FadeIn>
            <h2 className="text-4xl sm:text-6xl font-montserrat font-light tracking-tight mb-8">
              Start with a <span className="font-semibold">site meeting.</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 font-light leading-relaxed max-w-2xl mx-auto mb-12">
              Every SFGEO engagement begins with the Principal Engineer on your ground, reading your plans and your soil. Detailed answers to common questions are on <Link href="/faq" className="text-white underline hover:text-white/80 transition-colors">the full FAQ</Link>.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href="/contact"
                className="flex items-center justify-center px-8 py-2.5 bg-gradient-to-b from-[#346b43] to-forest-green text-white rounded-full shadow-[0_8px_20px_-6px_rgba(45,90,58,0.4)] hover:shadow-[0_12px_24px_-8px_rgba(45,90,58,0.6)] hover:brightness-105 transition-all hover:-translate-y-0.5 w-full sm:w-[280px] h-[46px] text-xs font-semibold tracking-wide"
              >
                Book a site meeting
              </Link>
              <Link
                href="tel:+61423483555"
                className="flex items-center justify-center px-8 py-2.5 bg-white text-forest-green rounded-full shadow-[inset_0_0_0_1px_rgba(45,90,58,0.25),0_4px_10px_-4px_rgba(0,0,0,0.05)] hover:bg-forest-green/5 hover:shadow-[inset_0_0_0_1px_rgba(45,90,58,0.4),0_6px_14px_-4px_rgba(0,0,0,0.1)] transition-all hover:-translate-y-0.5 w-full sm:w-[280px] h-[46px] text-xs font-semibold tracking-wide"
              >
                Discuss your project
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}
