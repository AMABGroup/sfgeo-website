"use client";

import { motion } from "framer-motion";

export default function PrivacyPolicyPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  return (
    <div className="bg-white text-slate-black font-inter min-h-screen">
      <section className="pt-32 pb-16 px-6 lg:px-12 max-w-7xl mx-auto">
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          
          {/* Single horizontal row for header signature */}
          <motion.div variants={fadeIn} className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 pb-10 border-b border-gray-100">
            <h3 className="text-[11px] font-bold tracking-[0.2em] text-forest-green uppercase m-0 max-w-sm">
              LOCALLY OWNED • INDEPENDENT • SYDNEY BASED
            </h3>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://au.linkedin.com/company/sfgeo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 rounded-full shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 group/link w-max"
              >
                <svg className="w-4 h-4 text-[#0A66C2] transition-transform group-hover/link:scale-110" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.475-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span className="text-xs font-semibold text-slate-black tracking-wide">Connect on LinkedIn</span>
              </a>
              <a 
                href="https://www.instagram.com/sfgeo_syd/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 rounded-full shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 group/link w-max"
              >
                <svg className="w-4 h-4 text-[#E1306C] transition-transform group-hover/link:scale-110" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
                <span className="text-xs font-semibold text-slate-black tracking-wide">Follow on Instagram</span>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Architectural Narrow Content Wrapper */}
      <section className="px-6 pb-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-[800px] mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl font-montserrat font-bold tracking-tight text-slate-black mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-400 font-semibold tracking-wider uppercase mb-12 border-b border-gray-100 pb-8">
            Last Updated: July 2025
          </p>

          <div className="prose prose-lg prose-slate text-gray-600 font-light leading-loose">
            <p>
              <strong>Entity:</strong> Solid Foundation Geotechnical (a business under AMAB Group Pty Ltd, ABN 54 686 815 252).
            </p>
            <p>
              This Privacy Policy outlines how Solid Foundation Geotechnical ("we", "our", or "us") manages your personal information. We respect the privacy of individuals and are committed to protecting the personal information we collect, acting in accordance with the Australian Privacy Principles (APPs).
            </p>

            <h2 className="text-2xl font-montserrat font-bold text-slate-black mt-12 mb-6">1. What we collect</h2>
            <p>
              We collect personal information necessary for us to provide our geotechnical engineering services. This may include your name, contact details (email address, phone number), site addresses, architectural plans, and billing information.
            </p>

            <h2 className="text-2xl font-montserrat font-bold text-slate-black mt-12 mb-6">2. How we collect it</h2>
            <p>
              We collect your personal information directly from you when you interact with us. This occurs when you submit an inquiry through our website contact form, correspond with us via email or telephone, or engage us formally for our consulting services. We may also collect project details indirectly via your authorized architects or structural engineers if you have instructed them to retain our services on your behalf.
            </p>

            <h2 className="text-2xl font-montserrat font-bold text-slate-black mt-12 mb-6">3. Why we collect it</h2>
            <p>
              We collect your data primarily to deliver our specialised geotechnical advice and site reporting. Specifically, we use it to calculate tailored fee proposals, conduct necessary site investigations, issue verified engineering reports (such as AS 2870 site classifications), process payments, and maintain our internal records.
            </p>

            <h2 className="text-2xl font-montserrat font-bold text-slate-black mt-12 mb-6">4. Disclosure of information</h2>
            <p>
              We do not sell your personal information to third parties. We will only disclose your information to authorized third parties when required to execute your project—such as sharing site parameters with your designated structural engineer or local Sydney Council—or when explicitly required by law.
            </p>

            <h2 className="text-2xl font-montserrat font-bold text-slate-black mt-12 mb-6">5. Storage and security</h2>
            <p>
              Your personal information is stored securely in our digital environments. We implement industry-standard administrative, physical, and technical safeguards to protect your project data and personal details against unauthorized access, loss, or misuse.
            </p>

            <h2 className="text-2xl font-montserrat font-bold text-slate-black mt-12 mb-6">6. Access and correction</h2>
            <p>
              You have the right to request access to the personal information we hold about you and to ask for it to be updated or corrected. If you wish to review your information, please contact us directly. We will respond promptly within a reasonable timeframe.
            </p>

            <h2 className="text-2xl font-montserrat font-bold text-slate-black mt-12 mb-6">7. Cookies</h2>
            <p>
              Our website utilizes essential cookies to enhance your browsing experience and monitor anonymous site traffic analytics. These cookies do not collect personally identifiable information. You maintain the right to disable cookies via your browser settings, though this may affect the usability of certain site features.
            </p>

            <h2 className="text-2xl font-montserrat font-bold text-slate-black mt-12 mb-6">8. Changes to policy</h2>
            <p>
              We may update this Privacy Policy periodically to reflect changes in our operational procedures or to comply with evolving legal and regulatory frameworks. The most recent version will always be published on this page, indicated by the "Last Updated" date at the top.
            </p>

            <div className="mt-16 pt-8 border-t border-gray-100">
              <h2 className="text-xl font-montserrat font-bold text-slate-black mb-4">Contact</h2>
              <p>
                If you have any questions or concerns regarding this Privacy Policy, please contact us at: <br />
                <a href="mailto:info@sfgeo.com.au" className="text-forest-green font-semibold hover:underline mt-2 inline-block">info@sfgeo.com.au</a>
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
