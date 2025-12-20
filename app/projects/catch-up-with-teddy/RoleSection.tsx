"use client";

import { motion } from "framer-motion";
import { Section } from "../micro-documentary/common/Section";
import Image from "next/image";

export function RoleSection() {
  return (
    <Section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        {/* Header */}
        <div className="flex items-baseline gap-1 mb-0">
          <span className="text-lg md:text-xl text-black/40 font-mono leading-none">
            02.
          </span>
          <h2 className="text-lg md:text-xl font-sans font-semibold text-black leading-none">
            ROLE
          </h2>
        </div>

        {/* Tagline */}
        <h4 className="text-[clamp(40px,7vw,110px)] font-sans font-medium text-black mb-2 leading-tight text-balance">
          Shaping the Format, Driving the System
        </h4>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-4 items-center">
          {/* Left column - Text content */}
          <div className="flex flex-col justify-center space-y-4">
            {/* Main description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="space-y-3"
            >
              <p className="text-sm text-black/70 leading-relaxed font-light">
                I led this project end-to-end across both{" "}
                <span className="font-medium text-black">
                  product and content strategy
                </span>
                . On the product side, I designed the format, defined success
                criteria, and structured the series as a repeatable system
                rather than one-off videos.
              </p>
              <p className="text-sm text-black/70 leading-relaxed font-light">
                On the content side, I handled{" "}
                <span className="font-medium text-black">
                  creative direction
                </span>
                ,<span className="font-medium text-black"> filming</span>,
                <span className="font-medium text-black"> editing</span>, and
                <span className="font-medium text-black"> packaging</span>. This
                dual role allowed creative decisions to stay grounded in
                strategy while ensuring the system remained realistic to execute
                and scale.
              </p>
            </motion.div>

            {/* Key dimensions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <h3 className="text-base font-sans font-medium text-black">
                Key Dimensions
              </h3>

              <div className="space-y-3">
                <div>
                  <h4 className="text-sm font-sans font-medium text-black mb-1">
                    Product Strategy
                  </h4>
                  <p className="text-sm text-black/70 leading-relaxed font-light">
                    Format design, success criteria definition, and system
                    architecture for scalable content production.
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-sans font-medium text-black mb-1">
                    Content Creation
                  </h4>
                  <p className="text-sm text-black/70 leading-relaxed font-light">
                    Creative direction, filming, editing, and packaging across
                    all episodes and touchpoints.
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-sans font-medium text-black mb-1">
                    System Design
                  </h4>
                  <p className="text-sm text-black/70 leading-relaxed font-light">
                    Workflow optimization, cadence planning, and sustainable
                    execution frameworks.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right column - Phone mockup placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end overflow-visible"
          >
            <div className="relative w-full max-w-sm bg-transparent">
              {/* Realistic deep drop shadow */}
              <div className="absolute inset-0 -z-10 rounded-[2rem] shadow-[0_40px_80px_rgba(0,0,0,0.4)] bg-transparent"></div>

              {/* Soft bottom glow for realism */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[85%] h-[60px] bg-gradient-to-t from-black/20 to-transparent rounded-full blur-3xl"></div>

              {/* The actual phone image */}
              <Image
                src="https://imagedelivery.net/ly47schtw9lMeXBIbG9ODw/46daeb7f-acfa-4a45-076e-f30c33466e00/public"
                alt="Episode 3 CatchUpwithTeddy"
                width={600}
                height={1200}
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </Section>
  );
}
