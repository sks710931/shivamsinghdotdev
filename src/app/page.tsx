import { connection } from "next/server";
import { headers } from "next/headers";
import App from "../App";
import { jsonLd } from "../seo";

export default async function HomePage() {
  await connection();
  const nonce = (await headers()).get("x-nonce") ?? undefined;
  const structuredData = JSON.stringify(jsonLd).replace(/</g, "\\u003c");

  return (
    <>
      <script type="application/ld+json" nonce={nonce} dangerouslySetInnerHTML={{ __html: structuredData }} />
      <App />
    </>
  );
}
