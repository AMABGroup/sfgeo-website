import { Metadata } from "next";
import RegionPage, { type RegionPageData } from "@/components/sections/RegionPage";
import { pageMeta } from "@/lib/seo";

// Rebuilt hourly from the stored Google rating (src/lib/googleReviews.ts).
export const revalidate = 3600;

export const metadata: Metadata = pageMeta(
  "Geotechnical Engineer Parramatta Sydney | SFGEO",
  "Soil tests, site classifications, investigations and drilling in Parramatta and the Cumberland suburbs. Fixed fee in writing within one business day.",
  "/geotechnical-engineer-parramatta",
);

// Each card is written from that job's record only (jobs and photographs chosen by Alli, 11 Nov 2026):
// Parramatta SFG-2610-133 (drilling for a consultancy; its engineer logged, so the card states SFGEO's role
// and the job card's facts, no ground statement), Northmead SFG-2026-052-GI-R01.v2, South Wentworthville
// SFG-2026-100-GI-R01.v1.
const REGION: RegionPageData = {
  slug: "geotechnical-engineer-parramatta",
  name: "Parramatta",
  source: "parramatta",
  kicker: "Parramatta · Principal-Led · Sydney",
  intro: (
    <>
      Geotechnical investigations, site classifications and drilling from Parramatta to Northmead and South Wentworthville, for owners, builders and other consultancies. This is what we found on our own jobs here, and how we drilled one for another firm. Each result belongs to its site, so send us your address and we will read yours.
    </>
  ),
  feature: {
    src: "/sfgeo-rig-car-park-parramatta.jpg",
    alt: "SFGEO drill rig set up under a large gum in a Parramatta car park, two crew in hi-vis beside it and the city towers behind",
    caption: "Car Park Drilling · Parramatta",
  },
  jobs: [
    {
      service: "Drilling For A Consultancy",
      title: "Five Boreholes Through A Car Park",
      meta: "Parramatta · soil sampling on a development site, for a consultancy",
      paras: [
        { label: "The brief.", text: "A consultancy needed soil samples from beneath a car park on a development site. The programme was booked over two days." },
        { label: "On the ground.", text: "We brought the 4WD-mounted rig and drilled through the car park pavement. The consultancy's engineer logged each hole and took the samples. On the day, the scope settled at five boreholes." },
        { label: "The outcome.", text: "All five were drilled in a single day, so the second day was not needed." },
      ],
      facts: "5 boreholes in one day · Logged and sampled by the consultancy · 4WD-mounted rig",
      photo: {
        src: "/sfgeo-auger-pavement-parramatta.jpg",
        alt: "Auger drilling through the asphalt of a Parramatta car park, red-brown spoil around the hole",
        caption: "Auger Through Pavement · Parramatta",
      },
    },
    {
      service: "Geotechnical Investigation",
      title: "A Church Car Park Over Old Fill",
      meta: "Northmead · new car park pavement at a church, for a civil contractor",
      paras: [
        { label: "The brief.", text: "A new car park over existing uncontrolled fill, part of a larger church expansion. The investigation characterised the subgrade for the pavement design." },
        { label: "On the ground.", text: "Three rig boreholes and three penetrometer tests, on an active site after rain. The fill ran from about 0.5 metres to more than 1.5 metres deep, with brick, concrete, glass and steel that stopped the auger at two offset positions. Below it, very stiff to hard residual clay graded into extremely weathered siltstone." },
        { label: "The outcome.", text: "The existing stabilised pavement could be kept and extended as a cement-modified pavement over a proof-rolled, geogrid-reinforced subgrade, rather than the unbound pavement first designed." },
      ],
      facts: "3 rig boreholes + 3 DCPs · Fill to more than 1.5 metres · Geogrid-reinforced pavement",
      photo: {
        src: "/sfgeo-rig-church-car-park-northmead.jpg",
        alt: "SFGEO operator in hi-vis beside the 4WD-mounted rig on a cleared site at Northmead, a spoil mound behind",
        caption: "Rig · Northmead",
      },
    },
    {
      service: "Geotechnical Investigation",
      title: "A Basement Into Clay And Shale",
      meta: "South Wentworthville · two-storey home over a basement garage",
      paras: [
        { label: "The brief.", text: "A knock-down rebuild with a basement garage cut 2.4 to 4.1 metres below the surface, close to both side boundaries. The structural engineer asked for excavation support parameters and the bearing capacity at basement level." },
        { label: "On the ground.", text: "Three rig boreholes with penetrometer tests found residual silty clay with ironstone gravel to 2.3 to 3.0 metres, soft to firm near the surface in places and stiff to hard below, passing into weathered shale at 4.0 to 4.4 metres. No groundwater was encountered." },
        { label: "The outcome.", text: "The basement platform sits in hard clay and extremely weathered shale over most of the footprint, and in shale at the front. The site was found suitable for the excavation with every face supported, and the report gave the shoring, bearing and pile inputs." },
      ],
      facts: "3 rig boreholes with penetrometer tests · Shale at 4.0 to 4.4 metres · Shoring and bearing parameters",
      photo: {
        src: "/sfgeo-dcp-lawn-south-wentworthville.jpg",
        alt: "Penetrometer standing in a front lawn at South Wentworthville, the back of the SFGEO rig beside it",
        caption: "Penetrometer · South Wentworthville",
      },
    },
  ],
  services: [
    { title: "Geotechnical Investigations", desc: "Investigations to AS 1726 for DAs, CDCs, basements and pavements.", href: "/geotechnical-investigations" },
    { title: "Site Classification", desc: "The soil test a certifier asks for: AS 2870 site classifications for homes, duplexes and granny flats.", href: "/site-classification" },
    { title: "Drilling For Consultancies", desc: "Boreholes on the 4WD-mounted rig for other consultancies, logged by us or by their engineer.", href: "/subcontract-drilling" },
    { title: "Concrete Coring", desc: "$120 + GST per hole, three-hole minimum per visit, for slabs and hardstands.", href: "/concrete-coring" },
    { title: "Construction Phase Support", desc: "Footing and pier inspections, up to the last one before the pour.", href: "/construction-phase-support" },
  ],
  faqIntro: "Geotechnical engineers based in Marrickville, working in Parramatta and the Cumberland suburbs.",
  faqs: [
    {
      q: "Can you drill through a car park or other hardstand?",
      a: "Yes. The rig drills through asphalt car parks and hardstands, and a concrete slab can be cored first where the hole needs it. At Parramatta five boreholes went through a car park in a single day for a consultancy's sampling programme. Concrete coring is $120 + GST per hole, with a three-hole minimum per visit.",
      link: { text: "Concrete coring", href: "/concrete-coring" },
    },
    {
      q: "What does a basement investigation look for in Parramatta's suburbs?",
      a: "The depth and strength of the clay and rock the basement is cut into, and any groundwater. At South Wentworthville three rig boreholes found residual clay over weathered shale at 4.0 to 4.4 metres, with the basement founding mostly in hard clay and extremely weathered shale. The report gave the shoring and bearing parameters. Investigations are a fixed fee in writing within one business day.",
    },
    {
      q: "Can old fill stay under a new car park or driveway?",
      a: "Sometimes, once it has been characterised. At a Northmead church site, fill from about 0.5 to more than 1.5 metres deep carried brick, concrete, glass and steel, and the existing pavement was extended over a proof-rolled, geogrid-reinforced subgrade. The answer depends on what the boreholes find, so the fill is drilled and logged before the pavement is designed.",
    },
  ],
  closeSub: <>Send the address. The desktop geology is checked before we even quote.</>,
  schemaDescription: "Geotechnical investigations, site classifications and drilling in Parramatta and the Cumberland suburbs, led by the Principal Engineer.",
  areaServed: "Parramatta and Cumberland, Sydney, New South Wales, Australia",
};

export default function ParramattaPage() {
  return <RegionPage region={REGION} />;
}
