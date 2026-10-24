import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/siteConfig";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { DemoDataBanner } from "@/components/ui/DemoDataBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#123D2A",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.legalName} | Wind Turbine Erection & Infrastructure`,
    template: `%s | ${siteConfig.legalName}`,
  },
  description: siteConfig.description,
  keywords: [
    "wind turbine erection",
    "wind turbine installation",
    "wind energy solutions",
    "wind farm installation support",
    "renewable energy infrastructure",
    "heavy lift crane wind turbine",
    "windmill setup",
    "Adishyam Renewable",
    "Adishyam Renewable Private Limited",
  ],
  authors: [{ name: siteConfig.legalName }],
  creator: siteConfig.legalName,
  publisher: siteConfig.legalName,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: `${siteConfig.legalName} | Wind Turbine Erection & Infrastructure`,
    description: siteConfig.description,
    siteName: siteConfig.legalName,
    images: [
      {
        url: "/images/hero-wind-farm.jpg",
        width: 1200,
        height: 630,
        alt: "Adishyam Renewable - Modern Wind Turbine Farm Infrastructure",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.legalName} | Wind Turbine Erection`,
    description: siteConfig.description,
    images: ["/images/hero-wind-farm.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    name: siteConfig.legalName,
    alternateName: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/hero-wind-farm.jpg`,
    description: siteConfig.description,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.contact.phone,
      contactType: "customer service",
      email: siteConfig.contact.email,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: `${siteConfig.contact.address.line1}, ${siteConfig.contact.address.line2}`,
      addressCountry: "IN",
    },
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#F7F8F3] text-[#17231D] selection:bg-[#27864A] selection:text-white">
        {/* WCAG Skip to Main Content Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#27864A] focus:text-white focus:rounded-md focus:shadow-lg focus:outline-none"
        >
          Skip to main content
        </a>

        {/* Development & Verification Notice Banner */}
        <DemoDataBanner />

        {/* Global Navigation Bar */}
        <Navbar />

        {/* Main Content Area */}
        <main id="main-content" className="flex-1 focus:outline-none">
          {children}
        </main>

        {/* Global Corporate Footer */}
        <Footer />
      </body>
    </html>
  );
}
