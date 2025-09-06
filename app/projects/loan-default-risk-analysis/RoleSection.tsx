"use client";

import { motion } from "framer-motion";
import { Section } from "../micro-documentary/common/Section";

export function RoleSection() {
  return (
    <Section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl"
      >
        <div className="flex items-baseline gap-1 mb-0">
          <span className="text-lg md:text-xl text-black/40 font-mono leading-none">
            02.
          </span>
          <h2 className="text-lg md:text-xl font-sans font-semibold text-black leading-none mb-0">
            ROLE
          </h2>
        </div>

        <h4 className="text-[clamp(40px,7vw,110px)] font-sans font-medium text-black mb-8 leading-tight text-balance">
          From Data Wrangling to Deployment
        </h4>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="md:border-r md:border-border/10 md:pr-8">
            <p className="text-xs md:text-sm text-black/70 leading-relaxed font-light mb-6">
              As <span className="font-medium text-black">Data Engineer</span>, 
              I led the end-to-end lifecycle of this project: data preprocessing, feature engineering, 
              model selection, evaluation, and recommendations.
            </p>
            <p className="text-xs md:text-sm text-black/70 leading-relaxed font-light">
              I combined technical expertise in Python, SQL, and Jupyter with data visualization 
              in Tableau to balance predictive accuracy with interpretability.
            </p>
          </div>

          <div className="md:pl-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
              {/* Left column with vertical label */}
              <div className="md:col-span-1 flex items-center justify-center h-full">
                <h3 className="text-sm md:text-lg font-sans font-medium text-black transform -rotate-90 origin-center whitespace-nowrap">
                  Key Dimensions
                </h3>
              </div>

              {/* Right column with content */}
              <div className="md:col-span-3">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xs md:text-sm font-sans font-medium text-black mb-1">
                      Data Engineering
                    </h4>
                    <p className="text-xs md:text-sm text-black/70 leading-relaxed font-light">
                      Cleaned, preprocessed, and engineered features from financial datasets
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xs md:text-sm font-sans font-medium text-black mb-1">
                      Model Development
                    </h4>
                    <p className="text-xs md:text-sm text-black/70 leading-relaxed font-light">
                      Built and validated predictive models using machine learning algorithms
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xs md:text-sm font-sans font-medium text-black mb-1">
                      Risk Analysis
                    </h4>
                    <p className="text-xs md:text-sm text-black/70 leading-relaxed font-light">
                      Translated technical findings into business recommendations for risk mitigation
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}