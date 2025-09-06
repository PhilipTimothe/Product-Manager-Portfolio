"use client";

import { motion } from "framer-motion";
import { Section } from "../micro-documentary/common/Section";
import Image from "next/image";

export function KeyChallengesSection() {
  return (
    <Section className="pb-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-baseline justify-center gap-1 mb-4">
            <span className="text-lg md:text-xl text-black/40 font-mono leading-none">
              03.
            </span>
            <h2 className="text-lg md:text-xl font-sans font-semibold text-black leading-none">
              KEY CHALLENGES
            </h2>
          </div>

          <h4 className="text-[clamp(40px,7vw,110px)] font-sans font-medium text-black mb-8 leading-tight text-balance">
            Balancing Art with Function
          </h4>

          <p className="text-sm text-black/70 leading-relaxed font-light max-w-3xl mx-auto mb-16">
            We brought our vision to life with three design concepts, each offering a unique way to help users engage with their creative services.
          </p>
        </div>

        {/* Three Column Layout */}
        <div className="grid md:grid-cols-3 gap-4">
          {/* Trust & Credibility */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center flex flex-col"
          >
            <h3 className="text-lg font-sans font-semibold text-black mb-4">
              Trust & Credibility
            </h3>
            <p className="text-xs text-black/70 text-left leading-4 font-light mb-4">
              First-time users needed to quickly see proof of quality work and professional capability. The concept was built around speed—getting a solution to market fast. While this provided a rapid path to launch, it didn’t fully optimize the mobile experience. Our challenge was to refine usability for smaller screens while preserving credibility and visual quality.
            </p>
            
            <div className="flex justify-center flex-1 items-end">
              <div className="w-80 h-auto">
                <Image
                  src="https://imagedelivery.net/ly47schtw9lMeXBIbG9ODw/eb276e70-5309-481c-6ceb-2925ed4d5d00/public"
                  alt="Trust & Credibility Design Concept"
                  width={400}
                  height={800}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </motion.div>

          {/* Art vs Function */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center flex flex-col"
          >
            <h3 className="text-lg font-sans font-semibold text-black mb-4">
              Art vs Function
            </h3>
            <p className="text-xs text-black/70 text-left leading-4 font-light mb-4">
              Balance between artistic presentation and straightforward navigation that serves business goals. Aimed to make creative showcase a breeze. This approach allowed customers to review their portfolio each visit in just 3 to 15 minutes. By turning complex creative data into bite-sized, actionable insights, it made staying on top of branding simple and engaging.
            </p>
            
            <div className="flex justify-center flex-1 items-end">
              <div className="w-80 h-auto">
                <Image
                  src="https://imagedelivery.net/ly47schtw9lMeXBIbG9ODw/29ea72f7-d348-4dbb-6879-ad2adcf3cb00/public"
                  alt="Art vs Function Design Concept"
                  width={400}
                  height={800}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </motion.div>

          {/* Conversion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center flex flex-col"
          >
            <h3 className="text-lg font-sans font-semibold text-black mb-4">
              Conversion
            </h3>
            <p className="text-xs text-black/70 text-left leading-4 font-light mb-4">
              Encourage inquiries and bookings without making the site feel too transactional. We reimagined creative management as a brand and portfolio journey. By making services more engaging and goal-driven, we encouraged users to set creative goals, track their progress, and feel a sense of achievement.
            </p>
            
            <div className="flex justify-center flex-1 items-end">
              <div className="w-80 h-auto">
                <Image
                  src="https://imagedelivery.net/ly47schtw9lMeXBIbG9ODw/52e6bb3e-19fc-4747-8447-61a8f42d9600/public"
                  alt="Conversion Design Concept"
                  width={400}
                  height={800}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </Section>
  );
}