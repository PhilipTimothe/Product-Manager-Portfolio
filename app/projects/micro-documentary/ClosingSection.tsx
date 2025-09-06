"use client";

import { motion } from "framer-motion";
import { Section } from "./common/Section";

export function ClosingSection() {
  return (
    <Section background="bg-cream" className="text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        {/* Dark rounded container */}
        <div className="bg-neutral-800 rounded-3xl p-8 md:p-12 lg:p-16 text-white">
          {/* Header section */}
          <div className="text-center mb-12">
            <div className="flex items-baseline justify-center gap-1 mb-0">
              <span className="text-lg md:text-xl text-white/80 font-mono leading-none">
                08.
              </span>
              <h2 className="text-lg md:text-xl font-sans font-semibold text-white leading-none mb-0">
                CREATIVITY WITHOUT LIMITS
              </h2>
            </div>

            <h3 className="text-[clamp(48px,8vw,120px)] font-sans font-medium text-white mb-2 leading-tight">
              Story to Build Brand
            </h3>

            <p className="text-xs md:text-sm text-white leading-relaxed font-light max-w-4xl mx-auto mb-0">
              This wasn't just a film. It was a proof of concept: that even without a budget, followers, or recognition, storytelling has the power to transform perception.
            </p>
          </div>

          {/* Two column section */}
          <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
            {/* Left Column - Key Insights */}
            <div className="text-left">
              <h4 className="text-base md:text-lg font-sans font-semibold text-white mb-2 text-center">
                Key Insights
              </h4>
              <ul className="space-y-0.0">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <span className="text-xs text-white font-medium">Authenticity Over Polish:</span>
                    <span className="text-xs text-white ml-2 leading-snug">
                      Raw, candid moments resonated more than scripted content, creating genuine emotional connection.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <span className="text-xs text-white font-medium">Multi-Location Storytelling:</span>
                    <span className="text-xs text-white ml-2 leading-snug">
                      Filming across NYC neighborhoods added depth and visual richness to the narrative.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <span className="text-xs text-white font-medium">Brand Foundation:</span>
                    <span className="text-xs text-white ml-2 leading-snug">
                      The film became a cornerstone asset for all future marketing and outreach efforts.
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          
            {/* Right Column - Impact */}
            <div className="text-left">
              <h4 className="text-base md:text-lg font-sans font-semibold text-white mb-2 text-center">
                Lasting Impact
              </h4>
              <ul className="space-y-0.5">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <span className="text-xs text-white font-medium">Professional Presence:</span>
                    <span className="text-xs text-white ml-2 leading-snug">
                      Transformed an unknown artist into a recognizable brand with clear identity and voice.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <span className="text-xs text-white font-medium">Strategic Asset:</span>
                    <span className="text-xs text-white ml-2 leading-snug">
                      Used as anchor content for pitches to record labels and creative agencies.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <span className="text-xs text-white font-medium">Proof of Concept:</span>
                    <span className="text-xs text-white ml-2 leading-snug">
                      Demonstrated that compelling storytelling can build brands without massive budgets.
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>



          {/* Bottom closing statement */}
          <div className="mt-4 pt-3 border-t border-white/10">
            <p className="text-xs md:text-sm text-white leading-relaxed font-light max-w-4xl mx-auto text-center">
              By focusing on honesty, craft, and vision, the project did more than showcase an artist — it built the foundation of a brand.
            </p>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
