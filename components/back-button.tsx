'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Container } from './container';
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

export function BackButton() {
  return (
    <div className="pt-5 pb-0 bg-cream">
      <Container>
        <Link 
          href="/"
          className="inline-flex items-center text-black hover:text-black/70 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded-md p-0" aria-label="Back to home"
        >
          <ArrowLeftIcon className="h-5 w-5" strokeWidth={2}/>
        </Link>
      </Container>
    </div>
  );
}