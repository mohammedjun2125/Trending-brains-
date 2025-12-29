
import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { WHATSAPP_NUMBER } from "@/lib/config";

export const metadata: Metadata = {
  title: "Online Skill Development & Career Training | Trending Brains Academy",
  description: "Learn job-ready skills, earn certifications, and grow your career with online skill development, women empowerment & entrepreneurship programs.",
  icons: {
    icon: "/icon.png",
    shortcut: "/tb-favicon.ico",
  },
  metadataBase: new URL("https://www.trendingbrains.com"), // Use www domain
  openGraph: {
    title: "Online Skill Development & Career Training | Trending Brains Academy",
    description: "Learn job-ready skills, earn certifications, and grow your career with our practical online courses.",
    siteName: "Trending Brains Academy",
    locale: "en_IN",
    type: "website",
    url: "https://www.trendingbrains.com", // Use www domain
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Skill Development & Career Training | Trending Brains Academy",
    description: "Learn job-ready skills, earn certifications, and grow your career with our practical online courses.",
  },
  alternates: {
    canonical: '/',
  },
  manifest: "/manifest.json",
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
  themeColor: "#F44336", // Corresponds to your accent color
  colorScheme: "light dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Poppins:wght@600;700&display=swap"
          rel="stylesheet"
        />
        <meta name="google-site-verification" content="google4272a75c1f5aca66" />
      </head>
      <body className="font-body antialiased">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <WhatsAppButton />
        <Toaster />
      </body>
    </html>
  );
}
