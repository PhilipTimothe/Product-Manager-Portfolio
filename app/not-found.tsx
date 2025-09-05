'use client';

import Link from 'next/link';
import { Container } from '@/components/container';
import { Button } from '@/components/button';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-cream noise-overlay">
      <Navbar />
      
      <main className="pt-32">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center py-20"
          >
            <h1 className="text-6xl font-serif font-semibold text-ink mb-4">
              404
            </h1>
            <h2 className="text-2xl font-serif font-medium text-ink mb-4">
              Page Not Found
            </h2>
            <p className="text-lg text-inkSecondary mb-8 text-balance">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <Button asChild>
              <Link href="/">Go Home</Link>
            </Button>
          </motion.div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}