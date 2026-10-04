import { portfolio } from "./data/portfolio";

export const siteUrl = "https://www.shivamsingh.dev/";

export const pageTitle = "Shivam Singh — Staff Software Engineer";

export const pageDescription =
  "Staff Software Engineer in Bengaluru building industrial SaaS, identity, licensing, and application security with .NET, React, and Azure.";

const personId = `${siteUrl}#person`;
const websiteId = `${siteUrl}#website`;
const profileId = `${siteUrl}#profilepage`;
const socialImage = `${siteUrl}social-preview.png`;

export const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: siteUrl,
      name: portfolio.shortName,
      alternateName: "shivamsingh.dev",
      description: pageDescription,
      inLanguage: "en",
      publisher: { "@id": personId },
    },
    {
      "@type": "ProfilePage",
      "@id": profileId,
      url: siteUrl,
      name: pageTitle,
      description: pageDescription,
      inLanguage: "en",
      isPartOf: { "@id": websiteId },
      about: { "@id": personId },
      mainEntity: { "@id": personId },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: socialImage,
        width: 1734,
        height: 907,
      },
    },
    {
      "@type": "Person",
      "@id": personId,
      name: portfolio.name,
      alternateName: portfolio.shortName,
      jobTitle: portfolio.role,
      description: portfolio.summary,
      url: siteUrl,
      image: socialImage,
      email: `mailto:${portfolio.email}`,
      telephone: "+918840330669",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bengaluru",
        addressCountry: "IN",
      },
      worksFor: {
        "@type": "Organization",
        name: "Gleason Corporation",
        url: "https://www.gleason.com/",
      },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Annamalai University",
      },
      knowsLanguage: [...portfolio.languages],
      knowsAbout: [
        "Application architecture",
        ".NET",
        "C#",
        "ASP.NET Core",
        "React",
        "TypeScript",
        "Microsoft Azure",
        "OpenIddict",
        "OAuth 2.0",
        "OpenID Connect",
        "Software licensing",
        "Industrial SaaS",
        "Application security",
      ],
      sameAs: [portfolio.linkedin, portfolio.github],
    },
  ],
} as const;
