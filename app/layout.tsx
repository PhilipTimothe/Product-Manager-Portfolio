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
  title: "Philip Timothe – Technical Product Manager",
  description:
    "Technical Product & Operations Leader specializing in the collision of software engineering, data science, and operational efficiency. I build the structured frameworks and data-driven systems required to turn complex organizational friction into scalable digital products.",

  openGraph: {
    title: "Philip Timothe – Technical Product Manager",
    description:
      "Technical Product & Operations Leader specializing in the collision of software engineering, data science, and operational efficiency. I build the structured frameworks and data-driven systems required to turn complex organizational friction into scalable digital products.",
    type: "website",
    images: ["/PhilipTimothe.jpg"], // social sharing preview s
  },

  twitter: {
    card: "summary_large_image",
    title: "Philip Timothe – Technical Product Manager",
    description:
      "Technical Product & Operations Leader specializing in the collision of software engineering, data science, and operational efficiency. I build the structured frameworks and data-driven systems required to turn complex organizational friction into scalable digital products.",
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
