import React from "react";
import Link from "next/link";
import {
  Layers,
  Settings,
  HardHat,
  Calendar,
  Zap,
  Compass,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { servicesData, ServiceItem } from "@/data/services";
import { SectionHeading } from "@/components/ui/SectionHeading";

const iconMap = {
  Crane: Layers,
  Settings: Settings,
  HardHat: HardHat,
  Calendar: Calendar,
  Zap: Zap,
  Compass: Compass,
};

export const ServicesOverview: React.FC = () => {
  return (
    <section
      id="services"
      className="py-20 lg:py-28 bg-white relative"
      aria-label="Proposed Services Overview"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Core Execution Capabilities"
          title="Engineered Services for Wind Energy Infrastructure"
          subtitle="Proposed core service offerings covering heavy-lift turbine erection, internal mechanical assembly, and field engineering coordination."
        />

        {/* Informative notice badge regarding proposed scope */}
        <div className="mt-4 mb-12 max-w-2xl mx-auto text-center">
          <p className="text-xs text-slate-500 bg-[#F7F8F3] py-1.5 px-4 rounded-full inline-block border border-slate-200">
            Note: Service categories reflect proposed scope capabilities; detailed project contracts are customized per OEM &amp; developer requirements.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service: ServiceItem) => {
            const IconComponent = iconMap[service.iconName] || Layers;

            return (
              <div
                key={service.id}
                className="group relative bg-[#F7F8F3] rounded-2xl p-7 border border-slate-200/80 hover:border-[#27864A]/40 hover:shadow-xl hover:shadow-emerald-950/5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Icon & Tag */}
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white text-[#27864A] shadow-sm flex items-center justify-center group-hover:bg-[#27864A] group-hover:text-white transition-colors duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-white text-slate-600 border border-slate-200">
                      {service.tag}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="text-xl font-bold text-[#123D2A] group-hover:text-[#27864A] transition-colors mb-3">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>
                </div>

                {/* Scope Preview Highlights */}
                <div className="pt-4 border-t border-slate-200/60 mt-auto">
                  <Link
                    href={`/services#${service.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#27864A] group-hover:text-[#123D2A] transition-colors"
                  >
                    <span>View Scope &amp; Methodology</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA to full services page */}
        <div className="mt-14 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#27864A] hover:bg-[#1F6B3B] text-white font-bold text-sm shadow-md transition-all hover:scale-[1.02]"
          >
            <span>Explore Complete Technical Scope of Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
