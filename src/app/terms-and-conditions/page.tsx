import Link from "next/link";
import { FadeIn } from "../site-classification/MotionWrapper";

const SECTIONS: { t: string; body: React.ReactNode }[] = [
  {
    t: "1. Use Of This Website",
    body: (
      <p>
        The content on this website is provided in good faith for general informational purposes. It is not engineering advice for any particular site or project, and we make no representations or warranties regarding its completeness, accuracy, or suitability for your particular use.
      </p>
    ),
  },
  {
    t: "2. Services",
    body: (
      <p>
        Our professional geotechnical services are provided under a formal engagement and a written fee proposal, whose terms govern that engagement. Any technical advice we give is based strictly on the observable and tested site conditions at the specific time of service or inspection.
      </p>
    ),
  },
  {
    t: "3. Quotes And Indicative Pricing",
    body: (
      <p>
        Fees shown on this website (such as &ldquo;from&rdquo; pricing) are indicative starting points only. Every fee is confirmed in a written quote scoped to the specific site, access and project before work begins, and the written quote prevails over anything on this website.
      </p>
    ),
  },
  {
    t: "4. Intellectual Property",
    body: (
      <p>
        All content on this website — including text, graphics, photography, logos and report formats — is the property of AMAB Group Pty Ltd. You may not reproduce, distribute or transmit any part of this site in any form without prior written permission.
      </p>
    ),
  },
  {
    t: "5. Third-Party Links",
    body: (
      <p>
        This website may contain links to external third-party websites. We are not responsible for the content, privacy practices, or operation of those external sites.
      </p>
    ),
  },
  {
    t: "6. Limitation Of Liability",
    body: (
      <p>
        To the fullest extent permitted by law, AMAB Group Pty Ltd and Solid Foundation Geotechnical disclaim all liability for any direct, indirect, incidental or consequential loss or damage arising from your use of this website. Liability in respect of engaged professional services is addressed in the written terms of each engagement.
      </p>
    ),
  },
  {
    t: "7. Privacy",
    body: (
      <p>
        The collection and handling of your personal information are governed by our{" "}
        <Link href="/privacy-policy" className="text-forest-green font-medium hover:underline">Privacy Policy</Link>.
      </p>
    ),
  },
  {
    t: "8. Governing Law",
    body: (
      <p>
        These Terms and Conditions are governed by and construed in accordance with the laws of New South Wales, Australia. Any disputes arising in connection with these terms are subject to the exclusive jurisdiction of the courts of New South Wales.
      </p>
    ),
  },
  {
    t: "9. Changes",
    body: (
      <p>
        We may amend these Terms and Conditions from time to time. Updates are published on this page, and your continued use of the website constitutes acceptance of the amended terms.
      </p>
    ),
  },
];

export default function TermsAndConditionsPage() {
  return (
    <div className="bg-white text-slate-950 font-inter selection:bg-forest-green selection:text-white">
      {/* Hero */}
      <section className="pt-36 pb-14 px-6 lg:px-12 max-w-7xl mx-auto">
        <FadeIn className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.2em] text-forest-green mb-6 font-semibold">
            Terms &amp; Conditions &middot; Last Updated August 2026
          </p>
          <h1 className="text-4xl sm:text-6xl font-montserrat font-light tracking-tight leading-[1.08] mb-8">
            The Terms, <span className="font-semibold">In Plain Sight.</span>
          </h1>
          <div className="w-[96px] h-[3px] bg-forest-green mb-8" />
          <p className="text-lg sm:text-xl text-gray-600 font-light leading-relaxed">
            The terms that apply when you use this website, operated by Solid Foundation Geotechnical — a business of AMAB Group Pty Ltd, ABN 54 686 815 252. Engagements for professional services are governed by their own written fee proposals.
          </p>
        </FadeIn>
      </section>

      {/* Body */}
      <section className="px-6 lg:px-12 max-w-7xl mx-auto border-t border-gray-100">
        <div className="max-w-3xl py-16 lg:py-20">
          {SECTIONS.map((sec) => (
            <FadeIn key={sec.t} className="mb-12 last:mb-0">
              <h2 className="text-xl font-montserrat font-semibold text-slate-950 mb-2">{sec.t}</h2>
              <div className="h-px bg-forest-green w-8 mb-5" />
              <div className="space-y-4 text-[16px] text-gray-600 font-light leading-loose">{sec.body}</div>
            </FadeIn>
          ))}
          <FadeIn className="mt-16 pt-10 border-t border-gray-100">
            <h2 className="text-xl font-montserrat font-semibold text-slate-950 mb-3">Contact</h2>
            <p className="text-[16px] text-gray-600 font-light leading-loose">
              If you require clarification regarding these terms, please contact us at{" "}
              <a href="mailto:info@sfgeo.com.au" className="text-forest-green font-medium hover:underline">info@sfgeo.com.au</a>.
            </p>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
