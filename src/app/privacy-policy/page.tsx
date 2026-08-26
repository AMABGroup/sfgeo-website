import { FadeIn } from "../site-classification/MotionWrapper";

const SECTIONS: { t: string; body: React.ReactNode }[] = [
  {
    t: "1. What We Collect",
    body: (
      <p>
        We collect personal information necessary for us to provide our geotechnical engineering services. This may include your name, contact details (email address, phone number), site addresses, architectural plans, and billing information.
      </p>
    ),
  },
  {
    t: "2. How We Collect It",
    body: (
      <p>
        We collect your personal information directly from you when you interact with us. This occurs when you submit an enquiry through our website contact form, correspond with us via email or telephone, or engage us formally for our consulting services. We may also collect project details indirectly via your authorised architects or structural engineers if you have instructed them to retain our services on your behalf.
      </p>
    ),
  },
  {
    t: "3. Why We Collect It",
    body: (
      <p>
        We collect your data primarily to deliver our specialised geotechnical advice and site reporting. Specifically, we use it to prepare tailored fee proposals, conduct site investigations, issue engineering reports (such as AS 2870 site classifications), process payments, and maintain our internal records.
      </p>
    ),
  },
  {
    t: "4. Disclosure Of Information",
    body: (
      <p>
        We do not sell your personal information to third parties. We will only disclose your information to authorised third parties when required to deliver your project (such as sharing site parameters with your designated structural engineer, certifier or local council), or when required by law.
      </p>
    ),
  },
  {
    t: "5. Storage And Security",
    body: (
      <p>
        Your personal information is stored securely in our digital environments. We implement administrative, physical and technical safeguards to protect your project data and personal details against unauthorised access, loss or misuse.
      </p>
    ),
  },
  {
    t: "6. Access And Correction",
    body: (
      <p>
        You have the right to request access to the personal information we hold about you and to ask for it to be updated or corrected. If you wish to review your information, please contact us directly. We will respond within a reasonable timeframe.
      </p>
    ),
  },
  {
    t: "7. Cookies And Third-Party Services",
    body: (
      <>
        <p>
          Our website uses cookies to support core site functionality and to measure how visitors find and engage with us. Some cookies are set by third-party services we integrate.
        </p>
        <p>
          <strong className="font-medium text-slate-950">Google Ads conversion tracking.</strong> When you arrive at the site from a paid search advertisement and then submit our contact form or use the on-screen contact buttons, Google sets a short-lived identifier to attribute that enquiry to the campaign that brought you here. The identifier does not, on its own, contain your name or contact details.
        </p>
        <p>
          <strong className="font-medium text-slate-950">Google Maps.</strong> The contact page and site menu include an embedded map of our office, provided by Google Maps. Google may set its own cookies when the map loads.
        </p>
        <p>
          Both Google services are governed by Google&rsquo;s privacy policy, available at{" "}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-forest-green font-medium hover:underline">policies.google.com/privacy</a>. You can disable cookies through your browser settings, though some features (such as the embedded map) may not function correctly if cookies are blocked. Disabling cookies will not prevent you from contacting us by phone, email, or the contact form.
        </p>
      </>
    ),
  },
  {
    t: "8. Changes To This Policy",
    body: (
      <p>
        We may update this Privacy Policy periodically to reflect changes in our operational procedures or to comply with evolving legal and regulatory frameworks. The most recent version will always be published on this page, indicated by the date at the top.
      </p>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white text-slate-950 font-inter selection:bg-forest-green selection:text-white">
      {/* Hero */}
      <section className="pt-36 pb-14 px-6 lg:px-12 max-w-7xl mx-auto">
        <FadeIn className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.2em] text-forest-green mb-6 font-semibold">
            Privacy Policy &middot; Last Updated August 2026
          </p>
          <h1 className="text-4xl sm:text-6xl font-montserrat font-light tracking-tight leading-[1.08] mb-8">
            Your Information, <span className="font-semibold">Handled Properly.</span>
          </h1>
          <div className="w-[96px] h-[3px] bg-forest-green mb-8" />
          <p className="text-lg sm:text-xl text-gray-600 font-light leading-relaxed">
            How Solid Foundation Geotechnical — a business of AMAB Group Pty Ltd, ABN 54 686 815 252 — collects, uses and protects your personal information, in accordance with the Australian Privacy Principles.
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
              If you have any questions or concerns regarding this Privacy Policy, please contact us at{" "}
              <a href="mailto:info@sfgeo.com.au" className="text-forest-green font-medium hover:underline">info@sfgeo.com.au</a>.
            </p>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
