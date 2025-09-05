'use client';

import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface ParallaxProps {
  children: ReactNode;
  speed?: number;
  className?: string;
  offset?: [string, string];
}

export function Parallax({ 
  children, 
  speed = 0.5, 
  className,
  offset = ['start end', 'end start']
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: offset as [string, string],
  });

  const y = useTransform(
    scrollYProgress, 
    [0, 1], 
    [0, speed * 100]
  );

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface ParallaxCardProps {
  children: ReactNode;
  className?: string;
}

export function ParallaxCard({ children, className }: ParallaxCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -20]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.95, 1.02, 1.02, 0.95]);

  return (
    <motion.div
      ref={ref}
      style={{ y, scale }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}