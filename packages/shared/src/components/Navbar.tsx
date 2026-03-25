'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '../lib/utils';
import type { SiteId } from '../types';

interface NavbarProps {
  site: SiteId;
}

const barristersclerkLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Who I Help',
    href: '#',
    children: [
      { label: 'Lawyers & Law Firms', href: '/lawyers' },
      { label: 'Licensed Access', href: '/licensed-access' },
      { label: 'Members of the Public', href: '/public-access' },
    ],
  },
  {
    label: 'Practice Areas',
    href: '#',
    children: [
      { label: 'Partnership & LLP', href: '/partnership' },
      { label: 'Tax Appeals', href: '/tax' },
    ],
  },
  { label: 'Barristers', href: '/barristers' },
  { label: 'Fees', href: '/fees' },
  { label: 'Work With Us', href: '/work-with-us' },
  { label: 'Contact', href: '/contact' },
];

const taxclerkLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Who I Help',
    href: '#',
    children: [
      { label: 'Lawyers & Law Firms', href: '/lawyers' },
      { label: 'Licensed Access', href: '/licensed-access' },
      { label: 'Members of the Public', href: '/public-access' },
    ],
  },
  { label: 'Tax Appeals', href: '/tax' },
  { label: 'Barristers', href: '/barristers' },
  { label: 'Fees', href: '/fees' },
  { label: 'Work With Us', href: '/work-with-us' },
  { label: 'Contact', href: '/contact' },
];

export function Navbar({ site }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const links = site === 'barristersclerk' ? barristersclerkLinks : taxclerkLinks;
  const siteName = site === 'barristersclerk' ? 'Barristers Clerk' : 'Tax Clerk';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white',
        scrolled ? 'shadow-md' : 'shadow-sm'
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 shrink-0">
            <div className="flex flex-col leading-tight">
              <span className="font-heading font-bold text-xl text-primary">
                <span className="text-accent">T</span>
                yroon{' '}
                <span className="text-accent">W</span>
                in
              </span>
              <span className="text-xs text-gray-500 font-body tracking-wide">{siteName}</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {links.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors rounded-md hover:bg-gray-50">
                    <span>{link.label}</span>
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  {openDropdown === link.label && (
                    <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded-lg shadow-lg border border-gray-100 py-1 z-50">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:text-primary hover:bg-accent-light/30 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    'px-3 py-2 text-sm font-medium transition-colors rounded-md',
                    link.label === 'Contact'
                      ? 'bg-primary text-white hover:bg-primary-dark'
                      : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                  )}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-50"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-3 space-y-1">
            {links.map((link) => (
              <div key={link.label}>
                {link.children ? (
                  <div>
                    <button
                      className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary rounded-md"
                      onClick={() =>
                        setOpenDropdown(openDropdown === link.label ? null : link.label)
                      }
                    >
                      <span>{link.label}</span>
                      <ChevronDown
                        className={cn(
                          'h-4 w-4 transition-transform',
                          openDropdown === link.label ? 'rotate-180' : ''
                        )}
                      />
                    </button>
                    {openDropdown === link.label && (
                      <div className="ml-4 mt-1 space-y-1">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-3 py-2 text-sm text-gray-600 hover:text-primary rounded-md"
                            onClick={() => setIsOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className={cn(
                      'block px-3 py-2 text-sm font-medium rounded-md transition-colors',
                      link.label === 'Contact'
                        ? 'bg-primary text-white'
                        : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
