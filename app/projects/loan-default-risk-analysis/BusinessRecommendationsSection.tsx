"use client";

import { motion } from "framer-motion";
import { Section } from "../micro-documentary/common/Section";

export function BusinessRecommendationsSection() {
  return (
    <Section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl"
      >
        <div className="flex items-baseline gap-1 mb-0">
          <span className="text-lg md:text-xl text-black/40 font-mono leading-none">
            08.
          </span>
          <h2 className="text-lg md:text-xl font-sans font-semibold text-black leading-none mb-0">
            BUSINESS RECOMMENDATIONS
          </h2>
        </div>

        <h4 className="text-[clamp(40px,7vw,110px)] font-sans font-medium text-black mb-8 leading-tight text-balance">
          Turning Predictions into Action
        </h4>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {[
            {
              title: "Early Intervention",
              description: "Flag borrowers with early payment delays (PAY_0, PAY_2) for proactive outreach and support programs.",
              action: "Implement automated alert system for payment delays"
            },
            {
              title: "Credit Limit Adjustments", 
              description: "Apply stricter checks for borrowers with low limits and repayment issues to prevent over-extension.",
              action: "Deploy dynamic credit limit adjustment based on risk scores"
            },
            {
              title: "Payment Behavior Monitoring",
              description: "Real-time alert system for repeated late payments to enable immediate intervention strategies.",
              action: "Build dashboard for payment pattern monitoring"
            },
            {
              title: "Risk-Based Interest Rates",
              description: "Dynamic loan rates tied to default probability scores to better price risk and improve profitability.",
              action: "Integrate risk scoring into pricing algorithms"
            }
          ].map((recommendation, index) => (
            <motion.div
              key={recommendation.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-surface rounded-lg p-6 shadow-sm border border-border/10"
            >
              <h3 className="text-base font-sans font-medium text-black mb-3">
                {recommendation.title}
              </h3>
              <p className="text-xs md:text-sm text-black/70 leading-relaxed font-light mb-4">
                {recommendation.description}
              </p>
              <div className="bg-accent/10 rounded-md p-3">
                <p className="text-xs text-accent font-medium">
                  Action: {recommendation.action}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}