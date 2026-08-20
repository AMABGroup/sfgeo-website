"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

type FormStatus = "idle" | "submitting" | "success" | "error";

const PROJECT_TYPES = [
  "New home",
  "Knockdown rebuild",
  "Extension or addition",
  "Granny flat",
  "In-ground pool",
  "Retaining wall",
  "Commercial or multi-residential",
  "B2B subcontract drilling",
  "Other",
];

const START_DATES = [
  "Within 2 weeks",
  "2–4 weeks",
  "1–3 months",
  "More than 3 months",
  "Not sure yet",
];

/**
 * Concierge-style enquiry panel for high-intent placements (hero, pricing
 * sections, ad landing pages). Styled to match the site's dark close-CTA
 * blocks (#050A07 with the radial forest-green glow) so it reads as a brand
 * element rather than a bolted-on form. Posts to the same /api/contact
 * endpoint as the full ContactForm and fires the same Google Ads conversion
 * label, so tracking stays unified. `source` is appended to the message so
 * Alli can see which placement produced the lead.
 */
export default function QuickQuoteCard({ source, heading = "Request a fixed-fee quote", subheading = "Scoped against your block and plans. Response within one business day — reports as soon as 2–3 business days." }: { source: string; heading?: string; subheading?: string }) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    siteAddress: "",
    projectType: "",
    startDate: "",
    website: "", // Honeypot
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const { [name]: _, ...rest } = prev;
        return rest;
      });
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Please add your name.";
    if (!formData.email.trim() || !formData.email.includes("@") || !formData.email.split("@")[1]?.includes(".")) newErrors.email = "Please add a valid email.";
    if (!formData.phone.trim()) newErrors.phone = "Please add a phone number.";
    if (!formData.siteAddress.trim()) newErrors.siteAddress = "Please add the site suburb or address.";
    if (!formData.projectType) newErrors.projectType = "Select a project type.";
    if (!formData.startDate) newErrors.startDate = "Select a timeframe.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("submitting");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          message: `Quick quote request — submitted from ${source}.`,
        }),
      });
      if (response.ok) {
        setStatus("success");
        if (typeof window !== "undefined" && window.gtag) {
          window.gtag("event", "conversion", {
            send_to: "AW-18053070765/53SQCIy9158cEK3_r6BD",
          });
        }
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const fieldClasses = (field: string) =>
    `w-full bg-transparent border-0 border-b py-2.5 px-0 text-sm font-light text-white placeholder:text-white/40 focus:outline-none focus:ring-0 transition-colors ${errors[field] ? "border-red-400/70 focus:border-red-400" : "border-white/20 focus:border-forest-green"}`;

  const selectClasses = (field: string, hasValue: boolean) =>
    `${fieldClasses(field)} appearance-none cursor-pointer ${hasValue ? "text-white" : "text-white/40"}`;

  return (
    <div className="w-full max-w-md rounded-3xl bg-[#050A07] relative overflow-hidden p-9 shadow-[0_24px_60px_-24px_rgba(5,10,7,0.55)]">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(45,90,58,0.35),transparent_70%)] pointer-events-none" />
      <div className="relative z-10">
        <AnimatePresence mode="wait">
          {status === "success" ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-12"
            >
              <div className="w-12 h-12 mx-auto mb-6 rounded-full border border-forest-green/60 flex items-center justify-center">
                <svg className="w-5 h-5 text-forest-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <h3 className="text-xl font-montserrat font-light text-white mb-3">Request received</h3>
              <p className="text-sm text-gray-400 font-light leading-relaxed">
                Thank you — your details are with our Principal Engineer. You&apos;ll have a response within one business day.
              </p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onSubmit={handleSubmit}
              noValidate
            >
              <p className="text-[11px] uppercase tracking-[0.25em] text-forest-green font-semibold mb-3">
                Fixed-fee quote
              </p>
              <h3 className="text-2xl font-montserrat font-light text-white mb-3">{heading}</h3>
              <p className="text-sm text-gray-400 font-light leading-relaxed mb-8">{subheading}</p>

              {/* Honeypot */}
              <input
                type="text"
                name="website"
                value={formData.website}
                onChange={handleChange}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 mb-4">
                <div>
                  <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} className={fieldClasses("name")} aria-label="Name" />
                  {errors.name && <p className="mt-1.5 text-xs text-red-400/90">{errors.name}</p>}
                </div>
                <div>
                  <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} className={fieldClasses("phone")} aria-label="Phone" />
                  {errors.phone && <p className="mt-1.5 text-xs text-red-400/90">{errors.phone}</p>}
                </div>
              </div>
              <div className="mb-4">
                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className={fieldClasses("email")} aria-label="Email" />
                {errors.email && <p className="mt-1.5 text-xs text-red-400/90">{errors.email}</p>}
              </div>
              <div className="mb-4">
                <input type="text" name="siteAddress" placeholder="Site suburb or address" value={formData.siteAddress} onChange={handleChange} className={fieldClasses("siteAddress")} aria-label="Site suburb or address" />
                {errors.siteAddress && <p className="mt-1.5 text-xs text-red-400/90">{errors.siteAddress}</p>}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 mb-9">
                <div className="relative">
                  <select name="projectType" value={formData.projectType} onChange={handleChange} className={selectClasses("projectType", !!formData.projectType)} aria-label="Project type">
                    <option value="" disabled>Project type</option>
                    {PROJECT_TYPES.map((t) => (
                      <option key={t} value={t} className="text-slate-950">{t}</option>
                    ))}
                  </select>
                  <svg className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                  {errors.projectType && <p className="mt-1.5 text-xs text-red-400/90">{errors.projectType}</p>}
                </div>
                <div className="relative">
                  <select name="startDate" value={formData.startDate} onChange={handleChange} className={selectClasses("startDate", !!formData.startDate)} aria-label="When are you looking to start">
                    <option value="" disabled>Looking to start</option>
                    {START_DATES.map((d) => (
                      <option key={d} value={d} className="text-slate-950">{d}</option>
                    ))}
                  </select>
                  <svg className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                  {errors.startDate && <p className="mt-1.5 text-xs text-red-400/90">{errors.startDate}</p>}
                </div>
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full flex items-center justify-center px-5 py-3 bg-gradient-to-b from-[#346b43] to-forest-green text-white rounded-full shadow-[0_8px_20px_-6px_rgba(45,90,58,0.5)] hover:shadow-[0_12px_24px_-8px_rgba(45,90,58,0.7)] hover:brightness-105 transition-all hover:-translate-y-0.5 disabled:opacity-60 disabled:hover:translate-y-0 text-xs font-semibold tracking-wide"
              >
                {status === "submitting" ? "Sending…" : "Request my quote"}
              </button>
              {status === "error" && (
                <p className="mt-3 text-xs text-red-400/90 text-center">
                  Something went wrong — please call 0423 483 555 or email info@sfgeo.com.au.
                </p>
              )}
              <p className="mt-5 text-[11px] text-white/35 font-light text-center tracking-wide">
                Principal Engineer on every job &middot; Fixed fee, scoped to your block
              </p>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
