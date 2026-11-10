import { Metadata } from "next";
import RegionPage, { type RegionPageData } from "@/components/sections/RegionPage";
import { pageMeta } from "@/lib/seo";

// Rebuilt hourly from the stored Google rating (src/lib/googleReviews.ts).
export const revalidate = 3600;

export const metadata: Metadata = pageMeta(
  "Geotechnical Engineer South West Sydney | SFGEO",
  "Site classifications and drilling across South West Sydney, from Hinchinbrook and Chipping Norton to Austral. Site classifications from $800 + GST.",
  "/geotechnical-engineer-south-west-sydney",
);

// Each card is written from that job's issued report or field log only (jobs and photographs chosen by
// Alli, 11 Nov 2026): Hinchinbrook SFG-2026-131-SC-R01.v1 (engaged through an engineering consultancy),
// Chipping Norton SFG-2026-037-SC-R01.v1, Austral SFG-2026-098-DR-R01/R02 (drilling for a consultancy).
const REGION: RegionPageData = {
  slug: "geotechnical-engineer-south-west-sydney",
  name: "South West Sydney",
  source: "south-west-sydney",
  kicker: "South West Sydney · Principal-Led",
  intro: (
    <>
      Site classifications for granny flats and new homes from Hinchinbrook to Chipping Norton, and drilling for consultancies on new lots at Austral. Reactive clay and old fill decide most results here, so the class is tested, never assumed. This is what we found on our own jobs. Send us your address and we will read yours.
    </>
  ),
  feature: {
    src: "/sfgeo-rig-greenfield-lot-austral.jpg",
    alt: "SFGEO drill rig side-on with its mast raised on a cleared greenfield lot at Austral, a new house under construction behind",
    caption: "Greenfield Lot · Austral",
  },
  jobs: [
    {
      service: "Site Classification",
      title: "Two Buildings, Two Depths Of Fill",
      meta: "Hinchinbrook · granny flat and studio, engaged through an engineering consultancy",
      paras: [
        { label: "The brief.", text: "A granny flat and a studio side by side in a rear yard, with no drawings yet. The classification and bearing pressures had to cover both buildings." },
        { label: "On the ground.", text: "Two hand-auger boreholes and four penetrometer tests. Fill was 0.4 metres deep under the eastern building and 1.2 metres under the western one, over medium plasticity residual clay that continued below the 1.5 metre boreholes. Three penetrometer tests stayed in stiff to very stiff ground to 2.6 to 2.8 metres; the fourth refused at 2.4 metres." },
        { label: "The outcome.", text: "Class P as it stands, for the deeper fill and a disused sewer trench crossing the rear of both buildings, on a Class H1 reactivity basis with the upper bound of 60 millimetres adopted for design." },
      ],
      facts: "2 hand-auger boreholes + 4 DCPs · Class P on an H1 basis · Fill to 1.2 metres",
      photo: {
        src: "/sfgeo-soil-profile-tarp-hinchinbrook.jpg",
        alt: "Hand-auger spoil laid out in depth order on a blue tarp beside a tape measure at Hinchinbrook",
        caption: "Soil Profile · Hinchinbrook",
      },
    },
    {
      service: "Site Classification",
      title: "A Granny Flat On Highly Reactive Clay",
      meta: "Chipping Norton · secondary dwelling, for a builder",
      paras: [
        { label: "The brief.", text: "A secondary dwelling in the rear yard of a corner lot, classified before the design was drawn. Most of the footprint was paved, with a service line across it." },
        { label: "On the ground.", text: "The rig drilled one borehole to 3.0 metres on the only strip of open ground inside the footprint, beside one penetrometer test. About 0.5 metres of topsoil and uncontrolled fill over stiff to very stiff residual silty clay of medium to high plasticity, with ironstone gravel, to the base of the hole. No groundwater." },
        { label: "The outcome.", text: "Class P as it stood, because of the fill, and reclassified Class H2, highly reactive, for design, with founding and bearing parameters for the structural engineer." },
      ],
      facts: "1 rig borehole to 3.0 metres + 1 DCP · Class H2 · Rig set up in a narrow rear yard",
      photo: {
        src: "/sfgeo-rig-backyard-chipping-norton.jpg",
        alt: "SFGEO operator at the 4WD-mounted rig on a narrow strip of lawn beside a side fence at Chipping Norton",
        caption: "Rear Yard · Chipping Norton",
      },
    },
    {
      service: "Drilling For A Consultancy",
      title: "Two Greenfield Lots In A Day",
      meta: "Austral · two residential lots, for a consultancy",
      paras: [
        { label: "The brief.", text: "A consultancy needed boreholes on two residential lots for its own reports. We drilled, tested and logged; the consultancy wrote the reports." },
        { label: "On the ground.", text: "Four boreholes to the two-metre target depth with the 4WD-mounted rig, with a penetrometer test beside each. Silty clay fill was 0.3 to 0.6 metres deep on one lot and 1.2 to 1.5 metres deep on the other. Every hole was dry on completion." },
        { label: "The outcome.", text: "Both lots were drilled and logged in a single visit, with a log set issued for each lot." },
      ],
      facts: "4 boreholes + 4 DCPs · Two lots, one visit · Dry on completion",
      photo: {
        src: "/sfgeo-rig-drilling-open-lot-austral.jpg",
        alt: "SFGEO rig drilling in the middle of an open, cleared lot at Austral under a cloudy sky",
        caption: "Drilling · Austral",
      },
    },
  ],
  services: [
    { title: "Site Classification", desc: "AS 2870 site classifications for granny flats, studios and new homes.", href: "/site-classification" },
    { title: "Geotechnical Investigations", desc: "Investigations to AS 1726 for DAs, CDCs, basements and footings.", href: "/geotechnical-investigations" },
    { title: "Drilling For Consultancies", desc: "Boreholes drilled and logged on the 4WD-mounted rig for other consultancies' reports, on new estates and established streets.", href: "/subcontract-drilling" },
    { title: "Construction Phase Support", desc: "Footing and pier inspections, up to the last one before the pour.", href: "/construction-phase-support" },
    { title: "Testing", desc: "Dynamic cone penetrometer testing, and NATA-accredited laboratory testing where the design calls for it." },
  ],
  faqs: [
    {
      q: "Is the clay in South West Sydney highly reactive?",
      a: "Often, and that is why it is tested. On our recent jobs, Chipping Norton was reclassified Class H2 for design and Hinchinbrook was designed on a Class H1 basis, both on deep residual clay. A highly reactive class means stiffer slabs or deeper footings, so it changes the design. Site classifications start from $800 + GST.",
    },
    {
      q: "Why was a Hinchinbrook granny flat site Class P?",
      a: "Because of what sat in the ground, not the clay alone. Fill 1.2 metres deep under one building and the backfilled trench of a disused sewer main across the rear made the site Class P as it stands. On a Class P site the footings are designed by engineering principles, and here the clay set an H1 reactivity basis for that design.",
    },
    {
      q: "Do you drill for consultancies on new estates?",
      a: "Yes. On new estates such as Austral we drill and log boreholes for consultancies that write their own reports, and two lots were drilled and logged in a single visit. Drilling programmes are quoted per site, with a fixed fee in writing within one business day. More on subcontract drilling.",
      link: { text: "subcontract drilling", href: "/subcontract-drilling" },
    },
  ],
  closeSub: <>Send the address. The desktop geology is checked before we even quote.</>,
  schemaDescription: "Site classifications, geotechnical investigations and drilling across South West Sydney, led by the Principal Engineer.",
  areaServed: "South West Sydney, New South Wales, Australia",
};

export default function SouthWestSydneyPage() {
  return <RegionPage region={REGION} />;
}
