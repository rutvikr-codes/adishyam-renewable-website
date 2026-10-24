import React from "react";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  align = "center",
  theme = "light",
  className = "",
}) => {
  const isDark = theme === "dark";
  const isCenter = align === "center";

  return (
    <div
      className={`max-w-3xl ${
        isCenter ? "mx-auto text-center" : "text-left"
      } ${className}`}
    >
      {badge && (
        <div
          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-3 ${
            isDark
              ? "bg-[#27864A]/30 text-[#A7D96C] border border-[#A7D96C]/30"
              : "bg-[#27864A]/10 text-[#27864A] border border-[#27864A]/20"
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#27864A] animate-pulse" />
          {badge}
        </div>
      )}

      <h2
        className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight ${
          isDark ? "text-white" : "text-[#123D2A]"
        }`}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            isDark ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {subtitle}
        </p>
      )}

      <div
        className={`mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-[#27864A] to-[#A7D96C] ${
          isCenter ? "mx-auto" : ""
        }`}
      />
    </div>
  );
};
