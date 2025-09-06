"use client";

import { Footer } from "@/components/footer";
import { BackButton } from "@/components/back-button";
import { HeroSection } from "./HeroSection";
import { OverviewSection } from "./OverviewSection";
import { RoleSection } from "./RoleSection";
import { ChallengesSection } from "./ChallengesSection";
import { DataPreparationSection } from "./DataPreparationSection";
import { ModelingSection } from "./ModelingSection";
import { ResultsSection } from "./ResultsSection";
import { InsightsSection } from "./InsightsSection";
import { BusinessRecommendationsSection } from "./BusinessRecommendationsSection";
import { ClosingSection } from "./ClosingSection";
import { UpNextSection } from "@/components/up-next-section";

export default function LoanDefaultRiskCase() {
  return (
    <div className="min-h-screen bg-cream noise-overlay">
      <BackButton />
      <HeroSection />
      <OverviewSection />
      <RoleSection />
      <ChallengesSection />
      <DataPreparationSection />
      <ModelingSection />
      <ResultsSection />
      <InsightsSection />
      <BusinessRecommendationsSection />
      <ClosingSection />
      <UpNextSection currentProjectId="loan-default-risk-analysis" />
      <Footer />
    </div>
  );
}