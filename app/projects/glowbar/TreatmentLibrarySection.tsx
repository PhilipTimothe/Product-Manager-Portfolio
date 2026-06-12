"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Section } from "../micro-documentary/common/Section";

const CF_BASE = "https://imagedelivery.net/vIFjcBZ0mNLvqHHWqyidpw";

const treatments = [
  { name: "LED Light Therapy", id: "36084d36-7aeb-4b66-2ca4-57679b05d000" },
  { name: "Hydrating Masks", id: "5b4ab2a2-169b-4ced-495d-f8c4dcdebb00" },
  { name: "Cavitation", id: "bbe6415b-8918-4a3a-d0ef-8ef403fc1500" },
  { name: "High Frequency", id: "a22c0b0c-1749-4df7-c6d6-e5ee03602400" },
  { name: "Chemical Peels", id: "35ecc675-ebc3-4e66-5c39-ba310d20fa00" },
  { name: "Dermaplaning", id: "d8face78-752c-4fdf-663f-7094beac7e00" },
  { name: "Extractions", id: "d16dbaa9-c3e6-4a1c-928c-2bd241643100" },
  { name: "Microcurrent", id: "c33068be-90a0-4970-ac6a-8b8c3a713e00" },
  { name: "Lymphatic Drainage", id: "6eb17146-77b1-4a4f-a905-17e264a82200" },
  { name: "Cryo Globes", id: "1353cebb-b542-42f8-a1f9-d55d21771f00" },
];

export function TreatmentLibrarySection() {
  return (
    <Section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-10">
          <div className="flex items-baseline justify-center gap-1 mb-4">
            <span className="text-lg md:text-xl text-black/40 font-mono leading-none">
              03.
            </span>
            <h2 className="text-lg md:text-xl font-sans font-semibold text-black leading-none">
              THE TREATMENT LIBRARY
            </h2>
          </div>

          <h4 className="text-[clamp(32px,5vw,80px)] font-sans font-medium text-black mb-6 leading-tight text-balance">
            Ten Treatments. One Standard.
          </h4>

          <p className="text-sm text-black/70 leading-relaxed font-light max-w-2xl mx-auto mb-10">
            Ten treatments, multiple models, one consistent visual system, all live on
            Glowbar&apos;s Skincare Services page.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {treatments.map((treatment, i) => (
            <motion.div
              key={treatment.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden group cursor-default">
                <Image
                  src={`${CF_BASE}/${treatment.id}/public`}
                  alt={treatment.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
              <p className="mt-2 text-sm font-sans font-medium text-accent">
                {treatment.name}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
