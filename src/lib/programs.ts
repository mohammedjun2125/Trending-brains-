
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
  image: string;
  imageHint: string;
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
    description: "A 30-day startup training program to take your business idea to a successful launch with practical skills training.",
    longDescription: "The Entrepreneurs Launch Pad is an intensive 30-day program designed to guide aspiring entrepreneurs through every critical stage of starting a business. From understanding the fundamentals to building your brand, mastering marketing, and securing funding, this course provides the roadmap you need to launch with confidence. This is a premier startup training program for career growth.",
    icon: Star,
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxlbnRyZXByZW5ldXIlMjBwbGFubmluZ3xlbnwwfHx8fDE3NjYxMzY2MjN8MA&ixlib=rb-4.0.3&q=80&w=1080",
    imageHint: "entrepreneur planning",
    syllabus: [
      { week: "Week 1", topic: "Business Ideation & Market Research" },
      { week: "Week 2", topic: "Business Planning, Legal & Operations" },
      { week: "Week 3", topic: "Branding, Digital Presence & Customer Acquisition" },
      { week: "Week 4", topic: "Financials, Pitching & Go-to-Market Strategy" },
    ],
    details: {
        "Program Type": "Entrepreneurship Training",
        "Focus": "Business Launch & Growth",
        "Format": "Workshops & Mentorship",
        "Certification": "Yes, included",
    }
  },
  {
    slug: "women-skill-development",
    title: "Women Skill Development Program",
    duration: "20 Days",
    fee: "₹2999",
    description: "A foundational women empowerment course to build essential digital and communication skills for career growth.",
    longDescription: "This women skill development program focuses on empowering women with fundamental skills for the modern world. It provides digital skills training to navigate the online landscape and enhances communication abilities for better personal and professional interactions. This online course comes with certification.",
    icon: BrainCircuit,
    image: "/program-women-skill.jpg",
    imageHint: "women learning",
    syllabus: [
      { week: "Module 1", topic: "Digital Literacy: Computer basics, internet, and online safety." },
      { week: "Module 2", topic: "Communication & English: Effective speaking, writing, and professional etiquette." },
    ],
    details: {
        "Course Level": "Beginner",
        "Prerequisites": "None",
        "Format": "Online, instructor-led",
        "Certification": "Yes, included",
    }
  },
  {
    slug: "vocational-skills-for-women",
    title: "Vocational Training Courses for Women",
    duration: "1 Week",
    fee: "₹4499",
    description: "Our vocational training programs in India help you master a practical skill and turn your passion into a profession.",
    longDescription: "Our vocational training courses allow women to choose a specific hands-on skill to develop. Each track provides expert training to help you master your craft, whether for personal enrichment or to start your own small business. Please note: You must choose one stream to specialize in. Certification is provided upon completion.",
    icon: Palette,
    image: "/program-vocational.jpg",
    imageHint: "vocational skills",
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
        "Certification": "Yes, included",
    }
  },
  {
    slug: "leadership-personality-development",
    title: "Leadership & Personality Development",
    duration: "20 Days",
    fee: "₹2999",
    description: "Cultivate a powerful personality and develop essential leadership skills to influence and inspire.",
    longDescription: "This transformative 20-day program focuses on holistic personal growth. You will enhance your personality, build unshakeable confidence, and master the key traits of effective leadership, from decision-making and time management to grooming and negotiation, which are crucial for career growth.",
    icon: Users,
    image: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxza2lsbCUyMGRldmVsb3BtZW50fGVufDB8fHx8MTc2NjAzMDM1Nnww&ixlib=rb-4.0.3&q=80&w=1080",
    imageHint: "leadership development",
    syllabus: [
        { week: "Module 1", topic: "Personality Development & Confidence Building" },
        { week: "Module 2", topic: "Professional Grooming & Etiquette" },
        { week: "Module 3", topic: "Negotiation & Decision-Making Skills" },
        { week: "Module 4", topic: "Time Management & Productivity" },
    ],
    details: {
        "Course Level": "All Levels",
        "Focus": "Employability Skills, Career Growth",
        "Format": "Online, interactive sessions",
        "Certification": "Yes, included",
    }
  },
  {
    slug: "marketing-influence-ai",
    title: "Digital Marketing & AI",
    duration: "45 Days",
    fee: "₹6999",
    description: "Master modern marketing by leveraging AI. This online course with certification covers SEO, social media, and paid ads.",
    longDescription: "Stay ahead with this comprehensive digital marketing course. You'll learn to use cutting-edge AI tools to enhance your strategy, create content, and analyze results. This is a job-ready skills program that includes a bonus training on resume building and career counselling for your career growth.",
    icon: BarChart,
    image: "/program-marketing-ai.jpg",
    imageHint: "marketing AI",
    syllabus: [
        { week: "Week 1-2", topic: "Digital Marketing Foundations & AI Essentials" },
        { week: "Week 3", topic: "Website Basics & SEO Fundamentals + AI for SEO" },
        { week: "Week 4-5", topic: "Social Media Marketing & Paid Ads (Meta + Google)" },
        { week: "Week 6", topic: "Analytics, Business Strategy & Career/Freelance Setup" },
    ],
     details: {
        "Course Level": "Beginner to Intermediate",
        "Prerequisites": "None",
        "Bonus": "Free Resume Building & Career Counselling",
        "Certification": "Yes, included",
    }
  },
];
