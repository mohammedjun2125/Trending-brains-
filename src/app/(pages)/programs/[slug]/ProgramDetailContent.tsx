"use client";

import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { programs } from '@/lib/programs';
import type { Program } from '@/lib/programs';
import { notFound } from 'next/navigation';

export default function ProgramDetailContent({ slug }: { slug: string }) {
  const program = programs.find((p) => p.slug === slug);
  
  if (!program) {
    notFound();
  }

  const ProgramIcon = program.icon;

  const phoneNumber = "1234567890"; // Placeholder phone number
  const message = `Hello! I'm interested in enrolling in the "${program.title}" program.`;
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="container max-w-4xl mx-auto py-12 md:py-16">
        <div className="mb-8">
             <Link href="/programs" className="text-sm text-accent hover:underline">
                &larr; Back to all programs
            </Link>
        </div>
      <header className="mb-8">
        <div className="flex items-center gap-4 mb-4">
            <div className="bg-accent text-accent-foreground rounded-full p-3">
                {ProgramIcon && <ProgramIcon className="h-8 w-8" />}
            </div>
            <h1 className="text-4xl font-bold font-headline tracking-tighter sm:text-5xl">
                {program.title}
            </h1>
        </div>
        <p className="text-xl text-muted-foreground mt-2">
          {program.longDescription}
        </p>
      </header>

      <div className="grid md:grid-cols-3 gap-8">
        <main className="md:col-span-2 space-y-12">
            <section>
                 <h2 className="text-2xl font-bold font-headline mb-4">Weekly Syllabus</h2>
                 <ul className="space-y-4 border-l-2 border-accent pl-6">
                    {program.syllabus.map((item, index) => (
                        <li key={index} className="relative">
                             <div className="absolute -left-[1.6rem] top-1 h-3 w-3 rounded-full bg-accent"></div>
                             <p className="font-semibold text-lg">Weeks {item.week}</p>
                             <p className="text-muted-foreground">{item.topic}</p>
                        </li>
                    ))}
                 </ul>
            </section>
        </main>
        
        <aside className="space-y-6">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
                 <h3 className="text-xl font-bold font-headline mb-4">Course Details</h3>
                 <div className="space-y-3 text-sm">
                    {Object.entries(program.details).map(([key, value]) => (
                        <div key={key} className="flex justify-between">
                            <span className="font-medium text-muted-foreground">{key}:</span>
                            <span className="text-right">{value}</span>
                        </div>
                    ))}
                     <div className="flex justify-between">
                        <span className="font-medium text-muted-foreground">Duration:</span>
                        <span className="text-right">{program.duration}</span>
                    </div>
                     <div className="flex justify-between">
                        <span className="font-medium text-muted-foreground">Fee:</span>
                        <span className="text-right font-bold text-lg">{program.fee}</span>
                    </div>
                 </div>
                 <Button size="lg" className="w-full mt-6" asChild>
                   <Link href={whatsappLink} target="_blank">
                    Enroll Now
                   </Link>
                 </Button>
            </div>
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
                 <h3 className="text-xl font-bold font-headline mb-4">What You'll Gain</h3>
                 <ul className="space-y-3 text-sm">
                    <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-accent" /> Portfolio-ready projects</li>
                    <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-accent" /> Certificate of Completion</li>
                    <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-accent" /> Access to alumni network</li>
                    <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-accent" /> Career support services</li>
                 </ul>
            </div>
        </aside>
      </div>
    </div>
  );
}
