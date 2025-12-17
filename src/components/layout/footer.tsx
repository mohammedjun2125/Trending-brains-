"use client";
import { BrainCircuit } from 'lucide-react';
import { useEffect, useState } from 'react';

export function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="border-t bg-background">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <BrainCircuit className="h-6 w-6 text-accent" />
           <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Empowering the next generation of leaders.
          </p>
        </div>
        <p className="text-sm text-muted-foreground">
          &copy; {year} Trending Brains Academy
        </p>
      </div>
    </footer>
  );
}
