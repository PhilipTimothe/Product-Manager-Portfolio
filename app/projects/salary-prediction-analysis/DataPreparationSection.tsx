"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/container";
import Image from "next/image";
import { Section } from "../micro-documentary/common/Section";

export function DataPreparationSection() {
  return (
    <>
      <Section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <div className="flex items-baseline justify-center gap-1 mb-0">
            <span className="text-lg md:text-xl text-black/40 font-mono leading-none">
              04.
            </span>
            <h2 className="text-lg md:text-xl font-sans font-semibold text-black leading-none mb-0">
              DATA PREPARATION
            </h2>
          </div>

          <h4 className="text-[clamp(40px,7vw,110px)] font-sans font-medium text-black mb-8 leading-tight text-balance">
            From Raw Data to Reliable Inputs
          </h4>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="md:border-r md:border-border/10 md:pr-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-base md:text-lg font-sans font-medium text-black mb-2">
                    Data Cleaning
                  </h3>
                  <p className="text-xs md:text-sm text-black/70 leading-relaxed font-light">
                    Cleaned and normalized datasets for consistency, handling missing values 
                    and removing outliers that could skew model performance.
                  </p>
                </div>

                <div>
                  <h3 className="text-base md:text-lg font-sans font-medium text-black mb-2">
                    Feature Engineering
                  </h3>
                  <p className="text-xs md:text-sm text-black/70 leading-relaxed font-light">
                    Engineered features to capture seniority levels, company size categories, 
                    and work flexibility metrics for better model interpretability.
                  </p>
                </div>

                <div>
                  <h3 className="text-base md:text-lg font-sans font-medium text-black mb-2">
                    Exploratory Analysis
                  </h3>
                  <p className="text-xs md:text-sm text-black/70 leading-relaxed font-light">
                    Applied exploratory visualizations to uncover initial patterns and 
                    validate assumptions about salary distributions.
                  </p>
                </div>
              </div>
            </div>

            <div className="md:pl-4">
              <div className="bg-surface rounded-lg p-6 shadow-sm border border-border/10">
                <h3 className="text-base md:text-lg font-sans font-medium text-black mb-4">
                  Tech Stack
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
                    { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
                    { name: "Scikit-learn", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
                    { name: "Jupyter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" }
                  ].map((tech) => (
                    <div key={tech.name} className="flex items-center gap-3">
                      <img src={tech.icon} alt={tech.name} className="w-6 h-6" />
                      <span className="text-xs text-black/70 font-light">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Section>

    </>
  );
}