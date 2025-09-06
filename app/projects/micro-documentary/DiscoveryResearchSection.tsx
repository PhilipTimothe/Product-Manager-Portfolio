"use client";

import { motion } from "framer-motion";
import { FileText, BookOpen, Lightbulb } from "lucide-react";
import { Section } from "./common/Section";

export function DiscoveryResearchSection() {
  return (
    <Section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl"
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

        <h4 className="text-[clamp(40px,7vw,110px)] font-sans font-medium text-right text-black mb-8 leading-tight text-balance">
          Discovery To Reality
        </h4>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="md:border-r md:border-gray-300 md:pr-8 flex flex-col justify-center">
            <div className="max-w-md">
              <h3 className="text-base md:text-lg font-sans font-medium text-black mb-2">
                Stakeholder Alignment
              </h3>
              <p className="text-xs md:text-sm text-black/70 leading-relaxed font-light mb-2">
                Facilitated early workshops with the client, management, and
                production team to clarify messaging and goals.
              </p>

              <h3 className="text-base md:text-lg font-sans font-medium text-black mb-2">
                Market Research
              </h3>
              <p className="text-xs md:text-sm text-black/70 leading-relaxed font-light mb-2">
                Studied comparable artists and campaigns. Insight: unscripted,
                intimate storytelling consistently outperformed polished
                scripted ads.
              </p>

              <h3 className="text-base md:text-lg font-sans font-medium text-black mb-2">
                Outcome
              </h3>
              <p className="text-xs md:text-sm text-black/70 leading-relaxed font-light">
                Informed the treatment: cinematic visuals fused with candid,
                behind-the-scenes interactions.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="md:pl-8 flex flex-col space-y-4">
            {/* Artifact Card */}
            <div className="bg-gray-200 rounded-xl p-6 flex flex-col gap-2 shadow-sm">
              <FileText className="w-6 h-6 text-black/70" />
              <h4 className="text-sm md:text-base font-sans font-semibold text-black">
                Treatment Document
              </h4>
              <p className="text-xs md:text-sm text-black/70 font-light leading-relaxed">
                Defined the narrative arc and visual style, guiding all
                creative decisions.
              </p>
            </div>

            {/* Artifact Card */}
            <div className="bg-gray-200 rounded-xl p-6 flex flex-col gap-2 shadow-sm">
              <BookOpen className="w-6 h-6 text-black/70" />
              <h4 className="text-sm md:text-base font-sans font-semibold text-black">
                Storyboard
              </h4>
              <p className="text-xs md:text-sm text-black/70 font-light leading-relaxed">
                Visualized each scene to ensure clarity before filming.
              </p>
            </div>

            {/* Artifact Card */}
            <div className="bg-gray-200 rounded-xl p-6 flex flex-col gap-2 shadow-sm">
              <Lightbulb className="w-6 h-6 text-black/70" />
              <h4 className="text-sm md:text-base font-sans font-semibold text-black">
                Production Roadmap
              </h4>
              <p className="text-xs md:text-sm text-black/70 font-light leading-relaxed">
                Outlined timelines, milestones, and dependencies across all
                phases.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}