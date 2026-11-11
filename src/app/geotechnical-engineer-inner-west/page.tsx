import { Metadata } from "next";
import RegionPage, { type RegionPageData } from "@/components/sections/RegionPage";
import { pageMeta } from "@/lib/seo";

// Rebuilt hourly from the stored Google rating (src/lib/googleReviews.ts).
export const revalidate = 3600;

export const metadata: Metadata = pageMeta(
  "Geotechnical Engineer Inner West Sydney | SFGEO",
  "Soil tests, site classifications and footing inspections across the Inner West, from our Marrickville office. Site classifications from $800 + GST.",
  "/geotechnical-engineer-inner-west",
);

// Each card is written from that job's issued report or inspection records only (jobs and photographs
// chosen by Alli, 11 Nov 2026; B-grade photographs accepted by him, no wide band): Burwood
// SFG-2026-119-GI-R01.v1, Newtown SFG-2026-P041-FI01 and FI02, Marrickville SFG-2026-120-SC-R01.v1.
const REGION: RegionPageData = {
  slug: "geotechnical-engineer-inner-west",
  name: "Inner West",
  source: "inner-west",
  kicker: "Inner West · Marrickville Based · Principal-Led",
  intro: (
    <>
      Our office is in Marrickville, so the Inner West is home ground: site classifications, geotechnical investigations and footing inspections from Burwood to Newtown. Tight yards, old fill and established trees come up often here. This is what we found on our own jobs. Each result belongs to its site, so send us your address and we will read yours.
    </>
  ),
  jobs: [
    {
      service: "Geotechnical Investigation",
      title: "A Basement Behind A Heritage House",
      meta: "Burwood · basement pavilion and pool behind a heritage-listed home",
      paras: [
        { label: "The brief.", text: "A basement of about 325 square metres under a new rear pavilion, with a pool beside it, behind a heritage-listed house that stays. The bulk excavation runs 2.9 to 3.6 metres below the existing ground, near a sewer main." },
        { label: "On the ground.", text: "Four hand-auger holes inside the footprint and a rig borehole beside the house, each with a penetrometer test. The soil cover was thin: fill or topsoil over stiff residual clay, with extremely weathered material or rock from 0.1 to 0.7 metres within the footprint and weathered bedrock from 1.6 metres beside the house." },
        { label: "The outcome.", text: "The bulk excavation sits within weathered bedrock. The report gave the design team parameters for the foundations, the excavation and its support, the pool, and the protection of the sewer and the retained house." },
      ],
      facts: "4 hand augers + 1 rig borehole + 5 DCPs · Basement in weathered bedrock · Class M outside it",
      photo: {
        src: "/sfgeo-rig-driveway-burwood.jpg",
        alt: "SFGEO 4WD-mounted rig set up on a Burwood driveway, the operator in hi-vis at the controls",
        caption: "Driveway Rig · Burwood",
      },
    },
    {
      service: "Footing Inspection",
      title: "Two Visits, Every Footing Tested",
      meta: "Newtown · alterations and additions",
      paras: [
        { label: "First visit.", text: "An internal pad footing was checked against the 150 kPa on the structural drawings, with a penetrometer test at its base, and passed." },
        { label: "Second visit.", text: "A footing beam and the rear footing, founded in high-plasticity residual clay with ironstone gravel. The top 200 millimetres at two test points was not adequately compacted; the contractor recompacted it while we watched, and it was reassessed before the footings were passed." },
      ],
      facts: "2 inspections · Penetrometer at every location tested · 150 kPa confirmed",
      photo: {
        src: "/sfgeo-dcp-footing-trench-newtown.jpg",
        alt: "Penetrometer standing in an open footing trench beside a brick party wall at Newtown",
        caption: "Footing Trench · Newtown",
      },
    },
    {
      service: "Site Classification",
      title: "A Two-Storey Addition Beside A Retained Tree",
      meta: "Marrickville · rear addition to a semi-detached house",
      paras: [
        { label: "The brief.", text: "A two-storey rear addition built against the common wall, with a large tree to stay about five metres behind it. The report also covered the tree's influence on the footings." },
        { label: "On the ground.", text: "A hand-auger borehole and two penetrometer tests. About 0.45 metres of fill over residual silty clay, high then medium plasticity, stiff to very stiff, to hand-auger refusal at 1.6 metres. Towards the tree, one penetrometer met very low resistance to a metre, and that ground is treated as unsuitable for footings." },
        { label: "The outcome.", text: "Class P, because the retained tree stands within influence distance of the rear of the addition. The footings are designed on a Class H1 basis, with the tree provided for under AS 2870 Appendix H." },
      ],
      facts: "1 hand-auger borehole + 2 DCPs · Class P on an H1 basis · Tree influence assessed",
      photo: {
        src: "/sfgeo-dcp-courtyard-marrickville.jpg",
        alt: "Tape measure run along a brick-paved courtyard in Marrickville to a small test hole, old timber sleepers beside it",
        caption: "Courtyard · Marrickville",
      },
    },
  ],
  services: [
    { title: "Site Classification", desc: "The soil test a certifier asks for: AS 2870 site classifications for extensions, terraces and granny flats.", href: "/site-classification" },
    { title: "Geotechnical Investigations", desc: "Investigations to AS 1726 for DAs, CDCs, basements and heritage alterations.", href: "/geotechnical-investigations" },
    { title: "Construction Phase Support", desc: "Footing and pier inspections from $600 + GST, up to the last one before the pour.", href: "/construction-phase-support" },
    { title: "Tight Access", desc: "Motorised hand augers carry through a standard doorway or side passage, so courtyards and rear yards can be investigated without vehicle access.", href: "/tight-access-drilling" },
    { title: "Testing", desc: "Dynamic cone penetrometer testing, and NATA-accredited laboratory testing where the design calls for it." },
  ],
  faqIntro: "Geotechnical engineers based in Marrickville, working across the Inner West from Burwood to Newtown.",
  faqs: [
    {
      q: "Do you cover the whole Inner West?",
      a: "Yes. SFGEO is based in Marrickville, and recent Inner West jobs run from Burwood and Newtown to Marrickville, Enmore, Ashfield and Leichhardt. There is a free site visit, same-day site visits across Metro Sydney, and a fixed fee in writing within one business day of receiving the address. Send the address and the plans if you have them.",
    },
    {
      q: "Does a tree near my extension affect the footings?",
      a: "It can. AS 2870 treats a tree within influence distance of the footings as an abnormal moisture condition, which makes the site Class P. At Marrickville a large tree about five metres behind a two-storey addition was provided for under Appendix H of the standard, on a Class H1 basis. The site classification report says which footings it reaches.",
    },
    {
      q: "What happens when a footing base is loose at inspection?",
      a: "The record says where and why, and the fix is checked before concrete. At Newtown the top 200 millimetres at two test points was not adequately compacted; the contractor recompacted it while we watched, and it was reassessed and passed against 150 kPa. Footing inspections start from $600 + GST. More on construction phase support.",
      link: [
        { text: "construction phase support", href: "/construction-phase-support" },
      ],
    },
  ],
  closeSub: <>Send the address. We are around the corner, and the desktop geology is checked before we quote.</>,
  schemaDescription: "Site classifications, geotechnical investigations and footing inspections across Sydney's Inner West, from the Marrickville office, led by the Principal Engineer.",
  areaServed: "Inner West, Sydney, New South Wales, Australia",
};

export default function InnerWestPage() {
  return <RegionPage region={REGION} />;
}
