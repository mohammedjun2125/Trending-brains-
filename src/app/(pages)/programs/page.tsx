"use client";

import * as React from "react";
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
import { CheckCircle, Search } from "lucide-react";
import { programs } from "@/lib/programs";
import Link from "next/link";
import { ArrowRight } from 'lucide-react';
import { Input } from "@/components/ui/input";

export default function ProgramsPage() {
  const [searchTerm, setSearchTerm] = React.useState("");

  const filteredPrograms = programs.filter(program =>
    program.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    program.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto py-12 md:py-16">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold font-headline tracking-tighter sm:text-5xl">
          Our Programs
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-xl">
          Invest in yourself. Our programs are designed to provide practical skills for the modern workplace, including digital marketing, full-stack development, and leadership.
        </p>
      </div>

      <div className="max-w-xl mx-auto mb-10">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search for a program..."
            className="w-full pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-2 max-w-5xl mx-auto">
        {filteredPrograms.length > 0 ? (
          filteredPrograms.map((program) => {
            const linkHref = program.slug === 'entrepreneurs-launch-pad'
              ? '/women-empowerment'
              : `/programs/${program.slug}`;

            return (
              <Card key={program.title} className="flex flex-col">
                <CardHeader>
                  <CardTitle className="font-headline text-2xl">{program.title}</CardTitle>
                  <CardDescription>{program.description}</CardDescription>
                  <div className="flex flex-col sm:flex-row gap-4 pt-2 text-sm">
                      <span className="text-muted-foreground">Duration: {program.duration}</span>
                      <span className="font-bold text-foreground text-base">{program.fee}</span>
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
                            <li key={item.topic} className="flex items-start gap-3">
                              <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-accent" />
                              <div>
                                <span className="font-semibold">{item.week}:</span> {item.topic}
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
          })
        ) : (
          <div className="lg:col-span-2 text-center text-muted-foreground">
            <p>No programs found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
}
