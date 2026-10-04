import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import App from "./App";

export { jsonLd, pageDescription, pageTitle, siteUrl } from "./seo";

export function render(): string {
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}
