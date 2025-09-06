"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Container } from "@/components/container";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { caseStudies } from "@/lib/content";

interface UpNextSectionProps {
  currentProjectId?: string;
}

export function UpNextSection({ currentProjectId }: UpNextSectionProps) {
  const currentIndex = caseStudies.findIndex(
    (p) => p.id === currentProjectId
  );

  let displayProjects = [];

  if (currentIndex !== -1) {
    // Compute next two in sequence
    const nextIndex = (currentIndex + 1) % caseStudies.length;
    const secondIndex = (currentIndex + 2) % caseStudies.length;

    displayProjects = [caseStudies[nextIndex]];

    // Only push the second project if it’s not the same as the first
    if (secondIndex !== nextIndex) {
      displayProjects.push(caseStudies[secondIndex]);
    }
  } else {
    // Fallback: first two
    displayProjects = caseStudies.slice(0, 2);
  }

  if (!displayProjects.length) return null;

  return (
    <section className="py-16 md:py-24 bg-cream border-t border-border/20">
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-start mb-12"
        >
          <div className="flex items-center gap-4">
            <h2 className="text-[clamp(32px,5vw,64px)] font-sans font-medium text-black leading-tight">
              Up Next
            </h2>
            <ArrowRightIcon className="w-8 h-8 text-black" strokeWidth={2} />
          </div>
        </motion.div>

        {/* Projects */}
        <div className="grid gap-8 md:grid-cols-2">
          {displayProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="max-w-md mx-auto"
            >
              <Link href={project.href} className="group block">
                <div
                  className="aspect-square rounded-[20px] mb-6 relative overflow-hidden bg-cover bg-center bg-no-repeat noise-overlay group-hover:scale-[1.02] transition-transform duration-300"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-xs font-medium text-black">
                    <span className="font-semibold">{project.meta[0]}</span>
                    <span className="text-black/60">{project.meta[1]}</span>
                    <span className="text-black/80">{project.meta[2]}</span>
                  </div>
                  <p className="text-xs leading-relaxed text-black/80">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-2 text-xs font-medium text-black group-hover:gap-3 transition-all duration-200">
                    <span>{project.id.includes('analysis') ? 'Project' : 'Case Study'}</span>
                    <span>→</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}