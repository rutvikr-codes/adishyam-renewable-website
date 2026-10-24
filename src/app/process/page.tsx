import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  MessageSquare,
  MapPin,
  ClipboardList,
  Wrench,
  CheckCircle2,
  ShieldCheck,
  FileText,
  AlertTriangle,
  ArrowRight,
  GitBranch,
} from "lucide-react";
import { executionProcessSteps, ProcessStep } from "@/data/process";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactCTASection } from "@/components/layout/ContactCTASection";

export const metadata: Metadata = {
  title: "Our Process | Wind Turbine Project Execution Lifecycle",
  description:
    "Review our 5-phase execution lifecycle for wind turbine erection: initial requirements, site assessment, 3D lift planning, on-site rigging, and pre-commissioning handover.",
};

const iconMap = {
  MessageSquare: MessageSquare,
  MapPin: MapPin,
  ClipboardList: ClipboardList,
  Wrench: Wrench,
  CheckCircle2: CheckCircle2,
};

export default function ProcessPage() {
  return (
    <div className="pt-24 lg:pt-28">
      {/* Header Banner */}
      <section className="bg-[#123D2A] text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/crane-erection.jpg"
            alt="Wind turbine execution process on site"
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
              <GitBranch className="w-4 h-4 text-[#A7D96C]" />
              <span>Standard Operational Workflow</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white">
              The Project Execution Lifecycle.
            </h1>

            <p className="mt-5 text-base sm:text-lg text-slate-200 leading-relaxed">
              How Adishyam Renewable structures every wind turbine installation
              from preliminary engineering analysis to mechanical handover,
              prioritizing safety, OEM alignment, and milestone punctuality.
            </p>
          </div>
        </div>
      </section>

      {/* Process Workflow Introduction */}
      <section className="py-12 bg-[#F7F8F3] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1">
              <h2 className="text-base font-bold text-[#123D2A]">
                Disciplined Project Gates &amp; Stage Governance
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Each phase requires formal milestone sign-offs before transitioning to subsequent heavy mechanical stages.
              </p>
            </div>
            <div className="text-xs text-slate-500 bg-[#F7F8F3] py-2 px-4 rounded-xl border border-slate-200">
              *Process adapts dynamically to OEM specifications, terrain constraints, and client requirements.
            </div>
          </div>
        </div>
      </section>

      {/* In-Depth Process Timeline */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 relative">
            {/* Vertical timeline spine */}
            <div className="hidden md:block absolute top-8 bottom-8 left-[39px] w-0.5 bg-gradient-to-b from-[#27864A] via-[#A7D96C] to-[#123D2A] -z-0" />

            {executionProcessSteps.map((step: ProcessStep, index: number) => {
              const IconComponent = iconMap[step.iconName] || MessageSquare;

              return (
                <div
                  key={step.stepNumber}
                  className="relative z-10 flex flex-col md:flex-row items-start gap-6 lg:gap-8 group"
                >
                  {/* Step Indicator Badge */}
                  <div className="flex-shrink-0 flex items-center md:flex-col gap-3">
                    <div className="w-20 h-20 rounded-2xl bg-[#123D2A] text-white flex flex-col items-center justify-center shadow-lg border-2 border-[#27864A] group-hover:scale-105 transition-transform duration-300">
                      <span className="text-xs font-mono font-bold text-[#A7D96C]">
                        PHASE
                      </span>
                      <span className="text-2xl font-black">{step.stepNumber}</span>
                    </div>
                  </div>

                  {/* Main Phase Card */}
                  <div className="flex-1 bg-[#F7F8F3] rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-[#27864A]/10 text-[#27864A] flex items-center justify-center">
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-[#123D2A]">
                          {step.title}
                        </h3>
                      </div>
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white text-[#27864A] border border-[#27864A]/20">
                        {step.tagline}
                      </span>
                    </div>

                    <p className="text-sm text-slate-700 leading-relaxed mb-6">
                      {step.summary}
                    </p>

                    {/* Activities & Deliverables Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-white p-5 rounded-xl border border-slate-200 mb-6">
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-[#123D2A] mb-3 flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-[#27864A]" />
                          Key Operational Activities
                        </h4>
                        <ul className="space-y-2 text-xs text-slate-600">
                          {step.activities.map((act, i) => (
                            <li key={i} className="flex items-start gap-1.5">
                              <span className="text-[#27864A] font-bold">•</span>
                              <span>{act}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-[#123D2A] mb-3 flex items-center gap-1.5">
                          <FileText className="w-4 h-4 text-[#27864A]" />
                          Milestone Deliverables
                        </h4>
                        <ul className="space-y-2 text-xs text-slate-600">
                          {step.deliverables.map((del, i) => (
                            <li key={i} className="flex items-start gap-1.5">
                              <span className="text-[#27864A] font-bold">•</span>
                              <span className="font-medium text-slate-800">
                                {del}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Safety Gate Alert */}
                    <div className="p-3.5 rounded-lg bg-emerald-50 border border-emerald-200/80 flex items-start gap-2.5 text-xs text-emerald-950">
                      <ShieldCheck className="w-4 h-4 text-[#27864A] flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="font-bold">Phase Safety Priority:</strong>{" "}
                        {step.safetyFocus}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to action */}
      <ContactCTASection
        title="Ready to Plan Your Project Execution?"
        subtitle="Schedule a consultation with our installation coordinators to discuss method statements, crane layouts, and site schedules."
      />
    </div>
  );
}
