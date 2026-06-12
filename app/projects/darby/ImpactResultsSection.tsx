"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Section } from "../micro-documentary/common/Section";

const results = [
  "29 projects delivered for a single client over two years.",
  "Sustained re-engagement across that entire span — the clearest signal that delivery landed on time, on spec, and reliably.",
  "14+ locations across the three flagship programs, with every asset clearing the end client's public-use approval.",
  "Scope expansion on flagship work, including the additional Cutler and Gross content piece.",
];

export function ImpactResultsSection() {
  return (
    <Section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl"
      >
        <div className="flex items-baseline gap-1 mb-0">
          <span className="text-lg md:text-xl text-black/40 font-mono leading-none">
            06.
          </span>
          <h2 className="text-lg md:text-xl font-sans font-semibold text-black leading-none mb-0">
            IMPACT & RESULTS
          </h2>
        </div>

        <h4 className="text-[clamp(40px,7vw,110px)] font-sans font-medium text-black mb-8 leading-tight text-balance">
          Proof in the Repeat
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {results.map((result, index) => (
            <motion.div
              key={result}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-start gap-3"
            >
              <CheckCircle
                size={20}
                className="text-accent flex-shrink-0 mt-0.5"
              />
              <span className="text-xs md:text-sm text-black/70 leading-relaxed font-light">
                {result}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
