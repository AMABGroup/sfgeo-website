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
      <section className="pt-32 pb-16 px-6 lg:px-12 max-w-7xl mx-auto text-left">
        <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-[800px] mx-auto">
          
          <motion.h1 
            variants={fadeIn} 
            className="text-3xl sm:text-4xl font-montserrat font-light tracking-tight text-slate-950 mb-4"
          >
            Privacy Policy
          </motion.h1>
          <motion.div variants={fadeIn} className="w-[96px] h-[3px] bg-forest-green mt-5 mb-5 mx-0"></motion.div>
          <motion.p 
            variants={fadeIn} 
            className="text-xl text-gray-500 font-light leading-relaxed max-w-[800px] mb-4"
          >
            How Solid Foundation Geotechnical collects, uses, and protects your information.
          </motion.p>
          
          <motion.p 
            variants={fadeIn} 
            className="text-sm text-gray-400 font-semibold tracking-wider uppercase mb-12 border-b border-gray-100 pb-8"
          >
            Last Updated: July 2025
          </motion.p>
        </motion.div>
      </section>

      {/* Architectural Narrow Content Wrapper */}
      <section className="px-6 pb-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-[800px] mx-auto prose prose-lg prose-slate"
        >

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
