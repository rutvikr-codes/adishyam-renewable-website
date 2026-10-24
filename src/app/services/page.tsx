import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Layers,
  Settings,
  HardHat,
  Calendar,
  Zap,
  Compass,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";
import { servicesData, ServiceItem } from "@/data/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactCTASection } from "@/components/layout/ContactCTASection";

export const metadata: Metadata = {
  title: "Services | Wind Turbine Erection & Installation Solutions",
  description:
    "Explore our complete scope of wind turbine erection, mechanical installation, on-site project management, planning, and engineering support services.",
};

const iconMap = {
  Crane: Layers,
  Settings: Settings,
  HardHat: HardHat,
  Calendar: Calendar,
  Zap: Zap,
  Compass: Compass,
};

export default function ServicesPage() {
  return (
    <div className="pt-24 lg:pt-28">
      {/* Header Banner */}
      <section className="bg-[#123D2A] text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-wind-farm.jpg"
            alt="Wind energy project services overview"
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
              <Layers className="w-4 h-4 text-[#A7D96C]" />
              <span>Technical Capabilities</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white">
              Specialized Services for Wind Energy Infrastructure.
            </h1>

            <p className="mt-5 text-base sm:text-lg text-slate-200 leading-relaxed">
              We provide structured execution solutions spanning heavy crane
              rigging, mechanical and electrical setup, field supervision, and
              comprehensive installation planning.
            </p>

            <div className="mt-6 flex flex-wrap gap-2 text-xs">
              {servicesData.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.slug}`}
                  className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-slate-200 border border-white/10 transition-colors"
                >
                  {s.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Scope Disclaimer Notice */}
      <div className="bg-[#F7F8F3] border-b border-slate-200 py-3 px-4">
        <div className="max-w-7xl mx-auto text-xs text-slate-600 flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#27864A] flex-shrink-0" />
          <span>
            These service scopes represent proposed operational categories. Specific work boundaries and equipment specifications are finalized collaboratively per client contract.
          </span>
        </div>
      </div>

      {/* Detailed Service Sections */}
      <div className="divide-y divide-slate-200 bg-white">
        {servicesData.map((service: ServiceItem, idx: number) => {
          const IconComponent = iconMap[service.iconName] || Layers;
          const isEven = idx % 2 === 0;

          return (
            <section
              key={service.id}
              id={service.slug}
              className="py-20 scroll-mt-24"
              aria-labelledby={`heading-${service.id}`}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start ${
                    isEven ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Text Content (Col span 7) */}
                  <div className={`lg:col-span-7 ${isEven ? "" : "lg:order-2"}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-[#27864A]/10 text-[#27864A] flex items-center justify-center font-bold">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-[#27864A] block">
                          Service Offering 0{idx + 1}
                        </span>
                        <span className="text-xs font-semibold text-slate-500">
                          {service.tag}
                        </span>
                      </div>
                    </div>

                    <h2
                      id={`heading-${service.id}`}
                      className="text-3xl sm:text-4xl font-extrabold text-[#123D2A] tracking-tight mb-4"
                    >
                      {service.title}
                    </h2>

                    <p className="text-base text-slate-700 leading-relaxed mb-6 font-medium">
                      {service.fullDescription}
                    </p>

                    {/* Scope of Work Breakdown */}
                    <div className="mb-6">
                      <h3 className="text-sm font-bold uppercase tracking-wider text-[#123D2A] mb-3">
                        Scope of Work &amp; Deliverables
                      </h3>
                      <ul className="space-y-2.5">
                        {service.scopeOfWork.map((scope, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2.5 text-sm text-slate-700"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#27864A] flex-shrink-0 mt-1" />
                            <span>{scope}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Execution Approach */}
                    <div className="mb-6 bg-[#F7F8F3] p-5 rounded-xl border border-slate-200">
                      <h3 className="text-sm font-bold uppercase tracking-wider text-[#123D2A] mb-3">
                        Execution Approach &amp; Quality Control
                      </h3>
                      <ul className="space-y-2">
                        {service.executionApproach.map((approach, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-xs sm:text-sm text-slate-600"
                          >
                            <ChevronRight className="w-3.5 h-3.5 text-[#27864A] flex-shrink-0 mt-1" />
                            <span>{approach}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Key Technical Considerations */}
                    <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/80 mb-6">
                      <div className="flex items-center gap-2 text-xs font-bold text-amber-900 mb-2">
                        <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                        <span>Key Site &amp; Safety Considerations</span>
                      </div>
                      <ul className="space-y-1 text-xs text-amber-900">
                        {service.keyConsiderations.map((c, i) => (
                          <li key={i}>• {c}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Service CTA */}
                    <div className="pt-2">
                      <Link
                        href={`/contact?service=${encodeURIComponent(
                          service.title
                        )}`}
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#123D2A] hover:bg-[#27864A] text-white text-xs sm:text-sm font-bold shadow-md transition-all hover:scale-[1.02]"
                      >
                        <span>Inquire About {service.title}</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>

                  {/* Visual Side (Col span 5) */}
                  <div className={`lg:col-span-5 ${isEven ? "" : "lg:order-1"}`}>
                    <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-[#F7F8F3] aspect-[4/3] bg-slate-100">
                      <Image
                        src={service.image}
                        alt={`${service.title} execution by Adishyam Renewable`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 40vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <span className="text-xs font-bold text-white bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-md inline-block">
                          Field Infrastructure &bull; {service.tag}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* Bottom CTA Section */}
      <ContactCTASection
        title="Need Technical Scoping or a Lift Feasibility Review?"
        subtitle="Our engineering coordinators can review your site access drawings, foundation designs, and turbine specifications."
      />
    </div>
  );
}
