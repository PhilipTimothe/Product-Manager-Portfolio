"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Section } from "../micro-documentary/common/Section";
import Link from "next/link";

export function ImpactResultsSection() {
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
            06.
          </span>
          <h2 className="text-lg md:text-xl font-sans font-semibold text-black leading-none mb-0">
            IMPACT & RESULTS
          </h2>
        </div>

        <h4 className="text-[clamp(40px,7vw,110px)] font-sans font-medium text-black mb-8 leading-tight text-balance">
          Turning Showcase into Growth
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            "Helped secure work with clients including Veja, Glowbar, and Darby Construction",
            "Increased credibility for the studio with professional web presence",
            "Provided a scalable platform for future content in film, photography, and strategy",
          ].map((result, index) => (
            <motion.div
              key={result}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-start gap-3"
            >
              <CheckCircle
                size={20}
                className="text-accent flex-shrink-0 mt-0.5"
              />
              <span className="text-xs md:text-sm text-black/70 leading-relaxed font-light">
                {result}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Link to live site */}
        <div className="text-center">
          <Link
            href="https://whitecoatlab.co"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-accent text-white rounded-lg font-sans font-medium shadow-md hover:shadow-lg transition"
          >
            Visit WhiteCoatLab.co →
          </Link>
        </div>
      </motion.div>
    </Section>
  );
}
