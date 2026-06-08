import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import {
  Mail, Linkedin, Github, MapPin, Phone,
  Printer, ArrowLeft, ExternalLink, Award,
  CheckCircle2
} from 'lucide-react';
import {
  PERSONAL, METRICS, EXPERIENCES, RECRUITER_SKILLS,
  CERTIFICATIONS, EDUCATION, PROJECTS_HIGHLIGHT, LANGUAGES,
} from '../data/content';

// ─── Print styles ─────────────────────────────────────────────────────────────
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
                {PERSONAL.name}
              </h1>
              <p className="text-sm font-medium mt-1" style={{ color: '#1E3A5F' }}>
                {PERSONAL.title}
              </p>
            </div>
            {/* Contact block */}
            <div className="flex flex-col gap-1.5 text-xs" style={{ color: '#475569' }}>
              <a href={`mailto:${PERSONAL.email}`} className="flex items-center gap-1.5 hover:text-blue-700 transition-colors">
                <Mail size={12} style={{ color: '#1E3A5F' }} />
                {PERSONAL.email}
              </a>
              <span className="flex items-center gap-1.5">
                <Phone size={12} style={{ color: '#1E3A5F' }} />
                {PERSONAL.phone}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin size={12} style={{ color: '#1E3A5F' }} />
                {PERSONAL.location}  ·  {PERSONAL.locationNote}
              </span>
              <a
                href={PERSONAL.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-blue-700 transition-colors"
              >
                <Linkedin size={12} style={{ color: '#1E3A5F' }} />
                {PERSONAL.linkedin}
              </a>
              <a
                href={PERSONAL.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-blue-700 transition-colors"
              >
                <Github size={12} style={{ color: '#1E3A5F' }} />
                {PERSONAL.github}
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
          <p className="text-sm leading-relaxed" style={{ color: '#374151' }}>{PERSONAL.summary}</p>
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
            {RECRUITER_SKILLS.map((group, gi) => (
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
              <p className="font-bold text-sm" style={{ color: '#0F172A' }}>{EDUCATION.degree}</p>
              <p className="text-sm font-medium mt-0.5" style={{ color: '#1E3A5F' }}>{EDUCATION.field}</p>
              <p className="text-xs mt-1" style={{ color: '#64748B' }}>{EDUCATION.institution}</p>
              <p className="text-xs font-mono mt-1" style={{ color: '#94A3B8' }}>{EDUCATION.period}</p>
            </div>
          </div>

          <div>
            <SectionTitle>Certifications</SectionTitle>
            <ul className="space-y-2">
              {CERTIFICATIONS.map((cert, i) => (
                <li key={i} className="flex items-start gap-2 text-xs" style={{ color: '#374151' }}>
                  <Award size={13} className="mt-0.5 flex-shrink-0" style={{ color: '#1E3A5F' }} />
                  <span>
                    <span className="font-medium">{cert.name}</span>
                    <span style={{ color: '#94A3B8' }}> — {cert.issuer}</span>
                  </span>
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
              href={PERSONAL.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 transition-colors hover:text-blue-700"
              style={{ color: '#1E3A5F' }}
            >
              {PERSONAL.github}
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
            {LANGUAGES.map((l, i) => (
              <div key={i} className="text-sm" style={{ color: '#374151' }}>
                <span className="font-semibold">{l.lang}</span>
                <span className="ml-1.5 text-xs" style={{ color: '#94A3B8' }}>— {l.level}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Footer */}
        <div className="mt-10 pt-6 flex items-center justify-between" style={{ borderTop: '1px solid #E2E8F0' }}>
          <p className="text-xs font-mono" style={{ color: '#CBD5E1' }}>Updated {PERSONAL.updatedDate}</p>
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
