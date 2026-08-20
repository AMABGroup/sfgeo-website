import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "../site-classification/MotionWrapper";

export const metadata: Metadata = {
  title: "Projects | Geotechnical Case Studies Sydney | SFGEO",
  description: "Real SFGEO projects across Sydney — rural estate investigations, problem-site foundations, remedial works in live buildings and council compliance, drawn from issued reports.",
  alternates: {
    canonical: '/projects',
  },
  openGraph: {
    title: "Projects | Geotechnical Case Studies Sydney | SFGEO",
    description: "Real SFGEO projects across Sydney — rural estate investigations, problem-site foundations, remedial works in live buildings and council compliance.",
    url: '/projects',
  },
  twitter: {
    title: "Projects | Geotechnical Case Studies Sydney | SFGEO",
    description: "Real SFGEO projects across Sydney — rural estate investigations, problem-site foundations, remedial works in live buildings and council compliance.",
  },
};

type CaseStudy = {
  id: string;
  tag: string;
  title: string;
  location: string;
  image: string;
  imageAlt: string;
  brief: string;
  ground: string;
  outcome: string;
  facts: string[];
};

const caseStudies: CaseStudy[] = [
  {
    id: "kenthurst",
    tag: "Geotechnical Investigation",
    title: "A rural estate, read hole by hole",
    location: "Kenthurst — 2-hectare rural-residential lot",
    image: "/projects/project-kenthurst.jpg",
    imageAlt: "SFGEO 4WD drill rig investigating a rural-residential estate lot in Kenthurst",
    brief:
      "A two-storey home, granny flat, gym, cabanas and a 216,000-litre infinity-edge pool, planned across a lot with five metres of fall — with the architect's design still live and every founding decision open.",
    ground:
      "Eight boreholes with our 4WD-mounted rig and eight penetrometer tests found high-plasticity reactive clays over Hawkesbury Sandstone, with every hole refusing on rock between 0.9 and 2.1 metres. NATA-accredited lab testing confirmed the reactivity and soil aggressivity.",
    outcome:
      "One report the whole design team works from: Class M classification, shallow footing and bored-pier bearing parameters, retaining wall design parameters for the terraced levels, uniform founding requirements for the pool, and pavement advice for the driveway. Reactive clay over shallow rock is exactly the profile that punishes guesswork — here it was mapped before a single footing was sized.",
    facts: ["8 boreholes + 8 DCPs", "NATA lab testing", "Class M", "Retaining wall + pool parameters"],
  },
  {
    id: "bexley-north",
    tag: "Limited-Scope Investigation",
    title: "The pod that needed different foundations",
    location: "Bexley North — rear-yard prefabricated dwelling",
    image: "/projects/project-bexley-north.jpg",
    imageAlt: "Hand-auger borehole investigation in a restricted-access Bexley North rear yard",
    brief:
      "A prefabricated-dwelling builder planned a rear-yard pod on screw piles. With less than 2.1 metres of clearance under the carport, no rig could reach the yard — so the investigation went in by hand auger and penetrometer.",
    ground:
      "The ground told a different story to the plans: uncontrolled fill with buried demolition concrete from decades-old pool works, a reactive clay band, a Sydney Water sewer crossing the yard, and sandstone at depth.",
    outcome:
      "Class P, and a clear call: screw piles were not recommended — refusal on buried obstructions and unreliable torque verification made them the wrong system for this ground. The report specified bored concrete piers socketed into rock instead, with two compliant pathways for the sewer crossing. Fieldwork to issued report in seven days.",
    facts: ["Zero-clearance access", "Class P", "Foundation system redesigned", "7-day turnaround"],
  },
  {
    id: "newport",
    tag: "Geotechnical Investigation",
    title: "Remedial works in a live building",
    location: "Newport — three-storey strata building near the beach",
    image: "/projects/project-newport.jpg",
    imageAlt: "Geotechnical fieldwork alongside an occupied strata building in Newport",
    brief:
      "Corroded balconies on an occupied 1960s walk-up needed demolition and reconstruction. The remedial contractor needed the certifier's geotechnical requirements closed out — and the Class H1, 100 kPa assumption on the structural drawings tested against the actual ground.",
    ground:
      "A hand-auger borehole and penetrometer tests along the eastern elevation, with the building in service throughout, found residual silty clays stiffening with depth over weathered Newport Formation rock.",
    outcome:
      "Class H1 confirmed — but the ground was better than assumed: 150 kPa in the stiff clays, with a bored-pier alternative at 400 kPa into weathered rock, plus articulation guidance for tying new footings to a sixty-year-old structure. The report was written item-by-item against the construction certificate requirements and externally peer reviewed.",
    facts: ["Live strata building", "CC requirements closed out", "Bearing upgraded from assumption", "Peer reviewed"],
  },
  {
    id: "oatley",
    tag: "Construction Phase Support",
    title: "Council orders, resolved",
    location: "Oatley — new dwelling under council enforcement",
    image: "/projects/project-oatley.jpg",
    imageAlt: "Footing excavation inspection at a Sydney residential construction site",
    brief:
      "A new build had stopped: a Stop Work Order, a certifier's directions notice, and council Development Control Orders over excavation near the boundary. The owners needed an engineering pathway back to work, in writing, that council and certifier would accept.",
    ground:
      "Footing inspections verified the exposed founding stratum as weathered sandstone bedrock suitable for the 700 kPa design bearing. A survey reconciliation of the excavation levels showed the reported over-excavation was largely work-in-progress levels, within tolerance where cuts were complete.",
    outcome:
      "An engineered reinstatement scope — clean fill only, compacted in controlled layers, stable batters — followed by inspection of the completed works. The inspection record found the reinstatement consistent with the scope and the landform stable, giving council and the certifier the documents the orders required.",
    facts: ["Stop Work Order lifted path", "700 kPa founding verified", "Reinstatement inspected", "Records issued against council orders"],
  },
];

export default function ProjectsPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": { "@id": "https://sfgeo.com.au/", "name": "Home" }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": { "@id": "https://sfgeo.com.au/projects", "name": "Projects" }
      }
    ]
  };

  return (
    <div className="bg-white text-slate-950 font-inter selection:bg-forest-green selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 lg:px-12 max-w-7xl mx-auto">
        <FadeIn className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.2em] text-forest-green mb-6 font-semibold">
            Selected projects &middot; Drawn from issued reports
          </p>
          <h1 className="text-4xl sm:text-6xl font-montserrat font-light tracking-tight leading-[1.1] mb-8">
            Proven on <span className="font-semibold">Sydney ground.</span>
          </h1>
          <div className="w-[96px] h-[3px] bg-forest-green mb-8" />
          <p className="text-lg sm:text-xl text-gray-600 font-light leading-relaxed">
            Every project below is real work from our issued reports: what the client needed, what the ground turned out to be, and what the engineering did about it. Client details are kept private.
          </p>
        </FadeIn>
      </section>

      {/* Case studies */}
      <section className="pb-8 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col gap-20">
          {caseStudies.map((cs, idx) => (
            <FadeIn key={cs.id}>
              <article
                id={cs.id}
                className={`flex flex-col ${idx % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-10 lg:gap-16 border-t border-gray-100 pt-16`}
              >
                {/* Image column */}
                <div className="lg:w-[44%] shrink-0">
                  <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_20px_50px_-20px_rgba(5,10,7,0.35)] lg:sticky lg:top-32">
                    <Image
                      src={cs.image}
                      alt={cs.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 44vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050A07]/60 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 p-6">
                      <p className="text-[11px] uppercase tracking-[0.25em] text-white/70 font-semibold mb-1">{cs.tag}</p>
                      <p className="text-white font-montserrat text-lg font-light">{cs.location.split(" — ")[0]}</p>
                    </div>
                  </div>
                </div>

                {/* Text column */}
                <div className="flex-1">
                  <p className="text-[11px] uppercase tracking-[0.25em] text-forest-green font-semibold mb-4">{cs.location}</p>
                  <h2 className="text-3xl sm:text-4xl font-montserrat font-light tracking-tight text-slate-950 mb-8">
                    {cs.title}
                  </h2>

                  <div className="space-y-8">
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-3">The brief</h3>
                      <p className="text-gray-600 font-light leading-relaxed">{cs.brief}</p>
                    </div>
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-3">On the ground</h3>
                      <p className="text-gray-600 font-light leading-relaxed">{cs.ground}</p>
                    </div>
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-forest-green mb-3">The outcome</h3>
                      <p className="text-slate-800 font-light leading-relaxed">{cs.outcome}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2.5 mt-8">
                    {cs.facts.map((fact) => (
                      <span
                        key={fact}
                        className="px-4 py-1.5 rounded-full bg-forest-green/[0.06] text-forest-green text-xs font-medium tracking-wide"
                      >
                        {fact}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Close CTA */}
      <section className="mt-24 py-24 px-6 lg:px-12 bg-[#050A07] text-white rounded-t-[3rem] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(45,90,58,0.15),transparent)] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <FadeIn>
            <h2 className="text-4xl sm:text-6xl font-montserrat font-light tracking-tight mb-8">
              Your ground has a <span className="font-semibold">story too.</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 font-light leading-relaxed max-w-2xl mx-auto mb-12">
              Every one of these projects started the same way — a conversation with the Principal Engineer about a block of land and what it needs to carry.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href="/contact"
                className="flex items-center justify-center px-8 py-2.5 bg-gradient-to-b from-[#346b43] to-forest-green text-white rounded-full shadow-[0_8px_20px_-6px_rgba(45,90,58,0.4)] hover:shadow-[0_12px_24px_-8px_rgba(45,90,58,0.6)] hover:brightness-105 transition-all hover:-translate-y-0.5 w-full sm:w-[280px] h-[46px] text-xs font-semibold tracking-wide"
              >
                Start your project
              </Link>
              <Link
                href="tel:+61423483555"
                className="flex items-center justify-center px-8 py-2.5 bg-white text-forest-green rounded-full shadow-[inset_0_0_0_1px_rgba(45,90,58,0.25),0_4px_10px_-4px_rgba(0,0,0,0.05)] hover:bg-forest-green/5 hover:shadow-[inset_0_0_0_1px_rgba(45,90,58,0.4),0_6px_14px_-4px_rgba(0,0,0,0.1)] transition-all hover:-translate-y-0.5 w-full sm:w-[280px] h-[46px] text-xs font-semibold tracking-wide"
              >
                Call the Principal Engineer
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
