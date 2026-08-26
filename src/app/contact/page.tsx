import ContactForm from "@/components/forms/ContactForm";
import type { Metadata } from "next";
import { Suspense } from "react";
import { FadeIn } from "../site-classification/MotionWrapper";

export const metadata: Metadata = {
  title: "Contact Our Sydney Geotechnical Engineers | SFGEO",
  description: "Speak directly with a Sydney geotechnical consultant. Fixed-fee quotes for site classifications, investigations, and drilling services across Greater Sydney.",
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    images: ['/og/sfgeo-og-card.jpg'],
    title: "Contact Our Sydney Geotechnical Engineers | SFGEO",
    description: "Speak directly with a Sydney geotechnical consultant. Fixed-fee quotes for site classifications, investigations, and drilling services across Greater Sydney.",
    url: '/contact',
  },
  twitter: {
    card: "summary_large_image",
    images: ['/og/sfgeo-og-card.jpg'],
    title: "Contact Our Sydney Geotechnical Engineers | SFGEO",
    description: "Speak directly with a Sydney geotechnical consultant. Fixed-fee quotes across Greater Sydney.",
  },
};

export default function ContactPage() {
  return (
    <div className="bg-white text-slate-950 font-inter selection:bg-forest-green selection:text-white">

      {/* Hero */}
      <section className="pt-36 pb-16 px-6 lg:px-12 max-w-7xl mx-auto">
        <FadeIn className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.2em] text-forest-green mb-6 font-semibold">
            Contact &middot; Family Owned &middot; Response Within One Business Day
          </p>
          <h1 className="text-4xl sm:text-6xl font-montserrat font-light tracking-tight leading-[1.08] mb-8">
            Contact <span className="font-semibold">SFGEO.</span>
          </h1>
          <div className="w-[96px] h-[3px] bg-forest-green mb-8" />
          <p className="text-lg sm:text-xl text-gray-600 font-light leading-relaxed">
            Send the address and a sentence about the project. You&rsquo;ll have a fixed-fee quote in writing — response within one business day.
          </p>
        </FadeIn>
      </section>

      {/* Form + details */}
      <section className="py-16 lg:py-20 px-6 lg:px-12 max-w-7xl mx-auto border-t border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <FadeIn>
            <Suspense fallback={<div className="py-12 text-center text-gray-500">Loading form...</div>}>
              <ContactForm />
            </Suspense>
          </FadeIn>

          <FadeIn delay={0.12} className="flex flex-col gap-6">
            <a href="tel:0423483555" className="group flex flex-col p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-forest-green/30 transition-all">
              <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-[0.2em] mb-2">Speak To An Engineer</span>
              <span className="text-3xl font-montserrat font-semibold text-slate-950 group-hover:text-forest-green transition-colors">0423 483 555</span>
            </a>
            <a href="mailto:info@sfgeo.com.au" className="group flex flex-col p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-forest-green/30 transition-all">
              <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-[0.2em] mb-2">Email The Team</span>
              <span className="text-xl sm:text-2xl font-montserrat font-semibold text-slate-950 group-hover:text-forest-green transition-colors">info@sfgeo.com.au</span>
            </a>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm">
                <span className="block text-[11px] font-semibold text-gray-400 uppercase tracking-[0.2em] mb-3">Office</span>
                <p className="text-base text-slate-950 font-medium leading-relaxed">
                  Suite 3.01, Level 3, 107 Sydenham Road, Marrickville NSW 2204
                </p>
                <p className="text-sm text-gray-500 font-light mt-2">Visits by appointment.</p>
              </div>
              <div className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm">
                <span className="block text-[11px] font-semibold text-gray-400 uppercase tracking-[0.2em] mb-3">Hours</span>
                <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1.5 text-[15px]">
                  <span className="font-medium">Mon–Fri</span><span className="font-light text-gray-500">6:00 AM – 6:00 PM</span>
                  <span className="font-medium">Saturday</span><span className="font-light text-gray-500">8:00 AM – 2:00 PM</span>
                  <span className="font-medium">Sunday</span><span className="font-light text-gray-500">Closed</span>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm">
              <div className="flex gap-1.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-[#F5C518]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-lg font-montserrat font-semibold text-slate-950 mb-2 leading-snug">
                Trusted By Homeowners, Architects &amp; Builders Across Sydney.
              </p>
              <p className="text-[15px] text-gray-600 font-light leading-relaxed mb-6">
                The Principal reads every enquiry. Fieldwork is scheduled at first contact, and reports land as soon as 2–3 business days after it.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://search.google.com/local/reviews?placeid=ChIJkbo3DVqq1IMRQYQUbuD9XDc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold tracking-wide text-forest-green group inline-flex items-center gap-2"
                >
                  <span className="draw-link">Read Our Reviews</span>
                  <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                </a>
                <a
                  href="https://search.google.com/local/writereview?placeid=ChIJkbo3DVqq1IMRQYQUbuD9XDc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold tracking-wide text-forest-green group inline-flex items-center gap-2 sm:ml-6"
                >
                  <span className="draw-link">Leave A Review</span>
                  <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Office Map */}
      <section className="py-20 lg:py-24 px-6 lg:px-12 max-w-7xl mx-auto border-t border-gray-100">
        <FadeIn className="mb-10">
          <p className="text-sm uppercase tracking-[0.2em] text-forest-green mb-4 font-semibold">Marrickville</p>
          <h2 className="text-3xl sm:text-4xl font-montserrat font-light tracking-tight">
            Find <span className="font-semibold">The Office.</span>
          </h2>
          <div className="mt-5 h-px bg-forest-green w-12" />
        </FadeIn>
        <FadeIn>
          <div className="w-full rounded-2xl overflow-hidden border border-gray-100 shadow-sm aspect-[16/9] sm:aspect-[21/9]">
            <iframe
              title="Map showing SFGEO office at Suite 3.01, 107 Sydenham Road, Marrickville NSW 2204"
              src="https://maps.google.com/maps?q=Suite%203.01%2C%20107%20Sydenham%20Road%2C%20Marrickville%20NSW%202204&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full border-0"
              allowFullScreen
            />
          </div>
        </FadeIn>
        <FadeIn>
          <p className="mt-8 text-sm text-gray-500 font-light">
            Elsewhere:{" "}
            <a href="https://au.linkedin.com/company/sfgeo" target="_blank" rel="noopener noreferrer" className="text-gray-600 underline underline-offset-4 decoration-gray-300 hover:text-forest-green hover:decoration-forest-green transition-colors">LinkedIn</a>
            {" · "}
            <a href="https://instagram.com/sfgeo.syd" target="_blank" rel="noopener noreferrer" className="text-gray-600 underline underline-offset-4 decoration-gray-300 hover:text-forest-green hover:decoration-forest-green transition-colors">Instagram</a>
          </p>
        </FadeIn>
      </section>
    </div>
  );
}
