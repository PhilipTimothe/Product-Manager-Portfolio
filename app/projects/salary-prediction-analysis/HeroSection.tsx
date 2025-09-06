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
      {/* Hero Section with Parallax */}
       <section
         ref={heroRef}
         className="relative min-h-[5vh] flex items-center justify-center overflow-hidden mt-4 pt-2 md:pt-4 lg:pt-6 pb-0 md:pb-2 lg:pb-4"
      >
        <Container>
          <motion.div
            style={{ y: heroY, opacity: heroOpacity }}
            className="relative min-h-[20vh] flex items-center justify-center overflow-hidden pb-0"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="font-sans font-medium text-black mb-2 leading-tight text-balance"
            >
              <span className="text-[clamp(40px,7vw,110px)] text-center block">
                Salary Prediction Analysis
              </span>
            </motion.h1>
          </motion.div>
        </Container>
       </section>
     </>
  );
}