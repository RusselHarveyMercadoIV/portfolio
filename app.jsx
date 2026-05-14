/* global React */
const { useState, useEffect, useMemo } = React;
const P = window.PORTFOLIO;

// ============================================================
// Tiny inline icons (no library — keep bundle small)
// ============================================================
const Icon = {
  arrow: (p) => <svg viewBox="0 0 16 16" fill="none" {...p}><path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  github: (p) => <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55 0-.27-.01-1.18-.02-2.14-3.2.69-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.27-5.23-5.67 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.17a11.04 11.04 0 0 1 5.79 0c2.2-1.48 3.17-1.17 3.17-1.17.63 1.58.23 2.75.11 3.04.74.8 1.18 1.82 1.18 3.07 0 4.41-2.69 5.38-5.25 5.66.41.35.78 1.05.78 2.12 0 1.53-.01 2.76-.01 3.13 0 .3.21.66.8.55C20.22 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5Z"/></svg>,
  link: (p) => <svg viewBox="0 0 16 16" fill="none" {...p}><path d="M7 9.5C7.5 10 8 10.3 8.5 10.3M9 6.5C8.5 6 8 5.7 7.5 5.7M6 11.5L4.5 13C3.5 14 2 14 1 13C0 12 0 10.5 1 9.5L3.5 7M10 4.5L11.5 3C12.5 2 14 2 15 3C16 4 16 5.5 15 6.5L12.5 9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>,
  agent: (p) => <svg viewBox="0 0 24 24" fill="none" {...p}><rect x="4" y="6" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/><circle cx="9" cy="12" r="1.2" fill="currentColor"/><circle cx="15" cy="12" r="1.2" fill="currentColor"/><path d="M12 2v4M8 18l-1 3M16 18l1 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  rag: (p) => <svg viewBox="0 0 24 24" fill="none" {...p}><path d="M4 6c0-1.1 3.6-2 8-2s8 .9 8 2v12c0 1.1-3.6 2-8 2s-8-.9-8-2V6Z" stroke="currentColor" strokeWidth="1.5"/><path d="M4 6c0 1.1 3.6 2 8 2s8-.9 8-2M4 12c0 1.1 3.6 2 8 2s8-.9 8-2" stroke="currentColor" strokeWidth="1.5"/></svg>,
  llm: (p) => <svg viewBox="0 0 24 24" fill="none" {...p}><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/><circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 3"/><path d="M12 1v3M12 20v3M1 12h3M20 12h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  stack: (p) => <svg viewBox="0 0 24 24" fill="none" {...p}><path d="M3 7l9-4 9 4-9 4-9-4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><path d="M3 12l9 4 9-4M3 17l9 4 9-4" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>,
  migrate: (p) => <svg viewBox="0 0 24 24" fill="none" {...p}><path d="M3 8h14M17 8l-4-4M17 8l-4 4M21 16H7M7 16l4-4M7 16l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  deploy: (p) => <svg viewBox="0 0 24 24" fill="none" {...p}><path d="M12 3l9 5v8l-9 5-9-5V8l9-5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><path d="M12 12v9M12 12l9-4M12 12L3 8" stroke="currentColor" strokeWidth="1.5"/></svg>,
  flow: (p) => <svg viewBox="0 0 24 24" fill="none" {...p}><rect x="2.5" y="4" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5"/><rect x="15.5" y="4" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5"/><rect x="9" y="14" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5"/><path d="M8.5 7h7M5.5 10v2c0 1 .5 2 2 2h1.5M18.5 10v2c0 1-.5 2-2 2H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  octa: (p) => <svg viewBox="0 0 24 24" fill="none" {...p}><path d="M8 3h8l5 5v8l-5 5H8l-5-5V8l5-5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><circle cx="12" cy="12" r="2" fill="currentColor"/></svg>,
  mail: (p) => <svg viewBox="0 0 24 24" fill="none" {...p}><rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M3 7l9 7 9-7" stroke="currentColor" strokeWidth="1.5"/></svg>,
};

const capIcons = {
  "Agentic AI Systems": Icon.agent,
  "RAG & Knowledge Bases": Icon.rag,
  "LLM Backends": Icon.llm,
  "Full-Stack Product Work": Icon.stack,
  "Legacy → Modern Migration": Icon.migrate,
  "Workflow Automation": Icon.flow,
  "Self-hosting & Deploy": Icon.deploy,
};

// ============================================================
// Nav
// ============================================================
function Nav() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const tick = () => {
      const d = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Manila" }));
      const hh = String(d.getHours()).padStart(2, "0");
      const mm = String(d.getMinutes()).padStart(2, "0");
      setTime(`${hh}:${mm} GMT+8`);
    };
    tick();
    const id = setInterval(tick, 30000);
    return () => clearInterval(id);
  }, []);

  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="#top" className="brand">
          <span className="brand-mark">
            <svg viewBox="0 0 32 32" fill="none">
              <path d="M11 3h10l6 6v14l-6 6H11l-6-6V9l6-6Z" stroke="#e8b647" strokeWidth="1.6" strokeLinejoin="round"/>
              <circle cx="16" cy="16" r="3" fill="#e8b647"/>
            </svg>
          </span>
          <span><strong>russel mercado</strong> <span className="slash">/</span> ai engineer</span>
        </a>
        <div className="nav-links">
          <a href="#work"><span className="num">01</span> Work</a>
          <a href="#capabilities"><span className="num">02</span> Capabilities</a>
          <a href="#use-cases"><span className="num">03</span> Use Cases</a>
          <a href="#experience"><span className="num">04</span> Experience</a>
          <a href="#stack"><span className="num">05</span> Stack</a>
          <a href="#testimonials"><span className="num">06</span> Testimonials</a>
        </div>
        <div className="nav-right">
          <span className="clock">
            <span className="clock-dot"></span>
            {time}
          </span>
          <a href={`mailto:${P.email}`} className="cta-pill">
            Get in touch <Icon.arrow width="12" height="12" />
          </a>
        </div>
      </div>
    </nav>
  );
}

// ============================================================
// Hero
// ============================================================
function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap">
        <div className="hero-grid">
          <div>
            <span className="status-pill">
              <span className="status-dot"></span>
              {P.hero.available}
            </span>
            <h1>
              I build <em>agentic</em> AI products<br/>
              that <span className="underline-accent">ship to production</span>.
            </h1>
            <p className="hero-sub">
              {P.hero.sub}
            </p>
            <div className="hero-actions">
              <a href="#work" className="btn primary">
                See selected work <span className="arrow">↗</span>
              </a>
              <a href={`mailto:${P.email}`} className="btn">
                <Icon.mail width="14" height="14" /> {P.email}
              </a>
            </div>
          </div>
          <HeroTerminal />
        </div>
      </div>
      <Marquee />
    </section>
  );
}

function HeroTerminal() {
  return (
    <div className="terminal">
      <div className="terminal-head">
        <div className="terminal-dots"><span/><span/><span/></div>
        <div className="terminal-title">~ / russel.profile.json</div>
        <div style={{ width: 38 }} />
      </div>
      <div className="terminal-body">
        <span className="t-line"><span className="t-prompt">$</span> <span className="t-out">cat russel.profile.json</span></span>
        <span className="t-line">{'{'}</span>
        <span className="t-line">{'  '}<span className="t-key">"name"</span>: <span className="t-str">"Russel Harvey Mercado IV"</span>,</span>
        <span className="t-line">{'  '}<span className="t-key">"role"</span>: <span className="t-str">"Full-Stack AI Engineer"</span>,</span>
        <span className="t-line">{'  '}<span className="t-key">"based"</span>: <span className="t-str">"Cebu, PH"</span>,</span>
        <span className="t-line">{'  '}<span className="t-key">"status"</span>: <span className="t-str">"open to roles"</span>,</span>
        <span className="t-line">{'  '}<span className="t-key">"focus"</span>: [</span>
        <span className="t-line">{'    '}<span className="t-str">"agentic-ai"</span>, <span className="t-str">"rag"</span>, <span className="t-str">"mcp"</span>,</span>
        <span className="t-line">{'    '}<span className="t-str">"voice-agents"</span>, <span className="t-str">"full-stack"</span></span>
        <span className="t-line">{'  '}],</span>
        <span className="t-line">{'  '}<span className="t-key">"years_in_industry"</span>: <span className="t-num">3</span>,</span>
        <span className="t-line">{'  '}<span className="t-key">"open_to"</span>: <span className="t-str">"contract / full-time"</span>,</span>
        <span className="t-line">{'  '}<span className="t-key">"timezone"</span>: <span className="t-str">"GMT+8 · overlaps AU & US"</span></span>
        <span className="t-line">{'}'}</span>
        <span className="t-line"><span className="t-prompt">$</span> <span className="t-out">_</span><span style={{ animation: 'pulse 1s infinite' }}>▋</span></span>
      </div>
    </div>
  );
}

function Marquee() {
  const items = ["LangChain", "MCP · Model Context Protocol", "Vapi voice agents", "Next.js + NestJS", "Supabase + pgvector", "OpenRouter", "Structured outputs (Zod)", "RAG pipelines", "Self-hosted on Dokploy", "Groq / Ollama"];
  const doubled = [...items, ...items];
  return (
    <div className="marquee">
      <div className="marquee-track">
        {doubled.map((t, i) => (
          <span className="marquee-item" key={i}>
            {t} <span className="dot"></span>
          </span>
        ))}
      </div>
    </div>
  );
}

// ============================================================
// Now strip
// ============================================================
function NowStrip() {
  return (
    <div className="wrap" style={{ marginTop: -40, marginBottom: 40 }}>
      <div className="now-strip">
        <div className="now-label">
          <span className="status-dot" style={{ background: '#e8b647', boxShadow: '0 0 0 3px rgba(232,182,71,0.18)' }}></span>
          Currently
        </div>
        <div className="now-body">
          {P.now.summary}
        </div>
        <div className="now-meta">{P.now.since}</div>
      </div>
    </div>
  );
}

// ============================================================
// Selected Work
// ============================================================
function Work() {
  return (
    <section id="work">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="section-label">Selected Work · 02</div>
            <h2 className="section-title">Two things I built <em>recently</em> that show how I think.</h2>
          </div>
          <p className="section-sub">
            Both shipped in the last cycle. Tooling for AI-assisted teams, and an LLM product where the contract with the model is the entire interesting part.
          </p>
        </div>

        <div className="work-grid">
          {P.projects.map((proj, i) => (
            <CaseStudy key={proj.slug} proj={proj} idx={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudy({ proj, idx }) {
  return (
    <article className="case">
      <div className="case-body">
        <div className="case-head">
          <span className="case-icon">
            {proj.slug === "octa" ? <Icon.octa /> : <Icon.mail />}
          </span>
          <span className="case-tag">{proj.tag}</span>
          <span className="case-no">CASE / {proj.no}</span>
        </div>
        <h3>{proj.name} <span style={{ color: 'var(--text-3)', fontWeight: 400 }}>— {proj.tagline}</span></h3>
        <p className="case-desc">{proj.desc}</p>

        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8, paddingTop: 8 }}>
          {proj.highlights.map((h, i) => (
            <li key={i} style={{ display: 'flex', gap: 12, color: 'var(--text-2)', fontSize: 14, lineHeight: 1.55 }}>
              <span style={{ color: 'var(--accent)', fontFamily: 'Geist Mono, monospace', fontSize: 11, marginTop: 4 }}>0{i+1}</span>
              <span>{h}</span>
            </li>
          ))}
        </ul>

        <div className="case-meta">
          <div className="case-meta-item">
            <span className="k">Role</span>
            <span className="v">{proj.role}</span>
          </div>
          <div className="case-meta-item">
            <span className="k">Year</span>
            <span className="v">{proj.year}</span>
          </div>
          <div className="case-meta-item">
            <span className="k">Stack</span>
            <span className="v">{proj.stack.join(" · ")}</span>
          </div>
        </div>

        <div className="case-links">
          {proj.links.map((l) => (
            <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className="btn">
              {l.label === "GitHub" ? <Icon.github width="13" height="13" /> : <Icon.link width="13" height="13" />}
              {l.label} <span className="arrow">↗</span>
            </a>
          ))}
        </div>
      </div>

      <div className="case-visual">
        {proj.slug === "octa" ? <OctaVisual /> : <StrataVisual />}
      </div>
    </article>
  );
}

function OctaVisual() {
  return (
    <div className="octa-vis">
      <div className="toolbar">
        <span style={{ color: 'var(--accent)' }}>⬢</span>
        <span style={{ color: 'var(--text)' }}>octa look</span>
        <span className="badge">live</span>
        <span style={{ marginLeft: 'auto', color: 'var(--text-4)' }}>/registry.json</span>
      </div>
      <div className="octa-graph">
        <div className="octa-node active">
          <span className="nname">auth.jwt</span>
          <div>stateless · scalable</div>
          <span className="tag">active</span>
        </div>
        <div className="octa-node">
          <span className="nname">db.postgres</span>
          <div>typeorm</div>
          <span className="tag">active</span>
        </div>
        <div className="octa-node drift">
          <span className="nname">api.layer</span>
          <div>direct repo access</div>
          <span className="tag">drift</span>
        </div>
        <div className="octa-node">
          <span className="nname">queue.bullmq</span>
          <div>async jobs</div>
          <span className="tag">active</span>
        </div>
        <div className="octa-node active">
          <span className="nname">llm.router</span>
          <div>openrouter · groq</div>
          <span className="tag">proposed</span>
        </div>
        <div className="octa-node">
          <span className="nname">obs.otel</span>
          <div>traces · spans</div>
          <span className="tag">active</span>
        </div>
      </div>
      <div className="octa-status">
        <span className="pill ok">6 active</span>
        <span className="pill warn">1 proposed</span>
        <span className="pill bad">1 drift</span>
        <span style={{ marginLeft: 'auto', color: 'var(--text-4)' }}>sync → .cursorrules</span>
      </div>
    </div>
  );
}

function StrataVisual() {
  return (
    <div className="strata-vis">
      <div className="strata-email">
        <div className="from"><span>from: priya@acme.co</span><span>11:42 AM</span></div>
        <div className="subj">Need help untangling our Q3 commercial structure — urgent</div>
        <div style={{ color: 'var(--text-3)', fontSize: 11.5 }}>
          "Hi team — our partner just told us the joint-venture clauses are blocking the new product line. Board meets Friday. Can someone get back to me today?"
        </div>
      </div>
      <div className="strata-arrow">
        <span className="glow"></span>
        gemini-2.5-flash · responseSchema
        <span className="glow"></span>
      </div>
      <div className="strata-result">
        <div className="row"><span className="k">category</span><span className="v team">commercial / legal</span></div>
        <div className="row"><span className="k">urgency</span><span className="v urgent">P0 · same-day</span></div>
        <div className="row"><span className="k">route_to</span><span className="v">corp-strategy</span></div>
        <div className="row"><span className="k">draft_reply</span><span className="v ok">generated · 142w</span></div>
        <div className="schema">✓ schema validated · zod.parse() ok</div>
      </div>
    </div>
  );
}

// ============================================================
// Capabilities
// ============================================================
function Capabilities() {
  return (
    <section id="capabilities">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="section-label">Capabilities · {String(P.capabilities.length).padStart(2,'0')}</div>
            <h2 className="section-title">What you'd actually <em>hire me</em> to do.</h2>
          </div>
          <p className="section-sub">
            Six things I've shipped real money behind — from recent and past work. Not from a tutorial I bookmarked.
          </p>
        </div>

        <div className="uses-grid">
          {P.capabilities.map((c) => {
            const Ico = capIcons[c.title];
            return (
              <div className="use-card" key={c.title}>
                <div className="use-icon">{Ico && <Ico width="28" height="28" />}</div>
                <h4>{c.title}</h4>
                <p>{c.blurb}</p>
                <div className="stack">
                  {c.stack.map((s) => <span key={s}>{s}</span>)}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// Use Cases (user populates)
// ============================================================
function UseCases() {
  const total = P.useCases.length;
  return (
    <section id="use-cases">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="section-label">Use Cases · {String(total).padStart(2,'0')}</div>
            <h2 className="section-title">Where this work actually <em>lands</em>.</h2>
          </div>
          <p className="section-sub">
            Concrete scenarios I'm equipped to take on — the kind of problem, how I'd approach it, and what shipping looks like. (Stories coming in — drop yours into the slots.)
          </p>
        </div>

        <div className="uc-grid">
          {P.useCases.map((u, i) => (
            u ? (
              <article className="uc" key={i}>
                <div className="uc-head">
                  <span className="uc-industry">{u.industry}</span>
                  <span className="uc-no">USE / {String(i+1).padStart(2,'0')}</span>
                </div>
                <h3 className="uc-title">{u.title}</h3>
                <div className="uc-body">
                  <div className="uc-field"><span className="k">Problem</span><span className="v">{u.problem}</span></div>
                  <div className="uc-field"><span className="k">Approach</span><span className="v">{u.approach}</span></div>
                  <div className="uc-field"><span className="k">Outcome</span><span className="v outcome">{u.outcome}</span></div>
                  {u.stack && (
                    <div className="uc-field"><span className="k">Stack</span>
                      <span className="v"><div className="uc-stack">{u.stack.map(s => <span key={s}>{s}</span>)}</div></span>
                    </div>
                  )}
                </div>
              </article>
            ) : (
              <article className="uc empty" key={i}>
                <div className="uc-head">
                  <span className="uc-industry">industry · vertical</span>
                  <span className="uc-no">USE / {String(i+1).padStart(2,'0')}</span>
                </div>
                <h3 className="uc-title">Use-case headline goes here</h3>
                <div className="uc-body">
                  <div className="uc-field"><span className="k">Problem</span><span className="v">The pain you were hired to solve.</span></div>
                  <div className="uc-field"><span className="k">Approach</span><span className="v">How you tackled it — architecture, tools, sequencing.</span></div>
                  <div className="uc-field"><span className="k">Outcome</span><span className="v outcome">What shipped — metrics, time saved, $$$.</span></div>
                  <div className="uc-field"><span className="k">Stack</span><span className="v">react · langchain · supabase · …</span></div>
                </div>
              </article>
            )
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// Experience timeline
// ============================================================
function Experience() {
  return (
    <section id="experience">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="section-label">Experience · 04</div>
            <h2 className="section-title">Three years, three time zones, <em>one</em> through-line.</h2>
          </div>
          <p className="section-sub">
            AU hospitality SaaS → US background-check platform → AU AI-first CRM. Each step took on more autonomy and more AI.
          </p>
        </div>

        <div className="timeline">
          {P.experience.map((e, i) => (
            <div className="tl-row" key={i}>
              <div className="tl-date">
                {e.date}
                {e.current && <span className="current">NOW</span>}
              </div>
              <div>
                <div className="tl-role">{e.role}</div>
                <div className="tl-co">{e.company} <span className="loc">· {e.loc}</span></div>
                <p className="tl-desc">{e.desc}</p>
                <div className="tl-tags">
                  {e.tags.map((t) => <span key={t}>{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// Stack
// ============================================================
function Stack() {
  const cols = Object.entries(P.stack);
  return (
    <section id="stack">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="section-label">Stack · {cols.length}</div>
            <h2 className="section-title">The toolbox, <em>roughly</em> in order of how often it gets opened.</h2>
          </div>
          <p className="section-sub">
            Languages and frameworks I reach for daily. AI infra at the top — it's where most of the new work lives.
          </p>
        </div>

        <div className="stack-grid">
          {cols.map(([name, items]) => (
            <div className="stack-col" key={name}>
              <h5>{name}</h5>
              <ul>
                {items.map((it) => (
                  <li key={it}><span className="dotsq"></span> {it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// Testimonials  (empty slots — Russel fills them in)
// ============================================================
function Testimonials() {
  return (
    <section id="testimonials">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="section-label">Testimonials · 03</div>
            <h2 className="section-title">From people I've shipped <em>alongside</em>.</h2>
          </div>
          <p className="section-sub">
            Words from teammates, leads, and clients. (Quotes coming in — drop yours into the placeholders.)
          </p>
        </div>

        <div className="testi-grid">
          {P.testimonials.map((t, i) => (
            t ? (
              <div className="testi" key={i}>
                <span className="quote-mark">"</span>
                <p>{t.quote}</p>
                <div className="author">
                  <div className="avatar">{t.name.split(' ').map(x => x[0]).slice(0,2).join('')}</div>
                  <div className="meta">
                    <div className="n">{t.name}</div>
                    <div className="r">{t.role}</div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="testi empty" key={i}>
                <p>Slot · {String(i+1).padStart(2,'0')}</p>
                <span className="hint">Quote from a teammate, lead, or client goes here.</span>
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// Contact
// ============================================================
function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="wrap">
        <div className="contact-eyebrow">Get in touch · always reading</div>
        <h2>
          Have an <em>AI feature</em> that<br/>
          needs to actually <em>ship?</em>
        </h2>
        <a href={`mailto:${P.email}`} className="email-btn">
          {P.email} <Icon.arrow width="16" height="16" />
        </a>
        <div className="contact-meta">
          <span>Based in {P.location} · GMT+8</span>
          <a href={P.github} target="_blank" rel="noreferrer">github.com/{P.handle}</a>
          <a href={`tel:${P.phone.replace(/\s/g,'')}`}>{P.phone}</a>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// Footer
// ============================================================
function Footer() {
  return (
    <footer>
      <div>© 2026 Russel Harvey Mercado IV · Built from scratch with React</div>
      <div>Last shipped: <span style={{ color: 'var(--text-2)' }}>v2026.05 — portfolio relaunch</span></div>
    </footer>
  );
}

// ============================================================
// App
// ============================================================
function App() {
  return (
    <>
      <Nav />
      <Hero />
      <NowStrip />
      <Work />
      <Capabilities />
      <UseCases />
      <Experience />
      <Stack />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
