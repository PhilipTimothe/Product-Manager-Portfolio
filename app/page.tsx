'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/container';
import { Button } from '@/components/button';
import { Footer } from '@/components/footer';
import { Parallax } from '@/components/parallax';
import { caseStudies } from '@/lib/content';

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 0.8, 0.6]);
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.08, 0.04, 0]);

  return (
    <div className="min-h-screen bg-cream noise-overlay">
      <main id="main-content">
        {/* Hero Section */}
        <section ref={heroRef} className="relative flex items-start overflow-hidden pt-8 md:pt-12 lg:pt-16 pb-8 md:pb-12 lg:pb-16">
          {/* Background Elements */}
          <motion.div
            style={{ y: bgY, opacity: bgOpacity }}
            className="absolute inset-0 pointer-events-none"
          >
            <div className="absolute top-20 left-10 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
            <div className="absolute bottom-40 right-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
          </motion.div>

          <Container className="relative z-10">
            <motion.div 
              style={{ y: heroY, opacity: heroOpacity }}
              className="text-center max-w-4xl w-full"
            >
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="font-sans font-normal text-black mb-2 leading-tight text-balance text-left"
              >
                <span className="text-lg md:text-xl">Philip Timothe</span> <span className="text-base md:text-lg text-gray-400">— (AI) Product Manager</span>
              </motion.h1>
              
              <div className="mb-6"></div>
              
             <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
                className="
                  font-sans text-black
                  text-[clamp(24px,4vw,48px)]   /* fluid size ~32px to ~72px */
                  leading-[1.08]                  /* tighter line height */
                  tracking-[0.01em]              /* slight negative letter spacing */
                  font-light                      /* light default weight like the ref */
                  max-w-6xl md:max-w-7xl          /* generous line length */
                  mb-12 text-left"
              >
                A product manager who blends
                <span className="font-normal"> data</span>,
                <span className="font-normal italic"> code</span>, and
                <span className="font-normal"> storytelling </span>
                 to turn complex problems into products people
                <span className="font-semibold"> love</span>.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
                className="flex flex-col sm:flex-row gap-4 mb-8"
              >
                <Button size="lg" variant="ghost" asChild className="bg-surface hover:bg-surface/80 text-black border border-border/20 rounded-full px-6 py-3 shadow-sm text-sm">
                  <Link href="/contact">Get in touch</Link>
                </Button>
                <Button size="lg" variant="ghost" asChild className="bg-surface hover:bg-surface/80 text-black border border-border/20 rounded-full px-6 py-3 shadow-sm text-sm">
                  <Link href="/about">Get to Know Me</Link>
                </Button>
              </motion.div>
            </motion.div>
          </Container>
        </section>

        {/* Case Studies Section */}
        <section className="pb-8 md:pb-10 lg:pb-12">
          <Container>
            <h2 className="mb-6 text-right text-lg md:text-xl font-sans text-black">
              Case Studies | Projects
            </h2>
        
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {caseStudies.map((project) => (
                <Link key={project.id} href={project.href} className="group block">
                  <div 
                    className="aspect-square rounded-[20px] mb-6 relative overflow-hidden bg-cover bg-center bg-no-repeat noise-overlay"
                    style={{ 
                      backgroundImage: `url(${project.image})`
                    }}
                  >
                  </div>
                  
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
              ))}
            </div>

          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}