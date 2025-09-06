"use client";

import { motion } from "framer-motion";
import { Section } from "../micro-documentary/common/Section";

export function ClosingSection() {
  return (
    <Section background="bg-cream" className="text-center pt-2 md:pt-4 pb-2 md:pb-4">
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
          <div className="text-center mb-4">
            <div className="flex items-baseline justify-center gap-1 mb-0">
              <span className="text-lg md:text-xl text-black/40 font-mono leading-none">
                09.
              </span>
              <h2 className="text-lg md:text-xl font-sans font-semibold text-black leading-none mb-0">
                RISK MITIGATION THROUGH DATA
              </h2>
            </div>

            <h3 className="text-[clamp(48px,8vw,120px)] font-sans font-medium text-black mb-2 leading-tight">
              From Prediction to Protection
            </h3>

            <p className="text-xs md:text-sm text-black leading-relaxed font-light max-w-4xl mx-auto mb-0">
              This project demonstrated the power of machine learning to reduce financial risk and enhance lending practices. By blending technical rigor with business strategy, I delivered a predictive framework that not only identified risk but also informed actionable strategies to reduce defaults.
            </p>
          </div>

          {/* Two column section */}
          <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
            {/* Left Column - Technical Achievement */}
            <div className="text-left">
              <h4 className="text-base md:text-lg font-sans font-semibold text-black mb-2 text-center">
                Technical Achievement
              </h4>
              <ul className="space-y-0.5">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <span className="text-xs text-black font-medium">Model Performance:</span>
                    <span className="text-xs text-black ml-2 leading-snug">
                      Achieved 97% precision with Random Forest while maintaining strong recall for default detection.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <span className="text-xs text-black font-medium">Data Engineering:</span>
                    <span className="text-xs text-black ml-2 leading-snug">
                      Successfully handled class imbalance and engineered meaningful features from financial data.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <span className="text-xs text-black font-medium">Interpretability:</span>
                    <span className="text-xs text-black ml-2 leading-snug">
                      Balanced model accuracy with explainability for stakeholder confidence and regulatory compliance.
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          
            {/* Right Column - Business Impact */}
            <div className="text-left">
              <h4 className="text-base md:text-lg font-sans font-semibold text-black mb-2 text-center">
                Business Impact
              </h4>
              <ul className="space-y-0.5">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <span className="text-xs text-black font-medium">Risk Reduction:</span>
                    <span className="text-xs text-black ml-2 leading-snug">
                      Provided early warning system for high-risk borrowers to enable proactive intervention.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <span className="text-xs text-black font-medium">Strategic Framework:</span>
                    <span className="text-xs text-black ml-2 leading-snug">
                      Delivered actionable recommendations for credit policies and risk-based pricing strategies.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <span className="text-xs text-black font-medium">Scalable Solution:</span>
                    <span className="text-xs text-black ml-2 leading-snug">
                      Created reusable methodology for ongoing risk assessment and model improvement.
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom closing statement */}
          <div className="mt-4 pt-3 border-t border-black/10">
            <p className="text-xs md:text-sm text-black leading-relaxed font-light max-w-4xl mx-auto text-center">
              By combining machine learning expertise with financial domain knowledge, this project transformed raw data into a strategic asset for risk management and business growth.
            </p>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}