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
            Terms and Conditions
          </h1>
          <p className="text-sm text-gray-400 font-semibold tracking-wider uppercase mb-12 border-b border-gray-100 pb-8">
            Effective Date: July 2025
          </p>

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
