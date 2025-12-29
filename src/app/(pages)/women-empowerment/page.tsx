
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check, CheckCircle, Hand, Target } from "lucide-react";
import placeholderImages from "@/lib/placeholder-images.json";
import { programs } from "@/lib/programs";
import { ArrowRight } from "lucide-react";
import { generateWhatsappLink, WHATSAPP_LINK } from "@/lib/config";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Women Empowerment & Skill Development Programs | Trending Brains",
  description: "Join our women empowerment courses in India. We provide practical skills training, vocational courses, and entrepreneurship programs to help women achieve financial independence and career growth.",
  keywords: ["women empowerment courses", "women skill development programs", "entrepreneurship training for women", "vocational training for women", "financial independence for women", "Trending Brains Academy"],
  alternates: {
    canonical: "/women-empowerment",
  },
};

const stats = [
  { value: "10,000+", label: "Women Trained" },
  { value: "1,500+", label: "Entrepreneurs Launched" },
  { value: "50+", label: "Skill Development Programs" },
  { value: "98%", label: "Success Rate" },
];

const purposePoints = [
    "Remove economic barriers through skill development",
    "Create sustainable income opportunities",
    "Build confident women entrepreneurs",
    "Provide leadership & practical skills training",
    "Ensure financial literacy and independence",
    "Support legal & safety awareness",
    "Build a strong community of women leaders",
];


export default function WomenEmpowermentPage() {
  const heroImage = placeholderImages.placeholderImages.find(p => p.id === "hero-image");
  
  const skillDevProgram = programs.find(p => p.slug === 'women-skill-development');
  const vocationalProgram = programs.find(p => p.slug === 'vocational-skills-for-women');

  const initiativeWhatsappLink = generateWhatsappLink("Hello! I'm interested in the Women Empowerment initiative.");


  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full py-24 md:py-32 lg:py-40">
          {heroImage && (
             <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-cover object-center -z-10 brightness-50"
              priority
              data-ai-hint={heroImage.imageHint}
            />
          )}
          <div className="container px-4 md:px-6 text-center text-primary-foreground">
            <div className="max-w-3xl mx-auto">
              <p className="text-lg font-semibold text-accent">An Initiative by Trending Brains Academy</p>
              <h1 className="mt-2 text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                Women Empowerment Through Skill Development
              </h1>
              <p className="mt-4 text-lg md:text-xl">
                Our women empowerment courses are designed to provide the skills, confidence, and network for financial independence and career growth.
              </p>
              <div className="mt-8">
                <Button size="lg" asChild>
                  <Link href={initiativeWhatsappLink} target="_blank">Join The Initiative</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 md:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl">Our Impact in Numbers</h2>
                <p className="max-w-2xl mx-auto mt-4 text-muted-foreground md:text-xl/relaxed">
                    We are proud of the community we've built and the success stories from our women skill development programs.
                </p>
            </div>
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4 max-w-5xl mx-auto">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <h3 className="text-4xl font-bold font-headline tracking-tighter sm:text-5xl text-accent">{stat.value}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Featured Empowerment Programs Section */}
        <section className="py-12 md:py-24">
            <div className="container px-4 md:px-6">
                 <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl">Our Women Empowerment Courses</h2>
                    <p className="max-w-2xl mx-auto mt-4 text-muted-foreground md:text-xl/relaxed">
                       Explore our practical skills training and vocational programs designed for women.
                    </p>
                </div>
                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
                    {skillDevProgram && (
                        <Card className="flex flex-col">
                            <CardHeader>
                                <CardTitle className="font-headline text-2xl">{skillDevProgram.title}</CardTitle>
                                <CardDescription>{skillDevProgram.description}</CardDescription>
                                <div className="flex gap-4 pt-2 text-sm">
                                    <span className="text-muted-foreground">Duration: {skillDevProgram.duration}</span>
                                    <span className="font-bold text-foreground">{skillDevProgram.fee}</span>
                                </div>
                            </CardHeader>
                            <CardContent className="flex-grow">
                               <h4 className="font-semibold mb-4 text-lg">What You'll Learn</h4>
                                <ul className="space-y-3">
                                  {skillDevProgram.syllabus.map(item => (
                                    <li key={item.topic} className="flex items-start gap-3">
                                      <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-accent" />
                                      <div>
                                        <span className="font-semibold">{item.week}:</span> {item.topic}
                                      </div>
                                    </li>
                                  ))}
                                </ul>
                            </CardContent>
                             <CardFooter>
                                <Button size="lg" className="w-full" asChild>
                                  <Link href={`/programs/${skillDevProgram.slug}`}>
                                    Learn More
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                  </Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    )}
                    {vocationalProgram && (
                        <Card className="flex flex-col">
                            <CardHeader>
                                <CardTitle className="font-headline text-2xl">{vocationalProgram.title}</CardTitle>
                                <CardDescription>{vocationalProgram.description}</CardDescription>
                                <div className="flex gap-4 pt-2 text-sm">
                                    <span className="text-muted-foreground">Duration: {vocationalProgram.duration}</span>
                                    <span className="font-bold text-foreground">{vocationalProgram.fee}</span>
                                </div>
                            </CardHeader>
                            <CardContent className="flex-grow">
                               <h4 className="font-semibold mb-4 text-lg">Choose Your Track</h4>
                                <p className="text-sm text-muted-foreground mb-4">Our vocational training courses help you specialize in one stream.</p>
                                <ul className="space-y-3">
                                  {vocationalProgram.syllabus.map(item => (
                                    <li key={item.topic} className="flex items-start gap-3">
                                      <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-accent" />
                                      <div>
                                         {item.topic}
                                      </div>
                                    </li>
                                  ))}
                                </ul>
                            </CardContent>
                             <CardFooter>
                                <Button size="lg" className="w-full" asChild>
                                  <Link href={`/programs/${vocationalProgram.slug}`}>
                                     Learn More
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                  </Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    )}
                </div>
                 <div className="text-center mt-12">
                    <Button asChild size="lg" variant="link" className="text-accent text-base">
                        <Link href="/programs/general">View All Vocational Training Programs in India <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                </div>
            </div>
        </section>

        {/* Vision, Mission, Purpose Section */}
        <section className="py-12 md:py-24 bg-background">
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
              <div className="space-y-8">
                 <div>
                    <h2 className="text-3xl font-bold font-headline mb-4 flex items-center gap-3"><Target className="h-8 w-8 text-accent"/>Our Vision</h2>
                    <p className="text-muted-foreground italic">
                      “To build a generation of financially independent, confident, and highly skilled women who emerge as empowered leaders and future-ready entrepreneurs.”
                    </p>
                </div>
                 <div>
                    <h2 className="text-3xl font-bold font-headline mb-4 flex items-center gap-3"><Hand className="h-8 w-8 text-accent"/>Our Mission for Women Empowerment</h2>
                     <p className="text-muted-foreground">
                       Our mission is to cultivate a transformative ecosystem where women are equipped not just with skills, but with a strong sense of purpose, confidence, and financial independence. We are committed to shaping a generation of dynamic women who can break barriers through our entrepreneurship training for women.
                    </p>
                    <p className="text-muted-foreground mt-4">
                       By providing structured training, mentorship, and leadership development, we empower women to realise their fullest potential. Our approach ensures they gain the competencies, mindset, and resources required to thrive in high-growth careers, build successful enterprises, and contribute meaningfully to their communities.
                    </p>
                </div>
              </div>
               <div>
                  <h2 className="text-3xl font-bold font-headline mb-6">Our Purpose: Building a Better Future</h2>
                  <div className="space-y-4">
                     {purposePoints.map((point) => (
                        <div key={point} className="flex items-start gap-3">
                           <div className="bg-accent rounded-full p-1 mt-1">
                               <Check className="h-4 w-4 text-accent-foreground" />
                           </div>
                           <p className="text-muted-foreground flex-1">{point}</p>
                        </div>
                     ))}
                  </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-24 bg-muted">
            <div className="container px-4 md:px-6">
                <div className="rounded-lg bg-accent p-8 text-center text-accent-foreground md:p-12 max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl">Join a Community of Changemakers</h2>
                    <p className="mt-4 max-w-xl mx-auto text-accent-foreground/90">
                        Take the first step towards a brighter future. Enroll in our women skill development program today and become part of a supportive network of ambitious women.
                    </p>
                    <div className="mt-8">
                        <Button size="lg" variant="secondary" asChild>
                             <Link href={initiativeWhatsappLink} target="_blank">Start Your Journey Now</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>

      </main>
    </div>
  );
}
