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

export default function WhiteCoatLabCase() {
  return (
    <div className="min-h-screen bg-cream noise-overlay">
      <BackButton />
      <HeroSection />
      <OverviewSection />
      <RoleSection />
      <KeyChallengesSection />
      <DiscoveryResearchSection />
      
      {/* iPhone Image Section */}
      <section className="pt-4 md:pt-6 lg:pt-8 pb-4 md:pb-6 lg:pb-8 bg-cream">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center"
          >
            <Image
              src="https://imagedelivery.net/ly47schtw9lMeXBIbG9ODw/88b6088d-e107-4b47-3bbd-a0022b41d400/public"
              alt="WhiteCoatLab iPhone Mockup"
              width={1040}
              height={780}
              className="rounded-lg shadow-lg w-full h-auto"
              priority
            />
          </motion.div>
        </Container>
      </section>
      
      <SolutionExecutionSection />
      <ImpactResultsSection />
      
      {/* Who We Are Image Section */}
      <section className="pt-4 md:pt-6 lg:pt-8 pb-4 md:pb-6 lg:pb-8 bg-cream">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center"
          >
            <Image
              src="https://imagedelivery.net/ly47schtw9lMeXBIbG9ODw/13ea933c-0676-428e-b660-5ffa3a9df600/public"
              alt="Who We Are"
              width={1040}
              height={780}
              className="rounded-lg shadow-lg w-full h-auto"
              priority
            />
          </motion.div>
        </Container>
      </section>
      
      <ReflectionSection />
      <UpNextSection currentProjectId="whitecoatlab" />
      <Footer />
    </div>
  );
}