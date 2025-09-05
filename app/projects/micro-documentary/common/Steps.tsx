import { motion } from "framer-motion";

interface StepsProps {
  steps: Array<{ title: string; description: string }>;
}

export function Steps({ steps }: StepsProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {steps.map((step, index) => (
        <motion.div
          key={step.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="bg-surface rounded-lg p-6 shadow-sm border border-border/10"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center">
              <span className="text-sm font-medium text-accent">
                {index + 1}
              </span>
            </div>
            <h3 className="font-sans font-medium text-black">{step.title}</h3>
          </div>
          <p className="text-sm text-black/70 leading-relaxed font-light">
            {step.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
}