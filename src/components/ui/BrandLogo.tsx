import Link from "next/link";
import React from "react";

interface BrandLogoProps {
  variant?: "light" | "dark" | "monochrome";
  size?: "sm" | "md" | "lg";
  showSubtitle?: boolean;
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = "dark",
  size = "md",
  showSubtitle = true,
  className = "",
}) => {
  const isLightText = variant === "light";

  const sizeDimensions = {
    sm: { icon: 32, title: "text-lg", sub: "text-[10px]" },
    md: { icon: 42, title: "text-xl", sub: "text-[11px]" },
    lg: { icon: 54, title: "text-2xl", sub: "text-xs" },
  }[size];

  return (
    <Link
      href="/"
      aria-label="Adishyam Renewable Private Limited - Homepage"
      className={`inline-flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 rounded-lg p-1 transition-transform ${className}`}
    >
      {/* Dynamic Turbine Wind Energy Vector Icon */}
      <div className="relative flex-shrink-0">
        <svg
          width={sizeDimensions.icon}
          height={sizeDimensions.icon}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform duration-700 ease-out group-hover:rotate-45"
          aria-hidden="true"
        >
          {/* Subtle outer orbit ring */}
          <circle
            cx="50"
            cy="50"
            r="46"
            stroke={isLightText ? "rgba(167, 217, 108, 0.3)" : "rgba(39, 134, 74, 0.25)"}
            strokeWidth="2"
            strokeDasharray="4 4"
          />

          {/* Blade 1 (Pointing North) */}
          <path
            d="M50 50 C 47 38, 44 24, 48 10 C 53 10, 56 22, 53 38 Z"
            fill={isLightText ? "#A7D96C" : "#27864A"}
            className="transition-opacity hover:opacity-90"
          />

          {/* Blade 2 (Pointing South-East) */}
          <path
            d="M50 50 C 60 55, 72 63, 85 57 C 82 53, 72 44, 57 47 Z"
            fill={isLightText ? "#34A85E" : "#123D2A"}
            className="transition-opacity hover:opacity-90"
          />

          {/* Blade 3 (Pointing South-West) */}
          <path
            d="M50 50 C 42 61, 33 73, 18 70 C 20 65, 30 55, 42 52 Z"
            fill={isLightText ? "#FFFFFF" : "#A7D96C"}
            className="transition-opacity hover:opacity-90"
          />

          {/* Center Hub Core */}
          <circle
            cx="50"
            cy="50"
            r="8"
            fill={isLightText ? "#FFFFFF" : "#123D2A"}
          />
          <circle
            cx="50"
            cy="50"
            r="4"
            fill={isLightText ? "#A7D96C" : "#27864A"}
          />
        </svg>
      </div>

      {/* Typography */}
      <div className="flex flex-col leading-none">
        <div className="flex items-center gap-1.5">
          <span
            className={`font-black tracking-wider uppercase font-sans ${sizeDimensions.title} ${
              isLightText ? "text-white" : "text-[#123D2A]"
            }`}
          >
            Adishyam
          </span>
        </div>
        {showSubtitle && (
          <div className="flex items-center gap-1.5 mt-0.5">
            <span
              className={`font-semibold tracking-[0.22em] uppercase ${sizeDimensions.sub} ${
                isLightText ? "text-[#A7D96C]" : "text-[#27864A]"
              }`}
            >
              Renewable
            </span>
            <span
              className={`text-[9px] font-medium tracking-normal opacity-70 ${
                isLightText ? "text-slate-300" : "text-slate-500"
              }`}
            >
              Pvt. Ltd.
            </span>
          </div>
        )}
      </div>
    </Link>
  );
};
