import { useEffect, useRef, useState } from "react";
import { Mail, Linkedin, Github, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
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

  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "samihan.jawalkar7@gmail.com",
      href: "mailto:samihan.jawalkar7@gmail.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/samihan-jawalkar",
      href: "https://linkedin.com/in/samihan-jawalkar/",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/ssjawalkar",
      href: "https://github.com/ssjawalkar",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 (814) 976-9816",
      href: "tel:+918149769816",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Pune, India",
      href: null,
    },
  ];

  return (
    <section ref={sectionRef} id="contact" className="py-20 md:py-32 relative">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className={`mb-16 text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="text-accent font-mono text-lg md:text-xl">05.</span> Get In Touch
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent to-primary rounded-full mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm always interested in hearing about new opportunities, collaborations, or just having a chat about tech. 
              Feel free to reach out!
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {contactLinks.map((contact, index) => (
              <div
                key={contact.label}
                className={`group transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {contact.href ? (
                  <a
                    href={contact.href}
                    target={contact.href.startsWith("http") ? "_blank" : undefined}
                    rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="block p-6 rounded-xl bg-card/30 backdrop-blur-sm border border-border hover:border-accent/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-lg bg-accent/10 border border-accent/20 group-hover:bg-accent/20 group-hover:scale-110 transition-all">
                        <contact.icon className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">{contact.label}</p>
                        <p className="font-mono text-sm text-foreground group-hover:text-accent transition-colors">
                          {contact.value}
                        </p>
                      </div>
                    </div>
                  </a>
                ) : (
                  <div className="p-6 rounded-xl bg-card/30 backdrop-blur-sm border border-border">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-lg bg-accent/10 border border-accent/20">
                        <contact.icon className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">{contact.label}</p>
                        <p className="font-mono text-sm text-foreground">{contact.value}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className={`text-center transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-[0_0_30px_rgba(99,102,241,0.4)] hover:shadow-[0_0_40px_rgba(99,102,241,0.6)] transition-all"
              onClick={() => window.location.href = "mailto:samihan.jawalkar7@gmail.com"}
            >
              <Mail className="mr-2 h-5 w-5" />
              Send Me an Email
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
