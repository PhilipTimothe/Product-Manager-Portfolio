"use client";

import { Footer } from "@/components/footer";
import { BackButton } from "@/components/back-button";
import { HeroSection } from "./HeroSection";
import { OverviewSection } from "./OverviewSection";
import { RoleSection } from "./RoleSection";
import { KeyChallengesSection } from "./KeyChallengesSection";
import { TreatmentImages } from "./TreatmentImages";
import { DiscoveryResearchSection } from "./DiscoveryResearchSection";
import { SolutionVisionSection } from "./SolutionVisionSection";
import { ExecutionManagementSection } from "./ExecutionManagementSection";
import { ImpactResultsSection } from "./ImpactResultsSection";
import { ClosingSection } from "./ClosingSection";
import { VideoPreviewSection } from "./VideoPreviewSection";
import { UpNextSection } from "@/components/up-next-section";

export default function MicroDocumentaryCase() {
  return (
    <div className="min-h-screen bg-cream noise-overlay">
      <BackButton />
      <HeroSection />
      <OverviewSection />
      <RoleSection />
      <KeyChallengesSection />
      <TreatmentImages />
      <DiscoveryResearchSection />
      <SolutionVisionSection />
      <ExecutionManagementSection />
      <ImpactResultsSection />
      <VideoPreviewSection />
      <ClosingSection />
      <UpNextSection currentProjectId="micro-documentary" />
      <Footer />
    </div>
  );
}