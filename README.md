# Releafe Website

Marketing website for **Releafe** — a platform for mental wellbeing in the workplace, focused on Dutch SMB organizations.

🌐 **Live:** [releafe.nl](https://releafe.nl)

---

## Tech Stack

- **Frontend:** Vite 5 + React 18 + TypeScript
- **Styling:** Tailwind CSS
- **Routing:** React Router DOM
- **Icons:** Lucide React
- **Hosting:** Vercel (auto-deploys on push to `main`)
- **Waitlist:** MailerLite (embedded form endpoint, no backend required)
- **Analytics:** Google Analytics 4
- **WhatsApp Widget:** Picky Assist

---

## Quick Start

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Build for production (also regenerates sitemap)
npm run build

# Preview production build locally
npm run preview

# Run TypeScript type-check
npm run typecheck
```

---

## Project Structure

```
src/
├── components/      Reusable UI components (Navbar, Hero, WaitlistModal, etc.)
├── pages/           Route-level pages (Privacy, Terms, Kennisbank, 404, etc.)
├── lib/             Utilities (SEO config)
├── App.tsx          Main app with React Router setup
└── main.tsx         Entry point

public/              Static assets (images, logos, sitemap.xml, robots.txt)
scripts/             Build scripts (sitemap generator)
vercel.json          SPA rewrite config for client-side routing
```

---

## Deployment

The site **auto-deploys to Vercel** on every push to `main`:

```bash
git add .
git commit -m "Description of changes"
git push
```

Vercel builds and deploys in ~30 seconds. Production URL: [releafe.nl](https://releafe.nl).

For test deployments without affecting production, push to any non-`main` branch — Vercel creates a separate preview URL.

If the live site breaks, use **"Instant Rollback"** in the Vercel dashboard to revert to a previous deployment in one click.

---

## Adding Kennisbank Articles

When adding a new article in `src/pages/KennisbankDetailPage.tsx`, also add its title to the `kennisbankArticles` array in `scripts/generate-sitemap.js`. The sitemap is then automatically regenerated on the next build.

---

## Waitlist (MailerLite)

The waitlist form in `src/components/WaitlistModal.tsx` submits directly to a MailerLite embedded-form endpoint:

```
https://assets.mailerlite.com/jsonp/1405414/forms/187562848368461057/subscribe
```

No API key or backend required. New subscribers appear in the MailerLite dashboard within seconds.

Double opt-in is **disabled** in MailerLite settings — subscribers go straight into the active list. A GDPR consent notice is displayed below the form.

---

## Environment Variables

None required for production. The `.env` file is intentionally empty (it's ignored via `.gitignore`).

---

## License

Proprietary © Releafe Group B.V.
