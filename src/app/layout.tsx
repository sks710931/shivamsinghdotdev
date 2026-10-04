import type { Metadata, Viewport } from "next";
import { pageDescription, pageTitle, siteUrl } from "../seo";
import "./globals.css";

const socialAlt = "Shivam Singh, Staff Software Engineer, with shivamsingh.dev branding and connected systems.";
const squareAlt = "Square social card for Shivam Singh, Staff Software Engineer, with shivamsingh.dev branding.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: pageTitle,
  description: pageDescription,
  applicationName: "Shivam Singh",
  authors: [{ name: "Shivam Kumar Singh", url: siteUrl }],
  creator: "Shivam Kumar Singh",
  referrer: "strict-origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  alternates: { canonical: "/" },
  appleWebApp: { title: "Shivam Singh" },
  openGraph: {
    type: "website",
    siteName: "shivamsingh.dev",
    locale: "en_IN",
    url: siteUrl,
    title: pageTitle,
    description: pageDescription,
    images: [
      {
        url: "/social-preview.png",
        secureUrl: `${siteUrl}social-preview.png`,
        type: "image/png",
        width: 1734,
        height: 907,
        alt: socialAlt,
      },
      {
        url: "/social-preview-square.png",
        secureUrl: `${siteUrl}social-preview-square.png`,
        type: "image/png",
        width: 1254,
        height: 1254,
        alt: squareAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [{ url: "/social-preview.png", alt: socialAlt }],
  },
  icons: { icon: [{ url: "/favicon.svg", type: "image/svg+xml" }] },
};

export const viewport: Viewport = {
  themeColor: "#0b1110",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { readonly children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="green">
      <head>
        <link rel="preload" href="/fonts/dm-sans-latin.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/space-grotesk-latin.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/space-mono-700-latin.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="me" href="https://www.linkedin.com/in/sks71093/" />
        <link rel="me" href="https://github.com/sks710931" />
      </head>
      <body>{children}</body>
    </html>
  );
}
