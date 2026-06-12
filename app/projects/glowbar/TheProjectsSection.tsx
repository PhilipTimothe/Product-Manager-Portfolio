"use client";

import { motion } from "framer-motion";
import { Section } from "../micro-documentary/common/Section";

const projects = [
  {
    title: "Project One",
    subtitle: "Establishing the System",
    treatments: "LED Light Therapy, Hydrating Masks, Cavitation, High Frequency, Chemical Peels, Dermaplaning, Extractions",
    items: [
      {
        label: "Situation",
        body: "Glowbar needed marketing content for a broad set of treatments, each communicating its value, fitting the brand, and deploying fast across customer-facing channels. A launch communication problem, not a photo shoot.",
      },
      {
        label: "Constraint",
        body: "Quality, speed, and scope in tension, plus a harder challenge: making a diverse mix of treatments (device-based, manual, and product-based) read as one coherent brand rather than a patchwork.",
      },
      {
        label: "Move",
        body: "I started from the business objective, mapped each deliverable to a defined use case, and set a single visual standard — framing, styling, and lighting — that every treatment would follow regardless of type. I ran execution against deadlines, managed the review and revision loop, and protected the project from scope expansion.",
      },
      {
        label: "Proof",
        body: "Seven treatments delivered as a consistent, approved, launch-ready library, now live across Glowbar's core Skincare Services page.",
      },
    ],
  },
  {
    title: "Project Two",
    subtitle: "Extending the System",
    treatments: "Microcurrent, Lymphatic Drainage, Cryo Globes",
    items: [
      {
        label: "Situation",
        body: "Glowbar brought me back to produce content for three additional treatments, with different models, to add to the existing library.",
      },
      {
        label: "Constraint",
        body: "The new assets had to slot seamlessly into the library from the first project, matching the established standard exactly, despite different treatments, different models, and a separate shoot.",
      },
      {
        label: "Move",
        body: "I applied the same disciplined process and the same visual standard, so the new treatments were indistinguishable in style and quality from the originals and the library stayed coherent as it grew.",
      },
      {
        label: "Proof",
        body: "Three treatments added to the live library with no visible seam. The repeat engagement itself confirmed the first project delivered.",
      },
    ],
  },
];

export function TheProjectsSection() {
  return (
    <Section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-12">
          <div className="flex items-baseline justify-center gap-1 mb-4">
            <span className="text-lg md:text-xl text-black/40 font-mono leading-none">
              04.
            </span>
            <h2 className="text-lg md:text-xl font-sans font-semibold text-black leading-none">
              THE PROJECTS
            </h2>
          </div>

          <h4 className="text-[clamp(32px,5vw,80px)] font-sans font-medium text-black mb-4 leading-tight text-balance">
            Two Projects. One Standard.
          </h4>

          <p className="text-sm text-black/70 leading-relaxed font-light max-w-2xl mx-auto">
            The first established the visual system across a broad treatment set; the second
            extended it to new treatments while holding the standard exactly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-gradient-to-br from-[#f9f9f9] to-[#f1f1f1] rounded-2xl p-6 shadow-sm"
            >
              <h3 className="text-base font-sans font-semibold text-black mb-0.5">
                {project.title}
              </h3>
              <p className="text-xs text-accent font-sans font-medium mb-2 uppercase tracking-wide">
                {project.subtitle}
              </p>
              <p className="text-[11px] text-black/50 font-sans font-light mb-4 leading-relaxed">
                <span className="font-medium text-black/70">Treatments: </span>
                {project.treatments}
              </p>

              <div className="space-y-3">
                {project.items.map((item) => (
                  <div key={item.label}>
                    <span className="text-xs font-sans font-semibold text-black">
                      {item.label}
                    </span>
                    <p className="text-xs text-black/70 leading-relaxed font-light mt-0.5">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
