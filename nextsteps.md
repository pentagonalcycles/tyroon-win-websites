# Next Steps

## Current Status (April 2, 2026)

### Changes Applied — Client Feedback (Mr Ty) — barristersclerk.co.uk only

- **Page headings**: All inner-page hero headings (`PageHero` component with `darkHeading` prop) changed to dark green (`text-green-900`) on existing burgundy background
- **TopBar navigation**: "Practice Managers" link renamed to "Clerks & Practice Managers"; visible "Menu" label added above hamburger icon; "Home" link added
- **Footer (barristersclerk only)**: Added disclaimer text above copyright bar: _"Barrister's Clerk" provides administrative, marketing, and clerical support services…_; added links for Privacy Policy, Cookie Policy, Fees; "Contact us" text added bottom-right; "Collaborate with us" removed
- **Public Access page (barristersclerk)**: Added download link for `Public-Access-Guidance-for-Lay-Clients.pdf`
- **Licensed Access page (barristersclerk)**: Added download links for `Licensed-access-terms-of-work.pdf` and `Licensed-Access-Guidance.pdf`
- **Lawyers page (barristersclerk)**: Added "Standard Documents" section with download links for `Standard-Contractual-Terms-2020.pdf` and `Contractual-Terms-Explanation.pdf`

### PDFs — Deployed

All 5 PDF files are deployed and live in `apps/barristersclerk/public/`:

| File                                         | Size  |
| -------------------------------------------- | ----- |
| `Public-Access-Guidance-for-Lay-Clients.pdf` | 169KB |
| `Licensed-access-terms-of-work.pdf`          | 330KB |
| `Licensed-Access-Guidance.pdf`               | 250KB |
| `Standard-Contractual-Terms-2020.pdf`        | 260KB |
| `Contractual-Terms-Explanation.pdf`          | 661KB |

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

## Pending Tasks

### High Priority

- [ ] Review the redesigned barristersclerk site on localhost:3000
- [ ] Apply similar aesthetic/updates to taxclerk site if desired
- [ ] Add real barrister profiles to `/barristers` page
- [ ] Add specific fee rates to `/fees` page
- [ ] Wire up contact form email delivery (Resend or similar)

### Medium Priority

- [ ] Add Google Analytics tracking
- [ ] Submit sitemaps to Google Search Console
- [ ] SEO optimization verification
- [ ] Mobile responsiveness testing

### Low Priority

- [ ] Performance optimization and Lighthouse audit
- [ ] Add subtle animations if not already present
- [ ] Review all page content for accuracy

## Deployment Checklist

- [ ] Push code to GitHub
- [ ] Create two Vercel projects (one per app, same repo)
- [ ] Configure root directories: `apps/barristersclerk` and `apps/taxclerk`
- [ ] Add custom domains: barristersclerk.co.uk and taxclerk.co.uk
- [ ] Update DNS records at domain registrar
- [ ] Set up RESEND_API_KEY environment variable for contact forms
- [ ] Test contact forms on live domains
- [ ] Verify SSL certificates

## Design Reference

The barristersclerk redesign uses a Devereux Chambers-inspired aesthetic:

- Professional, refined color palette
- Typography suited for legal services
- Clean layout emphasizing trust and expertise

See `redesign-plan.md` for full design documentation.
