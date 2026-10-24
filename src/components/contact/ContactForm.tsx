"use client";

import React, { useState } from "react";
import {
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
  Building,
  Mail,
  Phone,
  MapPin,
  HelpCircle,
} from "lucide-react";
import { servicesData } from "@/data/services";

interface FormDataState {
  name: string;
  companyName: string;
  email: string;
  phone: string;
  projectLocation: string;
  serviceOfInterest: string;
  projectDescription: string;
  preferredContactMethod: "Email" | "Phone";
  honeypot: string; // Anti-spam bot field
}

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormDataState>({
    name: "",
    companyName: "",
    email: "",
    phone: "",
    projectLocation: "",
    serviceOfInterest: "Wind Turbine Erection",
    projectDescription: "",
    preferredContactMethod: "Email",
    honeypot: "",
  });

  const [formStatus, setFormStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [successDetails, setSuccessDetails] = useState<{
    message: string;
    inquiryId: string;
  } | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const validateClientSide = (): boolean => {
    const errors: Record<string, string> = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errors.name = "Full name is required (at least 2 characters).";
    }

    if (!formData.companyName.trim() || formData.companyName.trim().length < 2) {
      errors.companyName = "Company or entity name is required.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errors.email = "Please provide a valid business email address.";
    }

    if (!formData.phone.trim() || formData.phone.trim().length < 7) {
      errors.phone = "Please provide a valid contact phone number.";
    }

    if (!formData.projectLocation.trim()) {
      errors.projectLocation = "Site or project location is required.";
    }

    if (
      !formData.projectDescription.trim() ||
      formData.projectDescription.trim().length < 10
    ) {
      errors.projectDescription =
        "Please describe your project requirements (at least 10 characters).";
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear specific field error as user types
    if (fieldErrors[name]) {
      setFieldErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!validateClientSide()) {
      return;
    }

    setFormStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setFormStatus("success");
        setSuccessDetails({
          message: data.message,
          inquiryId: data.inquiryId || "AR-INQ",
        });
        // Reset form
        setFormData({
          name: "",
          companyName: "",
          email: "",
          phone: "",
          projectLocation: "",
          serviceOfInterest: "Wind Turbine Erection",
          projectDescription: "",
          preferredContactMethod: "Email",
          honeypot: "",
        });
      } else {
        setFormStatus("error");
        setErrorMessage(
          data.message ||
            "Unable to submit inquiry at this time. Please check your inputs or try again."
        );
        if (data.errors) {
          setFieldErrors(data.errors);
        }
      }
    } catch (err) {
      console.error("Form submission error:", err);
      setFormStatus("error");
      setErrorMessage(
        "A network error occurred. Please verify your connection or contact our team directly via email."
      );
    }
  };

  return (
    <div
      id="contact-form"
      className="bg-white rounded-2xl shadow-xl border border-slate-200/80 p-6 sm:p-10"
    >
      <div className="mb-8">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#123D2A] tracking-tight">
          Initiate Project Consultation
        </h3>
        <p className="mt-2 text-sm text-slate-600">
          Share your site details and wind energy requirements. Our project
          execution team will assess your scope and coordinate an initial review.
        </p>
      </div>

      {/* Success State */}
      {formStatus === "success" && successDetails && (
        <div
          role="status"
          aria-live="polite"
          className="p-6 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-950 mb-8 animate-in fade-in"
        >
          <div className="flex items-start gap-3">
            <CheckCircle className="w-6 h-6 text-[#27864A] flex-shrink-0 mt-0.5" />
            <div className="space-y-2">
              <h4 className="font-bold text-lg text-[#123D2A]">
                Inquiry Successfully Logged
              </h4>
              <p className="text-sm text-slate-700 leading-relaxed">
                {successDetails.message}
              </p>
              <p className="text-xs font-mono font-semibold text-[#27864A] pt-1">
                Reference ID: {successDetails.inquiryId}
              </p>
              <button
                type="button"
                onClick={() => setFormStatus("idle")}
                className="mt-3 text-xs font-bold text-[#123D2A] hover:underline inline-block"
              >
                Submit another inquiry &rarr;
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Error Message Alert */}
      {formStatus === "error" && errorMessage && (
        <div
          role="alert"
          aria-live="assertive"
          className="p-4 rounded-xl bg-rose-50 border border-rose-300 text-rose-950 mb-6 flex items-start gap-3"
        >
          <AlertCircle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
          <p className="text-sm leading-relaxed">{errorMessage}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-6">
        {/* Anti-spam honeypot (invisible to real users) */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="honeypot">Leave this blank</label>
          <input
            type="text"
            id="honeypot"
            name="honeypot"
            value={formData.honeypot}
            onChange={handleChange}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        {/* Name & Company */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="name"
              className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
            >
              Full Name <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Ramesh Patel"
              className={`w-full px-4 py-3 rounded-lg border text-sm text-slate-900 bg-[#F7F8F3]/60 focus:bg-white focus:outline-none transition-colors ${
                fieldErrors.name
                  ? "border-rose-400 focus:border-rose-500 ring-1 ring-rose-300"
                  : "border-slate-300 focus:border-[#27864A] focus:ring-1 focus:ring-[#27864A]"
              }`}
            />
            {fieldErrors.name && (
              <p className="text-xs text-rose-600 mt-1.5">{fieldErrors.name}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="companyName"
              className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
            >
              Company / Developer Name <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              required
              value={formData.companyName}
              onChange={handleChange}
              placeholder="e.g. Wind Power Solutions Ltd."
              className={`w-full px-4 py-3 rounded-lg border text-sm text-slate-900 bg-[#F7F8F3]/60 focus:bg-white focus:outline-none transition-colors ${
                fieldErrors.companyName
                  ? "border-rose-400 focus:border-rose-500 ring-1 ring-rose-300"
                  : "border-slate-300 focus:border-[#27864A] focus:ring-1 focus:ring-[#27864A]"
              }`}
            />
            {fieldErrors.companyName && (
              <p className="text-xs text-rose-600 mt-1.5">
                {fieldErrors.companyName}
              </p>
            )}
          </div>
        </div>

        {/* Email & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="email"
              className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
            >
              Business Email <span className="text-rose-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="name@company.com"
              className={`w-full px-4 py-3 rounded-lg border text-sm text-slate-900 bg-[#F7F8F3]/60 focus:bg-white focus:outline-none transition-colors ${
                fieldErrors.email
                  ? "border-rose-400 focus:border-rose-500 ring-1 ring-rose-300"
                  : "border-slate-300 focus:border-[#27864A] focus:ring-1 focus:ring-[#27864A]"
              }`}
            />
            {fieldErrors.email && (
              <p className="text-xs text-rose-600 mt-1.5">{fieldErrors.email}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
            >
              Phone Number <span className="text-rose-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 98765 43210"
              className={`w-full px-4 py-3 rounded-lg border text-sm text-slate-900 bg-[#F7F8F3]/60 focus:bg-white focus:outline-none transition-colors ${
                fieldErrors.phone
                  ? "border-rose-400 focus:border-rose-500 ring-1 ring-rose-300"
                  : "border-slate-300 focus:border-[#27864A] focus:ring-1 focus:ring-[#27864A]"
              }`}
            />
            {fieldErrors.phone && (
              <p className="text-xs text-rose-600 mt-1.5">{fieldErrors.phone}</p>
            )}
          </div>
        </div>

        {/* Project Location & Service of Interest */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="projectLocation"
              className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
            >
              Anticipated Project Location <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              id="projectLocation"
              name="projectLocation"
              required
              value={formData.projectLocation}
              onChange={handleChange}
              placeholder="e.g. Kutch, Gujarat / Coimbatore, TN"
              className={`w-full px-4 py-3 rounded-lg border text-sm text-slate-900 bg-[#F7F8F3]/60 focus:bg-white focus:outline-none transition-colors ${
                fieldErrors.projectLocation
                  ? "border-rose-400 focus:border-rose-500 ring-1 ring-rose-300"
                  : "border-slate-300 focus:border-[#27864A] focus:ring-1 focus:ring-[#27864A]"
              }`}
            />
            {fieldErrors.projectLocation && (
              <p className="text-xs text-rose-600 mt-1.5">
                {fieldErrors.projectLocation}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="serviceOfInterest"
              className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
            >
              Service of Interest <span className="text-rose-500">*</span>
            </label>
            <select
              id="serviceOfInterest"
              name="serviceOfInterest"
              value={formData.serviceOfInterest}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm text-slate-900 bg-[#F7F8F3]/60 focus:bg-white focus:outline-none focus:border-[#27864A] focus:ring-1 focus:ring-[#27864A] transition-colors"
            >
              {servicesData.map((svc) => (
                <option key={svc.id} value={svc.title}>
                  {svc.title}
                </option>
              ))}
              <option value="Complete Turnkey Execution Support">
                Complete Turnkey Execution Support
              </option>
              <option value="Other Custom Advisory">Other Custom Advisory</option>
            </select>
          </div>
        </div>

        {/* Project Description */}
        <div>
          <label
            htmlFor="projectDescription"
            className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
          >
            Project Description &amp; Scope Overview{" "}
            <span className="text-rose-500">*</span>
          </label>
          <textarea
            id="projectDescription"
            name="projectDescription"
            rows={4}
            required
            value={formData.projectDescription}
            onChange={handleChange}
            placeholder="Please outline the number of wind turbines, OEM model/megawatt rating, target execution schedule, and site specific conditions..."
            className={`w-full px-4 py-3 rounded-lg border text-sm text-slate-900 bg-[#F7F8F3]/60 focus:bg-white focus:outline-none transition-colors ${
              fieldErrors.projectDescription
                ? "border-rose-400 focus:border-rose-500 ring-1 ring-rose-300"
                : "border-slate-300 focus:border-[#27864A] focus:ring-1 focus:ring-[#27864A]"
            }`}
          />
          {fieldErrors.projectDescription && (
            <p className="text-xs text-rose-600 mt-1.5">
              {fieldErrors.projectDescription}
            </p>
          )}
        </div>

        {/* Preferred Contact Method */}
        <div>
          <span className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
            Preferred Method of Contact
          </span>
          <div className="flex items-center gap-6 text-sm text-slate-800">
            <label className="inline-flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="preferredContactMethod"
                value="Email"
                checked={formData.preferredContactMethod === "Email"}
                onChange={handleChange}
                className="text-[#27864A] focus:ring-[#27864A]"
              />
              <span>Email</span>
            </label>
            <label className="inline-flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="preferredContactMethod"
                value="Phone"
                checked={formData.preferredContactMethod === "Phone"}
                onChange={handleChange}
                className="text-[#27864A] focus:ring-[#27864A]"
              />
              <span>Phone</span>
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={formStatus === "submitting"}
            className="w-full py-4 px-6 rounded-xl bg-[#27864A] hover:bg-[#1F6B3B] text-white font-bold text-base shadow-lg shadow-emerald-950/20 transition-all hover:scale-[1.01] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {formStatus === "submitting" ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Transmitting Project Scope...</span>
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                <span>Submit Project Consultation Request</span>
              </>
            )}
          </button>
          <p className="mt-3 text-center text-xs text-slate-500">
            Confidentiality Guaranteed: Your project coordinates and technical
            details are handled under non-disclosure standards.
          </p>
        </div>
      </form>
    </div>
  );
};
