import Image from 'next/image';
import Link from 'next/link';
import { posts } from '@/lib/blog';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Blog',
    description: 'Explore articles on career development, AI tools, entrepreneurship, and success stories from the Trending Brains Academy community.',
    alternates: {
        canonical: '/blog',
    },
};

export default function BlogPage() {
  return (
    <div className="container mx-auto py-12 md:py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold font-headline tracking-tighter sm:text-5xl">
          Trending Brains Insights
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-xl">
          Explore our latest articles on career development, technology, and success stories.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3 max-w-6xl mx-auto">
        {posts.map((post) => (
          <Card key={post.slug} className="flex flex-col overflow-hidden transform transition-transform hover:-translate-y-2">
            <Link href={`/blog/${post.slug}`} className="block">
              <Image
                src={post.image}
                alt={post.title}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
                data-ai-hint={post.imageHint}
              />
            </Link>
            <CardHeader>
              <div className="flex gap-2 mb-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
              </div>
              <CardTitle className="font-headline text-xl">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground text-sm line-clamp-3">{post.description}</p>
            </CardContent>
            <CardContent className="flex items-center justify-between text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                     <Avatar className="h-8 w-8">
                        <AvatarImage src={post.authorImage} alt={post.author} />
                        <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="font-semibold text-foreground">{post.author}</p>
                        <p>{post.date}</p>
                    </div>
                </div>
                 <Link href={`/blog/${post.slug}`} className="flex items-center text-accent hover:underline">
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
