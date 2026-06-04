import React, { useState, useEffect } from 'react';
import { ChevronDown, ExternalLink, Github, Linkedin, Mail, Zap } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const experiences = [
    {
      role: "Technical Scrum Master",
      company: "Accenture",
      period: "Nov 2022 - Present (3 years 8 months)",
      description: "Leading agile teams through digital transformation initiatives. Implementing DevOps practices for faster product rollouts with reduced defect leakage. Currently exploring AI-driven development workflows and agent-based automation.",
      highlights: ["Team Leadership", "DevOps", "Agile Transformation", "AI Integration"],
      icon: "⚡"
    },
    {
      role: "IT Project Manager / Scrum Master",
      company: "Coforge",
      period: "Jun 2022 - Nov 2022 (6 months)",
      description: "Managed project delivery, planning scope, schedule, budget, and communications. Handled resource planning, stakeholder relationships, and risk mitigation.",
      highlights: ["Project Planning", "Resource Management", "Stakeholder Communication"],
      icon: "📊"
    },
    {
      role: "Project Lead",
      company: "Wipro Technologies",
      period: "May 2019 - Jun 2022 (3 years 2 months)",
      description: "Led agile teams, executed ceremonies, managed scope and risks. Helped teams through technical roadblocks. Collaborated with other teams on latest tech stack.",
      highlights: ["Agile Leadership", "Technical Mentoring", "Team Scaling"],
      icon: "🎯"
    },
    {
      role: "Senior Project Engineer",
      company: "Wipro Technologies",
      period: "Jul 2013 - May 2019 (5 years 11 months)",
      description: "Technical DITA/XML specialist. Led sprint planning and execution. Provided pre-migration guidance and coordinated DITA migrations. End-to-end implementation of IXIASOFT DITACMS.",
      highlights: ["DITA", "XML/CMS", "Technical Implementation", "Content Management"],
      icon: "🔧"
    }
  ];

  const skills = [
    { 
      category: "Leadership", 
      items: ["Agile Management", "Scrum Master", "Team Leadership", "Stakeholder Management", "Process Improvement"] 
    },
    { 
      category: "Technical", 
      items: ["DevOps", "CI/CD", "JIRA", "Git", "DITA", "XML", "IXIASOFT CMS"] 
    },
    { 
      category: "Programming", 
      items: ["Java", "Python", "JavaScript", "TypeScript", "HTML5", "CSS3", "jQuery"] 
    },
    { 
      category: "Emerging Tech", 
      items: ["AI-Assisted Development", "Vibe Coding", "Agent Frameworks", "LLM Integration", "GitHub Copilot"] 
    }
  ];

  const projects = [
    {
      name: "guardrail_framework_complete",
      description: "Python framework for secure deployment automation and safety guardrails",
      tech: ["Python"],
      url: "https://github.com/askuma/guardrail_framework_complete",
      stars: 1
    },
    {
      name: "skills-build-applications-w-copilot-agent-mode",
      description: "Building intelligent agents with GitHub Copilot agent mode for rapid application development",
      tech: ["Python", "AI", "GitHub Copilot"],
      url: "https://github.com/askuma/skills-build-applications-w-copilot-agent-mode",
      highlight: true
    },
    {
      name: "easier-flow",
      description: "TypeScript utilities for streamlining agile workflows and automation",
      tech: ["TypeScript", "DevOps", "Workflow Automation"],
      url: "https://github.com/askuma/easier-flow"
    },
    {
      name: "MAS_SDLC_Agents",
      description: "Multi-agent systems for SDLC process automation and intelligent workflows",
      tech: ["Python", "Agents", "SDLC"],
      url: "https://github.com/askuma/MAS_SDLC_Agents"
    },
    {
      name: "askuma.github.io",
      description: "Personal portfolio and project showcase website",
      tech: ["HTML", "Web Design"],
      url: "https://github.com/askuma/askuma.github.io"
    }
  ];

  const education = {
    institution: "Indian Institute of Information Technology (IIIT)",
    degree: "Bachelor of Technology",
    field: "Information Technology",
    year: "2006 - 2010"
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-lg font-bold tracking-tight">AK</div>
          <div className="flex gap-3">
            <a href="https://github.com/askuma" target="_blank" rel="noopener noreferrer" className="p-2.5 hover:bg-gray-100 rounded-lg transition" title="GitHub">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/ashutosh-kumar-aa2747135" target="_blank" rel="noopener noreferrer" className="p-2.5 hover:bg-gray-100 rounded-lg transition" title="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="mailto:ashutosh.kumar1089@gmail.com" className="p-2.5 hover:bg-gray-100 rounded-lg transition" title="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-8 mb-16">
            <div className="overflow-hidden">
              <h1 
                className="text-7xl md:text-8xl font-bold leading-tight tracking-tight"
                style={{
                  animation: 'slideUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)'
                }}
              >
                Ashutosh Kumar
              </h1>
            </div>
            <div className="overflow-hidden">
              <p 
                className="text-2xl md:text-3xl text-gray-700 font-medium"
                style={{
                  animation: 'slideUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s backwards'
                }}
              >
                Technical Scrum Master
              </p>
            </div>
            <div className="overflow-hidden max-w-3xl">
              <p 
                className="text-lg text-gray-600 leading-relaxed"
                style={{
                  animation: 'slideUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s backwards'
                }}
              >
                12 years in enterprise IT. I lead agile teams by understanding the work deeply—because I code alongside engineers, implement DevOps practices, and explore AI-driven development. Currently learning and building with vibe coding methodologies.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 pb-16">
            <button 
              onClick={() => scrollToSection('experience')} 
              className="px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition font-medium"
            >
              View Experience
            </button>
            <button 
              onClick={() => scrollToSection('projects')} 
              className="px-8 py-3 border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-50 transition font-medium"
            >
              See Projects
            </button>
          </div>

          <div className="animate-bounce" style={{ opacity: 0.5 }}>
            <ChevronDown size={28} />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-20">Experience</h2>
          
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div 
                key={idx}
                className="pb-12 border-b border-gray-200 last:border-b-0 hover:opacity-100 transition"
                style={{
                  animation: `fadeInUp 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) ${idx * 0.12}s backwards`,
                  opacity: 0
                }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-4xl pt-1">{exp.icon}</span>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold">{exp.role}</h3>
                    <p className="text-lg text-gray-700 font-medium">{exp.company}</p>
                    <p className="text-sm text-gray-500 mt-1">{exp.period}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-6 ml-20 leading-relaxed">{exp.description}</p>
                <div className="flex flex-wrap gap-2 ml-20">
                  {exp.highlights.map((h, i) => (
                    <span key={i} className="px-4 py-2 bg-gray-100 text-gray-800 text-sm rounded-full font-medium">
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-20">Skills & Focus Areas</h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {skills.map((skillGroup, idx) => (
              <div key={idx}>
                <h3 className="text-xl font-bold mb-6 text-gray-900">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-3">
                  {skillGroup.items.map((skill, i) => (
                    <div
                      key={i}
                      className="px-5 py-3 bg-white border border-gray-300 rounded-lg text-gray-800 hover:border-gray-400 hover:shadow-md transition font-medium"
                      style={{
                        animation: `fadeInUp 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${(idx * 0.12) + (i * 0.06)}s backwards`,
                        opacity: 0
                      }}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="p-8 bg-white border-2 border-gray-900 rounded-xl">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
              <Zap size={28} className="text-yellow-500" />
              Current Focus
            </h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              I'm actively exploring <strong>AI-driven development</strong> through building applications with vibe coding methodologies, experimenting with agentic AI workflows, and sharing learnings through public GitHub projects. I believe technical leadership means staying hands-on—learning by doing, not theorizing.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-20">Featured Projects</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {projects.map((project, idx) => (
              <a
                key={idx}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group p-7 rounded-xl border transition hover:shadow-xl ${
                  project.highlight
                    ? 'border-gray-900 bg-gray-900 text-white'
                    : 'border-gray-300 bg-white hover:border-gray-400'
                }`}
                style={{
                  animation: `fadeInUp 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) ${idx * 0.12}s backwards`,
                  opacity: 0
                }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1 pr-4">
                    <h3 className="text-lg font-bold group-hover:underline break-words">{project.name}</h3>
                  </div>
                  <ExternalLink size={20} className="opacity-50 group-hover:opacity-100 transition flex-shrink-0" />
                </div>
                <p className={`text-sm mb-5 leading-relaxed ${project.highlight ? 'text-gray-200' : 'text-gray-700'}`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className={`text-xs px-3 py-1.5 rounded-md font-medium ${
                        project.highlight
                          ? 'bg-gray-700 text-gray-200'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>

          <div className="p-10 border-2 border-gray-300 rounded-xl text-center bg-gray-50">
            <p className="text-gray-700 mb-6 text-lg font-medium">Building in public on GitHub — exploring, learning, and sharing</p>
            <a
              href="https://github.com/askuma"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition font-bold text-lg"
            >
              <Github size={24} />
              View Full GitHub Profile
            </a>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 px-6 bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-12">Education</h2>
          <div className="p-8 bg-white border border-gray-300 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-900">{education.institution}</h3>
            <p className="text-xl text-gray-700 mt-3">{education.degree} in {education.field}</p>
            <p className="text-lg text-gray-600 mt-2">{education.year}</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 px-6 bg-gray-900 text-white border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8">Let's Connect</h2>
          <p className="text-xl text-gray-300 mb-16 max-w-2xl mx-auto leading-relaxed">
            Interested in discussing technical leadership, agile transformation, or AI in software development? Excited to hear from you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:ashutosh.kumar1089@gmail.com"
              className="px-10 py-4 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition font-bold flex items-center justify-center gap-3 text-lg"
            >
              <Mail size={24} />
              Email Me
            </a>
            <a
              href="https://linkedin.com/in/ashutosh-kumar-aa2747135"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 border-2 border-white text-white rounded-lg hover:bg-white/10 transition font-bold flex items-center justify-center gap-3 text-lg"
            >
              <Linkedin size={24} />
              LinkedIn
            </a>
            <a
              href="https://github.com/askuma"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 border-2 border-white text-white rounded-lg hover:bg-white/10 transition font-bold flex items-center justify-center gap-3 text-lg"
            >
              <Github size={24} />
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 bg-gray-800 border-t border-gray-700 text-center text-gray-400">
        <p className="text-sm">Built with React, Framer Motion & Tailwind CSS | Hosted on GitHub Pages | Updated June 2026</p>
      </footer>

      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        * {
          scroll-behavior: smooth;
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}
