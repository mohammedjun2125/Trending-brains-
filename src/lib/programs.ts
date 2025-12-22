import { BrainCircuit, BookOpen, Users, BarChart, Star, Palette, CookingPot, Hand, Stethoscope, Briefcase } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Program = {
  slug: string;
  title: string;
  duration: string;
  fee: string;
  description: string;
  longDescription: string;
  icon: LucideIcon;
  syllabus: {
    week: string; // Can be "Module 1", "Week 1", or a topic name
    topic: string;
  }[];
  details: {
    [key: string]: string;
  };
};


export const programs: Program[] = [
    {
    slug: "entrepreneurs-launch-pad",
    title: "Entrepreneurs Launch Pad",
    duration: "30 Days",
    fee: "₹3999",
    description: "Your 30-day journey from business idea to successful launch, covering planning, marketing, and funding.",
    longDescription: "The Entrepreneurs Launch Pad is an intensive 30-day program designed to guide aspiring entrepreneurs through every critical stage of starting a business. From understanding the fundamentals to building your brand, mastering marketing, and securing funding, this course provides the roadmap you need to launch with confidence.",
    icon: Star,
    syllabus: [
      { week: "Week 1", topic: "Understand Business: Ideation and Market Research" },
      { week: "Week 2", topic: "Build Your Business: Planning, Legal, and Operations" },
      { week: "Week 3", topic: "Marketing: Branding, Digital Presence, and Customer Acquisition" },
      { week: "Week 4", topic: "Funding & Launch: Financials, Pitching, and Go-to-Market Strategy" },
    ],
    details: {
        "Program Type": "Initiative",
        "Focus": "Entrepreneurship & Business Launch",
        "Format": "Workshops & Mentorship",
        "Audience": "Aspiring entrepreneurs",
    }
  },
  {
    slug: "women-skill-development",
    title: "Women Skill Development",
    duration: "20 Days",
    fee: "₹2999",
    description: "A foundational program for women to build essential digital and communication skills for personal and professional growth.",
    longDescription: "This program focuses on empowering women with fundamental skills for the modern world. It covers digital literacy to navigate the online landscape and enhances communication and English language abilities for better personal and professional interactions.",
    icon: BrainCircuit,
    syllabus: [
      { week: "Module 1", topic: "Digital Literacy: Computer basics, internet, and online safety." },
      { week: "Module 2", topic: "Communication & English: Effective speaking, writing, and professional etiquette." },
    ],
    details: {
        "Course Level": "Beginner",
        "Prerequisites": "None",
        "Format": "Online, instructor-led",
        "Time Commitment": "Flexible",
    }
  },
  {
    slug: "vocational-skills-for-women",
    title: "Vocational Skills for Women",
    duration: "Varies by Skill",
    fee: "₹4499",
    description: "Choose a practical skill to master, from tailoring and fashion to cooking and baking, and turn your passion into a profession.",
    longDescription: "Our Vocational Skills program allows women to choose a specific hands-on skill to develop. Each track provides expert training to help you master your craft, whether it's for personal enrichment or to start your own small business. Please note: You must choose one stream to specialize in.",
    icon: Palette,
    syllabus: [
        { week: "Track 1", topic: "Tailoring & Fashion Design" },
        { week: "Track 2", topic: "Beauty & Makeup Artistry" },
        { week: "Track 3", topic: "Cooking & Baking Arts" },
        { week: "Track 4", topic: "Professional Mehendi Design" },
    ],
    details: {
        "Course Level": "Beginner to Intermediate",
        "Prerequisites": "None",
        "Format": "Hands-on, workshop-based",
        "Audience": "Anyone looking to learn a practical trade",
    }
  },
  {
    slug: "leadership-personality-development",
    title: "Leadership & Personality Development",
    duration: "20 Days",
    fee: "₹2999",
    description: "Cultivate a powerful personality and develop the essential skills to lead with confidence and influence.",
    longDescription: "This transformative 20-day program focuses on holistic personal growth. You will enhance your personality, build unshakeable confidence, and master the key traits of effective leadership, from decision-making and time management to grooming and negotiation.",
    icon: Users,
    syllabus: [
        { week: "Core Area 1", topic: "Personality Development & Confidence Building" },
        { week: "Core Area 2", topic: "Professional Grooming & Etiquette" },
        { week: "Core Area 3", topic: "Negotiation & Decision-Making Skills" },
        { week: "Core Area 4", topic: "Time Management & Productivity" },
        { week: "Core Area 5", topic: "Developing a Leadership Mindset" },
    ],
    details: {
        "Course Level": "All Levels",
        "Prerequisites": "A desire for self-improvement",
        "Format": "Online, interactive sessions",
        "Time Commitment": "4-6 hours/week",
    }
  },
  {
    slug: "marketing-influence-ai",
    title: "Marketing & Influence in the Age of AI",
    duration: "45 Days",
    fee: "₹6999",
    description: "Master modern marketing by leveraging AI. This course covers everything from SEO and social media to paid ads and analytics.",
    longDescription: "Stay ahead in the marketing world with this comprehensive 45-day program. You'll learn the foundations of digital marketing and discover how to use cutting-edge AI tools to enhance your strategy, create content, automate campaigns, and analyze results. A bonus training on resume building and career counselling is included.",
    icon: BarChart,
    syllabus: [
        { week: "Week 1", topic: "Digital Marketing Foundations + AI Essentials" },
        { week: "Week 2", topic: "Website & Landing Page Basics" },
        { week: "Week 3", topic: "SEO Fundamentals + AI for SEO" },
        { week: "Week 4", topic: "Social Media Marketing + AI Content Creation" },
        { week: "Week 5", topic: "Paid Ads (Meta + Google) + Automation" },
        { week: "Week 6", topic: "Analytics, Business Strategy & Career/Freelance Setup" },
    ],
     details: {
        "Course Level": "Beginner to Intermediate",
        "Prerequisites": "None",
        "Bonus": "Free Resume Building & Career Counselling",
        "Format": "Online, project-based learning",
    }
  },
];
