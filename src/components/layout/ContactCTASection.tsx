import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, PhoneCall, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

interface ContactCTASectionProps {
  title?: string;
  subtitle?: string;
}

export const ContactCTASection: React.FC<ContactCTASectionProps> = ({
  title = "Let's Build the Future of Renewable Energy Together.",
  subtitle = "Partner with Adishyam Renewable Private Limited for structured wind turbine erection, meticulous rigging coordination, and dependable on-site engineering execution.",
}) => {
  return (
    <section
      className="relative py-20 lg:py-24 overflow-hidden bg-[#123D2A] text-white"
      aria-label="Call to Action"
    >
      {/* Background imagery with dark accessible gradient overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/wind-sunset.jpg"
          alt="Wind farm landscape at sunset"
          fill
          className="object-cover opacity-20 filter contrast-125"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D2B1D] via-[#123D2A]/90 to-[#123D2A]/80" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#27864A]/40 border border-[#A7D96C]/40 text-xs font-semibold text-[#A7D96C] uppercase tracking-wider mb-4">
            <ShieldCheck className="w-4 h-4 text-[#A7D96C]" />
            <span>Infrastructure Execution Partnership</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white">
            {title}
          </h2>

          <p className="mt-5 text-base sm:text-lg text-slate-200 leading-relaxed">
            {subtitle}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-[#27864A] hover:bg-[#1F6B3B] text-white font-bold text-base shadow-xl shadow-emerald-950/40 transition-all hover:scale-[1.02]"
            >
              <span>Discuss Your Project</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            <Link
              href="/contact#contact-form"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-base border border-white/20 transition-all hover:scale-[1.02]"
            >
              <PhoneCall className="w-4 h-4 text-[#A7D96C]" />
              <span>Contact Our Team</span>
            </Link>
          </div>

          <p className="mt-6 text-xs text-slate-400">
            Prompt review: Technical inquiries evaluated by site engineering coordinators within 24 hours.
          </p>
        </div>
      </div>
    </section>
  );
};
