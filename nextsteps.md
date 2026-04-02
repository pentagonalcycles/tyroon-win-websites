# Next Steps

## Current Status (April 2, 2026)

All changes below apply to **barristersclerk.co.uk only**. taxclerk.co.uk has not been touched.

### Navigation & Layout

- **TopBar**: "Practice Managers" renamed to "Clerks & Practice Managers"; "Home" link added; visible "Menu" label added above hamburger icon
- **Page headings**: All inner-page `PageHero` headings use `darkHeading` prop — dark green (`text-green-900`) on burgundy background (barristersclerk only; taxclerk keeps white headings)
- **Footer**: Disclaimer text added above copyright bar; Cookie Policy, Fees links added; "Contact us" text at bottom-right; "Collaborate with us" removed; Legal section in footer columns now includes Cookie Policy, Terms & Conditions, Complaints Information

### Pages Updated

- **`/barristers`**: Full bios for Simon Jelf (Partnership & LLP) and Stefano Mariani (Tax), with real photos (`SimonJelf.jpg`, `StefanoMariani.png`)
- **`/tax`**: Expanded with full Tax Specialist Areas (6 categories) and Hong Kong Tax & Trusts section
- **`/partnership`**: Already had full content from earlier session
- **`/work-with-us`**: Expanded with collaboration model for freelance clerks and barristers/sole practitioners
- **`/privacy`**: Updated to new privacy notice content from client document
- **`/public-access`**: Download link for `Public-Access-Guidance-for-Lay-Clients.pdf`
- **`/licensed-access`**: Download links for `Licensed-access-terms-of-work.pdf` and `Licensed-Access-Guidance.pdf`
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
