"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Section } from "./common/Section";

export function ImpactResultsSection() {
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
            07.
          </span>
          <h2 className="text-lg md:text-xl font-sans font-semibold text-black leading-none mb-0">
            IMPACT / RESULTS
          </h2>
        </div>

        <h4 className="text-[clamp(40px,7vw,110px)] font-sans font-medium text-black mb-8 leading-tight text-balance">
          From Vision to Validation
        </h4>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div className="space-y-4">
            {[
              "Delivered on time and under budget",
              "Used as a brand anchor for pitches to record labels and agencies",
              "Strengthened the artist's identity, creating a professional presence where none existed",
            ].map((result, index) => (
              <motion.div
                key={result}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
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

          <div className="bg-surface rounded-lg p-6 shadow-sm border border-border/10">
            <blockquote className="text-xs md:text-sm text-black/80 italic leading-relaxed font-light mb-4">
              "The film captured exactly what we envisioned and felt authentic."
            </blockquote>
            <cite className="text-xs text-black/60 font-medium">
              Client Feedback
            </cite>
          </div>
        </div>

        {/* Reflection */}
        <div className="bg-creamMuted rounded-lg p-6 md:p-8">
          <h3 className="text-base md:text-lg font-sans font-medium text-black mb-4">
            Reflection
          </h3>
          <p className="text-xs md:text-sm text-black/70 leading-relaxed font-light">
            The multi-location, seasonal approach added depth and realism, giving the film a lived-in quality. In future iterations, I'd incorporate pre-release audience testing to measure engagement before launch.
          </p>
        </div>
      </motion.div>
    </Section>
  );
}