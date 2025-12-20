"use client";

import { motion } from "framer-motion";
import { CircleCheck as CheckCircle } from "lucide-react";
import { Section } from "../micro-documentary/common/Section";

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
          Laying the Foundation for Growth
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {[
            "Established a repeatable short-form format",
            "Increased consistency in audience touchpoints",
            "Clear engagement signals for future iteration",
            "Scalable system for long-term creative output",
          ].map((result, index) => (
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

        {/* Subtle CTA */}
        <div className="text-center">
          <div className="inline-block px-6 py-3 bg-surface border border-border/20 rounded-lg font-sans font-medium shadow-sm text-sm text-black/70">
            Ongoing Series Development
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
