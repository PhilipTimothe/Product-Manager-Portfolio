"use client";

import { motion } from "framer-motion";
import { Section } from "../micro-documentary/common/Section";

export function OverviewSection() {
  return (
    <Section className="pt-2 md:pt-3">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
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
        <p className="text-xs md:text-sm text-black/80 leading-relaxed font-light text-center max-w-xl mx-auto mt-4">
          Glowbar brought me in to produce marketing content for their treatments, across two
          projects covering ten treatments in total, each with its own models. They did not need
          a pile of photos. They needed assets that communicated the value of each treatment,
          fit cleanly within an established brand, and could deploy quickly across
          customer-facing channels.
        </p>
        <p className="text-xs md:text-sm text-black/80 leading-relaxed font-light text-center max-w-xl mx-auto mt-3">
          The challenge was never the camera. It was treating creative production as a structured
          delivery process: aligning every asset to a business objective, controlling scope, and
          holding a single visual standard so a wide, varied set of treatments would read as one
          coherent brand. That library is live on Glowbar&apos;s core Skincare Services page
          today, the page customers use to understand and book each treatment.
        </p>
      </motion.div>
    </Section>
  );
}
