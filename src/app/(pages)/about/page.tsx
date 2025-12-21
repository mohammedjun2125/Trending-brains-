import Image from "next/image";
import placeholderImages from "@/lib/placeholder-images.json";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about the mission, vision, and story of Trending Brains Academy. We are dedicated to empowering women worldwide through high-quality online education.",
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
          Our mission is to empower women worldwide through accessible, high-quality education and fostering a community of entrepreneurs and leaders.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold font-headline">Our Story</h2>
          <p className="text-muted-foreground">
            Founded in 2020, Trending Brains Academy started with a simple idea: to create a space where women could acquire practical skills, build professional networks, and gain the confidence to pursue their ambitions. What began as a small workshop has grown into a global platform, touching the lives of thousands of women from diverse backgrounds.
          </p>
          <p className="text-muted-foreground">
            We believe that education is the key to unlocking potential. Our curriculum is designed and taught by industry experts, ensuring that our students receive the most current and relevant knowledge. We are committed to providing a supportive and collaborative learning environment where every student can thrive.
          </p>
          
          <h2 className="text-3xl font-bold font-headline">Our Vision</h2>
           <p className="text-muted-foreground">
            We envision a world where every woman has the opportunity to achieve her full potential. We aim to be a leading force in online education, continuously innovating our programs and expanding our reach to create a global impact. Through our efforts, we hope to build a future where female-led businesses and initiatives are at the forefront of every industry.
          </p>
        </div>
        <div>
           {aboutImage && (
            <Image
              src={aboutImage.imageUrl}
              alt={aboutImage.description}
              width={600}
              height={400}
              className="rounded-lg object-cover"
              data-ai-hint={aboutImage.imageHint}
            />
          )}
        </div>
      </div>
    </div>
  );
}
