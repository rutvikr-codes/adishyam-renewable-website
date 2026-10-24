import React from "react";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  ShieldCheck,
  CheckCircle2,
  FileText,
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export const ContactInfoCard: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Primary Office & Contact Card */}
      <div className="bg-[#123D2A] text-white rounded-2xl p-8 shadow-xl border border-[#27864A]/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#27864A]/20 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#27864A]/40 border border-[#A7D96C]/30 text-xs font-semibold text-[#A7D96C] uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>Direct Business Communications</span>
          </div>

          <h3 className="text-2xl font-bold text-white tracking-tight">
            Corporate &amp; Field Coordination
          </h3>

          <p className="text-sm text-slate-300 leading-relaxed">
            Reach out directly to Adishyam Renewable Private Limited to
            schedule site evaluations, crane logistics feasibility studies, or
            tender coordination meetings.
          </p>

          <div className="space-y-5 pt-2 text-sm">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#A7D96C] flex-shrink-0 mt-0.5" />
              <div>
                <strong className="block text-white text-base">
                  Registered Commercial Office
                </strong>
                <p className="text-slate-300 mt-0.5">
                  {siteConfig.contact.address.line1}
                  <br />
                  {siteConfig.contact.address.line2}
                  <br />
                  {siteConfig.contact.address.city},{" "}
                  {siteConfig.contact.address.state}, India -{" "}
                  {siteConfig.contact.address.postalCode}
                </p>
                <p className="text-xs text-[#A7D96C]/90 mt-1">
                  *Official Registered Office
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-[#A7D96C] flex-shrink-0 mt-0.5" />
              <div>
                <strong className="block text-white text-base">
                  Electronic Mail
                </strong>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-slate-200 hover:text-[#A7D96C] transition-colors mt-0.5 inline-block"
                >
                  {siteConfig.contact.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-[#A7D96C] flex-shrink-0 mt-0.5" />
              <div>
                <strong className="block text-white text-base">
                  Direct Telephone
                </strong>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="text-slate-200 hover:text-[#A7D96C] font-semibold transition-colors mt-0.5 inline-block"
                >
                  {siteConfig.contact.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-[#A7D96C] flex-shrink-0 mt-0.5" />
              <div>
                <strong className="block text-white text-base">
                  Operating Hours
                </strong>
                <p className="text-slate-300 mt-0.5">
                  {siteConfig.contact.workingHours}
                </p>
                <p className="text-xs text-slate-400 mt-0.5">
                  {siteConfig.contact.responseTime}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Inquiry Protocol Card */}
      <div className="bg-[#F7F8F3] rounded-2xl p-6 border border-slate-200 space-y-3">
        <div className="flex items-center gap-2 text-[#123D2A] font-bold text-sm">
          <FileText className="w-4 h-4 text-[#27864A]" />
          <span>Documentation for Technical Tenders</span>
        </div>
        <p className="text-xs text-slate-600 leading-relaxed">
          For formal RFP and tender bid submissions, please include the OEM turbine
          specifications, foundation bolt cage layout, target COD milestone, and
          site terrain coordinates.
        </p>
        <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-[#27864A]">
          <CheckCircle2 className="w-4 h-4" />
          <span>Non-Disclosure Agreements (NDA) available upon request</span>
        </div>
      </div>
    </div>
  );
};
