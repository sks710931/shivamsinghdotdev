import type { MetadataRoute } from "next";
import { pageDescription, pageTitle } from "../seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: pageTitle,
    short_name: "Shivam Singh",
    description: pageDescription,
    start_url: "/",
    scope: "/",
    display: "browser",
    background_color: "#0b1110",
    theme_color: "#0b1110",
    lang: "en",
    icons: [{ src: "/favicon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" }],
  };
}
