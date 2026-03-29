import ServiceAreaBlock from "@/components/sections/ServiceAreaBlock";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Our Sydney Geotechnical Engineers | SFGEO",
  description: "Get in touch for bespoke fixed-price fee proposals, site classifications, or urgent construction inspections. We cover the entire Greater Sydney Metro area.",
};

export default function ContactPage() {
  return (
    <div className="bg-white text-slate-950 font-inter min-h-screen">
      <section className="pt-32 pb-16 px-6 lg:px-12 max-w-7xl mx-auto">
        
        {/* Header Signature */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 pb-10 border-b border-gray-100">
          <h3 className="text-[11px] font-bold tracking-[0.2em] text-forest-green m-0 max-w-sm">
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
        </div>

        {/* Hero Section */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-montserrat font-light tracking-tight text-slate-950 max-w-4xl mb-6 leading-tight">
          Contact Our Sydney Geotechnical Engineers
        </h1>
        <p className="text-xl text-gray-500 font-light leading-relaxed max-w-3xl mb-16">
          Reach out directly to secure field dates, request tailored fixed-price fee proposals, and obtain reliable on-site engineering support. Whether you need an <span className="font-medium text-slate-950">AS2870 Site Classification</span>, <span className="font-medium text-slate-950">Soil Testing</span>, or a <span className="font-medium text-slate-950">Drilling Subcontractor</span>, we deploy across the Sydney Metro.
        </p>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
          
          {/* Direct Contact & Details Layer */}
          <div className="flex flex-col gap-10 bg-slate-50 border border-gray-100 p-8 sm:p-12 rounded-3xl shadow-sm">
            <div>
              <h4 className="text-[13px] font-bold tracking-widest text-[#243c5a] uppercase mb-5 flex items-center gap-3">
                <span className="w-8 h-[2px] bg-forest-green block"></span>
                Direct Contact
              </h4>
              <div className="flex flex-col gap-4">
                <a href="tel:0423483555" className="group flex flex-col p-6 rounded-2xl bg-white border border-gray-200 hover:border-forest-green/40 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                   <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                     <svg className="w-4 h-4 text-forest-green" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.48-4.18-7.076-7.076l1.293-.97c.362-.271.527-.733.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                     Speak to an Engineer
                   </span>
                   <span className="text-3xl font-montserrat font-semibold text-slate-950 group-hover:text-forest-green transition-colors">0423 483 555</span>
                </a>
                <a href="mailto:info@sfgeo.com.au" className="group flex flex-col p-6 rounded-2xl bg-white border border-gray-200 hover:border-forest-green/40 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                   <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                     <svg className="w-4 h-4 text-forest-green" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                     Request a Quote
                   </span>
                   <span className="text-xl sm:text-2xl font-montserrat font-semibold text-slate-950 group-hover:text-forest-green transition-colors">info@sfgeo.com.au</span>
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-gray-200/60">
              <div>
                <h4 className="text-[11px] font-bold tracking-widest text-gray-500 uppercase mb-3 flex items-center gap-2">
                  <svg className="w-4 h-4 text-forest-green" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
                  Office Location
                </h4>
                <p className="text-base text-slate-950 font-medium leading-relaxed">
                  Suite 3.01 - Level 3, 107 Sydenham Road<br />
                  <span className="text-gray-500 font-light">Marrickville, NSW 2204</span>
                </p>
              </div>

              <div>
                <h4 className="text-[11px] font-bold tracking-widest text-gray-500 uppercase mb-3 flex items-center gap-2">
                  <svg className="w-4 h-4 text-forest-green" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  Trading Hours
                </h4>
                <div className="flex flex-col gap-1 text-base text-slate-950">
                  <p className="font-medium">Mon–Fri: <span className="font-light text-gray-500 ml-1">6:00 AM – 6:00 PM</span></p>
                  <p className="font-medium">Saturday: <span className="font-light text-gray-500 ml-1">8:00 AM – 2:00 PM (Sunday Closed)</span></p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Proof & Reviews Layer */}
          <div className="flex flex-col h-full group">
            <div className="bg-forest-green/10 rounded-3xl p-8 sm:p-12 shadow-sm flex flex-col justify-center h-full relative overflow-hidden border border-forest-green/20 transition-all hover:border-forest-green/30">
              
              {/* Decorative Subtle Background Element */}
              <div className="absolute top-[-20%] right-[-10%] w-96 h-96 bg-forest-green/20 rounded-full blur-[100px] pointer-events-none group-hover:bg-forest-green/30 transition-all duration-700"></div>
              
              <div className="relative z-10 flex flex-col items-start">
                <h4 className="text-[11px] font-bold tracking-widest text-forest-green uppercase mb-6 flex items-center gap-3">
                  <span className="w-8 h-[2px] bg-forest-green block"></span>
                  Client Reviews
                </h4>

                <div className="flex gap-1.5 mb-6">
                  {/* 5 solid golden stars */}
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-[#F5C518]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                <h3 className="text-3xl sm:text-4xl font-montserrat font-semibold text-slate-950 mb-6 leading-tight max-w-sm">
                  Trusted by builders and developers across Sydney.
                </h3>
                
                <p className="text-gray-600 font-light text-lg mb-10 leading-relaxed">
                   We let our work speak for itself. We take pride in delivering fast, accurate, and proactive geotechnical reporting to keep your site compliant and your project moving. 
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                  <a 
                    href="https://search.google.com/local/reviews?placeid=ChIJkbo3DVqq1IMRQYQUbuD9XDc" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center px-8 py-4 bg-forest-green text-white font-semibold rounded-full shadow-lg shadow-forest-green/20 hover:bg-forest-green/90 transition-all hover:-translate-y-1"
                  >
                    Read Our Reviews
                  </a>
                  <a 
                    href="https://search.google.com/local/writereview?placeid=ChIJkbo3DVqq1IMRQYQUbuD9XDc" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center px-8 py-4 bg-white text-forest-green font-semibold rounded-full border border-forest-green/20 hover:bg-forest-green/10 hover:border-forest-green/30 transition-all hover:-translate-y-1"
                  >
                    Leave a Review
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Global Service Area Banner */}
      <ServiceAreaBlock pageType="contact" />
    </div>
  );
}
