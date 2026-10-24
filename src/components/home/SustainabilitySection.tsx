import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Leaf, Sun, Wind, ShieldCheck, ArrowRight } from "lucide-react";

export const SustainabilitySection: React.FC = () => {
  return (
    <section
      className="py-20 lg:py-28 bg-[#123D2A] text-white relative overflow-hidden"
      aria-label="Sustainability and Environmental Commitment"
    >
      {/* Background imagery subtle overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-wind-farm.jpg"
          alt="Clean wind energy generation on rolling green landscape"
          fill
          className="object-cover opacity-15 mix-blend-luminosity"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D2B1D] via-[#123D2A]/95 to-[#123D2A]/85" />
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-10 pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Sustainable Infrastructure Narrative (Col span 7) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#27864A]/30 border border-[#A7D96C]/30 text-xs font-semibold text-[#A7D96C] uppercase tracking-wider">
              <Leaf className="w-4 h-4 text-[#A7D96C]" />
              <span>Renewable Energy Stewardship</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Building the Infrastructure for a Low-Carbon Energy Grid.
            </h2>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              Harnessing wind energy requires more than just mechanical turbines;
              it demands conscientious on-site execution that respects the natural
              landscape. Adishyam Renewable is committed to executing wind
              infrastructure projects with minimal ground footprint, disciplined
              erosion management, and adherence to environmental guidelines.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-[#0D2B1D]/90 p-4 rounded-xl border border-emerald-900/80 space-y-1.5">
                <div className="flex items-center gap-2 text-[#A7D96C]">
                  <Wind className="w-4 h-4" />
                  <h3 className="font-bold text-sm text-white">Clean Generation Asset</h3>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Installing zero-emission energy converters that yield clean electricity for decades of continuous operation.
                </p>
              </div>

              <div className="bg-[#0D2B1D]/90 p-4 rounded-xl border border-emerald-900/80 space-y-1.5">
                <div className="flex items-center gap-2 text-[#A7D96C]">
                  <ShieldCheck className="w-4 h-4" />
                  <h3 className="font-bold text-sm text-white">Responsible Site Stewardship</h3>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Rigorous staging containment, waste prevention, and soil preservation across transport routes and crane pads.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/about#sustainability"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#A7D96C] hover:text-white transition-colors"
              >
                <span>Read Our Environmental &amp; Safety Commitments</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Visual Infographic Feature (Col span 5) */}
          <div className="lg:col-span-5">
            <div className="bg-[#0D2B1D]/90 backdrop-blur-md rounded-2xl p-7 border border-[#27864A]/40 shadow-2xl space-y-6">
              <h3 className="text-lg font-bold text-white border-b border-emerald-900 pb-3 flex items-center justify-between">
                <span>The Value of Wind Infrastructure</span>
                <span className="text-xs text-[#A7D96C] font-mono">INFRASTRUCTURE</span>
              </h3>

              <div className="space-y-4 text-xs text-slate-300">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-[#27864A]/30 text-[#A7D96C] flex items-center justify-center font-bold flex-shrink-0 text-xs">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">Long-Term Asset Durability</h4>
                    <p className="mt-0.5 text-slate-300 leading-relaxed">
                      Erecting turbines with calibrated torque and precise verticality ensures minimal wear and maximal operational longevity.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-[#27864A]/30 text-[#A7D96C] flex items-center justify-center font-bold flex-shrink-0 text-xs">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">Grid Decarbonization</h4>
                    <p className="mt-0.5 text-slate-300 leading-relaxed">
                      Expanding utility wind farm capacity accelerates regional transition away from fossil-fueled thermal power generation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-[#27864A]/30 text-[#A7D96C] flex items-center justify-center font-bold flex-shrink-0 text-xs">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">Community Harmony</h4>
                    <p className="mt-0.5 text-slate-300 leading-relaxed">
                      Respectful coordination of heavy transport routes and local access road maintenance during project installation.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-black/40 border border-emerald-900/60 text-[11px] text-slate-400">
                *Adishyam Renewable focuses strictly on factual, verifiable engineering execution standards without speculative offset claims.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
