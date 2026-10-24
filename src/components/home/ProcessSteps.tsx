import React from "react";
import Link from "next/link";
import {
  MessageSquare,
  MapPin,
  ClipboardList,
  Wrench,
  CheckCircle2,
  ArrowRight,
  Shield,
} from "lucide-react";
import { executionProcessSteps, ProcessStep } from "@/data/process";
import { SectionHeading } from "@/components/ui/SectionHeading";

const iconMap = {
  MessageSquare: MessageSquare,
  MapPin: MapPin,
  ClipboardList: ClipboardList,
  Wrench: Wrench,
  CheckCircle2: CheckCircle2,
};

export const ProcessSteps: React.FC = () => {
  return (
    <section
      id="process"
      className="py-20 lg:py-28 bg-[#F7F8F3] relative"
      aria-label="Project Execution Process"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Structured Methodology"
          title="Project Execution Lifecycle"
          subtitle="From initial scope alignment to final mechanical handover, our multi-stage workflow enforces engineering rigor at every step."
        />

        <div className="mt-4 mb-12 max-w-2xl mx-auto text-center">
          <p className="text-xs text-slate-500 bg-white py-1.5 px-4 rounded-full inline-block border border-slate-200">
            *Execution phases and milestone deliverables are tailored to specific project specifications, OEM standards, and site terrain conditions.
          </p>
        </div>

        {/* Process Flow Cards */}
        <div className="relative">
          {/* Subtle connecting line for desktop view */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-0.5 bg-gradient-to-r from-[#27864A]/20 via-[#27864A] to-[#27864A]/20 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {executionProcessSteps.map((step: ProcessStep) => {
              const IconComponent = iconMap[step.iconName] || MessageSquare;

              return (
                <div
                  key={step.stepNumber}
                  className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-lg hover:border-[#27864A] transition-all flex flex-col justify-between group"
                >
                  <div>
                    {/* Header: Step Number & Icon */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-black text-[#123D2A]/30 group-hover:text-[#27864A] transition-colors font-mono">
                        {step.stepNumber}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-[#F7F8F3] group-hover:bg-[#27864A] text-[#27864A] group-hover:text-white flex items-center justify-center transition-colors shadow-xs">
                        <IconComponent className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-base font-bold text-[#123D2A] mb-1.5 leading-snug">
                      {step.title}
                    </h3>

                    <p className="text-xs font-semibold text-[#27864A] mb-3">
                      {step.tagline}
                    </p>

                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {step.summary}
                    </p>
                  </div>

                  {/* Safety Focus Snippet */}
                  <div className="pt-3 border-t border-slate-100 mt-2">
                    <div className="flex items-start gap-1.5 text-[11px] text-slate-500">
                      <Shield className="w-3.5 h-3.5 text-[#27864A] flex-shrink-0 mt-0.5" />
                      <span className="line-clamp-2">{step.safetyFocus}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/process"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#123D2A] hover:bg-[#27864A] text-white font-bold text-sm shadow-md transition-all hover:scale-[1.02]"
          >
            <span>Review Full Execution Process &amp; Technical Milestones</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
