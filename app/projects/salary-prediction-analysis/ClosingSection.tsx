"use client";

import { motion } from "framer-motion";
import { Section } from "../micro-documentary/common/Section";

export function ClosingSection() {
  return (
    <Section background="bg-cream" className="text-center pt-2 md:pt4 pb-2 md:pb-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        {/* Dark rounded container */}
        <div className="rounded-3xl p-2 md:p-4 lg:p-6 text-black">
          {/* Header section */}
          <div className="text-center mb-6">
            <div className="flex items-baseline justify-center gap-1 mb-0">
              <span className="text-lg md:text-xl text-black/40 font-mono leading-none">
                09.
              </span>
              <h2 className="text-lg md:text-xl font-sans font-semibold text-black leading-none mb-0">
                DATA THAT INFORMS DECISIONS
              </h2>
            </div>

            <h3 className="text-[clamp(48px,8vw,120px)] font-sans font-medium text-black mb-2 leading-tight">
              From Numbers to Strategy
            </h3>

            <p className="text-xs md:text-sm text-black leading-relaxed font-light max-w-4xl mx-auto mb-0">
              This project demonstrated how salary data can be more than a snapshot — it can guide workforce planning, market positioning, and individual career choices.
            </p>
          </div>

          {/* Two column section */}
          <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
            {/* Left Column - Technical Impact */}
            <div className="text-left">
              <h4 className="text-base md:text-lg font-sans font-semibold text-black mb-2 text-center">
                Technical Impact
              </h4>
              <ul className="space-y-0.5">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <span className="text-xs text-black font-medium">Model Performance:</span>
                    <span className="text-xs text-black ml-2 leading-snug">
                      Achieved 92% accuracy with Random Forest, demonstrating robust predictive capabilities.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <span className="text-xs text-black font-medium">Data Engineering:</span>
                    <span className="text-xs text-black ml-2 leading-snug">
                      Successfully cleaned and engineered features from complex, multi-dimensional salary datasets.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <span className="text-xs text-black font-medium">Interpretability:</span>
                    <span className="text-xs text-black ml-2 leading-snug">
                      Translated complex model outputs into clear, actionable business insights.
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          
            {/* Right Column - Business Value */}
            <div className="text-left">
              <h4 className="text-base md:text-lg font-sans font-semibold text-black mb-2 text-center">
                Business Value
              </h4>
              <ul className="space-y-0.5">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <span className="text-xs text-black font-medium">Strategic Insights:</span>
                    <span className="text-xs text-black ml-2 leading-snug">
                      Revealed key compensation drivers that inform both individual and organizational decisions.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <span className="text-xs text-black font-medium">Market Intelligence:</span>
                    <span className="text-xs text-black ml-2 leading-snug">
                      Provided data-driven benchmarks for competitive positioning and talent acquisition.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <span className="text-xs text-black font-medium">Scalable Framework:</span>
                    <span className="text-xs text-black ml-2 leading-snug">
                      Created reusable methodology for ongoing salary analysis and prediction.
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom closing statement */}
          <div className="mt-4 pt-3 border-t border-black/10">
            <p className="text-xs md:text-sm text-black leading-relaxed font-light max-w-4xl mx-auto text-center">
              By blending machine learning with data storytelling, the results moved beyond numbers into strategic insights that inform real-world decisions.
            </p>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}