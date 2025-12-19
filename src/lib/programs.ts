import { BrainCircuit, BookOpen, Users, BarChart, Star } from "lucide-react";
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
    week: string;
    topic: string;
  }[];
  details: {
    [key: string]: string;
  };
};


export const programs: Program[] = [
    {
    slug: "women-empowerment-initiative",
    title: "Women Empowerment Initiative",
    duration: "Ongoing",
    fee: "Custom Pricing",
    description: "A flagship initiative to train and launch the next generation of female entrepreneurs and leaders.",
    longDescription: "Our Women Empowerment Initiative is a comprehensive program designed to equip women with the essential skills, confidence, and network to excel in their careers and launch their own successful ventures. This initiative provides mentorship, hands-on training, and access to a supportive community of like-minded individuals.",
    icon: Star,
    syllabus: [
      { week: "Module 1", topic: "Leadership and Confidence Building" },
      { week: "Module 2", topic: "Business and Financial Literacy" },
      { week: "Module 3", topic: "Digital Skills for the Modern World" },
      { week: "Module 4", topic: "Networking and Mentorship" },
      { week: "Module 5", topic: "Project Development and Launch" },
    ],
    details: {
        "Program Type": "Initiative",
        "Focus": "Entrepreneurship & Leadership",
        "Format": "Workshops, Mentorship, Community Support",
        "Audience": "Aspiring female leaders and entrepreneurs",
    }
  },
  {
    slug: "digital-marketing-pro",
    title: "Digital Marketing Pro",
    duration: "12 Weeks",
    fee: "$1,200",
    description: "Master SEO, SEM, social media, and content marketing. This comprehensive course prepares you for a high-demand career in the digital world.",
    longDescription: "Dive deep into the world of digital marketing and learn how to create and execute effective strategies that drive growth. This program covers everything from search engine optimization (SEO) and paid advertising to social media engagement and data analytics. You'll work on real-world projects to build a strong portfolio.",
    icon: BrainCircuit,
    syllabus: [
      { week: "1-2", topic: "Introduction to Digital Marketing & SEO Fundamentals" },
      { week: "3-4", topic: "Content Marketing & Social Media Strategy" },
      { week: "5-6", topic: "Paid Advertising (Google Ads & Facebook Ads)" },
      { week: "7-8", topic: "Analytics and Data Interpretation" },
      { week: "9-10", topic: "Email Marketing & Automation" },
      { week: "11-12", topic: "Final Project & Portfolio Building" },
    ],
    details: {
        "Course Level": "Beginner to Intermediate",
        "Prerequisites": "None",
        "Format": "Online, self-paced with weekly deadlines",
        "Time Commitment": "8-10 hours/week",
    }
  },
  {
    slug: "full-stack-development",
    title: "Full-Stack Development",
    duration: "16 Weeks",
    fee: "$2,500",
    description: "Become a job-ready developer. Learn front-end with React and back-end with Node.js to build complete web applications.",
    longDescription: "This immersive program is designed to take you from beginner to job-ready full-stack developer. You will learn to build responsive and dynamic web applications using modern technologies like React for the front-end and Node.js for the back-end, along with essential database knowledge.",
    icon: BookOpen,
    syllabus: [
      { week: "1-4", topic: "HTML, CSS, and Advanced JavaScript" },
      { week: "5-8", topic: "React.js and State Management (Redux/Zustand)" },
      { week: "9-12", topic: "Node.js, Express, and RESTful APIs" },
      { week: "13-16", topic: "Database Integration (SQL & NoSQL) and Deployment" },
    ],
    details: {
        "Course Level": "Beginner",
        "Prerequisites": "Basic computer literacy",
        "Format": "Online, instructor-led sessions & hands-on projects",
        "Time Commitment": "15-20 hours/week",
    }
  },
  {
    slug: "leadership-management",
    title: "Leadership & Management",
    duration: "8 Weeks",
    fee: "$950",
    description: "Cultivate essential leadership qualities. Learn to manage teams, drive projects, and communicate effectively to inspire change.",
    longDescription: "Step into a leadership role with confidence. This program focuses on the practical skills needed to manage teams, communicate effectively, and lead projects successfully. You'll explore different leadership styles and learn how to apply them in various business scenarios.",
    icon: Users,
    syllabus: [
        { week: "1-2", topic: "Foundations of Modern Leadership & Emotional Intelligence" },
        { week: "3-4", topic: "Effective Communication and Conflict Resolution Strategies" },
        { week: "5-6", topic: "Team Motivation, Delegation, and Performance Management" },
        { week: "7-8", topic: "Strategic Planning, Change Management, and Final Case Study" },
    ],
    details: {
        "Course Level": "Intermediate",
        "Prerequisites": "2+ years of professional experience recommended",
        "Format": "Online, live virtual classrooms",
        "Time Commitment": "6-8 hours/week",
    }
  },
  {
    slug: "ux-ui-design-fundamentals",
    title: "UX/UI Design Fundamentals",
    duration: "10 Weeks",
    fee: "$1,500",
    description: "Learn to design intuitive and beautiful user interfaces. This course covers user research, wireframing, prototyping, and visual design principles.",
    longDescription: "Create user-centered designs that are both functional and beautiful. This course covers the entire UX/UI design process, from conducting user research and creating personas to building interactive prototypes and applying visual design principles. You'll finish with a portfolio-ready project.",
    icon: BarChart,
    syllabus: [
        { week: "1-2", topic: "Introduction to UX/UI and Design Thinking" },
        { week: "3-4", topic: "User Research and Persona Creation" },
        { week: "5-6", topic: "Wireframing, Prototyping, and User Flows with Figma" },
        { week: "7-8", topic: "Visual Design, Typography, and Color Theory" },
        { week: "9-10", topic: "Usability Testing, Handoff, and Final Project Presentation" },
    ],
     details: {
        "Course Level": "Beginner",
        "Prerequisites": "None",
        "Format": "Online, project-based learning",
        "Time Commitment": "10-12 hours/week",
    }
  },
];
