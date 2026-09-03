"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { PROJECT_TYPES, START_DATES } from "@/data/projectTypes";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

type FormStatus = "idle" | "submitting" | "success" | "error";

// DOM order of the controls — used to move focus to the first invalid one.
const FIELD_ORDER = ["name", "phone", "email", "siteAddress", "projectType", "startDate"] as const;

/**
 * Concierge-style enquiry panel for high-intent placements (hero, pricing
 * sections, ad landing pages). Styled to match the site's dark close-CTA
 * blocks (#050A07 with the radial forest-green glow) so it reads as a brand
 * element rather than a bolted-on form. Posts to the same /api/contact
 * endpoint as the full ContactForm and fires the same Google Ads conversion
 * label, so tracking stays unified. `source` is appended to the message so
 * Alli can see which placement produced the lead.
 */
export default function QuickQuoteCard({ source, eyebrow = "Fixed-fee quote", heading = "Request A Fixed-Fee Quote", subheading = "Scoped against your block and plans. Response within one business day — reports as soon as 2–3 business days.", secondaryLink, headingId = "qq-heading" }: { source: string; eyebrow?: string; heading?: string; subheading?: string; secondaryLink?: { href: string; label: string }; headingId?: string }) {
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
  const formRef = useRef<HTMLFormElement>(null);
  const successHeadingRef = useRef<HTMLHeadingElement>(null);

  // The submit button unmounts on success, so move focus onto the
  // confirmation heading rather than letting it fall to <body>.
  useEffect(() => {
    if (status === "success") successHeadingRef.current?.focus();
  }, [status]);

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
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      const first = FIELD_ORDER.find((f) => newErrors[f]);
      if (first) {
        formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      }
      return;
    }
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
    `w-full bg-transparent border-0 border-b py-3 px-0 text-base sm:text-sm font-light text-white placeholder:text-white/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8FBF9F] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050A07] rounded-sm transition-colors ${errors[field] ? "border-red-400/70 focus:border-red-400" : "border-white/20 focus:border-forest-green"}`;

  const selectClasses = (field: string, hasValue: boolean) =>
    `${fieldClasses(field)} appearance-none cursor-pointer ${hasValue ? "text-white" : "text-white/60"}`;

  return (
    <div className="w-full max-w-md rounded-3xl bg-[#050A07] relative overflow-hidden p-9 shadow-[0_24px_60px_-24px_rgba(5,10,7,0.55)] ring-1 ring-white/10">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(45,90,58,0.35),transparent_70%)] pointer-events-none" />
      <div className="relative z-10">
        {status === "success" ? (
          <div role="status" aria-live="polite" className="text-center py-12">
            <div className="w-12 h-12 mx-auto mb-6 rounded-full border border-[#8FBF9F]/60 flex items-center justify-center">
              <svg className="w-5 h-5 text-[#8FBF9F]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <h2 id={headingId} ref={successHeadingRef} tabIndex={-1} className="text-xl font-montserrat font-light text-white mb-3 focus:outline-none">Request received</h2>
            <p className="text-sm text-gray-400 font-light leading-relaxed">
              Thank you — your details are with our Principal Engineer. You&apos;ll have a response within one business day.
            </p>
          </div>
        ) : (
          <form ref={formRef} onSubmit={handleSubmit} noValidate>
            <p className="text-[11px] uppercase tracking-[0.25em] text-[#8FBF9F] font-semibold mb-3">
              {eyebrow}
            </p>
            <h2 id={headingId} className="text-2xl font-montserrat font-light text-white mb-3">{heading}</h2>
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
                <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} className={fieldClasses("name")} aria-label="Name" autoComplete="name" aria-invalid={!!errors.name} aria-describedby={errors.name ? "qq-name-err" : undefined} />
                {errors.name && <p id="qq-name-err" role="alert" className="mt-1.5 text-xs text-red-300">{errors.name}</p>}
              </div>
              <div>
                <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} className={fieldClasses("phone")} aria-label="Phone" autoComplete="tel" inputMode="tel" aria-invalid={!!errors.phone} aria-describedby={errors.phone ? "qq-phone-err" : undefined} />
                {errors.phone && <p id="qq-phone-err" role="alert" className="mt-1.5 text-xs text-red-300">{errors.phone}</p>}
              </div>
            </div>
            <div className="mb-4">
              <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className={fieldClasses("email")} aria-label="Email" autoComplete="email" aria-invalid={!!errors.email} aria-describedby={errors.email ? "qq-email-err" : undefined} />
              {errors.email && <p id="qq-email-err" role="alert" className="mt-1.5 text-xs text-red-300">{errors.email}</p>}
            </div>
            <div className="mb-4">
              <input type="text" name="siteAddress" placeholder="Site suburb or address" value={formData.siteAddress} onChange={handleChange} className={fieldClasses("siteAddress")} aria-label="Site suburb or address" autoComplete="off" aria-invalid={!!errors.siteAddress} aria-describedby={errors.siteAddress ? "qq-siteAddress-err" : undefined} />
              {errors.siteAddress && <p id="qq-siteAddress-err" role="alert" className="mt-1.5 text-xs text-red-300">{errors.siteAddress}</p>}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 mb-9">
              <div className="relative">
                <select name="projectType" value={formData.projectType} onChange={handleChange} className={selectClasses("projectType", !!formData.projectType)} aria-label="Project type" aria-invalid={!!errors.projectType} aria-describedby={errors.projectType ? "qq-projectType-err" : undefined}>
                  <option value="" disabled>Project type</option>
                  {PROJECT_TYPES.map((t) => (
                    <option key={t} value={t} className="text-slate-950">{t}</option>
                  ))}
                </select>
                <svg className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
                {errors.projectType && <p id="qq-projectType-err" role="alert" className="mt-1.5 text-xs text-red-300">{errors.projectType}</p>}
              </div>
              <div className="relative">
                <select name="startDate" value={formData.startDate} onChange={handleChange} className={selectClasses("startDate", !!formData.startDate)} aria-label="When are you looking to start" aria-invalid={!!errors.startDate} aria-describedby={errors.startDate ? "qq-startDate-err" : undefined}>
                  <option value="" disabled>Looking to start</option>
                  {START_DATES.map((d) => (
                    <option key={d} value={d} className="text-slate-950">{d}</option>
                  ))}
                </select>
                <svg className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
                {errors.startDate && <p id="qq-startDate-err" role="alert" className="mt-1.5 text-xs text-red-300">{errors.startDate}</p>}
              </div>
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full flex items-center justify-center px-5 h-[46px] bg-gradient-to-b from-[#346b43] to-forest-green text-white rounded-full shadow-[0_8px_20px_-6px_rgba(45,90,58,0.5)] hover:shadow-[0_12px_24px_-8px_rgba(45,90,58,0.7)] hover:brightness-105 transition-all hover:-translate-y-0.5 disabled:opacity-60 disabled:hover:translate-y-0 text-xs font-semibold tracking-wide"
            >
              {status === "submitting" ? "Sending…" : "Request my quote"}
            </button>
            {status === "error" && (
              <p className="mt-3 text-xs text-red-400/90 text-center">
                Something went wrong — please call 0423 483 555 or email info@sfgeo.com.au.
              </p>
            )}
            <p className="mt-5 text-[11px] text-white/60 font-light text-center tracking-wide">
              Principal Engineer on every job &middot; Fixed fee, scoped to your block
            </p>
            {secondaryLink && (
              <div className="mt-5 pt-4 border-t border-white/10 text-center">
                <Link
                  href={secondaryLink.href}
                  className="text-[11px] font-light tracking-wide text-white/60 hover:text-white transition-colors"
                >
                  {secondaryLink.label} &rarr;
                </Link>
              </div>
            )}
          </form>
        )}
      </div>
    </div>
  );
}
