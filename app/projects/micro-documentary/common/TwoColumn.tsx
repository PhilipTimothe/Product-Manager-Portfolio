import { type ReactNode } from "react";
import { motion } from "framer-motion";

interface TwoColumnProps {
  left: ReactNode;
  right: ReactNode;
}

export function TwoColumn({ left, right }: TwoColumnProps) {
  return (
    <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {left}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {right}
      </motion.div>
    </div>
  );
}