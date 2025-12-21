"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { programs } from "@/lib/programs";
import Link from "next/link";
import { ArrowRight } from 'lucide-react';


export default function ProgramsPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold font-headline tracking-tighter sm:text-5xl">
          Our Programs
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-xl">
          Invest in yourself. Our programs are designed to provide practical skills for the modern workplace.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2 max-w-5xl mx-auto">
        {programs.map((program) => {
          const linkHref = program.slug === 'women-empowerment-initiative'
            ? '/women-empowerment'
            : `/programs/${program.slug}`;

          return (
            <Card key={program.title} className="flex flex-col">
              <CardHeader>
                <CardTitle className="font-headline text-2xl">{program.title}</CardTitle>
                <CardDescription>{program.description}</CardDescription>
                <div className="flex gap-4 pt-2 text-sm text-muted-foreground">
                    <span>Duration: {program.duration}</span>
                    <span>Fee: {program.fee}</span>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <h4 className="mb-2 font-semibold">Syllabus Overview</h4>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>View Weekly Breakdown</AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-3 pl-2">
                        {program.syllabus.map((item) => (
                          <li key={item.week} className="flex items-start gap-3">
                            <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-accent" />
                            <div>
                              <span className="font-semibold">Weeks {item.week}:</span> {item.topic}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
              <CardFooter>
                <Button size="lg" className="w-full" asChild>
                  <Link href={linkHref}>
                    Learn More & Enroll
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
