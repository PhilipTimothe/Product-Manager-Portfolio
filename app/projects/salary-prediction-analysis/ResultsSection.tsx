"use client";

import { motion } from "framer-motion";
import { Section } from "../micro-documentary/common/Section";

export function ResultsSection() {
  return (
    <>
      <Section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <div className="flex items-baseline justify-end gap-1 mb-0">
            <span className="text-lg md:text-xl text-black/40 font-mono leading-none">
              06.
            </span>
            <h2 className="text-lg md:text-xl font-sans font-semibold text-black leading-none mb-0">
              RESULTS
            </h2>
          </div>

          <h4 className="text-[clamp(40px,7vw,110px)] font-sans font-medium text-right text-black mb-8 leading-tight text-balance">
            Data Insights Uncovered
          </h4>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Experience Progression",
                description: "Clear salary progression from entry-level to executive positions, with substantial increases at senior and executive tiers."
              },
              {
                title: "Company Size Impact", 
                description: "Larger companies consistently offer higher median salaries across all experience levels and job roles."
              },
              {
                title: "Remote Work Parity",
                description: "Fully remote roles showed compensation on par with, or even above, onsite jobs in many categories."
              }
            ].map((result, index) => (
              <motion.div
                key={result.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-surface rounded-lg p-6 shadow-sm border border-border/10"
              >
                <h3 className="text-base font-sans font-medium text-black mb-3">
                  {result.title}
                </h3>
                <p className="text-xs md:text-sm text-black/70 leading-relaxed font-light">
                  {result.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>

    </>
  );
}