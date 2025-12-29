
import { notFound } from 'next/navigation';
import { programs } from '@/lib/programs';
import { posts } from '@/lib/blog';
import ProgramDetailClient from './ProgramDetailClient';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import type { Program } from '@/lib/programs';

export function generateStaticParams() {
  return programs
    .map(program => ({
      slug: program.slug,
    }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const program = programs.find((p) => p.slug === params.slug);

  if (!program) {
    return {
      title: 'Program Not Found',
      description: 'The requested program could not be found.',
    };
  }

  return {
    title: `${program.title} Course`,
    description: program.longDescription,
    keywords: [program.title, 'online course', 'Trending Brains Academy', ...Object.values(program.details)],
     openGraph: {
      title: `${program.title} | Trending Brains Academy`,
      description: program.longDescription,
      type: 'website',
      images: [
        {
          url: program.image,
          width: 800,
          height: 450,
          alt: program.title,
        },
      ],
    },
    alternates: {
      canonical: `/programs/${program.slug}`,
    },
  };
}


export default function ProgramDetailPage({ params }: { params: { slug: string } }) {
  const program = programs.find(p => p.slug === params.slug);

  if (!program) {
    notFound();
  }
  
  const ProgramIcon = program.icon;

  // Create a serializable version of the program object without the icon
  const { icon, ...serializableProgram } = program;

  const getRelatedArticles = () => {
      switch(program.slug) {
          case 'entrepreneurs-launch-pad':
              return posts.filter(p => p.slug === 'entrepreneurship-training-start-business' || p.slug === 'student-success-story');
          case 'women-skill-development':
              return posts.filter(p => p.slug === 'women-skill-development-programs' || p.slug === 'job-ready-skills-for-2025');
          case 'vocational-skills-for-women':
              return posts.filter(p => p.slug === 'vocational-training-programs-india' || p.slug === 'women-skill-development-programs');
          default:
               return posts.filter(p => p.slug === 'skill-development-courses-in-india' || p.slug === 'online-courses-with-certification-career-growth').slice(0,2);
      }
  }

  const relatedArticles = getRelatedArticles();


  return (
     <div className="container max-w-4xl mx-auto py-12 md:py-16">
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

        <Image
            src={program.image}
            alt={program.title}
            width={800}
            height={450}
            className="w-full rounded-lg object-cover mb-12 aspect-[16/9]"
            priority
            data-ai-hint={program.imageHint}
        />

        <ProgramDetailClient program={serializableProgram} />

        {relatedArticles.length > 0 && (
            <section className="mt-16">
                <h2 className="text-2xl font-bold font-headline mb-6 text-center">Related Articles</h2>
                <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                    {relatedArticles.map(post => (
                        <Link key={post.slug} href={`/blog/${post.slug}`} className="block p-4 rounded-lg border hover:bg-muted transition-colors">
                            <h3 className="font-semibold font-headline">{post.title}</h3>
                            <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{post.description}</p>
                        </Link>
                    ))}
                </div>
            </section>
        )}
    </div>
  );
}
