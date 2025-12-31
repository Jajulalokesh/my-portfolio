import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
  Github, Linkedin, Mail, ExternalLink, Download, Code, Database, Globe, Calendar, MapPin, Award, BookOpen, Send 
} from 'lucide-react';
import heroBackground from '@/assets/hero-background.jpg';
import profilePlaceholder from '@/assets/profile-placeholder.jpg';
import projectShowcase from '@/assets/project-showcase.jpg';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [typedText, setTypedText] = useState('');
  const fullText = "Building secure and user-friendly web applications with skills in Frontend, Python, and cybersecurity.";

  // Typing animation effect
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

  // Scroll spy for navigation
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'experience', 'education', 'contact'];
      const scrollPosition = window.scrollY + 100;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const skills = {
    frontend: ['HTML5', 'CSS3', 'JavaScript', 'React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
    python: ['Python', 'Django', 'Flask', 'REST APIs'],
    penetrationTester: ['Kali Linux', 'Nmap', 'Burp Suite', 'Metasploit', 'Wireshark', 'SQLMap', 'Hydra']
  };

  const projects = [
    {
      name: "POCKET SHOP TECH",
      description: "A modern e-commerce platform for pocket-sized tech gadgets with intuitive shopping experience and responsive design.",
      tech: ["HTML", "CSS", "Python"],
      liveUrl: "/pocket-shop",
      githubUrl: "#"
    },
    {
      name: "Phishing Email Analyzer",
      description: "A cybersecurity-focused web application that analyzes email headers, URLs, and content to detect phishing attempts.",
      tech: ["HTML", "CSS", "JavaScript"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  const experience = "FRESHER";

  const education = [
    {
      degree: "Bachelor of Computer Science (Cyber Security)",
      institution: "GURUNANAK INSTITUTIONS",
      year: "2022 - 2026",
      description: "Specializing in Cybersecurity with focus on Software Engineering and Web Development"
    }
  ];

  const certifications = ["Frontend Developer", "Web Application VAPT", "AWS Certified Developer Associate", "Kali for Penetration Testers"];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-0 border-b border-glass-border rounded-none">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-orbitron font-bold gradient-text">Lokesh Jajula</div>
          
          <div className="hidden md:flex space-x-8">
            {['home', 'about', 'projects', 'experience', 'education', 'contact'].map(section => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === section ? 'text-primary' : 'text-muted-foreground'}`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>

          <Button className="btn-primary text-primary-foreground font-medium" onClick={() => window.open('#', '_blank')}>
            <Download className="w-4 h-4 mr-2" />
            Resume
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-background/80"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center glass-card p-12 rounded-3xl slide-in-up">
            <img src={profilePlaceholder} alt="Lokesh Jajula" className="w-32 h-32 rounded-full mx-auto mb-8 border-4 border-primary glow-primary" />
            <h1 className="text-6xl md:text-8xl font-orbitron font-bold mb-6 gradient-text">Lokesh Jajula</h1>
            <h2 className="text-2xl md:text-3xl font-orbitron font-medium mb-6 text-secondary">Penetration Tester</h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 min-h-[60px]">
              <span className="typing">{typedText}</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button className="btn-primary text-primary-foreground font-medium text-lg px-8 py-3" onClick={() => scrollToSection('projects')}>
                <Code className="w-5 h-5 mr-2" /> View Projects
              </Button>
              <Button className="btn-secondary text-secondary-foreground font-medium text-lg px-8 py-3" onClick={() => window.open('#', '_blank')}>
                <Download className="w-5 h-5 mr-2" /> Download Resume
              </Button>
            </div>
          </div>
        </div>

        {/* Floating particles */}
        <div className="particles">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${6 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-center mb-16 gradient-text">About Me</h2>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="slide-in-left">
              <div className="glass-card p-8 rounded-2xl">
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  I am a Frontend & Python Developer with a strong foundation in Penetration Testing. I have hands-on experience with tools like Nmap, Burp Suite, Metasploit, Nessus, and Wireshark, allowing me to build secure web applications and perform comprehensive security assessments.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Eager to contribute to innovative web projects and grow professionally within a dynamic organization. I have developed a strong foundation in cybersecurity principles while building practical experience in modern web technologies and development practices.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Passionate about building secure, efficient, and user-friendly applications while continuously expanding my skills in Frontend development, Python, and Penetration Testing.
                </p>
              </div>
            </div>
            <div className="slide-in-right">
              <img src={projectShowcase} alt="Project Showcase" className="rounded-2xl glass-card p-2" />
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="glass-card p-6 hover:glow-primary transition-all duration-300">
              <div className="flex items-center mb-4">
                <Code className="w-8 h-8 text-primary mr-3" />
                <h3 className="text-xl font-orbitron font-semibold">Frontend</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map(skill => (
                  <span key={skill} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm border border-primary/20">{skill}</span>
                ))}
              </div>
            </Card>

            <Card className="glass-card p-6 hover:glow-secondary transition-all duration-300">
              <div className="flex items-center mb-4">
                <Database className="w-8 h-8 text-secondary mr-3" />
                <h3 className="text-xl font-orbitron font-semibold">Python</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.python.map(skill => (
                  <span key={skill} className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm border border-secondary/20">{skill}</span>
                ))}
              </div>
            </Card>

            <Card className="glass-card p-6 hover:glow-accent transition-all duration-300">
              <div className="flex items-center mb-4">
                <Globe className="w-8 h-8 text-accent mr-3" />
                <h3 className="text-xl font-orbitron font-semibold">Penetration Tester</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.penetrationTester.map(skill => (
                  <span key={skill} className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm border border-accent/20">{skill}</span>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects, Experience, Education, Contact Sections remain unchanged */}
      {/* You can copy your previous sections for Projects, Experience, Education & Contact */}
      {/* Make sure the skills mapping and emails are consistent as above */}

    
  

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-center mb-16 gradient-text">
            Featured Projects
          </h2>
          
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="glass-card p-6 group hover:scale-105 transition-all duration-300">
                <div className="mb-4">
                  <h3 className="text-2xl font-orbitron font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map(tech => (
                    <span key={tech} className="bg-muted/50 text-foreground px-3 py-1 rounded-full text-sm border border-muted">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <Button variant="outline" className="flex-1 group-hover:border-primary group-hover:text-primary transition-colors" onClick={() => window.open(project.liveUrl, '_blank')}>
                    <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
                  </Button>
                  <Button variant="outline" className="flex-1 group-hover:border-secondary group-hover:text-secondary transition-colors" onClick={() => window.open(project.githubUrl, '_blank')}>
                    <Github className="w-4 h-4 mr-2" /> Code
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-center mb-16 gradient-text">
            Experience ({experience})
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <Card className="glass-card p-8 text-center">
              <h3 className="text-2xl font-orbitron font-semibold mb-4 text-primary">
                Ready to Start My Journey
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                I am a Frontend & Python Developer with experience in web application development and a VAPT/cybersecurity internship at Supraja Technology. Skilled in penetration testing tools like Nmap, Burp Suite, Metasploit, Nessus, and Wireshark, I’m passionate about building secure, efficient, and user-friendly applications.
              </p>
              <p className="text-muted-foreground">
                I’m actively seeking opportunities as a Cybersecurity Specialist, SOC Analyst, VAPT Engineer, or Web Developer to apply my skills in HTML, CSS, Python, Flask, React, and other modern web technologies in a dynamic and challenging work environment, while contributing to secure and impactful projects.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section id="education" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-center mb-16 gradient-text">
            Education & Certifications
          </h2>
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Education */}
            <div>
              <h3 className="text-2xl font-orbitron font-semibold mb-6 flex items-center">
                <BookOpen className="w-6 h-6 mr-3 text-primary" /> Education
              </h3>
              
              {education.map((edu, index) => (
                <Card key={index} className="glass-card p-6 mb-4">
                  <h4 className="text-xl font-semibold mb-2">{edu.degree}</h4>
                  <div className="flex items-center text-muted-foreground mb-3">
                    <Calendar className="w-4 h-4 mr-2" /> {edu.year}
                  </div>
                  <p className="text-muted-foreground">{edu.description}</p>
                </Card>
              ))}
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-orbitron font-semibold mb-6 flex items-center">
                <Award className="w-6 h-6 mr-3 text-accent" /> Certifications
              </h3>
              
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <Card key={index} className="glass-card p-4 hover:glow-accent transition-all duration-300">
                    <div className="flex items-center">
                      <Award className="w-5 h-5 mr-3 text-accent" />
                      <span className="font-medium">{cert}</span>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-center mb-16 gradient-text">
            Get In Touch
          </h2>
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="glass-card p-8">
              <h3 className="text-2xl font-orbitron font-semibold mb-6">Send Message</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input type="text" className="w-full p-3 rounded-lg bg-muted/50 border border-muted text-foreground focus:border-primary focus:outline-none transition-colors" placeholder="Your Name" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input type="email" className="w-full p-3 rounded-lg bg-muted/50 border border-muted text-foreground focus:border-primary focus:outline-none transition-colors" placeholder="your.email@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea rows={4} className="w-full p-3 rounded-lg bg-muted/50 border border-muted text-foreground focus:border-primary focus:outline-none transition-colors resize-none" placeholder="Your message..."></textarea>
                </div>
                <Button className="btn-primary w-full text-primary-foreground font-medium">
                  <Send className="w-4 h-4 mr-2" /> Send Message
                </Button>
              </form>
            </Card>

            {/* Contact Info & Social */}
            <div className="space-y-8">
              <Card className="glass-card p-8">
                <h3 className="text-2xl font-orbitron font-semibold mb-6">Let's Connect</h3>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 mr-4 text-primary" />
                    <span>lokeshjajula1406@email.com</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 mr-4 text-secondary" />
                    <span>Based in India</span>
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <Button variant="outline" size="icon" className="hover:border-primary hover:text-primary hover:glow-primary transition-all duration-300" onClick={() => window.open('https://github.com', '_blank')}>
                    <Github className="w-5 h-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="hover:border-secondary hover:text-secondary hover:glow-secondary transition-all duration-300" onClick={() => window.open('https://linkedin.com', '_blank')}>
                    <Linkedin className="w-5 h-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="hover:border-accent hover:text-accent hover:glow-accent transition-all duration-300" onClick={() => window.open('mailto:lokeshjajula1406@email.com')}>
                    <Mail className="w-5 h-5" />
                  </Button>
                </div>
              </Card>

              {/* Resume Download CTA */}
              <Card className="glass-card p-8 text-center">
                <h3 className="text-xl font-orbitron font-semibold mb-4">Download My Resume</h3>
                <p className="text-muted-foreground mb-6">
                  Get a detailed overview of my experience, skills, and achievements.
                </p>
                <Button className="btn-secondary text-secondary-foreground font-medium w-full" onClick={() => window.open('#', '_blank')}>
                  <Download className="w-4 h-4 mr-2" /> Download PDF Resume
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-glass-border">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            © 2025 Lokesh Jajula. Crafted with passion and futuristic vibes.
          </p>
        </div>
     
      </footer>
    </div>  
  );  



};
export default Portfolio;
