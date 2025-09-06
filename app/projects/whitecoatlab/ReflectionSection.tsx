"use client";

import { motion } from "framer-motion";
import { Section } from "../micro-documentary/common/Section";

export function ReflectionSection() {
  return (
    <Section background="bg-cream" className="text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
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
              The Product Behind the Art
            </h3>

            <p className="text-xs md:text-sm text-white leading-relaxed font-light max-w-4xl mx-auto mb-0">
              This project reinforced the value of combining user-centered discovery with a creative-first execution.
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
                    <span className="text-xs text-white font-medium">Balance is Everything:</span>
                    <span className="text-xs text-white ml-2 leading-snug">
                      Artistic expression and business functionality can coexist when properly prioritized.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <span className="text-xs text-white font-medium">Portfolio-First Strategy:</span>
                    <span className="text-xs text-white ml-2 leading-snug">
                      Leading with quality work immediately establishes credibility and trust.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <span className="text-xs text-white font-medium">User-Centered Approach:</span>
                    <span className="text-xs text-white ml-2 leading-snug">
                      Understanding client needs drove every design and development decision.
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
                    <span className="text-xs text-white font-medium">Scalable Foundation:</span>
                    <span className="text-xs text-white ml-2 leading-snug">
                      Built a platform that grows with the business and supports future content strategies.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <span className="text-xs text-white font-medium">Business Results:</span>
                    <span className="text-xs text-white ml-2 leading-snug">
                      Delivered measurable impact through client acquisition and credibility building.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <span className="text-xs text-white font-medium">Product Management:</span>
                    <span className="text-xs text-white ml-2 leading-snug">
                      Proved that PM principles apply powerfully to creative and brand-focused projects.
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom closing statement */}
          <div className="mt-4 pt-3 border-t border-white/10">
            <p className="text-xs md:text-sm text-white leading-relaxed font-light max-w-4xl mx-auto text-center">
              As Product Manager, I ensured that artistic expression didn't come at the cost of usability, resulting in a site that both showcased creativity and drove tangible business results.
            </p>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}