"use client";

import { motion } from "framer-motion";
import { Section } from "../micro-documentary/common/Section";

export function KeyChallengesSection() {
  return (
    <Section className="pb-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
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
            Balancing Authenticity with Structure
          </h4>
        </div>

        {/* Three Column Layout */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Authenticity vs Intentional Design */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center"
          >
            <h3 className="text-lg font-sans font-semibold text-black mb-4">
              Authenticity vs Intentional Design
            </h3>
            <p className="text-xs text-black/70 text-left leading-4 font-light">
              Keeping content natural while still building consistency and
              recognizability. The challenge was creating a format that felt
              spontaneous but delivered strategic value through repeated
              touchpoints and familiar structure.
            </p>
          </motion.div>

          {/* Short Attention vs Long-Term Trust */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <h3 className="text-lg font-sans font-semibold text-black mb-4">
              Short Attention vs Long-Term Trust
            </h3>
            <p className="text-xs text-black/70 text-left leading-4 font-light">
              Optimizing for moments without sacrificing relationship building.
              Each episode needed to work as a standalone piece while
              contributing to a larger narrative of familiarity and connection
              over time.
            </p>
          </motion.div>

          {/* Creative Freedom vs Scalability */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <h3 className="text-lg font-sans font-semibold text-black mb-4">
              Creative Freedom vs Scalability
            </h3>
            <p className="text-xs text-black/70 text-left leading-4 font-light">
              Allowing flexibility while maintaining a sustainable format. The
              system needed to support creative spontaneity without requiring
              extensive planning or production resources for each episode.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </Section>
  );
}
