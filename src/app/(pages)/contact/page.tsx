import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";
import Link from "next/link";
import { WHATSAPP_LINK, WHATSAPP_NUMBER } from "@/lib/config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Trending Brains Academy. We're here to answer your questions about our programs, partnerships, or anything else. Contact us via email, phone, or WhatsApp.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="container mx-auto py-12 md:py-16">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold font-headline tracking-tighter sm:text-5xl">
          Get in Touch
        </h1>
        <p className="mt-4 text-muted-foreground md:text-xl">
          We'd love to hear from you! Whether you have a question about our programs, partnerships, or anything else, our team is ready to answer all your questions.
        </p>
      </div>

      <div className="max-w-sm mx-auto mt-12">
         <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 space-y-6">
            <div className="space-y-2">
                <h3 className="text-xl font-bold font-headline">Contact Information</h3>
                <div className="flex items-center gap-4 pt-2">
                    <Mail className="h-5 w-5 text-accent" />
                    <a href="mailto:info@trendingbrains.com" className="text-muted-foreground hover:text-foreground">
                        info@trendingbrains.com
                    </a>
                </div>
                 <div className="flex items-center gap-4">
                    <Phone className="h-5 w-5 text-accent" />
                    <span className="text-muted-foreground">+{WHATSAPP_NUMBER}</span>
                </div>
            </div>
             
             <div className="space-y-2">
                <h3 className="text-xl font-bold font-headline">Connect on WhatsApp</h3>
                <p className="text-sm text-muted-foreground">For a quick response, chat with us directly on WhatsApp.</p>
                <Button size="lg" className="w-full" asChild>
                   <Link href={WHATSAPP_LINK} target="_blank">
                    Chat on WhatsApp
                   </Link>
                 </Button>
            </div>
         </div>
      </div>
    </div>
  );
}
