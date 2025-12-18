import { notFound } from 'next/navigation';
import { programs } from '@/lib/programs';
import ProgramDetailContent from './ProgramDetailContent';

export function generateStaticParams() {
  return programs.map(program => ({
    slug: program.slug,
  }));
}

export default function ProgramDetailPage({ params }: { params: { slug: string } }) {
  const program = programs.find(p => p.slug === params.slug);

  if (!program) {
    notFound();
  }

  return <ProgramDetailContent slug={params.slug} />;
}
