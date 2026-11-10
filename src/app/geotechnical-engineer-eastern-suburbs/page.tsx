import { Metadata } from "next";
import RegionPage, { type RegionPageData } from "@/components/sections/RegionPage";
import { pageMeta } from "@/lib/seo";

// Rebuilt hourly from the stored Google rating (src/lib/googleReviews.ts).
export const revalidate = 3600;

export const metadata: Metadata = pageMeta(
  "Geotechnical Engineer Eastern Suburbs Sydney | SFGEO",
  "Site classifications, investigations and pier inspections in Sydney's Eastern Suburbs, from real SFGEO jobs. Fixed fee in writing within one business day.",
  "/geotechnical-engineer-eastern-suburbs",
);

// Each card is written from that job's issued report or inspection record only (jobs and photographs
// chosen by Alli, 11 Nov 2026): Randwick SFG-2026-129-GI-R01.v2, Coogee SFG-2026-102-SC-R01.v2 and
// SFG-2609-102-PI01, Kensington SFG-2026-127-GI-R01.v1. No figure appears that the record does not support.
const REGION: RegionPageData = {
  slug: "geotechnical-engineer-eastern-suburbs",
  name: "Eastern Suburbs",
  source: "eastern-suburbs",
  kicker: "Eastern Suburbs · Principal-Led · Sydney",
  intro: (
    <>
      Site classifications, geotechnical investigations and pier inspections from Randwick and Coogee to Kensington. Most of what we test here is sand, and the question is how deep it stays loose. This is what we found on our own jobs. Each result belongs to its site, so send us your address and we will read yours.
    </>
  ),
  feature: {
    src: "/sfgeo-rig-verge-night-coogee.jpg",
    alt: "SFGEO drill rig parked on a steep street verge at night above Coogee, the lights of the Eastern Suburbs behind",
    caption: "Night Set-Up · Coogee",
  },
  jobs: [
    {
      service: "Geotechnical Investigation",
      title: "Loose Sand, Read For Screw Piles",
      meta: "Randwick · rear extension, garage and pool on screw piles",
      paras: [
        { label: "The brief.", text: "A two-level rear extension, a garage with a studio above on the rear lane, and an in-ground pool, all carried on steel screw piles. The piling design needed the depth of dense sand and of rock." },
        { label: "On the ground.", text: "Four rig boreholes with penetrometer tests found up to 0.8 metres of fill over loose sand, then clayey sand becoming dense from about 2.4 to 2.7 metres, to auger refusal on inferred weathered sandstone at 3.65 to 4.1 metres. At the lane end, wet sand sat above inferred rock at 3.1 metres." },
        { label: "The outcome.", text: "Class P under AS 2870, because the loose sand cannot carry footings at practical depths. The report set screw pile parameters area by area, with the pool, shoring, earth pressures and groundwater control for the excavations." },
      ],
      facts: "4 rig boreholes with penetrometer tests · Class P · Screw pile parameters by area",
      photo: {
        src: "/sfgeo-sand-profile-board-randwick.jpg",
        alt: "Borehole profile laid out on a timber board at Randwick, dark sandy fill grading to pale sand",
        caption: "Sand Profile · Randwick",
      },
    },
    {
      service: "Site Classification · Pier Inspection",
      title: "Dune Sand, Then Every Pier Base Checked",
      meta: "Coogee · rear extension and second storey",
      paras: [
        { label: "The brief.", text: "A ground-floor rear extension and a second storey over the existing house, with a carport and a low retaining wall at the street. The classification supported the construction certificate." },
        { label: "On the ground.", text: "Two hand-auger boreholes and a hand-dug hole found up to a metre of uncontrolled fill with building debris over very loose to loose sand, with no clay to two metres. When the structural engineer asked about a higher end bearing for the bored piers, three more penetrometer tests found medium dense sand from about 2.3 metres." },
        { label: "The outcome.", text: "Class P under AS 2870, with deepened footings. Before concrete, eight 450 millimetre pier bases were inspected: each at least 2.5 metres below ground in natural sand, clean and dry." },
      ],
      facts: "2 hand-auger boreholes + 6 DCPs · Class P · 8 pier bases inspected before concrete",
      photo: {
        src: "/sfgeo-pier-hole-auger-coogee.jpg",
        alt: "Auger lifting yellow sand out of a bored pier hole beside a new retaining wall in Coogee",
        caption: "Pier Hole · Coogee",
      },
    },
    {
      service: "Geotechnical Investigation",
      title: "Sand, Water And A Pool On Screw Piles",
      meta: "Kensington · in-ground pool beside a retained garage",
      paras: [
        { label: "The brief.", text: "An in-ground pool beside a garage kept as a pool house, with the shell carried on steel screw piles. The structural engineer needed the ground and groundwater conditions and the parameters for the piles and for uplift on the shell." },
        { label: "On the ground.", text: "Two hand-auger boreholes and two penetrometer tests, one beside the garage and one in the shored pool area. Very loose silty sand of the Botany Sands, with the water table at about the level of the pool base and medium dense sand from some 1.9 metres below it." },
        { label: "The outcome.", text: "Class P under AS 2870 for the garage and any new ground-supported work. The report gave the screw pile parameters and the design basis for the shell against uplift." },
      ],
      facts: "2 hand-auger boreholes + 2 DCPs · Class P · Screw pile and uplift parameters",
      photo: {
        src: "/sfgeo-dcp-shored-pool-excavation-kensington.jpg",
        alt: "Penetrometer test inside a shored pool excavation at Kensington, the engineer seen from behind",
        caption: "Shored Excavation · Kensington",
      },
    },
  ],
  services: [
    { title: "Site Classification", desc: "AS 2870 site classifications for homes, extensions, pools and granny flats.", href: "/site-classification" },
    { title: "Geotechnical Investigations", desc: "Investigations to AS 1726 for DAs, CDCs, basements, pools and screw pile designs.", href: "/geotechnical-investigations" },
    { title: "Construction Phase Support", desc: "Footing and pier inspections, up to the last one before the pour.", href: "/construction-phase-support" },
    { title: "Tight Access", desc: "Motorised hand augers carry through a standard doorway or side passage, so courtyards and rear yards can be investigated without vehicle access.", href: "/tight-access-drilling" },
    { title: "Testing", desc: "Dynamic cone penetrometer testing, and NATA-accredited laboratory testing where the design calls for it." },
  ],
  faqs: [
    {
      q: "Why do so many Eastern Suburbs blocks come out Class P?",
      a: "Loose sand is the usual reason. AS 2870 asks for a minimum bearing capacity at practical footing depths, and loose dune sand often cannot give it, so the site is classified Class P and the footings are designed by engineering. Our recent Randwick, Coogee and Kensington jobs all came out Class P on that basis. Site classifications start from $800 + GST.",
    },
    {
      q: "What does a screw pile design need from the geotechnical report?",
      a: "The depth of dense sand and of rock, and the ground parameters with depth, so the piling contractor can set each pile's capacity and founding level. On loose sand that is the whole question. At Randwick the report gave screw pile parameters area by area, from rig boreholes taken to refusal on inferred weathered sandstone. Investigations are a fixed fee in writing within one business day.",
    },
    {
      q: "Can you test a courtyard or rear yard with no vehicle access?",
      a: "Yes. Motorised hand augers carry through a standard doorway or side passage, so a courtyard or rear yard can be tested where the rig cannot go. The Coogee and Kensington jobs on this page were both done by hand. The 4WD-mounted rig drills wherever it can reach. More on tight access drilling.",
      link: { text: "tight access drilling", href: "/tight-access-drilling" },
    },
  ],
  closeSub: <>Send the address. The desktop geology and the access are checked before we quote.</>,
  schemaDescription: "Site classifications, geotechnical investigations and pier inspections in Sydney's Eastern Suburbs, led by the Principal Engineer.",
  areaServed: "Eastern Suburbs, Sydney, New South Wales, Australia",
};

export default function EasternSuburbsPage() {
  return <RegionPage region={REGION} />;
}
