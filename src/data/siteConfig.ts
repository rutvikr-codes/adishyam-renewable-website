export interface SiteConfig {
  name: string;
  legalName: string;
  shortName: string;
  tagline: string;
  description: string;
  url: string;
  contact: {
    email: string;
    phone: string;
    phoneDisplay: string;
    address: {
      line1: string;
      line2: string;
      city: string;
      state: string;
      country: string;
      postalCode: string;
      note: string; // Explains this is configurable
    };
    workingHours: string;
    responseTime: string;
  };
  socialLinks: {
    linkedin?: string;
    twitter?: string;
  };
  navLinks: Array<{
    name: string;
    href: string;
  }>;
  notice: {
    isDemoData: boolean;
    disclaimer: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "Adishyam Renewable",
  legalName: "Adishyam Renewable Private Limited",
  shortName: "Adishyam",
  tagline: "Powering Progress Through Wind Energy",
  description:
    "Reliable wind turbine erection, installation, setup, and on-site engineering project execution for sustainable wind power infrastructure.",
  url: "https://adishyamrenewable.com",
  contact: {
    email: "contact@adishyamrenewable.com",
    phone: "+919510498650",
    phoneDisplay: "+91 95104 98650",
    address: {
      line1: "First Floor, Shop No. F1 and F2, Narayan Complex",
      line2: "At.- Rajula, Dis. - Amreli",
      city: "Rajula",
      state: "Gujarat",
      country: "India",
      postalCode: "365560",
      note: "Registered Commercial Office",
    },
    workingHours: "Monday – Saturday: 9:00 AM – 6:30 PM IST",
    responseTime: "Inquiries reviewed and addressed within 1 business day",
  },
  socialLinks: {
    linkedin: "https://linkedin.com/company/adishyam-renewable",
  },
  navLinks: [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Our Process", href: "/process" },
    { name: "Contact", href: "/contact" },
  ],
  notice: {
    isDemoData: true,
    disclaimer:
      "All project records, gallery photos, and operational metrics displayed herein are illustrative sample structures. Exact project accomplishments and client references will be verified and supplied by Adishyam Renewable Private Limited prior to public release.",
  },
};
