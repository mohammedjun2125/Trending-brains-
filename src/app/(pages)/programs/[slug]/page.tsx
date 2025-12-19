import { notFound } from 'next/navigation';
import { programs } from '@/lib/programs';
import ProgramDetailContent from './ProgramDetailContent';

export function generateStaticParams() {
  // Exclude the women empowerment initiative from generating a static page here
  // as it has its own dedicated page.
  return programs
    .filter(program => program.slug !== 'women-empowerment-initiative')
    .map(program => ({
      slug: program.slug,
    }));
}

export default function ProgramDetailPage({ params }: { params: { slug: string } }) {
  const program = programs.find(p => p.slug === params.slug);

  if (!program || program.slug === 'women-empowerment-initiative') {
    notFound();
  }

  return <ProgramDetailContent slug={params.slug} />;
}
