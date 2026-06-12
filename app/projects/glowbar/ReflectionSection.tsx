"use client";

import { motion } from "framer-motion";
import { Section } from "../micro-documentary/common/Section";

const learnings = [
  {
    label: "Start from the objective, not the brief.",
    body: "Defining how the content would be used shaped every production decision that followed.",
  },
  {
    label: "A standard is a deliverable.",
    body: "Setting one visual system up front is what let ten varied treatments read as one brand, and let a second project extend the first seamlessly.",
  },
  {
    label: "Reliability earns the next project.",
    body: "Delivering the first set cleanly is why the second one existed.",
  },
];

export function ReflectionSection() {
  return (
    <Section background="bg-cream" className="text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <div className="bg-neutral-800 rounded-3xl p-8 md:p-12 lg:p-16 text-white">
          <div className="text-center mb-12">
            <div className="flex items-baseline justify-center gap-1 mb-0">
              <span className="text-lg md:text-xl text-white/80 font-mono leading-none">
                07.
              </span>
              <h2 className="text-lg md:text-xl font-sans font-semibold text-white leading-none mb-0">
                REFLECTION
              </h2>
            </div>

            <h3 className="text-[clamp(48px,8vw,120px)] font-sans font-medium text-white mb-2 leading-tight">
              Outcomes, Not Outputs
            </h3>

            <p className="text-xs md:text-sm text-white/80 leading-relaxed font-light max-w-3xl mx-auto">
              The same approach — creative production run as structured, objective-led delivery
              against a defined standard — transfers to any content program where output has to
              stay consistent across many parts and serve a measurable business purpose.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
            <div className="text-left">
              <h4 className="text-base md:text-lg font-sans font-semibold text-white mb-4 text-center">
                Key Learnings
              </h4>
              <ul className="space-y-3">
                {learnings.map((item) => (
                  <li key={item.label} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <span className="text-xs text-white font-medium">{item.label}</span>
                      <span className="text-xs text-white/80 ml-2 leading-snug">{item.body}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-left">
              <h4 className="text-base md:text-lg font-sans font-semibold text-white mb-4 text-center">
                Future Impact
              </h4>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0" />
                <p className="text-xs text-white/80 leading-relaxed">
                  The same approach — creative production run as structured, objective-led
                  delivery against a defined standard — transfers to any content program where
                  output has to stay consistent across many parts and serve a measurable
                  business purpose.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10">
            <p className="text-xs md:text-sm text-white/80 leading-relaxed font-light max-w-3xl mx-auto text-center">
              Ten treatments. Two projects. One library. Live on the page customers use to book today.
            </p>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
