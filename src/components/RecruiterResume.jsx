import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import {
  Mail, Linkedin, Github, MapPin, Phone,
  Printer, ArrowLeft, ExternalLink, Award,
  CheckCircle2
} from 'lucide-react';

// ─── Data ────────────────────────────────────────────────────────────────────

const CONTACT = {
  name:     'Ashutosh Kumar',
  title:    'Technical Scrum Master  ·  AI Learning & Building  ·  DevOps  ·  15 yrs  ·  PMP®',
  email:    'ashutosh.kumar1089@gmail.com',
  phone:    '+91 93477 56890',
  location: 'Hyderabad, Telangana, India  ·  Open to Remote',
  linkedin: 'linkedin.com/in/ashutoshkumar-aa2747135',
  github:   'github.com/askuma',
};

const SUMMARY = `Technical Scrum Master with 15+ years in enterprise IT, combining hands-on development expertise with agile team leadership. I bridge engineering teams and business stakeholders — leading by understanding the work deeply, not just managing it. Currently building AI-driven applications to stay ahead of where the industry is heading.`;

const METRICS = [
  { value: '15+',   label: 'Years in Enterprise IT' },
  { value: '20+',   label: 'Enterprise Projects Delivered' },
  { value: '$50M+', label: 'Combined Project Value' },
  { value: '95%',   label: 'On-time Delivery Rate' },
  { value: '50+',   label: 'Engineers Scaled Across Teams' },
  { value: '8+',    label: 'PMs & Leads Mentored' },
];

const EXPERIENCES = [
  {
    role:     'Project Manager / Technical Scrum Master',
    company:  'Accenture',
    location: 'Hyderabad, India',
    period:   'Nov 2022 – Present',
    current:  true,
    achievements: [
      'Leading cross-functional team of 15+ engineers; achieved 95%+ on-time delivery rate across all programs',
      'Architected DevOps transformation: reduced deployment cycle from 6 weeks to 3 days through CI/CD pipeline implementation',
      'Mentored 8+ junior project managers and technical leads on agile frameworks and technical excellence',
      'Managing $5M+ annual delivery programs spanning scope, schedule, budget, and stakeholder communication',
      'Actively building AI-driven development tools and agentic workflows; documenting learnings via public GitHub projects',
    ],
    tools: 'Agile · Scrum · JIRA · GitLab · DevOps · Python · Java · JavaScript',
  },
  {
    role:     'IT Project Manager | Scrum Master',
    company:  'Coforge',
    location: 'Hyderabad, India',
    period:   'Jun 2022 – Nov 2022',
    achievements: [
      'Drove proactive delivery across 3 concurrent initiatives with $8M+ combined value',
      'Managed resource planning, responsibilities, and schedules for cross-functional teams',
      'Maintained stakeholder relationships across on-site and offshore locations',
      'Identified and intervened in project slippage; optimised plans to minimise risks',
    ],
    tools: 'Project Planning · Resource Management · Risk Management · Agile Delivery',
  },
  {
    role:     'Project Lead',
    company:  'Wipro Technologies',
    location: 'Hyderabad, India',
    period:   'May 2019 – Jun 2022',
    achievements: [
      'Led agile team of 12 developers through product development and maintenance cycles',
      'Reduced sprint cycle time by 35% through process optimisation and team efficiency improvements',
      'Managed project scope, schedules, and risks across multiple parallel initiatives',
      'Evaluated team performance quarterly; drove competence development and mentoring',
    ],
    tools: 'Agile · Scrum · Stakeholder Management · Technical Mentoring · Process Improvement',
  },
  {
    role:     'Senior Project Engineer',
    company:  'Wipro Technologies',
    location: 'Hyderabad, India',
    period:   'Jul 2013 – May 2019',
    achievements: [
      'Agile developer contributing to 6+ products across a 5+ year tenure',
      'Led large-scale DITA migrations for enterprise clients — 100,000+ pages converted to standard',
      'End-to-end implementation and maintenance of IXIASOFT DITACMS for enterprise content management',
      'Led sprint planning and execution as technical module lead',
    ],
    tools: 'DITA · XML · Arbortext · IXIASOFT CMS · Agile Development',
  },
  {
    role:     'Project Engineer',
    company:  'Wipro Technologies',
    location: 'Hyderabad, India',
    period:   'Jul 2010 – Jun 2013',
    achievements: [
      'Developed integration programs establishing compatibility with third-party software products',
      'Custom development using Arbortext proprietary XML editor language',
      'Key developer and QA contributor for multiple enterprise customisation projects',
    ],
    tools: 'XML · Software Development · QA · Integration Development · Arbortext',
  },
];

const SKILLS = [
  {
    category: 'Leadership & Agile',
    items: ['Agile Project Management', 'Scrum Master', 'Team Leadership', 'Stakeholder Management',
            'Cross-functional Leadership', 'Agile Coaching', 'Process Improvement', 'Risk Management'],
  },
  {
    category: 'DevOps & Engineering',
    items: ['DevOps', 'CI/CD Pipelines', 'Continuous Integration', 'Deployment Automation',
            'JIRA', 'Git / GitLab', 'Technical Roadmapping', 'Architecture Reviews'],
  },
  {
    category: 'Programming',
    items: ['Python', 'Java', 'JavaScript', 'TypeScript', 'HTML5 / CSS3'],
  },
  {
    category: 'AI & Emerging Tech',
    items: ['AI-Assisted Development', 'Vibe Coding', 'GitHub Copilot', 'Agentic AI Workflows',
            'Prompt Engineering', 'LLM Integration'],
  },
  {
    category: 'Content & CMS',
    items: ['DITA / XML', 'IXIASOFT DITACMS', 'Arbortext', 'Content Management Systems'],
  },
];

const CERTIFICATIONS = [
  'Project Management Professional (PMP®)  –  Project Management Institute (PMI)',
  'Agile Project Management with Jira Cloud: Projects, Boards & Issues',
  'Managing Project Stakeholders',
  'Mistakes to Avoid in Agile Project Management',
];

const PROJECTS_HIGHLIGHT = [
  {
    name: 'guardrail_framework_complete',
    desc: 'Unified AI guardrail abstraction layer — multi-backend routing across NVIDIA NeMo, GuardrailsAI, Presidio, and Lakera Guard. 40+ REST endpoints, A/B policy testing, Prometheus observability.',
    tech: 'Python · FastAPI · PostgreSQL',
    url: 'github.com/askuma/guardrail_framework_complete',
  },
  {
    name: 'SprintPulse',
    desc: 'AI-powered sprint status reporter — aggregates Jira, GitHub, and Slack data, then generates structured weekly insights via Mistral AI.',
    tech: 'JavaScript · React · Mistral AI',
    url: 'github.com/askuma/SprintPulse',
  },
  {
    name: 'generate-tech-stack',
    desc: 'Claude Code skill + MCP server that scans any project and auto-generates a visual TECH_STACK.html with architecture diagram and tool cards.',
    tech: 'Python · MCP · Claude Code',
    url: 'github.com/askuma/generate-tech-stack',
  },
];

// ─── Print styles injected once ──────────────────────────────────────────────
const PRINT_STYLE = `
  @media print {
    .no-print { display: none !important; }
    body { background: white !important; }
    .page-break { page-break-before: always; }
    * { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  }
`;

// ─── Sub-components ──────────────────────────────────────────────────────────

function SectionTitle({ children }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <h2
        className="text-xs font-bold uppercase tracking-widest"
        style={{ color: '#1E3A5F', letterSpacing: '0.12em' }}
      >
        {children}
      </h2>
      <div className="flex-1 h-px" style={{ background: '#CBD5E1' }} />
    </div>
  );
}

function ExperienceBlock({ exp, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className="mb-7 last:mb-0"
    >
      {/* Role header */}
      <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-1 mb-2">
        <div>
          <h3 className="font-bold text-base" style={{ color: '#0F172A' }}>
            {exp.role}
          </h3>
          <div className="flex items-center gap-2 mt-0.5 flex-wrap">
            <span className="font-semibold text-sm" style={{ color: '#1E3A5F' }}>{exp.company}</span>
            <span className="text-xs" style={{ color: '#94A3B8' }}>·</span>
            <span className="text-xs flex items-center gap-1" style={{ color: '#64748B' }}>
              <MapPin size={11} />
              {exp.location}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          {exp.current && (
            <span
              className="text-xs font-semibold px-2 py-0.5 rounded-full"
              style={{ background: '#DCFCE7', color: '#15803D', border: '1px solid #BBF7D0' }}
            >
              Current
            </span>
          )}
          <span className="text-xs font-mono" style={{ color: '#64748B' }}>{exp.period}</span>
        </div>
      </div>

      {/* Achievements */}
      <ul className="space-y-1 mb-2.5 ml-1">
        {exp.achievements.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-sm leading-relaxed" style={{ color: '#374151' }}>
            <CheckCircle2 size={13} className="mt-0.5 flex-shrink-0" style={{ color: '#1E3A5F' }} />
            {item}
          </li>
        ))}
      </ul>

      {/* Tools line */}
      <p className="text-xs font-mono" style={{ color: '#94A3B8' }}>
        <span style={{ color: '#64748B' }}>Tools: </span>{exp.tools}
      </p>

      {index < EXPERIENCES.length - 1 && (
        <div className="mt-6 h-px" style={{ background: '#F1F5F9' }} />
      )}
    </motion.div>
  );
}

// ─── Main Component ──────────────────────────────────────────────────────────

export default function RecruiterResume({ onSwitch }) {
  const printRef = useRef(null);

  const handlePrint = () => window.print();

  return (
    <div style={{ background: '#F8FAFC', minHeight: '100vh', fontFamily: "'IBM Plex Sans', system-ui, sans-serif" }}>
      <style>{PRINT_STYLE}</style>

      {/* ── Top action bar ─────────────────────────────────────── */}
      <div
        className="no-print sticky top-0 z-50 flex items-center justify-between px-6 py-3"
        style={{ background: 'rgba(248,250,252,0.95)', backdropFilter: 'blur(8px)', borderBottom: '1px solid #E2E8F0' }}
      >
        <button
          onClick={onSwitch}
          className="flex items-center gap-2 text-sm font-medium transition-colors duration-200 cursor-pointer"
          style={{ color: '#64748B' }}
          onMouseEnter={(e) => { e.currentTarget.style.color = '#1E3A5F'; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = '#64748B'; }}
        >
          <ArrowLeft size={16} />
          Portfolio
        </button>

        <div className="flex items-center gap-3">
          <span className="text-xs font-mono px-2.5 py-1 rounded-full" style={{ background: '#FEF3C7', color: '#92400E', border: '1px solid #FDE68A' }}>
            Recruiter View
          </span>
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-200 cursor-pointer"
            style={{ background: '#1E3A5F', color: 'white' }}
            onMouseEnter={(e) => { e.currentTarget.style.background = '#162d4a'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = '#1E3A5F'; }}
          >
            <Printer size={15} />
            Print / Save PDF
          </button>
        </div>
      </div>

      {/* ── Resume document ────────────────────────────────────── */}
      <div ref={printRef} className="max-w-4xl mx-auto px-6 py-10">

        {/* ── Header ─────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 pb-8"
          style={{ borderBottom: '2px solid #1E3A5F' }}
        >
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h1
                className="font-bold mb-1"
                style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', color: '#0F172A', letterSpacing: '-0.02em', lineHeight: 1.1 }}
              >
                {CONTACT.name}
              </h1>
              <p className="text-sm font-medium mt-1" style={{ color: '#1E3A5F' }}>
                {CONTACT.title}
              </p>
            </div>
            {/* Contact block */}
            <div className="flex flex-col gap-1.5 text-xs" style={{ color: '#475569' }}>
              <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-1.5 hover:text-blue-700 transition-colors">
                <Mail size={12} style={{ color: '#1E3A5F' }} />
                {CONTACT.email}
              </a>
              <span className="flex items-center gap-1.5">
                <Phone size={12} style={{ color: '#1E3A5F' }} />
                {CONTACT.phone}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin size={12} style={{ color: '#1E3A5F' }} />
                {CONTACT.location}
              </span>
              <a
                href={`https://${CONTACT.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-blue-700 transition-colors"
              >
                <Linkedin size={12} style={{ color: '#1E3A5F' }} />
                {CONTACT.linkedin}
              </a>
              <a
                href={`https://${CONTACT.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-blue-700 transition-colors"
              >
                <Github size={12} style={{ color: '#1E3A5F' }} />
                {CONTACT.github}
              </a>
            </div>
          </div>
        </motion.div>

        {/* ── Key Metrics ────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mb-8 grid grid-cols-3 sm:grid-cols-6 gap-3"
        >
          {METRICS.map((m, i) => (
            <div
              key={i}
              className="text-center py-3 px-2 rounded-xl"
              style={{ background: '#EFF6FF', border: '1px solid #BFDBFE' }}
            >
              <div className="font-bold text-lg leading-tight" style={{ color: '#1E3A5F' }}>{m.value}</div>
              <div className="text-xs leading-tight mt-0.5" style={{ color: '#64748B' }}>{m.label}</div>
            </div>
          ))}
        </motion.div>

        {/* ── Summary ────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="mb-8"
        >
          <SectionTitle>Professional Summary</SectionTitle>
          <p className="text-sm leading-relaxed" style={{ color: '#374151' }}>{SUMMARY}</p>
        </motion.div>

        {/* ── Experience ─────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mb-8"
        >
          <SectionTitle>Professional Experience</SectionTitle>
          {EXPERIENCES.map((exp, i) => (
            <ExperienceBlock key={i} exp={exp} index={i} />
          ))}
        </motion.div>

        {/* ── Skills ─────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="mb-8"
        >
          <SectionTitle>Skills</SectionTitle>
          <div className="grid sm:grid-cols-2 gap-x-10 gap-y-4">
            {SKILLS.map((group, gi) => (
              <div key={gi}>
                <h4 className="text-xs font-bold mb-2 uppercase tracking-wide" style={{ color: '#1E3A5F' }}>
                  {group.category}
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((skill, si) => (
                    <span
                      key={si}
                      className="text-xs px-2.5 py-1 rounded-md"
                      style={{ background: '#F1F5F9', color: '#374151', border: '1px solid #E2E8F0' }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Education + Certifications ─────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mb-8 grid sm:grid-cols-2 gap-8"
        >
          <div>
            <SectionTitle>Education</SectionTitle>
            <div
              className="p-4 rounded-xl"
              style={{ background: '#F8FAFC', border: '1px solid #E2E8F0' }}
            >
              <p className="font-bold text-sm" style={{ color: '#0F172A' }}>Bachelor of Technology</p>
              <p className="text-sm font-medium mt-0.5" style={{ color: '#1E3A5F' }}>Information Technology</p>
              <p className="text-xs mt-1" style={{ color: '#64748B' }}>
                Indian Institute of Information Technology (IIIT)
              </p>
              <p className="text-xs font-mono mt-1" style={{ color: '#94A3B8' }}>2006 – 2010</p>
            </div>
          </div>

          <div>
            <SectionTitle>Certifications</SectionTitle>
            <ul className="space-y-2">
              {CERTIFICATIONS.map((cert, i) => (
                <li key={i} className="flex items-start gap-2 text-xs" style={{ color: '#374151' }}>
                  <Award size={13} className="mt-0.5 flex-shrink-0" style={{ color: '#1E3A5F' }} />
                  {cert}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* ── Open Source Projects ────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.35 }}
          className="mb-8"
        >
          <SectionTitle>Selected Open-Source Projects</SectionTitle>
          <div className="space-y-3">
            {PROJECTS_HIGHLIGHT.map((proj, i) => (
              <div
                key={i}
                className="p-4 rounded-xl"
                style={{ background: '#F8FAFC', border: '1px solid #E2E8F0' }}
              >
                <div className="flex items-start justify-between gap-3 mb-1">
                  <span className="font-mono font-semibold text-sm" style={{ color: '#1E3A5F' }}>
                    {proj.name}
                  </span>
                  <a
                    href={`https://${proj.url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs flex-shrink-0 transition-colors hover:underline no-print"
                    style={{ color: '#64748B' }}
                  >
                    <ExternalLink size={11} />
                    {proj.url}
                  </a>
                  <span className="hidden print:inline text-xs font-mono" style={{ color: '#64748B' }}>{proj.url}</span>
                </div>
                <p className="text-xs leading-relaxed mb-1.5" style={{ color: '#374151' }}>{proj.desc}</p>
                <p className="text-xs font-mono" style={{ color: '#94A3B8' }}>
                  <span style={{ color: '#64748B' }}>Stack: </span>{proj.tech}
                </p>
              </div>
            ))}
          </div>
          <p className="text-xs mt-3 font-mono" style={{ color: '#94A3B8' }}>
            All projects public at{' '}
            <a
              href="https://github.com/askuma"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 transition-colors hover:text-blue-700"
              style={{ color: '#1E3A5F' }}
            >
              github.com/askuma
            </a>
          </p>
        </motion.div>

        {/* ── Languages ──────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.38 }}
          className="mb-2"
        >
          <SectionTitle>Languages</SectionTitle>
          <div className="flex gap-6">
            {[
              { lang: 'English', level: 'Professional Working' },
              { lang: 'Hindi',   level: 'Native / Bilingual' },
            ].map((l, i) => (
              <div key={i} className="text-sm" style={{ color: '#374151' }}>
                <span className="font-semibold">{l.lang}</span>
                <span className="ml-1.5 text-xs" style={{ color: '#94A3B8' }}>— {l.level}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Footer */}
        <div className="mt-10 pt-6 flex items-center justify-between" style={{ borderTop: '1px solid #E2E8F0' }}>
          <p className="text-xs font-mono" style={{ color: '#CBD5E1' }}>Updated June 2026</p>
          <button
            onClick={onSwitch}
            className="no-print text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
            style={{ color: '#94A3B8' }}
            onMouseEnter={(e) => { e.currentTarget.style.color = '#1E3A5F'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = '#94A3B8'; }}
          >
            <ArrowLeft size={12} />
            View full portfolio
          </button>
        </div>
      </div>
    </div>
  );
}
