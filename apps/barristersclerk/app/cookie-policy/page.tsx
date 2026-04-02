import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, Section, Container } from "@tyroon/shared";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Information about how this website uses cookies to improve your experience and understand visitor interactions.",
};

const sections = [
  {
    title: "1. Introduction",
    content:
      "This website uses cookies to improve your experience and to understand how visitors interact with our site. By continuing to use the website, you consent to our use of cookies in accordance with this policy.",
  },
  {
    title: "2. What Are Cookies?",
    content:
      "Cookies are small text files stored on your device when you visit a website. They help websites remember information about your visit, such as preferences or usage patterns.",
  },
  {
    title: "3. Types of Cookies We Use",
    content: null,
    items: [
      "Essential Cookies: Required for the website to function correctly — for example, enabling secure login and form submission.",
      "Analytics Cookies: Help us understand how visitors use the website, such as tracking page views and visitor interactions.",
      "Marketing Cookies: Used to deliver relevant content or advertising based on your interests, including platforms like Google Ads or Facebook.",
    ],
  },
  {
    title: "4. Third-Party Cookies",
    content:
      "We may allow third-party services to place cookies on your device for analytics or marketing purposes. Each provider manages its own cookies and privacy policies. We recommend reviewing their policies to understand their data handling.",
  },
  {
    title: "5. Managing Cookies",
    content:
      "You can control cookies via your browser settings: accept or block all cookies, delete existing cookies, and set preferences for specific types of cookies. Please note that blocking some cookies may affect website functionality.",
  },
  {
    title: "6. Updates to This Policy",
    content:
      "We may update this Cookie Policy periodically. The current version will always be available on this website.",
  },
  {
    title: "7. Contact",
    content:
      "For questions about our use of cookies, please contact us at tyroon.win@barristersclerk.co.uk.",
  },
];

export default function CookiePolicyPage() {
  return (
    <>
      <PageHero
        darkHeading
        title="Cookie Policy"
        subtitle="Information"
        description="How we use cookies on this website."
      />

      <Section background="white">
        <Container>
          <div className="max-w-3xl mx-auto space-y-8">
            {sections.map((section, i) => (
              <div key={i}>
                <h2 className="font-heading text-xl font-bold text-gray-900 mb-3">
                  {section.title}
                </h2>
                {section.content && (
                  <p className="text-gray-700 leading-relaxed">
                    {section.content}
                  </p>
                )}
                {section.items && (
                  <ul className="mt-2 space-y-2">
                    {section.items.map((item, j) => (
                      <li key={j} className="flex items-start space-x-3">
                        <span className="text-accent font-bold mt-0.5">—</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            {/* Related links */}
            <div className="border-t border-gray-200 pt-6">
              <h3 className="font-heading font-semibold text-gray-900 mb-3">
                Related Documents
              </h3>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/privacy"
                  className="text-primary hover:underline font-medium"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="text-primary hover:underline font-medium"
                >
                  Terms &amp; Conditions
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
