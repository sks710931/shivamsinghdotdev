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
    "Staff Software Engineer and hands-on application architect with nearly ten years building enterprise products. At Gleason I own technical direction across industrial SaaS, centralised identity, software licensing, and governed AI — still writing the code, and leading five engineers.",
  philosophy:
    "Shared platforms beat one-off implementations. Identity, licensing, and API boundaries should be reusable, and the engineer who designed them should still be able to debug them.",
  education: {
    institution: "Annamalai University, Tamil Nadu",
    degree: "B.E. Computer Science and Engineering",
    years: "2012 — 2016 · CGPA 7.7/10",
  },
  certification: "Microsoft Certified: Azure Fundamentals",
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
    title: "Application architecture",
    description: "Platform boundaries, API contracts, and turning domain workflows into software other teams can ship.",
    skills: ["Platform engineering", "Industrial SaaS", "API contracts", "Legacy modernisation"],
  },
  {
    id: "02",
    title: "Identity & security",
    description: "A shared sign-on authority instead of a login built into every product.",
    skills: ["OIDC + PKCE", "OAuth 2.0", "OpenIddict", "MFA / passkeys"],
  },
  {
    id: "03",
    title: "Product engineering",
    description: "Hands-on delivery across the browser, the API, and the database.",
    skills: ["C# / .NET", "React / Redux", "EF Core", "SQL Server"],
  },
  {
    id: "04",
    title: "Cloud, data & AI",
    description: "Runtime state, containers, and agent workflows that stay under human control.",
    skills: ["Azure / Docker", "Redis", "Governed agents", "MQTT / SAP"],
  },
];

export const career: readonly CareerEntry[] = [
  {
    period: "APR 2026 — PRESENT",
    company: "Gleason Corporation",
    title: "Staff Software Engineer",
    location: "Bengaluru · Remote",
    description:
      "Promoted after taking cross-product ownership of engineering SaaS, licensing, identity, and AI. I lead five engineers and stay in the design, the code, and the production issues.",
    highlights: [
      "Set boundaries across React frontends, .NET services, SQL Server, Redis, identity, and containerised deployment.",
      "Turn ambiguous engineering-domain requirements into API contracts, epics, and work a team can deliver independently.",
      "Replace product-specific auth and licensing with shared services used by more than one Gleason application.",
    ],
    tags: ["Staff", "5 engineers", "Identity", "Licensing", "AI"],
    isCurrent: true,
  },
  {
    period: "AUG 2021 — MAR 2026",
    company: "Gleason Corporation",
    title: "Senior Software Engineer",
    location: "Bengaluru · Remote",
    description:
      "The years the platforms were built. Browser delivery for KISSsoft, a cloud license manager, and the authentication service the suite now shares.",
    highlights: [
      "Modernised desktop engineering workflows with React, Redux, ASP.NET Core, Entity Framework Core, and SQL Server.",
      "Split licence runtime state into Redis and durable entitlements into SQL Server.",
      "Shipped OpenIddict-based SSO: authorisation code with PKCE, client credentials, MFA, and passkeys.",
    ],
    tags: ["KISSsoft", "OpenIddict", "Redis", "Docker"],
  },
  {
    period: "NOV 2019 — AUG 2021",
    company: "DealerSocket, a Solera company",
    title: "Software Engineer I",
    location: "Bengaluru",
    description:
      "Automotive CRM. New React features living next to ASP.NET Web Forms and VB.NET, plus the Scrum Master seat for the team.",
    highlights: [
      "Shipped CRM workflows across React, TypeScript, Angular, ASP.NET Web API, and SQL Server stored procedures.",
      "Cleared defects that crossed the UI, the API, and local environments blocking the team.",
      "Star of the Month more than once, for React adoption and CRM delivery.",
    ],
    tags: ["React", "Angular", "Scrum Master", "SQL Server"],
  },
  {
    period: "OCT 2016 — NOV 2019",
    company: "Allscripts Healthcare Solutions",
    title: "Associate Software Engineer",
    location: "Bengaluru",
    description:
      "Healthcare practice management, then the first moves of that estate toward the browser and Azure.",
    highlights: [
      "Built admin, financial, and reporting workflows in C#, VB.NET, T-SQL, SQL Server, and Crystal Reports.",
      "Modernised selected legacy paths with React, Angular, .NET Core, Docker, and Azure SQL.",
      "Trained engineers on Azure, Web APIs, Entity Framework, and Angular. Spot Award, CLEAR Award, Innovation Champions.",
    ],
    tags: ["Healthcare", ".NET", "Azure SQL", "Mentoring"],
  },
];

export const systemAreas: readonly SystemArea[] = [
  {
    index: "01",
    label: "INDUSTRIAL SAAS",
    heading: "KISSsoft, in the browser.",
    description:
      "KISSsoft designs, optimises, and checks machine elements. I helped take that desktop workflow to the cloud: React and Redux in the browser, ASP.NET Core and Entity Framework behind a REST boundary, and the shared Gleason identity platform instead of a login that belonged only to this product.",
    stack: ["React", "Redux", "ASP.NET Core", "EF Core", "SQL Server"],
  },
  {
    index: "02",
    label: "LICENSING",
    heading: "Runtime state, kept separate.",
    description:
      "A cloud license manager for floating and standalone KISSsoft licences. Redis holds the fast-changing checkout state. SQL Server holds customers, entitlements, and configuration. Desktop and cloud clients acquire, validate, allocate, and release through the same service, with Blazor for administration.",
    stack: ["C#", "Blazor", "Redis", "SQL Server", "Docker"],
  },
  {
    index: "03",
    label: "IDENTITY / SSO",
    heading: "One authority for the suite.",
    description:
      "AuthServer replaced separate identity implementations. Browsers use OpenID Connect with PKCE. Services use OAuth 2.0 client credentials. Users, apps, roles, and claims live in one place, with email OTP, TOTP, trusted devices, Redis rate limits, WebAuthn passkeys, and secrets in Azure Key Vault.",
    stack: ["OpenIddict", ".NET 9", "OIDC", "FIDO2", "Key Vault"],
  },
  {
    index: "04",
    label: "GOVERNED AI",
    heading: "Agents that wait for a person.",
    description:
      "GEMS is a governed agent platform for industrial operations, co-designed with the Principal Architect. Human approval gates, resource limits, immutable audit, and recovery for long-running work. SAP OData and MQTT connect the enterprise core to the shop floor. Generated services stay testable.",
    stack: [".NET 8", "MQTT", "PostgreSQL", "pgvector", "SAP OData"],
  },
];
