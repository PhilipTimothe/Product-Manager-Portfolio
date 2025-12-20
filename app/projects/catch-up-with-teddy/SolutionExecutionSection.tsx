"use client";

import { motion } from "framer-motion";
import { Section } from "../micro-documentary/common/Section";

export function SolutionExecutionSection() {
  return (
    <Section className="pb-0">
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
          <h2 className="text-lg md:text-xl font-sans font-semibold text-black leading-none mb-0">
            SOLUTION & EXECUTION
          </h2>
        </div>

        <h4 className="text-[clamp(40px,7vw,110px)] font-sans font-medium text-black mb-8 leading-tight text-balance">
          Designing a Repeatable Content System
        </h4>

        <div className="space-y-12">
          {/* Two Column System */}
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-base md:text-lg font-sans font-medium text-black mb-4">
                Product System
              </h3>
              <ul className="space-y-3 text-xs md:text-sm text-black/70 leading-relaxed font-light">
                <li>• Defined format rules and pacing</li>
                <li>• Treated episodes as MVP iterations</li>
                <li>• Established early success signals beyond reach</li>
              </ul>
            </div>

            <div>
              <h3 className="text-base md:text-lg font-sans font-medium text-black mb-4">
                Content System
              </h3>
              <ul className="space-y-3 text-xs md:text-sm text-black/70 leading-relaxed font-light">
                <li>• Lightweight filming workflow</li>
                <li>• Fast editing and publishing cadence</li>
                <li>• Consistent framing and tone</li>
              </ul>
            </div>
          </div>

          {/* Roadmap */}
          <div className="bg-creamMuted rounded-lg p-6 md:p-8">
            <h3 className="text-base md:text-lg font-sans font-medium text-black mb-4">
              Delivery Roadmap
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="text-sm font-sans font-medium text-black mb-2">
                  Phase 1
                </h4>
                <p className="text-xs text-black/70 leading-relaxed font-light">
                  Pilot episodes and tone validation
                </p>
              </div>
              <div>
                <h4 className="text-sm font-sans font-medium text-black mb-2">
                  Phase 2
                </h4>
                <p className="text-xs text-black/70 leading-relaxed font-light">
                  Consistent cadence and recognition
                </p>
              </div>
              <div>
                <h4 className="text-sm font-sans font-medium text-black mb-2">
                  Phase 3
                </h4>
                <p className="text-xs text-black/70 leading-relaxed font-light">
                  Expansion into future series and releases
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
