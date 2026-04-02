# Next Steps

## Current Status (April 2, 2026)

### Changes Applied — Client Feedback (Mr Ty)

- **Page headings**: All inner-page hero headings (`PageHero` component) changed to dark green (`text-green-900`) on existing burgundy background
- **TopBar navigation**: "Practice Managers" link renamed to "Clerks & Practice Managers"; visible "Menu" label added above hamburger icon
- **Footer (both sites)**: Added disclaimer text above copyright bar on every page: _"Barrister's Clerk" provides administrative, marketing, and clerical support services…_; added links for Cookie Policy, Fees, Collaborate with us; "Contact us" text added bottom-right
- **Public Access pages (both sites)**: Added download link for `Public-Access-Guidance-for-Lay-Clients.pdf` — drop the real PDF into `apps/barristersclerk/public/` and `apps/taxclerk/public/`
- **Licensed Access pages (both sites)**: Added download links for `Licensed-access-terms-of-work.pdf` and `Licensed-Access-Guidance.pdf` — drop real PDFs into both `public/` directories
- **Lawyers pages (both sites)**: Added "Standard Documents" section with download links for `Standard-Contractual-Terms-2020.pdf` and `Contractual-Terms-Explanation.pdf` — drop real PDFs into both `public/` directories

### PDFs — Action Required

Placeholder (empty) PDF files have been committed. Replace them with the real files using these exact filenames:

| File                                         | Pages           |
| -------------------------------------------- | --------------- |
| `Public-Access-Guidance-for-Lay-Clients.pdf` | Public Access   |
| `Licensed-access-terms-of-work.pdf`          | Licensed Access |
| `Licensed-Access-Guidance.pdf`               | Licensed Access |
| `Standard-Contractual-Terms-2020.pdf`        | Lawyers         |
| `Contractual-Terms-Explanation.pdf`          | Lawyers         |

Place each file in **both** `apps/barristersclerk/public/` and `apps/taxclerk/public/`.

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
