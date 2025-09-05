"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Container } from "@/components/container";
import Image from "next/image";

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 0.8, 0.6]);

  return (
    <>
      {/* Treatment Image */}
      <section className="pt-8 md:pt-12 lg:pt-16 pb-4 md:pb-6 lg:pb-8 bg-cream">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center"
          >
            <div
              className="rounded-2xl p-12 shadow-lg noise-overlay"
              style={{ backgroundColor: "#E8D5D7" }}
            >
              <Image
                src="/It all started - Treatment.001.png"
                alt="It All Started Treatment"
                width={1040}
                height={780}
                className="rounded-lg"
                priority
              />
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Hero Section with Parallax */}
      <section
        ref={heroRef}
        className="relative min-h-[40vh] flex items-center justify-center overflow-hidden pb-0"
      >
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="text-center max-w-4xl mx-auto px-6"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-sans font-medium text-black mb-6 leading-tight text-balance"
          >
            <span className="text-[clamp(40px,7vw,110px)] block">
              Crafting Authenticity in a Noisy Market
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
            className="text-xs md:text-sm text-black/70 font-light max-w-lg mx-auto mb-6 leading-tight text-balance"
          >
            A micro documentary turning an unknown artist into a brand with a
            voice.
          </motion.p>
        </motion.div>
      </section>
    </>
  );
}