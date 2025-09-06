"use client";

import { motion } from "framer-motion";
import { Section } from "../micro-documentary/common/Section";

export function ChallengesSection() {
  return (
    <Section className="pb-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl"
      >
        <div className="flex items-baseline justify-end gap-1 mb-0">
          <span className="text-lg md:text-xl text-black/40 font-mono leading-none">
            03.
          </span>
          <h2 className="text-lg md:text-xl font-sans font-semibold text-black leading-none mb-0">
            KEY CHALLENGES
          </h2>
        </div>

        <h4 className="text-[clamp(40px,7vw,110px)] font-sans font-medium text-right text-black mb-8 leading-tight text-balance">
          Navigating Data Complexity
        </h4>

        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-base md:text-lg font-sans font-medium text-black mb-4">
              Data Quality
            </h3>
            <p className="text-xs md:text-sm text-black/70 leading-relaxed font-light">
              Handling missing values, outliers, and noisy compensation data across 
              different industries, regions, and reporting standards.
            </p>
          </div>

          <div>
            <h3 className="text-base md:text-lg font-sans font-medium text-black mb-4">
              Complex Relationships
            </h3>
            <p className="text-xs md:text-sm text-black/70 leading-relaxed font-light">
              Accounting for multi-variable interactions between role, experience, 
              geography, company size, and remote work arrangements.
            </p>
          </div>

          <div>
            <h3 className="text-base md:text-lg font-sans font-medium text-black mb-4">
              Interpretability
            </h3>
            <p className="text-xs md:text-sm text-black/70 leading-relaxed font-light">
              Ensuring results could be understood and acted upon by non-technical 
              stakeholders while maintaining statistical rigor.
            </p>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}