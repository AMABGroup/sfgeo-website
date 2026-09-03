"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECT_TYPES, START_DATES } from "@/data/projectTypes";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

type FormStatus = "idle" | "submitting" | "success" | "error";

const FOCUS_RING =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-forest-green";

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    siteAddress: "",
    projectType: "",
    startDate: "",
    message: "",
    website: "", // Honeypot
  });

  const successHeadingRef = useRef<HTMLHeadingElement>(null);

  // Read the query once on the client. useSearchParams would force this static
  // route to bail out to client rendering, shipping no form in the HTML at all.
  useEffect(() => {
    const subject = new URLSearchParams(window.location.search).get("subject");
    if (subject === "b2b-enquiry") {
      // Engineers and consultancies land here too — let them pick the type.
      setFormData(prev => ({ ...prev, message: "B2B enquiry — " }));
    } else if (subject === "Subcontract Drilling Enquiry") {
      setFormData(prev => ({ ...prev, projectType: "B2B subcontract drilling" }));
    } else if (subject === "site-inspection") {
      setFormData(prev => ({ ...prev, projectType: "Other", message: "I would like to request a site inspection." }));
    }
  }, []);

  useEffect(() => {
    if (status === "success") {
      successHeadingRef.current?.focus();
    }
  }, [status]);

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "We'll need your name to address you properly.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please provide an email so we can send your quote through.";
    } else if (!formData.email.includes("@") || !formData.email.split("@")[1].includes(".")) {
      newErrors.email = "That email format doesn't look quite right.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "We'll need your phone number to call you back with a quote.";
    }

    if (!formData.siteAddress.trim()) {
      newErrors.siteAddress = "Please include a site address so we can start the desktop study.";
    }

    if (!formData.projectType) {
      newErrors.projectType = "Please select a project type.";
    }

    if (!formData.startDate) {
      newErrors.startDate = "Please let us know when you're looking to start.";
    }

    setErrors(newErrors);
    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const { [name]: _, ...rest } = prev;
        return rest;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = validate();
    const firstInvalid = Object.keys(newErrors)[0];
    if (firstInvalid) {
      const el = document.getElementById(firstInvalid);
      el?.scrollIntoView({ block: "center" });
      el?.focus({ preventScroll: true });
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        // Fire Google Ads conversion
        if (typeof window !== "undefined" && window.gtag) {
          window.gtag("event", "conversion", {
            send_to: "AW-18053070765/53SQCIy9158cEK3_r6BD",
          });
        }
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error("Submission error:", err);
      setStatus("error");
    }
  };

  const fieldClasses = (name: string) =>
    `bg-transparent border-b ${errors[name] ? 'border-red-400' : 'border-gray-200 focus:border-forest-green'} py-3 text-lg font-light text-slate-950 ${FOCUS_RING} transition-colors placeholder:text-gray-500 min-h-[44px]`;

  const selectClasses = (name: string) =>
    `bg-transparent border-b ${errors[name] ? 'border-red-400' : 'border-gray-200 focus:border-forest-green'} py-3 text-lg font-light text-slate-950 ${FOCUS_RING} transition-colors appearance-none cursor-pointer min-h-[44px]`;

  const ariaFor = (name: string) => ({
    "aria-invalid": !!errors[name],
    "aria-describedby": errors[name] ? `${name}-error` : undefined,
    "aria-required": true as const,
  });

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        role="status"
        aria-live="polite"
        className="flex flex-col items-center justify-center py-16 text-center"
      >
        <div className="w-16 h-16 bg-forest-green/10 rounded-full flex items-center justify-center mb-6">
          <svg
            className="w-8 h-8 text-forest-green"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2
          ref={successHeadingRef}
          tabIndex={-1}
          className="text-3xl font-montserrat font-semibold text-slate-950 mb-4 outline-none"
        >
          Thanks, {formData.name.split(" ")[0]}.
        </h2>
        <p className="text-lg text-gray-600 font-light max-w-md leading-relaxed">
          We've received your enquiry and will be in touch within one business day. If your project is time-critical, please call us on{" "}
          <a href="tel:+61423483555" className="text-forest-green font-semibold hover:underline whitespace-nowrap">
            0423 483 555
          </a>.
        </p>
      </motion.div>
    );
  }

  return (
    <div className="w-full max-w-2xl">
      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-8">
        {/* Honeypot */}
        <div 
          className="absolute opacity-0 pointer-events-none" 
          aria-hidden="true"
          style={{ left: "-9999px" }}
        >
          <input
            type="text"
            name="website"
            value={formData.website}
            onChange={handleChange}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        {status === "error" && (
          <div role="alert" className="bg-red-50 border border-red-100 text-red-600 px-6 py-4 rounded-xl text-sm font-medium">
            Something went wrong on our end. Please try again, or call us directly on{" "}
            <a href="tel:+61423483555" className="font-semibold underline whitespace-nowrap">0423 483 555</a>.
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
          {/* Name */}
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-[13px] font-bold tracking-widest text-slate-900 uppercase">
              Your name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              className={fieldClasses("name")}
              {...ariaFor("name")}
            />
            <AnimatePresence>
              {errors.name && (
                <motion.span
                  id="name-error"
                  role="alert"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="text-red-600 text-xs mt-1"
                >
                  {errors.name}
                </motion.span>
              )}
            </AnimatePresence>
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-[13px] font-bold tracking-widest text-slate-900 uppercase">
              Email address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              autoComplete="email"
              inputMode="email"
              value={formData.email}
              onChange={handleChange}
              className={fieldClasses("email")}
              {...ariaFor("email")}
            />
            <AnimatePresence>
              {errors.email && (
                <motion.span
                  id="email-error"
                  role="alert"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="text-red-600 text-xs mt-1"
                >
                  {errors.email}
                </motion.span>
              )}
            </AnimatePresence>
          </div>

          {/* Phone */}
          <div className="flex flex-col gap-2">
            <label htmlFor="phone" className="text-[13px] font-bold tracking-widest text-slate-900 uppercase">
              Phone number
            </label>
            <input
              id="phone"
              type="tel"
              name="phone"
              autoComplete="tel"
              inputMode="tel"
              value={formData.phone}
              onChange={handleChange}
              className={fieldClasses("phone")}
              {...ariaFor("phone")}
            />
            <AnimatePresence>
              {errors.phone && (
                <motion.span
                  id="phone-error"
                  role="alert"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="text-red-600 text-xs mt-1"
                >
                  {errors.phone}
                </motion.span>
              )}
            </AnimatePresence>
          </div>

          {/* Site Address */}
          <div className="flex flex-col gap-2">
            <label htmlFor="siteAddress" className="text-[13px] font-bold tracking-widest text-slate-900 uppercase">
              Site address
            </label>
            <input
              id="siteAddress"
              type="text"
              name="siteAddress"
              autoComplete="off"
              placeholder="Street address, suburb, NSW"
              value={formData.siteAddress}
              onChange={handleChange}
              className={fieldClasses("siteAddress")}
              {...ariaFor("siteAddress")}
            />
            <AnimatePresence>
              {errors.siteAddress && (
                <motion.span
                  id="siteAddress-error"
                  role="alert"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="text-red-600 text-xs mt-1"
                >
                  {errors.siteAddress}
                </motion.span>
              )}
            </AnimatePresence>
          </div>

          {/* Project Type */}
          <div className="flex flex-col gap-2">
            <label htmlFor="projectType" className="text-[13px] font-bold tracking-widest text-slate-900 uppercase">
              Project type
            </label>
            <select
              id="projectType"
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              className={selectClasses("projectType")}
              {...ariaFor("projectType")}
            >
              <option value="" disabled>Select a project type</option>
              {PROJECT_TYPES.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
            <AnimatePresence>
              {errors.projectType && (
                <motion.span
                  id="projectType-error"
                  role="alert"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="text-red-600 text-xs mt-1"
                >
                  {errors.projectType}
                </motion.span>
              )}
            </AnimatePresence>
          </div>

          {/* Start Date */}
          <div className="flex flex-col gap-2">
            <label htmlFor="startDate" className="text-[13px] font-bold tracking-widest text-slate-900 uppercase">
              Proposed start date
            </label>
            <select
              id="startDate"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              className={selectClasses("startDate")}
              {...ariaFor("startDate")}
            >
              <option value="" disabled>Select a timeframe</option>
              {START_DATES.map((date) => (
                <option key={date} value={date}>{date}</option>
              ))}
            </select>
            <AnimatePresence>
              {errors.startDate && (
                <motion.span
                  id="startDate-error"
                  role="alert"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="text-red-600 text-xs mt-1"
                >
                  {errors.startDate}
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Message */}
        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-[13px] font-bold tracking-widest text-slate-900 uppercase">
            Anything else we should know?
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Site details, engineer requirements, or context that helps us quote accurately."
            value={formData.message}
            onChange={handleChange}
            className={`bg-transparent border-b border-gray-200 py-3 text-lg font-light text-slate-950 ${FOCUS_RING} transition-colors focus:border-forest-green placeholder:text-gray-500 resize-none min-h-[100px]`}
          />
        </div>

        {/* Submit Button */}
        <div className="pt-6 flex flex-col gap-4">
          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full md:w-auto md:min-w-[260px] bg-gradient-to-b from-[#346b43] to-forest-green text-white px-10 rounded-full text-xs font-semibold tracking-wide shadow-[0_8px_20px_-6px_rgba(45,90,58,0.4)] hover:shadow-[0_12px_24px_-8px_rgba(45,90,58,0.6)] hover:brightness-105 transition-all hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3 h-[46px]"
          >
            {status === "submitting" ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Sending...
              </>
            ) : (
              "Request a Fixed-Fee Quote"
            )}
          </button>
          <p className="text-xs text-gray-500 font-light leading-relaxed">
            By sending this you agree to be contacted about your enquiry. See our{" "}
            <Link href="/privacy-policy" className="text-forest-green hover:underline">Privacy Policy</Link>.
          </p>
        </div>
      </form>
    </div>
  );
}
