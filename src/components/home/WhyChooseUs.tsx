import React from "react";
import {
  Cpu,
  ShieldCheck,
  GitMerge,
  MessageSquare,
  Award,
  Leaf,
  CheckCircle,
} from "lucide-react";
import { whyChooseUsValues, ValueProposition } from "@/data/company";
import { SectionHeading } from "@/components/ui/SectionHeading";

const iconMap = {
  Cpu: Cpu,
  ShieldCheck: ShieldCheck,
  GitMerge: GitMerge,
  MessageSquare: MessageSquare,
  Award: Award,
  Leaf: Leaf,
};

export const WhyChooseUs: React.FC = () => {
  return (
    <section
      className="py-20 lg:py-28 bg-[#123D2A] text-white relative overflow-hidden"
      aria-label="Why Choose Adishyam Renewable"
    >
      {/* Background visual texture */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-10 pointer-events-none" />
      <div className="absolute -top-32 -left-32 w-80 h-80 bg-[#27864A]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Execution Commitments"
          title="Why Partner With Adishyam Renewable"
          subtitle="Our operational principles are built on engineering discipline, zero-compromise safety standards, and transparent project coordination."
          theme="dark"
        />

        {/* 6 Value Pillars Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseUsValues.map((item: ValueProposition, idx: number) => {
            const IconComponent = iconMap[item.iconName] || ShieldCheck;

            return (
              <div
                key={idx}
                className="bg-[#0D2B1D]/80 backdrop-blur-sm rounded-2xl p-7 border border-[#27864A]/30 hover:border-[#A7D96C]/60 hover:bg-[#0D2B1D] transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#27864A]/30 text-[#A7D96C] border border-[#A7D96C]/30 flex items-center justify-center group-hover:scale-105 transition-transform">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#A7D96C] px-2.5 py-1 rounded bg-[#27864A]/20">
                      {item.highlight}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#A7D96C] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-5 mt-6 border-t border-emerald-900/60 flex items-center gap-2 text-xs text-slate-400">
                  <CheckCircle className="w-4 h-4 text-[#A7D96C]" />
                  <span>Standard Operational Protocol</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
