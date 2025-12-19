import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import placeholderImages from "@/lib/placeholder-images.json";
import { programs } from "@/lib/programs";

const stats = [
  { value: "10,000+", label: "Women Trained" },
  { value: "1,500+", label: "Entrepreneurs Launched" },
  { value: "50+", label: "Expert-led Programs" },
  { value: "98%", label: "Placement Rate" },
];

const phoneNumber = "917702151427";
const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent("Hello! I'm interested in the Women Empowerment initiative.")}`;


export default function WomenEmpowermentPage() {
  const heroImage = placeholderImages.placeholderImages.find(p => p.id === "hero-image");
  const communityImage = placeholderImages.placeholderImages.find(p => p.id === "community-banner");
  
  const empowermentProgram = programs.find(p => p.slug === 'women-empowerment-initiative');

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
                Empowering Women, Building Futures
              </h1>
              <p className="mt-4 text-lg md:text-xl">
                Join our mission to equip women with the skills, confidence, and network to excel in their careers and launch their own ventures.
              </p>
              <div className="mt-8">
                <Button size="lg" asChild>
                  <Link href={whatsappLink} target="_blank">Enroll Now</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* About the Initiative */}
        <section className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold font-headline">Our Vision & Mission</h2>
                <p className="text-muted-foreground">
                  Our vision is a world where every woman has the opportunity to achieve her full potential. We aim to be a leading force in online education, creating a global impact by building a future where female-led businesses and initiatives are at the forefront of every industry.
                </p>
                <p className="text-muted-foreground">
                  Our mission is to create a space where women can acquire practical skills, build professional networks, and gain the confidence to pursue their ambitions. We are committed to providing a supportive, collaborative learning environment where every student can thrive.
                </p>
              </div>
              {communityImage && (
                <Image
                  src={communityImage.imageUrl}
                  alt={communityImage.description}
                  width={600}
                  height={400}
                  className="rounded-lg object-cover"
                  data-ai-hint={communityImage.imageHint}
                />
              )}
            </div>
          </div>
        </section>
        
        {/* Stats Section */}
        <section className="py-12 md:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl">Our Impact in Numbers</h2>
                <p className="max-w-2xl mx-auto mt-4 text-muted-foreground md:text-xl/relaxed">
                    We are proud of the community we've built and the success of our students.
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
        
        {/* Program Details Section */}
        {empowermentProgram && (
            <section className="py-12 md:py-24">
                <div className="container px-4 md:px-6">
                     <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl">The Empowerment Program</h2>
                        <p className="max-w-2xl mx-auto mt-4 text-muted-foreground md:text-xl/relaxed">
                           A closer look at what our initiative offers.
                        </p>
                    </div>
                    <div className="max-w-3xl mx-auto">
                        <Card>
                             <CardHeader>
                                <CardTitle className="font-headline text-2xl">{empowermentProgram.title}</CardTitle>
                                <CardDescription>{empowermentProgram.longDescription}</CardDescription>
                                <div className="flex gap-4 pt-2 text-sm text-muted-foreground">
                                    <span>Duration: {empowermentProgram.duration}</span>
                                    <span>Fee: {empowermentProgram.fee}</span>
                                </div>
                            </CardHeader>
                            <CardContent>
                               <h4 className="font-semibold mb-4 text-lg">What You'll Learn</h4>
                                <ul className="space-y-3">
                                  {empowermentProgram.syllabus.map(item => (
                                    <li key={item.week} className="flex items-start gap-3">
                                      <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-accent" />
                                      <div>
                                        <span className="font-semibold">{item.week}:</span> {item.topic}
                                      </div>
                                    </li>
                                  ))}
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        )}

        {/* CTA Section */}
        <section className="py-12 md:py-24 bg-background">
            <div className="container px-4 md:px-6">
                <div className="rounded-lg bg-accent p-8 text-center text-accent-foreground md:p-12 max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl">Join a Community of Changemakers</h2>
                    <p className="mt-4 max-w-xl mx-auto text-accent-foreground/90">
                        Take the first step towards a brighter future. Enroll today and become part of a supportive network of ambitious women.
                    </p>
                    <div className="mt-8">
                        <Button size="lg" variant="secondary" asChild>
                             <Link href={whatsappLink} target="_blank">Start Your Journey Now</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>

      </main>
    </div>
  );
}
