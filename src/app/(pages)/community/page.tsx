import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import placeholderImages from "@/lib/placeholder-images.json";
import { MessageSquare, Search } from "lucide-react";
import Image from "next/image";

const discussions = [
  {
    id: 1,
    author: "Sarah Chen",
    avatar: "https://picsum.photos/seed/sc/100/100",
    title: "Best resources for learning React Hooks?",
    replies: 12,
    time: "2h ago",
  },
  {
    id: 2,
    author: "Jasmine Kaur",
    avatar: "https://picsum.photos/seed/jk/100/100",
    title: "Portfolio review thread - Get feedback on your work!",
    replies: 45,
    time: "8h ago",
  },
  {
    id: 3,
    author: "Emily White",
    avatar: "https://picsum.photos/seed/ew/100/100",
    title: "Tips for negotiating your first tech salary.",
    replies: 28,
    time: "1d ago",
  },
  {
    id: 4,
    author: "Maria Rodriguez",
    avatar: "https://picsum.photos/seed/mr/100/100",
    title: "How do you stay motivated when learning to code?",
    replies: 50,
    time: "2d ago",
  },
];

export default function CommunityPage() {
    const bannerImage = placeholderImages.placeholderImages.find(p => p.id === "community-banner");

  return (
    <div>
        <section className="relative w-full h-64 bg-muted">
            {bannerImage && (
                <Image
                src={bannerImage.imageUrl}
                alt={bannerImage.description}
                fill
                className="object-cover object-center brightness-50"
                data-ai-hint={bannerImage.imageHint}
                />
            )}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="container text-center text-primary-foreground">
                    <h1 className="text-4xl font-bold font-headline tracking-tighter sm:text-5xl">Community Forum</h1>
                    <p className="mx-auto mt-4 max-w-xl md:text-xl">Connect, share, and learn with fellow students.</p>
                </div>
            </div>
        </section>

        <div className="container py-8 md:py-12">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
                <div className="lg:col-span-2">
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-6">
                        <div className="relative w-full md:max-w-xs">
                            <Input placeholder="Search discussions..." className="pl-10" />
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        </div>
                        <Button className="w-full md:w-auto">Start a New Discussion</Button>
                    </div>

                    <Card>
                        <CardContent className="p-0">
                            <ul className="divide-y">
                                {discussions.map((d) => (
                                <li key={d.id} className="p-4 hover:bg-muted/50 transition-colors cursor-pointer">
                                    <div className="flex items-start gap-4">
                                        <Avatar className="mt-1">
                                            <AvatarImage src={d.avatar} alt={d.author} />
                                            <AvatarFallback>{d.author.charAt(0)}</AvatarFallback>
                                        </Avatar>
                                        <div className="flex-1">
                                            <h3 className="font-semibold">{d.title}</h3>
                                            <p className="text-sm text-muted-foreground">
                                                Posted by {d.author} &bull; {d.time}
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <MessageSquare className="h-4 w-4" />
                                            <span>{d.replies}</span>
                                        </div>
                                    </div>
                                </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                </div>

                <aside className="space-y-6">
                     <Card>
                        <CardHeader>
                            <CardTitle className="font-headline text-lg">Trending Topics</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2 text-sm">
                                <li className="hover:text-accent cursor-pointer">#JobOpenings</li>
                                <li className="hover:text-accent cursor-pointer">#InterviewPrep</li>
                                <li className="hover:text-accent cursor-pointer">#ProjectIdeas</li>
                                <li className="hover:text-accent cursor-pointer">#Freelancing</li>
                            </ul>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle className="font-headline text-lg">Welcome!</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">This is a space to support each other. Remember to be kind and respectful in all interactions.</p>
                        </CardContent>
                    </Card>
                </aside>
            </div>
        </div>
    </div>
  );
}
