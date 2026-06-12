"use client";

import { Footer } from "@/components/footer";
import { BackButton } from "@/components/back-button";
import { UpNextSection } from "@/components/up-next-section";
import { HeroSection } from "./HeroSection";
import { OverviewSection } from "./OverviewSection";
import { RoleSection } from "./RoleSection";
import { TreatmentLibrarySection } from "./TreatmentLibrarySection";
import { TheProjectsSection } from "./TheProjectsSection";
import { HowIOperatedSection } from "./HowIOperatedSection";
import { ImpactResultsSection } from "./ImpactResultsSection";
import { ReflectionSection } from "./ReflectionSection";

export default function GlowbarCase() {
  return (
    <div className="min-h-screen bg-cream noise-overlay">
      <BackButton />
      <HeroSection />
      <OverviewSection />
      <RoleSection />
      <TreatmentLibrarySection />
      <TheProjectsSection />
      <HowIOperatedSection />
      <ImpactResultsSection />
      <ReflectionSection />
      <UpNextSection currentProjectId="glowbar" />
      <Footer />
    </div>
  );
}
