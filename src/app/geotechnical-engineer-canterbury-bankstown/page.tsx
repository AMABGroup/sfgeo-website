import { Metadata } from "next";
import RegionPage, { type RegionPageData } from "@/components/sections/RegionPage";
import { pageMeta } from "@/lib/seo";

// Rebuilt hourly from the stored Google rating (src/lib/googleReviews.ts).
export const revalidate = 3600;

export const metadata: Metadata = pageMeta(
  "Geotechnical Engineer Canterbury-Bankstown | SFGEO",
  "Geotechnical investigations and site classifications from Picnic Point to Panania and Campsie, from real SFGEO jobs. Site classifications from $800 + GST.",
  "/geotechnical-engineer-canterbury-bankstown",
);

// Each card is written from that job's issued report only (jobs and photographs chosen by Alli,
// 11 Nov 2026; Campsie cleared by him): Picnic Point SFG-2026-083-GI-R01.v1, Panania SFG-2026-050-SC-R01,
// Campsie SFG-2026-BEL-SC-R01.
const REGION: RegionPageData = {
  slug: "geotechnical-engineer-canterbury-bankstown",
  name: "Canterbury-Bankstown",
  source: "canterbury-bankstown",
  kicker: "Canterbury-Bankstown · Principal-Led · Sydney",
  intro: (
    <>
      Geotechnical investigations and site classifications from Picnic Point on the Georges River to Panania and Campsie, with acid sulfate soil screening where the mapping calls for it. This is what we found on our own jobs here. Each result belongs to its site, so send us your address and we will read yours.
    </>
  ),
  feature: {
    src: "/sfgeo-rig-river-track-picnic-point.jpg",
    alt: "SFGEO drill rig on a riverside track at Picnic Point, the Georges River and bushland behind",
    caption: "Georges River · Picnic Point",
  },
  jobs: [
    {
      service: "Geotechnical Investigation",
      title: "Basements Cut Down To Sandstone",
      meta: "Picnic Point · dual occupancy with shared basements, near the Georges River",
      paras: [
        { label: "The brief.", text: "Two dwellings with shared basement garages, a lower subfloor level, a pool and retaining walls, on a large lot running down towards the Georges River. The scope included acid sulfate soil screening." },
        { label: "On the ground.", text: "Four rig boreholes met refusal on weathered sandstone between about 0.5 and 3.0 metres, with sandstone outcropping across the site. Up to a metre of fill lay over clayey sand at the road end and stiff to very stiff residual clay towards the river. Ten samples screened for acid sulfate soils showed no reaction." },
        { label: "The outcome.", text: "Class M. Both basement levels sit at or below the top of rock over most of the footprint, so most of the reactive clay is dug away. On the evidence, no acid sulfate soil management plan was needed." },
      ],
      facts: "4 rig boreholes + 4 DCPs · 10 acid sulfate screening samples · Class M",
      photo: {
        src: "/sfgeo-rig-riverbank-picnic-point.jpg",
        alt: "SFGEO drill rig on the riverbank at Picnic Point, a crew member in hi-vis beside it and the river behind",
        caption: "Riverbank · Picnic Point",
      },
    },
    {
      service: "Site Classification",
      title: "A Duplex On Clay Over Shallow Shale",
      meta: "Panania · two-storey duplex on raft slabs",
      paras: [
        { label: "The brief.", text: "A two-storey attached duplex on raft slabs, replacing the existing house." },
        { label: "On the ground.", text: "Three hand-auger boreholes and three penetrometer tests found 0.3 to 0.4 metres of topsoil and minor fill over residual silty clay of medium to high plasticity. Refusal came on extremely weathered shale at about 0.9 metres in one hole and 1.8 metres in another. No groundwater was met." },
        { label: "The outcome.", text: "Class M, moderately reactive, with the topsoil and minor fill removed from beneath all footings and slabs." },
      ],
      facts: "3 hand-auger boreholes + 3 DCPs · Class M · Shale from 0.9 metres",
      photo: {
        src: "/sfgeo-hand-auger-garden-bed-panania.jpg",
        alt: "Hand auger standing in a garden bed at Panania, red-brown clay spoil piled beside the hole",
        caption: "Hand Auger · Panania",
      },
    },
    {
      service: "Site Classification",
      title: "A Rear Addition On Highly Reactive Clay",
      meta: "Campsie · single-storey rear addition",
      paras: [
        { label: "The brief.", text: "A single-storey addition to the rear of a house that stays. The report was to check the site class assumed on the structural drawings." },
        { label: "On the ground.", text: "Two hand-auger boreholes and two penetrometer tests inside the footprint. Topsoil over residual silty clay of medium to high plasticity, becoming grey-red high-plasticity clay with ironstone gravel below 0.8 metres. No fill was found." },
        { label: "The outcome.", text: "Class H1, highly reactive, under AS 2870, with foundation parameters and allowable bearing pressures for the new footings." },
      ],
      facts: "2 hand-auger boreholes + 2 DCPs · Class H1 · No fill encountered",
      photo: {
        src: "/sfgeo-dcp-backyard-campsie.jpg",
        alt: "Penetrometer standing on the lawn of a Campsie rear yard, augers and a spade laid on the grass",
        caption: "Rear Yard · Campsie",
      },
    },
  ],
  services: [
    { title: "Geotechnical Investigations", desc: "Investigations to AS 1726 for DAs, CDCs, basements and dual occupancies.", href: "/geotechnical-investigations" },
    { title: "Site Classification", desc: "AS 2870 site classifications for duplexes, additions and granny flats.", href: "/site-classification" },
    { title: "Environmental Testing", desc: "Acid sulfate soil screening and contaminated land testing through NATA-accredited laboratories.", href: "/environmental" },
    { title: "Tight Access", desc: "Motorised hand augers carry through a standard doorway or side passage, so rear yards can be investigated without vehicle access.", href: "/tight-access-drilling" },
    { title: "Construction Phase Support", desc: "Footing and pier inspections, up to the last one before the pour.", href: "/construction-phase-support" },
  ],
  faqs: [
    {
      q: "Do sites near the Georges River need acid sulfate soil testing?",
      a: "Sometimes. Where the mapping flags acid sulfate soils, samples are screened by a NATA-accredited laboratory as part of the same investigation. At Picnic Point ten samples showed no reaction, with field pH from slightly acidic to neutral, so no management plan was needed on the evidence. More on environmental and acid sulfate soil testing.",
      link: { text: "environmental and acid sulfate soil testing", href: "/environmental" },
    },
    {
      q: "What site class do Canterbury-Bankstown homes usually get?",
      a: "It depends on how deep the clay goes. On our recent jobs, Panania came out Class M with shale from about 0.9 metres, and Campsie Class H1 with deeper high-plasticity clay. A duplex and a rear addition both need the class before the footings are designed. Site classifications start from $800 + GST.",
    },
    {
      q: "Does a basement remove the reactive clay problem?",
      a: "Largely, where it reaches rock. At Picnic Point the boreholes met weathered sandstone at about 0.5 to 3.0 metres, and both basement levels sit at or below the top of rock over most of the footprint, so most of the reactive clay is excavated away. Footings and slabs outside the basement still follow the site class.",
    },
  ],
  closeSub: <>Send the address. The desktop geology is checked before we even quote.</>,
  schemaDescription: "Geotechnical investigations and site classifications across Canterbury-Bankstown, led by the Principal Engineer.",
  areaServed: "Canterbury-Bankstown, Sydney, New South Wales, Australia",
};

export default function CanterburyBankstownPage() {
  return <RegionPage region={REGION} />;
}
