"use client";

import { motion } from "framer-motion";
import { Section } from "../micro-documentary/common/Section";

export function SolutionExecutionSection() {
  return (
    <>
      <Section className="pb-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
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
            Designing with Purpose
          </h4>

          <div className="space-y-12">
            {/* Key Features */}
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-base md:text-lg font-sans font-medium text-black mb-4">
                  Portfolio-First Design
                </h3>
                <p className="text-xs md:text-sm text-black/70 leading-relaxed font-light mb-4">
                  Developed a clean, art-forward design that prioritized portfolio imagery to immediately showcase quality and capability.
                </p>
              </div>

              <div>
                <h3 className="text-base md:text-lg font-sans font-medium text-black mb-4">
                  Structured Navigation
                </h3>
                <p className="text-xs md:text-sm text-black/70 leading-relaxed font-light mb-4">
                  Implemented clear pathways: portfolio, services, about, contact — each serving specific user needs and business goals.
                </p>
              </div>

              <div>
                <h3 className="text-base md:text-lg font-sans font-medium text-black mb-4">
                  Mobile-First Responsive
                </h3>
                <p className="text-xs md:text-sm text-black/70 leading-relaxed font-light mb-4">
                  Built using modern frameworks with responsive layouts ensuring optimal experience across all devices.
                </p>
              </div>

              <div>
                <h3 className="text-base md:text-lg font-sans font-medium text-black mb-4">
                  SEO & Performance
                </h3>
                <p className="text-xs md:text-sm text-black/70 leading-relaxed font-light mb-4">
                  Applied optimization strategies to improve discoverability and ensure fast loading times for portfolio content.
                </p>
              </div>
            </div>

            {/* Roadmap */}
            <div className="bg-creamMuted rounded-lg p-6 md:p-8">
              <h3 className="text-base md:text-lg font-sans font-medium text-black mb-4">
                Delivery Roadmap
              </h3>
              <p className="text-xs md:text-sm text-black/70 leading-relaxed font-light">
                Delivered on time through a structured roadmap that included clear milestones for content creation, design implementation, and engineering development.
              </p>
            </div>
          </div>
        </motion.div>
      </Section>

    </>
  );
}