"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, Mail, ChevronDown } from "lucide-react";
import { MegaMenu } from "./MegaMenu";

const clerksDropdown = [
  { label: "All Clerks & Practice Managers", href: "/clerks" },
  { label: "Tyroon Win", href: "/about" },
];

const barristersDropdown = [
  { label: "All Barristers", href: "/barristers" },
  { label: "Simon Jelf", href: "/barristers/simon-jelf" },
  { label: "Stefano Mariani", href: "/barristers/stefano-mariani" },
];

const practiceAreasDropdown = [
  { label: "Partnership & LLP", href: "/partnership" },
  { label: "Mediation", href: "/mediation" },
  { label: "Tax", href: "/tax" },
  { label: "Hong Kong Tax & Trusts", href: "/hong-kong-tax-trusts" },
];

export function TopBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = "";
  };

  return (
    <>
      <div className="dc-topbar">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2 shrink-0">
                <span className="font-heading font-bold text-xl text-white">
                  The Barrister&apos;s Clerk
                </span>
              </Link>
            </div>

            <div className="hidden lg:flex items-center space-x-6">
              <a
                href="tel:+442074302005"
                className="text-sm text-white hover:text-accent transition-colors"
              >
                +44 (0)20 7430 2005
              </a>
              <Link
                href="/"
                className="text-sm text-white hover:text-accent transition-colors"
              >
                Home
              </Link>
              {/* Practice Areas dropdown */}
              <div className="relative group">
                <button className="flex items-center space-x-1 text-sm text-white hover:text-accent transition-colors">
                  <span>Practice Areas</span>
                  <ChevronDown className="h-3.5 w-3.5 group-hover:rotate-180 transition-transform duration-200" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-56 bg-primary-dark border border-primary-light/30 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  {practiceAreasDropdown.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2.5 text-sm text-white/80 hover:text-accent hover:bg-primary-light/20 first:rounded-t-lg last:rounded-b-lg transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
              {/* Barristers dropdown */}
              <div className="relative group">
                <button className="flex items-center space-x-1 text-sm text-white hover:text-accent transition-colors">
                  <span>Barristers</span>
                  <ChevronDown className="h-3.5 w-3.5 group-hover:rotate-180 transition-transform duration-200" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 bg-primary-dark border border-primary-light/30 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  {barristersDropdown.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2.5 text-sm text-white/80 hover:text-accent hover:bg-primary-light/20 first:rounded-t-lg last:rounded-b-lg transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
              {/* Clerks & Practice Managers dropdown */}
              <div className="relative group">
                <button className="flex items-center space-x-1 text-sm text-white hover:text-accent transition-colors">
                  <span>Clerks &amp; Practice Managers</span>
                  <ChevronDown className="h-3.5 w-3.5 group-hover:rotate-180 transition-transform duration-200" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-56 bg-primary-dark border border-primary-light/30 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  {clerksDropdown.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2.5 text-sm text-white/80 hover:text-accent hover:bg-primary-light/20 first:rounded-t-lg last:rounded-b-lg transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
              <a
                href="mailto:tyroon.win@thebarristersclerk.com"
                className="text-white hover:text-accent transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <button
                className="lg:hidden p-2 text-white hover:text-accent transition-colors"
                onClick={toggleMenu}
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
              <button
                className="hidden lg:flex flex-col items-center justify-center gap-1 px-3 py-2 bg-primary-light/50 rounded-md text-white hover:bg-accent hover:text-primary transition-colors"
                onClick={toggleMenu}
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
              >
                <span className="text-xs font-medium leading-none">Menu</span>
                <div className="w-5 flex flex-col space-y-1.5">
                  <span
                    className={`block h-0.5 bg-current transform transition-transform ${
                      isMenuOpen ? "rotate-45 translate-y-2.5" : ""
                    }`}
                  />
                  <span
                    className={`block h-0.5 bg-current transition-opacity ${
                      isMenuOpen ? "opacity-0" : ""
                    }`}
                  />
                  <span
                    className={`block h-0.5 bg-current transform transition-transform ${
                      isMenuOpen ? "-rotate-45 -translate-y-2.5" : ""
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`dc-overlay ${isMenuOpen ? "active" : ""}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      <MegaMenu isOpen={isMenuOpen} onClose={closeMenu} />
    </>
  );
}
