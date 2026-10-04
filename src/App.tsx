import { useEffect, useState, type MouseEvent } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  Code2,
  Copy,
  Download,
  ExternalLink,
  Github,
  Mail,
  MapPin,
  Menu,
  Moon,
  ShieldCheck,
  Sun,
  X,
} from "lucide-react";
import { Terminal } from "./components/Terminal";
import { career, navigation, portfolio, skillGroups, systemAreas, type NavId } from "./data/portfolio";

type Theme = "green" | "amber";

function SectionTitle({
  id,
  number,
  label,
  title,
  subtitle,
}: {
  readonly id: string;
  readonly number: string;
  readonly label: string;
  readonly title: string;
  readonly subtitle?: string;
}) {
  return (
    <div className="section__heading">
      <div className="section__eyebrow">
        <span className="section__dash" /> {number} / {label}
      </div>
      <h2 id={id}>
        {title}
        <span className="accent-dot">.</span>
      </h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}

export default function App() {
  const [theme, setTheme] = useState<Theme>("green");
  const [active, setActive] = useState<NavId>("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    const sections = navigation
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (items) => {
        const visible = items
          .filter((item) => item.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        const current = visible[0]?.target.id as NavId | undefined;
        if (current) setActive(current);
      },
      { rootMargin: "-15% 0px -50% 0px", threshold: [0, 0.1, 0.25, 0.5, 0.75] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const navigate = (id: NavId): void => {
    setMobileMenuOpen(false);
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    const nextHash = `#${id}`;
    if (window.location.hash !== nextHash) {
      window.history.pushState(null, "", nextHash);
    }
  };

  const followSection = (event: MouseEvent<HTMLAnchorElement>, id: NavId): void => {
    event.preventDefault();
    navigate(id);
  };

  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (!navigation.some((item) => item.id === id)) return;
    document.getElementById(id)?.scrollIntoView({ block: "start" });
  }, []);

  const copyEmail = async (): Promise<void> => {
    try {
      await navigator.clipboard.writeText(portfolio.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${portfolio.email}`;
    }
  };

  return (
    <div className="site-shell">
      <a className="skip-link" href="#home">
        Skip to main content
      </a>
      <header className="site-header">
        <div className="container site-header__inner">
          <a className="site-logo" href="#home" onClick={(event) => followSection(event, "home")} aria-label="shivamsingh.dev — return to top">
            <span className="site-logo__symbol">
              <ChevronRight size={19} strokeWidth={3} aria-hidden="true" />
              <span className="site-logo__underscore" />
            </span>
            <span>
              shivamsingh<span className="site-logo__muted">.dev</span>
            </span>
          </a>
          <nav className="header-nav" aria-label="Primary navigation">
            <a href="#about" aria-current={active === "about" ? "location" : undefined} onClick={(event) => followSection(event, "about")}>
              about
            </a>
            <a
              href="#expertise"
              aria-current={active === "expertise" ? "location" : undefined}
              onClick={(event) => followSection(event, "expertise")}
            >
              expertise
            </a>
            <a
              href="#experience"
              aria-current={active === "experience" ? "location" : undefined}
              onClick={(event) => followSection(event, "experience")}
            >
              experience
            </a>
            <a
              href="#systems"
              aria-current={active === "systems" ? "location" : undefined}
              onClick={(event) => followSection(event, "systems")}
            >
              work
            </a>
          </nav>
          <div className="site-header__actions">
            <button
              className="palette-button"
              type="button"
              onClick={() => setTheme((previous) => (previous === "green" ? "amber" : "green"))}
              aria-label={`Switch to ${theme === "green" ? "amber" : "green"} theme`}
              title="Toggle terminal theme"
            >
              {theme === "green" ? <Sun size={17} aria-hidden="true" /> : <Moon size={17} aria-hidden="true" />}
            </button>
            <a className="header-contact" href={`mailto:${portfolio.email}`}>
              <span>LET'S TALK</span>
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <button
              type="button"
              className="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen((previous) => !previous)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <nav className="mobile-nav" id="mobile-nav" aria-label="Mobile navigation">
            {navigation.map(({ id, number, label }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(event) => followSection(event, id)}
                aria-current={active === id ? "location" : undefined}
              >
                <span>{number}</span>
                {label}
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            ))}
          </nav>
        )}
      </header>

      <div className="side-index" aria-hidden="true">
        SYS.ARCHITECTURE <span /> 01—06
      </div>
      <main id="home">
        <div className="container">
          <div className="system-strip">
            <span>
              <span className="signal-pulse" /> TERMINAL PORTFOLIO / ONLINE
            </span>
            <span className="system-strip__middle">IDENTITY · LICENSING · INDUSTRIAL SAAS</span>
            <span>
              BLR, IN <span className="system-strip__muted">/</span> 12.9716° N
            </span>
          </div>

          <section className="hero" aria-labelledby="hero-heading">
            <div className="hero__copy">
              <div className="hero__eyebrow">
                <span className="hero__cursor" /> <span>HELLO, WORLD. I'M</span>
              </div>
              <h1 id="hero-heading">
                SHIVAM
                <br />
                <span>SINGH</span>
                <span className="hero__period">.</span>
              </h1>
              <div className="hero__role">
                <span className="hero__role-bar" /> STAFF SOFTWARE ENGINEER
              </div>
              <p className="hero__intro">
                I build the shared platforms behind industrial software — <strong>identity, licensing, and the browser
                products</strong> engineers use to design machines.
              </p>
              <div className="hero__tags">
                <span>/.NET</span>
                <span>/REACT</span>
                <span>/AZURE</span>
                <span>/SECURITY</span>
              </div>
              <div className="hero__actions">
                <a className="button button--primary" href="#systems" onClick={(event) => followSection(event, "systems")}>
                  Explore my work <ArrowUpRight size={17} aria-hidden="true" />
                </a>
                <a className="button button--secondary" href={portfolio.resumeUrl} target="_blank" rel="noopener noreferrer">
                  Download resume <Download size={16} aria-hidden="true" />
                </a>
              </div>
              <div className="hero__location">
                <MapPin size={14} aria-hidden="true" /> BASED IN BENGALURU, INDIA{" "}
                <span className="hero__tiny-separator">/</span> WORKING ACROSS THE STACK
              </div>
            </div>
            <div className="hero__terminal">
              <div className="hero__terminal-caption">
                <span>01 / INTERACTIVE CONSOLE</span>
                <span>● SESSION ACTIVE</span>
              </div>
              <Terminal
                onNavigate={navigate}
                theme={theme}
                onToggleTheme={() => setTheme((previous) => (previous === "green" ? "amber" : "green"))}
              />
              <div className="hero__terminal-bottom">
                <span>// NOT A MOCKUP. TYPE SOMETHING.</span>
                <span>↓ KEEP EXPLORING</span>
              </div>
            </div>
          </section>
          <div className="hero__bottom-rule">
            <a href="#about" onClick={(event) => followSection(event, "about")}>
              SCROLL TO DECODE <ArrowDown size={15} aria-hidden="true" />
            </a>
            <span>© {new Date().getFullYear()} SHIVAM SINGH</span>
          </div>
        </div>

        <section className="section about-section" id="about" aria-labelledby="about-heading">
          <div className="container section__grid">
            <div className="section__left">
              <div className="section__rail">
                <span>01</span>
                <span className="section__rail-line" /> ABOUT.EXE
              </div>
              <SectionTitle number="01" label="THE PERSON BEHIND THE CODE" id="about-heading" title="Beyond the syntax" />
            </div>
            <div className="section__right about-copy">
              <p className="about-copy__lead">
                I work on the platforms that more than one product has to share.
              </p>
              <p>{portfolio.summary}</p>
              <p>
                My work includes <strong>KISSsoft</strong> in the browser, its cloud license manager, and a shared
                authentication platform built with OpenIddict. I work closely with the Principal Architect on{" "}
                <strong>GEMS AI</strong>, contributing to agent execution, industrial integrations, and service generation.
              </p>
              <p>
                Before Gleason, I built automotive CRM features at DealerSocket and served as Scrum Master. I started
                at Allscripts, working on healthcare practice-management software and modernising selected legacy
                features with React, Angular, .NET Core, Docker, and Azure SQL.
              </p>
              <div className="about-copy__quote">
                <span>{"/* ENGINEERING PRINCIPLE */"}</span>
                <blockquote>{portfolio.philosophy}</blockquote>
              </div>
              <div className="about-copy__facts">
                <div>
                  <span>FOCUS</span>
                  <strong>Platforms, not one-offs</strong>
                </div>
                <div>
                  <span>WORKING SINCE</span>
                  <strong>2016</strong>
                </div>
                <div>
                  <span>NOW</span>
                  <strong>Leading 5 engineers</strong>
                </div>
                <div>
                  <span>LANGUAGES</span>
                  <strong>English · Hindi</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section expertise-section" id="expertise" aria-labelledby="expertise-heading">
          <div className="container">
            <div className="section__intro">
              <SectionTitle
                number="02"
                label="CAPABILITIES / STACK"
                id="expertise-heading"
                title="What I bring to the table"
                subtitle="The tools I work with and the responsibilities I’ve taken on across enterprise products."
              />
              <div className="section__intro-corner">[ CORE_MODULES: 04 ]</div>
            </div>
            <div className="expertise-grid">
              {skillGroups.map((group) => (
                <article className="expertise-card" key={group.id}>
                  <div className="expertise-card__top">
                    <span>MODULE_{group.id}</span>
                    <Code2 size={18} strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <h3>{group.title}</h3>
                  <p>{group.description}</p>
                  <ul>
                    {group.skills.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
            <div className="stack-marquee" aria-label="Core technologies">
              <span>CORE STACK</span>
              <div>
                .NET / C# <span>✳</span> REACT <span>✳</span> OPENIDDICT <span>✳</span> SQL SERVER <span>✳</span> REDIS{" "}
                <span>✳</span> AZURE <span>✳</span> DOCKER <span>✳</span> MQTT
              </div>
            </div>
          </div>
        </section>

        <section className="section experience-section" id="experience" aria-labelledby="experience-heading">
          <div className="container section__grid">
            <div className="section__left experience-section__sticky">
              <div className="section__rail">
                <span>03</span>
                <span className="section__rail-line" /> HISTORY.LOG
              </div>
              <SectionTitle
                number="03"
                label="CAREER TIMELINE"
                id="experience-heading"
                title="Built over time"
                subtitle="My roles at Gleason, DealerSocket, and Allscripts, alongside freelance Solidity development."
              />
              <p className="experience-section__hint">// SCROLL THROUGH THE LOGS ↓</p>
            </div>
            <div className="section__right career-list">
              {career.map((entry) => (
                <article className="career-item" key={`${entry.company}-${entry.title}`}>
                  <span
                    className={`career-item__node${entry.isCurrent ? " career-item__node--current" : ""}`}
                    aria-hidden="true"
                  />
                  <div className="career-item__period">
                    {entry.period} {entry.isCurrent && <span className="career-item__current">CURRENT</span>}
                  </div>
                  <h3>{entry.title}</h3>
                  <div className="career-item__company">
                    {entry.company} {entry.location && <span>↗ {entry.location}</span>}
                  </div>
                  {entry.description && <p>{entry.description}</p>}
                  <ul className="career-item__points">
                    {entry.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  {entry.tags.length > 0 && (
                    <ul className="career-item__tags">
                      {entry.tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                      ))}
                    </ul>
                  )}
                </article>
              ))}
              <div className="career-list__origin">
                <span className="career-list__origin-marker">●</span> INIT_SEQUENCE_COMPLETE
                <span>2016</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section systems-section" id="systems" aria-labelledby="systems-heading">
          <div className="container">
            <div className="section__intro">
              <SectionTitle
                number="04"
                label="SELECTED PLATFORMS"
                id="systems-heading"
                title="What I’ve worked on"
                subtitle="Four platforms from my work at Gleason, covering browser-based engineering, licensing, shared identity, and governed AI."
              />
              <div className="section__intro-corner">[ SYSTEMS: 04 ]</div>
            </div>
            <div className="systems-grid">
              {systemAreas.map((area) => (
                <article className="system-card" key={area.index}>
                  <div className="system-card__top">
                    <span>
                      {area.index} / {String(systemAreas.length).padStart(2, "0")}
                    </span>
                    <ArrowUpRight size={20} aria-hidden="true" />
                  </div>
                  <span className="system-card__label">{area.label}</span>
                  <h3>{area.heading}</h3>
                  <p>{area.description}</p>
                  <div className="system-card__stack">
                    {area.stack.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
            <div className="systems-section__note">
              <ShieldCheck size={15} aria-hidden="true" /> Architecture-level descriptions only. No private diagrams, metrics, or customer data.
            </div>
          </div>
        </section>

        <section className="section details-section" aria-label="Education and languages">
          <div className="container details-grid">
            <div>
              <span className="details-grid__label">$ cat education.txt</span>
              <h2>{portfolio.education.degree}</h2>
              <p>{portfolio.education.institution}</p>
              <span>{portfolio.education.years}</span>
            </div>
            <div>
              <span className="details-grid__label">$ cat languages.txt</span>
              <h2>{portfolio.languages.join(" · ")}</h2>
              <p>{portfolio.location}</p>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-heading">
          <div className="container">
            <div className="contact-panel">
              <div className="contact-panel__top">
                <span>
                  <span className="signal-pulse" /> CONNECTION REQUEST
                </span>
                <span>05 / CONTACT</span>
              </div>
              <div className="contact-panel__content">
                <span className="contact-panel__kicker">// YOUR NEXT CONVERSATION STARTS HERE</span>
                <h2 id="contact-heading">
                  Have a complex
                  <br />
                  problem to solve<span>?</span>
                </h2>
                <p>
                  Always interested in thoughtful conversations around architecture, distributed systems, security, and
                  applied AI.
                </p>
                <div className="contact-panel__actions">
                  <a className="button button--dark" href={`mailto:${portfolio.email}`}>
                    Start a conversation <ArrowUpRight size={19} aria-hidden="true" />
                  </a>
                  <button className="button button--dark-outline" type="button" onClick={copyEmail}>
                    {copied ? "Copied!" : "Copy email"}{" "}
                    {copied ? <Check size={17} aria-hidden="true" /> : <Copy size={17} aria-hidden="true" />}
                  </button>
                </div>
              </div>
              <address className="contact-panel__bottom">
                <a href={`mailto:${portfolio.email}`}>MAILTO::{portfolio.email}</a>
                <a href="tel:+918840330669">TEL::{portfolio.phone}</a>
                <span>STATUS::READY_TO_CONNECT</span>
              </address>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="container footer__inner">
          <div className="footer__brand">
            <span>{">_"}</span> Designed & built by Shivam Singh.
            <small>© {new Date().getFullYear()} · No unnecessary complexity.</small>
          </div>
          <nav className="footer__links" aria-label="Footer">
            {navigation
              .filter((item) => item.id !== "home")
              .map((item) => (
                <a key={item.id} href={`#${item.id}`} onClick={(event) => followSection(event, item.id)}>
                  {item.label}
                </a>
              ))}
            <a href={portfolio.github} target="_blank" rel="me noopener noreferrer">
              <Github size={14} aria-hidden="true" /> GitHub <ExternalLink size={13} aria-hidden="true" />
            </a>
            <a href={portfolio.linkedin} target="_blank" rel="me noopener noreferrer">
              LinkedIn <ExternalLink size={13} aria-hidden="true" />
            </a>
            <a href={`mailto:${portfolio.email}`}>
              <Mail size={14} aria-hidden="true" /> Email
            </a>
            <a href={portfolio.resumeUrl} target="_blank" rel="noopener noreferrer">
              Resume <ArrowRight size={14} aria-hidden="true" />
            </a>
          </nav>
          <a className="footer__top" href="#home" onClick={(event) => followSection(event, "home")}>
            BACK TO TOP ↑
          </a>
        </div>
      </footer>
      <div className="mobile-bottom-hint" aria-hidden="true">
        <Github size={12} /> BUILT, NOT GENERATED BY A SHELL
      </div>
    </div>
  );
}
