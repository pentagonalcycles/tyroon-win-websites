# Next Steps

## Current Status (April 4, 2026)

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
