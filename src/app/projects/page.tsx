import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "../site-classification/MotionWrapper";

export const metadata: Metadata = {
  title: "Projects | Geotechnical Case Studies Sydney | SFGEO",
  description: "Real SFGEO projects across Sydney — estate investigations, problem-site foundations, remedial works and council compliance, drawn from issued reports.",
  alternates: {
    canonical: '/projects',
  },
  openGraph: {
    images: ['/og/sfgeo-og-card.jpg'],
    title: "Projects | Geotechnical Case Studies Sydney | SFGEO",
    description: "Real SFGEO projects across Sydney — estate investigations, problem-site foundations, remedial works and council compliance, drawn from issued reports.",
    url: '/projects',
  },
  twitter: {
    card: "summary_large_image",
    images: ['/og/sfgeo-og-card.jpg'],
    title: "Projects | Geotechnical Case Studies Sydney | SFGEO",
    description: "Real SFGEO projects across Sydney — estate investigations, problem-site foundations, remedial works and council compliance, drawn from issued reports.",
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
    title: "A Rural Estate, Read Hole By Hole",
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
    title: "The Pod That Needed Different Foundations",
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
    title: "Remedial Works In A Live Building",
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
    title: "Council Orders, Resolved",
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
  {
    id: "bondi-beach",
    tag: "Limited-Scope Investigation",
    title: "A Plunge Pool Cut Into Rock",
    location: "Bondi Beach — strata courtyard, metres from a four-storey block",
    image: "/projects/project-bondi.jpg",
    imageAlt: "Hand-auger investigation in a Bondi Beach strata courtyard",
    brief:
      "An apartment owner wanted a plunge pool dug 1.8 metres into an exclusive-use courtyard — with the building on one side and a Sydney Water sewer main crossing the yard. The certifier needed a classification and an excavation methodology.",
    ground:
      "A hand-auger borehole and two penetrometer tests told a consistent story fast: barely 250 millimetres of soil before refusal on Hawkesbury Sandstone. The whole excavation would be in rock, and dry.",
    outcome:
      "Class A — the best classification the standard offers — with 700 kPa bearing for the shell on sandstone. Because the neighbours were a four-storey building and a brittle heritage-era sewer, the report set vibration limits, exclusion zones and rock-saw methodology near the assets. Report issued the next day.",
    facts: ["Class A on rock", "Vibration limits set", "Sewer main protected", "Next-day report"],
  },
  {
    id: "coogee",
    tag: "Geotechnical Investigation",
    title: "A Pile Wall Designed From The Street",
    location: "Coogee — five metres of fall, street to rear",
    image: "/projects/project-coogee.jpg",
    imageAlt: "Drilling from the road verge above a steep Coogee allotment",
    brief:
      "A steeply falling block needed a contiguous bored pile wall along its street boundary. The structural engineer needed the full parameter set — soil profile, bearing, groundwater, earth pressures — and the only place to drill was the council verge above the wall.",
    ground:
      "With council approval and service scanning arranged, one borehole to 5.6 metres found 1.5 metres of debris-laced fill, very loose coastal sands, then sandstone — exactly the collapse-prone profile that decides how piles get built.",
    outcome:
      "A complete AS 4678 design table: unit weights, strength values, pressure coefficients per stratum, and 1,000 kPa end bearing in sandstone — plus construction guidance for casing through the running sands. Issued 48 hours after fieldwork.",
    facts: ["Drilled from council verge", "1,000 kPa end bearing", "Full AS 4678 parameter set", "48-hour turnaround"],
  },
  {
    id: "auburn",
    tag: "Geotechnical Investigation",
    title: "Sixty Tonnes In A Working Factory",
    location: "Auburn — operating dairy plant, production running",
    image: "/projects/project-auburn.jpg",
    imageAlt: "Borehole through the concrete yard of an operating Auburn factory",
    brief:
      "A food manufacturer needed a 54,000-litre milk tank — about sixty tonnes at working load — founded in the paved yard of an operating factory, beside an in-service tank and a neighbour’s basement behind a boundary wall.",
    ground:
      "One borehole through the reinforced concrete pavement to 4.7 metres: reactive Bringelly Shale clay over weathered shale. The clay was ruled out as a founding stratum — localised wetting is a fact of life in a dairy yard.",
    outcome:
      "The tank went onto bored piers socketed into weathered shale — 400 to 700 kPa end bearing with shaft adhesion values — with dilapidation surveys recommended for the boundary wall. Issued in two days and independently reviewed by a Registered Professional Geotechnical engineer.",
    facts: ["60-tonne tank load", "Piers socketed in shale", "Live factory yard", "Peer-reviewed"],
  },
  {
    id: "hunters-hill",
    tag: "Investigation For A Consultancy",
    title: "A Boardwalk Read Between Tides",
    location: "Hunters Hill — tidal mangroves, Buffalo Creek Reserve",
    image: "/projects/project-hunters-hill.jpg",
    imageAlt: "Boardwalk through the tidal mangroves at Buffalo Creek Reserve",
    brief:
      "A civil consultancy replacing a public boardwalk on the Great North Walk had two footing systems on the table — on-grade sleepers or elevated posts — and needed to know which belonged where along 300 metres of tidal wetland.",
    ground:
      "No vehicle access and a sensitive ecology meant everything was done by hand, between tides: test pit, hand augers and nine penetrometer tests across four segments. The ground swung from very soft saturated mud beyond two metres deep to sandstone within 40 millimetres of the surface.",
    outcome:
      "A segment-by-segment founding map the designer applied directly — on-grade on rock at one end, cased bored piers through the soft alluvium elsewhere — with acid sulfate management and tidal work sequencing built in. The variation in the ground became the design’s organising principle.",
    facts: ["All-manual investigation", "Worked between tides", "4 segments mapped", "Direct input to another consultancy’s design"],
  },
  {
    id: "northmead",
    tag: "Construction Phase Support",
    title: "A New Home For A Congregation",
    location: "Northmead — church expansion, new ministry building",
    image: "/projects/project-northmead.jpg",
    imageAlt: "Footing-level inspection during the church expansion works",
    brief:
      "A church in Sydney’s north-west outgrew its walls. The expansion — a new ministry building for the congregation — needed its earthworks verified layer by layer, and the base of a ten-metre detention tank confirmed at footing level before concrete.",
    ground:
      "Compaction of the engineered fill was verified against the 98% Standard specification as the platform rose, and the tank base was logged by visual and tactile assessment on a wet morning: weathered shale, banded, matching the bedrock profile the design relied on.",
    outcome:
      "Founding confirmed suitable for the specified 500 kPa and the contractor approved to proceed the same visit, with clear validity conditions covering rain and base softening. A standing engagement that follows the build — so a building the whole community will use stands on ground that was checked at every stage.",
    facts: ["500 kPa verified", "98% Standard compaction", "Same-visit approval", "Community building"],
  },
  {
    id: "willoughby",
    tag: "Site Classification",
    title: "Dual Occupancy On Reactive Clay",
    location: "Willoughby — demolition, pool removal, two new dwellings",
    image: "/projects/project-willoughby.jpg",
    imageAlt: "Site classification fieldwork at a Willoughby block",
    brief:
      "A two-storey dual occupancy was planned: existing house demolished, in-ground pool removed and backfilled. The design team needed a classification and founding parameters before drawings could progress.",
    ground:
      "Two boreholes — rig at the front, hand auger at the rear — and three penetrometer tests found classic Ashfield Shale country: high-plasticity residual clay stiffening with depth. No groundwater to three metres.",
    outcome:
      "Class H1 with 60-millimetre characteristic movement, shallow and pier bearing values, and answers to the two complications that mattered: founding through the old pool excavation, and rear-boundary trees inside the footing zone of influence. Fieldwork to report in three days.",
    facts: ["Class H1 (ys 60 mm)", "Pool backfill handled", "Tree influence zones mapped", "3-day turnaround"],
  },
  {
    id: "blakehurst",
    tag: "Night Works · Construction Phase Support",
    title: "The Footing That Said No",
    location: "Blakehurst — traffic signal upgrade, King Georges Road",
    image: "/projects/project-blakehurst-night.jpg",
    imageAlt: "Signal pole footing excavation behind barriers at a closed intersection at night",
    brief:
      "A new mast arm — the pole that carries the signals and camera over six lanes of State road — needed its footing verified at depth. The excavation could only be opened at night, under closure, with the road due back to traffic by morning.",
    ground:
      "At footing depth, the ground was read against the standard’s acceptance criteria — 150 kPa vertical bearing and lateral strength over the full footing depth, in undisturbed soil. It didn’t meet them. Not marginal, not arguable: the standard footing detail could not be used.",
    outcome:
      "The not-suitable call was made on site that night, the excavation backfilled and the road reopened for the morning peak. The record set out the engineering path forward — a specific footing design in place of the standard detail — because a pole holding signals over six lanes should stand on verified ground, not hope. On the same programme, sister intersections passed and proceeded.",
    facts: ["Night closure works", "150 kPa criteria checked at depth", "Not-suitable call made on site", "Road open by morning"],
  },
  {
    id: "telopea",
    tag: "Subcontract Drilling",
    title: "Five Holes Down A Living Street",
    location: "Telopea — public-domain investigation, Benaud Place",
    image: "/projects/project-telopea.jpg",
    imageAlt: "SFGEO rig drilling from a grass verge on a residential street in Telopea",
    brief:
      "One of the bigger testing firms in Sydney ground needed five boreholes along a residential street in a renewing suburb — drilled, sampled and handed over clean, without shutting the street down around the people who live on it.",
    ground:
      "The 4WD rig worked hole to hole along the verge — five boreholes with penetrometer tests at termination, services located before the first flight turned, footpaths kept open, every location reinstated before the rig moved on.",
    outcome:
      "Logs, samples and surveyed coordinates delivered the same week, feeding the investigation that sits under the street’s renewal. The residents saw cones for a day; the engineering under their street lasts decades.",
    facts: ["5 boreholes + 5 DCPs", "One-day mobilisation", "Live street, footpaths open", "Subcontract capacity"],
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
            Proven On <span className="font-semibold">Sydney Ground.</span>
          </h1>
          <div className="w-[96px] h-[3px] bg-forest-green mb-8" />
          <p className="text-lg sm:text-xl text-gray-600 font-light leading-relaxed">
            Every project below is real work from our issued reports: what the client needed, what the ground turned out to be, and what the engineering did about it. Some of it is for owners and builders; some of it is simply for the community — the signals over the road, the street being renewed, the church hall going up. Client details are kept private.
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
      <section className="relative overflow-hidden bg-[#050A07] text-white grain">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(45,90,58,0.3),transparent_60%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center px-6 py-28 lg:py-32 relative z-10">
          <FadeIn>
            <h2 className="text-4xl sm:text-6xl font-montserrat font-light tracking-tight mb-8">
              Your Ground Has A <span className="font-semibold">Story Too.</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 font-light leading-relaxed max-w-2xl mx-auto mb-12">
              Every one of these projects started the same way — a conversation with the Principal Engineer about a block of land and what it needs to carry.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href="/contact"
                className="flex items-center justify-center px-8 py-2.5 bg-gradient-to-b from-[#346b43] to-forest-green text-white rounded-full shadow-[0_8px_20px_-6px_rgba(45,90,58,0.4)] hover:shadow-[0_12px_24px_-8px_rgba(45,90,58,0.6)] hover:brightness-105 transition-all hover:-translate-y-0.5 w-full sm:w-[280px] h-[46px] text-xs font-semibold tracking-wide"
              >
                Start Your Project
              </Link>
              <Link
                href="tel:+61423483555"
                className="flex items-center justify-center px-8 py-2.5 bg-white/5 text-white rounded-full shadow-[inset_0_0_0_1px_rgba(255,255,255,0.25)] hover:bg-white/10 hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.45)] transition-all hover:-translate-y-0.5 w-full sm:w-[280px] h-[46px] text-xs font-semibold tracking-wide backdrop-blur-sm"
              >
                Call The Principal Engineer
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
