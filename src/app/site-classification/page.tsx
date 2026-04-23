import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { FadeIn, StaggerContainer, FadeInChild } from "./MotionWrapper";

export const metadata: Metadata = {
  title: "Site Classification Sydney | AS 2870 Reports | SFGEO",
  description: "AS 2870 site classifications across Sydney from $750+GST. Principal Engineer on site, NATA-accredited lab testing, fixed-fee pricing.",
  alternates: {
    canonical: 'https://www.sfgeo.com.au/site-classification',
  },
};

export default function SiteClassificationPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AS 2870 Site Classification",
    "serviceType": "Geotechnical Site Classification",
    "description": "AS 2870 site classifications across Sydney from $750+GST. Principal Engineer on site, NATA-accredited lab testing, fixed-fee pricing.",
    "url": "https://www.sfgeo.com.au/site-classification",
    "provider": {
      "@type": "Organization",
      "@id": "https://www.sfgeo.com.au/#organization",
      "name": "Solid Foundation Geotechnical",
      "url": "https://www.sfgeo.com.au",
      "telephone": "+61423483555"
    },
    "areaServed": {
      "@type": "City",
      "name": "Sydney, New South Wales, Australia"
    },
    "offers": {
      "@type": "Offer",
      "price": "750.00",
      "priceCurrency": "AUD"
    }
  };

  return (
    <div className="bg-white text-slate-950 font-inter min-h-screen selection:bg-forest-green selection:text-white pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 lg:px-12 max-w-7xl mx-auto">
        <StaggerContainer>
          <FadeInChild className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 pb-10 border-b border-gray-100">
            <h3 className="text-[11px] font-bold tracking-[0.2em] text-forest-green uppercase m-0 max-w-xl leading-relaxed">
              Principal Engineer on every site • Family-owned, Sydney-based • Fixed-fee quotes • Reports tailored to your certifier
            </h3>
          </FadeInChild>

          <FadeInChild>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-montserrat font-light tracking-tight text-slate-950 max-w-4xl mb-6">
              Site Classifications, <span className="font-semibold text-forest-green">Engineered Properly</span>
            </h1>
          </FadeInChild>
          
          <FadeInChild>
            <p className="text-xl text-gray-500 font-light leading-relaxed max-w-3xl mb-12">
              Sydney family-owned, Principal-Engineer-led, trusted by local builders, architects and structural engineers. Every AS 2870 report is tailored to your site, your design, and your certifier's requirements. No templates. No surprises.
            </p>
          </FadeInChild>

          <FadeInChild className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-16">
            <Link
              href="/contact"
              className="group relative px-8 py-4 text-sm font-semibold tracking-wide text-white bg-slate-black overflow-hidden flex items-center justify-center gap-2 rounded-full hover:bg-slate-800 transition-colors shadow-md hover:shadow-lg w-full sm:w-auto"
            >
              Book a site meeting <ArrowRightIcon className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="tel:0423483555"
              className="group relative px-8 py-4 text-sm font-semibold tracking-wide text-slate-950 bg-white border border-slate-950 overflow-hidden flex items-center justify-center gap-2 rounded-full hover:bg-gray-50 transition-colors shadow-sm hover:shadow-md w-full sm:w-auto"
            >
              0423 483 555
            </a>
          </FadeInChild>

          <FadeInChild className="relative w-full aspect-[4/3] sm:aspect-[21/9] rounded-xl overflow-hidden bg-gray-100 shadow-sm">
            <Image 
              src="/placeholder-hero-sc.svg" 
              alt="Draft: Principal Engineer assessing soil samples on site" 
              fill 
              className="object-cover" 
              priority
            />
          </FadeInChild>
        </StaggerContainer>
      </section>

      {/* Section 1: What a Site Classification actually does for you */}
      <section className="py-16 px-6 lg:px-12 max-w-4xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl font-light tracking-tight font-montserrat text-slate-950 mb-8">
            What a Site Classification actually does for you
          </h2>
          <div className="text-lg text-gray-600 font-light leading-relaxed space-y-6">
            <p>
              Often referred to as a soil test or geotech report, a Site Classification under AS 2870 is considerably more than <Link href="/services" className="text-forest-green hover:underline font-medium">paperwork your structural engineer asks for</Link>. Done properly, and done early, it works for you in four ways.
            </p>
            <ol className="list-decimal pl-5 space-y-4">
              <li><strong className="font-medium text-slate-950">Helps your architect design the right home for your ground.</strong> Commissioned at concept stage, it lets the design work with the ground conditions rather than redesigning around them later. Saves architect time and redesign fees.</li>
              <li><strong className="font-medium text-slate-950">Gives your structural engineer the data to size footings precisely.</strong> The difference between a well-read Class M and a defaulted Class H1 runs to tens of thousands of dollars in concrete and steel. Worth getting right.</li>
              <li><strong className="font-medium text-slate-950">Supports your DA or CDC approval.</strong> A report written to match your certifier's specific requirements moves through approvals cleanly. Generic reports get queried or bounced, and delay the project.</li>
              <li><strong className="font-medium text-slate-950">Protects the home you are about to build.</strong> An under-read site shows up quietly, years later, as cracks above doorways and doors that stop closing properly in February. The classification is what stops that conversation before it starts.</li>
            </ol>
            {/* Optional 4th placeholder commented out */}
            {/* 
            <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-gray-100 mt-8">
              <Image src="/placeholder-report-sc.svg" alt="Draft: Close-up of SFGEO AS 2870 site classification report" fill className="object-cover" />
            </div>
            */}
          </div>
        </FadeIn>
      </section>

      {/* Section 2: How SFGEO does this differently */}
      <section className="py-16 px-6 lg:px-12 max-w-4xl mx-auto border-t border-gray-100">
        <FadeIn>
          <h2 className="text-3xl font-light tracking-tight font-montserrat text-slate-950 mb-8">
            How SFGEO does this differently
          </h2>
          <div className="text-lg text-gray-600 font-light leading-relaxed space-y-6 mb-12">
            <p>
              Most Sydney geotechnical firms operate on volume. Cheap headline fees, templated reports, conservative defaults to cover professional risk, and the engineer who signs the report has often never set foot on the property. You pay for that model either way. In concrete you did not need, or in a report your certifier rejects.
            </p>
            <p className="font-medium text-slate-950 text-xl">
              SFGEO is built on the opposite model.
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm mb-12">
            {/* Desktop Table Header */}
            <div className="hidden md:grid grid-cols-2 bg-slate-50 border-b border-gray-200">
              <div className="px-6 py-4 font-semibold text-slate-950">The volume model</div>
              <div className="px-6 py-4 font-semibold text-forest-green border-l border-gray-200">The SFGEO way</div>
            </div>
            {/* Rows */}
            <div className="divide-y divide-gray-100">
              {[
                { volume: "Fieldwork done without the signing engineer present", sfgeo: "Principal Engineer on every site" },
                { volume: "Templated reports, one size fits all", sfgeo: "Tailored to your certifier, structural engineer and council" },
                { volume: "Lab testing applied by default, billed regardless", sfgeo: "Lab testing when the site warrants it, not as padding" },
                { volume: "Engineer meets the site via the borehole log", sfgeo: "Principal meets you on site before quoting" },
                { volume: "Separate quotes for drilling, engineering and construction advice", sfgeo: "One professional, one scope" }
              ].map((row, idx) => (
                <div key={idx} className="flex flex-col md:grid md:grid-cols-2 p-6 md:p-0">
                  {/* Mobile labels shown only on small screens */}
                  <div className="md:px-6 md:py-5 text-gray-600 font-light md:border-r border-gray-200 pb-3 md:pb-5">
                    <span className="block md:hidden text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">The volume model</span>
                    {row.volume}
                  </div>
                  <div className="md:px-6 md:py-5 text-slate-950 font-medium">
                    <span className="block md:hidden text-xs font-bold uppercase tracking-wider text-forest-green mb-1 mt-2">The SFGEO way</span>
                    {row.sfgeo}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="relative w-full aspect-[4/3] sm:aspect-[21/9] rounded-xl overflow-hidden bg-gray-100 shadow-sm mb-12">
            <Image 
              src="/placeholder-field-sc.svg" 
              alt="Draft: Principal Engineer operating auger and logging soil" 
              fill 
              className="object-cover" 
            />
          </div>
          <div className="text-lg text-gray-600 font-light leading-relaxed space-y-6">
            <p>
              <strong className="font-medium text-slate-950">One professional, not three.</strong> The Principal Engineer's background is hands-on residential construction across multiple trades, years of drilling Sydney sites personally, and the engineering qualifications on top. When the rig goes down, the person reading the ground has drilled ground like it before. When the plans come out, the person reading them has built against ground conditions before. That combination, in one professional, is rare in the Sydney market.
            </p>
            <p>
              <strong className="font-medium text-slate-950">The next generation, trained on site.</strong> Engineers joining the SFGEO team are hand-picked graduates, trained on site alongside the Principal, on every project. They are not sent alone. They learn Sydney soils the way the Principal did, by being on the ground, under direct guidance, until they earn the judgement the work requires. Every report, regardless of who runs the fieldwork, is reviewed and signed by the Principal Engineer.
            </p>
            <p>
              <strong className="font-medium text-slate-950">We meet you on site before we quote.</strong> For most Sydney sites this is part of how we work and is not charged. We review your plans and confirm the address before booking. The Principal Engineer walks the site, reads your drawings, and advises on what the project actually needs. Is now the right time to do the geotechnical work, or better done after demolition? Will you need pier or footing inspections during the build? Is there a rock cut face that warrants assessment? You leave with a clear plan before committing to anything. Distant or particularly complex sites may attract a fee for the initial visit, confirmed upfront.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Section 3: Process */}
      <section className="py-16 px-6 lg:px-12 max-w-4xl mx-auto border-t border-gray-100">
        <FadeIn>
          <h2 className="text-3xl font-light tracking-tight font-montserrat text-slate-950 mb-8">
            Process
          </h2>
          <ol className="list-decimal pl-5 space-y-4 text-lg text-gray-600 font-light leading-relaxed">
            <li><strong className="font-medium text-slate-950">Book a site meeting.</strong> Send the address, a short project description, and any plans you have.</li>
            <li><strong className="font-medium text-slate-950">On-site consultation.</strong> Principal Engineer walks the site with you. Construction-side perspective and engineering judgement in the same conversation.</li>
            <li><strong className="font-medium text-slate-950">Fixed-fee quote.</strong> Written, scoped, confirmed before work begins.</li>
            <li><strong className="font-medium text-slate-950">Fieldwork.</strong> Principal Engineer attends, logs the profile on site.</li>
            <li><strong className="font-medium text-slate-950">Lab testing, if indicated.</strong> Through a NATA-accredited partner laboratory. Only when the site warrants it.</li>
            <li><strong className="font-medium text-slate-950">Report, reviewed and signed.</strong> Prepared against your certifier's and structural engineer's specific requirements.</li>
            <li><strong className="font-medium text-slate-950">Delivery.</strong> Signed PDF, 2–3 business days from fieldwork.</li>
          </ol>
        </FadeIn>
      </section>

      {/* Section 4: Pricing */}
      <section className="py-24 px-6 lg:px-12 bg-slate-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="max-w-4xl mb-12">
              <h2 className="text-3xl font-light tracking-tight font-montserrat text-slate-950 mb-6">
                Pricing
              </h2>
              <div className="text-lg text-gray-600 font-light leading-relaxed space-y-6">
                <p>
                  Geotechnical reporting in Sydney has a bait-and-switch problem. Headline fees that look competitive return heavier once scope is actually read. Or the fee is genuinely cheap, and the report is thin, templated and bounced by the certifier. Either way, you pay for it, often in concrete and steel that never had to be there.
                </p>
                <p>
                  SFGEO pricing is fixed-fee, confirmed in writing before work begins. Figures below are starting points for scoped residential work on accessible sites. Final fees reflect your site, your scope, and your certifier's requirements.
                </p>
              </div>
            </div>
          </FadeIn>

          <StaggerContainer>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <FadeInChild className="bg-white border border-gray-100 p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full">
                <div className="mb-4">
                  <span className="text-[11px] font-bold tracking-[0.2em] text-forest-green uppercase">Base Level</span>
                </div>
                <h3 className="text-4xl font-montserrat font-light text-slate-950 tracking-tight mb-4">
                  $750 <span className="text-lg text-gray-400 font-medium">+ GST</span>
                </h3>
                <p className="text-sm text-gray-600 font-light leading-relaxed flex-grow">
                  Smaller residential scopes. Granny flats, in-ground pools, alterations and additions.
                </p>
              </FadeInChild>
              
              {/* Card 2 */}
              <FadeInChild className="bg-white border border-gray-100 p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full ring-1 ring-forest-green/20 relative">
                <div className="absolute top-0 right-8 -translate-y-1/2 bg-forest-green text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full shadow-sm">
                  Most Common
                </div>
                <div className="mb-4">
                  <span className="text-[11px] font-bold tracking-[0.2em] text-forest-green uppercase">Standard Classification</span>
                </div>
                <h3 className="text-4xl font-montserrat font-light text-slate-950 tracking-tight mb-4">
                  $1,000 <span className="text-lg text-gray-400 font-medium">+ GST</span>
                </h3>
                <p className="text-sm text-gray-600 font-light leading-relaxed flex-grow">
                  Standard AS 2870 classification on a flat single-storey block with straightforward access.
                </p>
              </FadeInChild>

              {/* Card 3 */}
              <FadeInChild className="bg-white border border-gray-100 p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full">
                <div className="mb-4">
                  <span className="text-[11px] font-bold tracking-[0.2em] text-slate-400 uppercase">Complex Sites</span>
                </div>
                <h3 className="text-4xl font-montserrat font-light text-slate-950 tracking-tight mb-4">
                  Custom
                </h3>
                <p className="text-sm text-gray-600 font-light leading-relaxed flex-grow">
                  Sloping blocks, restricted access, deep-footing design, rock coring, Class P investigations. Priced on scope after the site meeting.
                </p>
              </FadeInChild>
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Section 5: Turnaround */}
      <section className="py-16 px-6 lg:px-12 max-w-4xl mx-auto border-b border-gray-100">
        <FadeIn>
          <h2 className="text-3xl font-light tracking-tight font-montserrat text-slate-950 mb-6">
            Turnaround
          </h2>
          <p className="text-lg text-gray-600 font-light leading-relaxed">
            <strong className="font-medium text-slate-950">2–3 business days</strong> from fieldwork to signed report, standard. Lab work runs in parallel when required. Urgent turnaround available for DA, CC or settlement timelines, call the Principal directly to arrange.
          </p>
        </FadeIn>
      </section>

      {/* Section 6: Access */}
      <section className="py-16 px-6 lg:px-12 max-w-4xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl font-light tracking-tight font-montserrat text-slate-950 mb-6">
            Access
          </h2>
          <p className="text-lg text-gray-600 font-light leading-relaxed mb-8">
            Many Sydney sites cannot be reached by a conventional truck-mounted rig. Inner West terraces, Eastern Suburbs battleaxe blocks, rear-yard granny flat positions, stepped blocks with deep investigation points. SFGEO operates a 4WD-mounted rig for sites where standard rigs stop at the kerb, with motorised hand augers covering zero-clearance and internal courtyard work. <Link href="/drilling" className="text-forest-green hover:underline font-medium">Full access capability.</Link>
          </p>
          <div className="relative w-full aspect-[4/3] sm:aspect-[21/9] rounded-xl overflow-hidden bg-gray-100 shadow-sm">
            <Image 
              src="/placeholder-access-sc.svg" 
              alt="Draft: SFGEO 4WD mounted drill rig accessing tight residential site" 
              fill 
              className="object-cover" 
            />
          </div>
        </FadeIn>
      </section>

      {/* Section 7: The six classes of AS 2870 */}
      <section className="py-16 px-6 lg:px-12 max-w-4xl mx-auto border-t border-gray-100">
        <FadeIn>
          <h2 className="text-3xl font-light tracking-tight font-montserrat text-slate-950 mb-8">
            The six classes of AS 2870
          </h2>
          
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm mb-8">
            {/* Desktop Table Header */}
            <div className="hidden md:grid grid-cols-[120px_1fr] bg-slate-50 border-b border-gray-200">
              <div className="px-6 py-4 font-semibold text-slate-950">Class</div>
              <div className="px-6 py-4 font-semibold text-slate-950 border-l border-gray-200">Ground behaviour</div>
            </div>
            {/* Rows */}
            <div className="divide-y divide-gray-100">
              {[
                { cls: "A", desc: "Stable. Minimal movement. Sand or rock." },
                { cls: "S", desc: "Slightly reactive. Standard footings." },
                { cls: "M", desc: "Moderately reactive. Stiffened slab." },
                { cls: "H1", desc: "Highly reactive, 40–60mm surface movement." },
                { cls: "H2", desc: "Highly reactive, 60–75mm." },
                { cls: "E", desc: "Extremely reactive, greater than 75mm." }
              ].map((row, idx) => (
                <div key={idx} className="flex flex-col md:grid md:grid-cols-[120px_1fr] p-6 md:p-0">
                  <div className="md:px-6 md:py-4 font-bold text-forest-green text-xl md:text-base md:border-r border-gray-200 pb-2 md:pb-4 flex items-center">
                    <span className="block md:hidden text-xs font-bold uppercase tracking-wider text-slate-400 mr-3">Class</span>
                    {row.cls}
                  </div>
                  <div className="md:px-6 md:py-4 text-slate-950 font-light flex items-center">
                    {row.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <p className="text-lg text-gray-600 font-light leading-relaxed">
            <strong className="font-medium text-slate-950">Class P</strong> sits outside the reactivity scale. Applied when conditions fall outside the standard AS 2870 framework, fill, steep slope, soft or collapsing soils, reactivity beyond Class E, or proximity to significant trees and water courses. Requires individual engineering assessment.
          </p>
        </FadeIn>
      </section>

      {/* Section 8: What that means for your suburb */}
      <section className="py-16 px-6 lg:px-12 max-w-4xl mx-auto border-t border-gray-100">
        <FadeIn>
          <h2 className="text-3xl font-light tracking-tight font-montserrat text-slate-950 mb-8">
            What that means for your suburb
          </h2>
          <div className="text-lg text-gray-600 font-light leading-relaxed space-y-6">
            <p>
              Sydney is a mosaic. The likely classification changes with the underlying geology, and sometimes with the street.
            </p>
            <p>
              <strong className="font-medium text-slate-950">Ashfield Shale, Inner West.</strong> Marrickville, Dulwich Hill, Petersham, Summer Hill and surrounds. Residual clays over shale, typically moderate to highly reactive. Class M and H1 common.
            </p>
            <p>
              <strong className="font-medium text-slate-950">Hawkesbury Sandstone, North Shore and Northern Beaches.</strong> Depends on how much weathered soil sits above the rock. Shallow rock classifies favourably. Deeper profiles behave like clay and need to be investigated, not assumed.
            </p>
            <p>
              <strong className="font-medium text-slate-950">Bringelly Shale, Western Sydney.</strong> The most reactive common profile in metropolitan Sydney. H1 and H2 outcomes frequent across the Cumberland Plain.
            </p>
            <p>
              <strong className="font-medium text-slate-950">Liverpool, Campbelltown, Georges River corridor.</strong> Legacy fill, alluvial soils, and reactive clays push a higher proportion of sites into Class P here than elsewhere in Sydney.
            </p>
            <p className="text-xl font-medium text-slate-950 mt-8 pt-6 border-t border-gray-100">
              Two doors down from a Class S, you can have a Class H1. Which is why the fieldwork matters.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Section 9: Common questions */}
      <section className="py-16 px-6 lg:px-12 max-w-4xl mx-auto border-t border-gray-100">
        <FadeIn>
          <h2 className="text-3xl font-light tracking-tight font-montserrat text-slate-950 mb-6">
            Common questions
          </h2>
          <p className="text-lg text-gray-600 font-light leading-relaxed">
            What we hear most often from Sydney homeowners and architects, how long a report stays valid, whether you need a classification for a granny flat, what a Class P means for your build, is on <Link href="/faq" className="text-forest-green hover:underline font-medium">the full FAQ</Link>. For anything else, <Link href="/contact" className="text-forest-green hover:underline font-medium">speak to the Principal Engineer</Link>.
          </p>
        </FadeIn>
      </section>

      {/* Section 10: Close CTA block */}
      <section className="mt-16 py-24 px-6 lg:px-12 bg-slate-950 text-white rounded-t-[2.5rem]">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-4xl sm:text-5xl font-montserrat font-light tracking-tight mb-8">
              Start with a site meeting.
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 font-light leading-relaxed max-w-2xl mx-auto mb-12">
              Every SFGEO engagement begins with the Principal Engineer on your ground, reading your plans and your soil. That is where the value begins, and why the report you receive is the report your project actually needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href="/contact"
                className="group relative px-8 py-4 text-sm font-semibold tracking-wide text-slate-950 bg-white overflow-hidden flex items-center justify-center gap-2 rounded-full hover:bg-gray-100 transition-colors shadow-lg w-full sm:w-auto"
              >
                Book a site meeting <ArrowRightIcon className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="tel:0423483555"
                className="group relative px-8 py-4 text-sm font-semibold tracking-wide text-white border border-white/30 overflow-hidden flex items-center justify-center gap-2 rounded-full hover:bg-white/10 transition-colors w-full sm:w-auto"
              >
                0423 483 555
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}
