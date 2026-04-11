"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface NewsArticle {
  id: string;
  title: string;
  category: string;
  date: string;
  image: string;
  excerpt: string;
  href: string;
}

const placeholderArticles: NewsArticle[] = [
  {
    id: "1",
    title:
      "Our Barristers Recognised in Chambers & Partners and the Legal 500 Rankings",
    category: "Our Barristers",
    date: "March 2026",
    image: "/images/news-1.jpg",
    excerpt:
      "Our barristers have been recognised for excellence in Tax and Partnership law.",
    href: "/barristers",
  },
  {
    id: "2",
    title: "New Partnership Dispute Resolution Service",
    category: "Services",
    date: "February 2026",
    image: "/images/news-2.jpg",
    excerpt: "Expert representation in complex partnership and LLP disputes.",
    href: "/news/partnership-disputes",
  },
  {
    id: "3",
    title: "Tax Appeals: Key Updates for 2026",
    category: "Tax",
    date: "January 2026",
    image: "/images/news-3.jpg",
    excerpt:
      "Important changes to First-tier Tribunal procedures and HMRC guidance.",
    href: "/news/tax-updates-2026",
  },
  {
    id: "4",
    title: "Thought Leadership: LLP Member Exits",
    category: "Articles",
    date: "December 2025",
    image: "/images/news-4.jpg",
    excerpt: "Navigating the legal complexities of LLP member departures.",
    href: "/news/llp-member-exits",
  },
];

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

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function NewsImage({
  src,
  alt,
  className,
  ...props
}: React.ComponentProps<typeof Image> & { src: string; alt: string }) {
  const [error, setError] = useState(false);

  if (error || !src) {
    return (
      <div
        className={`bg-gradient-to-br from-primary-dark via-primary to-primary-light ${className}`}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      onError={() => setError(true)}
      {...props}
    />
  );
}

export function Newsroom() {
  const featuredArticle = placeholderArticles[0];
  const otherArticles = placeholderArticles.slice(1);

  return (
    <section className="relative py-16 md:py-20 lg:py-24">
      <div className="absolute inset-0 bg-gray-900">
        <NewsImage
          src="/images/newsroom-bg.jpg"
          alt=""
          fill
          className="object-cover opacity-30"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 to-primary/80" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 md:mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4 md:mb-0">
            Newsroom
          </h2>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-white/70">
              Follow us on social media
            </span>
            <a
              href="https://www.linkedin.com/company/the-barrister-s-clerk/?viewAsMember=true"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="h-6 w-6" />
            </a>
            <a
              href="https://www.instagram.com/tyroonwin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-accent transition-colors"
              aria-label="Instagram"
            >
              <InstagramIcon className="h-6 w-6" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          <div className="relative group">
            <div className="relative aspect-[16/10] overflow-hidden rounded-lg">
              <NewsImage
                src={featuredArticle.image}
                alt={featuredArticle.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span className="inline-block px-3 py-1 bg-accent text-primary text-xs font-medium uppercase tracking-wider mb-3">
                {featuredArticle.category}
              </span>
              <h3 className="font-heading text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                {featuredArticle.title}
              </h3>
              <p className="text-sm text-white/80 mb-3">
                {featuredArticle.excerpt}
              </p>
              <Link
                href={featuredArticle.href}
                className="inline-flex items-center text-accent hover:text-white transition-colors text-sm font-medium"
              >
                Read More
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {otherArticles.map((article) => (
              <div
                key={article.id}
                className="group bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <NewsImage
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
                <div className="p-4">
                  <span className="inline-block px-2 py-0.5 bg-cream text-primary text-xs font-medium uppercase tracking-wider mb-2">
                    {article.category}
                  </span>
                  <h4 className="font-heading text-base font-semibold text-gray-900 mb-1 group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </h4>
                  <p className="text-xs text-gray-500">{article.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/news"
            className="inline-flex items-center text-accent hover:text-white transition-colors font-medium"
          >
            View All News & Articles
          </Link>
        </div>
      </div>
    </section>
  );
}
