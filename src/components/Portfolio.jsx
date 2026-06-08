import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
  Github, Linkedin, Mail, ChevronDown,
  Zap, Users, TrendingUp, Award, Code2, Brain,
  GitBranch, Layers, Shield, Terminal,
  ArrowUpRight, MapPin, Calendar, BookOpen, Star, Filter
} from 'lucide-react';

// ─── Data ────────────────────────────────────────────────────────────────────

const ROLES = [
  'Technical Scrum Master',
  'AI Explorer & Builder',
  'DevOps Champion',
  'Engineering Mentor',
];

const STATS = [
  { value: 12, suffix: '+', label: 'Years Experience', icon: Award, color: '#22C55E' },
  { value: 20, suffix: '+', label: 'Enterprise Projects', icon: Layers, color: '#3B82F6' },
  { value: 50, suffix: 'M+', label: 'Value Delivered', prefix: '$', icon: TrendingUp, color: '#F59E0B' },
  { value: 95, suffix: '%', label: 'On-time Delivery', icon: Zap, color: '#A855F7' },
];

const EXPERIENCES = [
  {
    role: 'Project Manager / Technical Scrum Master',
    company: 'Accenture',
    location: 'Hyderabad, India',
    period: 'Nov 2022 – Present',
    current: true,
    color: '#A855F7',
    achievements: [
      'Led cross-functional team of 15+ engineers with 95%+ on-time delivery rate',
      'Architected DevOps practices: reduced deployment cycle from 6 weeks to 3 days',
      'Mentored 8+ junior project managers and technical leads on agile frameworks',
      'Implemented CI/CD pipelines reducing deployment risk and increasing velocity',
      'Building AI-driven development tools and agentic workflow experiments',
    ],
    tags: ['Agile', 'DevOps', 'CI/CD', 'AI Integration', 'Team Leadership'],
  },
  {
    role: 'IT Project Manager | Scrum Master',
    company: 'Coforge',
    location: 'Hyderabad, India',
    period: 'Jun 2022 – Nov 2022',
    color: '#3B82F6',
    achievements: [
      'Drove delivery across 3 concurrent initiatives ($8M+ combined value)',
      'Managed resources, responsibilities, and schedules for cross-functional teams',
      'Maintained stakeholder relationships across on-site and offshore locations',
      'Proactively identified project slippage and intervened with optimized plans',
    ],
    tags: ['Project Planning', 'Resource Management', 'Risk Mitigation', 'Agile'],
  },
  {
    role: 'Project Lead',
    company: 'Wipro Technologies',
    location: 'Hyderabad, India',
    period: 'May 2019 – Jun 2022',
    color: '#F59E0B',
    achievements: [
      'Led agile team of 12 developers through product development and maintenance cycles',
      'Reduced sprint cycle time by 35% through process optimization',
      'Managed scope, schedules, and risks across multiple parallel initiatives',
      'Mentored junior engineers on technical best practices and architecture',
    ],
    tags: ['Agile Leadership', 'Team Scaling', 'Process Optimization', 'Scrum'],
  },
  {
    role: 'Senior Project Engineer',
    company: 'Wipro Technologies',
    location: 'Hyderabad, India',
    period: 'Jul 2013 – May 2019',
    color: '#22C55E',
    achievements: [
      'Agile developer contributing to 6+ products across 5+ year tenure',
      'Led DITA migration for enterprise clients — 100,000+ pages migrated',
      'End-to-end implementation and maintenance of IXIASOFT DITACMS',
      'Led sprint planning and execution as technical module lead',
    ],
    tags: ['DITA', 'XML', 'CMS Implementation', 'Technical Leadership'],
  },
  {
    role: 'Project Engineer',
    company: 'Wipro Technologies',
    location: 'Hyderabad, India',
    period: 'Jul 2010 – Jun 2013',
    color: '#EC4899',
    achievements: [
      'Developed integration programs for third-party software compatibility',
      'Custom development using Arbortext proprietary XML language',
      'Key developer and QA for multiple enterprise customization projects',
      'Foundation in enterprise software, XML, and client-specific solutions',
    ],
    tags: ['XML', 'Software Dev', 'QA', 'Integration', 'Arbortext'],
  },
];

const SKILL_GROUPS = [
  {
    category: 'Leadership & Agile',
    color: '#3B82F6',
    icon: Users,
    skills: ['Agile Project Management', 'Scrum Master', 'Team Leadership', 'Stakeholder Management', 'Agile Coaching', 'Process Improvement', 'Cross-functional Leadership'],
  },
  {
    category: 'DevOps & Tools',
    color: '#F59E0B',
    icon: GitBranch,
    skills: ['DevOps', 'CI/CD Pipelines', 'Continuous Integration', 'JIRA', 'Git', 'GitLab', 'Deployment Automation'],
  },
  {
    category: 'Programming',
    color: '#A855F7',
    icon: Code2,
    skills: ['Python', 'Java', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3'],
  },
  {
    category: 'AI & Emerging Tech',
    color: '#22C55E',
    icon: Brain,
    skills: ['AI-Assisted Development', 'Vibe Coding', 'GitHub Copilot', 'Agentic AI Workflows', 'Prompt Engineering', 'LLM Integration'],
  },
  {
    category: 'Content & CMS',
    color: '#EC4899',
    icon: Layers,
    skills: ['DITA', 'XML', 'Content Management Systems', 'IXIASOFT', 'Arbortext'],
  },
];

const LANG_COLORS = {
  Python:     '#3B82F6',
  JavaScript: '#F7DF1E',
  TypeScript: '#3178C6',
};

const CAT_META = {
  'AI / LLM':       { color: '#22C55E', bg: 'rgba(34,197,94,0.1)',   border: 'rgba(34,197,94,0.25)'   },
  'Agile Tools':    { color: '#3B82F6', bg: 'rgba(59,130,246,0.1)',  border: 'rgba(59,130,246,0.25)'  },
  'Dev Tools':      { color: '#F59E0B', bg: 'rgba(245,158,11,0.1)',  border: 'rgba(245,158,11,0.25)'  },
  'Learning / Lab': { color: '#A855F7', bg: 'rgba(168,85,247,0.1)',  border: 'rgba(168,85,247,0.25)'  },
};

const PROJECTS = [
  {
    name: 'guardrail_framework_complete',
    tagline: 'Multi-backend AI Safety Layer',
    description:
      'Unified AI guardrail abstraction — deploy across NVIDIA NeMo, GuardrailsAI, Microsoft Presidio, and Lakera Guard with a single policy, zero vendor lock-in.',
    tech: ['Python', 'FastAPI', 'PostgreSQL'],
    lang: 'Python',
    category: 'AI / LLM',
    url: 'https://github.com/askuma/guardrail_framework_complete',
    featured: true,
    highlights: [
      'Multi-backend routing — one policy, any backend',
      '40+ REST endpoints with full FastAPI server',
      'A/B policy testing with sticky per-user traffic splits',
      'Prometheus metrics + SSE real-time audit log',
      'Agent guardrails: tool call validation & budget caps',
    ],
  },
  {
    name: 'SprintPulse',
    tagline: 'AI-Powered Sprint Reports',
    description:
      'Automated sprint status reporter — aggregates data from Jira, GitHub, and Slack, then uses Mistral AI to generate structured weekly insights in a React dashboard.',
    tech: ['JavaScript', 'React', 'Mistral AI'],
    lang: 'JavaScript',
    category: 'Agile Tools',
    url: 'https://github.com/askuma/SprintPulse',
    featured: true,
    highlights: [
      'Pulls live data from Jira, GitHub & Slack',
      'AI-generated sprint summaries via Mistral',
      'React dashboard with one-click report generation',
      'Mock mode for safe offline development',
    ],
  },
  {
    name: 'SprintPulseN8N',
    tagline: 'Low-Code Workflow Automation',
    description:
      'N8N-powered variant of SprintPulse — orchestrates sprint reporting via visual workflow nodes, removing all custom glue code from the Jira / GitHub / Slack pipeline.',
    tech: ['TypeScript', 'N8N', 'Workflow Automation'],
    lang: 'TypeScript',
    category: 'Agile Tools',
    url: 'https://github.com/askuma/SprintPulseN8N',
  },
  {
    name: 'generate-tech-stack',
    tagline: 'Auto-Detect & Visualize Tech Stack',
    description:
      'Scan any project — zero config — and generate a visual TECH_STACK.html with architecture diagram, bar chart, and tool cards. Ships as a Claude Code skill and MCP server.',
    tech: ['Python', 'MCP', 'Claude Code'],
    lang: 'Python',
    category: 'Dev Tools',
    url: 'https://github.com/askuma/generate-tech-stack',
    highlights: [
      'Detects 50+ tools from package.json, Dockerfile, go.mod…',
      'Layered architecture diagram + horizontal bar chart',
      'Works as MCP server and GitHub Copilot Extension',
    ],
  },
  {
    name: 'MAS_SDLC_Agents',
    tagline: 'Multi-Agent SDLC Orchestration',
    description:
      'Multi-agent system for automating SDLC processes — intelligent orchestration across planning, development, review, and deployment lifecycle stages.',
    tech: ['Python', 'Multi-Agent', 'SDLC'],
    lang: 'Python',
    category: 'AI / LLM',
    url: 'https://github.com/askuma/MAS_SDLC_Agents',
  },
  {
    name: 'Copilot Agent Mode',
    tagline: 'AI-Assisted App Development',
    description:
      'Practical exercises building real apps with GitHub Copilot agent mode — documenting what vibe coding actually feels like with structured learning experiments.',
    tech: ['Python', 'GitHub Copilot'],
    lang: 'Python',
    category: 'Learning / Lab',
    url: 'https://github.com/askuma/skills-build-applications-w-copilot-agent-mode',
  },
];

const CERTIFICATIONS = [
  { name: 'Project Management Professional (PMP)', issuer: 'Project Management Institute', icon: Shield },
  { name: 'Agile PM with Jira Cloud', issuer: 'Projects, Boards & Issues', icon: Zap },
  { name: 'Managing Project Stakeholders', issuer: 'Professional Development', icon: Users },
  { name: 'Mistakes to Avoid in Agile PM', issuer: 'Professional Development', icon: BookOpen },
];

// ─── Hooks ───────────────────────────────────────────────────────────────────

function useTypewriter(texts, speed = 80) {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const currentText = texts[textIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentText.length) {
          setDisplayText(currentText.slice(0, charIndex + 1));
          setCharIndex(c => c + 1);
        } else {
          setIsPaused(true);
          setTimeout(() => { setIsPaused(false); setIsDeleting(true); }, 2200);
        }
      } else {
        if (charIndex > 0) {
          setDisplayText(currentText.slice(0, charIndex - 1));
          setCharIndex(c => c - 1);
        } else {
          setIsDeleting(false);
          setTextIndex(i => (i + 1) % texts.length);
        }
      }
    }, isDeleting ? speed / 2 : speed);
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, texts, speed, isPaused]);

  return displayText;
}

function useCounter(end, duration = 1800, trigger = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    let startTime = null;
    let raf;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [end, duration, trigger]);
  return count;
}

// ─── Sub-components ──────────────────────────────────────────────────────────

function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Dot grid */}
      <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="dot-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="#22C55E" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dot-grid)" />
      </svg>

      {/* Gradient orbs */}
      <div
        className="absolute rounded-full blur-3xl opacity-10 animate-float"
        style={{
          width: '600px', height: '600px',
          background: 'radial-gradient(circle, #22C55E, transparent)',
          top: '-200px', right: '-100px',
          animationDelay: '0s',
        }}
      />
      <div
        className="absolute rounded-full blur-3xl opacity-8 animate-float"
        style={{
          width: '400px', height: '400px',
          background: 'radial-gradient(circle, #3B82F6, transparent)',
          bottom: '0px', left: '-100px',
          animationDelay: '3s',
        }}
      />
      <div
        className="absolute rounded-full blur-3xl opacity-6"
        style={{
          width: '300px', height: '300px',
          background: 'radial-gradient(circle, #A855F7, transparent)',
          top: '40%', left: '40%',
        }}
      />

      {/* Floating particles */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${Math.random() * 4 + 2}px`,
            height: `${Math.random() * 4 + 2}px`,
            background: i % 3 === 0 ? '#22C55E' : i % 3 === 1 ? '#3B82F6' : '#A855F7',
            left: `${10 + i * 7}%`,
            animation: `particleFloat ${8 + i * 1.5}s linear ${i * 0.8}s infinite`,
            opacity: 0.6,
          }}
        />
      ))}
    </div>
  );
}

function AvatarIllustration() {
  return (
    <div className="relative w-64 h-64 mx-auto">
      {/* Outer rotating ring */}
      <svg
        className="absolute inset-0 w-full h-full animate-rotate-slow"
        viewBox="0 0 256 256"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="128" cy="128" r="120"
          stroke="#22C55E"
          strokeWidth="1"
          strokeDasharray="8 12"
          opacity="0.5"
        />
        <circle cx="128" cy="8" r="5" fill="#22C55E" opacity="0.9" />
        <circle cx="248" cy="128" r="4" fill="#3B82F6" opacity="0.7" />
        <circle cx="128" cy="248" r="3" fill="#A855F7" opacity="0.7" />
      </svg>

      {/* Inner reverse ring */}
      <svg
        className="absolute inset-0 w-full h-full animate-rotate-slow-reverse"
        viewBox="0 0 256 256"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ inset: '16px', width: 'calc(100% - 32px)', height: 'calc(100% - 32px)' }}
      >
        <circle
          cx="112" cy="112" r="100"
          stroke="#3B82F6"
          strokeWidth="1"
          strokeDasharray="4 20"
          opacity="0.4"
        />
      </svg>

      {/* Avatar circle */}
      <div
        className="absolute rounded-full flex items-center justify-center animate-glow-pulse"
        style={{
          inset: '32px',
          background: 'linear-gradient(135deg, #1E293B, #0F172A)',
          border: '2px solid rgba(34, 197, 94, 0.4)',
        }}
      >
        <div className="text-center">
          <div
            className="font-mono font-bold text-5xl"
            style={{ color: '#22C55E', textShadow: '0 0 30px rgba(34, 197, 94, 0.6)' }}
          >
            AK
          </div>
          <div className="font-mono text-xs mt-1" style={{ color: '#94A3B8' }}>
            15+ yrs
          </div>
        </div>
      </div>

      {/* Floating skill badges */}
      {[
        { label: 'PMP', color: '#F59E0B', x: '-20px', y: '40px' },
        { label: 'AI', color: '#22C55E', x: '200px', y: '60px' },
        { label: 'DevOps', color: '#3B82F6', x: '-30px', y: '170px' },
        { label: 'Agile', color: '#A855F7', x: '185px', y: '165px' },
      ].map((badge, i) => (
        <motion.div
          key={badge.label}
          className="absolute font-mono text-xs font-semibold px-2.5 py-1 rounded-full"
          style={{
            left: badge.x,
            top: badge.y,
            background: `rgba(${badge.color === '#22C55E' ? '34,197,94' : badge.color === '#3B82F6' ? '59,130,246' : badge.color === '#F59E0B' ? '245,158,11' : '168,85,247'}, 0.15)`,
            border: `1px solid ${badge.color}40`,
            color: badge.color,
          }}
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 3 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.7 }}
        >
          {badge.label}
        </motion.div>
      ))}
    </div>
  );
}

function StatCard({ stat, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const count = useCounter(stat.value, 1800, inView);
  const Icon = stat.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.34, 1.56, 0.64, 1] }}
      className="glass rounded-2xl p-6 text-center card-glow transition-all duration-300 cursor-default"
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
        style={{ background: `${stat.color}20`, border: `1px solid ${stat.color}40` }}
      >
        <Icon size={22} style={{ color: stat.color }} />
      </div>
      <div className="font-mono font-bold text-3xl mb-1" style={{ color: stat.color }}>
        {stat.prefix || ''}{count}{stat.suffix}
      </div>
      <div className="text-sm" style={{ color: '#94A3B8' }}>{stat.label}</div>
    </motion.div>
  );
}

function TimelineItem({ exp, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className="relative flex gap-6"
    >
      {/* Timeline dot + line */}
      <div className="flex flex-col items-center flex-shrink-0">
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
          className="w-4 h-4 rounded-full mt-1.5 flex-shrink-0"
          style={{
            background: exp.color,
            boxShadow: `0 0 16px ${exp.color}80`,
            border: `2px solid ${exp.color}60`,
          }}
        />
        {index < EXPERIENCES.length - 1 && (
          <div
            className="w-px flex-1 mt-2"
            style={{ background: `linear-gradient(to bottom, ${exp.color}40, transparent)`, minHeight: '60px' }}
          />
        )}
      </div>

      {/* Content card */}
      <div className="pb-12 flex-1">
        <motion.div
          whileHover={{ scale: 1.01, boxShadow: `0 0 30px ${exp.color}20` }}
          transition={{ duration: 0.2 }}
          className="glass rounded-2xl p-6 card-glow transition-all duration-300"
          style={{ borderLeft: `2px solid ${exp.color}60` }}
        >
          {/* Header */}
          <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-semibold text-lg" style={{ color: '#F8FAFC' }}>{exp.role}</h3>
                {exp.current && (
                  <span
                    className="font-mono text-xs px-2 py-0.5 rounded-full"
                    style={{ background: '#22C55E20', color: '#22C55E', border: '1px solid #22C55E40' }}
                  >
                    CURRENT
                  </span>
                )}
              </div>
              <div className="font-semibold" style={{ color: exp.color }}>{exp.company}</div>
            </div>
            <div className="text-right">
              <div className="font-mono text-xs flex items-center gap-1.5 justify-end" style={{ color: '#94A3B8' }}>
                <Calendar size={12} />
                {exp.period}
              </div>
              <div className="font-mono text-xs flex items-center gap-1.5 justify-end mt-1" style={{ color: '#94A3B8' }}>
                <MapPin size={12} />
                {exp.location}
              </div>
            </div>
          </div>

          {/* Achievements */}
          <ul className="space-y-2 mb-5">
            {exp.achievements.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm" style={{ color: '#CBD5E1' }}>
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: exp.color }} />
                {item}
              </li>
            ))}
          </ul>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {exp.tags.map((tag, i) => (
              <span
                key={i}
                className="font-mono text-xs px-2.5 py-1 rounded-lg"
                style={{
                  background: `${exp.color}15`,
                  color: exp.color,
                  border: `1px solid ${exp.color}30`,
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

function SkillGroup({ group, groupIndex }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const Icon = group.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: groupIndex * 0.08 }}
      className="glass rounded-2xl p-6 card-glow transition-all duration-300"
    >
      <div className="flex items-center gap-3 mb-5">
        <div
          className="w-9 h-9 rounded-lg flex items-center justify-center"
          style={{ background: `${group.color}20`, border: `1px solid ${group.color}40` }}
        >
          <Icon size={16} style={{ color: group.color }} />
        </div>
        <h3 className="font-semibold" style={{ color: '#F8FAFC' }}>{group.category}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {group.skills.map((skill, i) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: groupIndex * 0.08 + i * 0.05 }}
            whileHover={{ scale: 1.05, backgroundColor: `${group.color}30` }}
            className="font-mono text-xs px-3 py-1.5 rounded-lg cursor-default transition-colors duration-200"
            style={{
              background: `${group.color}10`,
              color: '#CBD5E1',
              border: `1px solid ${group.color}25`,
            }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

function LangDot({ lang }) {
  const color = LANG_COLORS[lang] || '#94A3B8';
  return (
    <span className="flex items-center gap-1.5 font-mono text-xs" style={{ color: '#94A3B8' }}>
      <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: color }} />
      {lang}
    </span>
  );
}

function CategoryBadge({ category }) {
  const meta = CAT_META[category] || { color: '#94A3B8', bg: 'rgba(148,163,184,0.1)', border: 'rgba(148,163,184,0.2)' };
  return (
    <span
      className="font-mono text-xs px-2.5 py-1 rounded-lg"
      style={{ color: meta.color, background: meta.bg, border: `1px solid ${meta.border}` }}
    >
      {category}
    </span>
  );
}

/* Featured card — wider, shows highlights list */
function FeaturedProjectCard({ project, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const meta = CAT_META[project.category] || CAT_META['AI / LLM'];

  return (
    <motion.a
      ref={ref}
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className="glass rounded-2xl overflow-hidden flex flex-col group cursor-pointer transition-all duration-300 relative"
      style={{ border: `1px solid ${meta.border}`, boxShadow: `0 0 0 0 ${meta.color}` }}
      onMouseEnter={(e) => { e.currentTarget.style.boxShadow = `0 0 40px ${meta.color}20, 0 20px 60px rgba(0,0,0,0.4)`; }}
      onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; }}
    >
      {/* Gradient top bar */}
      <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${meta.color}, transparent)` }} />

      {/* Subtle hover glow overlay */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ background: `radial-gradient(ellipse 80% 40% at 50% 0%, ${meta.color}08, transparent)` }}
      />

      <div className="p-6 flex flex-col gap-5 flex-1">
        {/* Header row */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: `${meta.color}18`, border: `1px solid ${meta.color}35` }}
            >
              <Github size={18} style={{ color: meta.color }} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <CategoryBadge category={project.category} />
                <span
                  className="font-mono text-xs px-2 py-0.5 rounded-full"
                  style={{ background: 'rgba(245,158,11,0.12)', color: '#F59E0B', border: '1px solid rgba(245,158,11,0.2)' }}
                >
                  FEATURED
                </span>
              </div>
              <h3 className="font-mono font-semibold mt-1.5" style={{ color: '#F8FAFC' }}>
                {project.name}
              </h3>
              {project.tagline && (
                <p className="text-xs mt-0.5" style={{ color: meta.color }}>{project.tagline}</p>
              )}
            </div>
          </div>
          <ArrowUpRight
            size={18}
            className="opacity-40 group-hover:opacity-100 transition-all duration-200 flex-shrink-0 mt-1"
            style={{ color: meta.color }}
          />
        </div>

        {/* Description */}
        <p className="text-sm leading-relaxed" style={{ color: '#94A3B8' }}>
          {project.description}
        </p>

        {/* Highlights */}
        {project.highlights && (
          <ul className="space-y-1.5">
            {project.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-2 text-sm" style={{ color: '#CBD5E1' }}>
                <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: meta.color }} />
                {h}
              </li>
            ))}
          </ul>
        )}

        {/* Footer row */}
        <div className="flex items-center justify-between mt-auto pt-4" style={{ borderTop: '1px solid rgba(148,163,184,0.08)' }}>
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((t, i) => (
              <span
                key={i}
                className="font-mono text-xs px-2.5 py-1 rounded-md"
                style={{ background: 'rgba(148,163,184,0.07)', color: '#94A3B8', border: '1px solid rgba(148,163,184,0.12)' }}
              >
                {t}
              </span>
            ))}
          </div>
          {project.lang && <LangDot lang={project.lang} />}
        </div>
      </div>
    </motion.a>
  );
}

/* Standard project card */
function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const meta = CAT_META[project.category] || { color: '#94A3B8', bg: 'rgba(148,163,184,0.07)', border: 'rgba(148,163,184,0.15)' };

  return (
    <motion.a
      ref={ref}
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -3 }}
      className="glass rounded-2xl p-5 flex flex-col gap-4 group cursor-pointer transition-all duration-300 relative overflow-hidden"
      style={{ border: '1px solid rgba(148,163,184,0.1)' }}
      onMouseEnter={(e) => { e.currentTarget.style.borderColor = `${meta.color}40`; e.currentTarget.style.boxShadow = `0 0 24px ${meta.color}12`; }}
      onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(148,163,184,0.1)'; e.currentTarget.style.boxShadow = 'none'; }}
    >
      {/* Colored left strip on hover */}
      <div
        className="absolute left-0 top-0 bottom-0 w-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: `linear-gradient(to bottom, ${meta.color}, transparent)` }}
      />

      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2 flex-wrap">
          <CategoryBadge category={project.category} />
        </div>
        <ArrowUpRight
          size={15}
          className="opacity-30 group-hover:opacity-100 transition-all duration-200 flex-shrink-0"
          style={{ color: meta.color }}
        />
      </div>

      <div>
        <h3 className="font-mono font-semibold text-sm mb-1" style={{ color: '#F8FAFC' }}>
          {project.name}
        </h3>
        {project.tagline && (
          <p className="text-xs mb-2" style={{ color: meta.color }}>{project.tagline}</p>
        )}
        <p className="text-sm leading-relaxed" style={{ color: '#94A3B8' }}>
          {project.description}
        </p>
      </div>

      <div className="flex items-center justify-between mt-auto">
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t, i) => (
            <span
              key={i}
              className="font-mono text-xs px-2 py-0.5 rounded"
              style={{ background: 'rgba(148,163,184,0.07)', color: '#64748B', border: '1px solid rgba(148,163,184,0.1)' }}
            >
              {t}
            </span>
          ))}
        </div>
        {project.lang && <LangDot lang={project.lang} />}
      </div>
    </motion.a>
  );
}

function TerminalDecoration() {
  return (
    <div
      className="glass rounded-2xl overflow-hidden font-mono text-sm"
      style={{ border: '1px solid rgba(34, 197, 94, 0.2)' }}
    >
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-3" style={{ background: 'rgba(34, 197, 94, 0.05)', borderBottom: '1px solid rgba(34, 197, 94, 0.1)' }}>
        <div className="w-3 h-3 rounded-full" style={{ background: '#FF5F57' }} />
        <div className="w-3 h-3 rounded-full" style={{ background: '#FEBC2E' }} />
        <div className="w-3 h-3 rounded-full" style={{ background: '#28C840' }} />
        <span className="ml-3 text-xs" style={{ color: '#64748B' }}>ashutosh@portfolio ~ </span>
      </div>

      {/* Terminal content */}
      <div className="px-4 py-4 space-y-2">
        {[
          { prompt: '~', cmd: 'whoami', out: 'ashutosh_kumar', color: '#22C55E' },
          { prompt: '~', cmd: 'cat role.txt', out: 'Technical Scrum Master | AI Builder', color: '#3B82F6' },
          { prompt: '~', cmd: 'echo $EXPERIENCE', out: '15+ years in enterprise IT', color: '#F59E0B' },
          { prompt: '~', cmd: 'ls ./skills/', out: 'leadership/ devops/ ai/ programming/ cms/', color: '#A855F7' },
          { prompt: '~', cmd: 'git log --oneline', out: 'building with AI, learning in public...', color: '#22C55E' },
        ].map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.15 }}
          >
            <div className="flex gap-2">
              <span style={{ color: '#22C55E' }}>❯</span>
              <span style={{ color: '#94A3B8' }}>{line.cmd}</span>
            </div>
            <div className="pl-4 text-xs" style={{ color: line.color }}>{line.out}</div>
          </motion.div>
        ))}
        <div className="flex gap-2 items-center">
          <span style={{ color: '#22C55E' }}>❯</span>
          <span className="cursor-blink w-2 h-4 inline-block" style={{ background: '#22C55E' }} />
        </div>
      </div>
    </div>
  );
}

// ─── Navbar ──────────────────────────────────────────────────────────────────

function Navbar({ activeSection, onSwitchToRecruiter }) {
  const navItems = ['hero', 'experience', 'skills', 'projects', 'contact'];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
      className="fixed top-4 left-1/2 z-50 glass-strong rounded-2xl px-6 py-3 flex items-center gap-6"
      style={{ transform: 'translateX(-50%)', border: '1px solid rgba(148, 163, 184, 0.12)' }}
    >
      <div className="font-mono font-bold text-lg" style={{ color: '#22C55E' }}>AK</div>

      <div className="hidden md:flex items-center gap-1">
        {navItems.map((item) => (
          <button
            key={item}
            onClick={() => document.getElementById(item)?.scrollIntoView({ behavior: 'smooth' })}
            className="font-mono text-xs px-3 py-1.5 rounded-lg capitalize transition-all duration-200 cursor-pointer"
            style={{
              color: activeSection === item ? '#22C55E' : '#94A3B8',
              background: activeSection === item ? 'rgba(34, 197, 94, 0.1)' : 'transparent',
              border: activeSection === item ? '1px solid rgba(34, 197, 94, 0.2)' : '1px solid transparent',
            }}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-2">
        <a
          href="https://github.com/askuma"
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 cursor-pointer"
          style={{ color: '#94A3B8' }}
          onMouseEnter={(e) => { e.currentTarget.style.color = '#F8FAFC'; e.currentTarget.style.background = 'rgba(148,163,184,0.1)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = '#94A3B8'; e.currentTarget.style.background = 'transparent'; }}
        >
          <Github size={16} />
        </a>
        <a
          href="https://www.linkedin.com/in/ashutoshkumar-aa2747135"
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 cursor-pointer"
          style={{ color: '#94A3B8' }}
          onMouseEnter={(e) => { e.currentTarget.style.color = '#3B82F6'; e.currentTarget.style.background = 'rgba(59,130,246,0.1)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = '#94A3B8'; e.currentTarget.style.background = 'transparent'; }}
        >
          <Linkedin size={16} />
        </a>
        <a
          href="mailto:ashutosh.kumar1089@gmail.com"
          className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 cursor-pointer"
          style={{ color: '#94A3B8' }}
          onMouseEnter={(e) => { e.currentTarget.style.color = '#22C55E'; e.currentTarget.style.background = 'rgba(34,197,94,0.1)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = '#94A3B8'; e.currentTarget.style.background = 'transparent'; }}
        >
          <Mail size={16} />
        </a>
        <div style={{ width: '1px', height: '18px', background: 'rgba(148,163,184,0.15)' }} />
        <button
          onClick={onSwitchToRecruiter}
          className="font-mono text-xs px-3 py-1.5 rounded-lg transition-all duration-200 cursor-pointer flex items-center gap-1.5"
          style={{ color: '#F8FAFC', background: 'rgba(245,158,11,0.12)', border: '1px solid rgba(245,158,11,0.25)' }}
          onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(245,158,11,0.22)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(245,158,11,0.12)'; }}
          title="Switch to recruiter-friendly resume view"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ color: '#F59E0B' }}>
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <polyline points="14,2 14,8 20,8"/>
            <line x1="16" y1="13" x2="8" y2="13"/>
            <line x1="16" y1="17" x2="8" y2="17"/>
            <polyline points="10,9 9,9 8,9"/>
          </svg>
          Resume
        </button>
      </div>
    </motion.nav>
  );
}

// ─── Main Component ──────────────────────────────────────────────────────────

export default function Portfolio({ onSwitchToRecruiter }) {
  const [activeSection, setActiveSection] = useState('hero');
  const [activeFilter, setActiveFilter] = useState('All');
  const role = useTypewriter(ROLES, 75);

  const PROJECT_CATEGORIES = ['All', ...Object.keys(CAT_META)];
  const featuredProjects = PROJECTS.filter(p => p.featured);
  const filteredProjects = activeFilter === 'All'
    ? PROJECTS.filter(p => !p.featured)
    : PROJECTS.filter(p => p.category === activeFilter);

  // Section tracking
  useEffect(() => {
    const sections = ['hero', 'experience', 'skills', 'projects', 'contact'];
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.3 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return (
    <div style={{ background: '#0F172A', color: '#F8FAFC', minHeight: '100vh' }}>
      <Navbar activeSection={activeSection} onSwitchToRecruiter={onSwitchToRecruiter} />

      {/* ── Hero ───────────────────────────────────────────────── */}
      <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
        <HeroBackground />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="font-mono text-sm mb-4 flex items-center gap-2"
                style={{ color: '#22C55E' }}
              >
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Available for new opportunities
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="font-bold leading-tight mb-4"
                style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', letterSpacing: '-0.02em' }}
              >
                Ashutosh Kumar
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-mono text-xl mb-6 h-8 flex items-center gap-2"
                style={{ color: '#22C55E' }}
              >
                <Terminal size={18} />
                <span>{role}</span>
                <span className="cursor-blink" style={{ color: '#22C55E' }}>|</span>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg leading-relaxed mb-10 max-w-lg"
                style={{ color: '#94A3B8' }}
              >
                15 years in enterprise IT. I lead agile teams by understanding the work deeply —
                coding alongside engineers, implementing DevOps practices, and{' '}
                <span style={{ color: '#F8FAFC' }}>building with AI</span> in real workflows.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap gap-3"
              >
                <button
                  onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-6 py-3 rounded-xl font-semibold flex items-center gap-2 transition-all duration-200 cursor-pointer"
                  style={{
                    background: 'linear-gradient(135deg, #22C55E, #16A34A)',
                    color: '#0F172A',
                    boxShadow: '0 4px 20px rgba(34, 197, 94, 0.3)',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(34, 197, 94, 0.4)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(34, 197, 94, 0.3)'; }}
                >
                  View Experience
                  <ChevronDown size={16} />
                </button>
                <a
                  href="https://github.com/askuma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl font-semibold flex items-center gap-2 transition-all duration-200 cursor-pointer"
                  style={{ border: '1px solid rgba(148,163,184,0.2)', color: '#F8FAFC', background: 'rgba(148,163,184,0.05)' }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(148,163,184,0.1)'; e.currentTarget.style.borderColor = 'rgba(148,163,184,0.4)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(148,163,184,0.05)'; e.currentTarget.style.borderColor = 'rgba(148,163,184,0.2)'; }}
                >
                  <Github size={16} />
                  GitHub
                </a>
                <a
                  href="mailto:ashutosh.kumar1089@gmail.com"
                  className="px-6 py-3 rounded-xl font-semibold flex items-center gap-2 transition-all duration-200 cursor-pointer"
                  style={{ border: '1px solid rgba(148,163,184,0.2)', color: '#F8FAFC', background: 'rgba(148,163,184,0.05)' }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(34,197,94,0.08)'; e.currentTarget.style.borderColor = 'rgba(34,197,94,0.3)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(148,163,184,0.05)'; e.currentTarget.style.borderColor = 'rgba(148,163,184,0.2)'; }}
                >
                  <Mail size={16} />
                  Contact
                </a>
              </motion.div>
            </div>

            {/* Right — Avatar + Terminal */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:flex flex-col gap-8 items-center"
            >
              <AvatarIllustration />
              <TerminalDecoration />
            </motion.div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20">
            {STATS.map((stat, i) => (
              <StatCard key={stat.label} stat={stat} index={i} />
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ color: '#475569' }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </section>

      {/* ── Experience ─────────────────────────────────────────── */}
      <section id="experience" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="font-mono text-sm mb-3" style={{ color: '#22C55E' }}>
              {'// career history'}
            </div>
            <h2 className="font-bold" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', letterSpacing: '-0.02em' }}>
              Experience
            </h2>
            <div className="mt-2 w-16 h-1 rounded-full" style={{ background: '#22C55E' }} />
          </motion.div>

          <div>
            {EXPERIENCES.map((exp, i) => (
              <TimelineItem key={i} exp={exp} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Skills ─────────────────────────────────────────────── */}
      <section id="skills" className="py-24 px-6" style={{ background: 'rgba(30, 41, 59, 0.3)' }}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="font-mono text-sm mb-3" style={{ color: '#22C55E' }}>
              {'// technical toolkit'}
            </div>
            <h2 className="font-bold" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', letterSpacing: '-0.02em' }}>
              Skills & Expertise
            </h2>
            <div className="mt-2 w-16 h-1 rounded-full" style={{ background: '#22C55E' }} />
          </motion.div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 mb-10">
            {SKILL_GROUPS.map((group, i) => (
              <SkillGroup key={group.category} group={group} groupIndex={i} />
            ))}
          </div>

          {/* Current Focus highlight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="rounded-2xl p-8 relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, rgba(34,197,94,0.08), rgba(34,197,94,0.03))', border: '1px solid rgba(34,197,94,0.2)' }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 opacity-5" style={{ background: 'radial-gradient(circle, #22C55E, transparent)' }} />
            <div className="flex items-start gap-4 relative">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 animate-glow-pulse"
                style={{ background: '#22C55E20', border: '1px solid #22C55E40' }}
              >
                <Brain size={22} style={{ color: '#22C55E' }} />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2" style={{ color: '#F8FAFC' }}>
                  Current Focus: AI-Driven Development
                </h3>
                <p className="leading-relaxed" style={{ color: '#94A3B8' }}>
                  Actively building AI-driven applications — experimenting with{' '}
                  <span style={{ color: '#22C55E' }}>agentic AI workflows</span>, vibe coding methodologies,
                  and GitHub Copilot agent mode. Not theorizing about AI adoption — building with it,
                  learning from real constraints, and sharing what works through{' '}
                  <a
                    href="https://github.com/askuma"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2 transition-colors duration-200"
                    style={{ color: '#22C55E' }}
                  >
                    public GitHub projects
                  </a>.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Projects ───────────────────────────────────────────── */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <div className="font-mono text-sm mb-3" style={{ color: '#22C55E' }}>
              {'// building in public · github.com/askuma'}
            </div>
            <h2 className="font-bold" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', letterSpacing: '-0.02em' }}>
              Open Source Projects
            </h2>
            <div className="mt-2 w-16 h-1 rounded-full" style={{ background: '#22C55E' }} />
          </motion.div>

          {/* Category filter tabs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-wrap gap-2 mb-10"
          >
            <span className="flex items-center gap-1.5 font-mono text-xs mr-1" style={{ color: '#475569' }}>
              <Filter size={12} /> Filter:
            </span>
            {PROJECT_CATEGORIES.map((cat) => {
              const meta = cat === 'All' ? null : CAT_META[cat];
              const isActive = activeFilter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className="font-mono text-xs px-3.5 py-1.5 rounded-lg transition-all duration-200 cursor-pointer"
                  style={{
                    background: isActive ? (meta ? meta.bg : 'rgba(34,197,94,0.12)') : 'rgba(148,163,184,0.05)',
                    color: isActive ? (meta ? meta.color : '#22C55E') : '#64748B',
                    border: `1px solid ${isActive ? (meta ? meta.border : 'rgba(34,197,94,0.3)') : 'rgba(148,163,184,0.1)'}`,
                  }}
                >
                  {cat}
                  {cat !== 'All' && (
                    <span className="ml-1.5 opacity-60">
                      {PROJECTS.filter(p => p.category === cat).length}
                    </span>
                  )}
                </button>
              );
            })}
          </motion.div>

          {/* Featured cards — shown only on "All" filter */}
          <AnimatePresence mode="wait">
            {activeFilter === 'All' && (
              <motion.div
                key="featured"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="mb-4"
              >
                <div className="font-mono text-xs mb-4 flex items-center gap-2" style={{ color: '#475569' }}>
                  <Star size={11} />
                  Featured
                </div>
                <div className="grid md:grid-cols-2 gap-5 mb-8">
                  {featuredProjects.map((project, i) => (
                    <FeaturedProjectCard key={project.name} project={project} index={i} />
                  ))}
                </div>
                <div className="font-mono text-xs mb-4 flex items-center gap-2" style={{ color: '#475569' }}>
                  <Github size={11} />
                  More projects
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Filterable grid */}
          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, i) => (
                <motion.div
                  key={project.name}
                  layout
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                >
                  <ProjectCard project={project} index={i} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* GitHub CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-between glass rounded-2xl p-6"
            style={{ border: '1px solid rgba(148,163,184,0.1)' }}
          >
            <div>
              <p className="font-semibold" style={{ color: '#F8FAFC' }}>More experiments in progress</p>
              <p className="text-sm mt-0.5" style={{ color: '#64748B' }}>All repos are public — browse, fork, or contribute</p>
            </div>
            <a
              href="https://github.com/askuma"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 flex items-center gap-2 font-semibold px-5 py-2.5 rounded-xl transition-all duration-200 cursor-pointer text-sm"
              style={{ color: '#22C55E', border: '1px solid rgba(34,197,94,0.3)', background: 'rgba(34,197,94,0.06)' }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(34,197,94,0.14)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(34,197,94,0.06)'; }}
            >
              <Github size={16} />
              github.com/askuma
              <ArrowUpRight size={14} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── Education + Certifications ─────────────────────────── */}
      <section className="py-24 px-6" style={{ background: 'rgba(30, 41, 59, 0.3)' }}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="font-mono text-sm mb-3" style={{ color: '#22C55E' }}>
              {'// credentials'}
            </div>
            <h2 className="font-bold" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', letterSpacing: '-0.02em' }}>
              Education & Certifications
            </h2>
            <div className="mt-2 w-16 h-1 rounded-full" style={{ background: '#22C55E' }} />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="font-mono text-sm mb-6" style={{ color: '#64748B' }}>EDUCATION</h3>
              <div
                className="glass rounded-2xl p-6 card-glow transition-all duration-300"
                style={{ borderLeft: '2px solid rgba(59, 130, 246, 0.5)' }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: 'rgba(59,130,246,0.15)', border: '1px solid rgba(59,130,246,0.3)' }}>
                  <BookOpen size={20} style={{ color: '#3B82F6' }} />
                </div>
                <h4 className="font-semibold text-lg mb-1" style={{ color: '#F8FAFC' }}>
                  Bachelor of Technology
                </h4>
                <p style={{ color: '#3B82F6' }} className="font-medium mb-1">Information Technology</p>
                <p className="text-sm mb-3" style={{ color: '#94A3B8' }}>
                  Indian Institute of Information Technology (IIIT)
                </p>
                <div className="font-mono text-xs flex items-center gap-1.5" style={{ color: '#64748B' }}>
                  <Calendar size={12} />
                  2006 – 2010
                </div>
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="font-mono text-sm mb-6" style={{ color: '#64748B' }}>CERTIFICATIONS</h3>
              <div className="space-y-3">
                {CERTIFICATIONS.map((cert, i) => {
                  const Icon = cert.icon;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                      className="glass rounded-xl p-4 flex items-center gap-3 card-glow transition-all duration-300"
                    >
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: 'rgba(245,158,11,0.15)', border: '1px solid rgba(245,158,11,0.3)' }}
                      >
                        <Icon size={16} style={{ color: '#F59E0B' }} />
                      </div>
                      <div>
                        <div className="text-sm font-medium" style={{ color: '#F8FAFC' }}>{cert.name}</div>
                        <div className="font-mono text-xs" style={{ color: '#64748B' }}>{cert.issuer}</div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Contact ────────────────────────────────────────────── */}
      <section id="contact" className="py-32 px-6 relative overflow-hidden">
        {/* Background glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(34,197,94,0.06), transparent)' }}
        />

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="font-mono text-sm mb-6" style={{ color: '#22C55E' }}>
              {'// let\'s connect'}
            </div>
            <h2
              className="font-bold mb-6"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', letterSpacing: '-0.02em', lineHeight: 1.1 }}
            >
              Let's Build
              <br />
              <span style={{ color: '#22C55E' }}>Something Together</span>
            </h2>
            <p className="text-lg mb-12 leading-relaxed" style={{ color: '#94A3B8' }}>
              Interested in discussing technical leadership, agile transformation, or AI-driven development workflows?
              I'm always open to meaningful conversations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="mailto:ashutosh.kumar1089@gmail.com"
                className="px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-3 transition-all duration-200 cursor-pointer"
                style={{
                  background: 'linear-gradient(135deg, #22C55E, #16A34A)',
                  color: '#0F172A',
                  boxShadow: '0 4px 24px rgba(34, 197, 94, 0.3)',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 40px rgba(34, 197, 94, 0.5)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 4px 24px rgba(34, 197, 94, 0.3)'; }}
              >
                <Mail size={20} />
                Send Email
              </a>
              <a
                href="https://www.linkedin.com/in/ashutoshkumar-aa2747135"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-3 transition-all duration-200 cursor-pointer"
                style={{ border: '1px solid rgba(59,130,246,0.4)', color: '#3B82F6', background: 'rgba(59,130,246,0.05)' }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(59,130,246,0.12)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(59,130,246,0.05)'; }}
              >
                <Linkedin size={20} />
                Connect on LinkedIn
              </a>
              <a
                href="https://github.com/askuma"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-3 transition-all duration-200 cursor-pointer"
                style={{ border: '1px solid rgba(148,163,184,0.2)', color: '#94A3B8', background: 'rgba(148,163,184,0.05)' }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(148,163,184,0.1)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(148,163,184,0.05)'; }}
              >
                <Github size={20} />
                GitHub
              </a>
            </div>

            {/* Location badge */}
            <div className="flex items-center justify-center gap-2 font-mono text-sm" style={{ color: '#475569' }}>
              <MapPin size={14} />
              Hyderabad, Telangana, India &nbsp;·&nbsp; Open to Remote
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────────────── */}
      <footer
        className="py-8 px-6 text-center font-mono text-xs"
        style={{ borderTop: '1px solid rgba(148,163,184,0.08)', color: '#334155' }}
      >
        <span>Ashutosh Kumar © 2026 &nbsp;·&nbsp; Built with React + Framer Motion + Tailwind CSS &nbsp;·&nbsp; Hosted on GitHub Pages</span>
      </footer>
    </div>
  );
}
