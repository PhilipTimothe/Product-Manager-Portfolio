"use client";

import { motion } from "framer-motion";
import { Section } from "../micro-documentary/common/Section";

export function InsightsSection() {
  return (
    <Section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl"
      >
        <div className="flex items-baseline justify-center gap-1 mb-0">
          <span className="text-lg md:text-xl text-black/40 font-mono leading-none">
            07.
          </span>
          <h2 className="text-lg md:text-xl font-sans font-semibold text-black leading-none mb-0">
            INSIGHTS
          </h2>
        </div>

        <h4 className="text-[clamp(40px,7vw,110px)] font-sans font-medium text-black mb-8 leading-tight text-balance">
          Key Technical Discoveries
        </h4>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "SMOTE Enhancement",
              description: "Improved detection of high-risk borrowers by boosting recall through synthetic minority oversampling techniques."
            },
            {
              title: "Model Selection",
              description: "Random Forest chosen for deployment, Logistic Regression kept for explainability and stakeholder confidence."
            },
            {
              title: "Future Development",
              description: "Fine-tuning hyperparameters and testing XGBoost for further performance gains in precision and recall balance."
            }
          ].map((insight, index) => (
            <motion.div
              key={insight.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              className="bg-surface rounded-lg p-6 shadow-sm border border-border/10"
            >
              <h3 className="text-base font-sans font-medium text-black mb-3">
                {insight.title}
              </h3>
              <p className="text-xs md:text-sm text-black/70 leading-relaxed font-light">
                {insight.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}