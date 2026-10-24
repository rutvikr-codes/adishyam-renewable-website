import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Terms of Engagement | Adishyam Renewable",
  description: "Terms of website use and engagement framework for Adishyam Renewable Private Limited.",
};

export default function TermsPage() {
  return (
    <div className="pt-24 lg:pt-32 pb-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#123D2A] mb-4">
          Terms of Website Use &amp; Service Framework
        </h1>
        <p className="text-xs text-slate-500 mb-8">
          Last updated: October 2026 &bull; {siteConfig.legalName}
        </p>

        <div className="prose prose-slate max-w-none text-sm text-slate-700 space-y-6 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-[#123D2A] mb-2">
              1. Informational &amp; Representative Nature of Web Content
            </h2>
            <p>
              The content provided on this website is for general informational
              purposes regarding proposed service scopes, engineering
              methodologies, and representative installation practices of{" "}
              {siteConfig.legalName}. Specific operational commitments, equipment
              capacities, project timelines, and commercial warranties are
              governed exclusively by formal, written bilateral contracts.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#123D2A] mb-2">
              2. Illustrative Demo Notice
            </h2>
            <p>
              Certain project showcases and photography presented on this
              development version are representative illustrative samples intended
              to demonstrate engineering capabilities and layout structures.
              Verified historical project metrics and certified capacity numbers
              will be updated upon corporate sign-off.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#123D2A] mb-2">
              3. Intellectual Property
            </h2>
            <p>
              The trademarks, brand motifs, technical diagrams, and editorial
              content on this website remain the property of {siteConfig.legalName}{" "}
              or respective third-party licensors. Unauthorized commercial
              reproduction is prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#123D2A] mb-2">
              4. Governing Jurisdiction
            </h2>
            <p>
              Any inquiries, disputes, or matters relating to this website are
              governed by the applicable statutory laws of India, subject to the
              jurisdiction of competent courts in the company’s registered
              operational state.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
