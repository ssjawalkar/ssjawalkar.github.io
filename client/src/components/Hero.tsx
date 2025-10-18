import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background">
        <div className="absolute inset-0 opacity-30" style={{ background: "var(--gradient-mesh)" }} />
      </div>

      {/* Animated grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.1)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      <div className="container relative z-10 px-4 md:px-6 animate-fade-in">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Greeting */}
          <div className="space-y-4">
            <p className="text-accent font-mono text-sm md:text-base tracking-wider animate-fade-in-left">
              Hi, my name is
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-glow-pulse">
                Samihan Jawalkar
              </span>
            </h1>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-foreground/80">
              Software Engineer & DevOps Architect
            </h2>
          </div>

          {/* Bio */}
          <p className="max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
            I build scalable cloud infrastructure, intelligent AI systems, and modern web applications.
            Specializing in DevOps automation, microservices architecture, and full-stack development.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-[0_0_30px_rgba(99,102,241,0.4)] hover:shadow-[0_0_40px_rgba(99,102,241,0.6)] transition-all"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              View My Work
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-accent/50 text-accent hover:bg-accent/10 hover:border-accent font-semibold"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 pt-4">
            <a
              href="https://github.com/ssjawalkar"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="p-3 rounded-lg bg-card/50 backdrop-blur-sm border border-border hover:border-accent hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all">
                <Github className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors" />
              </div>
            </a>
            <a
              href="https://linkedin.com/in/samihan-jawalkar/"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="p-3 rounded-lg bg-card/50 backdrop-blur-sm border border-border hover:border-accent hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all">
                <Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors" />
              </div>
            </a>
            <a
              href="mailto:samihan.jawalkar7@gmail.com"
              className="group"
            >
              <div className="p-3 rounded-lg bg-card/50 backdrop-blur-sm border border-border hover:border-accent hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all">
                <Mail className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors" />
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-accent/50 flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
