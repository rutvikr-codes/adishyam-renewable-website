import React from "react";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowUpRight,
  ShieldAlert,
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { servicesData } from "@/data/services";
import { BrandLogo } from "@/components/ui/BrandLogo";

export const Footer: React.FC = () => {
  const currentYear = 2026;

  return (
    <footer
      className="bg-[#123D2A] text-white pt-16 pb-8 border-t border-[#27864A]/30 relative overflow-hidden"
      aria-labelledby="footer-heading"
    >
      {/* Decorative background grid and glow */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-10 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#27864A]/10 rounded-full blur-3xl pointer-events-none" />

      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-emerald-900/80">
          {/* Column 1: Company Profile (Col span 4) */}
          <div className="lg:col-span-4 space-y-4">
            <BrandLogo variant="light" size="md" />
            <p className="text-slate-300 text-sm leading-relaxed max-w-sm mt-3">
              {siteConfig.description}
            </p>

            <div className="pt-2">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-emerald-950/60 border border-emerald-800/50 text-xs text-[#A7D96C]">
                <ShieldAlert className="w-3.5 h-3.5" />
                <span>Dedicated Wind Energy Infrastructure Partner</span>
              </span>
            </div>
          </div>

          {/* Column 2: Navigation (Col span 2) */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#A7D96C] mb-4">
              Explore
            </h3>
            <ul className="space-y-2.5 text-sm">
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-white hover:translate-x-1 inline-flex items-center gap-1 transition-all"
                  >
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Proposed Services (Col span 3) */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#A7D96C] mb-4">
              Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              {servicesData.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services#${service.slug}`}
                    className="text-slate-300 hover:text-white hover:underline transition-colors block text-xs sm:text-sm line-clamp-1"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Office (Col span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#A7D96C] mb-4">
              Direct Inquiries
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#A7D96C] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Registered Office</p>
                  <p className="text-xs text-slate-300">
                    {siteConfig.contact.address.line1}
                    <br />
                    {siteConfig.contact.address.line2}
                    <br />
                    {siteConfig.contact.address.city},{" "}
                    {siteConfig.contact.address.state}, India -{" "}
                    {siteConfig.contact.address.postalCode}
                  </p>
                </div>
              </li>

              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#A7D96C] flex-shrink-0" />
                <div>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-white hover:text-[#A7D96C] transition-colors"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              </li>

              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#A7D96C] flex-shrink-0" />
                <div>
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="text-white hover:text-[#A7D96C] font-semibold transition-colors"
                  >
                    {siteConfig.contact.phoneDisplay}
                  </a>
                </div>
              </li>

              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#A7D96C] flex-shrink-0" />
                <span className="text-xs text-slate-400">
                  {siteConfig.contact.workingHours}
                </span>
              </li>
            </ul>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#A7D96C] hover:text-white transition-colors"
              >
                <span>Request Project Consultation</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Legal, Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            <p>
              &copy; {currentYear} {siteConfig.legalName}. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <Link
              href="/privacy-policy"
              className="hover:text-slate-200 transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-emerald-800">|</span>
            <Link
              href="/terms"
              className="hover:text-slate-200 transition-colors"
            >
              Terms of Engagement
            </Link>
            <span className="text-emerald-800">|</span>
            <span className="text-slate-400 text-[11px]">
              Wind Turbine Erection &amp; Engineering Support
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
