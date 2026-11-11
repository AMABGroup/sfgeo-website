import { Metadata } from "next";
import RegionPage, { type RegionPageData } from "@/components/sections/RegionPage";
import { pageMeta } from "@/lib/seo";

// Rebuilt hourly from the stored Google rating (src/lib/googleReviews.ts).
export const revalidate = 3600;

export const metadata: Metadata = pageMeta(
  "Geotechnical Engineer Hills District Sydney | SFGEO",
  "Soil tests, site classifications and investigations in the Hills District, from Castle Hill to Kenthurst. Site classifications from $800 + GST.",
  "/geotechnical-engineer-hills-district",
);

// Each card is written from that job's issued report or field log only (jobs and photographs chosen by
// Alli, 11 Nov 2026; Kenthurst on his call over Baulkham Hills): Castle Hill SFG-2026-136-SC-R01.v1,
// Canoelands SFG-2026-079-DR-R01.v1 (drilling for a consultancy), Kenthurst SFG-2026-068-GI-R01.
const REGION: RegionPageData = {
  slug: "geotechnical-engineer-hills-district",
  name: "Hills District",
  source: "hills-district",
  kicker: "Hills District · Principal-Led · Sydney",
  intro: (
    <>
      Site classifications and geotechnical investigations from Castle Hill to Kenthurst and the rural lots beyond, plus drilling for other consultancies. The rig works vacant lots and open paddocks alike. This is what we found on our own jobs here. Each result belongs to its site, so send us your address and we will read yours.
    </>
  ),
  feature: {
    src: "/sfgeo-rig-paddock-canoelands.jpg",
    alt: "SFGEO 4WD-mounted drill rig with its mast raised in a dry paddock at Canoelands, gum trees behind in early light",
    caption: "Rig Set-Up · Canoelands",
  },
  jobs: [
    {
      service: "Site Classification",
      title: "A New Home And Pool On Clay Over Shale",
      meta: "Castle Hill · two-storey home and pool on a vacant lot",
      paras: [
        { label: "The brief.", text: "A two-storey brick veneer home with an in-ground pool and spa on a vacant lot, the base of the pool shell about two metres below the existing ground." },
        { label: "On the ground.", text: "Two rig boreholes to 3.0 metres and two penetrometer tests. Up to 0.5 metres of fill over stiff to very stiff residual clay, then extremely weathered material and very low strength shale from 1.4 to 1.5 metres, proven to the base of both holes." },
        { label: "The outcome.", text: "Class P as it stands, because of the fill. Reclassified Class M once the fill is cleared from beneath the footings and slab, with foundation parameters for the house and the pool." },
      ],
      facts: "2 rig boreholes + 2 DCPs · Class M once the fill is cleared · Shale from 1.4 metres",
      photo: {
        src: "/sfgeo-auger-sandy-spoil-castle-hill.jpg",
        alt: "Auger spinning pale spoil out of a borehole beside a spoil tray on a vacant lot at Castle Hill",
        caption: "Auger · Castle Hill",
      },
    },
    {
      service: "Drilling For A Consultancy",
      title: "Shallow Rock On A Rural Lot",
      meta: "Canoelands · lot classification for a home and shed, for a consultancy",
      paras: [
        { label: "The brief.", text: "A consultancy needed boreholes for the classification of a rural lot ahead of a new home and shed. We drilled, tested and logged; the consultancy wrote the classification." },
        { label: "On the ground.", text: "Three boreholes with the 4WD-mounted rig and three penetrometer tests. Thin topsoil or fill over clayey sand and sandy clay with ironstone gravel, with auger refusal at 0.6 to 1.2 metres, two of the holes on very low strength sandstone. All three were dry." },
        { label: "The outcome.", text: "The field logs were issued on the day of drilling, for the consultancy's report." },
      ],
      facts: "3 boreholes + 3 DCPs · Refusal at 0.6 to 1.2 metres · Logs issued the same day",
      photo: {
        src: "/sfgeo-auger-flight-canoelands.jpg",
        alt: "Auger flight coated in yellow sandy soil at the back of the SFGEO rig in a dry paddock at Canoelands",
        caption: "Auger Flight · Canoelands",
      },
    },
    {
      service: "Geotechnical Investigation",
      title: "Reactive Clay, Held In Check By Shallow Rock",
      meta: "Kenthurst · new home, granny flat and pool on a two-hectare lot",
      paras: [
        { label: "The brief.", text: "A two-storey home with a granny flat, gym, cabanas, pool and spa, and terraced entertaining areas, across about five metres of fall on a rural lot." },
        { label: "On the ground.", text: "Eight rig boreholes and eight penetrometer tests across both terrace levels, set out around livestock and the existing house. High-plasticity residual clay over clayey sand, with auger refusal on inferred extremely weathered sandstone at 0.9 to 2.1 metres. Every hole was dry." },
        { label: "The outcome.", text: "NATA-accredited laboratory testing confirmed a reactive clay, but the clay mantle is thin and the rock shallow, which limits the movement it can deliver. Class M, with the upper bound of the class adopted for design." },
      ],
      facts: "8 rig boreholes + 8 DCPs · NATA-accredited laboratory testing · Class M",
      photo: {
        src: "/sfgeo-rig-paddock-kenthurst.jpg",
        alt: "SFGEO 4WD-mounted rig crossing a green paddock at Kenthurst, trees and a post-and-rail fence behind",
        caption: "Paddock · Kenthurst",
      },
    },
  ],
  services: [
    { title: "Site Classification", desc: "The soil test a certifier asks for: AS 2870 site classifications for new homes, pools and granny flats.", href: "/site-classification" },
    { title: "Geotechnical Investigations", desc: "Investigations to AS 1726 for DAs, CDCs, retaining walls, pools and acreage homes.", href: "/geotechnical-investigations" },
    { title: "Testing", desc: "Dynamic cone penetrometer testing, and NATA-accredited laboratory testing where the design calls for it." },
    { title: "Drilling For Consultancies", desc: "Boreholes drilled and logged on the 4WD-mounted rig for other consultancies' reports.", href: "/subcontract-drilling" },
    { title: "Construction Phase Support", desc: "Footing and pier inspections, up to the last one before the pour.", href: "/construction-phase-support" },
  ],
  faqIntro: "Geotechnical engineers based in Marrickville, working across the Hills District from Castle Hill to Kenthurst.",
  faqs: [
    {
      q: "What site class do Hills District homes usually get?",
      a: "There is no single answer, so each block is tested. Our recent Hills jobs found clay over shale or sandstone: Castle Hill came out Class M once the fill is cleared, and Kenthurst Class M, with shallow rock limiting movement. Site classifications start from $800 + GST, with reports as soon as 2 business days from fieldwork.",
    },
    {
      q: "Do I need geotechnical advice for a pool in the Hills?",
      a: "Usually, yes. A pool shell is designed by engineering, and the designer needs the founding conditions at shell depth as well as the site class for the house. At Castle Hill the base of the pool sits about two metres below the ground, and the one report gave foundation parameters for the house and the pool together.",
    },
    {
      q: "Can the rig work on a rural or sloping lot?",
      a: "Yes. The 4WD-mounted rig drills open paddocks and sloping rural lots, and the test positions are set out around livestock, sheds and existing houses. At Kenthurst eight boreholes were spread across two terrace levels of a lot with about five metres of fall. Where the rig cannot reach, motorised hand augers carry the work through gates and side passages.",
    },
  ],
  closeSub: <>Send the address. The desktop geology is checked before we even quote.</>,
  schemaDescription: "Site classifications, geotechnical investigations and drilling across the Hills District, led by the Principal Engineer.",
  areaServed: "Hills District, Sydney, New South Wales, Australia",
};

export default function HillsDistrictPage() {
  return <RegionPage region={REGION} />;
}
