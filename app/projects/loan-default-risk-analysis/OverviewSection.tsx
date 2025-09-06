"use client";

import { motion } from "framer-motion";
import { Section } from "../micro-documentary/common/Section";

export function OverviewSection() {
  return (
    <Section className="pt-2 md:pt-3">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
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
          This project analyzes loan default patterns using machine learning on historical financial data. The goal was to identify high-risk borrowers early, highlight drivers of default, and deliver actionable insights that financial institutions could use to mitigate risk.
        </p>
      </motion.div>
    </Section>
  );
}