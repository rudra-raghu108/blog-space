import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Calendar,
  Code,
  BookOpen,
} from "lucide-react";

export default function About() {
  const skills = [
    "React",
    "TypeScript",
    "Next.js",
    "Node.js",
    "Express",
    "PostgreSQL",
    "TailwindCSS",
    "Prisma",
    "GraphQL",
    "AWS",
    "Docker",
    "Git",
  ];


  return (
    <Layout>
      <div className="py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden flex items-center justify-center border-4 border-primary/20">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Ff7c3d7d3a1f6403dad4e8964e7c82885%2Fa15886a8d84d4eec81640334c18fa4c4?format=webp&width=800"
                alt="BlogSpace Logo"
                className="w-full h-full object-contain p-4"
                style={{ filter: 'hue-rotate(280deg) saturate(1.2) brightness(1.1)' }}
              />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              About BlogSpace
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Welcome to my digital space where I share my journey in web
              development, showcase projects, and explore the latest
              technologies shaping our industry.
            </p>
          </div>

          {/* Bio Section */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Based in INDIA
              </CardTitle>
              <CardDescription>
                Full Stack Developer & Tech Enthusiast
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="leading-relaxed">
                I'm a passionate full stack developer with over 12 months of
                experience building modern web applications. I specialize in
                React, TypeScript, and Node.js, with a keen interest in creating
                user-friendly interfaces and scalable backend systems.
              </p>
              <p className="leading-relaxed">
                When I'm not coding, you'll find me writing technical articles,
                contributing to open source projects, or exploring new
                technologies. I believe in the power of sharing knowledge and
                helping others grow in their development journey.
              </p>

              {/* Contact Links */}
              <div className="flex flex-wrap gap-3 pt-4">
                <Button variant="outline" size="sm" asChild>
                  <a
                    href="https://github.com/rudra-raghu108"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gap-2"
                  >
                    <Github className="h-4 w-4" />
                    GitHub
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a
                    href="https://www.linkedin.com/in/rudra-raghuwanshi-8b76ab240"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gap-2"
                  >
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href="mailto:rudra.raghuwanshi013@gmail.com" className="gap-2">
                    <Mail className="h-4 w-4" />
                    Email
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Skills Section */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="h-5 w-5" />
                Technical Skills
              </CardTitle>
              <CardDescription>
                Technologies I work with regularly
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge key={index} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>


          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4">Let's Connect</h2>
            <p className="text-muted-foreground mb-6">
              Interested in collaborating or have a question? I'd love to hear
              from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="gap-2">
                <a href="mailto:rudra.raghuwanshi013@gmail.com">
                  <Mail className="h-4 w-4" />
                  Get in Touch
                </a>
              </Button>
              <Button variant="outline" asChild className="gap-2">
                <a href="/projects">
                  <BookOpen className="h-4 w-4" />
                  View My Work
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
