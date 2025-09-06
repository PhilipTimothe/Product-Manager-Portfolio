"use client";

import { motion } from "framer-motion";
import { Section } from "../micro-documentary/common/Section";

export function ChallengesSection() {
  return (
    <Section className="pb-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
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
          Navigating Financial Complexity
        </h4>

        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-base md:text-lg font-sans font-medium text-black mb-4">
              Imbalanced Dataset
            </h3>
            <p className="text-xs md:text-sm text-black/70 leading-relaxed font-light">
              Dataset contained far fewer defaults than non-defaults, requiring specialized 
              techniques to ensure model could effectively identify high-risk cases.
            </p>
          </div>

          <div>
            <h3 className="text-base md:text-lg font-sans font-medium text-black mb-4">
              Feature Correlations
            </h3>
            <p className="text-xs md:text-sm text-black/70 leading-relaxed font-light">
              Complex relationships between financial variables and noise in payment 
              history data affected model stability and interpretability.
            </p>
          </div>

          <div>
            <h3 className="text-base md:text-lg font-sans font-medium text-black mb-4">
              Precision vs Recall
            </h3>
            <p className="text-xs md:text-sm text-black/70 leading-relaxed font-light">
              Need for both high recall (catch defaults) and high precision (avoid false 
              positives) to balance risk detection with customer experience.
            </p>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}