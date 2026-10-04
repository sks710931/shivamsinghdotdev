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
  readonly description?: string;
  readonly highlights: readonly string[];
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
  name: "Shivam Kumar Singh",
  shortName: "Shivam Singh",
  role: "Staff Software Engineer",
  location: "Bengaluru, India · Remote",
  email: "singhshivam071093@gmail.com",
  phone: "+91 8840330669",
  linkedin: "https://www.linkedin.com/in/sks71093/",
  github: "https://github.com/sks710931",
  summary:
    "I’m a Staff Software Engineer with nearly ten years of experience building and modernising enterprise products. At Gleason, I lead five engineers and help shape our industrial SaaS, identity, licensing, and governed AI platforms. I’m still hands-on with design, implementation, code reviews, and troubleshooting.",
  philosophy:
    "I focus on clear API boundaries, shared identity and licensing services, and software the team can maintain. I work through design trade-offs with engineers and stay involved when production issues need attention.",
  education: {
    institution: "Annamalai University, Tamil Nadu",
    degree: "Bachelor of Engineering in Computer Science and Engineering",
    years: "2012 — 2016 · CGPA 7.7/10",
  },
  resumeUrl: "/resume.pdf",
  languages: ["English", "Hindi"],
} as const;

export const navigation: readonly NavigationItem[] = [
  { id: "home", number: "00", label: "Home" },
  { id: "about", number: "01", label: "About" },
  { id: "expertise", number: "02", label: "Expertise" },
  { id: "experience", number: "03", label: "Experience" },
  { id: "systems", number: "04", label: "Selected work" },
  { id: "contact", number: "05", label: "Contact" },
];

export const skillGroups: readonly SkillGroup[] = [
  {
    id: "01",
    title: "Architecture & technical leadership",
    description: "I turn product requirements into API contracts and delivery plans, and help engineers work through design decisions and production problems.",
    skills: ["Application architecture", "Platform engineering", "REST APIs", "Enterprise integration", "Code reviews", "Mentoring", "Agile delivery", "Legacy modernisation"],
  },
  {
    id: "02",
    title: "Identity & application security",
    description: "Shared sign-on and access control for enterprise applications, covering browser clients, backend services, and protected APIs.",
    skills: ["OpenIddict", "ASP.NET Core Identity", "OAuth 2.0", "OpenID Connect / PKCE", "JWT", "SSO", "Roles & claims", "MFA / TOTP", "WebAuthn / FIDO2", "Passkeys"],
  },
  {
    id: "03",
    title: "Full-stack product engineering",
    description: "I build across the browser, API, and database, with C#/.NET and React as my main tools.",
    skills: ["C# / .NET 8 / .NET 9", "ASP.NET Core / Web API", "React / Redux", "TypeScript / JavaScript", "Angular", "HTML / CSS", "Blazor", "Entity Framework Core", "SQL Server / T-SQL", "VB.NET / VB6", "ASP.NET Web Forms", "Crystal Reports"],
  },
  {
    id: "04",
    title: "Cloud, data & applied AI",
    description: "Cloud delivery, distributed caching, industrial integrations, and agent workflows with governance and human approval built in.",
    skills: ["Microsoft Azure", "Azure SQL / Key Vault", "Azure DevOps / Container Registry", "Application Insights", "Docker", "Redis", "PostgreSQL / pgvector", "Microsoft.Extensions.AI", "MQTT / Mosquitto", "SAP OData", "xUnit / unit & integration testing", "NuGet"],
  },
];

// Job experience source: the supplied Profile (1).pdf LinkedIn export.
export const career: readonly CareerEntry[] = [
  {
    period: "APRIL 2026 — PRESENT",
    company: "Gleason Corporation",
    title: "Staff Software Engineer",
    location: "Bengaluru",
    highlights: [
      "Architect and build secure, distributed enterprise applications across .NET, React and Azure, spanning cloud and customer-hosted environments.",
      "Drive system design across identity, authentication, authorization and application security, including OAuth 2.0/OIDC, OpenIddict and hardware-backed device identity using TPM.",
      "Design scalable asynchronous architectures using Azure Service Bus, distributed workers and stateful processing workflows, including systems that require long-running sessions and callbacks.",
      "Work across application and infrastructure boundaries to solve scalability, reliability and deployment challenges in complex engineering software platforms.",
      "Provide technical direction through architecture reviews, design discussions, code reviews and implementation guidance across multiple components and services.",
      "Explore and integrate AI-assisted engineering and LLM-based capabilities where they provide practical value while maintaining deterministic validation and sound engineering practices.",
    ],
    tags: [".NET / C#", "React", "TypeScript", "Azure", "Azure Service Bus", "SQL Server", "Redis", "Docker", "OAuth/OIDC", "OpenIddict", "TPM", "CI/CD"],
    isCurrent: true,
  },
  {
    period: "AUGUST 2021 — MARCH 2026",
    company: "Gleason Corporation",
    title: "Senior Software Engineer",
    location: "Bengaluru",
    highlights: [
      "Designed and delivered enterprise applications using .NET/C#, React/TypeScript and Azure, working across frontend, backend, APIs, databases and cloud services.",
      "Built and evolved distributed application workflows using Azure Service Bus, SQL Server, Redis and containerized services.",
      "Designed APIs, service integrations and authentication/authorization flows for applications spanning cloud and customer-hosted environments.",
      "Improved application architecture by separating responsibilities, defining service boundaries and reducing coupling between components.",
      "Worked on production systems involving asynchronous processing, long-running workflows and integration with engineering applications.",
      "Contributed to technical design, code reviews, troubleshooting and production issue resolution across the application stack.",
      "Built deployment and CI/CD workflows using Azure DevOps, Docker and Azure Container Registry.",
    ],
    tags: [".NET / C#", "ASP.NET Core", "React", "TypeScript", "Azure", "SQL Server", "Redis", "Azure Service Bus", "Docker", "REST APIs", "OAuth/OIDC"],
  },
  {
    period: "JULY 2020 — SEPTEMBER 2025",
    company: "Freelance",
    title: "Freelance Solidity Developer",
    highlights: [
      "Develop and experiment with Solidity-based smart contracts and blockchain applications.",
      "Work on contract logic, integration patterns and blockchain-focused proof-of-concepts.",
      "Explore practical use cases around decentralized applications and token-based systems.",
    ],
    tags: ["Solidity", "Smart Contracts", "Web3", "Blockchain"],
  },
  {
    period: "NOVEMBER 2019 — AUGUST 2021",
    company: "DealerSocket",
    title: "Software Engineer",
    location: "Bangalore",
    highlights: [
      "Worked as a Full Stack Developer within the CRM Engineering team, contributing to the development of DealerSocket Blackbird CRM for automotive dealerships.",
      "Developed application functionality across frontend and backend technologies using React, Angular, TypeScript, .NET and .NET Core.",
      "Collaborated within the product engineering team on ongoing CRM development and feature delivery.",
    ],
    tags: ["React", "Angular", "TypeScript", ".NET", ".NET Core"],
  },
  {
    period: "SEPTEMBER 2017 — NOVEMBER 2019",
    company: "Allscripts",
    title: "Associate Software Engineer",
    location: "Bengaluru",
    highlights: [
      "Analyzed user stories and functional requirements, estimated development scope, and translated requirements into technical solutions.",
      "Prepared technical design specifications and implemented application features with accompanying unit testing.",
      "Participated in code reviews, design reviews and technical discussions with the development team.",
      "Collaborated with business analysts and product owners throughout development, including sprint planning, refinement and product demonstrations.",
      "Supported production releases, investigated defects and contributed to POCs and technical spike work for new solutions.",
    ],
    tags: [],
  },
  {
    period: "OCTOBER 2016 — AUGUST 2017",
    company: "Allscripts",
    title: "Intern",
    location: "Bengaluru",
    highlights: [
      "Supported the development team with requirement analysis, coding, debugging and unit testing.",
      "Assisted in preparing technical documentation and participated in code/design discussions.",
      "Contributed to sprint activities, product demonstrations and investigation of development issues.",
      "Worked on POCs and spike tasks to explore technical solutions.",
    ],
    tags: [],
  },
];

export const systemAreas: readonly SystemArea[] = [
  {
    index: "01",
    label: "INDUSTRIAL SAAS",
    heading: "KISSsoft SaaS Platform",
    description:
      "I help bring KISSsoft’s engineering calculations from the desktop into a browser-based product. I work with domain specialists to translate complex calculation workflows into browser features, connecting them to .NET services through clear APIs. My work spans the React frontend, backend integration, and shared sign-in.",
    stack: ["React", "Redux", "ASP.NET Core", "EF Core", "SQL Server"],
  },
  {
    index: "02",
    label: "LICENSING",
    heading: "KISSsoft License Manager",
    description:
      "I built the service that manages how KISSsoft licences are used across desktop and cloud applications. The design keeps live licence activity in Redis and customer entitlements in SQL Server, with administration in Blazor. My work covered the licence lifecycle, access control, and deployment support.",
    stack: ["C#", "ASP.NET Core", "Blazor", "Redis", "SQL Server"],
  },
  {
    index: "03",
    label: "APPLICATION SECURITY",
    heading: "Application security",
    description:
      "I built shared sign-in and access control for Gleason applications, covering users, services, multi-factor authentication, and passkeys. I’m also building a harness that establishes an identity for each client installation using a TPM-backed, non-exportable private key. This work brings together hardware attestation, TPM manufacturer endorsement-key (EK) CA validation, DPoP, and mutual TLS (mTLS) to tie authentication to proof of key possession.",
    stack: ["OpenIddict", ".NET 9", "OpenID Connect", "WebAuthn / FIDO2", "TPM", "Hardware attestation", "EK CA validation", "DPoP", "mTLS"],
  },
  {
    index: "04",
    label: "GOVERNED AI",
    heading: "GEMS AI",
    description:
      "I work closely with the Principal Architect on GEMS AI, a platform for industrial operations. My focus was making agent workflows manageable: giving people approval points, recording what happened, and helping long-running tasks recover. I also contributed to connecting business and shop-floor data and turning service definitions into deployable code.",
    stack: [".NET 8", "Microsoft.Extensions.AI", "MQTT", "PostgreSQL", "SAP OData"],
  },
];
