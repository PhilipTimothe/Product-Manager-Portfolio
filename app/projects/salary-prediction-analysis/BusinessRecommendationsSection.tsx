"use client";

import { motion } from "framer-motion";
import { Section } from "../micro-documentary/common/Section";

export function BusinessRecommendationsSection() {
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
            08.
          </span>
          <h2 className="text-lg md:text-xl font-sans font-semibold text-black leading-none mb-0">
            BUSINESS RECOMMENDATIONS
          </h2>
        </div>

        <h4 className="text-[clamp(40px,7vw,110px)] font-sans font-medium text-black mb-8 leading-tight text-balance">
          Turning Analysis into Strategy
        </h4>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {[
            {
              title: "Competitive Benchmarking",
              description: "Align pay structures with industry benchmarks to attract and retain top talent. Use data-driven salary bands to ensure competitive positioning.",
              action: "Implement quarterly salary reviews against market data"
            },
            {
              title: "Workforce Planning", 
              description: "Build retention through compensation pathways tied to career growth. Create clear progression models based on experience and performance.",
              action: "Develop transparent career ladders with salary expectations"
            },
            {
              title: "Global Positioning",
              description: "Account for regional salary variations when expanding or hiring remotely. Leverage geographic arbitrage while maintaining competitive offers.",
              action: "Create location-adjusted compensation frameworks"
            },
            {
              title: "Data-Driven Recruitment",
              description: "Use predictive models to align offers with market reality and reduce turnover. Optimize hiring budgets based on role requirements and market conditions.",
              action: "Deploy salary prediction tools in recruitment workflows"
            }
          ].map((recommendation, index) => (
            <motion.div
              key={recommendation.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-surface rounded-lg p-2 shadow-sm border border-border/10"
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

        {/* Links Section */}
        <div className="bg-creamMuted rounded-lg p-2 md:p-4">
          <h3 className="text-base md:text-lg font-sans font-medium text-black mb-2">
            Project Resources
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <a
              href="https://github.com/PhilipTimothe/Machine-Learning-Project-I"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-surface rounded-lg shadow-sm border border-border/10 hover:shadow-md transition-all duration-200"
            >
              <img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" 
                alt="GitHub" 
                className="w-6 h-6"
              />
              <div>
                <h4 className="text-sm font-sans font-medium text-black">View Code</h4>
                <p className="text-xs text-black/60">GitHub Repository</p>
              </div>
            </a>
            
            <a
              href="https://machine-learning-project-i-ewi57ecwky.streamlit.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-surface rounded-lg shadow-sm border border-border/10 hover:shadow-md transition-all duration-200"
            >
              <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">S</span>
              </div>
              <div>
                <h4 className="text-sm font-sans font-medium text-black">Live Demo</h4>
                <p className="text-xs text-black/60">Interactive Application</p>
              </div>
            </a>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}