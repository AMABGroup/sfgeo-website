import Link from "next/link";

export default function TermsAndConditionsPage() {
  return (
    <div className="bg-white text-slate-950 font-inter">
      <div className="max-w-2xl mx-auto px-6 pt-28 pb-24">
        <h1 className="text-2xl sm:text-3xl font-montserrat font-medium tracking-tight mb-2">Terms and Conditions</h1>
        <p className="text-sm text-gray-500 mb-10">
          Solid Foundation Geotechnical, a business of AMAB Group Pty Ltd (ABN 54 686 815 252). Last updated August 2026.
        </p>

        <div className="space-y-8 text-[15px] text-gray-700 leading-relaxed">
          <p>
            These terms apply to your use of this website. Engagements for professional services are governed by their own written fee proposals.
          </p>

          <div>
            <h2 className="font-semibold text-slate-950 mb-2">1. Use of this website</h2>
            <p>
              The content on this website is provided in good faith for general informational purposes. It is not engineering advice for any particular site or project, and we make no representations or warranties regarding its completeness, accuracy or suitability for your use.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-slate-950 mb-2">2. Services</h2>
            <p>
              Our professional services are provided under a formal engagement and a written fee proposal, whose terms govern that engagement. Technical advice is based on the observable and tested site conditions at the time of service or inspection.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-slate-950 mb-2">3. Quotes and indicative pricing</h2>
            <p>
              Fees shown on this website (such as &ldquo;from&rdquo; pricing) are indicative starting points only. Every fee is confirmed in a written quote scoped to the specific site, access and project before work begins. The written quote prevails over anything on this website.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-slate-950 mb-2">4. Intellectual property</h2>
            <p>
              All content on this website — text, graphics, photography, logos and report formats — is the property of AMAB Group Pty Ltd. You may not reproduce, distribute or transmit any part of this site without prior written permission.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-slate-950 mb-2">5. Third-party links</h2>
            <p>
              This website may link to external third-party websites. We are not responsible for the content, privacy practices or operation of those sites.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-slate-950 mb-2">6. Limitation of liability</h2>
            <p>
              To the fullest extent permitted by law, AMAB Group Pty Ltd and Solid Foundation Geotechnical disclaim all liability for any direct, indirect, incidental or consequential loss or damage arising from your use of this website. Liability in respect of engaged professional services is addressed in the written terms of each engagement.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-slate-950 mb-2">7. Privacy</h2>
            <p>
              The collection and handling of your personal information are governed by our{" "}
              <Link href="/privacy-policy" className="text-forest-green hover:underline">Privacy Policy</Link>.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-slate-950 mb-2">8. Governing law</h2>
            <p>
              These terms are governed by the laws of New South Wales, Australia. Any disputes are subject to the exclusive jurisdiction of the courts of New South Wales.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-slate-950 mb-2">9. Changes</h2>
            <p>
              We may amend these terms from time to time. Updates are published on this page, and continued use of the website constitutes acceptance of the amended terms.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-slate-950 mb-2">Contact</h2>
            <p>
              Questions about these terms:{" "}
              <a href="mailto:info@sfgeo.com.au" className="text-forest-green hover:underline">info@sfgeo.com.au</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
