import { Metadata } from "next";
import RegionPage, { type RegionPageData } from "@/components/sections/RegionPage";
import { pageMeta } from "@/lib/seo";

// Rebuilt hourly from the stored Google rating (src/lib/googleReviews.ts).
export const revalidate = 3600;

export const metadata: Metadata = pageMeta(
  "Geotechnical Engineer St George & Sutherland Shire | SFGEO",
  "Soil tests, site classifications and inspections across St George and the Sutherland Shire. Fixed fee in writing within one business day.",
  "/geotechnical-engineer-st-george-sutherland-shire",
);

// Each card is written from that job's issued report or inspection record only (jobs and photographs
// chosen by Alli, 11 Nov 2026; the Shire merged into this page on his call): Peakhurst Heights
// SFG-2026-122-GI-R01.v1, Mortdale SFG-2026-064-SC-R01, Caringbah SFG-2607-069-TW02.V1.
const REGION: RegionPageData = {
  slug: "geotechnical-engineer-st-george-sutherland-shire",
  name: "St George & Sutherland Shire",
  source: "st-george-sutherland-shire",
  kicker: "St George · Sutherland Shire · Principal-Led",
  intro: (
    <>
      Site classifications, geotechnical investigations and construction-phase inspections from Peakhurst Heights and Mortdale to Caringbah. On our jobs here, old fill, clay and shallow rock have decided the result. This is what we found on our own jobs. Each result belongs to its site, so send us your address and we will read yours.
    </>
  ),
  feature: {
    src: "/sfgeo-sandstone-cut-oatley.jpg",
    alt: "Weathered sandstone exposed at the base of a cut in a rear yard at Oatley",
    caption: "Sandstone · Oatley",
  },
  jobs: [
    {
      service: "Geotechnical Investigation",
      title: "Depth To Rock For A Granny Flat",
      meta: "Peakhurst Heights · granny flat on bored piers",
      paras: [
        { label: "The brief.", text: "A single-storey granny flat at the rear of the lot, its slab carried on bored piers, with low blockwork retaining walls. The structural design needed the depth to rock and bearing pressures against founding depth." },
        { label: "On the ground.", text: "A rig borehole inside the footprint found residual sandy clay over very dense clayey and silty sands with ironstone gravel and fragments of extremely weathered sandstone. Seepage was met at about 1.6 metres, and the auger refused at 1.84 metres on inferred weathered bedrock." },
        { label: "The outcome.", text: "Class M under AS 2870, read from the logged profile, with allowable bearing pressures set against founding depth for the piers." },
      ],
      facts: "1 rig borehole + 2 DCPs · Class M · Inferred rock at 1.84 metres",
      photo: {
        src: "/sfgeo-rig-borehole-profile-peakhurst-heights.jpg",
        alt: "SFGEO rig drilling at Peakhurst Heights, the recovered soil profile laid out in bands on the slab in front",
        caption: "Profile Laid Out · Peakhurst Heights",
      },
    },
    {
      service: "Site Classification",
      title: "A Garden Studio Over A Metre Of Fill",
      meta: "Mortdale · garden studio in the rear yard",
      paras: [
        { label: "The brief.", text: "A single-storey garden studio at a revised position in the rear yard, for a returning client." },
        { label: "On the ground.", text: "A hand-auger borehole and two penetrometer tests found about a metre of topsoil and non-engineered fill with building debris over high-plasticity residual clay, with seepage at the base of the fill. The auger and the penetrometers refused at 1.2 to 1.3 metres on inferred weathered sandstone." },
        { label: "The outcome.", text: "Class P as it stood, because of the fill. With the fill cleared from beneath the footings and slab, the report gave a Class S design basis and two footing options." },
      ],
      facts: "1 hand-auger borehole + 2 DCPs · Class P as found · Class S basis once the fill is cleared",
      photo: {
        src: "/sfgeo-hand-auger-garden-mortdale.jpg",
        alt: "Hand auger and tape measure at a borehole in a garden bed at Mortdale",
        caption: "Hand Auger · Mortdale",
      },
    },
    {
      service: "Construction Phase Support",
      title: "A Crane Pad Checked Before The Lift",
      meta: "Caringbah · industrial development, for a civil contractor",
      paras: [
        { label: "The brief.", text: "A civil contractor needed the working platform under a large mobile crane verified at 150 kPa at each outrigger, before precast stormwater pits were lifted in." },
        { label: "On the ground.", text: "Penetrometer tests at the four outrigger positions met practical refusal within the first 100 millimetres of the compacted granular platform." },
        { label: "The outcome.", text: "The platform was confirmed for 150 kPa at each outrigger, about twice the highest pressure in the lift study, on two conditions: full-size crane pads under every outrigger, and every pad kept 4 metres clear of the sheet-piled pit beside it." },
      ],
      facts: "4 DCPs at the outrigger positions · 150 kPa confirmed · One of ten inspection records on the site",
      photo: {
        src: "/sfgeo-dcp-crane-pad-caringbah.jpg",
        alt: "Penetrometer driven into a compacted crane pad at Caringbah, the inspector's boots beside it",
        caption: "Crane Pad · Caringbah",
      },
    },
  ],
  services: [
    { title: "Site Classification", desc: "The soil test a certifier asks for: AS 2870 site classifications for homes, studios and granny flats.", href: "/site-classification" },
    { title: "Geotechnical Investigations", desc: "Investigations to AS 1726 for DAs, CDCs, piers and basements.", href: "/geotechnical-investigations" },
    { title: "Construction Phase Support", desc: "Footing, pier and working platform inspections, up to the last one before the pour.", href: "/construction-phase-support" },
    { title: "Tight Access", desc: "Motorised hand augers carry through a standard doorway or side passage, so rear yards can be investigated without vehicle access.", href: "/tight-access-drilling" },
    { title: "Testing", desc: "Dynamic cone penetrometer testing, and NATA-accredited laboratory testing where the design calls for it." },
  ],
  faqIntro: "Geotechnical engineers based in Marrickville, working across St George and the Sutherland Shire.",
  faqs: [
    {
      q: "Do you work across St George and the Sutherland Shire?",
      a: "Yes. Site classifications, investigations and inspections run from our Marrickville base to Peakhurst Heights, Mortdale, Caringbah and the suburbs between. There is a free site visit, same-day site visits across Metro Sydney, and a fixed fee in writing within one business day of receiving the address. Send the address and the plans if you have them.",
    },
    {
      q: "Does old fill in the backyard change the site class?",
      a: "Often, yes. AS 2870 makes a site Class P where uncontrolled fill is left under the footings. At Mortdale about a metre of fill over clay gave Class P as the site stood, and the report set a Class S design basis once the fill is cleared from beneath the footings and slab. Fill is common in established backyards, so it is logged, never assumed.",
    },
    {
      q: "Can a crane pad or working platform be checked before a lift?",
      a: "Yes. Penetrometer tests at each outrigger position are compared with the bearing pressure the contractor or the lift study needs, and the record states any conditions. At Caringbah four outrigger positions were confirmed for 150 kPa on the day of testing. Inspections are a fixed fee in writing within one business day. More on construction phase support.",
      link: { text: "construction phase support", href: "/construction-phase-support" },
    },
  ],
  closeSub: <>Send the address. The desktop geology is checked before we even quote.</>,
  schemaDescription: "Site classifications, geotechnical investigations and construction-phase inspections across St George and the Sutherland Shire, led by the Principal Engineer.",
  areaServed: "St George and Sutherland Shire, Sydney, New South Wales, Australia",
};

export default function StGeorgeSutherlandShirePage() {
  return <RegionPage region={REGION} />;
}
