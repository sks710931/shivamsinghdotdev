import type { Metadata } from "next";
import { connection } from "next/server";

export const metadata: Metadata = {
  title: "Page not found — Shivam Singh",
  robots: { index: false, follow: false },
};

export default async function NotFound() {
  await connection();
  return (
    <main className="not-found">
      <p className="not-found__code">404 / NOT_FOUND</p>
      <h1>This page is not on the portfolio.</h1>
      <p>The address does not match a published page. The portfolio, resume, and contact details are on the home page.</p>
      <p>
        <a href="https://www.shivamsingh.dev/">Back to shivamsingh.dev</a>
      </p>
    </main>
  );
}
