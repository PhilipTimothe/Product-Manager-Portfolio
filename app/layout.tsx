import './globals.css';
import type { Metadata } from 'next';
import { Inter, Cormorant_Garamond } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['500', '600'],
  variable: '--font-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Personal Portfolio - I design practical, human-centered products',
  description: 'Software, data, and storytelling that turn ideas into real user value',
  openGraph: {
    title: 'Personal Portfolio - I design practical, human-centered products',
    description: 'Software, data, and storytelling that turn ideas into real user value',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Personal Portfolio - I design practical, human-centered products',
    description: 'Software, data, and storytelling that turn ideas into real user value',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}