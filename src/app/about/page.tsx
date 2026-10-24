import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ShieldCheck,
  Target,
  Eye,
  CheckCircle2,
  Compass,
  HardHat,
  Users,
  Info,
  ArrowRight,
  FileCheck,
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { companyProfile } from "@/data/company";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactCTASection } from "@/components/layout/ContactCTASection";

export const metadata: Metadata = {
  title: "About Us | Engineering & Execution Excellence",
  description:
    "Learn about Adishyam Renewable Private Limited, our mission, vision, engineering philosophy, and zero-compromise safety standards for wind energy infrastructure.",
};

export default function AboutPage() {
  return (
    <div className="pt-24 lg:pt-28">
      {/* Editorial Header Banner */}
      <section className="bg-[#123D2A] text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/crane-erection.jpg"
            alt="Wind turbine heavy-crane erection on location"
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
              <Compass className="w-4 h-4 text-[#A7D96C]" />
              <span>Corporate Profile</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white">
              Engineering Precision in Wind Turbine Infrastructure.
            </h1>

            <p className="mt-5 text-base sm:text-lg text-slate-200 leading-relaxed">
              <strong>{siteConfig.legalName}</strong> is an infrastructure
              execution partner dedicated to the heavy-lift erection, mechanical
              installation, and on-site engineering supervision of wind energy
              projects.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Mission Card */}
            <div className="bg-[#F7F8F3] rounded-2xl p-8 sm:p-10 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#27864A] text-white flex items-center justify-center mb-6 shadow-md">
                  <Target className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-extrabold text-[#123D2A] mb-4">
                  Our Mission
                </h2>
                <p className="text-slate-700 leading-relaxed text-base">
                  {companyProfile.mission}
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-200 text-xs text-slate-500 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#27864A]" />
                <span>Focused on verifiable execution excellence</span>
              </div>
            </div>

            {/* Vision Card */}
            <div className="bg-[#123D2A] text-white rounded-2xl p-8 sm:p-10 border border-[#27864A]/40 shadow-xl flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#A7D96C] text-[#123D2A] flex items-center justify-center mb-6 shadow-md">
                  <Eye className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-extrabold text-white mb-4">
                  Our Vision
                </h2>
                <p className="text-slate-200 leading-relaxed text-base">
                  {companyProfile.vision}
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-emerald-900 text-xs text-[#A7D96C] flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#A7D96C]" />
                <span>Supporting sustainable power transition</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering & Execution Philosophy */}
      <section className="py-20 bg-[#F7F8F3] border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Foundational Tenets"
            title="Our Engineering & Execution Philosophy"
            subtitle="How we approach the operational realities, mechanical tolerances, and site logistics of wind energy infrastructure."
          />

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
            {companyProfile.philosophy.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <span className="text-3xl font-black text-[#27864A]/30 font-mono mb-4 block">
                    0{index + 1}
                  </span>
                  <h3 className="text-xl font-bold text-[#123D2A] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.text}
                  </p>
                </div>
                <div className="pt-4 mt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-[#27864A]">
                  <HardHat className="w-4 h-4" />
                  <span>Field Discipline</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Quality Approach (Detailed Editorial) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#27864A]/10 text-xs font-semibold text-[#27864A] uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>QHSE Governance</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#123D2A] tracking-tight">
                Safety &amp; Quality Are Non-Negotiable Baselines.
              </h2>

              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                Erecting a 100-ton nacelle or a 75-meter rotor assembly at 140
                meters height leaves zero tolerance for deviation. We combine
                certified rigging gear, daily job hazard reviews, and multi-stage
                quality checklists to protect personnel and preserve multi-million
                dollar generation assets.
              </p>

              <div className="space-y-3 pt-2">
                {companyProfile.safetyAndQualityApproach.standards.map(
                  (std, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#27864A] flex-shrink-0 mt-1" />
                      <span className="text-xs sm:text-sm text-slate-700 font-medium">
                        {std}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-[#123D2A] text-white p-8 rounded-2xl shadow-xl border border-[#27864A]/30 space-y-5">
                <div className="flex items-center gap-2 text-[#A7D96C] font-bold text-sm">
                  <FileCheck className="w-5 h-5" />
                  <span>5-Stage Quality Verification Protocol</span>
                </div>

                <div className="space-y-3.5 text-xs sm:text-sm text-slate-300">
                  {companyProfile.safetyAndQualityApproach.qualityAuditStages.map(
                    (stage, i) => (
                      <div
                        key={i}
                        className="p-3 rounded-lg bg-[#0D2B1D]/80 border border-emerald-900 flex items-start gap-3"
                      >
                        <span className="w-5 h-5 rounded-full bg-[#27864A] text-white flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5">
                          {i + 1}
                        </span>
                        <span className="text-slate-200">{stage}</span>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Technical Structure Section (Configurable Framework) */}
      <section className="py-20 bg-[#F7F8F3] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Organizational Governance"
            title={companyProfile.teamPlaceholder.title}
            subtitle="Our multidisciplinary operational structure uniting heavy-lift rigging coordinators, mechanical specialists, and site safety directors."
          />

          {/* Configurable Notice */}
          <div className="mt-4 mb-10 max-w-2xl mx-auto bg-blue-50 border border-blue-200 rounded-xl p-3 text-center flex items-center justify-center gap-2 text-xs text-blue-900">
            <Info className="w-4 h-4 text-blue-600 flex-shrink-0" />
            <span>{companyProfile.teamPlaceholder.notice}</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyProfile.teamPlaceholder.roles.map((role, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-full bg-[#27864A]/10 text-[#27864A] flex items-center justify-center mb-4">
                    <Users className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#27864A] block mb-1">
                    {role.dept}
                  </span>
                  <h3 className="text-base font-bold text-[#123D2A] mb-2 leading-snug">
                    {role.role}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {role.description}
                  </p>
                </div>
                <div className="pt-4 mt-6 border-t border-slate-100 text-[11px] text-slate-400">
                  Profile data configurable
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to action */}
      <ContactCTASection
        title="Ready to Discuss Your Wind Project Requirements?"
        subtitle="Connect with our site engineering coordinators to review your upcoming turbine installations and scheduling windows."
      />
    </div>
  );
}
