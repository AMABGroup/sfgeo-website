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
 * Compact enquiry card for high-intent placements (hero, pricing sections,
 * ad landing pages). Posts to the same /api/contact endpoint as the full
 * ContactForm and fires the same Google Ads conversion label, so tracking
 * stays unified. `source` is appended to the message so Alli can see which
 * placement produced the lead.
 */
export default function QuickQuoteCard({ source, heading = "Request a fixed-fee quote", subheading = "Scoped against your block and plans. Response within one business day — reports as soon as 2\u20133 business days." }: { source: string; heading?: string; subheading?: string }) {
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

  const inputClasses = (field: string) =>
    `w-full px-4 py-2.5 rounded-xl border text-sm font-light bg-white/80 text-slate-950 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-forest-green/40 focus:border-forest-green transition-colors ${errors[field] ? "border-red-400" : "border-gray-200"}`;

  return (
    <div className="w-full max-w-md rounded-2xl backdrop-blur-xl bg-white/70 border border-white shadow-[0_8px_32px_0_rgba(31,38,135,0.08)] p-8">
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-10"
          >
            <div className="w-12 h-12 mx-auto mb-5 rounded-full bg-forest-green/10 flex items-center justify-center">
              <svg className="w-6 h-6 text-forest-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <h3 className="text-xl font-montserrat font-medium text-slate-950 mb-3">Request received</h3>
            <p className="text-sm text-gray-600 font-light leading-relaxed">
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
            <h3 className="text-xl font-montserrat font-medium text-slate-950 mb-2">{heading}</h3>
            <p className="text-sm text-gray-600 font-light leading-relaxed mb-6">{subheading}</p>

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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
              <div>
                <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} className={inputClasses("name")} aria-label="Name" />
                {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
              </div>
              <div>
                <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} className={inputClasses("phone")} aria-label="Phone" />
                {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
              </div>
            </div>
            <div className="mb-3">
              <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className={inputClasses("email")} aria-label="Email" />
              {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
            </div>
            <div className="mb-3">
              <input type="text" name="siteAddress" placeholder="Site suburb or address" value={formData.siteAddress} onChange={handleChange} className={inputClasses("siteAddress")} aria-label="Site suburb or address" />
              {errors.siteAddress && <p className="mt-1 text-xs text-red-500">{errors.siteAddress}</p>}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div>
                <select name="projectType" value={formData.projectType} onChange={handleChange} className={`${inputClasses("projectType")} ${formData.projectType ? "" : "text-gray-400"}`} aria-label="Project type">
                  <option value="" disabled>Project type</option>
                  {PROJECT_TYPES.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
                {errors.projectType && <p className="mt-1 text-xs text-red-500">{errors.projectType}</p>}
              </div>
              <div>
                <select name="startDate" value={formData.startDate} onChange={handleChange} className={`${inputClasses("startDate")} ${formData.startDate ? "" : "text-gray-400"}`} aria-label="When are you looking to start">
                  <option value="" disabled>Looking to start</option>
                  {START_DATES.map((d) => (
                    <option key={d} value={d}>{d}</option>
                  ))}
                </select>
                {errors.startDate && <p className="mt-1 text-xs text-red-500">{errors.startDate}</p>}
              </div>
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full flex items-center justify-center px-5 py-3 bg-gradient-to-b from-[#346b43] to-forest-green text-white rounded-full shadow-[0_8px_20px_-6px_rgba(45,90,58,0.4)] hover:shadow-[0_12px_24px_-8px_rgba(45,90,58,0.6)] hover:brightness-105 transition-all hover:-translate-y-0.5 disabled:opacity-60 disabled:hover:translate-y-0 text-xs font-semibold tracking-wide"
            >
              {status === "submitting" ? "Sending…" : "Request my quote"}
            </button>
            {status === "error" && (
              <p className="mt-3 text-xs text-red-500 text-center">
                Something went wrong — please call 0423 483 555 or email info@sfgeo.com.au.
              </p>
            )}
            <p className="mt-4 text-[11px] text-gray-400 font-light text-center leading-relaxed">
              Fixed fees from $800 + GST · Principal Engineer on every job
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
