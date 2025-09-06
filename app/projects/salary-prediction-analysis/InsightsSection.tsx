"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/container";
import Image from "next/image";
import { Section } from "../micro-documentary/common/Section";

export function InsightsSection() {
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
              07.
            </span>
            <h2 className="text-lg md:text-xl font-sans font-semibold text-black leading-none mb-0">
              INSIGHTS
            </h2>
          </div>

          <h4 className="text-[clamp(40px,7vw,110px)] font-sans font-medium text-black mb-8 leading-tight text-balance">
            What the Data Reveals
          </h4>

          <div className="space-y-12">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="md:border-r md:border-border/10 md:pr-8">
                <h3 className="text-base md:text-lg font-sans font-medium text-black mb-4">
                  Experience Level Impact
                </h3>
                <p className="text-xs md:text-sm text-black/70 leading-relaxed font-light mb-6">
                  Career progression yields substantial salary increases, especially at the executive tier. 
                  The data shows clear compensation bands that align with industry expectations and 
                  provide a roadmap for career growth.
                </p>

                <h3 className="text-base md:text-lg font-sans font-medium text-black mb-4">
                  Company Size Correlation
                </h3>
                <p className="text-xs md:text-sm text-black/70 leading-relaxed font-light">
                  Larger firms consistently set higher salary baselines across all roles, while smaller 
                  firms compete through specialized roles, equity packages, and growth opportunities.
                </p>
              </div>

              <div className="md:pl-4">
                <h3 className="text-base md:text-lg font-sans font-medium text-black mb-4">
                  Remote Work Trends
                </h3>
                <p className="text-xs md:text-sm text-black/70 leading-relaxed font-light mb-6">
                  Remote jobs are not just competitive — they often surpass onsite pay, particularly 
                  for senior roles. This reflects the premium companies place on accessing global talent 
                  and the value of flexible work arrangements.
                </p>

                <div className="bg-surface rounded-lg p-6 shadow-sm border border-border/10">
                  <h4 className="text-sm font-sans font-medium text-black mb-3">
                    Key Finding
                  </h4>
                  <p className="text-xs text-black/70 leading-relaxed font-light">
                    100% remote positions show 15-20% higher median salaries compared to onsite roles, 
                    indicating a market premium for distributed work capabilities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Section>

      {/* Charts Grid - 2x2 Layout */}
      <section className="pt-4 md:pt-6 lg:pt-8 pb-4 md:pb-6 lg:pb-8 bg-cream">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Experience Level Chart */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex justify-center"
            >
              <Image
                src="/Salary_Distribution_by_Experience_Level.png"
                alt="Salary Distribution by Experience Level"
                width={520}
                height={390}
                className="rounded-lg shadow-lg w-full h-auto"
                priority
              />
            </motion.div>

            {/* Company Size Chart */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              className="flex justify-center"
            >
              <Image
                src="/Salary_Distribution_by_Company_Size.png"
                alt="Salary Distribution by Company Size"
                width={520}
                height={390}
                className="rounded-lg shadow-lg w-full h-auto"
                priority
              />
            </motion.div>

            {/* Remote Work Chart */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="flex justify-center"
            >
              <Image
                src="/Salary_Distribution_by_Remote_Work_Ratio.png"
                alt="Salary Distribution by Remote Work Ratio"
                width={520}
                height={390}
                className="rounded-lg shadow-lg w-full h-auto"
                priority
              />
            </motion.div>

            {/* Location Chart */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              className="flex justify-center"
            >
              <Image
                src="/Salary_Distribution_by_Top_10_Company_Locations.png"
                alt="Salary Distribution by Top 10 Company Locations"
                width={520}
                height={390}
                className="rounded-lg shadow-lg w-full h-auto"
                priority
              />
            </motion.div>
          </div>
        </Container>
      </section>
    </>
  );
}