import { readFileSync, writeFileSync, rmSync } from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const serverEntry = pathToFileURL(path.join(root, "dist-ssr", "entry-server.js")).href;
const { render, jsonLd, pageDescription, pageTitle, siteUrl } = await import(serverEntry);

const appHtml = render();
const required = [
  "SHIVAM",
  "STAFF SOFTWARE ENGINEER",
  "KISSsoft",
  "singhshivam071093@gmail.com",
  'href="#about"',
  'href="#expertise"',
  'href="#experience"',
  'href="#systems"',
  'href="#contact"',
  "https://www.linkedin.com/in/sks71093/",
  "https://github.com/sks710931",
];

for (const snippet of required) {
  if (!appHtml.includes(snippet)) {
    throw new Error(`Prerendered HTML is missing ${snippet}`);
  }
}

const indexPath = path.join(root, "dist", "index.html");
const html = readFileSync(indexPath, "utf8");

if (!html.includes(`<title>${pageTitle}</title>`)) {
  throw new Error("index.html title does not match src/seo.ts");
}
if (!html.includes(`content="${pageDescription}"`)) {
  throw new Error("index.html description does not match src/seo.ts");
}

const json = JSON.stringify(jsonLd).replace(/</g, "\\u003c");
const withJsonLd = html.replace(
  "<!-- seo-jsonld -->",
  `<script type="application/ld+json">${json}</script>`,
);
const withApp = withJsonLd.replace(
  /<div id="root">\s*<\/div>/,
  `<div id="root">${appHtml}</div>`,
);

if (withApp === html || !withApp.includes('type="application/ld+json"')) {
  throw new Error("Failed to inject prerendered content into dist/index.html");
}

writeFileSync(indexPath, withApp);

const lastmod = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${siteUrl}</loc>
    <lastmod>${lastmod}</lastmod>
  </url>
  <url>
    <loc>${siteUrl}resume.pdf</loc>
    <lastmod>${lastmod}</lastmod>
  </url>
</urlset>
`;

writeFileSync(path.join(root, "dist", "sitemap.xml"), sitemap);
rmSync(path.join(root, "dist-ssr"), { recursive: true, force: true });
