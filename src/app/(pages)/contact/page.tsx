"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { submitContactForm, type ContactState } from "@/lib/actions";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import React from "react";
import Image from "next/image";
import placeholderImages from "@/lib/placeholder-images.json";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export default function ContactPage() {
    const { toast } = useToast();
    const [formState, setFormState] = React.useState<ContactState>({});
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        const formData = new FormData();
        formData.append("name", values.name);
        formData.append("email", values.email);
        formData.append("message", values.message);

        const result = await submitContactForm({}, formData);
        setFormState(result);

        if (result.success) {
            toast({
                title: "Success!",
                description: result.message,
            });
            form.reset();
        } else {
            toast({
                title: "Error",
                description: result.message,
                variant: "destructive",
            });
        }
    }

    const bannerImage = placeholderImages.placeholderImages.find(p => p.id === "contact-banner");

  return (
    <>
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
                <h1 className="text-4xl font-bold font-headline tracking-tighter sm:text-5xl">Get in Touch</h1>
                <p className="mx-auto mt-4 max-w-xl md:text-xl">Have a question or feedback? We'd love to hear from you.</p>
            </div>
        </div>
    </section>
    <div className="container max-w-2xl py-12 md:py-16">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="your@email.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea placeholder="Your message..." rows={6} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </Form>
    </div>
    </>
  );
}
