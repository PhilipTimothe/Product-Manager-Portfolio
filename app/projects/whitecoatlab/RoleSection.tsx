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
        viewport={{ once: true, margin: '-50px' }}
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
          Shaping the Vision, Driving the Build
        </h4>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-4 items-center">
          {/* Left column - Text content */}
          <div className="flex flex-col justify-center space-y-4">
            {/* Main description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
              className="space-y-3"
            >
              <p className="text-sm text-black/70 leading-relaxed font-light">
                As <span className="font-medium text-black">Product Manager</span>, 
                I led the end-to-end website development — from discovery through launch. 
                My role was to define the problem, align stakeholders, and build a roadmap 
                that turned a creative vision into a business-ready platform.
              </p>
              <p className="text-sm text-black/70 leading-relaxed font-light">
                I collaborated across <span className="font-medium text-black">design</span>, 
                <span className="font-medium text-black"> engineering</span>, and 
                <span className="font-medium text-black"> content creation</span> to balance 
                artistic presentation with usability, ensuring clear pathways to conversion.
              </p>
            </motion.div>

            {/* Key dimensions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <h3 className="text-base font-sans font-medium text-black">
                Key Dimensions
              </h3>
              
              <div className="space-y-3">
                <div>
                  <h4 className="text-sm font-sans font-medium text-black mb-1">
                    Discovery
                  </h4>
                  <p className="text-sm text-black/70 leading-relaxed font-light">
                    Research, stakeholder alignment, and strategic planning to define the product vision.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-sm font-sans font-medium text-black mb-1">
                    Execution
                  </h4>
                  <p className="text-sm text-black/70 leading-relaxed font-light">
                    Roadmap creation, milestone management, and cross-functional delivery coordination.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-sm font-sans font-medium text-black mb-1">
                    Launch & Impact
                  </h4>
                  <p className="text-sm text-black/70 leading-relaxed font-light">
                    Performance optimization, user feedback integration, and measuring business results.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right column - iPhone image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end overflow-hidden"
          >
            <div className="w-full max-w-lg lg:max-w-xl">
              <Image
                src="https://imagedelivery.net/ly47schtw9lMeXBIbG9ODw/fb5be805-5ccb-41ea-f2ff-8ab150a77000/public"
                alt="WhiteCoatLab Mobile Interface"
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