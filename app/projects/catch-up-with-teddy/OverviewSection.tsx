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
        <h4 className="text-[clamp(40px,7vw,110px)] font-sans font-medium text-black mb-8 leading-tight text-balance">
          Designing Familiarity at Scale
        </h4>
        <p className="text-xs md:text-sm text-black/80 leading-relaxed font-light text-center max-w-xl mx-auto">
          Catch Up with Teddy is a short-form social series built to help a
          music artist establish an organic audience foundation before larger
          releases or campaigns. Rather than focusing on high production or
          forced virality, the series is intentionally raw, fast, and
          conversational. Each episode feels like a genuine catch-up, bringing
          viewers along for a simple activity while Teddy shares updates on
          life, music, culture, and what he is building. The project was
          approached as both a content system and a lightweight product, with
          emphasis on format, cadence, and long-term consistency.
        </p>
      </motion.div>
    </Section>
  );
}
