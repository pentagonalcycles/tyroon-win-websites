import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://barristersclerk.co.uk";
  const pages = [
    "",
    "/about",
    "/tyroon-win",
    "/how-to-instruct-us",
    "/clerks",
    "/lawyers",
    "/licensed-access",
    "/public-access",
    "/partnership",
    "/mediation",
    "/tax",
    "/hong-kong-tax-trusts",
    "/barristers",
    "/barristers/simon-jelf",
    "/barristers/stefano-mariani",
    "/fees",
    "/contact",
    "/work-with-us",
    "/privacy",
    "/cookie-policy",
    "/terms",
    "/complaints",
  ];

  return pages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
