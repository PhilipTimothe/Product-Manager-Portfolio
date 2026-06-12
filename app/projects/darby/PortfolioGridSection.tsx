"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Section } from "../micro-documentary/common/Section";

const CF_BASE = "https://imagedelivery.net/vIFjcBZ0mNLvqHHWqyidpw";

const projects = [
  { name: "Abingdon Square Veterinary", id: "182ddeb2-b686-4276-6106-c25b89862500" },
  { name: "Atlassian", id: "f07fe122-bfd7-4f01-d04c-cef5587e2900" },
  { name: "Cutler and Gross", id: "a96a1da8-d579-490f-c436-10950282dd00" },
  { name: "GetYourGuide", id: "3032ce60-bcf6-4e1a-153b-872dde0c1a00" },
  { name: "Glowbar Hoboken", id: "44fdfcb7-243e-4577-98bf-8fbf48a74700" },
  { name: "Glowbar Jersey City", id: "37f23601-813f-4181-b0d2-ee500670b000" },
  { name: "Glowbar Long Island City", id: "a74356f2-9339-4468-b63a-6210aaf8a900" },
  { name: "Glowbar Murray Hill", id: "88aa5517-a5b8-495d-339b-1de11cf53f00" },
  { name: "Glowbar Prospect Heights", id: "a5f239ed-565f-4722-0099-26893f01b100" },
  { name: "Loaf on Paper", id: "1b327efe-1cba-4279-b28c-4fc7cb778100" },
  { name: "MCU Flatbush", id: "ea351c18-521a-4c69-bcb0-5a7ad872e500" },
  { name: "MCU Georgetown", id: "3b9d528e-f2f4-4253-ae1c-c09857b20200" },
  { name: "MCU Hempstead", id: "d95cbb1c-72af-45b1-274c-6ab4c38efc00" },
  { name: "MCU Jay St", id: "340da61e-80e3-4085-f232-5bfc3ab4b800" },
  { name: "MCU Rego Park", id: "8d824689-7d2f-43bd-3ea3-d306ebe64c00" },
  { name: "MCU South Bronx", id: "1f8d866e-195d-458d-11df-8b3ab9f42200" },
  { name: "MCU Spring Creek", id: "cebcea55-6208-44ac-d44b-7e8640c79700" },
  { name: "MCU Springfield", id: "6afa54a2-405e-4b22-a515-a54701a84700" },
  { name: "MCU West Harlem", id: "9c838b86-9652-4a1b-5d92-218949709000" },
  { name: "Notion", id: "9f070ef1-4774-4e07-b00e-7c48c452af00" },
  { name: "Private Family Office", id: "826e1162-de87-4015-1f9f-186275668100" },
  { name: "Private Residence – Lenox Hill", id: "1cf0916b-bc60-4372-7f0e-fea032cb6f00" },
  { name: "Studio V Architecture", id: "9080b9c5-fa89-457e-b9d1-cb64969f5a00" },
  { name: "Suzanne Williamsburg", id: "07dec99d-233b-405b-6831-94734004bd00" },
  { name: "Tend Hell's Kitchen", id: "700ce0b6-3ce4-4e4c-aeed-67ab4001ed00" },
  { name: "Veja Flagship Store", id: "ae9ad5eb-9379-45db-088c-cd76764dd700" },
  { name: "Veja US Corporate HQ", id: "6a9095dd-86a1-4327-7d9b-a95c64b59b00" },
  { name: "WHTN Noho", id: "bbd18fa8-f708-4ac1-1f4c-95763d114a00" },
  { name: "WHTN Upper West Side", id: "ef23f12e-be54-4d28-9268-29e493374900" },
];

export function PortfolioGridSection() {
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
              PORTFOLIO AT A GLANCE
            </h2>
          </div>

          <h4 className="text-[clamp(32px,5vw,80px)] font-sans font-medium text-black mb-6 leading-tight text-balance">
            29 Projects. One Standard.
          </h4>

          <p className="text-sm text-black/70 leading-relaxed font-light max-w-2xl mx-auto mb-4">
            Twenty-nine projects across two years, for one client who kept coming back.
            The work fell into a few repeatable types:
          </p>

          <ul className="text-sm text-black/70 font-light space-y-1 max-w-xl mx-auto text-left mb-10">
            <li>
              <span className="font-medium text-black">Completed-project showcases</span>
              {" — "}polished assets of finished construction for public and client-facing use.
            </li>
            <li>
              <span className="font-medium text-black">Progress and job-site documentation</span>
              {" — "}capturing phases of work before they were covered or completed.
            </li>
            <li>
              <span className="font-medium text-black">Brand and marketing content</span>
              {" — "}short pieces built to position Darby&apos;s work for new business.
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="relative aspect-[4/3] rounded-lg overflow-hidden group"
            >
              <Image
                src={`${CF_BASE}/${project.id}/public`}
                alt={project.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <span className="absolute bottom-2 left-2 right-2 text-white text-[10px] font-sans font-medium leading-tight">
                {project.name}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
