"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronRight, X } from "lucide-react";

interface MenuItem {
  label: string;
  href?: string;
  children?: MenuItem[];
}

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuData: MenuItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Barristers",
    href: "/barristers",
  },
  {
    label: "Practice Areas",
    children: [
      {
        label: "Partnership & LLP",
        children: [
          { label: "Partnership Disputes", href: "/partnership" },
          { label: "LLP Agreements", href: "/partnership" },
          { label: "Member Exits", href: "/partnership" },
        ],
      },
      {
        label: "Tax Appeals",
        children: [
          { label: "HMRC Disputes", href: "/tax" },
          { label: "Tribunal Representation", href: "/tax" },
          { label: "Tax Investigations", href: "/tax" },
        ],
      },
    ],
  },
  {
    label: "Who I Help",
    children: [
      { label: "Lawyers & Law Firms", href: "/lawyers" },
      { label: "Licensed Access", href: "/licensed-access" },
      { label: "Members of the Public", href: "/public-access" },
    ],
  },
  {
    label: "About",
    children: [
      { label: "About Tyroon Win", href: "/about" },
      { label: "How to Instruct", href: "/contact" },
      { label: "Client Care", href: "/about#client-care" },
      { label: "Fees", href: "/fees" },
    ],
  },
  {
    label: "News & Resources",
    children: [
      { label: "News", href: "/news" },
      { label: "Articles", href: "/news?filter=articles" },
    ],
  },
  {
    label: "Work With Us",
    href: "/work-with-us",
  },
  {
    label: "Contact",
    href: "/contact",
  },
  {
    label: "Legal",
    children: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Cookie Policy", href: "/cookie-policy" },
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Complaints", href: "/complaints" },
    ],
  },
];

export function MegaMenu({ isOpen, onClose }: MegaMenuProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeSubcategory, setActiveSubcategory] = useState<string | null>(
    null,
  );

  useEffect(() => {
    if (!isOpen) {
      setActiveCategory(null);
      setActiveSubcategory(null);
    }
  }, [isOpen]);

  const handleCategoryClick = (label: string) => {
    const category = menuData.find((item) => item.label === label);
    if (
      category?.children &&
      !category.children.some((child) => child.children)
    ) {
      onClose();
    } else {
      setActiveCategory(activeCategory === label ? null : label);
      setActiveSubcategory(null);
    }
  };

  const handleSubcategoryClick = (label: string) => {
    const category = menuData.find((item) => item.label === activeCategory);
    const subcategory = category?.children?.find(
      (child) => child.label === label,
    );
    if (subcategory?.children) {
      setActiveSubcategory(activeSubcategory === label ? null : label);
    } else {
      onClose();
    }
  };

  const getActiveCategory = () =>
    menuData.find((item) => item.label === activeCategory);
  const getActiveSubcategory = () =>
    getActiveCategory()?.children?.find(
      (child) => child.label === activeSubcategory,
    );

  return (
    <div
      className={`dc-mega ${isOpen ? "open" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-end mb-4">
          <button
            onClick={onClose}
            className="p-2 text-white hover:text-accent transition-colors"
            aria-label="Close menu"
          >
            <X className="h-8 w-8" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-1">
            <ul className="space-y-2">
              {menuData.map((item) => (
                <li key={item.label}>
                  {item.href && !item.children ? (
                    <Link
                      href={item.href}
                      className="block py-3 text-xl text-white hover:text-accent transition-colors font-heading"
                      onClick={onClose}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <button
                      onClick={() => handleCategoryClick(item.label)}
                      className={`block py-3 text-xl text-left w-full hover:text-accent transition-colors font-heading ${
                        activeCategory === item.label
                          ? "text-accent"
                          : "text-white"
                      }`}
                    >
                      <span className="flex items-center">
                        {item.label}
                        <ChevronRight
                          className={`ml-2 h-5 w-5 transition-transform ${
                            activeCategory === item.label ? "rotate-90" : ""
                          }`}
                        />
                      </span>
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {activeCategory && getActiveCategory()?.children && (
            <div className="lg:col-span-1 animate-fadeIn">
              <ul className="space-y-1">
                {getActiveCategory()?.children?.map((child) => (
                  <li key={child.label}>
                    {child.href && !child.children ? (
                      <Link
                        href={child.href}
                        className="block py-2 text-lg text-white/80 hover:text-accent transition-colors"
                        onClick={onClose}
                      >
                        {child.label}
                      </Link>
                    ) : (
                      <button
                        onClick={() => handleSubcategoryClick(child.label)}
                        className={`block py-2 text-left w-full hover:text-accent transition-colors ${
                          activeSubcategory === child.label
                            ? "text-accent"
                            : "text-white/80"
                        }`}
                      >
                        <span className="flex items-center">
                          {child.label}
                          {child.children && (
                            <ChevronRight
                              className={`ml-2 h-4 w-4 transition-transform ${
                                activeSubcategory === child.label
                                  ? "rotate-90"
                                  : ""
                              }`}
                            />
                          )}
                        </span>
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeSubcategory && getActiveSubcategory()?.children && (
            <div className="lg:col-span-1 animate-fadeIn">
              <ul className="space-y-1">
                {getActiveSubcategory()?.children?.map((deepLink) => (
                  <li key={deepLink.label}>
                    <Link
                      href={deepLink.href || "#"}
                      className="block py-2 text-base text-white/60 hover:text-accent transition-colors"
                      onClick={onClose}
                    >
                      {deepLink.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
