"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  return (
    <div className="bg-off-white min-h-screen">
      <section className="py-24 sm:py-32 px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="relative">
          {/* Social Links placed at top right of the Hero container */}
          <motion.div variants={fadeIn} className="absolute -top-12 right-0 sm:top-0 sm:right-0 flex flex-col sm:flex-row gap-3 z-10 items-end sm:items-center">
            <a 
              href="https://au.linkedin.com/company/sfgeo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm border border-gray-200 rounded-full shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 group"
            >
              <svg className="w-4 h-4 text-[#0A66C2] transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.475-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span className="text-xs font-semibold text-slate-black tracking-wide">Connect on LinkedIn</span>
            </a>
            <a 
              href="https://www.instagram.com/sfgeo_syd/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm border border-gray-200 rounded-full shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 group"
            >
              <svg className="w-4 h-4 text-[#E1306C] transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
              <span className="text-xs font-semibold text-slate-black tracking-wide">Follow on Instagram</span>
            </a>
          </motion.div>

          <motion.p 
            variants={fadeIn}
            className="text-[11px] font-bold tracking-[0.2em] text-forest-green uppercase mb-4 pt-10 sm:pt-4"
          >
            LOCALLY OWNED • INDEPENDENT • SYDNEY BASED
          </motion.p>
          <motion.h1 
            variants={fadeIn}
            className="text-3xl font-bold tracking-tight sm:text-4xl font-montserrat text-slate-black mb-6 leading-tight pr-16 sm:pr-24"
          >
            15+ Years of Sydney <br className="hidden sm:block" />Geotechnical Engineering.
          </motion.h1>
          <div className="prose prose-lg text-gray-600 prose-headings:font-montserrat prose-headings:text-slate-black max-w-none">
            <motion.p variants={fadeIn} className="lead text-xl text-gray-900 font-medium tracking-tight">
              A newly established, boutique Sydney engineering consultancy in Sydney's Inner West, driven by a Principal with years of hands-on experience across the city's residential, commercial, and infrastructure projects.
            </motion.p>
            <motion.p variants={fadeIn} className="font-light leading-loose mt-4">
              Solid Foundation Geotechnical (SFGEO) was built to directly counter the corporate bloat of multi-disciplinary firms. While we are a fresh, independent consultancy, our foundation is built upon 15 years of deep expertise navigating Sydney's rigorous residential and expansive infrastructure builds.
            </motion.p>
            
            {/* The Independent Hook */}
            <motion.div variants={fadeIn} className="mt-16 p-8 bg-white border border-gray-100 rounded-xl shadow-sm">
              <h2 className="mt-0 text-xl font-semibold font-montserrat">Independent, Conflict-Free, and Client-Focused</h2>
              <p className="font-light text-base leading-loose mb-0 mt-4">
                Operating strictly independent of laboratory quotas or external corporate agendas, our advice remains wholly unbiased. When you hire SFGEO, our singular priority is providing the objective, expert geotechnical insight necessary to protect your interests and optimise your specific site.
              </p>
            </motion.div>

            {/* Why Choose a Boutique Consultancy? */}
            <motion.div variants={fadeIn} className="mt-24">
              <h2 className="text-3xl font-bold font-montserrat tracking-tight mb-10">Why Choose SFGEO as your Geotechnical Engineering Consultancy</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold font-montserrat mt-0 mb-4 text-forest-green">Direct Principal Access</h3>
                  <p className="text-sm font-light leading-loose m-0 text-gray-600">
                    Your project is handled directly by a senior expert from start to finish. We don't pass your critical foundation design down to junior staff to learn on.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold font-montserrat mt-0 mb-4 text-forest-green">Responsive & Local</h3>
                  <p className="text-sm font-light leading-loose m-0 text-gray-600">
                    Headquartered in Marrickville, we inherently understand the specific local council requirements and complex geological nuances of the Inner West and Greater Sydney.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold font-montserrat mt-0 mb-4 text-forest-green">Agile Turnaround</h3>
                  <p className="text-sm font-light leading-loose m-0 text-gray-600">
                    No corporate bureaucracy means faster deployments. We pivot rapidly to site changes, delivering soil reports and site sign-offs to keep your vital schedule moving.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* A Proven Sydney Track Record */}
            <motion.div variants={fadeIn} className="mt-24">
              <h2 className="text-3xl font-bold font-montserrat tracking-tight mb-10">A Proven Sydney Track Record</h2>
              <div className="space-y-8">
                <div className="flex flex-col sm:flex-row gap-6 border-b border-gray-200 pb-8">
                  <div className="sm:w-1/3">
                    <h3 className="text-xl font-semibold font-montserrat m-0">Residential</h3>
                  </div>
                  <div className="sm:w-2/3">
                    <p className="font-light leading-loose m-0 text-gray-600">
                      Detailed site investigations and AS 2870 classifications for hundreds of dwellings, specialising in complex vacant lots, structural additions, and bespoke architectural homes.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-6 pt-4">
                  <div className="sm:w-1/3">
                    <h3 className="text-xl font-semibold font-montserrat m-0">Commercial &<br/>Infrastructure</h3>
                    <span className="text-xs text-gray-400 uppercase tracking-widest font-semibold mt-2 block">Previous Experience</span>
                  </div>
                  <div className="sm:w-2/3">
                    <p className="font-light leading-loose m-0 text-gray-600">
                      Our Principal brings key geotechnical contributions from landmark projects including the Sydney Gateway, Western Sydney Airport, M12 Link, and the Canterbury Aquatic Centre.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Accreditations & Assurances */}
            <motion.div variants={fadeIn} className="mt-24 mb-16">
              <h2 className="text-2xl font-bold font-montserrat tracking-tight mb-8">Accreditations & Assurances</h2>
              <div className="flex flex-col sm:flex-row gap-8 mb-8">
                <div className="flex-1 bg-white p-8 rounded-lg border border-gray-100 shadow-sm flex flex-col items-center justify-center text-center group hover:border-forest-green hover:shadow-md transition-all">
                  <div className="relative h-16 w-full mb-4">
                    <Image src="/ea-logo.png" alt="Engineers Australia Logo" fill className="object-contain" />
                  </div>
                  <span className="block text-slate-black font-semibold text-sm tracking-wide">Engineers Australia</span>
                </div>
                <div className="flex-1 bg-white p-8 rounded-lg border border-gray-100 shadow-sm flex flex-col items-center justify-center text-center group hover:border-forest-green hover:shadow-md transition-all">
                  <div className="relative h-16 w-full mb-4">
                    <Image src="/ags-logo.png" alt="Australian Geomechanics Society Logo" fill className="object-contain" />
                  </div>
                  <span className="block text-slate-black font-semibold text-sm tracking-wide">Australian Geomechanics Society</span>
                </div>
              </div>
              <p className="font-medium text-sm text-center tracking-wide uppercase text-slate-black bg-white py-5 border border-gray-200 rounded-lg">
                Fully insured with Professional Indemnity (PI) and Public Liability (PL) insurance.
              </p>
            </motion.div>

          </div>
        </motion.div>

        {/* Deep Knowledge of the Sydney Basin */}
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mt-32 mb-16 flex flex-col items-center text-center max-w-3xl mx-auto"
        >
          <motion.h2 variants={fadeIn} className="text-3xl font-light tracking-tight sm:text-4xl font-montserrat text-slate-black">
            Extensive Experience Working with <span className="font-semibold">Sydney Basin Geology</span>
          </motion.h2>
          <motion.div variants={fadeIn} className="mt-8 h-px bg-forest-green w-16 mx-auto" />
          <motion.p variants={fadeIn} className="mt-8 text-xl text-gray-500 font-light leading-loose">
            Expert navigation of Ashfield Shale, Hawkesbury Sandstone, and Bringelly Shale, along with localized alluvial and residual soil profiles, to deliver superior foundational accuracy.
          </motion.p>
        </motion.div>

      </section>
    </div>
  );
}
