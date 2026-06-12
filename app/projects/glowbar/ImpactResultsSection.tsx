"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Section } from "../micro-documentary/common/Section";

const results = [
  "The imagery is live on Glowbar's website today, forming the treatment library across their core Skincare Services page, where customers browse and book.",
  "A single, consistent visual system maintained across ten distinct treatments and multiple models, so the brand reads as coherent no matter which treatment a customer views.",
  "Repeat engagement across two projects — the clearest signal the first delivered.",
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
          Ready to Use, Still in Use
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex items-start gap-3"
          >
            <CheckCircle
              size={20}
              className="text-accent flex-shrink-0 mt-0.5"
            />
            <span className="text-xs md:text-sm text-black/70 leading-relaxed font-light">
              The work is live and verifiable —{" "}
              <a
                href="https://glowbar.com/pages/locations-logan-circle-dc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline underline-offset-2 hover:text-accent/70 transition-colors"
              >
                view the Skincare Services page
              </a>
              .
            </span>
          </motion.div>
        </div>
      </motion.div>
    </Section>
  );
}
