"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/container";
import Image from "next/image";
import { FileText, BookOpen, Lightbulb } from "lucide-react";
import { Section } from "../micro-documentary/common/Section";

export function DiscoveryResearchSection() {
  return (
    <Section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        {/* Header */}
        <div className="flex items-baseline justify-end gap-1 mb-0">
          <span className="text-lg md:text-xl text-black/40 font-mono leading-none">
            04.
          </span>
          <h2 className="text-lg md:text-xl font-sans font-semibold text-black leading-none mb-0">
            DISCOVERY & RESEARCH
          </h2>
        </div>

        <h4 className="text-[clamp(40px,7vw,110px)] font-sans font-medium text-right text-black mb-12 leading-tight text-balance">
          From Insights to Blueprint
        </h4>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="md:border-r md:border-border/10 md:pr-10 flex flex-col justify-center space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-3"
            >
              <h3 className="text-base md:text-lg font-sans font-semibold text-black mb-1">
                Stakeholder Alignment
              </h3>
              <p className="text-xs md:text-sm text-black/70 leading-relaxed font-light">
                We defined a north star: <span className="font-medium text-black">credibility through creativity</span>. 
                Every decision — from structure to aesthetics — was measured against this goal.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-3"
            >
              <h3 className="text-base md:text-lg font-sans font-semibold text-black mb-1">
                Market Research
              </h3>
              <p className="text-xs md:text-sm text-black/70 leading-relaxed font-light">
                Competitor analysis revealed a pattern: visitors wanted <span className="font-medium text-black">fast proof of quality</span>. 
                Portfolios worked best when they were simple, immediate, and unfiltered.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-3"
            >
              <h3 className="text-base md:text-lg font-sans font-semibold text-black mb-1">
                Outcome
              </h3>
              <p className="text-xs md:text-sm text-black/70 leading-relaxed font-light">
                The blueprint: a site where <span className="font-medium text-black">art led the conversation</span>, 
                but pathways to book and connect remained seamless and frictionless.
              </p>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="md:pl-10 flex flex-col space-y-6">
            {[
              {
                icon: <FileText className="w-6 h-6 text-accent" />,
                title: "Sitemap",
                text: "A clear information flow where portfolio and contact took center stage.",
              },
              {
                icon: <BookOpen className="w-6 h-6 text-accent" />,
                title: "Wireframes",
                text: "Low-fi explorations balancing bold visuals with effortless navigation.",
              },
              {
                icon: <Lightbulb className="w-6 h-6 text-accent" />,
                title: "Creative Treatments",
                text: "Moodboards and visual sketches ensuring consistency and brand edge.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="bg-gradient-to-br from-[#f9f9f9] to-[#f1f1f1] rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
              >
                {item.icon}
                <h4 className="text-base font-sans font-semibold text-black mt-2">
                  {item.title}
                </h4>
                <p className="text-sm text-black/70 leading-relaxed font-light">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
