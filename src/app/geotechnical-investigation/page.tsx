import { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "./MotionWrapper";

export const metadata: Metadata = {
  title: "Geotechnical Investigation Sydney | AS 1726 Site Investigation | SFGEO",
  description: "Boutique geotechnical investigations across Sydney to AS 1726. Principal-Engineer-led, scoped per site. Boreholes, in-situ testing, lab work, and engineering reports for residential and commercial projects.",
  alternates: {
    canonical: "/geotechnical-investigation",
  },
  openGraph: {
    title: "Geotechnical Investigation Sydney | SFGEO",
    description: "AS 1726 site investigations across Sydney. Principal-Engineer-led, scoped per site.",
    url: "/geotechnical-investigation",
    type: "website",
  },
  twitter: {
    title: "Geotechnical Investigation Sydney | SFGEO",
    description: "AS 1726 site investigations across Sydney. Principal-Engineer-led, scoped per site.",
  },
};

export default function GeotechnicalInvestigationPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@id": "https://sfgeo.com.au/",
          "name": "Home"
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@id": "https://sfgeo.com.au/geotechnical-investigation",
          "name": "Geotechnical Investigation"
        }
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://sfgeo.com.au/geotechnical-investigation#service",
    "name": "Geotechnical Investigation",
    "serviceType": "Geotechnical site investigation to AS 1726",
    "provider": { "@id": "https://sfgeo.com.au/#organization" },
    "areaServed": { "@type": "City", "name": "Sydney" },
    "description": "AS 1726 geotechnical investigations across Sydney. Boreholes, in-situ testing, laboratory work and engineering reports for residential and commercial projects, scoped per site and delivered fixed-fee."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the difference between a site classification and a geotechnical investigation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A site classification reads the upper soils for reactivity and answers a single question: how much will the ground move with the seasons. A geotechnical investigation reads the section. It returns engineering parameters that the classification is not built to provide: bearing capacities, settlement estimates, excavation conditions, foundation system advice. Most Sydney homes need only a classification. Projects whose designs interact with the ground beyond the reactive zone need an investigation."
        }
      },
      {
        "@type": "Question",
        "name": "When does a council require an AS 1726 investigation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Council DA conditions can name AS 1726 explicitly, particularly for sites with slope, fill, contamination history, or significant excavation. The trigger most often comes through the structural engineer or certifier rather than the council directly. A Class P outcome flagged in an earlier site classification is also a common pathway, since Class P sites sit outside AS 2870's framework and require individual geotechnical assessment."
        }
      },
      {
        "@type": "Question",
        "name": "How long does a geotechnical investigation take in Sydney?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Investigation timelines depend on scope, access, and the laboratory programme. A straightforward investigation with one round of in-situ testing returns inside two weeks. Complex programmes with rock coring or multi-stage lab testing run longer and are confirmed at the site meeting. Urgent turnaround is available where a DA, CC, or settlement timeline requires it."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need a geotechnical investigation if my structural engineer hasn't asked for one?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "If your structural engineer hasn't requested one, the design likely doesn't require it. The exception is where you suspect ground conditions that an earlier site classification didn't read: fill, perched groundwater, proximity to significant trees, or soft surface soils over compressible layers. For projects within the Sydney Metro, a conversation with the Principal Engineer before committing to a deeper scope is the right starting point. The site meeting is at no charge if the result is that an investigation isn't warranted."
        }
      },
      {
        "@type": "Question",
        "name": "Do you handle rock coring for basement excavations?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. SFGEO is equipped for rock coring across the common Sydney rock profiles: Hawkesbury Sandstone, Ashfield Shale, Mittagong Formation, and Bringelly Shale. Core-barrel attachments on the 4WD-mounted rig handle the work. Coring scope and intervals are agreed at the site meeting, and access constraints are factored into the programme from the start."
        }
      },
      {
        "@type": "Question",
        "name": "Is a geotechnical investigation required for a swimming pool on a sloping site?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Not by default. Most pool projects sit comfortably under a site classification, and the structural engineer designing the pool shell will specify what they need. An investigation becomes the right scope where the slope is significant, the pool sits close to a property boundary or retaining structure, or the site classification has flagged Class P. The site meeting establishes which scope applies."
        }
      }
    ]
  };

  return (
    <div className="bg-white text-slate-950 font-inter min-h-screen selection:bg-forest-green selection:text-white pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col gap-10">

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 w-full border-b border-gray-100 lg:border-none pb-6 lg:pb-0">
            <h3 className="text-[11px] font-bold tracking-[0.2em] text-forest-green uppercase m-0 text-center lg:text-left w-full lg:w-auto">
              FAMILY OWNED • INDEPENDENT • SYDNEY BASED
            </h3>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left flex-1">
              <h1 className="text-4xl sm:text-5xl font-montserrat font-light tracking-tight text-slate-950 max-w-4xl mb-0 leading-tight w-full">
                Geotechnical Investigation Sydney.<br />
                <span className="font-semibold">The Deeper Read.</span>
              </h1>

              <div className="w-[96px] h-[3px] bg-forest-green mt-5 mb-5 mx-auto lg:mx-0"></div>

              {/* Mobile CTAs */}
              <div className="lg:hidden flex flex-col items-center gap-4 w-full mb-8">
                <Link
                  href="tel:+61423483555"
                  className="flex items-center justify-center px-5 py-2.5 bg-gradient-to-b from-[#346b43] to-forest-green text-white rounded-full shadow-[0_8px_20px_-6px_rgba(45,90,58,0.4)] hover:shadow-[0_12px_24px_-8px_rgba(45,90,58,0.6)] hover:brightness-105 transition-all hover:-translate-y-0.5 w-[70%] sm:w-[240px] h-[46px]"
                >
                  <span className="text-xs font-semibold tracking-wide">Discuss your project</span>
                </Link>
                <Link
                  href="/contact?subject=Geotechnical%20Investigation%20Enquiry"
                  className="flex items-center justify-center px-5 py-2.5 bg-white text-forest-green rounded-full shadow-[inset_0_0_0_1px_rgba(45,90,58,0.25),0_4px_10px_-4px_rgba(0,0,0,0.05)] hover:bg-forest-green/5 hover:shadow-[inset_0_0_0_1px_rgba(45,90,58,0.4),0_6px_14px_-4px_rgba(0,0,0,0.1)] transition-all hover:-translate-y-0.5 w-[70%] sm:w-[240px] h-[46px]"
                >
                  <span className="text-xs font-semibold tracking-wide">Book a site meeting</span>
                </Link>
              </div>

              <p className="text-xl text-gray-500 font-light leading-relaxed max-w-2xl mb-8 lg:mb-0 w-full">
                Principal-Engineer-led, every investigation is scoped to the questions your project is asking. The deeper read your design depends on, delivered by the engineer who attends your site.
              </p>
            </div>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex flex-row items-center gap-4 shrink-0">
              <Link
                href="tel:+61423483555"
                className="flex items-center justify-center px-5 py-2.5 bg-gradient-to-b from-[#346b43] to-forest-green text-white rounded-full shadow-[0_8px_20px_-6px_rgba(45,90,58,0.4)] hover:shadow-[0_12px_24px_-8px_rgba(45,90,58,0.6)] hover:brightness-105 transition-all hover:-translate-y-0.5 w-[240px] h-[46px]"
              >
                <span className="text-xs font-semibold tracking-wide">Discuss your project</span>
              </Link>
              <Link
                href="/contact?subject=Geotechnical%20Investigation%20Enquiry"
                className="flex items-center justify-center px-5 py-2.5 bg-white text-forest-green rounded-full shadow-[inset_0_0_0_1px_rgba(45,90,58,0.25),0_4px_10px_-4px_rgba(0,0,0,0.05)] hover:bg-forest-green/5 hover:shadow-[inset_0_0_0_1px_rgba(45,90,58,0.4),0_6px_14px_-4px_rgba(0,0,0,0.1)] transition-all hover:-translate-y-0.5 w-[240px] h-[46px]"
              >
                <span className="text-xs font-semibold tracking-wide">Book a site meeting</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* H2 #1 — Where the classification ends and the investigation begins */}
      <section className="py-16 px-6 lg:px-12 max-w-4xl mx-auto border-t border-gray-100">
        <FadeIn>
          <h2 className="text-3xl font-light tracking-tight font-montserrat text-slate-950 mb-8">
            Where the classification ends and the investigation begins
          </h2>
          <div className="text-lg text-gray-600 font-light leading-relaxed space-y-6">
            <p>
              The site classification is a single answer to a single question. Will the upper soils move, and by how much. For most Sydney homes on most Sydney blocks that is the right question, asked at the right depth, and <Link href="/site-classification" className="text-forest-green hover:underline font-medium">a classification done properly</Link> is sufficient.
            </p>
            <p>
              A geotechnical investigation asks a different set of questions. What sits beneath the reactive zone. Where the rock surface lies and how it weathers. Whether the fill is engineered or legacy. How groundwater moves through the profile in February and again in August. The investigation is the instrument the engineer turns to when the design begins to interact with the ground in more than one direction.
            </p>
            <p>
              An investigation is not a larger classification. It is a different instrument, used for a different reading.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* H2 #2 — What an investigation reads */}
      <section className="py-16 px-6 lg:px-12 max-w-4xl mx-auto border-t border-gray-100">
        <FadeIn>
          <h2 className="text-3xl font-light tracking-tight font-montserrat text-slate-950 mb-8">
            What an investigation reads
          </h2>
          <div className="text-lg text-gray-600 font-light leading-relaxed space-y-6">
            <p>
              Boreholes are not the investigation. They are the means by which the investigation reads the section. The depth and spacing of the boreholes, the instruments deployed within them, the sampling protocol, and the laboratory programme that follows are all selected for the questions the design is asking.
            </p>
            <p>
              The instruments are familiar to engineering geologists and unfamiliar to most homeowners, which is appropriate. The Standard Penetration Test measures the resistance of soils to a calibrated driven sampler, returning a profile of soil strength at depth. The Dynamic Cone Penetrometer reads stiffness in granular materials and shallow profiles. The Cone Penetrometer Test, where ground conditions warrant it, returns a continuous profile of tip resistance, sleeve friction, and pore pressure response. Undisturbed sampling at engineered depths preserves the soil structure for laboratory work that disturbed sampling cannot support. Groundwater is observed during drilling and recorded against the profile.
            </p>
            <p>
              The laboratory programme is scoped to the site, not applied by default. Shrink-swell indices where reactivity is the question, triaxial and consolidation testing where settlement governs, acid sulphate or salinity screening where the geology warrants it. The cost of laboratory work the site does not need is the cost of the laboratory work the site does need, paid by a different client.
            </p>
            <p>
              The investigation is to AS 1726 what the classification is to AS 2870. A different question. A different programme. A different document.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* H2 #3 — How SFGEO investigates */}
      <section className="py-16 px-6 lg:px-12 max-w-4xl mx-auto border-t border-gray-100">
        <FadeIn>
          <h2 className="text-3xl font-light tracking-tight font-montserrat text-slate-950 mb-8">
            How SFGEO investigates
          </h2>
          <div className="text-lg text-gray-600 font-light leading-relaxed space-y-6">
            <p>
              An investigation engagement begins on site. The Principal Engineer attends with the project drawings, walks the ground with the client, and identifies the questions the design is asking before the scope is written. A fixed-fee proposal follows, scoped against those questions and confirmed in writing.
            </p>
            <p>
              Fieldwork is attended by <Link href="/about" className="text-forest-green hover:underline font-medium">the engineer who will sign the report</Link>. Sampling and instrument decisions are made on the day, against the scope and the conditions. Laboratory work is scoped at the same time. The interpretive analysis is done by the engineer who read the ground.
            </p>
            <p>
              An investigation is one professional, attending, throughout. The drilling crew, the field engineer, the laboratory liaison, the report author, the signing engineer are not five people. They are one engineer with a rig and a NATA-accredited laboratory partner. That is the engagement.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Pull quote — between H2 #3 and H2 #4 */}
      <section className="py-12 px-6 lg:px-12 max-w-4xl mx-auto">
        <FadeIn>
          <div className="p-10 bg-slate-50 border border-gray-100 rounded-2xl">
            <p className="text-2xl font-light text-slate-950 leading-tight">
              A classification reads the surface. An investigation <span className="font-semibold text-forest-green">reads the section</span>. The instrument changes because the question has changed.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* H2 #4 — Scope and proposal */}
      <section className="py-16 px-6 lg:px-12 max-w-4xl mx-auto border-t border-gray-100">
        <FadeIn>
          <h2 className="text-3xl font-light tracking-tight font-montserrat text-slate-950 mb-8">
            Scope and proposal
          </h2>
          <div className="text-lg text-gray-600 font-light leading-relaxed space-y-6">
            <p>
              Investigations are scoped against the site, the design, and the questions the design is asking. SFGEO issues a fixed-fee proposal in writing after the site meeting.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* H2 #5 — Access */}
      <section className="py-16 px-6 lg:px-12 max-w-4xl mx-auto border-t border-gray-100">
        <FadeIn>
          <h2 className="text-3xl font-light tracking-tight font-montserrat text-slate-950 mb-8">
            Access
          </h2>
          <div className="text-lg text-gray-600 font-light leading-relaxed space-y-6">
            <p>
              Sites that require an investigation are often the sites a truck-mounted rig cannot reach. SFGEO is mobilised on a 4WD-mounted rig with auger flights to nine metres, supplemented by motorised hand augers and core-barrel attachments for zero-clearance and restricted positions. The full fleet operates across the Sydney Metro and is configured for residential, commercial, and tight-access investigation work without subcontracted mobilisation. <Link href="/drilling" className="text-forest-green hover:underline font-medium">Full access capability and rig configuration</Link>.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* H2 #6 — What the report carries (renumbered from H2 #7) */}
      <section className="py-16 px-6 lg:px-12 max-w-4xl mx-auto border-t border-gray-100">
        <FadeIn>
          <h2 className="text-3xl font-light tracking-tight font-montserrat text-slate-950 mb-8">
            What the report carries
          </h2>
          <div className="text-lg text-gray-600 font-light leading-relaxed space-y-6">
            <p>
              An AS 1726 report is two documents in one binding. The factual report carries the data. Borehole logs, in-situ test results, laboratory results, and groundwater observations, recorded in the form a reviewing engineer can read at full depth. The interpretive report carries the engineering: bearing capacities, foundation systems, settlement estimates, excavation conditions, and retaining wall parameters. The factual section is auditable. The interpretive section is signed by the engineer who attended the site.
            </p>
            <p>
              AS 1726 and <Link href="/site-classification" className="text-forest-green hover:underline font-medium">AS 2870</Link> are different standards for different questions. The investigation report answers what the design is asking of the ground. The classification report answers what the slab is asking of the surface. SFGEO issues either, scoped to the work.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Closing CTA — mirrors SC page's "Start with a site meeting" */}
      <section className="mt-16 py-24 px-6 lg:px-12 bg-[#050A07] text-white rounded-t-[3rem] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(45,90,58,0.15),transparent)] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <FadeIn>
            <h2 className="text-4xl sm:text-6xl font-montserrat font-light tracking-tight mb-8">
              Start with a <span className="font-semibold">site meeting.</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 font-light leading-relaxed max-w-2xl mx-auto mb-12">
              Every investigation engagement begins on site, with the Principal Engineer and the project drawings. The questions the design is asking are identified before the scope is written. The proposal that follows is fixed-fee, in writing, scoped to those questions. Detailed answers to common questions are on <Link href="/faq" className="text-white underline hover:text-white/80 transition-colors">the full FAQ</Link>.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href="/contact?subject=Geotechnical%20Investigation%20Enquiry"
                className="flex items-center justify-center px-8 py-2.5 bg-gradient-to-b from-[#346b43] to-forest-green text-white rounded-full shadow-[0_8px_20px_-6px_rgba(45,90,58,0.4)] hover:shadow-[0_12px_24px_-8px_rgba(45,90,58,0.6)] hover:brightness-105 transition-all hover:-translate-y-0.5 w-full sm:w-[280px] h-[46px] text-xs font-semibold tracking-wide"
              >
                Book a site meeting
              </Link>
              <Link
                href="tel:+61423483555"
                className="flex items-center justify-center px-8 py-2.5 bg-white text-forest-green rounded-full shadow-[inset_0_0_0_1px_rgba(45,90,58,0.25),0_4px_10px_-4px_rgba(0,0,0,0.05)] hover:bg-forest-green/5 hover:shadow-[inset_0_0_0_1px_rgba(45,90,58,0.4),0_6px_14px_-4px_rgba(0,0,0,0.1)] transition-all hover:-translate-y-0.5 w-full sm:w-[280px] h-[46px] text-xs font-semibold tracking-wide"
              >
                Discuss your project
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}
