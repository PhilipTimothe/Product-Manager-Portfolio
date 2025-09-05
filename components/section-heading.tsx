'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
  level?: 1 | 2 | 3;
  serif?: boolean;
}

export function SectionHeading({ 
  children, 
  className, 
  level = 2, 
  serif = true 
}: SectionHeadingProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <Tag
        className={cn(
          'text-ink tracking-tight',
          serif && 'font-serif',
          {
            'text-4xl md:text-5xl lg:text-6xl font-semibold': level === 1,
            'text-2xl md:text-3xl lg:text-4xl font-medium': level === 2,
            'text-xl md:text-2xl font-medium': level === 3,
          },
          className
        )}
      >
        {children}
      </Tag>
    </motion.div>
  );
}