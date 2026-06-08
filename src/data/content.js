// ─── Edit this file to update your portfolio and resume content ───────────────
// No React knowledge needed — update text and data here; both pages re-render
// automatically. Do NOT rename exported constants.

// ── Personal Info ─────────────────────────────────────────────────────────────
export const PERSONAL = {
  name:              'Ashutosh Kumar',
  initials:          'AK',
  yearsNote:         '15+ yrs',
  // Full title line shown on the recruiter resume header
  title:             'Technical Scrum Master  ·  AI Learning & Building  ·  DevOps  ·  15 yrs  ·  PMP®',
  // Green badge text in the hero section
  availabilityBadge: 'Available for new opportunities',
  // Hero bio paragraph — the substring in bioHighlight is rendered white for emphasis
  bio:               '15 years in enterprise IT. I lead agile teams by understanding the work deeply — coding alongside engineers, implementing DevOps practices, and building with AI in real workflows.',
  bioHighlight:      'building with AI',
  // Professional summary paragraph (recruiter page)
  summary:           `Technical Scrum Master with 15+ years in enterprise IT, combining hands-on development expertise with agile team leadership. I bridge engineering teams and business stakeholders — leading by understanding the work deeply, not just managing it. Currently building AI-driven applications to stay ahead of where the industry is heading.`,
  // Contact details
  location:          'Hyderabad, Telangana, India',
  locationNote:      'Open to Remote',
  email:             'ashutosh.kumar1089@gmail.com',
  phone:             '+91 93477 56890',
  linkedin:          'linkedin.com/in/ashutoshkumar-aa2747135',
  linkedinUrl:       'https://www.linkedin.com/in/ashutoshkumar-aa2747135',
  github:            'github.com/askuma',
  githubUrl:         'https://github.com/askuma',
  // Portfolio footer line
  footerText:        'Ashutosh Kumar © 2026  ·  Built with React + Framer Motion + Tailwind CSS  ·  Hosted on GitHub Pages',
  // Recruiter resume "last updated" date
  updatedDate:       'June 2026',
};

// ── Typewriter Role Cycle (hero) ──────────────────────────────────────────────
export const ROLES = [
  'Technical Scrum Master',
  'AI Explorer & Builder',
  'DevOps Champion',
  'Engineering Mentor',
];

// ── Hero Stats Cards ──────────────────────────────────────────────────────────
// icon must be one of: Award | Layers | TrendingUp | Zap | Users | GitBranch | Code2 | Brain | Shield | BookOpen
export const STATS = [
  { value: 15, suffix: '+',  label: 'Years Experience',    icon: 'Award',      color: '#22C55E' },
  { value: 20, suffix: '+',  label: 'Enterprise Projects', icon: 'Layers',     color: '#3B82F6' },
  { value: 50, suffix: 'M+', label: 'Value Delivered',     icon: 'TrendingUp', color: '#F59E0B', prefix: '$' },
  { value: 95, suffix: '%',  label: 'On-time Delivery',    icon: 'Zap',        color: '#A855F7' },
];

// ── Key Metrics (recruiter page only) ────────────────────────────────────────
export const METRICS = [
  { value: '15+',   label: 'Years in Enterprise IT' },
  { value: '20+',   label: 'Enterprise Projects Delivered' },
  { value: '$50M+', label: 'Combined Project Value' },
  { value: '95%',   label: 'On-time Delivery Rate' },
  { value: '50+',   label: 'Engineers Scaled Across Teams' },
  { value: '8+',    label: 'PMs & Leads Mentored' },
];

// ── Work Experience ───────────────────────────────────────────────────────────
// color: timeline accent color on the portfolio page
// tags:  pill labels shown in the portfolio timeline card
// tools: tools/stack line shown in the recruiter resume
export const EXPERIENCES = [
  {
    role:     'Project Manager / Technical Scrum Master',
    company:  'Accenture',
    location: 'Hyderabad, India',
    period:   'Nov 2022 – Present',
    current:  true,
    color:    '#A855F7',
    achievements: [
      'Led cross-functional team of 15+ engineers with 95%+ on-time delivery rate',
      'Architected DevOps practices: reduced deployment cycle from 6 weeks to 3 days',
      'Mentored 8+ junior project managers and technical leads on agile frameworks',
      'Implemented CI/CD pipelines reducing deployment risk and increasing velocity',
      'Building AI-driven development tools and agentic workflow experiments',
    ],
    tags:  ['Agile', 'DevOps', 'CI/CD', 'AI Integration', 'Team Leadership'],
    tools: 'Agile · Scrum · JIRA · GitLab · DevOps · Python · Java · JavaScript',
  },
  {
    role:     'IT Project Manager | Scrum Master',
    company:  'Coforge',
    location: 'Hyderabad, India',
    period:   'Jun 2022 – Nov 2022',
    color:    '#3B82F6',
    achievements: [
      'Drove delivery across 3 concurrent initiatives ($8M+ combined value)',
      'Managed resources, responsibilities, and schedules for cross-functional teams',
      'Maintained stakeholder relationships across on-site and offshore locations',
      'Proactively identified project slippage and intervened with optimized plans',
    ],
    tags:  ['Project Planning', 'Resource Management', 'Risk Mitigation', 'Agile'],
    tools: 'Project Planning · Resource Management · Risk Management · Agile Delivery',
  },
  {
    role:     'Project Lead',
    company:  'Wipro Technologies',
    location: 'Hyderabad, India',
    period:   'May 2019 – Jun 2022',
    color:    '#F59E0B',
    achievements: [
      'Led agile team of 12 developers through product development and maintenance cycles',
      'Reduced sprint cycle time by 35% through process optimization',
      'Managed scope, schedules, and risks across multiple parallel initiatives',
      'Mentored junior engineers on technical best practices and architecture',
    ],
    tags:  ['Agile Leadership', 'Team Scaling', 'Process Optimization', 'Scrum'],
    tools: 'Agile · Scrum · Stakeholder Management · Technical Mentoring · Process Improvement',
  },
  {
    role:     'Senior Project Engineer',
    company:  'Wipro Technologies',
    location: 'Hyderabad, India',
    period:   'Jul 2013 – May 2019',
    color:    '#22C55E',
    achievements: [
      'Agile developer contributing to 6+ products across 5+ year tenure',
      'Led DITA migration for enterprise clients — 100,000+ pages migrated',
      'End-to-end implementation and maintenance of IXIASOFT DITACMS',
      'Led sprint planning and execution as technical module lead',
    ],
    tags:  ['DITA', 'XML', 'CMS Implementation', 'Technical Leadership'],
    tools: 'DITA · XML · Arbortext · IXIASOFT CMS · Agile Development',
  },
  {
    role:     'Project Engineer',
    company:  'Wipro Technologies',
    location: 'Hyderabad, India',
    period:   'Jul 2010 – Jun 2013',
    color:    '#EC4899',
    achievements: [
      'Developed integration programs for third-party software compatibility',
      'Custom development using Arbortext proprietary XML language',
      'Key developer and QA for multiple enterprise customization projects',
      'Foundation in enterprise software, XML, and client-specific solutions',
    ],
    tags:  ['XML', 'Software Dev', 'QA', 'Integration', 'Arbortext'],
    tools: 'XML · Software Development · QA · Integration Development · Arbortext',
  },
];

// ── Skills — Portfolio View ───────────────────────────────────────────────────
// icon must be one of: Users | GitBranch | Code2 | Brain | Layers | Shield | BookOpen | Zap | Award | TrendingUp | Terminal
export const SKILL_GROUPS = [
  {
    category: 'Leadership & Agile',
    color: '#3B82F6',
    icon: 'Users',
    skills: ['Agile Project Management', 'Scrum Master', 'Team Leadership', 'Stakeholder Management',
             'Agile Coaching', 'Process Improvement', 'Cross-functional Leadership'],
  },
  {
    category: 'DevOps & Tools',
    color: '#F59E0B',
    icon: 'GitBranch',
    skills: ['DevOps', 'CI/CD Pipelines', 'Continuous Integration', 'JIRA', 'Git', 'GitLab', 'Deployment Automation'],
  },
  {
    category: 'Programming',
    color: '#A855F7',
    icon: 'Code2',
    skills: ['Python', 'Java', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3'],
  },
  {
    category: 'AI & Emerging Tech',
    color: '#22C55E',
    icon: 'Brain',
    skills: ['AI-Assisted Development', 'Vibe Coding', 'GitHub Copilot', 'Agentic AI Workflows',
             'Prompt Engineering', 'LLM Integration'],
  },
  {
    category: 'Content & CMS',
    color: '#EC4899',
    icon: 'Layers',
    skills: ['DITA', 'XML', 'Content Management Systems', 'IXIASOFT', 'Arbortext'],
  },
];

// ── Skills — Recruiter View ───────────────────────────────────────────────────
export const RECRUITER_SKILLS = [
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

// ── Education ─────────────────────────────────────────────────────────────────
export const EDUCATION = {
  degree:      'Bachelor of Technology',
  field:       'Information Technology',
  institution: 'Indian Institute of Information Technology (IIIT)',
  period:      '2006 – 2010',
};

// ── Certifications ────────────────────────────────────────────────────────────
// icon must be one of: Shield | Zap | Users | BookOpen | Award | Brain | Code2 | GitBranch
export const CERTIFICATIONS = [
  { name: 'Project Management Professional (PMP)', issuer: 'Project Management Institute', icon: 'Shield'   },
  { name: 'Agile PM with Jira Cloud',              issuer: 'Projects, Boards & Issues',    icon: 'Zap'      },
  { name: 'Managing Project Stakeholders',         issuer: 'Professional Development',      icon: 'Users'    },
  { name: 'Mistakes to Avoid in Agile PM',         issuer: 'Professional Development',      icon: 'BookOpen' },
];

// ── Projects — Portfolio View ─────────────────────────────────────────────────
// lang:     Python | JavaScript | TypeScript  (controls the language dot color)
// category: must exactly match a key in CAT_META below
// featured: true → displayed in the "Featured" row when the "All" filter is active
// highlights: optional bullet list shown only on featured cards
export const PROJECTS = [
  {
    name:        'guardrail_framework_complete',
    tagline:     'Multi-backend AI Safety Layer',
    description: 'Unified AI guardrail abstraction — deploy across NVIDIA NeMo, GuardrailsAI, Microsoft Presidio, and Lakera Guard with a single policy, zero vendor lock-in.',
    tech:        ['Python', 'FastAPI', 'PostgreSQL'],
    lang:        'Python',
    category:    'AI / LLM',
    url:         'https://github.com/askuma/guardrail_framework_complete',
    featured:    true,
    highlights:  [
      'Multi-backend routing — one policy, any backend',
      '40+ REST endpoints with full FastAPI server',
      'A/B policy testing with sticky per-user traffic splits',
      'Prometheus metrics + SSE real-time audit log',
      'Agent guardrails: tool call validation & budget caps',
    ],
  },
  {
    name:        'SprintPulse',
    tagline:     'AI-Powered Sprint Reports',
    description: 'Automated sprint status reporter — aggregates data from Jira, GitHub, and Slack, then uses Mistral AI to generate structured weekly insights in a React dashboard.',
    tech:        ['JavaScript', 'React', 'Mistral AI'],
    lang:        'JavaScript',
    category:    'Agile Tools',
    url:         'https://github.com/askuma/SprintPulse',
    featured:    true,
    highlights:  [
      'Pulls live data from Jira, GitHub & Slack',
      'AI-generated sprint summaries via Mistral',
      'React dashboard with one-click report generation',
      'Mock mode for safe offline development',
    ],
  },
  {
    name:        'SprintPulseN8N',
    tagline:     'Low-Code Workflow Automation',
    description: 'N8N-powered variant of SprintPulse — orchestrates sprint reporting via visual workflow nodes, removing all custom glue code from the Jira / GitHub / Slack pipeline.',
    tech:        ['TypeScript', 'N8N', 'Workflow Automation'],
    lang:        'TypeScript',
    category:    'Agile Tools',
    url:         'https://github.com/askuma/SprintPulseN8N',
  },
  {
    name:        'generate-tech-stack',
    tagline:     'Auto-Detect & Visualize Tech Stack',
    description: 'Scan any project — zero config — and generate a visual TECH_STACK.html with architecture diagram, bar chart, and tool cards. Ships as a Claude Code skill and MCP server.',
    tech:        ['Python', 'MCP', 'Claude Code'],
    lang:        'Python',
    category:    'Dev Tools',
    url:         'https://github.com/askuma/generate-tech-stack',
    highlights:  [
      'Detects 50+ tools from package.json, Dockerfile, go.mod…',
      'Layered architecture diagram + horizontal bar chart',
      'Works as MCP server and GitHub Copilot Extension',
    ],
  },
  {
    name:        'MAS_SDLC_Agents',
    tagline:     'Multi-Agent SDLC Orchestration',
    description: 'Multi-agent system for automating SDLC processes — intelligent orchestration across planning, development, review, and deployment lifecycle stages.',
    tech:        ['Python', 'Multi-Agent', 'SDLC'],
    lang:        'Python',
    category:    'AI / LLM',
    url:         'https://github.com/askuma/MAS_SDLC_Agents',
  },
  {
    name:        'Copilot Agent Mode',
    tagline:     'AI-Assisted App Development',
    description: 'Practical exercises building real apps with GitHub Copilot agent mode — documenting what vibe coding actually feels like with structured learning experiments.',
    tech:        ['Python', 'GitHub Copilot'],
    lang:        'Python',
    category:    'Learning / Lab',
    url:         'https://github.com/askuma/skills-build-applications-w-copilot-agent-mode',
  },
];

// ── Projects — Recruiter Highlights ──────────────────────────────────────────
// url here is without https:// (displayed as plain text link)
export const PROJECTS_HIGHLIGHT = [
  {
    name: 'guardrail_framework_complete',
    desc: 'Unified AI guardrail abstraction layer — multi-backend routing across NVIDIA NeMo, GuardrailsAI, Presidio, and Lakera Guard. 40+ REST endpoints, A/B policy testing, Prometheus observability.',
    tech: 'Python · FastAPI · PostgreSQL',
    url:  'github.com/askuma/guardrail_framework_complete',
  },
  {
    name: 'SprintPulse',
    desc: 'AI-powered sprint status reporter — aggregates Jira, GitHub, and Slack data, then generates structured weekly insights via Mistral AI.',
    tech: 'JavaScript · React · Mistral AI',
    url:  'github.com/askuma/SprintPulse',
  },
  {
    name: 'generate-tech-stack',
    desc: 'Claude Code skill + MCP server that scans any project and auto-generates a visual TECH_STACK.html with architecture diagram and tool cards.',
    tech: 'Python · MCP · Claude Code',
    url:  'github.com/askuma/generate-tech-stack',
  },
];

// ── Languages (recruiter page) ────────────────────────────────────────────────
export const LANGUAGES = [
  { lang: 'English', level: 'Professional Working' },
  { lang: 'Hindi',   level: 'Native / Bilingual'   },
];

// ── Terminal Lines (hero section) ─────────────────────────────────────────────
export const TERMINAL_LINES = [
  { cmd: 'whoami',            out: 'ashutosh_kumar',                           color: '#22C55E' },
  { cmd: 'cat role.txt',      out: 'Technical Scrum Master | AI Builder',      color: '#3B82F6' },
  { cmd: 'echo $EXPERIENCE',  out: '15+ years in enterprise IT',               color: '#F59E0B' },
  { cmd: 'ls ./skills/',      out: 'leadership/ devops/ ai/ programming/ cms/', color: '#A855F7' },
  { cmd: 'git log --oneline', out: 'building with AI, learning in public...',  color: '#22C55E' },
];

// ── Avatar Skill Badges (hero illustration) ───────────────────────────────────
export const AVATAR_BADGES = [
  { label: 'PMP',    color: '#F59E0B', x: '-20px', y: '40px'  },
  { label: 'AI',     color: '#22C55E', x: '200px', y: '60px'  },
  { label: 'DevOps', color: '#3B82F6', x: '-30px', y: '170px' },
  { label: 'Agile',  color: '#A855F7', x: '185px', y: '165px' },
];

// ── Current Focus Block (skills section) ──────────────────────────────────────
export const CURRENT_FOCUS = {
  title: 'Current Focus: AI-Driven Development',
  body:  'Actively building AI-driven applications — experimenting with agentic AI workflows, vibe coding methodologies, and GitHub Copilot agent mode. Not theorizing about AI adoption — building with it, learning from real constraints, and sharing what works through public GitHub projects.',
};

// ── Contact Section Copy ──────────────────────────────────────────────────────
export const CONTACT_SECTION = {
  heading1: "Let's Build",
  heading2: 'Something Together',
  subtext:  "Interested in discussing technical leadership, agile transformation, or AI-driven development workflows? I'm always open to meaningful conversations.",
};

// ── Project Category Styles ───────────────────────────────────────────────────
// IMPORTANT: keys must exactly match the `category` field values used in PROJECTS
export const CAT_META = {
  'AI / LLM':       { color: '#22C55E', bg: 'rgba(34,197,94,0.1)',   border: 'rgba(34,197,94,0.25)'   },
  'Agile Tools':    { color: '#3B82F6', bg: 'rgba(59,130,246,0.1)',  border: 'rgba(59,130,246,0.25)'  },
  'Dev Tools':      { color: '#F59E0B', bg: 'rgba(245,158,11,0.1)',  border: 'rgba(245,158,11,0.25)'  },
  'Learning / Lab': { color: '#A855F7', bg: 'rgba(168,85,247,0.1)',  border: 'rgba(168,85,247,0.25)'  },
};

// ── Language Dot Colors ───────────────────────────────────────────────────────
export const LANG_COLORS = {
  Python:     '#3B82F6',
  JavaScript: '#F7DF1E',
  TypeScript: '#3178C6',
};
