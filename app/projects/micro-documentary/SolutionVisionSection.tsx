"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/container";
import Image from "next/image";
import { Section } from "./common/Section";

export function SolutionVisionSection() {
  return (
    <>
      <Section className="pb-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <div className="flex items-baseline gap-1 mb-0">
            <span className="text-lg md:text-xl text-black/40 font-mono leading-none">
              05.
            </span>
            <h2 className="text-lg md:text-xl font-sans font-semibold text-black leading-none mb-0">
              SOLUTION & VISION
            </h2>
          </div>

          <h4 className="text-[clamp(40px,7vw,110px)] font-sans font-medium text-black mb-8 leading-tight text-balance">
            Creative Direction
          </h4>

          <div className="space-y-12 text-center">
            {/* Approach */}
            <div>
              <h3 className="text-base md:text-lg font-sans font-medium text-black mb-2">
                Approach
              </h3>
              <p className="text-xs md:text-sm text-black/70 leading-relaxed font-light mb-2">
                After exploring three different approaches — a traditional music
                video, a social media campaign, and documentary storytelling —
                we chose the micro documentary format.
              </p>
              <p className="text-xs md:text-sm text-black/70 leading-relaxed font-light mb-2">
                The goal was emotional resonance: a story the audience could
                feel.
              </p>
            </div>

            {/* Vision */}
            <div>
              <h3 className="text-base md:text-lg font-sans font-medium text-black mb-2">
                Vision
              </h3>
              <p className="text-xs md:text-sm text-black/70 leading-relaxed font-light mb-2">
                This approach let us showcase the artist's personality, creative
                process, and authentic moments while building a compelling
                narrative that viewers could invest in emotionally.
              </p>
              <p className="text-xs md:text-sm text-black/70 leading-relaxed font-light mb-0">
                The documentary format provided credibility and depth that the
                other approaches could not match.
              </p>
            </div>
          </div>
        </motion.div>
      </Section>

      {/* Treatment 005 Image */}
      <section className="pt-4 md:pt-6 lg:pt-8 pb-4 md:pb-6 lg:pb-8 bg-cream">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center"
          >
            <div
              className="rounded-2xl p-12 shadow-lg noise-overlay"
              style={{ backgroundColor: "#DAC4BF" }}
            >
              <Image
                src="/It All Started With - Treatment.005.png"
                alt="It All Started With Treatment Page 5"
                width={1040}
                height={780}
                className="rounded-lg"
                priority
              />
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  );
}