import "./globals.css";
import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Philip Timothe – Product Manager & Builder",
  description:
    "Product Manager with a diverse background in software engineering, data science, finance, and creative media. I design and deliver human-centered digital products that merge storytelling, technology, and business impact.",

  openGraph: {
    title: "Philip Timothe – Product Manager & Builder",
    description:
      "Portfolio showcasing my work as a Product Manager with expertise in tech, finance, and creative strategy. Explore case studies in data science, product execution, and storytelling-driven design.",
    type: "website",
    images: ["/PhilipTimothe.jpg"], // social sharing preview
  },

  twitter: {
    card: "summary_large_image",
    title: "Philip Timothe – Product Manager & Builder",
    description:
      "I design and deliver human-centered products at the intersection of technology, data, and storytelling.",
    images: ["/PhilipTimothe.jpg"], // Twitter preview
  },

  icons: {
    icon: "/SquareStarted.png", // favicon
    shortcut: "/SquareStarted.png", // legacy support
    apple: "/SquareStarted.png", // iOS
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
