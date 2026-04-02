import React from "react";
import Link from "next/link";
import { Mail, Phone, Smartphone, Clock } from "lucide-react";
import type { SiteId } from "../types";

interface FooterProps {
  site: SiteId;
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const siteConfigs = {
  barristersclerk: {
    name: "Tyroon Win",
    subtitle: "Barristers Clerk",
    domain: "barristersclerk.co.uk",
    email: "tyroon.win@barristersclerk.co.uk",
    phone: "020 7430 2005",
    mobile: "07751 022914",
    bgClass: "bg-primary-dark",
    textClass: "text-white",
    subtextClass: "text-white/70",
    linkClass: "text-white/70 hover:text-accent",
    borderClass: "border-primary-light/30",
    practiceLinks: [
      { label: "Partnership & LLP", href: "/partnership" },
      { label: "Tax Appeals", href: "/tax" },
    ],
  },
  taxclerk: {
    name: "Tyroon Win",
    subtitle: "Tax Clerk",
    domain: "taxclerk.co.uk",
    email: "tyroon.win@taxclerk.co.uk",
    phone: "020 3150 0002",
    mobile: "07891 929988",
    bgClass: "bg-gray-900",
    textClass: "text-white",
    subtextClass: "text-gray-400",
    linkClass: "text-gray-400 hover:text-accent",
    borderClass: "border-gray-800",
    practiceLinks: [{ label: "Tax Appeals", href: "/tax" }],
  },
};

const quickLinks = [
  { label: "About", href: "/about" },
  { label: "Lawyers & Law Firms", href: "/lawyers" },
  { label: "Licensed Access", href: "/licensed-access" },
  { label: "Members of the Public", href: "/public-access" },
  { label: "Our Barristers", href: "/barristers" },
  { label: "Fees", href: "/fees" },
  { label: "Work With Us", href: "/work-with-us" },
  { label: "Contact", href: "/contact" },
];

export function Footer({ site }: FooterProps) {
  const config = siteConfigs[site];

  return (
    <footer className={`${config.bgClass} ${config.textClass}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="font-heading font-bold text-xl text-white">
                Tyroon Win
              </span>
              <span className="block text-xs text-white/60 tracking-wide">
                {config.subtitle}
              </span>
            </Link>
            <p className="text-sm text-white/70 leading-relaxed mb-4">
              Over 20 years&apos; experience connecting clients with the right
              specialist counsel—efficiently, clearly, and cost-effectively.
            </p>
            {site === "barristersclerk" && (
              <div className="flex items-center space-x-3">
                <a
                  href="https://www.linkedin.com/company/tyroon-win"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-accent transition-colors"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon className="h-5 w-5" />
                </a>
              </div>
            )}
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`text-sm ${config.linkClass} transition-colors`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Practice Areas
            </h3>
            <ul className="space-y-2">
              {config.practiceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`text-sm ${config.linkClass} transition-colors`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
                Legal
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/privacy"
                    className={`text-sm ${config.linkClass} transition-colors`}
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${config.email}`}
                  className={`flex items-start space-x-2 text-sm ${config.linkClass} transition-colors`}
                >
                  <Mail className="h-4 w-4 mt-0.5 shrink-0" />
                  <span>{config.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${config.phone.replace(/\s/g, "")}`}
                  className={`flex items-center space-x-2 text-sm ${config.linkClass} transition-colors`}
                >
                  <Phone className="h-4 w-4 shrink-0" />
                  <span>{config.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${config.mobile.replace(/\s/g, "")}`}
                  className={`flex items-center space-x-2 text-sm ${config.linkClass} transition-colors`}
                >
                  <Smartphone className="h-4 w-4 shrink-0" />
                  <span>{config.mobile}</span>
                </a>
              </li>
              <li
                className={`flex items-center space-x-2 text-sm ${config.subtextClass}`}
              >
                <Clock className="h-4 w-4 shrink-0" />
                <span>Mon–Fri: 9:00 AM – 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={`border-t ${config.borderClass}`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          {site === "barristersclerk" && (
            <p className="text-xs text-white/60 leading-relaxed mb-4 max-w-3xl">
              &ldquo;Barrister&apos;s Clerk&rdquo; provides administrative,
              marketing, and clerical support services. We are not barristers, a
              barrister&apos;s chambers or law firm and do not provide legal
              advice, and do not conduct litigation. We help you connect with a
              specialist barrister.
            </p>
          )}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-white/50">
              <p>
                &copy; {new Date().getFullYear()} Tyroon Win. All rights
                reserved.
              </p>
              <span className="hidden sm:inline text-white/30">|</span>
              <Link
                href="/privacy"
                className={`${config.linkClass} transition-colors`}
              >
                Privacy Policy
              </Link>
              {site === "barristersclerk" && (
                <>
                  <span className="hidden sm:inline text-white/30">|</span>
                  <Link
                    href="/cookie-policy"
                    className={`${config.linkClass} transition-colors`}
                  >
                    Cookie Policy
                  </Link>
                  <span className="hidden sm:inline text-white/30">|</span>
                  <Link
                    href="/fees"
                    className={`${config.linkClass} transition-colors`}
                  >
                    Fees
                  </Link>
                  <span className="hidden sm:inline text-white/30">|</span>
                  <Link
                    href="/work-with-us"
                    className={`${config.linkClass} transition-colors`}
                  >
                    Collaborate with us
                  </Link>
                </>
              )}
            </div>
            {site === "barristersclerk" ? (
              <p className="text-xs text-white/50 shrink-0">
                {config.domain} &nbsp;&bull;&nbsp; Contact us
              </p>
            ) : (
              <p className="text-xs text-white/50">{config.domain}</p>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
