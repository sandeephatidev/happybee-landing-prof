import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google"; // Wait, "Geist" fonts.
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/next";
import StructuredData from "@/components/StructuredData";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HappyBee - Premium Healthy products",
  description: "Join the exclusive community for better health at better prices.",
  metadataBase: new URL('https://happybee.in'), // Update with your actual domain

  // Icons for browser and search
  icons: {
    icon: [
      { url: '/favicon.png', sizes: 'any' },
      { url: '/happybee-icon.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/happybee-icon.png',
  },

  // Open Graph metadata for social sharing and Google
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://happybee.in',
    siteName: 'HappyBee',
    title: 'HappyBee - Premium Healthy products',
    description: 'Join the exclusive community for better health at better prices. High-performance nutrition sourced by nutritionists, delivered for your convenience.',
    images: [
      {
        url: '/happybee-logo.png',
        width: 1200,
        height: 630,
        alt: 'HappyBee Logo',
      },
    ],
  },

  // Twitter Card metadata
  twitter: {
    card: 'summary_large_image',
    title: 'HappyBee - Premium Healthy products',
    description: 'Join the exclusive community for better health at better prices.',
    images: ['/happybee-logo.png'],
  },

  // Additional SEO
  keywords: ['group buy', 'health food', 'nutrition', 'working professionals', 'premium nutrition', 'healthy snacks'],
  authors: [{ name: 'HappyBee' }],
  creator: 'HappyBee',
  publisher: 'HappyBee',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
      <GoogleAnalytics gaId="G-DKWVJ8J5ZW" />
      <Analytics />
    </html>
  );
}
