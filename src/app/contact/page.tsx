import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import { Mail, PhoneCall, ShieldCheck, Clock, MapPin } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfoCard } from "@/components/contact/ContactInfoCard";

export const metadata: Metadata = {
  title: "Contact Us | Discuss Your Wind Energy Project",
  description:
    "Get in touch with Adishyam Renewable Private Limited to discuss wind turbine erection, installation, on-site project execution, and engineering support services.",
};

export default function ContactPage() {
  return (
    <div className="pt-24 lg:pt-28">
      {/* Header Banner */}
      <section className="bg-[#123D2A] text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/wind-sunset.jpg"
            alt="Wind turbines at sunset"
            fill
            priority
            className="object-cover opacity-20 filter contrast-125"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D2B1D] via-[#123D2A]/90 to-[#123D2A]/80" />
          <div className="absolute inset-0 bg-grid-pattern-dark opacity-10 pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#27864A]/40 border border-[#A7D96C]/40 text-xs font-semibold text-[#A7D96C] uppercase tracking-wider mb-4">
              <Mail className="w-4 h-4 text-[#A7D96C]" />
              <span>Project Engagement</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white">
              Connect With Our Engineering Team.
            </h1>

            <p className="mt-5 text-base sm:text-lg text-slate-200 leading-relaxed">
              Whether you are planning a utility wind farm installation, require
              heavy crane rigging coordination, or seek on-site field
              management support, our engineers are prepared to assist.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form & Contact Section */}
      <section className="py-16 lg:py-24 bg-[#F7F8F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Form Column (Col span 7) */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            {/* Direct Info & Coordination Details (Col span 5) */}
            <div className="lg:col-span-5">
              <ContactInfoCard />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
