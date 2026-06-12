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
          A Repeatable Delivery System
        </h4>

        <div className="space-y-4 max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm text-black/70 leading-relaxed font-light"
          >
            The reason there were 29 projects and not three is that I ran the same disciplined
            process every time: intake and scope, plan around the site, capture under constraint,
            iterate against the acceptance bar, deliver.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm text-black/70 leading-relaxed font-light"
          >
            The throughline across nearly every project: the real quality bar was set by
            Darby&apos;s client, not Darby. Glowbar, Municipal Credit Union, and Cutler and
            Gross each had final say, so I was managing delivery to a downstream acceptance
            standard I did not set and could not negotiate. Meeting that bar, predictably, is
            what kept Darby bringing the next project to me.
          </motion.p>
        </div>
      </motion.div>
    </Section>
  );
}
