import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Privacy Policy | Adishyam Renewable",
  description: "Privacy and technical project data confidentiality standards for Adishyam Renewable Private Limited.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-24 lg:pt-32 pb-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#123D2A] mb-4">
          Privacy Policy &amp; Data Confidentiality
        </h1>
        <p className="text-xs text-slate-500 mb-8">
          Last updated: October 2026 &bull; {siteConfig.legalName}
        </p>

        <div className="prose prose-slate max-w-none text-sm text-slate-700 space-y-6 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-[#123D2A] mb-2">
              1. Technical Scope Confidentiality
            </h2>
            <p>
              At {siteConfig.legalName}, we recognize that wind farm coordinates,
              substation layouts, OEM equipment models, and project schedules
              constitute proprietary commercial information. All project data
              submitted through our website or direct channels is treated as
              strictly confidential.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#123D2A] mb-2">
              2. Information We Collect
            </h2>
            <p>
              We collect information that you voluntarily furnish when inquiring
              about our wind energy infrastructure services, including your name,
              corporate affiliation, business email address, phone number,
              project geographical region, and service requirements.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#123D2A] mb-2">
              3. Purpose of Processing
            </h2>
            <p>
              Submitted information is used exclusively to evaluate site
              feasibility, formulate technical responses, coordinate crane and
              rigging resource planning, and facilitate direct commercial
              dialogue. We do not sell, rent, or distribute client contact
              information to third-party marketers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#123D2A] mb-2">
              4. Non-Disclosure Agreements (NDA)
            </h2>
            <p>
              For projects requiring transmission of detailed CAD lift drawings,
              geotechnical soil reports, or OEM proprietary manuals, we execute
              formal bilateral Non-Disclosure Agreements prior to receipt of
              sensitive documentation.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#123D2A] mb-2">
              5. Contacting the Compliance Officer
            </h2>
            <p>
              For questions regarding our privacy practices or to request
              deletion of submitted inquiries, please contact us at:{" "}
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="text-[#27864A] font-semibold underline"
              >
                {siteConfig.contact.email}
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
