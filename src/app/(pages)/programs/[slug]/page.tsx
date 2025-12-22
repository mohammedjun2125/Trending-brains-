import { notFound } from 'next/navigation';
import { programs } from '@/lib/programs';
import ProgramDetailContent from './ProgramDetailContent';
import type { Metadata } from 'next';

export function generateStaticParams() {
  // Exclude the women empowerment initiative from generating a static page here
  // as it has its own dedicated page.
  return programs
    .filter(program => program.slug !== 'entrepreneurs-launch-pad')
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
    },
    alternates: {
      canonical: `/programs/${program.slug}`,
    },
  };
}


export default function ProgramDetailPage({ params }: { params: { slug: string } }) {
  const program = programs.find(p => p.slug === params.slug);

  if (!program || program.slug === 'entrepreneurs-launch-pad') {
    notFound();
  }

  return <ProgramDetailContent slug={params.slug} />;
}
