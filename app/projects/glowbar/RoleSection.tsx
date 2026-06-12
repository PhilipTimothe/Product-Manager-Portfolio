"use client";

import { motion } from "framer-motion";
import { Section } from "../micro-documentary/common/Section";

export function RoleSection() {
  const dimensions = [
    {
      title: "Discovery & Alignment",
      body: "Clarifying the business objective behind each project and mapping every deliverable to a defined use case before any production began.",
    },
    {
      title: "Production Management",
      body: "Developing the production approach, coordinating execution, and tracking progress against deadlines.",
    },
    {
      title: "Standard & Delivery",
      body: "Setting and holding a single visual standard, managing the review and revision loop, protecting scope, and delivering approved, launch-ready assets.",
    },
  ];

  return (
    <Section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <div className="flex items-baseline gap-1 mb-0">
          <span className="text-lg md:text-xl text-black/40 font-mono leading-none">
            02.
          </span>
          <h2 className="text-lg md:text-xl font-sans font-semibold text-black leading-none">
            ROLE
          </h2>
        </div>

        <h4 className="text-[clamp(40px,7vw,110px)] font-sans font-medium text-black mb-6 leading-tight text-balance">
          From Business Objective to Approved Delivery
        </h4>

        <div className="max-w-3xl space-y-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-sm text-black/70 leading-relaxed font-light"
          >
            Through WhiteCoatLab, I led each project end to end, from initial stakeholder
            discussions through final asset delivery. I did not start from a creative brief.
            I started from the business question: how will this content be used, who is it
            for, and what action should it drive.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4 pt-4"
          >
            <h3 className="text-base font-sans font-medium text-black">
              Key Dimensions
            </h3>

            <div className="space-y-4">
              {dimensions.map((dim, i) => (
                <motion.div
                  key={dim.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                >
                  <h4 className="text-sm font-sans font-medium text-black mb-1">
                    {dim.title}
                  </h4>
                  <p className="text-sm text-black/70 leading-relaxed font-light">
                    {dim.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </Section>
  );
}
