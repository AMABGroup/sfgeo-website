"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import ServiceAreaBlock from "@/components/sections/ServiceAreaBlock";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const formData = new FormData(e.currentTarget);
    
    const data = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      siteAddress: formData.get("siteAddress"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("https://formspree.io/f/xjgawzgr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white text-slate-950 font-inter min-h-screen">
      <section className="pt-32 pb-16 px-6 lg:px-12 max-w-7xl mx-auto">
        <motion.div initial="hidden" animate="visible" variants={stagger}>

          {/* Single horizontal row for header signature */}
          <motion.div variants={fadeIn} className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 pb-10 border-b border-gray-100">
            <h3 className="text-[11px] font-bold tracking-[0.2em] text-forest-green uppercase m-0 max-w-sm">
              FAMILY OWNED • INDEPENDENT • SYDNEY BASED
            </h3>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://au.linkedin.com/company/sfgeo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 rounded-full shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 group/link w-max"
              >
                <svg className="w-4 h-4 text-[#0A66C2] transition-transform group-hover/link:scale-110" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.475-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <span className="text-xs font-semibold text-slate-950 tracking-wide">Connect on LinkedIn</span>
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
                <span className="text-xs font-semibold text-slate-950 tracking-wide">Follow on Instagram</span>
              </a>
            </div>
          </motion.div>

          <motion.h1
            variants={fadeIn}
            className="text-4xl sm:text-5xl font-montserrat font-light tracking-tight text-slate-950 max-w-4xl mb-6"
          >
            Contact Our Sydney Geotechnical Engineers
          </motion.h1>

          <motion.p variants={fadeIn} className="text-xl text-gray-500 font-light leading-relaxed max-w-3xl mb-16">
            Get in touch for specialised geotechnical insights, fixed-price fee proposals, and reliable on-site engineering support. Whether you need an <span className="font-medium text-slate-950">AS2870 Site Classification</span>, <span className="font-medium text-slate-950">Soil Testing</span>, or a <span className="font-medium text-slate-950">Drilling Subcontractor</span>, we are ready to mobilise across the Sydney Metro.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-16">
          {/* Pre-Form Info */}
          <motion.div initial="hidden" animate="visible" variants={stagger} className="flex flex-col gap-10">
            <motion.div variants={fadeIn}>
              <h4 className="text-sm font-bold tracking-wider text-slate-950 uppercase mb-3 border-b border-forest-green pb-2 inline-block">Office Location</h4>
              <p className="text-gray-600 font-light">
                <strong className="font-semibold text-slate-950">Level 3, 107 Sydenham Road</strong><br />
                Marrickville, NSW 2204
              </p>
            </motion.div>

            <motion.div variants={fadeIn}>
              <h4 className="text-sm font-bold tracking-wider text-slate-950 uppercase mb-3 border-b border-forest-green pb-2 inline-block">Trading Hours</h4>
              <p className="text-gray-600 font-light flex flex-col gap-1">
                <span><strong className="font-semibold text-slate-950">Mon–Fri:</strong> 6:00 AM – 6:00 PM</span>
                <span><strong className="font-semibold text-slate-950">Sat–Sun:</strong> 8:00 AM – 2:00 PM</span>
              </p>
            </motion.div>

            <motion.div variants={fadeIn}>
              <h4 className="text-sm font-bold tracking-wider text-slate-950 uppercase mb-3 border-b border-forest-green pb-2 inline-block">Direct Contact</h4>
              <p className="text-gray-600 font-light flex flex-col gap-1">
                <span><strong className="font-semibold text-slate-950">Email:</strong> <a href="mailto:info@sfgeo.com.au" className="hover:text-forest-green transition-colors">info@sfgeo.com.au</a></span>
                <span><strong className="font-semibold text-slate-950">Mobile:</strong> <a href="tel:0423483555" className="hover:text-forest-green transition-colors">0423 483 555</a></span>
              </p>
            </motion.div>
          </motion.div>

          {/* Simple Contact Form */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <div className="bg-slate-50 border border-gray-100 p-8 sm:p-10 rounded-2xl shadow-sm">
              <h3 className="text-2xl font-montserrat font-bold text-slate-950 mb-6">Send a Request</h3>
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">

                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-semibold text-slate-950">Name</label>
                  <input type="text" id="name" name="name" required className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-green focus:border-transparent transition-all" placeholder="John Doe" />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-sm font-semibold text-slate-950">Contact Number</label>
                  <input type="tel" id="phone" name="phone" required className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-green focus:border-transparent transition-all" placeholder="0400 000 000" />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-semibold text-slate-950">Email</label>
                  <input type="email" id="email" name="email" required className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-green focus:border-transparent transition-all" placeholder="john@example.com" />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="siteAddress" className="text-sm font-semibold text-slate-950">Site Address</label>
                  <input type="text" id="siteAddress" name="siteAddress" required className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-green focus:border-transparent transition-all" placeholder="123 Example St, Sydney" />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="role" className="text-sm font-semibold text-slate-950">I am a:</label>
                  <select 
                    id="role" 
                    name="role" 
                    required 
                    defaultValue=""
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-green focus:border-transparent transition-all appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Select your role</option>
                    <option value="Homeowner/Owner-Builder">Homeowner / Owner-Builder</option>
                    <option value="Builder/Developer">Builder / Developer</option>
                    <option value="Structural/Civil Engineer">Structural / Civil Engineer</option>
                    <option value="Environmental Consultant">Environmental Consultant</option>
                    <option value="Architect/Designer">Architect / Designer</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm font-semibold text-slate-950">Message</label>
                  <textarea id="message" name="message" rows={4} required className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-green focus:border-transparent transition-all resize-none" placeholder="How can we help with your project?"></textarea>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-slate-950">Attach Plans (Optional)</label>
                  <div className="relative group/upload">
                    <input 
                      type="file" 
                      id="plans" 
                      name="plans" 
                      accept=".pdf,.jpg,.jpeg,.png"
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                    />
                    <div className="flex items-center gap-3 px-4 py-3 bg-white border border-dashed border-gray-300 rounded-lg group-hover/upload:border-forest-green transition-colors text-gray-500">
                      <svg className="w-5 h-5 text-gray-400 group-hover/upload:text-forest-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/></svg>
                      <span className="text-sm">Upload Architectural/Structural Plans (PDF/JPG)</span>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-4 w-full bg-forest-green text-white font-semibold px-8 py-4 rounded-full shadow-md hover:bg-forest-green/90 hover:shadow-lg transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? "Sending..." : "Request a Quote"}
                </button>

                {submitStatus === "success" && (
                  <p className="text-forest-green text-sm font-medium mt-2 text-center">Your request has been sent successfully. We will be in touch shortly.</p>
                )}
                {submitStatus === "error" && (
                  <p className="text-red-500 text-sm font-medium mt-2 text-center">There was an error sending your request. Please try again or email us directly.</p>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      <ServiceAreaBlock pageType="contact" />
    </div>
  );
}
