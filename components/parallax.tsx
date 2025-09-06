'use client';

import { motion, useScroll, useTransform, ScrollOffset } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface ParallaxProps {
  children: ReactNode;
  speed?: number;
  className?: string;
  offset?: [ScrollOffset, ScrollOffset];
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
    offset: offset,
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
