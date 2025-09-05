'use client';

import { useState } from 'react';
import { Container } from '@/components/container';
import { CaseStudyCard } from '@/components/case-study-card';
import { SectionHeading } from '@/components/section-heading';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Button } from '@/components/button';
import { caseStudies } from '@/lib/content';
import { motion } from 'framer-motion';

export default function Work() {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const categories = ['All', 'Product Design', 'Mobile App', 'Web Design'];
  
  const filteredStudies = activeFilter === 'All' 
    ? caseStudies 
    : caseStudies.filter(study => study.category === activeFilter);

  return (
    <div className="min-h-screen bg-cream noise-overlay">
      <Navbar />
      
      <main className="pt-32">
        <Container>
          <div className="text-center mb-16">
            <SectionHeading level={1} className="mb-6">
              Case Studies
            </SectionHeading>
            <p className="text-lg text-inkSecondary max-w-2xl mx-auto text-balance">
              Exploring the intersection of design, technology, and human behavior through detailed project breakdowns
            </p>
          </div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-16"
          >
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeFilter === category ? 'primary' : 'ghost'}
                onClick={() => setActiveFilter(category)}
                className="text-sm"
              >
                {category}
              </Button>
            ))}
          </motion.div>

          {/* Case Studies Grid */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {filteredStudies.map((study, index) => (
              <CaseStudyCard
                key={study.id}
                title={study.title}
                subtitle={study.subtitle}
                readTime={study.readTime}
                href={`/case/${study.id}`}
                coverImage={study.coverImage}
                tags={study.tags}
                className={index % 2 === 1 ? 'md:mt-8' : ''}
              />
            ))}
          </div>
          
          {filteredStudies.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-inkSecondary">No projects found for this category.</p>
            </motion.div>
          )}
        </Container>
      </main>

      <Footer />
    </div>
  );
}