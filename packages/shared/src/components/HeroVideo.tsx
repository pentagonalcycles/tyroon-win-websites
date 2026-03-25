"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search } from "lucide-react";
import { cn } from "../lib/utils";

interface HeroVideoProps {
  image?: string;
}

const searchIndex = [
  { title: "Partnership & LLP", href: "/partnership", type: "practice" },
  { title: "Tax Appeals", href: "/tax", type: "practice" },
  { title: "Barristers", href: "/barristers", type: "page" },
  { title: "Tyroon Win", href: "/about", type: "page" },
  { title: "Fees", href: "/fees", type: "page" },
  { title: "Contact", href: "/contact", type: "page" },
  { title: "Lawyers & Law Firms", href: "/lawyers", type: "page" },
  { title: "Licensed Access", href: "/licensed-access", type: "page" },
  { title: "Public Access", href: "/public-access", type: "page" },
  { title: "Work With Us", href: "/work-with-us", type: "page" },
];

export function HeroVideo({
  image = "/images/tyroon-win.jpg",
}: HeroVideoProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<typeof searchIndex>([]);
  const [showResults, setShowResults] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [imageError, setImageError] = useState(false);

  const handleSearch = useCallback((query: string) => {
    if (!query.trim()) {
      setSearchResults([]);
      setShowResults(false);
      return;
    }

    const filtered = searchIndex.filter(
      (item) =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.type.toLowerCase().includes(query.toLowerCase()),
    );
    setSearchResults(filtered);
    setShowResults(true);
    setSelectedIndex(-1);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleSearch(searchQuery);
    }, 150);
    return () => clearTimeout(timer);
  }, [searchQuery, handleSearch]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!showResults || searchResults.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) =>
        prev < searchResults.length - 1 ? prev + 1 : prev,
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : -1));
    } else if (e.key === "Enter" && selectedIndex >= 0) {
      e.preventDefault();
      window.location.href = searchResults[selectedIndex].href;
    } else if (e.key === "Escape") {
      setShowResults(false);
    }
  };

  return (
    <section className="relative">
      <div className="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
        {!imageError && image ? (
          <Image
            src={image}
            alt="Barristers Chambers"
            fill
            className="object-cover"
            priority
            sizes="100vw"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary-light" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 lg:p-16">
          <div className="mx-auto max-w-7xl">
            <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 max-w-3xl leading-tight">
              Highly Specialised,{" "}
              <span className="text-accent">Highest Quality</span>{" "}
              Representation
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-0">
              Connecting you with specialist barristers who truly add value,
              offering clear and robust legal advice and outstanding advocacy.
            </p>
          </div>
        </div>
      </div>

      <div className="relative bg-primary">
        <div className="absolute -top-4 left-0 right-0 h-4 bg-gradient-to-b from-black/20 to-transparent" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 md:py-10">
          <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
            <div className="relative w-full lg:w-auto lg:flex-1 max-w-2xl">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for an area of expertise or barrister"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                  onFocus={() => searchQuery && setShowResults(true)}
                  className="w-full px-5 py-4 pr-12 rounded-none text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <button
                  type="submit"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-primary transition-colors"
                  aria-label="Search"
                >
                  <Search className="h-5 w-5" />
                </button>
              </div>

              {showResults && searchResults.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white shadow-xl rounded-lg z-50 max-h-80 overflow-y-auto">
                  {searchResults.map((result, index) => (
                    <Link
                      key={result.href + result.title}
                      href={result.href}
                      onClick={() => {
                        setShowResults(false);
                        setSearchQuery("");
                      }}
                      className={cn(
                        "block px-5 py-3 hover:bg-cream transition-colors",
                        selectedIndex === index ? "bg-cream" : "",
                      )}
                    >
                      <span className="font-medium text-gray-900">
                        {result.title}
                      </span>
                      <span className="ml-2 text-sm text-gray-500 capitalize">
                        {result.type === "practice"
                          ? "Practice Area"
                          : result.type}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <Link
                href="/barristers"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-light text-white font-medium hover:bg-primary transition-colors"
              >
                Barristers
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-dark text-white font-medium hover:bg-primary transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
