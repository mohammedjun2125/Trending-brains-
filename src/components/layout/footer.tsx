"use client";
import { BrainCircuit } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="border-t bg-background">
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex flex-col gap-4">
                 <Link href="/" className="flex items-center space-x-2">
                    <BrainCircuit className="h-6 w-6 text-accent" />
                    <span className="font-bold font-headline sm:inline-block">
                    Trending Brains
                    </span>
                </Link>
                <p className="text-sm text-muted-foreground">
                    Empowering the next generation of leaders through education and entrepreneurship.
                </p>
            </div>
            <div>
                <h4 className="font-semibold mb-3">Quick Links</h4>
                <ul className="space-y-2 text-sm">
                    <li><Link href="/programs" className="text-muted-foreground hover:text-foreground">Programs</Link></li>
                    <li><Link href="/contact" className="text-muted-foreground hover:text-foreground">Contact</Link></li>
                </ul>
            </div>
            <div>
                <h4 className="font-semibold mb-3">Legal</h4>
                <ul className="space-y-2 text-sm">
                    <li><Link href="/about" className="text-muted-foreground hover:text-foreground">About Us</Link></li>
                    <li><Link href="/terms" className="text-muted-foreground hover:text-foreground">Terms of Service</Link></li>
                    <li><Link href="/privacy" className="text-muted-foreground hover:text-foreground">Privacy Policy</Link></li>
                    <li><Link href="/disclaimer" className="text-muted-foreground hover:text-foreground">Disclaimer</Link></li>
                </ul>
            </div>
            <div>
                <h4 className="font-semibold mb-3">Connect With Us</h4>
                <p className="text-sm text-muted-foreground">Stay up to date with our latest news and offers.</p>
            </div>
        </div>
         <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
             &copy; {year} Trending Brains Academy. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
