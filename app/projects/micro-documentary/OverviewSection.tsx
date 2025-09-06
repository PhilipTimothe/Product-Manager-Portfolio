"use client";

import { motion } from "framer-motion";
import { Section } from "./common/Section";

export function OverviewSection() {
  return (
    <Section className="pt-2 md:pt-3">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl"
      >
        <div className="flex items-baseline justify-center gap-1 mb-0">
          <span className="text-lg md:text-xl text-black/40 font-mono leading-none">
            01.
          </span>
          <h2 className="text-lg md:text-xl font-sans font-semibold text-black leading-none">
            OVERVIEW
          </h2>
        </div>
        <p className="text-xs md:text-sm text-black/80 leading-relaxed font-light text-center max-w-xl mx-auto">
          This project set out to solve a tough challenge: how does a new
          music artist with no audience build an authentic brand connection in
          a crowded marketplace? The answer was a cinematic micro documentary
          that blended raw, candid moments with polished storytelling.
        </p>
      </motion.div>
    </Section>
  );
}