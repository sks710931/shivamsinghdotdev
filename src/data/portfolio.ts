export type NavId = "home" | "about" | "expertise" | "experience" | "systems" | "contact";

export interface NavigationItem {
  readonly id: NavId;
  readonly number: string;
  readonly label: string;
}

export interface SkillGroup {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly skills: readonly string[];
}

export interface CareerEntry {
  readonly period: string;
  readonly company: string;
  readonly title: string;
  readonly location?: string;
  readonly description: string;
  readonly tags: readonly string[];
  readonly isCurrent?: boolean;
}

export interface SystemArea {
  readonly index: string;
  readonly label: string;
  readonly heading: string;
  readonly description: string;
  readonly stack: readonly string[];
}

export const portfolio = {
  name: "Shivam Singh",
  role: "Staff Software Engineer",
  location: "Bengaluru, India",
  email: "singhshivam071093@hotmail.com",
  linkedin: "https://www.linkedin.com/in/sks71093/",
  github: "https://github.com/sks710931",
  summary:
    "I design and build secure, scalable distributed software systems. My work spans application architecture, identity and security, cloud infrastructure, and enterprise applications — from implementation details to the decisions that keep complex systems maintainable.",
  philosophy:
    "Good architecture is not about more abstraction. It is about creating systems that are secure, reliable, and understandable when they grow.",
  education: {
    institution: "Annamalai University",
    degree: "Bachelor of Engineering · Computer Software Engineering",
    years: "2012 — 2016",
  },
  certification: "Microsoft Certified: Azure Fundamentals",
  languages: ["English — Full professional", "Hindi — Native"],
} as const;

export const navigation: readonly NavigationItem[] = [
  { id: "home", number: "00", label: "Home" },
  { id: "about", number: "01", label: "About" },
  { id: "expertise", number: "02", label: "Expertise" },
  { id: "experience", number: "03", label: "Experience" },
  { id: "systems", number: "04", label: "Focus areas" },
  { id: "contact", number: "05", label: "Contact" },
];

export const skillGroups: readonly SkillGroup[] = [
  {
    id: "01",
    title: "Application & system design",
    description:
      "Service boundaries, asynchronous workloads, architectural trade-offs, and long-term maintainability.",
    skills: ["Distributed systems", "Application architecture", "Event-driven systems", "Stateful workflows"],
  },
  {
    id: "02",
    title: "Identity & security",
    description: "Authentication and authorization that work across cloud and customer-hosted environments.",
    skills: ["OAuth 2.0 / OIDC", "OpenIddict", "TPM-backed identity", "Application security"],
  },
  {
    id: "03",
    title: "Product engineering",
    description: "Full-stack implementation with a focus on resilient APIs and practical user experiences.",
    skills: [".NET / C#", "React / TypeScript", "SQL Server", "REST APIs"],
  },
  {
    id: "04",
    title: "Cloud & delivery",
    description: "Infrastructure, messaging, containers, and the operational side of enterprise applications.",
    skills: ["Microsoft Azure", "Azure Service Bus", "Redis", "Docker / CI/CD"],
  },
];

export const career: readonly CareerEntry[] = [
  {
    period: "APR 2026 — PRESENT",
    company: "Gleason Corporation",
    title: "Staff Software Engineer",
    location: "Bengaluru",
    description:
      "Architecting secure distributed enterprise applications across .NET, React, and Azure. Driving designs for identity, application security, cloud and customer-hosted integrations, asynchronous services, and stateful processing.",
    tags: ["Architecture", "Security", "Azure", "Technical direction"],
    isCurrent: true,
  },
  {
    period: "AUG 2021 — MAR 2026",
    company: "Gleason Corporation",
    title: "Senior Software Engineer",
    location: "Bengaluru",
    description:
      "Delivered enterprise applications across frontend, backend, APIs, databases, and cloud services. Designed integrations, improved service boundaries, and built distributed workflows and CI/CD pipelines.",
    tags: [".NET", "React", "Azure Service Bus", "Docker"],
  },
  {
    period: "JUL 2020 — SEP 2025 · PARALLEL",
    company: "Freelance",
    title: "Solidity Developer",
    description:
      "Experimented with Solidity smart contracts, blockchain applications, integration patterns, and proof-of-concept decentralized systems alongside full-time work.",
    tags: ["Solidity", "Smart contracts", "Web3"],
  },
  {
    period: "NOV 2019 — AUG 2021",
    company: "DealerSocket",
    title: "Software Engineer",
    location: "Bangalore",
    description:
      "Built frontend and backend functionality within the Blackbird CRM engineering team for automotive dealerships.",
    tags: ["React", "Angular", "TypeScript", ".NET"],
  },
  {
    period: "SEP 2017 — NOV 2019",
    company: "Allscripts",
    title: "Associate Software Engineer",
    location: "Bengaluru",
    description:
      "Translated product requirements into technical designs and features; worked on reviews, unit tests, production releases, troubleshooting, and engineering spikes.",
    tags: ["Application development", "Testing", "Design reviews"],
  },
  {
    period: "OCT 2016 — AUG 2017",
    company: "Allscripts",
    title: "Intern",
    location: "Bengaluru",
    description: "Supported development, debugging, testing, documentation, and proof-of-concept engineering.",
    tags: ["Software engineering", "Unit testing"],
  },
];

export const systemAreas: readonly SystemArea[] = [
  {
    index: "01",
    label: "SECURITY / IDENTITY",
    heading: "Identity built on trust.",
    description:
      "Architecture for authentication, authorization, OAuth/OIDC flows, and hardware-backed device identity using TPM.",
    stack: ["TPM", "OpenIddict", "OAuth 2.0", ".NET"],
  },
  {
    index: "02",
    label: "DISTRIBUTED SYSTEMS",
    heading: "Asynchronous by design.",
    description:
      "Messaging-driven systems with distributed workers, long-running sessions, callbacks, and stateful processing.",
    stack: ["Azure Service Bus", "Workers", "Redis", "C#"],
  },
  {
    index: "03",
    label: "CLOUD / ENGINEERING",
    heading: "Across the boundary.",
    description:
      "Enterprise applications that connect cloud infrastructure with customer-hosted environments while accounting for reliability and deployment complexity.",
    stack: ["Azure", "Docker", "React", "SQL Server"],
  },
];
