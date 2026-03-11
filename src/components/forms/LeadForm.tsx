"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";

type Inputs = {
  name: string;
  email: string;
  phone: string;
  projectDescription: string;
};

export default function LeadForm() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<Inputs>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setIsSubmitting(true);
    // Simulate network request
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form submission data:", data);
    
    // Here we would integrate Resend or Formspree
    // await fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) });

    setIsSubmitting(false);
    setIsSuccess(true);
    reset();

    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSuccess(false);
    }, 5000);
  };

  return (
    <div className="w-full max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
      <AnimatePresence mode="wait">
        {isSuccess ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="text-center py-12"
          >
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-forest-green/10 mb-6">
              <svg className="h-8 w-8 text-forest-green" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-slate-black font-montserrat">Request Received</h3>
            <p className="mt-4 text-gray-600 font-inter">
              Thank you for reaching out. A senior geotechnical engineer will review your details and contact you within 24 hours.
            </p>
            <button
              onClick={() => setIsSuccess(false)}
              className="mt-8 text-sm font-semibold text-forest-green hover:text-forest-green/80 transition-colors"
            >
              Submit another request
            </button>
          </motion.div>
        ) : (
          <motion.div
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <h3 className="text-2xl font-bold text-slate-black font-montserrat mb-6">Request a Free Quote</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                  Full Name
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                    type="text"
                    {...register("name", { required: "Name is required" })}
                    className={`block w-full rounded-md border-0 py-2.5 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 ${errors.name ? 'ring-red-500 focus:ring-red-500' : 'ring-gray-300 focus:ring-forest-green'}`}
                    placeholder="Jane Doe"
                  />
                  {errors.name && <p className="mt-1 flex text-sm text-red-500">{errors.name.message}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      type="email"
                      {...register("email", { 
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address"
                        }
                      })}
                      className={`block w-full rounded-md border-0 py-2.5 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 ${errors.email ? 'ring-red-500 focus:ring-red-500' : 'ring-gray-300 focus:ring-forest-green'}`}
                      placeholder="jane@example.com"
                    />
                    {errors.email && <p className="mt-1 flex text-sm text-red-500">{errors.email.message}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
                    Phone number
                  </label>
                  <div className="mt-2">
                    <input
                      id="phone"
                      type="tel"
                      {...register("phone")}
                      className="block w-full rounded-md border-0 py-2.5 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-forest-green sm:text-sm sm:leading-6"
                      placeholder="0400 000 000"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="projectDescription" className="block text-sm font-medium leading-6 text-gray-900">
                  Project Details
                </label>
                <div className="mt-2">
                  <textarea
                    id="projectDescription"
                    rows={4}
                    {...register("projectDescription", { required: "Please provide some details about your project" })}
                    className={`block w-full rounded-md border-0 py-2.5 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 ${errors.projectDescription ? 'ring-red-500 focus:ring-red-500' : 'ring-gray-300 focus:ring-forest-green'}`}
                    placeholder="Tell us about the site location and proposed works..."
                  />
                  {errors.projectDescription && <p className="mt-1 flex text-sm text-red-500">{errors.projectDescription.message}</p>}
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex w-full items-center justify-center rounded-full bg-forest-green px-8 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-forest-green/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest-green disabled:opacity-70 disabled:cursor-not-allowed transition-all"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </span>
                  ) : "Submit Request"}
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
