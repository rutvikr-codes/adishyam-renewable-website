"use client";

import React, { useState } from "react";
import { Info, X } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export const DemoDataBanner: React.FC = () => {
  const [dismissed, setDismissed] = useState(false);

  if (!siteConfig.notice.isDemoData || dismissed) {
    return null;
  }

  return (
    <aside
      aria-label="Development Sample Data Notice"
      className="bg-[#123D2A] text-white border-b border-[#27864A]/30 text-xs py-2 px-4 transition-all"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Info className="w-4 h-4 text-[#A7D96C] flex-shrink-0" aria-hidden="true" />
          <p className="text-slate-200">
            <strong className="text-[#A7D96C] font-semibold">
              Deployment & Data Verification Notice:
            </strong>{" "}
            {siteConfig.notice.disclaimer}
          </p>
        </div>
        <button
          onClick={() => setDismissed(true)}
          className="text-slate-400 hover:text-white p-1 rounded transition-colors focus:outline-none focus:ring-1 focus:ring-[#A7D96C]"
          aria-label="Dismiss demo data notice"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </aside>
  );
};
