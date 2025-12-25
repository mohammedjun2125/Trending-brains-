import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { WHATSAPP_NUMBER } from "@/lib/config";

export const metadata: Metadata = {
  title: "Trending Brains – Future Ready Academy",
  description:
    "Trending Brains is a future-focused academy for skills, AI, leadership, and empowerment.",
  icons: {
    icon: "/icon.png",
    shortcut: "/tb-favicon.ico",
  },
  metadataBase: new URL("https://www.trendingbrains.com"), // Use www domain
  openGraph: {
    title: "Trending Brains – Future Ready Academy",
    description: "Trending Brains is a future-focused academy for skills, AI, leadership, and empowerment.",
    siteName: "Trending Brains Academy",
    locale: "en_US",
    type: "website",
    url: "https://www.trendingbrains.com", // Use www domain
  },
  twitter: {
    card: "summary_large_image",
    title: "Trending Brains – Future Ready Academy",
    description: "Trending Brains is a future-focused academy for skills, AI, leadership, and empowerment.",
  },
  alternates: {
    canonical: '/',
  },
  manifest: "/manifest.json",
  keywords: [
    "Trending Brains Academy",
    "online courses",
    "women empowerment",
    "digital marketing course",
    "full-stack development course",
    "leadership training",
    "skill development",
    "career growth for women",
    "online education",
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
