
import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { Inter, Poppins } from 'next/font/google';
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['600', '700'],
  display: 'swap',
  variable: '--font-poppins',
});


export const metadata: Metadata = {
  title: "Online Skill Development & Career Training | Trending Brains Academy",
  description: "Learn job-ready skills, earn certifications, and grow your career with online skill development, women empowerment & entrepreneurship programs.",
  icons: {
    icon: [
        { url: '/favicon.ico', sizes: 'any' },
        { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
        { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: "/site.webmanifest",
  metadataBase: new URL("https://www.trendingbrains.com"), // Use www domain
  openGraph: {
    title: "Online Skill Development & Career Training | Trending Brains Academy",
    description: "Learn job-ready skills, earn certifications, and grow your career with our practical online courses.",
    siteName: "Trending Brains Academy",
    locale: "en_IN",
    type: "website",
    url: "https://www.trendingbrains.com", // Use www domain
    images: [
      {
        url: 'https://www.trendingbrains.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Trending Brains Academy',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Skill Development & Career Training | Trending Brains Academy",
    description: "Learn job-ready-skills, earn certifications, and grow your career with our practical online courses.",
    images: ['https://www.trendingbrains.com/og-image.png'],
  },
  alternates: {
    canonical: '/',
  },
  keywords: [
    "online skill development courses",
    "skill development courses",
    "job-ready skills",
    "career growth",
    "online courses with certification",
    "practical skills training",
    "women skill development programs",
    "women empowerment courses",
    "entrepreneurship training for women",
    "vocational training courses",
    "online learning platform India",
  ],
  authors: [{ name: "Trending Brains Academy" }],
  creator: "Trending Brains Academy",
  publisher: "Trending Brains Academy",
};

export const viewport: Viewport = {
  themeColor: "#F04148", // Accent Red
  colorScheme: "light dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Trending Brains Academy",
    "url": "https://www.trendingbrains.com",
    "logo": "https://www.trendingbrains.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9700051427",
      "contactType": "Customer Service",
      "areaServed": "IN",
      "availableLanguage": ["en"]
    },
    "sameAs": [
      "https://instagram.com/trendingbrains",
      "https://youtube.com/@trendingbrains"
    ],
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.trendingbrains.com/programs/general?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    },
     "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.trendingbrains.com"
      }
  };

  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`} suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="google4272a75c1f5aca66" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="font-body antialiased">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <WhatsAppButton />
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
