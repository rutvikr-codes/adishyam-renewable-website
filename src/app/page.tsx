import React from "react";
import { Hero } from "@/components/home/Hero";
import { CompanyIntro } from "@/components/home/CompanyIntro";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { ProcessSteps } from "@/components/home/ProcessSteps";
import { ProjectShowcase } from "@/components/home/ProjectShowcase";
import { SustainabilitySection } from "@/components/home/SustainabilitySection";
import { ContactCTASection } from "@/components/layout/ContactCTASection";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Company Introduction */}
      <CompanyIntro />

      {/* Services Overview */}
      <ServicesOverview />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Project Execution Process */}
      <ProcessSteps />

      {/* Project Showcase Gallery */}
      <ProjectShowcase />

      {/* Sustainability Section */}
      <SustainabilitySection />

      {/* Global Call to Action */}
      <ContactCTASection />
    </>
  );
}
