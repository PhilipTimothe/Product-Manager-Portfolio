"use client";

import { motion } from "framer-motion";
import { Section } from "../micro-documentary/common/Section";

const initiatives = [
  {
    title: "Glowbar",
    subtitle: "Consistency at Scale",
    items: [
      {
        label: "Situation",
        body: "A rapidly growing brand opening multiple locations, where Darby's construction needed to read as polished and consistent across every site.",
      },
      {
        label: "Constraint",
        body: "Five separate locations, each started and completed at different times, all required to look like one coherent standard.",
      },
      {
        label: "Move",
        body: "I held a single definition of done across all five, running a deep revision and iteration loop so quality did not drift as the rollout expanded.",
      },
      {
        label: "Proof",
        body: "Consistent, approved assets delivered across five locations as the brand scaled.",
      },
    ],
  },
  {
    title: "Municipal Credit Union",
    subtitle: "Volume Under Live Constraints",
    items: [
      {
        label: "Situation",
        body: "A recurring program documenting completed construction across Municipal Credit Union branches.",
      },
      {
        label: "Constraint",
        body: "Nine locations, each an active bank open and full of customers, every shoot running against the clock with no power to pause the operation.",
      },
      {
        label: "Move",
        body: "I triaged capture to get the critical shots first, worked around live-environment issues in real time, then ran an intensive post-production and approval loop so every asset cleared MCU's public-use check.",
      },
      {
        label: "Proof",
        body: "Nine locations delivered, every asset cleared the end client's approval for public use.",
      },
    ],
  },
  {
    title: "Cutler and Gross",
    subtitle: "One-Shot Precision",
    items: [
      {
        label: "Situation",
        body: "A high-end eyewear brand's SoHo location, where the end client expected a flawless, stress-free result.",
      },
      {
        label: "Constraint",
        body: "A single window to get it right, with no room to fumble scheduling or execution.",
      },
      {
        label: "Move",
        body: "I coordinated the cross-functional pieces tightly so it came together in one pass, then expanded the engagement into an additional short content piece.",
      },
      {
        label: "Proof",
        body: "Delivered clean in a single shot, and earned additional scope.",
      },
    ],
  },
];

export function SelectedInitiativesSection() {
  return (
    <Section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-12">
          <div className="flex items-baseline justify-center gap-1 mb-4">
            <span className="text-lg md:text-xl text-black/40 font-mono leading-none">
              04.
            </span>
            <h2 className="text-lg md:text-xl font-sans font-semibold text-black leading-none">
              SELECTED INITIATIVES
            </h2>
          </div>

          <h4 className="text-[clamp(32px,5vw,80px)] font-sans font-medium text-black mb-4 leading-tight text-balance">
            Three Projects. Three Muscles.
          </h4>

          <p className="text-sm text-black/70 leading-relaxed font-light max-w-2xl mx-auto">
            Each chosen because it stressed a different delivery dimension.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {initiatives.map((initiative, i) => (
            <motion.div
              key={initiative.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-gradient-to-br from-[#f9f9f9] to-[#f1f1f1] rounded-2xl p-6 shadow-sm"
            >
              <h3 className="text-base font-sans font-semibold text-black mb-0.5">
                {initiative.title}
              </h3>
              <p className="text-xs text-accent font-sans font-medium mb-4 uppercase tracking-wide">
                {initiative.subtitle}
              </p>

              <div className="space-y-3">
                {initiative.items.map((item) => (
                  <div key={item.label}>
                    <span className="text-xs font-sans font-semibold text-black">
                      {item.label}
                    </span>
                    <p className="text-xs text-black/70 leading-relaxed font-light mt-0.5">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
