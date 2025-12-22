import { MetadataRoute } from 'next';
import { programs } from '@/lib/programs';
import { posts } from '@/lib/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = 'https://trendingbrains.com'; // Replace with your actual domain

  // Static pages
  const staticRoutes = [
    '', 
    '/about', 
    '/contact', 
    '/programs', 
    '/women-empowerment',
    '/blog',
    '/terms',
    '/privacy',
    '/disclaimer'
  ].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Program pages
  const programRoutes = programs
    .filter(program => program.slug !== 'entrepreneurs-launch-pad')
    .map(program => ({
      url: `${siteUrl}/programs/${program.slug}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
  }));
  
  // Blog post pages
  const postRoutes = posts.map(post => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date).toISOString(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));


  return [...staticRoutes, ...programRoutes, ...postRoutes];
}
