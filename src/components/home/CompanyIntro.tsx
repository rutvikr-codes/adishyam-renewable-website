import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Shield, Wrench, HardHat } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export const CompanyIntro: React.FC = () => {
  return (
    <section
      className="py-20 lg:py-28 bg-[#F7F8F3] relative overflow-hidden"
      aria-label="About Adishyam Renewable"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Content (Col span 7) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#27864A]/10 border border-[#27864A]/25 text-xs font-semibold text-[#27864A] uppercase tracking-wider">
              <HardHat className="w-4 h-4" />
              <span>Engineering-Focused Partner</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#123D2A] tracking-tight leading-[1.15]">
              Precision Wind Turbine Erection &amp; On-Site Project Execution.
            </h2>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              <strong>{siteConfig.legalName}</strong> is dedicated to the
              physical execution of utility-scale wind energy infrastructure.
              We specialize in the meticulous logistics, heavy-lift crane
              erection, mechanical assembly, and technical coordination required
              to safely bring wind turbines from staging yards into full
              generation readiness.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Navigating varied geographic terrains, tight crane setup clearances,
              and fluctuating wind windows demands a partner who values
              structural safety, OEM procedural discipline, and continuous
              communication above all else.
            </p>

            {/* Value checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#27864A] flex-shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-slate-800">
                  OEM-Compliant Rigging &amp; Lifting Studies
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#27864A] flex-shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-slate-800">
                  Site Access &amp; Hardstand Verification
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#27864A] flex-shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-slate-800">
                  Calibrated Torque &amp; Tension Audits
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#27864A] flex-shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-slate-800">
                  Dedicated On-Site EHS Governance
                </span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#123D2A] hover:bg-[#27864A] text-white text-sm font-bold shadow-md transition-all hover:scale-[1.02]"
              >
                <span>Learn More About Our Company</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/process"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-white border border-slate-300 hover:border-[#27864A] text-[#123D2A] text-sm font-semibold transition-all hover:bg-emerald-50/50"
              >
                <span>View Execution Process</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Visual Showcase (Col span 5) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Primary image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3]">
                <Image
                  src="/images/site-engineers.jpg"
                  alt="Adishyam site engineering team reviewing project blueprints at wind farm"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>

              {/* Overlapping secondary feature card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-xl shadow-xl border border-emerald-950/10 max-w-[260px] hidden sm:block animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-[#27864A]/10 text-[#27864A] flex items-center justify-center font-bold">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Execution Standard
                    </h4>
                    <p className="text-sm font-extrabold text-[#123D2A]">
                      Zero-Compromise Safety
                    </p>
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Strict exclusion zones and certified rigging governance on every lift.
                </p>
              </div>

              {/* Decorative accent background blob */}
              <div className="absolute -top-6 -right-6 w-48 h-48 bg-[#A7D96C]/20 rounded-full blur-2xl -z-10 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
