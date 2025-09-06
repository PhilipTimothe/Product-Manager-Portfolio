"use client";

import { motion } from "framer-motion";
import { Section } from "../micro-documentary/common/Section";

export function ModelingSection() {
  return (
    <Section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
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
          Balancing Interpretability and Accuracy
        </h4>

        <div className="space-y-12">
          <div className="text-center">
            <p className="text-xs md:text-sm text-black/70 leading-relaxed font-light mb-8 max-w-2xl mx-auto">
              I trained multiple models including Logistic Regression and Random Forest. 
              Logistic Regression offered interpretability, while Random Forest delivered higher predictive power.
            </p>
          </div>

          {/* Model Comparison */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Logistic Regression */}
            <div className="bg-surface rounded-lg p-6 shadow-sm border border-border/10">
              <h3 className="text-base md:text-lg font-sans font-medium text-black mb-4 text-center">
                Logistic Regression
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { metric: "Precision", value: "0.93" },
                  { metric: "Recall", value: "0.95" },
                  { metric: "F1 Score", value: "0.94" },
                  { metric: "Accuracy", value: "0.89" }
                ].map((item, index) => (
                  <motion.div
                    key={item.metric}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-xl font-sans font-semibold text-accent mb-1">
                      {item.value}
                    </div>
                    <div className="text-xs text-black/60 font-light">
                      {item.metric}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Random Forest */}
            <div className="bg-surface rounded-lg p-6 shadow-sm border border-border/10">
              <h3 className="text-base md:text-lg font-sans font-medium text-black mb-4 text-center">
                Random Forest
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { metric: "Precision", value: "0.97" },
                  { metric: "Recall", value: "0.91" },
                  { metric: "F1 Score", value: "0.94" },
                  { metric: "Accuracy", value: "0.90" }
                ].map((item, index) => (
                  <motion.div
                    key={item.metric}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-xl font-sans font-semibold text-accent mb-1">
                      {item.value}
                    </div>
                    <div className="text-xs text-black/60 font-light">
                      {item.metric}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}