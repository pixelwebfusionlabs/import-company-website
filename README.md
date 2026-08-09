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
npm run build     # static export → out/
npm run lint      # ESLint
npm run format    # Prettier
npm run deploy:s3 # build + upload out/ to S3
```

## Folder structure

```
app/                 # Routes, layouts
components/
  ui/                # shadcn primitives
  layout/            # Header, Footer, ThemeToggle
  home/              # Homepage sections
  contact/           # Contact form + map
  shared/            # Section, Reveal, Counter, CTA…
lib/
  content/           # Company copy & data
  email/             # Legacy Resend/Nodemailer helpers
  seo/               # Metadata & JSON-LD
  validations/       # Zod schemas
  web3forms.ts       # Static-host form submissions
hooks/
types/
public/brand/        # Logo & brand assets
out/                 # Static export output (after npm run build)
```

Update company details in `lib/content/company.ts` and related content modules.

## Deployment

### Amazon S3 (static hosting)

The site uses `output: "export"` and builds to the `out/` folder.

1. Create an S3 bucket and enable **Static website hosting**:
   - Index document: `index.html`
   - Error document: `404.html`
2. Allow public read on objects (or serve via CloudFront + OAC).
3. Configure AWS CLI (`aws configure`).
4. Set the bucket name and deploy:

```bash
export S3_BUCKET=your-bucket-name
# Optional: bake forms key into the build
# export NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_key
npm run deploy:s3
```

Website URL (no CloudFront):

`http://your-bucket-name.s3-website-REGION.amazonaws.com`

For HTTPS and a custom domain, put CloudFront in front of the bucket (default root object `index.html`, custom error `404.html`).

### Forms on static hosting

Contact and newsletter use [Web3Forms](https://web3forms.com). Set `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` in `.env.local` **before** building so the key is included in the static JS.

### Vercel

You can still deploy to Vercel, but prefer a Node hosting target if you need server APIs again. For the current static export, S3 (or any static host) is the intended path.

## Brand

- Logo: `public/brand/sn-factory-logo.png`
- Tagline: One step beyond
- Focus: Vehicle parts, lift & hoist systems, home accessories

## License

Private — all rights reserved by SN Factory.
