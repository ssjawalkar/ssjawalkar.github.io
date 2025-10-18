import { useEffect, useRef, useState } from "react";
import { Building2, Calendar } from "lucide-react";

const Experience = () => {
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

  const experiences = [
    {
      title: "Software Engineer (Contractor)",
      company: "ConsultAdd / TEKsystems (Walmart Client)",
      location: "Irving, Texas",
      period: "March 2025 - Present",
      highlights: [
        "Built Insights Service platform integrating GenAI/LLM for correlating alerts and accelerating error resolution",
        "Deployed 3 custom MCP tools (MMS, CPU Profile Analyzer, CCM Cleanup) cutting CPU utilization by ~30%",
        "Built OAuth2-secured MCP server with PingFed token validation for Copilot Chat integration",
        "Integrated Milvus vector DB for RAG workflows, improving document-based AI insights",
        "Designed RESTful APIs using Flask and FastAPI for FinTech Insights system",
        "Automated testing with PyTest, increasing coverage from 0% to 50%",
      ],
    },
    {
      title: "Software Engineer",
      company: "Avaya",
      location: "Irving, Texas",
      period: "Feb 2023 - Nov 2024",
      highlights: [
        "Designed CI/CD pipelines with Azure DevOps, Jenkins, and ArgoCD (20% fewer deployment errors, 40% less downtime)",
        "Developed microservice analyzing chat conversations using LangChain for RAG and OpenAI",
        "Automated certificate renewal for 200+ certificates using Azure DevOps and GitHub Actions",
        "Built scalable microservices architecture with Docker and Kubernetes",
        "Established real-time monitoring in Datadog with custom dashboards for P1/P2 incidents",
        "Led Angular front-end development achieving 85% code coverage with 100+ Playwright automation scripts",
      ],
    },
    {
      title: "Software Developer (Associate)",
      company: "Cognizant",
      location: "Pune, India",
      period: "Oct 2018 - Aug 2021",
      highlights: [
        "Built Python applications for data messaging and file processing with end-to-end feed processing",
        "Automated ETL processes reducing manual workload by 80%, saving 45 hours weekly",
        "Developed web UI in Stibo STEP MDM platform with JavaScript business rules for supply chain automation",
        "Created reusable data transformation workflows in Informatica ETL (50% performance boost)",
      ],
    },
  ];

  return (
    <section ref={sectionRef} id="experience" className="py-20 md:py-32 relative">
      <div className="container px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className={`mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="text-accent font-mono text-lg md:text-xl">02.</span> Experience
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent to-primary rounded-full" />
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-primary to-accent/20" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={exp.company}
                  className={`relative pl-8 md:pl-20 transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-6 top-2 w-5 h-5 rounded-full bg-accent shadow-[0_0_20px_rgba(6,182,212,0.6)] border-4 border-background" />

                  {/* Content Card */}
                  <div className="group p-6 rounded-xl bg-card/30 backdrop-blur-sm border border-border hover:border-accent/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all duration-300">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1 group-hover:text-accent transition-colors">
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-2 text-muted-foreground mb-1">
                          <Building2 className="h-4 w-4" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{exp.location}</p>
                      </div>
                      <div className="flex items-center gap-2 text-accent font-mono text-sm">
                        <Calendar className="h-4 w-4" />
                        {exp.period}
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="flex gap-3 text-muted-foreground">
                          <span className="text-accent mt-2">▹</span>
                          <span className="flex-1 leading-relaxed">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
