# Next Steps

## Viewing the Sites Locally

Both websites are available on your local machine right now. Run the dev servers from the project root:

```bash
cd /home/marco/Desktop/projects/websites/ty
pnpm dev
```

Then open in your browser:

| Site | URL |
|------|-----|
| barristersclerk.co.uk | http://localhost:3000 |
| taxclerk.co.uk | http://localhost:3001 |

Both sites compile and serve automatically. Any file changes are reflected instantly without restarting.

To stop the dev servers, press `Ctrl+C` in the terminal.

---

## Project Structure Recap

```
ty/
├── apps/
│   ├── barristersclerk/    ← barristersclerk.co.uk
│   └── taxclerk/           ← taxclerk.co.uk
├── packages/
│   └── shared/             ← Shared components, content, types
├── package.json
├── pnpm-workspace.yaml
└── turbo.json
```

All shared components (Navbar, Footer, Hero, forms, etc.) live in `packages/shared/src/`. Changes there affect both sites simultaneously.

---

## Deploying to Vercel

### Step 1 – Push to GitHub

Create a new GitHub repository and push the entire project:

```bash
cd /home/marco/Desktop/projects/websites/ty
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

### Step 2 – Create Vercel Project for barristersclerk.co.uk

1. Go to [vercel.com](https://vercel.com) and click **Add New Project**
2. Import your GitHub repository
3. Under **Configure Project**, set:
   - **Framework Preset:** Next.js
   - **Root Directory:** `apps/barristersclerk`
   - Leave Build Command and Output Directory as defaults (the `vercel.json` inside that folder handles it)
4. Click **Deploy**

### Step 3 – Create Vercel Project for taxclerk.co.uk

Repeat the process from the same GitHub repository:

1. **Add New Project** → import the same repository again
2. Set **Root Directory:** `apps/taxclerk`
3. Click **Deploy**

### Step 4 – Add Custom Domains

For each Vercel project:

1. Go to **Project Settings → Domains**
2. Add the domain (e.g. `barristersclerk.co.uk` and `www.barristersclerk.co.uk`)
3. Vercel will give you DNS records to add at your domain registrar:
   - **A record:** `@` → Vercel IP address (shown in dashboard)
   - **CNAME record:** `www` → `cname.vercel-dns.com`
4. SSL certificates are provisioned automatically — no manual steps needed

---

## Wiring Up the Contact Form (Email Delivery)

Currently, contact form submissions are logged to the server console but no email is sent. To enable email delivery, the recommended approach is [Resend](https://resend.com) (free tier available).

### Step 1 – Sign up at resend.com and get an API key

### Step 2 – Install Resend in both apps

```bash
cd /home/marco/Desktop/projects/websites/ty
pnpm add resend --filter=barristersclerk --filter=taxclerk
```

### Step 3 – Update the API route in each app

Open `apps/barristersclerk/app/api/contact/route.ts` and uncomment the Resend block (there is a ready-made comment showing exactly what to add). Do the same in `apps/taxclerk/app/api/contact/route.ts`.

### Step 4 – Add the environment variable in Vercel

In each Vercel project, go to **Settings → Environment Variables** and add:

```
RESEND_API_KEY = re_xxxxxxxxxxxx
```

Redeploy for the variable to take effect.

---

## Content Updates

### Updating page text

All page content is written directly in each page file. For example:

- Homepage headline: `apps/barristersclerk/app/page.tsx`
- About page bio: `apps/barristersclerk/app/about/page.tsx`
- Tax content (shared between both sites): `packages/shared/src/content/tax/tax-appeals.ts`
- Testimonials (shared): `packages/shared/src/content/testimonials.ts`

### Adding real barrister profiles

The `/barristers` page currently shows 6 placeholder cards. When you are ready to add real profiles, edit `apps/barristersclerk/app/barristers/page.tsx` and replace the `Array.from({ length: 6 })` placeholder grid with real data.

### Adding fee figures

The `/fees` page currently describes fee categories without specific rates. When you are ready to publish rates, add them in `apps/barristersclerk/app/fees/page.tsx` and `apps/taxclerk/app/fees/page.tsx`.

---

## Adding Google Analytics

Once the sites are live, add tracking by installing the Next.js third-parties package:

```bash
pnpm add @next/third-parties --filter=barristersclerk --filter=taxclerk
```

Then add to each `app/layout.tsx`:

```tsx
import { GoogleAnalytics } from '@next/third-parties/google';
// Inside <body>:
<GoogleAnalytics gaId="G-XXXXXXXXXX" />
```

Set your Measurement ID in Vercel as an environment variable:

```
NEXT_PUBLIC_GA_ID = G-XXXXXXXXXX
```

---

## Submitting to Google Search Console

After the domains are live:

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add both properties (`barristersclerk.co.uk` and `taxclerk.co.uk`)
3. Verify ownership via DNS TXT record (Vercel makes this straightforward)
4. Submit sitemaps:
   - `https://barristersclerk.co.uk/sitemap.xml`
   - `https://taxclerk.co.uk/sitemap.xml`

---

## Ongoing Maintenance

### Running a production build locally

```bash
pnpm build
```

This builds both sites in parallel and will catch any TypeScript or build errors before pushing.

### Keeping dependencies updated

```bash
pnpm update --recursive --latest
pnpm build   # verify nothing broke
```

### Running only one site in dev

```bash
pnpm dev --filter=barristersclerk   # port 3000 only
pnpm dev --filter=taxclerk          # port 3001 only
```

---

## Summary Checklist

- [ ] View sites locally at http://localhost:3000 and http://localhost:3001
- [ ] Review all page content and adjust any copy as needed
- [ ] Add barrister profile photos and bios when available
- [ ] Add specific fee rates when ready to publish them
- [ ] Push code to GitHub
- [ ] Create two Vercel projects (one per app, same repo)
- [ ] Add custom domains in Vercel and update DNS at registrar
- [ ] Set up Resend (or another email provider) and add `RESEND_API_KEY`
- [ ] Test contact forms on live domains
- [ ] Add Google Analytics
- [ ] Submit sitemaps to Google Search Console
