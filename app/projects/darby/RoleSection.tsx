"use client";

import { motion } from "framer-motion";
import { Section } from "../micro-documentary/common/Section";

export function RoleSection() {
  const dimensions = [
    {
      title: "Scoping & Planning",
      body: "Defining what each project needed and sequencing it around live site conditions and a build timeline I could not move.",
    },
    {
      title: "Field Execution",
      body: "Directing capture on active construction sites under real time, safety, and access constraints, often with a single window to get the shot.",
    },
    {
      title: "Acceptance & Delivery",
      body: "Running a disciplined revision loop against each end client's quality bar, then delivering assets cleared for public use.",
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
          Owning Delivery End to End
        </h4>

        <div className="max-w-3xl space-y-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-sm text-black/70 leading-relaxed font-light"
          >
            As founder of WhiteCoatLab, I led every Darby engagement from scope to final delivery.
            I was not handed a brief and a deadline. I defined the scope, planned each shoot around
            an active construction schedule I did not control, directed capture on site, and ran
            the revision loop that got each asset approved for public use.
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
