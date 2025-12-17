import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowRight, BookOpen, BrainCircuit, Users } from "lucide-react";
import placeholderImages from "@/lib/placeholder-images.json";

const stats = [
  { value: "10,000+", label: "Women Trained" },
  { value: "1,500+", label: "Entrepreneurs Launched" },
  { value: "50+", label: "Expert-led Programs" },
  { value: "98%", label: "Placement Rate" },
];

const featuredPrograms = [
    {
        title: "Digital Marketing Pro",
        description: "Master SEO, SEM, social media, and content marketing to drive business growth.",
        icon: BrainCircuit,
    },
    {
        title: "Full-Stack Development",
        description: "Become a versatile developer with skills in both front-end and back-end technologies.",
        icon: BookOpen,
    },
    {
        title: "Leadership & Management",
        description: "Develop essential leadership skills to inspire teams and manage projects effectively.",
        icon: Users,
    },
];

const testimonials = [
  {
    name: "Aisha Khan",
    title: "Founder, Bloom Creatives",
    quote: "Trending Brains Academy gave me the confidence and skills to launch my own startup. The mentorship was invaluable.",
    avatar: "https://picsum.photos/seed/tk/100/100"
  },
  {
    name: "Priya Sharma",
    title: "Digital Marketer, TechCorp",
    quote: "The practical, hands-on approach of the digital marketing program helped me land my dream job. I can't recommend it enough!",
    avatar: "https://picsum.photos/seed/ps/100/100"
  },
];

export default function Home() {
  const heroImage = placeholderImages.placeholderImages.find(p => p.id === "hero-image");

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
              data-ai-hint={heroImage.imageHint}
              priority
            />
          )}
          <div className="container px-4 md:px-6 text-center text-primary-foreground">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                Empowering Women, Building Futures
              </h1>
              <p className="mt-4 text-lg md:text-xl">
                Join Trending Brains Academy to gain the skills, confidence, and network to excel in your career and launch your own ventures.
              </p>
              <div className="mt-8 flex justify-center gap-4">
                <Button size="lg" asChild>
                  <Link href="/programs">Explore Programs</Link>
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-black">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Stats Section */}
        <section className="py-12 md:py-24 bg-muted">
          <div className="container px-4 md:px-6">
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

        {/* Featured Programs Section */}
        <section className="py-12 md:py-24">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl">Our Premier Programs</h2>
                    <p className="max-w-2xl mx-auto mt-4 text-muted-foreground md:text-xl/relaxed">
                        Designed by industry experts to give you a competitive edge.
                    </p>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
                    {featuredPrograms.map((program) => (
                        <Card key={program.title} className="flex flex-col transition-transform transform hover:-translate-y-2">
                            <CardHeader className="items-start gap-4 space-y-0">
                                <div className="flex items-center gap-4">
                                     <div className="bg-accent text-accent-foreground rounded-full p-3">
                                         <program.icon className="h-6 w-6" />
                                     </div>
                                     <CardTitle className="font-headline text-2xl">{program.title}</CardTitle>
                                 </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{program.description}</p>
                            </CardContent>
                            <CardFooter className="mt-auto">
                                <Button asChild variant="outline" className="w-full">
                                    <Link href="/programs">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
                 <div className="text-center mt-12">
                    <Button asChild size="lg" variant="link" className="text-accent text-base">
                        <Link href="/programs">View All Programs <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                </div>
            </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-12 md:py-24 bg-muted">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl">From Our Community</h2>
                    <p className="max-w-2xl mx-auto mt-4 text-muted-foreground md:text-xl/relaxed">
                        Hear what our successful alumnae have to say.
                    </p>
                </div>
                <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
                    {testimonials.map((testimonial) => (
                        <Card key={testimonial.name} className="bg-background">
                            <CardContent className="pt-6">
                                <blockquote className="text-lg italic text-foreground">"{testimonial.quote}"</blockquote>
                            </CardContent>
                            <CardFooter>
                                <div className="flex items-center gap-4">
                                    <Avatar>
                                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="font-semibold">{testimonial.name}</p>
                                        <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                                    </div>
                                </div>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-24">
            <div className="container px-4 md:px-6">
                <div className="rounded-lg bg-accent p-8 text-center text-accent-foreground md:p-12 max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl">Ready to Start Your Journey?</h2>
                    <p className="mt-4 max-w-xl mx-auto text-accent-foreground/90">
                        Your future is waiting. Enroll in a program today and take the first step towards a brighter tomorrow.
                    </p>
                    <div className="mt-8">
                        <Button size="lg" variant="secondary" asChild>
                            <Link href="/programs">Enroll Now</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>

      </main>
    </div>
  );
}
