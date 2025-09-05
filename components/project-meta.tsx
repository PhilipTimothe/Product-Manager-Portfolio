'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ProjectMetaProps {
  variant?: 'stack' | 'grid';
  className?: string;
  data: {
    year?: string;
    timeframe?: string;
    category?: string;
    tools?: string[];
    contributions?: string[];
    team?: string[];
  };
}

export function ProjectMeta({ 
  variant = 'stack', 
  className,
  data 
}: ProjectMetaProps) {
  const { year, timeframe, category, tools, contributions, team } = data;

  if (variant === 'stack') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={cn(
          'bg-surface rounded-lg p-8 shadow-sm border border-border/10 max-w-md mx-auto',
          className
        )}
      >
        <div className="space-y-6">
          {year && (
            <div className="text-center">
              <h3 className="text-sm font-medium text-black/60 mb-2">Year</h3>
              <p className="text-lg font-sans font-medium text-black">{year}</p>
            </div>
          )}
          
          {timeframe && (
            <div className="text-center border-t border-border/10 pt-6">
              <h3 className="text-sm font-medium text-black/60 mb-2">Timeframe</h3>
              <p className="text-lg font-sans font-medium text-black">{timeframe}</p>
            </div>
          )}
          
          {category && (
            <div className="text-center border-t border-border/10 pt-6">
              <h3 className="text-sm font-medium text-black/60 mb-2">Category</h3>
              <p className="text-lg font-sans font-medium text-black">{category}</p>
            </div>
          )}
          
          {tools && tools.length > 0 && (
            <div className="text-center border-t border-border/10 pt-6">
              <h3 className="text-sm font-medium text-black/60 mb-4">Tools</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {tools.map((tool, index) => (
                  <motion.span
                    key={tool}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-cream text-black border border-border/20"
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    );
  }

  // Grid variant
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={cn(
        'bg-surface rounded-lg p-8 shadow-sm border border-border/10',
        className
      )}
    >
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="space-y-6">
          {contributions && contributions.length > 0 && (
            <div>
              <h3 className="text-sm font-medium text-black/60 mb-4">My Contribution</h3>
              <div className="space-y-2">
                {contributions.map((contribution, index) => (
                  <motion.div
                    key={contribution}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="text-sm text-black/80 leading-relaxed font-light"
                  >
                    {contribution}
                  </motion.div>
                ))}
              </div>
            </div>
          )}
          
          {team && team.length > 0 && (
            <div>
              <h3 className="text-sm font-medium text-black/60 mb-4">Team</h3>
              <div className="space-y-2">
                {team.map((member, index) => (
                  <motion.div
                    key={member}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="text-sm text-black/80 leading-relaxed font-light"
                  >
                    {member}
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
        
        {/* Right Column */}
        <div className="space-y-6">
          {tools && tools.length > 0 && (
            <div>
              <h3 className="text-sm font-medium text-black/60 mb-4">Tools</h3>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool, index) => (
                  <motion.span
                    key={tool}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-cream text-black border border-border/20"
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>
            </div>
          )}
          
          {year && (
            <div>
              <h3 className="text-sm font-medium text-black/60 mb-2">Year</h3>
              <p className="text-sm text-black/80 font-light">{year}</p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}