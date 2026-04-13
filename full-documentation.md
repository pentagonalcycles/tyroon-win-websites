# Full Implementation Documentation

## Table of Contents

1. [Project Overview](#project-overview)
2. [Architecture](#architecture)
3. [Technology Stack](#technology-stack)
4. [Design System](#design-system)
5. [Component Library](#component-library)
6. [Page Specifications](#page-specifications)
7. [Content Specifications](#content-specifications)
8. [Contact Information](#contact-information)
9. [Deployment Guide](#deployment-guide)
10. [File Structure](#file-structure)

---

## Project Overview

### Objective

Build two professional websites for Tyroon Win, an experienced barristers' clerk with 20+ years in the legal sector.

### Websites

#### 1. barristersclerk.co.uk

**Practice Areas:** Partnership & LLP, Tax

**Target Audience:**

- Solicitors and law firms
- Licensed Access professionals (accountants, etc.)
- Members of the public (Public Access)

#### 2. taxclerk.co.uk

**Practice Areas:** Tax only

**Target Audience:**

- Same three client types as site 1
- Focus specifically on tax appeals and tribunal matters

### Key Features

- Responsive design (mobile-first)
- Professional burgundy/gold colour scheme
- Full-screen overlay MegaMenu for barristersclerk; standard sticky Navbar for taxclerk
- Contact forms with validation
- SEO-optimised pages (sitemap, robots.txt, metadata)
- Fast loading (Next.js static generation)
- Shared content for tax pages
- Video/image hero with live site search

---

## Architecture

### Monorepo Structure (Turborepo)

```
/
├── apps/
│   ├── barristersclerk/    # Site 1: Partnership + Tax
│   └── taxclerk/           # Site 2: Tax only
│
├── packages/
│   ├── shared/             # Shared components, content, types & utils
│   └── config/             # Shared config (eslint, tsconfig)
│
├── turbo.json
├── package.json
└── pnpm-workspace.yaml
```

### Why Monorepo?

1. **Shared Content:** Tax page content shared between both sites
2. **Code Reuse:** Components, utilities, and types used across both
3. **Consistent Styling:** Single design system
4. **Easier Maintenance:** Update shared code once, affects both sites

### Package Dependencies

```
Root depends on:
  - turbo
  - prettier (formatting)
  - eslint (linting)

Apps depend on:
  - next
  - react
  - typescript
  - tailwindcss
  - @tyroon/shared package

Shared package exports:
  - Components (TopBar, MegaMenu, Navbar, Footer, Hero, HeroVideo, etc.)
  - Content (tax-appeals, testimonials)
  - Utilities (cn helper)
  - Types (TypeScript interfaces)
```

---

## Technology Stack

### Core Technologies

| Technology   | Version | Purpose                         |
| ------------ | ------- | ------------------------------- |
| Next.js      | 14+     | React framework with App Router |
| React        | 18+     | UI library                      |
| TypeScript   | 5+      | Type safety                     |
| Tailwind CSS | 3.4+    | Utility-first CSS               |
| Node.js      | 18+     | Runtime                         |
| PNPM         | 8+      | Package manager                 |

### UI & Styling

| Technology   | Purpose                    |
| ------------ | -------------------------- |
| Tailwind CSS | Styling with custom config |
| Lucide React | Icon library               |

### Forms & Validation

| Technology      | Purpose               |
| --------------- | --------------------- |
| React Hook Form | Form state management |
| Zod             | Schema validation     |

### Development Tools

| Technology | Purpose             |
| ---------- | ------------------- |
| ESLint     | Code linting        |
| Prettier   | Code formatting     |
| Turborepo  | Monorepo management |
| TypeScript | Type checking       |

### Deployment

| Technology | Purpose        |
| ---------- | -------------- |
| Vercel     | Hosting & CDN  |
| GitHub     | Source control |

---

## Design System

### Colour Palette

```css
:root {
  /* Primary Colours */
  --color-primary: #722f37; /* Burgundy/Maroon */
  --color-primary-dark: #5a252c; /* Darker burgundy */
  --color-primary-light: #8b3a44; /* Lighter burgundy */

  /* Accent Colours */
  --color-accent: #d4af37; /* Gold */
  --color-accent-dark: #b8962e; /* Dark gold */
  --color-accent-light: #f4e8c1; /* Light gold/cream */

  /* Neutral Colours */
  --color-text: #1a1a1a; /* Near black */
  --color-text-light: #666666; /* Gray */
  --color-text-muted: #9ca3af; /* Light gray */

  /* Background Colours */
  --color-bg: #ffffff; /* White */
  --color-bg-alt: #fdf8f3; /* Warm cream */
  --color-bg-dark: #1a1a1a; /* Dark footer */
}
```

### Typography

```css
/* Font Families */
--font-heading: "Playfair Display", Georgia, serif; /* Elegant serif */
--font-body: "Inter", system-ui, sans-serif; /* Clean sans-serif */
```

Both fonts are loaded via `next/font/google` in each app's `layout.tsx` and injected as CSS variables (`--font-heading`, `--font-body`).

### Breakpoints

```
sm: 640px   /* Small devices */
md: 768px   /* Tablets */
lg: 1024px  /* Desktops */
xl: 1280px  /* Large desktops */
2xl: 1536px /* Extra large */
```

### Logo Design

**Text-based logos (rendered in JSX):**

**barristersclerk.co.uk** (TopBar — white on dark):

```
The Barrister's Clerk   ← bold, Playfair Display, white
```

**taxclerk.co.uk** (Navbar — coloured on white):

```
TyroonWin        ← bold, Playfair Display, primary colour; T and W in accent gold
  Tax Clerk      ← xs, gray, tracking-wide
```

---

## Component Library

All shared components live in `packages/shared/src/components/` and are exported from `packages/shared/src/index.ts`.

### Navigation Components

#### TopBar

Used by **barristersclerk only**. Hard-coded to the barristersclerk brand (phone number, email, name). No props required.

```typescript
export function TopBar(): JSX.Element;

// Features:
// - Dark burgundy bar (dc-topbar CSS class)
// - Logo "The Barrister's Clerk" in white, links to /
// - Desktop (lg+): phone number, nav links (Home, Practice Areas dropdown, Barristers dropdown, Clerks & Practice Managers dropdown), mail icon
// - Desktop (lg+): animated "Menu" button that opens MegaMenu
// - Mobile (<lg): hamburger/X icon button that opens MegaMenu
// - Body scroll lock applied when menu is open
// - Renders MegaMenu and a click-away overlay (dc-overlay)
```

Desktop top-bar links:

```
Home                         → /
Practice Areas (hover dropdown)
  ├─ Partnership & LLP        → /partnership
  ├─ Mediation                → /mediation
  ├─ Tax                      → /tax
  └─ Hong Kong Tax & Trusts   → /hong-kong-tax-trusts
Barristers (hover dropdown)
  ├─ All Barristers           → /barristers
  ├─ Simon Jelf               → /barristers/simon-jelf
  └─ Stefano Mariani          → /barristers/stefano-mariani
Clerks & Practice Managers (hover dropdown)
  ├─ All Clerks & Practice Managers → /clerks
  └─ Tyroon Win               → /tyroon-win
```

#### MegaMenu

Full-screen overlay menu. Rendered by TopBar. Used by **barristersclerk only**.

```typescript
interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

// Features:
// - Full-screen dark overlay (dc-mega CSS class)
// - 3-column drill-down: top-level → subcategory → deep links
// - Accessible: role="dialog", aria-modal, aria-label
// - Chevron rotation animation on active item
// - Closes and resets state on onClose
```

Menu structure:

```
Home                        → /
Barristers (expands submenu)
  ├─ All Barristers          → /barristers
  ├─ Simon Jelf              → /barristers/simon-jelf
  └─ Stefano Mariani         → /barristers/stefano-mariani
Practice Areas (expands submenu)
  ├─ Partnership & LLP          → /partnership
  ├─ Dispute Resolution
  │   └─ Mediation              → /mediation
  ├─ Tax                        → /tax
  └─ Hong Kong Tax & Trusts     → /hong-kong-tax-trusts
Clerks & Practice Managers  → /clerks
Who I Help                  → /#who-i-help  (scrolls to homepage section)
How to Instruct Us          → /how-to-instruct-us
About (expands submenu)
  ├─ The Barrister's Clerk    → /about
  ├─ Tyroon Win               → /tyroon-win
  └─ Fees                     → /fees
News & Resources (expands submenu)
  └─ Resources              → /resources
Work With Us                → /work-with-us
Contact                     → /contact
Legal (expands submenu)
  ├─ Privacy Policy         → /privacy
  ├─ Cookie Policy          → /cookie-policy
  ├─ Terms & Conditions     → /terms
  └─ Complaints             → /complaints
```

> **Note:** MegaMenu now links to `/resources` under News & Resources.

> **Bug fix (April 2026):** `handleCategoryClick` previously short-circuited categories with flat children (no grandchildren) by calling `onClose()` immediately. This caused "Barristers", "Who I Help", and "Legal" to close the menu with no action. Fixed by removing the short-circuit — all categories now correctly expand their submenu.

#### Navbar

Site-aware sticky navbar. Used by **taxclerk only**.

```typescript
interface NavbarProps {
  site: SiteId; // 'barristersclerk' | 'taxclerk'
}

// Features:
// - White background, shadow increases on scroll
// - Fixed/sticky at top (z-50)
// - Logo: "Tyroon Win" with T and W in gold accent, subtitle below
// - Desktop: inline links with hover dropdowns (ChevronDown)
// - "Contact" link styled as a primary button
// - Mobile: hamburger/X toggle, accordion dropdowns
```

taxclerk links:

```
Home              → /
About             → /about
Who I Help (dropdown)
  ├─ Lawyers & Law Firms    → /lawyers
  ├─ Licensed Access        → /licensed-access
  └─ Members of the Public  → /public-access
Tax Appeals       → /tax
Barristers        → /barristers
Fees              → /fees
Work With Us      → /work-with-us
Contact           → /contact  (styled as primary button)
```

### Layout Components

#### Footer

```typescript
interface FooterProps {
  site: SiteId;
}

// Features:
// - Site-aware: different colours, contact details, practice links per site
// - barristersclerk: dark burgundy bg, LinkedIn icon, legal disclaimer
// - taxclerk: dark gray bg (bg-gray-900)
// - 4 columns: Brand/About, Quick Links, Practice Areas + Legal, Contact
// - Cookie Policy and Fees links only shown for barristersclerk
// - Copyright with current year
// - Brand column blurb (barristersclerk): "We provide access to Specialist barristers
//   in Partnership and Tax. We work with solicitors, accountants, businesses and
//   individuals. Our role is to connect you with the right barrister quickly and
//   manage the process from start to finish."
```

#### Container

```typescript
interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

// Max-width: 7xl (80rem), responsive horizontal padding (px-4 sm:px-6 lg:px-8)
// Centred with mx-auto
```

#### Section

```typescript
interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: "white" | "cream" | "dark";
}

// Vertical padding: py-16 md:py-20 lg:py-24
// Background variants: white, cream (#FDF8F3), dark (primary-dark)
```

### Hero Components

#### HeroVideo

Full-width video (or image fallback) hero with integrated live search. Used on the barristersclerk homepage.

```typescript
interface HeroVideoProps {
  image?: string; // default: /images/tyroon-win.jpg
  videoSrc?: string; // e.g. /videos/hero.mp4 — auto-converts .mov to .mp4/.hevc
}

// Features:
// - Video: autoplay, muted, loop, playsInline; serves HEVC + H.264 sources
// - Falls back to next/image, then CSS gradient if image fails to load
// - Gradient overlays for text contrast
// - Headline: "Connecting Excellence. Managing Brilliance."
// - Search bar with debounced live filtering across a built-in searchIndex
//   (keyboard navigation: ArrowUp/Down, Enter, Escape)
// - CTA buttons: Barristers → /barristers, Contact → /contact
// - Primary bar section below video (bg-primary)
```

#### Hero

Standard two-column text + image hero. Available for general use.

```typescript
interface HeroProps {
  headline: string;
  subheading: string;
  ctas: { label: string; href: string; variant: "primary" | "secondary" }[];
  image?: string;
}
```

#### PageHero

Compact burgundy gradient header used at the top of inner pages.

```typescript
interface PageHeroProps {
  title: string;
  subtitle?: string; // small gold uppercase label above title
  description?: string; // body text below title
  darkHeading?: boolean; // default false; changes heading colour to green-900 (legacy, unused)
}

// Styling: bg-gradient-to-br from-primary to-primary-dark, pt-28 pb-16
// Container max-w-3xl
```

### Content Components

#### IconGrid

Two-column icon grid for practice areas. Hard-coded to Partnership & LLP and Tax. No props.

```typescript
export function IconGrid(): JSX.Element;

// Custom SVG icons (ScaleIcon, CalculatorIcon)
// Hover: icon scales and changes to accent gold
// Background: cream (bg-cream)
// Labels: "Partnership & LLP" → /partnership, "Tax" → /tax
```

#### Newsroom

Newsroom section with featured article + 3 smaller cards. Uses placeholder data. No props.

```typescript
export function Newsroom(): JSX.Element;

// Dark background section with optional bg image (newsroom-bg.jpg)
// Featured article: large left column
// 3 other articles: 2-column right grid
// Social media links: LinkedIn
// "View All News & Articles" → /news  ⚠ page not yet built (button retained as placeholder)
```

Placeholder articles are hard-coded; featured card currently links to `/barristers` and can be replaced with CMS data when a dedicated `/news` page is built.

#### TestimonialCarousel

```typescript
interface Testimonial {
  quote: string;
  source: string;
  year: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

// Carousel with navigation dots/arrows
// Quote styling with large quotation marks
// Data source: featuredTestimonials from packages/shared/src/content/testimonials.ts
```

#### ClientTypeCTA

```typescript
// 3-column grid (1 column mobile)
// Lawyers & Law Firms, Licensed Access, Members of the Public
// Each card links to the relevant page
```

#### PracticeAreaCard

```typescript
interface PracticeAreaCardData {
  title: string;
  description: string;
  href: string;
  iconName: string;
}
```

#### CheckList

Renders a list of items each prefixed with a gold check-circle icon.

```typescript
interface CheckListProps {
  items: string[];
  className?: string;
}
```

#### ContactForm

Full contact form with Zod validation and React Hook Form.

```typescript
interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  clientType: "lawyer" | "licensed" | "public";
  message: string;
}

// Fields: Full Name, Email, Phone (optional), I am a... (select), Message
// Submits to /api/contact (POST)
// Loading state, success/error feedback
```

---

## Page Specifications

### Metadata (SEO)

Each page exports a `metadata` object:

```typescript
export const metadata: Metadata = {
  title: "Page Title", // appended: "| Tyroon Win Barristers Clerk"
  description: "150-160 char desc",
};
```

Root layout sets `metadataBase` and a title template. Each app also has `sitemap.ts` and `robots.ts` at the app root.

### URLs & Routes

#### barristersclerk.co.uk — 23 routes

```
/                          Homepage
/about                     About - The Barrister's Clerk
/how-to-instruct-us         How to Instruct Us
/tyroon-win                 Tyroon Win (bio)
/clerks                     Clerks & Practice Managers
/lawyers                    For Lawyers & Law Firms
/licensed-access            For Licensed Access Clients
/public-access              For Members of the Public
/partnership                Partnership & LLP
/mediation                  Mediation (Dispute Resolution)
/tax                        Tax
/hong-kong-tax-trusts       Hong Kong Tax & Trusts
/barristers                 All Barrister Profiles
/resources                  Guide to UK Tax Acronyms (resource page)
/barristers/simon-jelf      Simon Jelf — Partnership & LLP Barrister
/barristers/stefano-mariani Stefano Mariani — Tax Barrister
/fees                       Fee Information
/contact                    Contact Page
/work-with-us               Work With Us
/privacy                    Privacy Policy
/cookie-policy              Cookie Policy
/terms                      Terms & Conditions
/complaints                 Complaints Information
```

Plus auto-generated: `/sitemap.xml`, `/robots.txt`, `/api/contact` (POST endpoint).

> **Missing:** A dedicated `/news` page is still not built; the homepage still includes a "View All News & Articles" placeholder button that points to `/news`.

#### taxclerk.co.uk — 10 routes

```
/                    Homepage (Tax focus)
/about               About Tyroon Win
/lawyers             For Lawyers & Law Firms
/licensed-access     For Licensed Access Clients
/public-access       For Members of the Public
/tax                 Tax Appeals (shared content)
/barristers          Barrister Profiles
/fees                Fee Information
/contact             Contact Page
/work-with-us        Work With Us
/privacy             Privacy Policy
```

Plus auto-generated: `/sitemap.xml`, `/robots.txt`, `/api/contact`.

> **Note:** taxclerk does not have `/partnership`, `/cookie-policy`, `/terms`, or `/complaints` pages. The Footer on taxclerk links to `/privacy` only in the legal section.

---

## Content Specifications

### barristersclerk.co.uk

#### Homepage (`/`)

**Components used:** `HeroVideo`, `IconGrid`, Who I Help section (inline), `Newsroom`, `TestimonialCarousel`, Contact CTA section (inline).

**Hero:**

- Headline: "Connecting Excellence. Managing Brilliance."
- Sub: "Connecting you with specialist barristers who truly add value, offering clear and robust legal advice and outstanding advocacy."
- Video: `/videos/hero.mp4`
- CTAs: Barristers → `/barristers`, Contact → `/contact`

**Who I Help (3-card grid):**

- Lawyers & Law Firms → `/lawyers`
- Licensed Access → `/licensed-access`
- Members of the Public → `/public-access`

**Testimonials section title:** "What the Directories Say"

**Contact CTA:**

- Headline: "Let's Discuss Your Matter"
- Email: tyroon.win@thebarristersclerk.com
- Phone: 020 7430 2005
- Mobile: 07751 022914
- CTA button: "Contact Me" → `/contact`

#### About (`/about`)

Positioning page for The Barrister's Clerk (no personal bio). Sections: About, What We Do, Our Approach, and a regulatory-role disclaimer block.

#### How to Instruct Us (`/how-to-instruct-us`)

Standalone guidance page covering instruction process, initial information required, compliance/ID checks, fees & timescales, and terms of engagement.

#### Tyroon Win (`/tyroon-win`)

Dedicated personal bio page with career timeline, profile image, and testimonials.

#### Clerks & Practice Managers (`/clerks`)

Listing page (parallel to Barristers listing). Currently includes Tyroon Win with profile link to `/tyroon-win`, designed to be extended with additional clerk profiles.

#### For Lawyers (`/lawyers`)

Headline: "Instruct the right counsel. Quickly and with certainty."
CheckList of what to expect, CTA → `/contact`.

#### Licensed Access (`/licensed-access`)

Headline: "Direct access to specialist barristers, without unnecessary layers."
Bar Council Licensed Access link, CTA → `/contact`.

#### Public Access (`/public-access`)

Headline: "Speak directly to a barrister where appropriate."
Bar Standards Board guidance link, note about solicitor referral, CTA → `/contact`.

#### Partnership & LLP (`/partnership`)

Key areas of expertise, dispute resolution, agreements, CTA.

#### Tax (`/tax`)

Title: "Tax". Content partially imported from `packages/shared/src/content/tax/tax-appeals.ts` (shared with taxclerk). Page includes Tax Specialist Areas and UK Tax Appeals & Tribunal content, plus a link card to the dedicated Hong Kong page.

#### Barristers (`/barristers`)

Overview page with cards linking to individual barrister profiles.

#### Simon Jelf (`/barristers/simon-jelf`)

Full profile page: bio, areas of expertise checklist, "What the Directories Say" section (Chambers & Partners 2026, Legal 500 2026, Chambers & Partners 2023, Chambers & Partners earlier), CTA.

#### Stefano Mariani (`/barristers/stefano-mariani`)

Full profile page: bio, areas of expertise checklist, "What the Directories Say" section (Chambers Greater China Region 2022, Legal 500 Asia Pacific 2022 ×2), CTA.

#### Mediation (`/mediation`)

Dedicated Dispute Resolution / Mediation page for Simon Jelf as qualified mediator. Sections: intro, regularly instructed in, why instruct Simon (he will / his expertise), a better route than litigation (4-card advantages grid), approach, CTA.

#### Hong Kong Tax & Trusts (`/hong-kong-tax-trusts`)

Dedicated page containing Hong Kong-specific tax and trust content moved from `/tax`, including personal/private client tax, corporate/business tax, trusts & estate planning, and dispute resolution sections.

#### Fees (`/fees`)

Transparent fee structure overview. No specific rates listed.

#### Contact (`/contact`)

ContactForm component + contact details (email, phone, mobile, hours).

#### Work With Us (`/work-with-us`)

Headline: "Are You a Barrister Looking for Professional Clerking?"
Benefits list, contact form.

#### Privacy Policy (`/privacy`)

GDPR-compliant policy (data controller: Tyroon Win, tyroon.win@thebarristersclerk.com).

#### Cookie Policy (`/cookie-policy`)

7 sections covering essential, analytics, and marketing cookies. Links to Privacy Policy and Terms.

#### Terms & Conditions (`/terms`)

14 clauses covering overview, fees, cancellation, liability, data protection, governing law. Governing law: England & Wales or HKIAC for Hong Kong matters.

#### Complaints Information (`/complaints`)

8-step complaints procedure following BSB guidance. Legal Ombudsman details. Downloadable PDF link.

### taxclerk.co.uk

Same structure as barristersclerk with these differences:

- Homepage headline focuses on tax only (no partnership mention)
- Navigation uses Navbar (no MegaMenu/TopBar)
- No `/partnership`, `/cookie-policy`, `/terms`, or `/complaints` pages
- Contact details: email tyroon.win@taxclerk.co.uk, phone 020 3150 0002, mobile 07891 929988
- Tax page content imported from shared package (identical content)

---

## Contact Information

### barristersclerk.co.uk

```
Email:   tyroon.win@thebarristersclerk.com
Phone:   020 7430 2005
Mobile:  07751 022914
Hours:   Monday–Friday, 9:00 AM–6:00 PM
```

### taxclerk.co.uk

```
Email:   tyroon.win@taxclerk.co.uk
Phone:   020 3150 0002
Mobile:  07891 929988
Hours:   Monday–Friday, 9:00 AM–6:00 PM
```

---

## Deployment Guide

### Vercel Configuration

#### Project 1: barristersclerk.co.uk

**Build Settings:**

```
Framework Preset:  Next.js
Root Directory:    apps/barristersclerk
Build Command:     cd ../.. && pnpm build --filter=barristersclerk
Output Directory:  apps/barristersclerk/.next
Install Command:   pnpm install
```

**Domain Settings:**

1. Go to Project Settings > Domains
2. Add: barristersclerk.co.uk
3. Add: www.barristersclerk.co.uk (redirect to non-www)
4. Configure DNS as instructed by Vercel

#### Project 2: taxclerk.co.uk

**Build Settings:**

```
Framework Preset:  Next.js
Root Directory:    apps/taxclerk
Build Command:     cd ../.. && pnpm build --filter=taxclerk
Output Directory:  apps/taxclerk/.next
Install Command:   pnpm install
```

**Domain Settings:**

1. Go to Project Settings > Domains
2. Add: taxclerk.co.uk
3. Add: www.taxclerk.co.uk (redirect to non-www)
4. Configure DNS as instructed by Vercel

### DNS Configuration

**Type A Record:**

```
Name:  @
Value: [Vercel IP — provided in dashboard]
```

**Type CNAME Record:**

```
Name:  www
Value: cname.vercel-dns.com
```

### SSL/TLS

Vercel automatically provisions SSL certificates. No manual configuration needed.

---

## File Structure

### Complete File Tree

```
/
├── apps/
│   ├── barristersclerk/
│   │   ├── app/
│   │   │   ├── about/page.tsx
│   │   │   ├── api/contact/route.ts
│   │   │   ├── barristers/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── simon-jelf/page.tsx
│   │   │   │   └── stefano-mariani/page.tsx
│   │   │   ├── complaints/page.tsx
│   │   │   ├── contact/page.tsx
│   │   │   ├── cookie-policy/page.tsx
│   │   │   ├── fees/page.tsx
│   │   │   ├── lawyers/page.tsx
│   │   │   ├── licensed-access/page.tsx
│   │   │   ├── mediation/page.tsx
│   │   │   ├── partnership/page.tsx
│   │   │   ├── privacy/page.tsx
│   │   │   ├── public-access/page.tsx
│   │   │   ├── tax/page.tsx
│   │   │   ├── terms/page.tsx
│   │   │   ├── work-with-us/page.tsx
│   │   │   ├── globals.css
│   │   │   ├── layout.tsx           ← TopBar + Footer site="barristersclerk"
│   │   │   ├── page.tsx             ← Homepage
│   │   │   ├── robots.ts
│   │   │   └── sitemap.ts
│   │   ├── public/
│   │   │   ├── images/
│   │   │   └── videos/hero.mp4
│   │   ├── .eslintrc.json
│   │   ├── next.config.js
│   │   ├── package.json
│   │   ├── postcss.config.js
│   │   ├── tailwind.config.ts
│   │   ├── tsconfig.json
│   │   └── vercel.json
│   │
│   └── taxclerk/
│       ├── app/
│       │   ├── about/page.tsx
│       │   ├── api/contact/route.ts
│       │   ├── barristers/page.tsx
│       │   ├── contact/page.tsx
│       │   ├── fees/page.tsx
│       │   ├── lawyers/page.tsx
│       │   ├── licensed-access/page.tsx
│       │   ├── privacy/page.tsx
│       │   ├── public-access/page.tsx
│       │   ├── tax/page.tsx
│       │   ├── work-with-us/page.tsx
│       │   ├── globals.css
│       │   ├── layout.tsx           ← Navbar site="taxclerk" + Footer site="taxclerk"
│       │   ├── page.tsx             ← Homepage
│       │   ├── robots.ts
│       │   └── sitemap.ts
│       ├── public/
│       │   └── images/
│       ├── .eslintrc.json
│       ├── next.config.js
│       ├── package.json
│       ├── postcss.config.js
│       ├── tailwind.config.ts
│       └── tsconfig.json
│
├── packages/
│   └── shared/
│       └── src/
│           ├── components/
│           │   ├── CheckList.tsx
│           │   ├── ClientTypeCTA.tsx
│           │   ├── ContactForm.tsx
│           │   ├── Container.tsx
│           │   ├── Footer.tsx
│           │   ├── Hero.tsx
│           │   ├── HeroVideo.tsx
│           │   ├── IconGrid.tsx
│           │   ├── MegaMenu.tsx
│           │   ├── Navbar.tsx
│           │   ├── Newsroom.tsx
│           │   ├── PageHero.tsx
│           │   ├── PracticeAreaCard.tsx
│           │   ├── Section.tsx
│           │   ├── TestimonialCarousel.tsx
│           │   └── TopBar.tsx
│           ├── content/
│           │   ├── tax/tax-appeals.ts
│           │   └── testimonials.ts
│           ├── lib/
│           │   └── utils.ts         ← cn() Tailwind helper
│           ├── types/
│           │   └── index.ts         ← SiteId, NavLink, Testimonial, etc.
│           └── index.ts             ← barrel exports for all of the above
│
├── .gitignore
├── package.json
├── pnpm-workspace.yaml
└── turbo.json
```

---

## Known Gaps / Future Work

| Item                 | Detail                                                                                                                                                                 |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/news` page         | MegaMenu no longer links to `/news`; however, the homepage Newsroom footer button still points to `/news` as a placeholder and will 404 until a news page is built.    |
| Newsroom data        | `Newsroom.tsx` uses hard-coded placeholder articles. Needs a CMS or content layer when the news page is built.                                                         |
| taxclerk legal pages | `/cookie-policy`, `/terms`, and `/complaints` exist on barristersclerk but not taxclerk. Add if required.                                                              |
| Contact form email   | `/api/contact` endpoint exists but email delivery not wired up. Needs `RESEND_API_KEY` env var in Vercel.                                                              |
| Fees                 | `/fees` contains general guidance only — no specific fee ranges yet.                                                                                                   |
| Google Analytics     | Not yet added.                                                                                                                                                         |
| Sitemap submission   | Not yet submitted to Google Search Console.                                                                                                                            |
| Additional clerks    | The "Clerks & Practice Managers" TopBar dropdown is ready to extend — add new entries to `clerksDropdown` in `TopBar.tsx` pointing to `/lawyers/[name]` profile pages. |

---

_Documentation Version: 3.5_
_Last Updated: 13 April 2026_
_Project: Tyroon Win Barrister Clerk Websites_
