"use client";

import { motion } from "framer-motion";
import { Section } from "../micro-documentary/common/Section";

export function ModelingSection() {
  return (
    <Section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl"
      >
        <div className="flex items-baseline gap-1 mb-0">
          <span className="text-lg md:text-xl text-black/40 font-mono leading-none">
            05.
          </span>
          <h2 className="text-lg md:text-xl font-sans font-semibold text-black leading-none mb-0">
            MODELING
          </h2>
        </div>

        <h4 className="text-[clamp(40px,7vw,110px)] font-sans font-medium text-black mb-8 leading-tight text-balance">
          Turning Patterns into Predictions
        </h4>

        <div className="space-y-12">
          <div className="text-center">
            <p className="text-xs md:text-sm text-black/70 leading-relaxed font-light mb-8 max-w-2xl mx-auto">
              I trained multiple models to predict salaries, including Random Forests and baseline regressions. 
              Random Forest emerged as the top performer with exceptional accuracy across all metrics.
            </p>
          </div>

          {/* Model Performance Metrics */}
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { metric: "Accuracy", value: "0.92", description: "Overall prediction accuracy" },
              { metric: "Precision", value: "0.90", description: "Positive prediction accuracy" },
              { metric: "Recall", value: "0.89", description: "True positive detection rate" },
              { metric: "F1 Score", value: "0.91", description: "Harmonic mean of precision and recall" }
            ].map((item, index) => (
              <motion.div
                key={item.metric}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-surface rounded-lg p-6 shadow-sm border border-border/10 text-center"
              >
                <div className="text-2xl md:text-3xl font-sans font-semibold text-accent mb-2">
                  {item.value}
                </div>
                <h3 className="text-sm font-sans font-medium text-black mb-2">
                  {item.metric}
                </h3>
                <p className="text-xs text-black/60 leading-relaxed font-light">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Model Details */}
          <div className="bg-creamMuted rounded-lg p-6 md:p-8">
            <h3 className="text-base md:text-lg font-sans font-medium text-black mb-4">
              Random Forest Model
            </h3>
            <p className="text-xs md:text-sm text-black/70 leading-relaxed font-light mb-4">
              The Random Forest algorithm was selected for its ability to handle complex feature interactions 
              while maintaining interpretability. The model was trained on engineered features including 
              experience level, company size, job role, and remote work ratio.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm font-sans font-medium text-black mb-2">Key Features</h4>
                <ul className="text-xs text-black/70 leading-relaxed font-light space-y-1">
                  <li>• Experience level (Entry, Mid, Senior, Executive)</li>
                  <li>• Company size (Small, Medium, Large)</li>
                  <li>• Job role and specialization</li>
                  <li>• Remote work ratio (0%, 50%, 100%)</li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-sans font-medium text-black mb-2">Model Benefits</h4>
                <ul className="text-xs text-black/70 leading-relaxed font-light space-y-1">
                  <li>• Handles non-linear relationships</li>
                  <li>• Provides feature importance rankings</li>
                  <li>• Robust to outliers and missing data</li>
                  <li>• Interpretable decision paths</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}