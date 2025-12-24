
"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowRight, Star } from "lucide-react";
import { programs } from "@/lib/programs";
import { cn } from "@/lib/utils";


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

const videoPlaylist = [
  "/hero-video.mp4",
  "/hero-video-2.mp4",
  "/hero-video-3.mp4",
];

export default function Home() {
  const videoRefs = [useRef<HTMLVideoElement>(null), useRef<HTMLVideoElement>(null)];
  const [activePlayer, setActivePlayer] = useState(0);
  const [playlistIndex, setPlaylistIndex] = useState(0);

  useEffect(() => {
    // Set initial sources
    if (videoRefs[0].current) {
        videoRefs[0].current.src = videoPlaylist[0];
    }
    if (videoRefs[1].current) {
        videoRefs[1].current.src = videoPlaylist[1];
    }
  }, []);

  const handleVideoEnd = () => {
    // Increment playlist index
    const nextPlaylistIndex = (playlistIndex + 1) % videoPlaylist.length;
    setPlaylistIndex(nextPlaylistIndex);
    
    // Switch the active player
    const nextPlayer = (activePlayer + 1) % 2;
    setActivePlayer(nextPlayer);

    // Preload the *next* video on the now-hidden player
    const playerToPreload = videoRefs[activePlayer].current;
    if (playerToPreload) {
        const videoToPreloadIndex = (nextPlaylistIndex + 1) % videoPlaylist.length;
        playerToPreload.src = videoPlaylist[videoToPreloadIndex];
        playerToPreload.load();
    }
  };

  useEffect(() => {
    const currentPlayer = videoRefs[activePlayer].current;
    if (currentPlayer) {
        currentPlayer.play().catch(error => console.error("Autoplay was prevented:", error));
    }
  }, [activePlayer]);


  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden flex items-center justify-center">
          
          <video
            ref={videoRefs[0]}
            className={cn("absolute top-0 left-0 w-full h-full object-cover -z-10 brightness-50 transition-opacity duration-1000", activePlayer === 0 ? "opacity-100" : "opacity-0")}
            muted
            playsInline
            onEnded={handleVideoEnd}
            preload="auto"
          />
          <video
            ref={videoRefs[1]}
            className={cn("absolute top-0 left-0 w-full h-full object-cover -z-10 brightness-50 transition-opacity duration-1000", activePlayer === 1 ? "opacity-100" : "opacity-0")}
            muted
            playsInline
            onEnded={handleVideoEnd}
            preload="auto"
          />


          <div className="container px-4 md:px-6 text-center text-primary-foreground relative z-10">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                Unlock Your Potential, Transform Your Future
              </h1>
              <p className="mt-4 text-lg md:text-xl">
                Trending Brains Academy offers expert-led courses in technology, design, and business to help you achieve your career goals.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button size="lg" asChild>
                  <Link href="/programs">Explore Our Programs</Link>
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-black">
                  <Link href="/about">About Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured Courses Section */}
        <section className="py-12 md:py-24">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl">Our Premier Programs</h2>
                    <p className="max-w-2xl mx-auto mt-4 text-muted-foreground md:text-xl/relaxed">
                        Designed by industry experts to give you a competitive edge.
                    </p>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                    {/* Entrepreneur Program Card */}
                    {programs.find(p => p.slug === 'entrepreneurs-launch-pad') && (
                        <Card className="flex flex-col transition-transform transform hover:-translate-y-2 lg:col-span-1">
                            <CardHeader className="items-start gap-4 space-y-0">
                                <div className="flex items-center gap-4">
                                    <div className="bg-accent text-accent-foreground rounded-full p-3">
                                        <Star className="h-6 w-6" />
                                    </div>
                                    <CardTitle className="font-headline text-2xl">{programs.find(p => p.slug === 'entrepreneurs-launch-pad')!.title}</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{programs.find(p => p.slug === 'entrepreneurs-launch-pad')!.description}</p>
                            </CardContent>
                            <CardFooter className="mt-auto">
                                <Button asChild variant="outline" className="w-full">
                                    <Link href={`/programs/entrepreneurs-launch-pad`}>Explore Program <ArrowRight className="ml-2 h-4 w-4" /></Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    )}

                    {/* Other Program Cards */}
                    {programs.filter(p => p.slug === 'women-skill-development' || p.slug === 'vocational-skills-for-women').map((program) => {
                        const Icon = program.icon;
                        return (
                        <Card key={program.title} className="flex flex-col transition-transform transform hover:-translate-y-2">
                            <CardHeader className="items-start gap-4 space-y-0">
                                <div className="flex items-center gap-4">
                                     <div className="bg-accent text-accent-foreground rounded-full p-3">
                                         <Icon className="h-6 w-6" />
                                     </div>
                                     <CardTitle className="font-headline text-2xl">{program.title}</CardTitle>
                                 </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{program.description}</p>
                            </CardContent>
                            <CardFooter className="mt-auto">
                                <Button asChild variant="outline" className="w-full">
                                    <Link href="/women-empowerment">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    )})}
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
                        Hear what our successful alumni have to say and read our latest insights.
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
                <div className="text-center mt-12">
                    <Button asChild size="lg" variant="link" className="text-accent text-base">
                        <Link href="/blog">Explore Our Blog <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
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

    