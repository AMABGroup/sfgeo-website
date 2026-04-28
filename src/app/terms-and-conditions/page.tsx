"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function TermsAndConditionsPage() {
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
            Terms and Conditions
          </motion.h1>
          <motion.div variants={fadeIn} className="w-[96px] h-[3px] bg-forest-green mt-5 mb-5 mx-0"></motion.div>
          <motion.p 
            variants={fadeIn} 
            className="text-xl text-gray-500 font-light leading-relaxed max-w-[800px] mb-4"
          >
            The terms that apply when you engage SFGEO for geotechnical services.
          </motion.p>
          
          <motion.p 
            variants={fadeIn} 
            className="text-sm text-gray-400 font-semibold tracking-wider uppercase mb-12 border-b border-gray-100 pb-8"
          >
            Effective Date: July 2025
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
              <strong>Introduction:</strong> Welcome to Solid Foundation Geotechnical (a business under AMAB Group Pty Ltd, ABN 54 686 815 252). By accessing our website and services, you agree to these terms.
            </p>

            <h2 className="text-2xl font-montserrat font-bold text-slate-black mt-12 mb-6">1. Use of Website</h2>
            <p>
              The content on this website is provided in good faith for general informational purposes. We make no representations or warranties regarding the completeness, accuracy, or suitability of this information for your particular use or project.
            </p>

            <h2 className="text-2xl font-montserrat font-bold text-slate-black mt-12 mb-6">2. Services</h2>
            <p>
              Our professional geotechnical services are subject to a formal engagement and documented fee proposal. Any technical advice provided is based strictly on the observable and tested site conditions at the specific time of service or inspection.
            </p>

            <h2 className="text-2xl font-montserrat font-bold text-slate-black mt-12 mb-6">3. Intellectual Property</h2>
            <p>
              All content, including text, graphics, logos, and report formats on this website, is the exclusive property of AMAB Group Pty Ltd. You may not reproduce, distribute, or transmit any part of this site in any form without prior written permission.
            </p>

            <h2 className="text-2xl font-montserrat font-bold text-slate-black mt-12 mb-6">4. Third-Party Links</h2>
            <p>
              Our website may contain links to external third-party websites. We are not responsible for the content, privacy practices, or operational procedures of these respective external sites.
            </p>

            <h2 className="text-2xl font-montserrat font-bold text-slate-black mt-12 mb-6">5. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, AMAB Group Pty Ltd and Solid Foundation Geotechnical disclaim all liability for any direct, indirect, incidental, or consequential loss or damage arising from your use of this website or our external consulting services.
            </p>

            <h2 className="text-2xl font-montserrat font-bold text-slate-black mt-12 mb-6">6. Privacy</h2>
            <p>
              The collection and handling of your personal information are governed by our <Link href="/privacy-policy" className="text-forest-green font-semibold hover:underline">Privacy Policy</Link>.
            </p>

            <h2 className="text-2xl font-montserrat font-bold text-slate-black mt-12 mb-6">7. Governing Law</h2>
            <p>
              These Terms and Conditions are governed by and construed in accordance with the laws of New South Wales, Australia. Any disputes arising in connection with these terms shall be subject to the exclusive jurisdiction of the courts of New South Wales.
            </p>

            <h2 className="text-2xl font-montserrat font-bold text-slate-black mt-12 mb-6">8. Changes</h2>
            <p>
              We reserve the right to amend these Terms and Conditions at our discretion. Any updates will be published immediately on this page, and your continued use of our website constitutes acceptance of the modified terms.
            </p>

            <div className="mt-16 pt-8 border-t border-gray-100">
              <h2 className="text-xl font-montserrat font-bold text-slate-black mb-4">Contact</h2>
              <p>
                If you require clarification regarding these terms, please contact us at: <br />
                <a href="mailto:info@sfgeo.com.au" className="text-forest-green font-semibold hover:underline mt-2 inline-block">info@sfgeo.com.au</a>
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
