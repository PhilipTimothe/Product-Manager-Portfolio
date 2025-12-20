"use client";

import { motion } from "framer-motion";
import { Section } from "../micro-documentary/common/Section";

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
        {/* Dark rounded container */}
        <div className="bg-neutral-800 rounded-3xl p-8 md:p-12 lg:p-16 text-white">
          {/* Header section */}
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
              The System Behind the Conversation
            </h3>

            <p className="text-xs md:text-sm text-white leading-relaxed font-light max-w-4xl mx-auto mb-0">
              Although the content appears casual, the underlying system is
              intentional. This project reinforced the value of designing
              constraints that create freedom, and treating creative work as an
              evolving product rather than isolated output.
            </p>
          </div>

          {/* Two column section */}
          <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
            {/* Left Column - Key Learnings */}
            <div className="text-left">
              <h4 className="text-base md:text-lg font-sans font-semibold text-white mb-2 text-center">
                Key Learnings
              </h4>
              <ul className="space-y-0.5">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <span className="text-xs text-white font-medium">
                      Consistency creates trust faster than polish:
                    </span>
                    <span className="text-xs text-white ml-2 leading-snug">
                      Repeating a familiar format helped audiences build comfort
                      and recognition, even when production remained
                      intentionally minimal.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <span className="text-xs text-white font-medium">
                      Constraints unlock creative freedom:
                    </span>
                    <span className="text-xs text-white ml-2 leading-snug">
                      Defining simple format rules reduced decision fatigue and
                      allowed each episode to feel natural while staying
                      cohesive.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <span className="text-xs text-white font-medium">
                      Presence is a product, not a byproduct:
                    </span>
                    <span className="text-xs text-white ml-2 leading-snug">
                      Regular, conversational touchpoints mattered more than
                      individual moments of performance or promotion.
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Right Column - Future Impact */}
            <div className="text-left">
              <h4 className="text-base md:text-lg font-sans font-semibold text-white mb-2 text-center">
                Future Impact
              </h4>
              <ul className="space-y-0.5">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <span className="text-xs text-white font-medium">
                      Foundation for larger narrative series:
                    </span>
                    <span className="text-xs text-white ml-2 leading-snug">
                      This format establishes a baseline audience relationship
                      that future music releases, campaigns, and long-form
                      content can build upon.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <span className="text-xs text-white font-medium">
                      Scalable system for sustainable output:
                    </span>
                    <span className="text-xs text-white ml-2 leading-snug">
                      The lightweight workflow enables consistent publishing
                      without burnout, supporting long-term growth.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <span className="text-xs text-white font-medium">
                      Transferable framework for other creators:
                    </span>
                    <span className="text-xs text-white ml-2 leading-snug">
                      The system can be adapted for additional artists or brands
                      seeking organic audience development through short-form
                      content.
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom closing statement */}
          <div className="mt-4 pt-3 border-t border-white/10">
            <p className="text-xs md:text-sm text-white leading-relaxed font-light max-w-4xl mx-auto text-center">
              The foundation built here enables future growth to be deliberate
              instead of reactive.
            </p>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
