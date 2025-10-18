import { Code2, Cloud, Cpu, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import profileImage from "@/assets/samihan.jpeg";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const highlights = [
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "Azure, Docker, Kubernetes, Terraform, ArgoCD",
    },
    {
      icon: Cpu,
      title: "AI & ML",
      description: "LangChain, OpenAI, RAG, Vector DBs, MCP Tools",
    },
    {
      icon: Code2,
      title: "Full-Stack Dev",
      description: "Python, TypeScript, Node.js, Angular, Spring Boot",
    },
    {
      icon: Sparkles,
      title: "Automation",
      description: "CI/CD Pipelines, Monitoring, Observability",
    },
  ];

  return (
    <section ref={sectionRef} id="about" className="py-20 md:py-32 relative">
      <div className="container px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div
            className={`mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="text-accent font-mono text-lg md:text-xl">01.</span> About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent to-primary rounded-full" />
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div
              className={`transition-all duration-700 delay-150 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
            >
              <div className="relative w-64 h-64 mx-auto">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20 blur-2xl" />
                <img
                  src={profileImage}
                  alt="Samihan Jawalkar"
                  className="relative w-full h-full object-cover rounded-2xl border-2 border-accent/30 shadow-[0_0_40px_rgba(6,182,212,0.3)]"
                />
              </div>
            </div>

            {/* Bio */}
            <div
              className={`space-y-4 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
            >
              <p className="text-muted-foreground leading-relaxed">
                I'm a software engineer with a passion for building scalable, intelligent systems. Currently working as an{" "}
                <span className="text-accent font-semibold">AI Engineer contractor</span> at Walmart, where I architect
                solutions and build scalable applications leveraging GenAI technologies.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With experience spanning <span className="text-primary font-semibold">DevOps automation</span>,
                <span className="text-primary font-semibold"> cloud architecture</span>, and
                <span className="text-primary font-semibold"> AI/ML integration</span>, I specialize in creating robust
                CI/CD pipelines, microservices, and tools that save hundreds of engineering hours.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I hold a <span className="text-foreground font-semibold">Master's in Computer Science</span> from UNC
                Charlotte (GPA 3.9/4.0) and have contributed to high-impact projects at{" "}
                <span className="text-foreground">Avaya</span> and <span className="text-foreground">Cognizant</span>.
              </p>
            </div>
          </div>

          {/* Highlights Grid */}
          <div
            className={`grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="group p-6 rounded-xl bg-card/30 backdrop-blur-sm border border-border hover:border-accent/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <item.icon className="h-8 w-8 text-accent mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
