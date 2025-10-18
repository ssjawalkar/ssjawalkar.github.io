import { useEffect, useRef, useState } from "react";

const Skills = () => {
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

  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "TypeScript", "JavaScript", "Java", "Bash", "Shell", "HTML5"],
    },
    {
      title: "Frameworks & Libraries",
      skills: ["Node.js", "Express.js", "Django", "Flask", "Angular", "Spring Boot", "React"],
    },
    {
      title: "Cloud & DevOps",
      skills: ["Azure", "Docker", "Kubernetes", "Jenkins", "GitHub Actions", "ArgoCD", "Terraform", "Azure DevOps"],
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "MongoDB", "Google BigQuery", "SQL", "Milvus"],
    },
    {
      title: "AI & ML",
      skills: ["LangChain", "OpenAI", "LangGraph", "RAG", "Model Context Protocol", "Vector Databases"],
    },
    {
      title: "Monitoring & Tools",
      skills: ["Datadog", "Prometheus", "Grafana", "Git", "Kafka", "Playwright"],
    },
  ];

  return (
    <section ref={sectionRef} id="skills" className="py-20 md:py-32 relative">
      <div className="container px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="text-accent font-mono text-lg md:text-xl">04.</span> Skills & Technologies
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent to-primary rounded-full" />
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className={`group p-6 rounded-xl bg-card/30 backdrop-blur-sm border border-border hover:border-accent/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] transition-all duration-300 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm font-mono rounded-lg bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 hover:border-primary/40 hover:scale-105 transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
