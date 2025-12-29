
import Image from "next/image";
import placeholderImages from "@/lib/placeholder-images.json";
import type { Metadata } from "next";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Trending Brains Academy",
  description: "Learn about Trending Brains Academy, an online learning platform in India offering practical skills training and online courses with certification to foster career growth and entrepreneurship.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
    const aboutImage = placeholderImages.placeholderImages.find(p => p.id === "hero-image");

  return (
    <div className="container mx-auto py-12 md:py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold font-headline tracking-tighter sm:text-5xl">About Trending Brains Academy</h1>
        <p className="mx-auto mt-4 max-w-3xl text-muted-foreground md:text-xl">
          Your partner in career growth, offering job-ready skills for a future-proof career.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold font-headline mb-4">Who We Are</h2>
            <p className="text-muted-foreground">
              Trending Brains Academy is a leading online learning platform in India, dedicated to transforming students into industry-ready professionals. We bridge the gap between academic learning and real-world job requirements through practical skills training and outcome-oriented certification programs in emerging and in-demand technologies.
            </p>
          </div>
           <div>
            <h2 className="text-3xl font-bold font-headline mb-4">Our Vision</h2>
             <p className="text-muted-foreground">
               To empower students and professionals to achieve their career growth goals by providing accessible, industry-relevant online courses with certification. We aim to be a catalyst for innovation, employability, and lifelong success.
            </p>
             <p className="text-muted-foreground mt-4">
                We envision a world where every learner has the opportunity to gain job-ready skills in AI, Marketing, and Full-Stack Development, enabling them to thrive in the digital economy.
            </p>
          </div>
        </div>
        <div className="order-first md:order-last">
           {aboutImage && (
            <Image
              src={aboutImage.imageUrl}
              alt={aboutImage.description}
              width={600}
              height={450}
              className="rounded-lg object-cover"
              data-ai-hint={aboutImage.imageHint}
            />
          )}
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto mt-16">
          <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold font-headline mb-4">Our Mission: Your Career Success</h2>
                <p className="text-muted-foreground mb-6">Our mission is to transform ambition into expertise by delivering high-quality career training online. We achieve this by:</p>
                 <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0"/>
                        <span className="text-muted-foreground">Delivering job-oriented, industry-relevant skill development courses with certification.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0"/>
                        <span className="text-muted-foreground">Providing practical skills training through real-world projects and hands-on learning experiences.</span>
                    </li>
                     <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0"/>
                        <span className="text-muted-foreground">Equipping learners with technical excellence, problem-solving abilities, and crucial employability skills.</span>
                    </li>
                     <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0"/>
                        <span className="text-muted-foreground">Focusing on women empowerment courses and entrepreneurship training to foster inclusive growth.</span>
                    </li>
                     <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0"/>
                        <span className="text-muted-foreground">Building an ecosystem of continuous learning, career mentorship, and professional networking.</span>
                    </li>
                </ul>
              </div>
              <div>
                <h2 className="text-3xl font-bold font-headline mb-4">What We Stand For</h2>
                 <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                       <span className="font-bold text-lg text-accent mt-px">✓</span>
                       <div>
                           <h4 className="font-semibold">Employability First</h4>
                           <p className="text-muted-foreground">We provide job-ready skills that lead to real careers, not just certificates.</p>
                       </div>
                    </li>
                     <li className="flex items-start gap-3">
                       <span className="font-bold text-lg text-accent mt-px">✓</span>
                       <div>
                           <h4 className="font-semibold">Future-Focused Learning</h4>
                           <p className="text-muted-foreground">Our online courses are designed for tomorrow’s in-demand skills.</p>
                       </div>
                    </li>
                     <li className="flex items-start gap-3">
                       <span className="font-bold text-lg text-accent mt-px">✓</span>
                       <div>
                           <h4 className="font-semibold">Practical Excellence</h4>
                           <p className="text-muted-foreground">Learn by doing with practical skills training and real-world projects.</p>
                       </div>
                    </li>
                    <li className="flex items-start gap-3">
                       <span className="font-bold text-lg text-accent mt-px">✓</span>
                       <div>
                           <h4 className="font-semibold">Inclusive Growth</h4>
                           <p className="text-muted-foreground">Empowering learners from all backgrounds with our women skill development programs and more.</p>
                       </div>
                    </li>
                    <li className="flex items-start gap-3">
                       <span className="font-bold text-lg text-accent mt-px">✓</span>
                       <div>
                           <h4 className="font-semibold">Career Transformation</h4>
                           <p className="text-muted-foreground">From learner to professional, we guide your path to career growth.</p>
                       </div>
                    </li>
                </ul>
              </div>
          </div>
      </div>

    </div>
  );
}
