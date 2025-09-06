'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Copy } from "lucide-react";
import { BackButton } from "@/components/back-button";
import { Footer } from "@/components/footer";

export default function Contact() {
  const [copyNotification, setCopyNotification] = useState(false);

  const handleEmailClick = async () => {
    try {
      await navigator.clipboard.writeText("Philip.C.Timothe@gmail.com");
      setCopyNotification(true);
      setTimeout(() => setCopyNotification(false), 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-cream noise-overlay">
      <BackButton />

      {/* Main content centered */}
      <div className="flex-1 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl w-full px-6 text-center"
        >
          {/* Header */}
          <div className="flex items-baseline justify-center gap-1 mb-4">
            <span className="text-lg md:text-xl text-black/40 font-mono leading-none">
              01.
            </span>
            <h2 className="text-lg md:text-xl font-sans font-semibold text-black leading-none">
              GET IN TOUCH
            </h2>
          </div>

          {/* Title */}
          <h4 className="text-[clamp(40px,7vw,110px)] font-sans font-medium text-black mb-12 leading-tight text-balance">
            Let's Work Together
          </h4>

          {/* Paragraph */}
          <p className="text-sm md:text-base text-black/70 leading-relaxed font-light max-w-2xl mx-auto mb-12">
            Every project starts with a conversation. Whether it's shaping a product, 
            crafting a story, or exploring an idea, I'm always open to meaningful collaborations. 
            Reach out and let's create something impactful together.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              onClick={handleEmailClick}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-accent/10 hover:bg-accent/20 text-black px-8 py-4 rounded-xl font-sans font-medium shadow-sm transition-all duration-200 flex items-center justify-center gap-2"
            >
              <Copy size={18} />
              Philip.C.Timothe@gmail.com
            </motion.button>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="https://www.linkedin.com/in/philiptimothe/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black hover:bg-black/80 text-white px-8 py-4 rounded-xl font-sans font-medium shadow-sm transition-all duration-200 inline-block"
              >
                LinkedIn
              </Link>
            </motion.div>
          </div>

          {/* Notification container with fixed height */}
          <div className="h-6 mt-4 flex items-center justify-center">
            {copyNotification && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className="text-sm text-accent font-medium"
              >
                Email copied to clipboard!
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>

      {/* Footer pinned at bottom */}
      <Footer />
    </div>
  );
}
