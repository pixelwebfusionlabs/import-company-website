# SN Factory — Company Website

Premium import, distribution, and installation website for **SN Factory**.

Built with Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, shadcn/ui, Framer Motion, React Hook Form, Zod, Resend (Nodemailer fallback), and Google Maps.

## Features

- Full marketing site: Home, About, Services, Industries, Portfolio, Case Studies, Capabilities, Process, Why Us, Testimonials, Clients, FAQ, Careers, Blog, Contact, Privacy, Terms
- Sticky glass navigation with mega menu + mobile drawer
- Dark / light / system theme
- Production contact API with validation, rate limiting, honeypot, and reCAPTCHA-ready hook
- Resend primary email + SMTP (Nodemailer) fallback
- SEO: metadata, Open Graph, sitemap, robots, JSON-LD
- Mobile-first responsive layouts
- Docker + Vercel ready

## Getting started

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL (e.g. `https://snfactory.lk`) |
| `RESEND_API_KEY` | Resend API key (primary email) |
| `CONTACT_EMAIL` | Inbox for inquiries |
| `FROM_EMAIL` | From address / display name |
| `SMTP_HOST` | SMTP host (fallback) |
| `SMTP_PORT` | SMTP port (default `587`) |
| `SMTP_USER` | SMTP username |
| `SMTP_PASSWORD` | SMTP password |
| `GOOGLE_MAPS_API_KEY` | Optional server-side Maps key |
| `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` | Optional Maps Embed key |
| `RECAPTCHA_SECRET_KEY` | Optional reCAPTCHA secret |
| `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` | Optional reCAPTCHA site key |

In development, if neither Resend nor SMTP is configured, emails are logged to the console so the contact form still succeeds.

### Email setup

1. **Resend (recommended)** — create an API key, verify your domain, set `RESEND_API_KEY` and `FROM_EMAIL`.
2. **SMTP fallback** — if Resend fails or is unset, Nodemailer uses `SMTP_*` credentials.
3. Both company notification and customer confirmation emails are sent on successful contact submissions.

## Scripts

```bash
npm run dev       # development server
npm run build     # production build
npm run start     # start production server
npm run lint      # ESLint
npm run format    # Prettier
```

## Folder structure

```
app/                 # Routes, layouts, API
components/
  ui/                # shadcn primitives
  layout/            # Header, Footer, ThemeToggle
  home/              # Homepage sections
  contact/           # Contact form + map
  shared/            # Section, Reveal, Counter, CTA…
lib/
  content/           # Company copy & data
  email/             # Resend + Nodemailer
  seo/               # Metadata & JSON-LD
  validations/       # Zod schemas
hooks/
types/
public/brand/        # Logo & brand assets
```

Update company details in `lib/content/company.ts` and related content modules.

## Deployment

### Vercel

1. Push the repo to GitHub.
2. Import the project in Vercel.
3. Add environment variables from `.env.example`.
4. Deploy.

### Docker

```bash
docker build -t snfactory .
docker run -p 3000:3000 --env-file .env.local snfactory
```

The Next.js config uses `output: "standalone"` for the Docker image.

## Brand

- Logo: `public/brand/sn-factory-logo.png`
- Tagline: One step beyond
- Focus: Vehicle parts, lift & hoist systems, home accessories

## License

Private — all rights reserved by SN Factory.
