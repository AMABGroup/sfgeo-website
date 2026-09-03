import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import QuoteCta from "@/components/forms/QuoteCta";
import PhotoPlaceholder from "@/components/ui/PhotoPlaceholder";
import LazyVideo from "@/components/ui/LazyVideo";
import { pageMeta } from "@/lib/seo";
import { FadeIn } from "../site-classification/MotionWrapper";

export const metadata: Metadata = pageMeta(
  "Geotechnical & Environmental Drilling Sydney | SFGEO",
  "Geotechnical and environmental drilling in Sydney. 4WD-mounted rig, borehole drilling, NMLC rock coring, tight access and subcontract rig hire.",
  "/drilling",
);

const SECTIONS = [
  {
    n: "01",
    id: "drilling",
    kicker: "01 · Borehole Drilling",
    titleLight: "Borehole",
    titleBold: "Drilling.",
    caption: "01 · Borehole Drilling",
    image: "/sfgeo-crew-mast-reserve.jpg",
    alt: "SFGEO 4WD-mounted drill rig with mast raised on a Sydney reserve",
    body: "An agile 4WD ute-mounted rig that gets on site fast and drills the ground Sydney is actually made of — Cumberland Plain clays and shales in the west, sands and estuarine profiles near the water, residual soils over sandstone everywhere else. Every borehole is logged by an engineer on site, not decoded from a driller's notes afterwards.",
    specs: [
      "Solid flight and hollow stem auger drilling",
      "Standard Penetration Testing (SPT) and Dynamic Cone Penetrometer (DCP)",
      "Engineer-logged profiles, scoped to Sydney ground conditions",
      "Rapid mobilisation across the Sydney metro and regional NSW",
    ],
    link: { href: "/borehole-drilling", label: "Explore Borehole Drilling" },
  },
  {
    n: "02",
    id: "rock-coring",
    kicker: "02 · Rock Coring",
    titleLight: "Rock",
    titleBold: "Coring.",
    caption: "02 · Rock Coring",
    image: null,
    shot: "NMLC rock core in the tray — sandstone or shale runs laid out, defect-logged, with the core barrel or a scale alongside.",
    body: "When the design needs more than refusal depth — intact cores from Hawkesbury sandstone and Ashfield shale, recovered, photographed and defect-logged so structural decisions rest on what the rock actually is.",
    specs: [
      "NMLC rock coring with recovery and defect logging",
      "Hawkesbury sandstone, Ashfield shale and interbedded profiles",
      "Intact core for point load and strength testing",
      "Advance booking and prepayment required",
    ],
    link: { href: "/contact", label: "Book A Coring Run" },
    also: { href: "/concrete-coring", prefix: "Coring concrete slabs and pavements instead?", label: "Concrete Coring" },
  },
  {
    n: "03",
    id: "tight-access",
    kicker: "03 · Tight Access",
    titleLight: "Tight",
    titleBold: "Access.",
    caption: "03 · Tight Access",
    image: "/sfgeo-hand-auger-sidepath-naremburn.jpg",
    alt: "Hand auger boreholing down a narrow side path beside a Sydney home",
    body: "Terrace backyards, basement levels, side paths a wheelbarrow barely fits down — access shouldn't decide the quality of your engineering data. Motorised hand augers, tight-access coring and a 4WD-mounted rig reach the ground other crews quote around, with the finished surfaces protected on the way through.",
    specs: [
      "Manual and motorised hand augering",
      "4WD-mounted rig where truck rigs stop at the kerb",
      "Basement and restricted-height drilling",
      "Low-impact setup and site protection",
    ],
    link: { href: "/tight-access-drilling", label: "Explore Tight Access Drilling" },
  },
  {
    n: "04",
    id: "b2b-drilling",
    kicker: "04 · Subcontract Drilling",
    titleLight: "Subcontract",
    titleBold: "Drilling.",
    caption: "04 · Subcontract Drilling",
    image: "/sfgeo-operator-rig-controls-sydney.jpg",
    alt: "Operator at the controls of the SFGEO drill rig on a Sydney site",
    body: "The rig and crew are available under your scope — engineering consultancies from boutique practices to some of the bigger firms in Sydney ground, environmental consultants running PSI and DSI programs, and builders and civil contractors who need holes without the overhead of an in-house crew. Your supervision or ours; engineer operated, always.",
    specs: [
      "Engineer-operated rig on your program and your paperwork",
      "Sampling, logs and chain of custody delivered in your format",
      "Environmental sampling for consultant programs — monitoring wells arranged through a licensed bore driller under our scope",
      "Standing arrangements for repeat capacity",
    ],
    link: { href: "/subcontract-drilling", label: "Explore Subcontract Drilling" },
  },
];

const AUDIENCES = [
  { t: "Builders", d: "Boreholes for the site classification or investigation, booked around your program — and answers when the excavation finds something the report didn't." },
  { t: "Engineering Consultancies", d: "Subcontract rig capacity with engineer-grade logging — field data you can put your letterhead on without re-checking it." },
  { t: "Environmental Consultants", d: "Drilling and sampling for PSI and DSI programs — clean execution, chain of custody kept; monitoring wells through a licensed bore driller under our scope." },
  { t: "Bigger Firms & Majors", d: "Reliable capacity for programs that can't wait on a booked-out fleet — night works, staged access and standing arrangements included." },
];

export default function DrillingPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "item": { "@id": "https://sfgeo.com.au/", "name": "Home" } },
      { "@type": "ListItem", "position": 2, "item": { "@id": "https://sfgeo.com.au/drilling", "name": "Drilling" } }
    ]
  };
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Geotechnical Drilling",
    "serviceType": "Geotechnical Drilling & Environmental Sampling",
    "description": "Borehole drilling, NMLC rock coring, tight-access drilling and subcontract rig capacity across Sydney and regional NSW — engineer operated, with every profile logged on site.",
    "url": "https://sfgeo.com.au/drilling",
    "provider": { "@id": "https://sfgeo.com.au/#organization" },
    "areaServed": [
      { "@type": "City", "name": "Sydney, New South Wales, Australia" },
      { "@type": "State", "name": "New South Wales, Australia" }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Drilling Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Borehole Drilling" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "NMLC Rock Coring" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Tight-Access & Restricted Access Drilling" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Subcontract Drilling & Environmental Sampling" } }
      ]
    }
  };

  return (
    <div className="bg-white text-slate-950 font-inter selection:bg-forest-green selection:text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      {/* Hero */}
      <section className="pt-36 pb-20 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="max-w-4xl">
          <p className="hero-line text-sm uppercase tracking-[0.2em] text-forest-green mb-6 font-semibold">
            Drilling &middot; Engineer Operated &middot; 4WD Mobilised
          </p>
          <h1 className="hero-line hero-d1 text-4xl sm:text-6xl font-montserrat font-light tracking-tight leading-[1.08] mb-8">
            Geotechnical &amp; Environmental <span className="font-semibold h-bold">Drilling Sydney.</span>
          </h1>
          <div className="hero-line hero-d2 w-[96px] h-[3px] bg-forest-green mb-8" />
          <p className="hero-line hero-d2 max-w-3xl text-lg sm:text-xl text-gray-600 font-light leading-relaxed mb-10">
            Headquartered in Marrickville, mobilised across the Sydney metro and into regional NSW — one 4WD-mounted rig, operated by the engineers who log what it brings up. Drilling for builders, consultancies and some of the bigger firms in Sydney ground.
          </p>
          <div className="hero-line hero-d3 flex flex-col sm:flex-row items-start gap-4">
            <Link
              href="tel:+61423483555"
              className="flex items-center justify-center px-8 py-2.5 bg-gradient-to-b from-[#346b43] to-forest-green text-white rounded-full shadow-[0_8px_20px_-6px_rgba(45,90,58,0.4)] hover:shadow-[0_12px_24px_-8px_rgba(45,90,58,0.6)] hover:brightness-105 transition-all hover:-translate-y-0.5 w-full sm:w-auto h-[46px] text-xs font-semibold tracking-wide"
            >
              Call 0423 483 555
            </Link>
            <QuoteCta
              source="drilling hero"
              label="Request Drilling"
              className="flex items-center justify-center px-8 py-2.5 bg-white text-forest-green rounded-full shadow-[inset_0_0_0_1px_rgba(45,90,58,0.25),0_4px_10px_-4px_rgba(0,0,0,0.05)] hover:bg-forest-green/5 hover:shadow-[inset_0_0_0_1px_rgba(45,90,58,0.4),0_6px_14px_-4px_rgba(0,0,0,0.1)] transition-all hover:-translate-y-0.5 w-full sm:w-auto h-[46px] text-xs font-semibold tracking-wide"
            />
          </div>
        </div>
      </section>

      {/* The suite — numbered editorial rows */}
      {SECTIONS.map((sec, idx) => (
        <section key={sec.id} id={sec.id} className="py-20 lg:py-24 px-6 lg:px-12 max-w-7xl mx-auto border-t border-gray-100 scroll-mt-[90px]">
          {sec.id === "b2b-drilling" && <span id="environmental" className="block relative -top-24" aria-hidden="true" />}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <FadeIn className={idx % 2 === 1 ? "lg:order-2" : ""}>
              {sec.image ? (
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_26px_60px_-26px_rgba(5,10,7,0.4)]">
                  <Image src={sec.image} alt={sec.alt} fill sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 50vw, 600px" priority={idx === 0} className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050A07]/80 via-[#050A07]/25 to-transparent" />
                  <p className="absolute bottom-5 left-6 text-[11px] uppercase tracking-[0.25em] text-white font-semibold">{sec.caption}</p>
                </div>
              ) : (
                <PhotoPlaceholder
                  subject={sec.shot ?? ""}
                  caption={sec.caption}
                  className="aspect-[4/3] rounded-2xl shadow-[0_26px_60px_-26px_rgba(5,10,7,0.4)]"
                />
              )}
            </FadeIn>
            <FadeIn delay={0.12}>
              <p className="text-sm uppercase tracking-[0.2em] text-forest-green mb-4 font-semibold">{sec.kicker}</p>
              <h2 className="text-3xl sm:text-4xl font-montserrat font-light tracking-tight text-slate-950 mb-5">
                {sec.titleLight} <span className="font-semibold h-bold">{sec.titleBold}</span>
              </h2>
              <div className="h-px bg-forest-green w-12 mb-7" />
              <p className="text-gray-600 font-light leading-relaxed mb-7">{sec.body}</p>
              <ul className="space-y-3 mb-8">
                {sec.specs.map((s) => (
                  <li key={s} className="flex items-start gap-3 text-[15px] text-gray-600 font-light leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-forest-green mt-[9px] shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
              <Link href={sec.link.href} className="text-sm font-semibold tracking-wide text-forest-green group inline-flex items-center gap-2">
                <span className="draw-link">{sec.link.label}</span>
                <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
              </Link>
              {"also" in sec && sec.also && (
                <p className="mt-4 text-[13px] text-gray-500 font-light">
                  {sec.also.prefix}{" "}
                  <Link href={sec.also.href} className="text-gray-500 underline underline-offset-4 decoration-gray-300 hover:text-forest-green hover:decoration-forest-green transition-colors">
                    {sec.also.label}
                  </Link>
                </p>
              )}
            </FadeIn>
          </div>
        </section>
      ))}

      {/* Regional — the whoop whoop band */}
      <section className="py-20 lg:py-24 px-6 lg:px-12 max-w-7xl mx-auto border-t border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <FadeIn>
            <div className="relative mx-auto w-full max-w-[340px] aspect-[720/1264] rounded-2xl overflow-hidden shadow-[0_26px_60px_-26px_rgba(5,10,7,0.5)]">
              <LazyVideo
                src="/sfgeo-regional-sunrise-drilling.mp4"
                poster="/sfgeo-regional-sunrise-poster.jpg"
                label="SFGEO 4WD rig drilling at sunrise on a farm track in western NSW"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <p className="absolute bottom-5 left-6 text-[11px] uppercase tracking-[0.25em] text-white/80 font-semibold pointer-events-none">Sunrise &middot; Western NSW</p>
            </div>
          </FadeIn>
          <FadeIn delay={0.12}>
            <p className="text-sm uppercase tracking-[0.2em] text-forest-green mb-4 font-semibold">Regional NSW</p>
            <h2 className="text-3xl sm:text-4xl font-montserrat font-light tracking-tight text-slate-950 mb-5">
              Whoop Whoop? <span className="font-semibold h-bold">We&rsquo;ve Been.</span>
            </h2>
            <div className="h-px bg-forest-green w-12 mb-7" />
            <p className="text-gray-600 font-light leading-relaxed">
              Sunrise on a farm track, frost still on the paddock, mast already up — that&rsquo;s what a regional program looks like when the rig travels self-sufficient. The 4WD rig runs the same engineer-operated standard hours from the nearest bitumen as it does in the Inner West, so consultancies and builders with work beyond the metro don&rsquo;t have to lower the bar to get holes in the ground.
            </p>
            <QuoteCta source="drilling regional" label="Quote A Regional Program" className="mt-8 text-sm font-semibold tracking-wide text-forest-green group inline-flex items-center gap-2 draw-link" />
          </FadeIn>
        </div>
      </section>

      {/* Who we work with */}
      <section className="py-24 lg:py-28 px-6 lg:px-12 max-w-7xl mx-auto border-t border-gray-100">
        <FadeIn className="mb-14">
          <p className="text-sm uppercase tracking-[0.2em] text-forest-green mb-4 font-semibold">Who We Drill For</p>
          <h2 className="text-3xl sm:text-4xl font-montserrat font-light tracking-tight">
            Your Scope <span className="font-semibold h-bold">Or Ours.</span>
          </h2>
          <div className="mt-5 h-px bg-forest-green w-12" />
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {AUDIENCES.map((a) => (
            <FadeIn key={a.t}>
              <div className="p-8 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow h-full">
                <h3 className="text-lg font-montserrat font-semibold text-slate-950 mb-3 min-h-[56px]">{a.t}</h3>
                <p className="text-gray-600 font-light leading-relaxed text-[15px]">{a.d}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Close */}
      <section className="relative overflow-hidden bg-[#050A07] text-white grain">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(45,90,58,0.3),transparent_60%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center px-6 py-28 lg:py-32 relative z-10">
          <FadeIn>
            <h2 className="text-4xl sm:text-6xl font-montserrat font-light tracking-tight mb-8">
              One Call. <span className="font-semibold h-bold">Rig On Site.</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 font-light leading-relaxed max-w-2xl mx-auto mb-12">
              Tell us the site, the access and the program. You&rsquo;ll have a quote within one business day — and a rig that turns up when it said it would.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="tel:+61423483555" className="flex items-center justify-center px-8 py-2.5 bg-gradient-to-b from-[#346b43] to-forest-green text-white rounded-full shadow-[0_8px_20px_-6px_rgba(45,90,58,0.4)] hover:shadow-[0_12px_24px_-8px_rgba(45,90,58,0.6)] hover:brightness-105 transition-all hover:-translate-y-0.5 w-full sm:w-[280px] h-[46px] text-xs font-semibold tracking-wide">
                Call 0423 483 555
              </Link>
              <QuoteCta source="drilling close" className="flex items-center justify-center px-8 py-2.5 bg-white/5 text-white rounded-full shadow-[inset_0_0_0_1px_rgba(255,255,255,0.25)] hover:bg-white/10 hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.45)] transition-all hover:-translate-y-0.5 w-full sm:w-[280px] h-[46px] text-xs font-semibold tracking-wide backdrop-blur-sm" />
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
