"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/container";
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

export default function SalaryPredictionCase() {
  return (
    <div className="min-h-screen bg-cream noise-overlay">
      <BackButton />
      <HeroSection />
      <OverviewSection />
      
      {/* Hero Image */}
      <section className="pt-2 md:pt-4 lg:pt-6 pb-4 md:pb-6 lg:pb-8 bg-cream">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center"
          >
            <Image
              src="/Salary_MainPage.png"
              alt="Salary Prediction Analysis Dashboard"
              width={1040}
              height={780}
              className="rounded-lg shadow-lg w-full h-auto"
              priority
            />
          </motion.div>
        </Container>
      </section>
      
      <RoleSection />
      <ChallengesSection />
      <DataPreparationSection />
      
      {/* Prediction Page Image */}
      <section className="pt-2 md:pt-4 lg:pt-6 pb-4 md:pb-6 lg:pb-8 bg-cream">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center"
          >
            <Image
              src="/Prediction_Page.png"
              alt="Salary Prediction Page Interface"
              width={1040}
              height={780}
              className="rounded-lg shadow-lg w-full h-auto"
              priority
            />
          </motion.div>
        </Container>
      </section>
      
      <ModelingSection />
      <ResultsSection />
      <InsightsSection />
      <BusinessRecommendationsSection />
      <ClosingSection />
      <UpNextSection currentProjectId="salary-prediction-analysis" />
      <Footer />
    </div>
  );
}