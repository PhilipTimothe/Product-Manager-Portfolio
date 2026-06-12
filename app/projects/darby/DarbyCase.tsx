"use client";

import { Footer } from "@/components/footer";
import { BackButton } from "@/components/back-button";
import { UpNextSection } from "@/components/up-next-section";
import { HeroSection } from "./HeroSection";
import { OverviewSection } from "./OverviewSection";
import { RoleSection } from "./RoleSection";
import { PortfolioGridSection } from "./PortfolioGridSection";
import { SelectedInitiativesSection } from "./SelectedInitiativesSection";
import { HowIOperatedSection } from "./HowIOperatedSection";
import { ImpactResultsSection } from "./ImpactResultsSection";
import { ReflectionSection } from "./ReflectionSection";

export default function DarbyCase() {
  return (
    <div className="min-h-screen bg-cream noise-overlay">
      <BackButton />
      <HeroSection />
      <OverviewSection />
      <RoleSection />
      <PortfolioGridSection />
      <SelectedInitiativesSection />
      <HowIOperatedSection />
      <ImpactResultsSection />
      <ReflectionSection />
      <UpNextSection currentProjectId="darby" />
      <Footer />
    </div>
  );
}
