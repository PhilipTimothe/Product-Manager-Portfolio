"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/container";
import Image from "next/image";

export function TreatmentImages() {
  return (
    <>
      {/* Second Treatment Image */}
      <section className="pt-4 md:pt-6 lg:pt-8 pb-1 md:pb-2 lg:pb-3 bg-cream">
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
                src="/It All Started With - Treatment.003.png"
                alt="It All Started With Treatment"
                width={1040}
                height={780}
                className="rounded-lg"
                priority
              />
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Third Treatment Image */}
      <section className="pt-1 md:pt-2 lg:pt-3 pb-4 md:pb-6 lg:pb-8 bg-cream">
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
                src="/It All Started With - Treatment.002.png"
                alt="It All Started With Treatment Page 2"
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