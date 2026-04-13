# Next Steps

## Current Status (April 13, 2026)

All changes below apply to **barristersclerk.co.uk only**. taxclerk.co.uk has not been touched.

### Client Feedback Fixes (April 13, 2026)

- **Resources page expanded**: `/resources` now contains a full "Guide to UK Tax Acronyms" with grouped glossary sections, concise definitions, and expanded notes for key litigation/anti-avoidance terms.
- **Homepage social update**: Removed the Instagram icon/link from the Newsroom social row on the homepage; LinkedIn remains.

### Client Feedback Fixes (April 11, 2026)

- **Homepage featured card updated**: In Newsroom, the featured item now reads "Our Barristers Recognised in Chambers & Partners and the Legal 500 Rankings" with category "Our Barristers".
- **Homepage featured CTA target fixed**: The featured "Read More" link now routes to `/barristers`.
- **New page**: `/resources` created as a starter reference hub for future content such as tax terminology, court addresses, and guidance notes.
- **Navigation update**: MegaMenu "News & Resources" now links to Resources (`/resources`) instead of unbuilt News routes.
- **Footer update**: Added "Resources" to Quick Links.
- **Sitemap update**: Added `/resources`.

### Follow-up Revisions (April 10, 2026)

- **Homepage directories heading reverted**: changed back to "What the Directories Say".
- **Tyroon bio restored on dedicated page**: created `/tyroon-win` and linked Tyroon profile entries in TopBar Clerks dropdown and `/clerks` listing page to this route.
- **MegaMenu About updated**: About submenu now lists "The Barrister's Clerk" (`/about`) and "Tyroon Win" (`/tyroon-win`), plus Fees.
- **MegaMenu placement update**: "How to Instruct Us" moved out of About submenu and made a standalone top-level item directly below "Who I Help".
- **Privacy Policy update**: Section 4 now adds: "If we do, they will be listed on our website under Resources."
- **Terms update**: Section 6 (Hearings) and Section 9 (Liability) replaced with expanded client-approved wording.
- **Footer copyright (barristersclerk)**: now displays "© [year] The Barrister's Clerk" instead of "Tyroon Win".

### Client Feedback Fixes (April 10, 2026)

- **Global email update**: Replaced `tyroon.win@barristersclerk.co.uk` with `tyroon.win@thebarristersclerk.com` across barristersclerk pages/components and contact API comments.
- **About page replaced**: `/about` now presents "About - The Barrister's Clerk" (service-focused positioning) and no longer contains Tyroon's personal bio content.
- **New page**: `/how-to-instruct-us` created as a standalone guidance page; MegaMenu About submenu updated to use it and remove Client Care.
- **New page**: `/clerks` created as a listing page for Clerks & Practice Managers (currently Tyroon Win, extensible for additional clerks).
- **TopBar navigation**: Replaced direct "Tax" link with a **Practice Areas** dropdown: Partnership & LLP, Mediation, Tax, Hong Kong Tax & Trusts.
- **MegaMenu Practice Areas**: Simplified entries by removing deep subheadings for Partnership and Tax; now direct links for Partnership & LLP and Tax, plus Mediation and Hong Kong Tax & Trusts.
- **Tax structure split**: Moved Hong Kong content off `/tax` to new dedicated `/hong-kong-tax-trusts` page; `/tax` now links to it.
- **Homepage directories heading**: Updated to "Barristers Recognised in Chambers & Partners and Legal 500".
- **Profile quote copy updates**: Refined Simon and Stefano directory quote text/source labels per latest client wording.
- **Footer**: Practice Areas label changed from "Tax Appeals" to "Tax".
- **Newsroom social**: LinkedIn URL updated to `https://www.linkedin.com/company/the-barrister-s-clerk/?viewAsMember=true`.
- **Sitemap**: Added `/how-to-instruct-us`, `/clerks`, and `/hong-kong-tax-trusts`.

### Navigation — Tax link added (April 9, 2026)

- **TopBar**: Added "Tax" as a direct link (`/tax`) in the desktop nav bar, between "Home" and the "Barristers" dropdown.
- **MegaMenu**: Added "Tax" as a direct top-level link (`/tax`) between "Practice Areas" and "Who I Help", so it is immediately visible when the overlay menu is opened.
- **MegaMenu**: "Who I Help" changed from an expanding submenu to a direct anchor link (`/#who-i-help`), scrolling to the three-card section on the homepage.
- **Homepage**: Added `id="who-i-help"` to the Who I Help section to support the anchor link.

### Client Feedback Fixes (April 9, 2026)

#### Barrister Profiles — Directory Quotes

- **`/barristers/simon-jelf`**: Added "What the Directories Say" section below the bio card with four attributed blocks:
  - Chambers and Partners (2026) — three editorial quotes
  - Legal 500 (2026) — pull quote
  - Chambers and Partners (2023) — pull quote
  - Chambers & Partners (earlier) — three short quotes
- **`/barristers/stefano-mariani`**: Added "What the Directories Say" section with:
  - Chambers Greater China Region (2022) — editorial quote
  - Legal 500 Asia Pacific (2022) — two pull quotes

#### New Page — `/mediation`

- Created `apps/barristersclerk/app/mediation/page.tsx` as a dedicated Dispute Resolution / Mediation practice area page
- Content covers: Simon Jelf's qualifications as mediator, types of disputes, why to instruct Simon, his expertise, advantages of mediation over litigation, approach, and CTA
- Added "Dispute Resolution → Mediation" sub-category under Practice Areas in `MegaMenu.tsx`
- Added a linked callout on the `/partnership` page pointing to `/mediation`

#### Navigation — TopBar

- **Duplicate "Home" link removed**: The `barristersclerkLinks` array previously included `{ label: "Home" }` which duplicated the hardcoded Home link. Array updated to only contain "Clerks & Practice Managers".
- **"Clerks & Practice Managers" converted to dropdown**: Now matches the Barristers pattern — hover reveals "All Clerks & Practice Managers" (`/lawyers`) and "Tyroon Win" (`/about`). Easy to extend with new clerks later.
- **Logo text updated**: "Tyroon Win" → "The Barrister's Clerk" in the top-left brand link.

#### Navigation — MegaMenu Bug Fix

- **`handleCategoryClick` logic fixed**: Previously, clicking any top-level item whose children had no grandchildren (e.g. "Barristers", "Who I Help", "Legal") would call `onClose()` immediately — closing the menu with no navigation and no submenu shown. The short-circuit was removed; all categories now correctly expand their submenu on click.

#### Tax Page

- **`/tax` page title**: Changed from "Tax Appeals & Tribunal" to "Tax" — updated in both `tax-appeals.ts` (shared content) and the page `metadata` title.

#### Footer

- **About blurb**: Updated footer brand-column description to: "We provide access to Specialist barristers in Partnership and Tax. We work with solicitors, accountants, businesses and individuals. Our role is to connect you with the right barrister quickly and manage the process from start to finish."

---

## Previous Status (April 4, 2026)

All changes below apply to **barristersclerk.co.uk only**. taxclerk.co.uk has not been touched.

### Client Feedback Fixes (April 4, 2026)

- **TopBar background**: Added `.dc-topbar` CSS with dark green (`#1b4d3e`) background and gold border. Previously the class had no background defined, making white text invisible against the page.
- **Page banner titles**: Fixed `PageHero` component — all `<h1>` titles on the green banner are now always white. Previously `darkHeading` prop caused them to render as `text-green-900` (invisible on green).
- **LinkedIn link**: Updated footer LinkedIn URL to correct personal profile: `https://www.linkedin.com/in/tyroon-win-b4216819/`
- **Privacy policy**: Changed minimum age from 13 to 18 in Section 8 (Children's Data).
- **Icon grid label**: Changed "Tax Appeals" to "Tax" on the homepage practice area icon.
- **Licensed Access link**: Fixed broken BSB link to: `https://www.barstandardsboard.org.uk/for-barristers/public-and-licensed-access/licensed-access-recognition-regulations.html`
- **Individual barrister pages**: Created `/barristers/simon-jelf` and `/barristers/stefano-mariani` as dedicated profile pages. The `/barristers` overview page now shows cards linking to each individual page. MegaMenu updated with a dropdown under "Barristers" showing: All Barristers, Simon Jelf, Stefano Mariani.
- **TopBar Barristers dropdown**: Added a hover dropdown directly on the "Barristers" link in the top navigation bar (desktop). Hovering reveals All Barristers, Simon Jelf, and Stefano Mariani — each linking to the respective page. Previously the dropdown was only accessible via the full MegaMenu overlay.

---

## Previous Status (April 2, 2026)

All changes below apply to **barristersclerk.co.uk only**. taxclerk.co.uk has not been touched.

### Navigation & Layout

- **TopBar**: "Practice Managers" renamed to "Clerks & Practice Managers"; "Home" link added; visible "Menu" label added above hamburger icon
- **Page headings**: All inner-page `PageHero` headings use `darkHeading` prop — now ignored; titles are always white (fixed April 4)
- **Footer**: Disclaimer text added above copyright bar; Cookie Policy, Fees links added; "Contact us" text at bottom-right; "Collaborate with us" removed; Legal section in footer columns now includes Cookie Policy, Terms & Conditions, Complaints Information

### Pages Updated

- **`/barristers`**: Now an overview page with cards linking to individual barrister profiles
- **`/barristers/simon-jelf`**: Full profile page for Simon Jelf (Partnership & LLP)
- **`/barristers/stefano-mariani`**: Full profile page for Stefano Mariani (Tax)
- **`/tax`**: Expanded with full Tax Specialist Areas (6 categories) and Hong Kong Tax & Trusts section
- **`/partnership`**: Already had full content from earlier session
- **`/work-with-us`**: Expanded with collaboration model for freelance clerks and barristers/sole practitioners
- **`/privacy`**: Updated to new privacy notice content; minimum age set to 18
- **`/public-access`**: Download link for `Public-Access-Guidance-for-Lay-Clients.pdf`
- **`/licensed-access`**: Download links for `Licensed-access-terms-of-work.pdf` and `Licensed-Access-Guidance.pdf`; BSB link corrected
- **`/lawyers`**: Standard Documents section with download links for `Standard-Contractual-Terms-2020.pdf` and `Contractual-Terms-Explanation.pdf`

### New Pages Created

- **`/complaints`**: Full 12-step complaints procedure with Legal Ombudsman and BSB contact details; download link for BSB First-Tier Complaints Handling Guidance PDF
- **`/cookie-policy`**: Full cookie policy
- **`/terms`**: Full Terms & Conditions (15 sections)

### PDFs — All Deployed

All PDF files live in `apps/barristersclerk/public/`:

| File                                          | Size  | Page               |
| --------------------------------------------- | ----- | ------------------ |
| `Public-Access-Guidance-for-Lay-Clients.pdf`  | 169KB | `/public-access`   |
| `Licensed-access-terms-of-work.pdf`           | 330KB | `/licensed-access` |
| `Licensed-Access-Guidance.pdf`                | 250KB | `/licensed-access` |
| `Standard-Contractual-Terms-2020.pdf`         | 260KB | `/lawyers`         |
| `Contractual-Terms-Explanation.pdf`           | 661KB | `/lawyers`         |
| `First-tier-complaints-handling-guidance.pdf` | 270KB | `/complaints`      |

### Images

- `SimonJelf.jpg` (6.7KB) — barrister photo, `/barristers`
- `StefanoMariani.png` (50KB) — barrister photo, `/barristers`

### Pending Tasks

- [ ] Wire up contact form email delivery (Resend or similar) — `RESEND_API_KEY` env var needed in Vercel
- [ ] Add specific fee rates to `/fees` page when agreed
- [ ] Add Google Analytics tracking
- [ ] Submit sitemaps to Google Search Console
- [ ] Mobile responsiveness testing

---

## Previous Status (March 25, 2026)

The barristersclerk.co.uk site has been redesigned with a Devereux Chambers-inspired aesthetic. The redesign introduces a more refined, professional look appropriate for a legal services business.

## Viewing the Sites Locally

Both websites are available on your local machine. Run the dev servers from the project root:

```bash
cd /home/marco/Desktop/projects/websites/ty
pnpm dev
```

Then open in your browser:

| Site                  | URL                   |
| --------------------- | --------------------- |
| barristersclerk.co.uk | http://localhost:3000 |
| taxclerk.co.uk        | http://localhost:3001 |

## Project Structure

```
ty/
├── apps/
│   ├── barristersclerk/    ← barristersclerk.co.uk (redesigned)
│   └── taxclerk/           ← taxclerk.co.uk
├── packages/
│   └── shared/             ← Shared components, content, types
├── package.json
├── pnpm-workspace.yaml
└── turbo.json
```

## Deployment Checklist

- [x] Push code to GitHub
- [x] Create two Vercel projects (one per app, same repo)
- [x] Configure root directories: `apps/barristersclerk` and `apps/taxclerk`
- [x] Add custom domains: barristersclerk.co.uk and taxclerk.co.uk
- [ ] Set up RESEND_API_KEY environment variable for contact forms
- [ ] Test contact forms on live domains

## Design Reference

The barristersclerk redesign uses a Devereux Chambers-inspired aesthetic:

- Professional, refined color palette
- Typography suited for legal services
- Clean layout emphasizing trust and expertise

See `redesign-plan.md` for full design documentation.
