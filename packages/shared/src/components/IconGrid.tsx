"use client";

import React from "react";
import Link from "next/link";

interface PracticeArea {
  title: string;
  href: string;
  icon: React.ReactNode;
}

function ScaleIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M32 8L20 16V24L32 32L44 24V16L32 8Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 24L8 32L20 40V24Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M44 24L56 32L44 40V24Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M32 32V56"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M24 56H40"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CalculatorIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="8"
        y="4"
        width="48"
        height="56"
        rx="4"
        stroke="currentColor"
        strokeWidth="2"
      />
      <rect
        x="14"
        y="10"
        width="36"
        height="14"
        stroke="currentColor"
        strokeWidth="2"
      />
      <line
        x1="14"
        y1="32"
        x2="50"
        y2="32"
        stroke="currentColor"
        strokeWidth="2"
      />
      <line
        x1="14"
        y1="40"
        x2="50"
        y2="40"
        stroke="currentColor"
        strokeWidth="2"
      />
      <line
        x1="14"
        y1="48"
        x2="50"
        y2="48"
        stroke="currentColor"
        strokeWidth="2"
      />
      <line
        x1="32"
        y1="24"
        x2="32"
        y2="56"
        stroke="currentColor"
        strokeWidth="2"
      />
      <rect x="18" y="34" width="8" height="4" fill="currentColor" />
      <rect x="18" y="42" width="8" height="4" fill="currentColor" />
      <rect x="18" y="50" width="8" height="4" fill="currentColor" />
      <rect x="36" y="34" width="8" height="4" fill="currentColor" />
      <rect x="36" y="42" width="8" height="4" fill="currentColor" />
      <rect x="36" y="50" width="8" height="4" fill="currentColor" />
    </svg>
  );
}

const practiceAreas: PracticeArea[] = [
  {
    title: "Partnership & LLP",
    href: "/partnership",
    icon: <ScaleIcon className="w-12 h-12 md:w-16 md:h-16" />,
  },
  {
    title: "Tax Appeals",
    href: "/tax",
    icon: <CalculatorIcon className="w-12 h-12 md:w-16 md:h-16" />,
  },
];

export function IconGrid() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:gap-12 max-w-3xl mx-auto">
          {practiceAreas.map((area) => (
            <Link
              key={area.href}
              href={area.href}
              className="group flex flex-col items-center text-center p-6 md:p-8 hover:bg-white rounded-lg transition-all duration-300"
            >
              <div className="mb-4 text-primary group-hover:text-accent transition-colors duration-300 transform group-hover:scale-110">
                {area.icon}
              </div>
              <h3 className="font-heading text-lg md:text-xl font-semibold text-primary group-hover:text-primary-dark transition-colors">
                {area.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
