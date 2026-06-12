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
          Over two years, Darby Construction Services brought me back across 29 separate projects
          to capture their completed work through photography, film, and storytelling. The assets
          had one job: give Darby visible proof of quality construction so they could showcase
          results and win more clients.
        </p>
        <p className="text-xs md:text-sm text-black/80 leading-relaxed font-light text-center max-w-xl mx-auto mt-3">
          The real challenge was never a single shoot. It was delivering consistent, high-fidelity
          assets at volume, across sites that were always changing, against an acceptance bar set
          not by Darby but by Darby&apos;s own high-profile clients. Every delivery had to clear
          that downstream check before it could go public.
        </p>
      </motion.div>
    </Section>
  );
}
