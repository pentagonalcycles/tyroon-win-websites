# Full Implementation Documentation

## Table of Contents
1. [Project Overview](#project-overview)
2. [Architecture](#architecture)
3. [Technology Stack](#technology-stack)
4. [Design System](#design-system)
5. [Content Specifications](#content-specifications)
6. [Component Library](#component-library)
7. [Page Specifications](#page-specifications)
8. [Contact Information](#contact-information)
9. [Implementation Phases](#implementation-phases)
10. [Deployment Guide](#deployment-guide)
11. [File Structure](#file-structure)
12. [Code Examples](#code-examples)

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
- Professional burgundy/gold color scheme
- Contact forms with validation
- SEO-optimized pages
- Fast loading (Next.js static generation)
- Shared content for tax pages

---

## Architecture

### Monorepo Structure (Turborepo)

```
/
├── apps/                          # Application packages
│   ├── barristersclerk/          # Site 1: Partnership + Tax
│   └── taxclerk/                 # Site 2: Tax only
│
├── packages/                      # Shared packages
│   ├── shared/                   # Shared components & content
│   ├── ui/                       # shadcn/ui components (optional)
│   └── config/                   # Shared config (eslint, tsconfig)
│
├── turbo.json                    # Turborepo pipeline config
├── package.json                  # Root package.json
└── pnpm-workspace.yaml          # PNPM workspace config
```

### Why Monorepo?
1. **Shared Content:** Tax pages content shared between both sites
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
  - shared package

Shared package exports:
  - Components (Hero, Testimonials, etc.)
  - Content (Tax page content)
  - Utilities (formatters, validators)
  - Types (TypeScript interfaces)
```

---

## Technology Stack

### Core Technologies

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 14+ | React framework with App Router |
| React | 18+ | UI library |
| TypeScript | 5+ | Type safety |
| Tailwind CSS | 3.4+ | Utility-first CSS |
| Node.js | 18+ | Runtime |
| PNPM | 8+ | Package manager |

### UI & Styling

| Technology | Purpose |
|------------|---------|
| shadcn/ui | Pre-built accessible components |
| Tailwind CSS | Styling with custom config |
| Lucide React | Icon library |
| Framer Motion | Subtle animations |

### Forms & Validation

| Technology | Purpose |
|------------|---------|
| React Hook Form | Form state management |
| Zod | Schema validation |

### Development Tools

| Technology | Purpose |
|------------|---------|
| ESLint | Code linting |
| Prettier | Code formatting |
| Turborepo | Monorepo management |
| TypeScript | Type checking |

### Deployment

| Technology | Purpose |
|------------|---------|
| Vercel | Hosting & CDN |
| GitHub | Source control |

---

## Design System

### Color Palette

```css
:root {
  /* Primary Colors */
  --color-primary: #722F37;        /* Burgundy/Maroon */
  --color-primary-dark: #5A252C;   /* Darker burgundy */
  --color-primary-light: #8B3A44;  /* Lighter burgundy */
  
  /* Accent Colors */
  --color-accent: #D4AF37;         /* Gold */
  --color-accent-dark: #B8962E;    /* Dark gold */
  --color-accent-light: #F4E8C1;   /* Light gold/cream */
  
  /* Neutral Colors */
  --color-text: #1A1A1A;           /* Near black */
  --color-text-light: #666666;     /* Gray */
  --color-text-muted: #9CA3AF;     /* Light gray */
  
  /* Background Colors */
  --color-bg: #FFFFFF;             /* White */
  --color-bg-alt: #FDF8F3;         /* Warm cream */
  --color-bg-dark: #1A1A1A;        /* Dark footer */
}
```

### Typography

```css
/* Font Families */
--font-heading: 'Playfair Display', Georgia, serif;  /* Elegant serif */
--font-body: 'Inter', system-ui, sans-serif;         /* Clean sans-serif */

/* Font Sizes */
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.125rem;   /* 18px */
--text-xl: 1.25rem;    /* 20px */
--text-2xl: 1.5rem;    /* 24px */
--text-3xl: 1.875rem;  /* 30px */
--text-4xl: 2.25rem;   /* 36px */
--text-5xl: 3rem;      /* 48px */
--text-6xl: 3.75rem;   /* 60px */

/* Font Weights */
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
```

### Spacing Scale

```css
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.25rem;   /* 20px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
--space-24: 6rem;     /* 96px */
```

### Breakpoints

```css
/* Mobile First */
sm: 640px   /* Small devices */
md: 768px   /* Tablets */
lg: 1024px  /* Desktops */
xl: 1280px  /* Large desktops */
2xl: 1536px /* Extra large */
```

### Logo Design

**Text-based logos:**

**barristersclerk.co.uk:**
```
[Gold accent] T[yroon] W[in]
    Barristers Clerk
```

**taxclerk.co.uk:**
```
[Gold accent] T[yroon] W[in]
    Tax Clerk
```

**Specifications:**
- Primary font: Playfair Display (serif)
- Color: Primary burgundy (#722F37)
- Accent: Gold (#D4AF37) on initials "TW"
- Secondary text: Smaller, lighter weight

---

## Content Specifications

### Site 1: barristersclerk.co.uk

#### Homepage (`/`)

**Hero Section:**
```
Headline: "Connecting You with the Right Barrister for Partnership and Tax Matters"
Subheading: "Over 20 years' experience guiding solicitors, professionals, and the public to the right specialist counsel—efficiently, clearly, and cost-effectively."

CTA Buttons:
1. "Check Availability" → /lawyers
2. "Speak to a Clerk" → /licensed-access
3. "Get a Fee Estimate" → /public-access

Image: Tyroon Win professional photo (TyPhoto.jpg)
```

**Practice Areas Section:**
```
Title: "Areas of Expertise"

Card 1 - Partnership & LLP:
- Title: "Partnership & LLP Matters"
- Description: "Expert guidance on partnership disputes, agreements, governance, and member exits."
- Link: /partnership
- Icon: Scale/Balance icon

Card 2 - Tax:
- Title: "Tax Appeals & Tribunal"
- Description: "Specialist representation in First-tier Tribunal tax appeals and HMRC disputes."
- Link: /tax
- Icon: Calculator/Chart icon
```

**Testimonials Section:**
```
Title: "What the Directories Say"

Quote 1:
"Practice manager Tyroon Win is excellent. He's both responsive and highly knowledgeable"
- Chambers UK Bar Guide (2024)

Quote 2:
"Tyroon Win is always very responsive, easy to deal with and a pleasure to work with."
- Chambers and Partners (2023)

Quote 3:
"Excellent clerk Tyroon Win is exceptionally easy to get along with and efficient."
- Legal 500 (2019)

(Display 3 quotes with ability to scroll/see more)
```

**Contact CTA Section:**
```
Title: "Let's Discuss Your Matter"
Text: "Whether you are a lawyer, professional, or member of the public, I am happy to have an initial conversation to discuss your options and guide you to the right counsel."

Links:
- For Lawyers & Law Firms → /lawyers
- For Licensed Access → /licensed-access
- For Members of the Public → /public-access

Contact Info:
- Email: tyroon.win@barristersclerk.co.uk
- Phone: 020 7430 2005
- Mobile: 07751 022914
```

#### About Page (`/about`)

**Content:**
```
Title: "About Me"

[Tyroon Win Photo]

Full Bio (from input.md):
"With over 20 years' experience in the legal sector, I work closely with solicitors, law firms, accountants, and members of the public to connect them with the right barrister for their needs..."

Experience Timeline:
- Practice Manager at Partnership Counsel
- Head of Tax at The Barrister Group
- Senior Clerk at Exchequer Chambers

Testimonials Block (repeat from homepage)
```

#### For Lawyers (`/lawyers`)

**Content:**
```
Title: "For Lawyers and Law Firms"
Headline: "Instruct the right counsel. Quickly and with certainty."

Intro:
"You need clear answers on availability, fees, and suitability. You also need confidence that counsel understands the commercial context, not just the law. I act as your first point of contact and make the process straightforward."

What you can expect:
✓ Fast response on availability and turnaround
✓ Clear and transparent fee structures
✓ Guidance on the most suitable barrister for your matter
✓ Efficient fixing of hearings and case coordination
✓ Seamless integration with your team

Closing:
"I understand the pressures you are under. Deadlines move. Clients expect clarity. My role is to remove friction and keep things moving."

CTA: "Get in touch to discuss your matter or check availability."
Button: "Contact Us" → /contact
```

#### Licensed Access (`/licensed-access`)

**Content:**
```
Title: "For Licensed Access Clients"
Subtitle: "Accountants and Professionals"

Headline: "Direct access to specialist barristers, without unnecessary layers."

Intro:
"If you are an accountant or professional adviser, you can instruct counsel directly under the Licensed Access Scheme. This saves time and can reduce cost."

How I help:
✓ Match you with the right barrister for your issue
✓ Agree scope of work so you stay in control of cost
✓ Provide clear fee estimates upfront
✓ Coordinate timelines and deliverables
✓ Step in quickly for urgent matters

External Link:
"Please see the Bar Council information about Licensed Access here:"
Link: Licensed Access Recognition Regulations → https://www.barstandardsboard.org.uk/

CTA: "Speak to me to explore whether Licensed Access is right for your matter."
Button: "Speak to me" → /contact
```

#### Public Access (`/public-access`)

**Content:**
```
Title: "For Members of the Public"
Subtitle: "Public Access Scheme"

Headline: "Speak directly to a barrister where appropriate."

Intro:
"In many cases, you can instruct a barrister without going through a solicitor. This can be faster and more cost-effective, particularly for advice or discrete pieces of work."

What I will do:
✓ Explain how Public Access works in simple terms
✓ Help you identify the right barrister for your situation
✓ Provide clear information on fees and next steps
✓ Ensure the process is straightforward and manageable

External Link:
"Please see the following guidance on Public Access for lay clients on the Bar Standards Board website:"
Link: Bar Standards Board Public Access Guidance → https://www.barstandardsboard.org.uk/

Note:
"If your matter requires a solicitor, I will tell you early and can suggest suitable options."

CTA: "Contact me for an initial discussion and next steps."
Button: "Get in touch" → /contact
```

#### Partnership & LLP (`/partnership`)

**Content:**
```
Title: "Partnership & LLP Expertise"

Intro:
"Tyroon Win works with clients to connect them with barristers specialising in partnership and LLP law. My barristers advise firms, partners, and members on governance, structural matters, and disputes, providing clear, practical guidance tailored to each client's needs."

Section: "Key Areas of Expertise"
- Partner and member exits
- Team moves and lateral hires
- Valuation and distribution of partnership assets
- Drafting partnership and LLP agreements
- Clarifying partner/member status
- Governance and internal decision-making
- Claims of unfair prejudice
- Restrictive covenants and non-compete clauses
- Firm mergers and restructurings
- Dissolution and winding-up
- Insolvency matters
- Discrimination claims
- Regulatory compliance (SRA, Legal Ombudsman, SDT)

Section: "Dispute Resolution"
[Full content from input.md Tab 6]

Section: "Partnership and LLP Agreements"
[Full content from input.md Tab 6]

Section: "How I Can Help You"
[Full content from input.md Tab 6]

CTA: "Contact me to discuss your partnership matter"
```

#### Tax (`/tax`)

**Content:** (SHARED - stored in packages/shared)
```
Title: "Tax Appeals & Tribunal"

Intro:
"When challenging an HMRC decision, the way your appeal is prepared and presented can determine the entire outcome..."

Section: "Tax Appeals First-tier Tribunal (Tax Chamber)"
[Full content from input.md Tab 7]

Section: "How My Tax Barristers Can Support You"
[Full content from input.md Tab 7]

Section: "Key Services"
[All bullet points from input.md]

Section: "Why Work with My Barristers"
[Full content from input.md]

CTA: "I can connect you with a barrister who will guide your appeal from start to finish..."
```

#### Barristers (`/barristers`)

**Content:**
```
Title: "Our Barristers"

Intro:
"I work with a select group of experienced barristers who specialise in partnership and tax matters. Each barrister is chosen for their expertise, approachability, and track record of success."

Placeholder Grid:
[6 placeholder cards]
Each card:
- Silhouette/profile icon
- "Barrister profile coming soon"
- "Contact me to discuss barrister availability"

CTA: "Contact me to discuss which barrister is right for your matter"
```

#### Fees (`/fees`)

**Content:**
```
Title: "Fees"

Headline: "Transparent Fee Structures"

Intro:
"I believe in complete transparency when it comes to fees. You will receive clear information about costs upfront, with no hidden charges."

Section: "How Fees Work"
- Fees are typically based on barrister seniority and case complexity
- Hourly rates or fixed fees available depending on the work
- Written fee estimates provided before instruction
- Regular updates if circumstances change

Section: "Typical Fee Range"
Note: "Specific fees depend on the barrister and matter. As a guide:"
- Junior barristers: £X - £X per hour
- Experienced barristers: £X - £X per hour
- Leading barristers: £X - £X per hour
- Fixed fees available for defined pieces of work

Section: "What Affects Fees"
- Complexity of the matter
- Seniority of barrister required
- Urgency and timeframes
- Amount of preparation needed
- Hearing length and location

CTA: "Contact me for a specific fee estimate for your matter"
```

#### Contact (`/contact`)

**Content:**
```
Title: "Contact Us"

Headline: "Let's Discuss Your Matter"

Text: "Whether you are a lawyer, professional, or member of the public, I am happy to have an initial conversation to discuss your options."

Contact Details:
📧 tyroon.win@barristersclerk.co.uk
📞 020 7430 2005
📱 07751 022914

Office Hours:
Monday - Friday: 9:00 AM - 6:00 PM

Contact Form:
- Full Name (required)
- Email Address (required)
- Phone Number (optional)
- I am a: [Lawyer/Law Firm | Licensed Access | Member of Public]
- Message (required)
- Submit button

Response Time:
"I aim to respond to all enquiries within 24 hours during business days."
```

#### Work With Us (`/work-with-us`)

**Content:**
```
Title: "Work With Us"

Headline: "Are You a Barrister Looking for Professional Clerking?"

Intro:
"I provide comprehensive clerking services for barristers specialising in partnership and tax law. My approach is proactive, responsive, and commercially focused."

Benefits:
✓ Professional practice management
✓ Diary and hearing management
✓ Client relationship management
✓ Fee negotiation and billing
✓ Business development support
✓ 20+ years of sector experience
✓ Extensive solicitor and professional network

What I Offer:
- Full practice management support
- Flexible arrangements to suit your needs
- Access to established client relationships
- Strategic business development

Current Opportunities:
"I am currently looking to work with barristers at all levels of seniority who specialise in partnership and tax matters."

Contact:
"To discuss working together, please get in touch:"
[Contact form or email link]
```

#### Privacy Policy (`/privacy`)

**Content:**
```
Title: "Privacy Policy"

Last Updated: [Date]

Standard GDPR-compliant privacy policy covering:
- Data controller information
- What data is collected
- How data is used
- Legal basis for processing
- Data retention
- Your rights under GDPR
- Cookies (if any)
- Contact details for data queries

Data Controller:
Tyroon Win
Email: tyroon.win@barristersclerk.co.uk
```

### Site 2: taxclerk.co.uk

Same structure as Site 1 with these differences:

#### Homepage (`/`)
```
Headline: "Connecting You with the Right Barrister for Tax Matters"
(No mention of Partnership)
```

#### Navigation
Remove "Partnership & LLP" from dropdown.

#### All Other Pages
Same content as Site 1, importing Tax content from shared package.

---

## Component Library

### Layout Components

#### Navbar
```typescript
interface NavbarProps {
  site: 'barristersclerk' | 'taxclerk';
}

// Features:
// - Logo on left
// - Navigation links (desktop)
// - Dropdown menus for Services, Practice Areas
// - Mobile hamburger menu
// - Sticky on scroll
// - White background, subtle shadow when scrolled
```

#### Footer
```typescript
interface FooterProps {
  site: 'barristersclerk' | 'taxclerk';
}

// Features:
// - 4 columns: Logo/About, Quick Links, Practice Areas, Contact
// - Copyright bar at bottom
// - Dark background (primary color)
// - Gold accent on links
```

#### Container
```typescript
interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

// Max-width: 1280px (xl)
// Horizontal padding: responsive (4, 6, 8)
// Centered
```

#### Section
```typescript
interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'cream' | 'dark';
}

// Vertical padding: responsive (16, 20, 24)
// Background color variants
```

### UI Components (shadcn/ui)

#### Button
```typescript
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'outline' | 'ghost';
  size: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
  href?: string; // If provided, renders as Link
}

// Primary: Burgundy bg, white text, gold border on hover
// Secondary: Gold bg, dark text
// Outline: Transparent bg, burgundy border, burgundy text
// Ghost: Transparent, text only with hover underline
```

#### Card
```typescript
interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean; // Add hover effect
}

// White background
// Subtle shadow
// Rounded corners (lg)
// Optional: lift on hover with shadow increase
```

#### Input
```typescript
interface InputProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  error?: string;
}

// Styled with Tailwind
// Focus: gold ring
// Error state: red border
```

#### Textarea
```typescript
interface TextareaProps {
  label: string;
  name: string;
  placeholder?: string;
  rows?: number;
  required?: boolean;
  error?: string;
}
```

#### Select
```typescript
interface SelectProps {
  label: string;
  name: string;
  options: { value: string; label: string }[];
  required?: boolean;
  error?: string;
}
```

### Custom Components

#### Hero
```typescript
interface HeroProps {
  headline: string;
  subheading: string;
  ctas: {
    label: string;
    href: string;
    variant: 'primary' | 'secondary';
  }[];
  image?: string;
}

// Full-width section
// Two-column layout (text left, image right on desktop)
// Gradient or solid background
// Large typography
```

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

// Display 1-3 testimonials
// Navigation dots/arrows
// Auto-rotate optional
// Quote styling with large quotation marks
```

#### PracticeAreaCard
```typescript
interface PracticeAreaCardProps {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
}

// Card with icon
// Title and description
// Hover: icon color change to gold
// Click: navigate to page
```

#### ContactForm
```typescript
interface ContactFormProps {
  onSubmit: (data: ContactFormData) => Promise<void>;
}

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  clientType: 'lawyer' | 'licensed' | 'public';
  message: string;
}

// Full form with validation
// Zod schema validation
// React Hook Form
// Submit button with loading state
// Success/error messages
```

#### ClientTypeCTA
```typescript
interface ClientType {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
}

interface ClientTypeCTAProps {
  clientTypes: ClientType[];
}

// 3-column grid (1 column mobile)
// Each with icon, title, description, link
// Used on homepage
```

#### DirectoryQuote
```typescript
interface DirectoryQuoteProps {
  quote: string;
  source: string;
  year: string;
}

// Styled blockquote
// Gold quotation marks
// Source citation with year
// Optional: source logo
```

---

## Page Specifications

### Metadata (SEO)

Each page should have:

```typescript
export const metadata: Metadata = {
  title: "Page Title | Site Name",
  description: "Page-specific meta description (150-160 chars)",
  keywords: "relevant, keywords, for, this, page",
  openGraph: {
    title: "Page Title",
    description: "Page description",
    type: "website",
  },
};
```

### URLs & Structure

#### barristersclerk.co.uk
```
/                          - Homepage
/about                     - About Tyroon
/lawyers                   - For Lawyers
/licensed-access          - Licensed Access
/public-access            - Public Access
/partnership              - Partnership & LLP
/tax                      - Tax Appeals
/barristers               - Barrister Profiles
/fees                     - Fee Information
/contact                  - Contact Page
/work-with-us             - For Barristers
/privacy                  - Privacy Policy
```

#### taxclerk.co.uk
```
/                          - Homepage (Tax focus)
/about                     - About Tyroon
/lawyers                   - For Lawyers
/licensed-access          - Licensed Access
/public-access            - Public Access
/tax                      - Tax Appeals (shared)
/barristers               - Barrister Profiles
/fees                     - Fee Information
/contact                  - Contact Page
/work-with-us             - For Barristers
/privacy                  - Privacy Policy
```

---

## Contact Information

### barristersclerk.co.uk
```
Email:    tyroon.win@barristersclerk.co.uk
Phone:    020 7430 2005
Mobile:   07751 022914
```

### taxclerk.co.uk
```
Email:    tyroon.win@taxclerk.co.uk
Phone:    020 31500002
Mobile:   07891 929988
```

### Display Format
- Phone numbers: Use proper UK formatting
- Email: Clickable mailto links
- All contact info visible in:
  - Footer (all pages)
  - Contact page
  - Homepage CTA section

---

## Implementation Phases

### Phase 1: Setup & Foundation (2-3 hours)

**Tasks:**
1. Initialize Turborepo monorepo
   ```bash
   npx create-turbo@latest tyroon-win-websites
   cd tyroon-win-websites
   ```

2. Create app structure
   ```
   apps/barristersclerk/
   apps/taxclerk/
   packages/shared/
   ```

3. Install Next.js in each app
   ```bash
   cd apps/barristersclerk
   npx create-next-app@latest . --typescript --tailwind --app --src-dir=false
   ```

4. Configure Tailwind with custom colors
   - Update `tailwind.config.ts` with burgundy/gold palette
   - Add custom font imports (Google Fonts)

5. Set up shadcn/ui
   ```bash
   npx shadcn-ui@latest init
   npx shadcn-ui@latest add button card input textarea select
   ```

6. Configure shared package
   - Set up package.json exports
   - Create tsconfig for shared package

7. Install shared dependencies
   ```bash
   pnpm install framer-motion lucide-react react-hook-form zod
   ```

8. Set up Vercel projects
   - Create two projects on Vercel
   - Link to GitHub repo
   - Configure build settings

**Deliverables:**
- Working monorepo structure
- Both apps build successfully
- Shared package exports working
- Vercel deployments configured

### Phase 2: Shared Components (3-4 hours)

**Tasks:**
1. Create layout components in shared package
   - Navbar component with site prop
   - Footer component with site prop
   - Container, Section wrappers

2. Create UI component variants
   - Button variants (primary, secondary, outline)
   - Card component
   - Form components (Input, Textarea, Select)

3. Create custom components
   - Hero component
   - TestimonialCarousel component
   - PracticeAreaCard component
   - ContactForm component with validation
   - DirectoryQuote component
   - ClientTypeCTA component

4. Set up shared content
   - Tax page content (MDX or TS)
   - Testimonials data
   - Types/interfaces

5. Create utility functions
   - cn() helper for Tailwind classes
   - Formatters for phone numbers
   - Date formatters

**Deliverables:**
- All shared components working
- Components tested in isolation
- Content imports working

### Phase 3: Site 1 - barristersclerk.co.uk (6-8 hours)

**Tasks:**
1. Create all page files
   - Set up page.tsx for each route
   - Add metadata to each page

2. Build Homepage
   - Hero section with CTAs
   - Practice areas preview
   - Testimonials section
   - Contact CTA section

3. Build About page
   - Bio content
   - Photo
   - Timeline

4. Build Services pages (Lawyers, Licensed, Public)
   - Content from input.md
   - Proper formatting
   - CTAs

5. Build Practice Area pages (Partnership, Tax)
   - Partnership: Full content
   - Tax: Import from shared

6. Build Barristers page
   - Placeholder grid
   - Contact CTA

7. Build Fees page
   - General guidance content

8. Build Contact page
   - Contact form
   - Contact details
   - Office hours

9. Build Work With Us page
   - Benefits section
   - Contact form

10. Build Privacy Policy page
    - GDPR-compliant content

11. Add responsive styles
    - Test on mobile, tablet, desktop
    - Fix any issues

**Deliverables:**
- All 12 pages complete
- All content from input.md implemented
- Contact form working
- Mobile responsive

### Phase 4: Site 2 - taxclerk.co.uk (3-4 hours)

**Tasks:**
1. Copy/adapt Site 1 structure
   - Copy all pages except Partnership

2. Update site-specific content
   - Homepage headline
   - Navigation (remove Partnership)
   - Contact details

3. Configure shared content imports
   - Import Tax content from shared package
   - Verify it renders correctly

4. Update metadata
   - Site-specific titles and descriptions

5. Test all pages
   - Verify navigation works
   - Check all links
   - Test contact form

**Deliverables:**
- All 11 pages complete
- Shared Tax content rendering
- Site-specific details correct

### Phase 5: Polish & Deploy (2-3 hours)

**Tasks:**
1. Add animations (subtle)
   - Page transitions
   - Scroll animations on sections
   - Hover effects on cards

2. SEO optimization
   - Add sitemap.xml
   - Add robots.txt
   - Verify all meta tags
   - Add structured data (JSON-LD)

3. Performance optimization
   - Optimize images
   - Add next/image for all images
   - Check Lighthouse scores
   - Fix any issues

4. Final testing
   - Cross-browser testing
   - Mobile testing
   - Form submission testing
   - Link checking

5. Deploy to Vercel
   ```bash
   git push
   # Vercel auto-deploys
   ```

6. Configure custom domains
   - Add barristersclerk.co.uk to first project
   - Add taxclerk.co.uk to second project
   - Update DNS records
   - Verify SSL certificates

7. Final verification
   - Test both domains
   - Check all pages on production
   - Verify contact forms work

**Deliverables:**
- Both sites live on custom domains
- SSL working
- All features functional

---

## Deployment Guide

### Vercel Configuration

#### Project 1: barristersclerk.co.uk

**Build Settings:**
```
Framework Preset: Next.js
Root Directory: apps/barristersclerk
Build Command: cd ../.. && pnpm build --filter=barristersclerk
Output Directory: apps/barristersclerk/.next
Install Command: pnpm install
```

**Environment Variables:**
```
# None required for basic static site
```

**Domain Settings:**
1. Go to Project Settings > Domains
2. Add: barristersclerk.co.uk
3. Add: www.barristersclerk.co.uk (redirect to non-www)
4. Configure DNS as instructed by Vercel

#### Project 2: taxclerk.co.uk

**Build Settings:**
```
Framework Preset: Next.js
Root Directory: apps/taxclerk
Build Command: cd ../.. && pnpm build --filter=taxclerk
Output Directory: apps/taxclerk/.next
Install Command: pnpm install
```

**Domain Settings:**
1. Go to Project Settings > Domains
2. Add: taxclerk.co.uk
3. Add: www.taxclerk.co.uk (redirect to non-www)
4. Configure DNS as instructed by Vercel

### DNS Configuration

For each domain, add these DNS records:

**Type A Record:**
```
Name: @
Value: [Vercel IP - provided in dashboard]
```

**Type CNAME Record:**
```
Name: www
Value: cname.vercel-dns.com
```

### SSL/TLS

Vercel automatically provisions SSL certificates. No manual configuration needed.

---

## File Structure

### Complete File Tree

```
tyroon-win-websites/
├── apps/
│   ├── barristersclerk/
│   │   ├── app/
│   │   │   ├── about/
│   │   │   │   └── page.tsx
│   │   │   ├── barristers/
│   │   │   │   └── page.tsx
│   │   │   ├── contact/
│   │   │   │   └── page.tsx
│   │   │   ├── fees/
│   │   │   │   └── page.tsx
│   │   │   ├── lawyers/
│   │   │   │   └── page.tsx
│   │   │   ├── licensed-access/
│   │   │   │   └── page.tsx
│   │   │   ├── partnership/
│   │   │   │   └── page.tsx
│   │   │   ├── privacy/
│   │   │   │   └── page.tsx
│   │   │   ├── public-access/
│   │   │   │   └── page.tsx
│   │   │   ├── tax/
│   │   │   │   └── page.tsx
│   │   │   ├── work-with-us/
│   │   │   │   └── page.tsx
│   │   │   ├── favicon.ico
│   │   │   ├── globals.css
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   ├── components/
│   │   ├── lib/
│   │   │   └── utils.ts
│   │   ├── public/
│   │   │   └── images/
│   │   │       └── tyroon-win.jpg
│   │   ├── .eslintrc.json
│   │   ├── next.config.js
│   │   ├── package.json
│   │   ├── postcss.config.js
│   │   ├── tailwind.config.ts
│   │   └── tsconfig.json
│   │
│   └── taxclerk/
│       ├── app/
│       │   ├── about/
│       │   │   └── page.tsx
│       │   ├── barristers/
│       │   │   └── page.tsx
│       │   ├── contact/
│       │   │   └── page.tsx
│       │   ├── fees/
│       │   │   └── page.tsx
│       │   ├── lawyers/
│       │   │   └── page.tsx
│       │   ├── licensed-access/
│       │   │   └── page.tsx
│       │   ├── privacy/
│       │   │   └── page.tsx
│       │   ├── public-access/
│       │   │   └── page.tsx
│       │   ├── tax/
│       │   │   └── page.tsx
│       │   ├── work-with-us/
│       │   │   └── page.tsx
│       │   ├── favicon.ico
│       │   ├── globals.css
│       │   ├── layout.tsx
│       │   └── page.tsx
│       ├── components/
│       ├── lib/
│       │   └── utils.ts
│       ├── public/
│       │   └── images/
│       │       └── tyroon-win.jpg
│       ├── .eslintrc.json
│       ├── next.config.js
│       ├── package.json
│       ├── postcss.config.js
│       ├── tailwind.config.ts
│       └── tsconfig.json
│
├── packages/
│   ├── shared/
│   │   ├── src/
│   │   │   ├── components/
│   │   │   │   ├── ClientTypeCTA.tsx
│   │   │   │   ├── ContactForm.tsx
│   │   │   │   ├── DirectoryQuote.tsx
│   │   │   │   ├── Footer.tsx
│   │   │   │   ├── Hero.tsx
│   │   │   │   ├── Navbar.tsx
│   │   │   │   ├── PracticeAreaCard.tsx
│   │   │   │   ├── Section.tsx
│   │   │   │   └── TestimonialCarousel.tsx
│   │   │   ├── content/
│   │   │   │   ├── tax/
│   │   │   │   │   └── tax-appeals.tsx
│   │   │   │   └── testimonials.ts
│   │   │   ├── lib/
│   │   │   │   └── utils.ts
│   │   │   └── types/
│   │   │       └── index.ts
│   │   ├── package.json
│   │   └── tsconfig.json
│   │
│   └── ui/
│       └── [shadcn components]
│
├── .gitignore
├── package.json
├── pnpm-workspace.yaml
├── turbo.json
└── README.md
```

---

## Code Examples

### 1. Root Package.json

```json
{
  "name": "tyroon-win-websites",
  "private": true,
  "scripts": {
    "build": "turbo run build",
    "dev": "turbo run dev",
    "lint": "turbo run lint",
    "format": "prettier --write \"**/*.{ts,tsx,md}\""
  },
  "devDependencies": {
    "prettier": "^3.1.0",
    "turbo": "^1.11.0"
  },
  "packageManager": "pnpm@8.12.0"
}
```

### 2. Turbo.json

```json
{
  "$schema": "https://turbo.build/schema.json",
  "globalDependencies": ["**/.env.*local"],
  "pipeline": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": [".next/**", "!.next/cache/**"]
    },
    "lint": {},
    "dev": {
      "cache": false,
      "persistent": true
    }
  }
}
```

### 3. Shared Package Package.json

```json
{
  "name": "@tyroon/shared",
  "version": "0.0.0",
  "private": true,
  "main": "./src/index.ts",
  "types": "./src/index.ts",
  "exports": {
    ".": "./src/index.ts",
    "./components/*": "./src/components/*.tsx",
    "./content/*": "./src/content/*.ts"
  },
  "scripts": {
    "lint": "eslint . --max-warnings 0"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "lucide-react": "^0.294.0",
    "framer-motion": "^10.16.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "typescript": "^5.3.0"
  }
}
```

### 4. Tailwind Config

```typescript
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    '../../packages/shared/src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#722F37',
          dark: '#5A252C',
          light: '#8B3A44',
        },
        accent: {
          DEFAULT: '#D4AF37',
          dark: '#B8962E',
          light: '#F4E8C1',
        },
        cream: '#FDF8F3',
      },
      fontFamily: {
        heading: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
```

### 5. Contact Form Component

```typescript
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email required'),
  phone: z.string().optional(),
  clientType: z.enum(['lawyer', 'licensed', 'public']),
  message: z.string().min(10, 'Please provide more details'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    // Send to API route
    const response = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(data),
    });
    // Handle response
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label htmlFor="name">Full Name *</label>
        <input {...register('name')} />
        {errors.name && <span>{errors.name.message}</span>}
      </div>
      
      <div>
        <label htmlFor="email">Email *</label>
        <input type="email" {...register('email')} />
        {errors.email && <span>{errors.email.message}</span>}
      </div>
      
      <div>
        <label htmlFor="phone">Phone</label>
        <input type="tel" {...register('phone')} />
      </div>
      
      <div>
        <label htmlFor="clientType">I am a... *</label>
        <select {...register('clientType')}>
          <option value="">Select...</option>
          <option value="lawyer">Lawyer / Law Firm</option>
          <option value="licensed">Licensed Access Professional</option>
          <option value="public">Member of Public</option>
        </select>
      </div>
      
      <div>
        <label htmlFor="message">Message *</label>
        <textarea {...register('message')} rows={5} />
        {errors.message && <span>{errors.message.message}</span>}
      </div>
      
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
```

### 6. Homepage Implementation

```typescript
import { Hero } from '@tyroon/shared/components/Hero';
import { ClientTypeCTA } from '@tyroon/shared/components/ClientTypeCTA';
import { TestimonialCarousel } from '@tyroon/shared/components/TestimonialCarousel';
import { testimonials } from '@tyroon/shared/content/testimonials';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tyroon Win | Barristers Clerk | Partnership & Tax',
  description: 'Over 20 years\' experience guiding solicitors...',
};

export default function HomePage() {
  return (
    <main>
      <Hero
        headline="Connecting You with the Right Barrister for Partnership and Tax Matters"
        subheading="Over 20 years' experience guiding solicitors, professionals, and the public to the right specialist counsel—efficiently, clearly, and cost-effectively."
        ctas={[
          { label: 'Check Availability', href: '/lawyers', variant: 'primary' },
          { label: 'Speak to a Clerk', href: '/licensed-access', variant: 'secondary' },
          { label: 'Get a Fee Estimate', href: '/public-access', variant: 'outline' },
        ]}
      />
      
      <ClientTypeCTA />
      
      <TestimonialCarousel testimonials={testimonials} />
      
      {/* Contact CTA Section */}
      <section className="bg-cream py-20">
        <div className="container mx-auto text-center">
          <h2>Let's Discuss Your Matter</h2>
          <p>Whether you are a lawyer, professional, or member of the public...</p>
          {/* Contact info and links */}
        </div>
      </section>
    </main>
  );
}
```

### 7. API Route for Contact Form

```typescript
// app/api/contact/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Create transporter
    const transporter = nodemailer.createTransporter({
      // SMTP config
    });
    
    // Send email
    await transporter.sendMail({
      from: process.env.FROM_EMAIL,
      to: 'tyroon.win@barristersclerk.co.uk',
      subject: `New Contact Form Submission from ${data.name}`,
      text: `
        Name: ${data.name}
        Email: ${data.email}
        Phone: ${data.phone || 'Not provided'}
        Client Type: ${data.clientType}
        Message: ${data.message}
      `,
    });
    
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
```

---

## Post-Launch Checklist

### Immediate (Day 1)
- [ ] Verify both sites load on custom domains
- [ ] Check SSL certificates are valid
- [ ] Test contact forms on both sites
- [ ] Test all navigation links
- [ ] Check mobile responsiveness
- [ ] Verify images load correctly

### Week 1
- [ ] Submit sitemaps to Google Search Console
- [ ] Set up Google Analytics
- [ ] Test forms with real submissions
- [ ] Check for any console errors
- [ ] Verify all external links work
- [ ] Test on multiple browsers

### Ongoing
- [ ] Monitor contact form submissions
- [ ] Check site analytics
- [ ] Keep dependencies updated
- [ ] Regular backups
- [ ] Content updates as needed

---

## Support & Maintenance

### Regular Updates
- **Monthly:** Check for dependency updates
- **Quarterly:** Review and update content
- **Annually:** Full accessibility and performance audit

### Contact
For technical issues or updates:
- Review this documentation
- Check component library for existing solutions
- Follow the established patterns

---

*Documentation Version: 1.0*  
*Last Updated: March 24, 2026*  
*Project: Tyroon Win Barrister Clerk Websites*
