import { useEffect, useRef, useState } from "react";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "Walmart Insights Service",
      description: "AI-powered platform that integrates runtime signals from multiple sources and leverages GenAI/LLM to correlate alerts, enabling faster resolution of service errors and dependency issues. Built with Flask, FastAPI, and Milvus vector DB for RAG workflows.",
      tags: ["Python", "Flask", "FastAPI", "LangChain", "Milvus", "RAG", "OAuth2"],
      featured: true,
    },
    {
      title: "MCP Custom Tools Suite",
      description: "Developed three production-grade Model Context Protocol tools (MMS, CPU Profile Analyzer, CCM Cleanup) that automated diagnostics and profiling across Walmart's ecosystem, reducing CPU utilization by ~30% on targeted services.",
      tags: ["Python", "MCP", "OAuth2", "PingFed", "Copilot Integration"],
      featured: true,
    },
    {
      title: "Audio Transcribe",
      description: "Spring Boot application that transcribes audio files into text using OpenAI's Whisper model. Provides a RESTful API for audio processing with support for multiple audio formats.",
      tags: ["Java", "Spring Boot", "OpenAI Whisper", "REST API"],
      github: "https://github.com/ssjawalkar/Audio-To-Text",
      featured: false,
    },
    {
      title: "Trading Website",
      description: "Full-stack MVC web application with enhanced security features including role-based authorization, session tracking, password encryption, and comprehensive server-side validations for secure trading operations.",
      tags: ["MongoDB", "Express.js", "Node.js", "Security", "Authentication"],
      github: "https://github.com/ssjawalkar/Lets_Trade",
      featured: false,
    },
    {
      title: "Chat Analysis Microservice",
      description: "Microservice analyzing customer-agent chat conversations using LangChain for Retrieval-Augmented Generation with OpenAI, enabling efficient contextual insights extraction and conversation understanding.",
      tags: ["Python", "LangChain", "OpenAI", "RAG", "Microservices"],
      featured: false,
    },
    {
      title: "CI/CD Pipeline Automation",
      description: "Designed and implemented comprehensive CI/CD pipelines using Azure DevOps, Jenkins, and ArgoCD, achieving 20% reduction in deployment errors and 40% decrease in deployment downtime through automated testing and rollback mechanisms.",
      tags: ["Azure DevOps", "Jenkins", "ArgoCD", "Docker", "Kubernetes"],
      featured: false,
    },
  ];

  return (
    <section ref={sectionRef} id="projects" className="py-20 md:py-32 relative">
      <div className="container px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="text-accent font-mono text-lg md:text-xl">03.</span> Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent to-primary rounded-full" />
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`group relative p-6 rounded-xl bg-card/30 backdrop-blur-sm border border-border hover:border-accent/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] transition-all duration-300 ${
                  project.featured ? "md:col-span-2" : ""
                } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >

                <div className="flex flex-col h-full">
                  {/* Project Header */}
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    {project.github && (
                      <div className="flex gap-2">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-card/50 hover:bg-card border border-border hover:border-accent transition-all"
                        >
                          <Github className="h-5 w-5 text-muted-foreground hover:text-accent transition-colors" />
                        </a>
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-mono rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More on GitHub */}
          <div className={`mt-12 text-center transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <Button
              variant="outline"
              size="lg"
              className="border-accent/50 text-accent hover:bg-accent/10 hover:border-accent font-semibold"
              onClick={() => window.open("https://github.com/ssjawalkar", "_blank")}
            >
              <Github className="mr-2 h-5 w-5" />
              View More on GitHub
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
