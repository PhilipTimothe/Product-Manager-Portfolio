"use client";

import { motion } from "framer-motion";
import { Section } from "./common/Section";

export function KeyChallengesSection() {
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
          Breaking Through Noise
        </h4>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="md:border-r md:border-border/10 md:pr-8">
            <h3 className="text-base md:text-lg font-sans font-medium text-black mb-6">
              Challenge
            </h3>
            <p className="text-xs md:text-sm text-black/70 leading-relaxed font-light mb-4">
              An emerging artist with zero social media presence needed to
              establish credibility and emotional connection with potential
              fans.
            </p>
            <p className="text-xs md:text-sm text-black/70 leading-relaxed font-light mb-4">
              Traditional marketing approaches felt inauthentic and would not
              differentiate in an oversaturated market.
            </p>
          </div>

          <div className="md:pl-4">
            <h3 className="text-base md:text-lg font-sans font-medium text-black mb-6">
              Solution
            </h3>
            <p className="text-xs md:text-sm text-black/70 leading-relaxed font-light mb-6">
              Lean into realness. Make it about human moments. Create a
              compelling brand narrative that showcases authenticity while
              building emotional investment from viewers.
            </p>
            <p className="text-xs md:text-sm text-black/70 leading-relaxed font-light mb-6">
              By focusing on candid storytelling across multiple locations and
              seasons, we created a film that invited the audience into the
              artist's life, not just his music.
            </p>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}