"use client";

import { Footer } from "@/components/footer";
import { BackButton } from "@/components/back-button";
import { Container } from "@/components/container";
import { motion } from "framer-motion";
import Image from "next/image";
import { HeroSection } from "./HeroSection";
import { OverviewSection } from "./OverviewSection";
import { RoleSection } from "./RoleSection";
import { KeyChallengesSection } from "./KeyChallengesSection";
import { DiscoveryResearchSection } from "./DiscoveryResearchSection";
import { SolutionExecutionSection } from "./SolutionExecutionSection";
import { ImpactResultsSection } from "./ImpactResultsSection";
import { ReflectionSection } from "./ReflectionSection";
import { UpNextSection } from "@/components/up-next-section";

export default function CatchUpTeddyCase() {
  return (
    <div className="min-h-screen bg-cream noise-overlay">
      <BackButton />
      <HeroSection />
      <OverviewSection />
      <RoleSection />
      <KeyChallengesSection />
      <DiscoveryResearchSection />

      {/* Mid-page Visual Break */}
      {/* <section className="pt-4 md:pt-6 lg:pt-8 pb-4 md:pb-6 lg:pb-8 bg-cream">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center"
          >
            <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl shadow-lg flex items-center justify-center w-full max-w-4xl">
              <div className="text-center">
                <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <p className="text-lg text-gray-500 font-light">
                  Content System Visual
                </p>
                <p className="text-sm text-gray-400 font-light">
                  Format Framework
                </p>
              </div>
            </div>
          </motion.div>
        </Container>
      </section> */}

      <SolutionExecutionSection />
      <ImpactResultsSection />
      <ReflectionSection />
      <UpNextSection currentProjectId="catch-up-with-teddy" />
      <Footer />
    </div>
  );
}
