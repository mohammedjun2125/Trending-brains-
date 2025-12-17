import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const programs = [
  {
    title: "Digital Marketing Pro",
    duration: "12 Weeks",
    fee: "$1,200",
    description: "Master SEO, SEM, social media, and content marketing. This comprehensive course prepares you for a high-demand career in the digital world.",
    syllabus: [
      { week: "1-2", topic: "Introduction to Digital Marketing & SEO Fundamentals" },
      { week: "3-4", topic: "Content Marketing & Social Media Strategy" },
      { week: "5-6", topic: "Paid Advertising (Google Ads & Facebook Ads)" },
      { week: "7-8", topic: "Analytics and Data Interpretation" },
      { week: "9-10", topic: "Email Marketing & Automation" },
      { week: "11-12", topic: "Final Project & Portfolio Building" },
    ],
  },
  {
    title: "Full-Stack Development",
    duration: "16 Weeks",
    fee: "$2,500",
    description: "Become a job-ready developer. Learn front-end with React and back-end with Node.js to build complete web applications.",
    syllabus: [
      { week: "1-4", topic: "HTML, CSS, and Advanced JavaScript" },
      { week: "5-8", topic: "React.js and State Management" },
      { week: "9-12", topic: "Node.js, Express, and Database Fundamentals (SQL & NoSQL)" },
      { week: "13-16", topic: "Full-Stack Application Development & Deployment" },
    ],
  },
  {
    title: "Leadership & Management",
    duration: "8 Weeks",
    fee: "$950",
    description: "Cultivate essential leadership qualities. Learn to manage teams, drive projects, and communicate effectively to inspire change.",
    syllabus: [
        { week: "1-2", topic: "Foundations of Modern Leadership" },
        { week: "3-4", topic: "Effective Communication and Conflict Resolution" },
        { week: "5-6", topic: "Team Management and Motivation" },
        { week: "7-8", topic: "Strategic Planning and Execution" },
    ],
  },
  {
    title: "UX/UI Design Fundamentals",
    duration: "10 Weeks",
    fee: "$1,500",
    description: "Learn to design intuitive and beautiful user interfaces. This course covers user research, wireframing, prototyping, and visual design principles.",
     syllabus: [
        { week: "1-2", topic: "Introduction to UX/UI and Design Thinking" },
        { week: "3-4", topic: "User Research and Persona Creation" },
        { week: "5-6", topic: "Wireframing, Prototyping, and User Flows" },
        { week: "7-8", topic: "Visual Design, Typography, and Color Theory" },
        { week: "9-10", topic: "Usability Testing and Final Project" },
    ],
  },
];

export default function ProgramsPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold font-headline tracking-tighter sm:text-5xl">
          Our Programs
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-xl">
          Invest in yourself. Our programs are designed to provide practical skills for the modern workplace.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2 max-w-5xl mx-auto">
        {programs.map((program) => (
          <Card key={program.title} className="flex flex-col">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">{program.title}</CardTitle>
              <CardDescription>{program.description}</CardDescription>
              <div className="flex gap-4 pt-2 text-sm text-muted-foreground">
                  <span>Duration: {program.duration}</span>
                  <span>Fee: {program.fee}</span>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <h4 className="mb-2 font-semibold">Syllabus Overview</h4>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>View Weekly Breakdown</AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-3 pl-2">
                      {program.syllabus.map((item) => (
                        <li key={item.week} className="flex items-start gap-3">
                          <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-accent" />
                          <div>
                            <span className="font-semibold">Weeks {item.week}:</span> {item.topic}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
            <CardFooter>
              <Button size="lg" className="w-full">Enroll Now</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
