"use client";

import { motion } from "framer-motion";
import { Section } from "../micro-documentary/common/Section";

export function HowIOperatedSection() {
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
            05.
          </span>
          <h2 className="text-lg md:text-xl font-sans font-semibold text-black leading-none">
            HOW I OPERATED
          </h2>
        </div>

        <h4 className="text-[clamp(40px,7vw,110px)] font-sans font-medium text-black mb-8 leading-tight text-balance">
          Creative Production as Structured Delivery
        </h4>

        <div className="space-y-4 max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm text-black/70 leading-relaxed font-light"
          >
            The reason both projects landed cleanly, and read as one library rather than two
            shoots, is that I ran the same disciplined process every time: start from the
            business objective, map every deliverable to a use case, set and hold a single
            visual standard, execute against deadlines, manage revisions without letting scope
            drift, and deliver assets ready to use.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm text-black/70 leading-relaxed font-light"
          >
            The throughline across both projects: creative decisions were never made for their
            own sake. Each was evaluated against the original objective and the established
            standard, which streamlined decision-making and kept the work focused on outcomes
            rather than outputs.
          </motion.p>
        </div>
      </motion.div>
    </Section>
  );
}
