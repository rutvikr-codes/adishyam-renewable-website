"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, PhoneCall } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { BrandLogo } from "@/components/ui/BrandLogo";

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const isHome = pathname === "/";
  // If we are on homepage and not scrolled, we show sleek translucent dark style over the hero image
  const useTransparentStyle = isHome && !isScrolled && !mobileMenuOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        useTransparentStyle
          ? "bg-gradient-to-b from-black/70 via-black/30 to-transparent py-4 text-white"
          : "bg-white/95 backdrop-blur-md shadow-sm border-b border-emerald-950/10 py-3 text-[#123D2A]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <BrandLogo
            variant={useTransparentStyle ? "light" : "dark"}
            size="md"
          />

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-1 xl:gap-2"
          >
            {siteConfig.navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded-md text-sm font-semibold transition-all relative ${
                    isActive
                      ? useTransparentStyle
                        ? "text-[#A7D96C] font-bold"
                        : "text-[#27864A] font-bold"
                      : useTransparentStyle
                      ? "text-slate-100 hover:text-[#A7D96C] hover:bg-white/10"
                      : "text-slate-700 hover:text-[#123D2A] hover:bg-[#F7F8F3]"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span
                      className={`absolute bottom-0 left-3 right-3 h-0.5 rounded-full ${
                        useTransparentStyle ? "bg-[#A7D96C]" : "bg-[#27864A]"
                      }`}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/contact"
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-bold shadow-md transition-all duration-200 group ${
                useTransparentStyle
                  ? "bg-[#27864A] hover:bg-[#1F6B3B] text-white shadow-emerald-950/20 hover:scale-[1.02]"
                  : "bg-[#123D2A] hover:bg-[#27864A] text-white shadow-emerald-950/10 hover:scale-[1.02]"
              }`}
            >
              <span>Discuss Your Project</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            className={`lg:hidden p-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#27864A] ${
              useTransparentStyle
                ? "text-white hover:bg-white/15"
                : "text-[#123D2A] hover:bg-emerald-50"
            }`}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Accessible Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="lg:hidden fixed inset-x-0 top-[65px] bottom-0 bg-[#123D2A] text-white flex flex-col justify-between p-6 overflow-y-auto animate-in slide-in-from-top-4 duration-200"
        >
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#A7D96C]/80 px-3">
              Navigation Menu
            </p>
            <nav className="flex flex-col space-y-1">
              {siteConfig.navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 rounded-lg text-base font-semibold transition-colors ${
                      isActive
                        ? "bg-[#27864A] text-white"
                        : "text-slate-200 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="w-4 h-4 opacity-70" />
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="pt-6 border-t border-emerald-800/60 space-y-4">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-lg bg-[#27864A] hover:bg-[#1F6B3B] text-white font-bold text-base shadow-lg transition-colors"
            >
              <span>Discuss Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <div className="p-4 rounded-lg bg-black/20 border border-emerald-900/60 text-xs text-slate-300 space-y-2">
              <div className="flex items-center gap-2 text-[#A7D96C] font-semibold">
                <PhoneCall className="w-4 h-4" />
                <span>Contact Direct</span>
              </div>
              <p>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="hover:text-white font-semibold transition-colors"
                >
                  {siteConfig.contact.phoneDisplay}
                </a>
              </p>
              <p className="text-slate-400">{siteConfig.contact.email}</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
