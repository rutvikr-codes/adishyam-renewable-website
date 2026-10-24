import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Compass,
  Shield,
  Layers,
  Wrench,
  Wind,
} from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section
      aria-label="Hero - Adishyam Renewable"
      className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-[#123D2A] text-white pt-24 pb-16"
    >
      {/* Background Image with Dark Accessible Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-wind-farm.jpg"
          alt="Modern wind farm on rolling green terrain under sweeping sky"
          fill
          priority
          className="object-cover object-center transform scale-105 transition-transform duration-10000"
          sizes="100vw"
        />
        {/* Multi-layered dark gradient to ensure WCAG 2.2 AA text contrast while preserving landscape beauty */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D2B1D]/95 via-[#123D2A]/80 to-[#123D2A]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#123D2A] via-transparent to-black/40" />
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-10 pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-3xl">
          {/* Engineering Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#A7D96C]/40 text-xs sm:text-sm font-semibold text-[#A7D96C] tracking-wide mb-6">
            <Wind className="w-4 h-4 text-[#A7D96C] animate-spin-slow" />
            <span>Wind Turbine Infrastructure &amp; Project Execution</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.08] text-white">
            Powering Progress Through{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A7D96C] via-[#34A85E] to-emerald-300">
              Wind Energy.
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="mt-6 text-lg sm:text-xl lg:text-2xl text-slate-200 leading-relaxed font-normal max-w-2xl">
            Reliable wind turbine erection, installation, and on-site project
            execution for a cleaner, more sustainable future.
          </p>

          {/* CTAs */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-[#27864A] hover:bg-[#1F6B3B] text-white font-bold text-base shadow-xl shadow-emerald-950/40 transition-all hover:scale-[1.02] focus:ring-2 focus:ring-[#A7D96C]"
            >
              <span>Discuss Your Project</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white/15 hover:bg-white/25 text-white font-semibold text-base backdrop-blur-md border border-white/25 transition-all hover:scale-[1.02] focus:ring-2 focus:ring-white"
            >
              <Compass className="w-4 h-4 text-[#A7D96C]" />
              <span>Explore Our Services</span>
            </Link>
          </div>

          {/* Core Execution Pillars Strip */}
          <div className="mt-12 pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 text-left">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-[#A7D96C]">
                <Layers className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider">
                  Erection
                </span>
              </div>
              <p className="text-xs text-slate-300">
                Heavy-crane rigging &amp; tower assembly
              </p>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2 text-[#A7D96C]">
                <Wrench className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider">
                  Installation
                </span>
              </div>
              <p className="text-xs text-slate-300">
                Mechanical &amp; electrical setup
              </p>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2 text-[#A7D96C]">
                <Shield className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider">
                  Safety
                </span>
              </div>
              <p className="text-xs text-slate-300">
                Zero-harm lifting protocols
              </p>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2 text-[#A7D96C]">
                <Wind className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider">
                  On-Site
                </span>
              </div>
              <p className="text-xs text-slate-300">
                Field supervision &amp; coordination
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
