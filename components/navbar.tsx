'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Container } from './container';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-surface/80 backdrop-blur-md border-b border-border/20 shadow-sm'
            : 'bg-transparent'
        )}
      >
        <Container>
          <div className="flex items-center justify-between py-4">
            <Link 
              href="/"
              className="text-xl font-serif font-semibold text-ink hover:text-accent transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded-md"
            >
              Portfolio
            </Link>
            
            <div className="flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'text-sm font-medium transition-colors duration-200 hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded-md px-2 py-1',
                    pathname === item.href
                      ? 'text-accent'
                      : 'text-inkSecondary'
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </nav>
    </>
  );
}