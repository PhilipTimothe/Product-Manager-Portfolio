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
  title: "Philip Timothe | Delivery & Implementation Manager",
  description:
    "Delivery and implementation leader. I take client engagements from kickoff to go-live as the single point of accountability. 60-plus delivered.",
  openGraph: {
    title: "Philip Timothe | Delivery & Implementation Manager",
    description:
      "I take client engagements from kickoff to go-live as the single point of accountability, across design, engineering, and content. 60-plus delivered.",
    url: "https://philiptimothe.com",
    type: "website",
    images: [
      {
        url: "/PhilipTimothe.jpg",
        width: 1200,
        height: 630,
        alt: "Philip Timothe, Delivery & Implementation Manager",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Philip Timothe | Delivery & Implementation Manager",
    description:
      "I take client engagements from kickoff to go-live as the single point of accountability. 60-plus delivered.",
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
