"use client";

import { motion } from "framer-motion";
import { Section } from "./common/Section";

export function ExecutionManagementSection() {
  return (
    <Section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Number + Title */}
        <div className="flex items-baseline justify-center gap-2 mb-0">
          <span className="text-lg md:text-xl text-black/40 text-center font-mono leading-none">06.</span>
          <h2 className="text-lg md:text-xl font-sans font-semibold text-black leading-none">
            EXECUTION & MANAGEMENT
          </h2>
        </div>
    
        <h4 className="text-[clamp(40px,7vw,110px)] font-sans font-medium text-black mb-12 text-center leading-tight text-balance">
          The Art of The Process
        </h4>
    
        {/* Phases data */}
        <div className="relative mb-16">
          {/* Base line */}
          <div className="hidden md:block absolute left-0 right-0 top-6 h-px bg-border/20" />
    
          {/* Animated progress line (desktop) */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
            className="hidden md:block absolute left-0 top-6 h-[2px] bg-gradient-to-r from-accent/60 to-accent/20 rounded"
          />
    
          {/* Items */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {[
              {
                key: 'pre',
                title: 'Pre-production',
                when: '',
                points: [
                  'Finalized treatment, locations, and production schedule',
                  'Created sprint board to track milestones',
                ],
                desc:
                  '',
              },
              {
                key: 'prod',
                title: 'Production',
                when: '3 weeks',
                points: [
                  'Shot across NYC (SoHo, Hudson Yards, Harlem, Brooklyn)',
                  'Filmed over seasonal intervals to capture atmosphere and evolution',
                ],
                desc:
                  '',
              },
              {
                key: 'post',
                title: 'Post-production',
                when: '2 weeks',
                points: ['Editing, color grading, sound refinement', 'Iterative feedback cycles with the client'],
                desc: '',
              },
              {
                key: 'deliv',
                title: 'Delivery',
                when: '1 week',
                points: ['Finalized exports in multiple formats for campaigns and outreach'],
                desc: '',
              },
            ].map((p, i) => (
              <motion.div
                key={p.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * i }}
                className="relative"
              >
                {/* Marker (desktop) */}
                <div className="hidden md:flex items-center gap-2 mb-4">
                  <div className="relative z-10 w-3 h-3 rounded-full bg-cream ring-2 ring-accent" />
                  {p.when && (
                    <span className="text-[11px] px-2 py-0.5 rounded-full bg-accent/10 text-accent font-medium">
                      {p.when}
                    </span>
                  )}
                </div>
    
                {/* Marker (mobile) */}
                <div className="md:hidden flex items-center gap-2 mb-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-cream ring-2 ring-accent" />
                  {p.when && (
                    <span className="text-[11px] px-2 py-0.5 rounded-full bg-accent/10 text-accent font-medium">
                      {p.when}
                    </span>
                  )}
                </div>
    
                {/* Title */}
                <h3 className="text-base font-sans font-medium text-black mb-3">{p.title}</h3>
    
                {/* Bullets */}
                <ul className="space-y-1.5 mb-4">
                  {p.points.map((t) => (
                    <li key={t} className="text-xs text-black/70 leading-relaxed font-light list-disc ml-4">
                      {t}
                    </li>
                  ))}
                </ul>
    
                {/* Description (optional) */}
                {p.desc && (
                  <p className="text-xs text-black/60 leading-relaxed font-light">{p.desc}</p>
                )}
              </motion.div>
            ))}
          </div>
    
          {/* Stakeholder engagement rail (desktop only) */}
          <div className="hidden md:block mt-8">
            <div className="text-[12px] font-medium text-black/80 mb-2 tracking-wide">
              STAKEHOLDER ENGAGEMENT
            </div>
            <div className="relative">
              <div className="h-px w-full bg-dotted" />
              <div className="absolute -top-1 right-0 w-2 h-2 rounded-full bg-black/50" />
            </div>
          </div>
        </div>
    
        {/* Tools */}
        <div className="bg-surface rounded-xl p-6 md:p-8 shadow-sm border border-border/10">
          <h3 className="text-base font-sans font-medium text-black mb-6">Tools & Process</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="text-sm font-sans font-medium text-black mb-2">Asset Management</h4>
              <p className="text-xs text-black/70 leading-relaxed font-light">Google Drive for asset management</p>
            </div>
            <div>
              <h4 className="text-sm font-sans font-medium text-black mb-2">Post Production</h4>
              <p className="text-xs text-black/70 leading-relaxed font-light">DaVinci Resolve for post production</p>
            </div>
            <div>
              <h4 className="text-sm font-sans font-medium text-black mb-2">Communication</h4>
              <p className="text-xs text-black/70 leading-relaxed font-light">Weekly client updates for alignment</p>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}