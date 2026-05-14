/* global window */
// Content for Russel Harvey Mercado IV - AI Portfolio

window.PORTFOLIO = {
  name: "Russel Harvey Mercado IV",
  short: "Russel Mercado",
  handle: "russelharveyiv",
  role: "Full-Stack AI Engineer",
  location: "Cebu, Philippines",
  remote: "Working remotely with teams in AU & US",
  email: "russelmercadosacs@gmail.com",
  phone: "+63 931 152 5226",
  github: "https://github.com/RusselHarveyMercadoIV",

  hero: {
    available: "Open to AI engineering roles · full-time or contract",
    headline_pre: "I build",
    headline_em: "agentic",
    headline_post: "AI products that ship to production.",
    sub: "Full-stack engineer focused on agentic AI — voice agents, RAG, MCP tools, and the unglamorous infra that keeps them running. Three years across AU and US teams shipping production AI features, enterprise .NET migrations, and hospitality SaaS.",
  },

  now: {
    company: "Octa",
    location: "open-source",
    role: "Building & maintaining",
    since: "SHIPPING IN THE OPEN",
    summary: "Maintaining Octa — an architecture governance CLI for AI-first teams — while exploring next moves. Open to AI engineering roles across AU, US, and remote-first teams.",
  },

  projects: [
    {
      no: "01",
      slug: "octa",
      name: "Octa",
      tag: "Open-source · CLI · Architecture governance",
      tagline: "The architectural reasoning engine for AI-first teams.",
      desc: "A governance layer that turns system design into machine-readable, enforceable intent. Octa watches your code reality, infers drift from your stated architecture, and syncs rules directly into Cursor, Copilot, and other AI agents so they stay inside the guardrails.",
      role: "Author, maintainer",
      stack: ["TypeScript", "Node", "AST", "Husky / CI"],
      year: "2026",
      links: [
        { label: "GitHub", href: "https://github.com/RusselHarveyMercadoIV/octa" },
        { label: "npm", href: "https://www.npmjs.com/package/@russelharveyiv/octa" },
      ],
      highlights: [
        "Lifecycle manager for architectural decisions: Proposed → Active → Superseded",
        "Inference engine maps code patterns to stated intent",
        "Auto-syncs rules into .cursorrules / Copilot instructions",
      ],
    },
    {
      no: "02",
      slug: "strata",
      name: "Strata Enquiry Triage",
      tag: "Prototype · LLM · Structured outputs",
      tagline: "AI-powered email triage for management consulting.",
      desc: "Single-page tool that classifies unstructured client enquiries, scores urgency, routes them to the right internal team, and drafts context-aware responses. Built on Gemini 2.5 Flash with strict Zod-validated structured outputs — schema validation failures degrade into helpful UI states instead of crashes.",
      role: "Solo build",
      stack: ["React", "Vite", "Zod", "Gemini 2.5 Flash"],
      year: "2026",
      links: [
        { label: "GitHub", href: "https://github.com/RusselHarveyMercadoIV/strata-enquiry-helper-ai" },
      ],
      highlights: [
        "Strict responseSchema → guaranteed JSON contract with the LLM",
        "Live-editable system prompt + few-shot examples, persisted locally",
        "History tracking with one-click restore of prior analyses",
      ],
    },
  ],

  capabilities: [
    {
      title: "Agentic AI Systems",
      blurb: "Multi-step agents that plan, call tools, and recover from failure — wired through MCP, A2A, or LangChain. From voice agents on Vapi to background workers that triage email.",
      stack: ["MCP", "LangChain", "A2A", "Vapi"],
    },
    {
      title: "RAG & Knowledge Bases",
      blurb: "Retrieval pipelines that don't hallucinate the easy parts — chunking strategies, hybrid search, eval harnesses, and structured grounding back into product UX.",
      stack: ["pgvector", "Supabase", "OpenAI", "Huggingface"],
    },
    {
      title: "LLM Backends",
      blurb: "Production-grade orchestration across OpenRouter, OpenAI, Groq, and self-hosted Ollama. Cost-aware routing, structured outputs with Zod, observability and fallbacks.",
      stack: ["OpenRouter", "Groq", "Ollama", "Zod"],
    },
    {
      title: "Full-Stack Product Work",
      blurb: "React / Next / Nest end-to-end. Type-safe contracts, real auth, real database design — so the AI features land inside a product instead of next to one.",
      stack: ["Next.js", "NestJS", "PostgreSQL", "TypeORM"],
    },
    {
      title: "Legacy → Modern Migration",
      blurb: "Shipped a .NET 2 → .NET 8 + React/Angular rewrite at GCheck while keeping the background-check product running. Comfortable in C#, EF, and the load-bearing parts of someone else's codebase.",
      stack: [".NET 8", "C#", "Angular", "ReactJS"],
    },
    {
      title: "Workflow Automation",
      blurb: "End-to-end automations that take a noisy human process and quietly handle it — email triage, lead routing, n8n / Zapier-style pipelines glued together with AI where the rules run out.",
      stack: ["LangChain", "Webhooks", "NestJS", "Cron"],
    },
    {
      title: "Self-hosting & Deploy",
      blurb: "Dokploy, Docker, DigitalOcean. The boring layer between a working notebook and a thing your customers can actually use on a Tuesday.",
      stack: ["Docker", "Dokploy", "DigitalOcean", "GitHub Actions"],
    },
  ],

  experience: [
    {
      date: "Jun 2025 — 2026",
      role: "Full-Stack Developer (AI-Focused)",
      company: "LeadAI Pty Ltd",
      loc: "Moonee Ponds, AU · Remote",
      desc: "Developed and integrated advanced AI features into a CRM sales-pipeline product. Leaned on agentic AI to address novel workflow challenges — automation, personalization, end-to-end UX. Rapid-prototyped, brainstormed with the team, shipped.",
      tags: ["React", "Next.js", "NestJS", "Vapi", "Supabase", "MCP", "RAG", "LangChain", "OpenRouter", "PostgreSQL", "Docker", "Dokploy"],
    },
    {
      date: "Jun 2024 — Jun 2025",
      role: "Full-Stack Developer",
      company: "GCheck Inc.",
      loc: "Los Angeles, CA · Remote",
      desc: "Owned migration of a legacy .NET 2 background-check platform to .NET 8 with ReactJS + Angular 16 frontends. The product automates advanced background checks for employers across active and prospective employees.",
      tags: ["ReactJS", "Angular 16", "C#", ".NET 8", "MSSQL"],
    },
    {
      date: "Jun 2023 — Jul 2023",
      role: "Lead Developer · Summer Bridge",
      company: "Alliance Software Inc.",
      loc: "Cebu, PH",
      desc: "Led the top-ranked team in Alliance's Summer Bridge program. Guided the group end-to-end on building an online application; earned 'Best Team' for the cohort.",
      tags: ["C#", ".NET 7", "Blazor", "XUnit", "MSSQL"],
    },
    {
      date: "Oct 2022 — Jun 2023",
      role: "Junior Developer",
      company: "MFC Didge",
      loc: "Remote (AU)",
      desc: "Built integrations on a hospitality platform tailored to Australian hotels: daily operations, personnel management, and HR workflows.",
      tags: ["ReactJS", "NestJS", "Next.js", "Java", "AWS"],
    },
  ],

  stack: {
    Languages: ["TypeScript", "JavaScript", "C#", "Java", "Python"],
    "AI Infra": ["MCP", "RAG", "A2A", "LangChain", "Vapi", "OpenRouter", "OpenAI", "Groq", "Ollama", "Huggingface"],
    Frameworks: ["Next.js", "NestJS", "React", "Angular", "Spring", ".NET 8", "Blazor", "XUnit"],
    Data: ["PostgreSQL", "MSSQL", "MySQL", "MongoDB", "Supabase", "TypeORM", "Entity Framework", "Dapper", "Hibernate"],
    "Cloud / Deploy": ["AWS Cognito", "AWS Transcribe", "DigitalOcean", "Dokploy", "Docker", "GitHub Actions"],
    "Frontend Craft": ["Tailwind CSS", "HTML5", "CSS3", "Zod", "Lucide", "shadcn/ui"],
  },

  useCases: [
    // Fill these in. Each entry: { industry, title, problem, approach, outcome, stack: [...] }
    // Leave as null to render an empty placeholder slot.
    null,
    null,
    null,
    null,
  ],

  testimonials: [
    // Real placeholders — Russel will fill these in. Leave 3 dashed slots visible by default.
    null,
    null,
    null,
  ],
};
