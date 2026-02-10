# Oakshire Labs Website

A professional website for Oakshire Labs - Enterprise Software Development & AI/ML Solutions company.

## Overview

This website was built using the T3 Stack with:
- **Next.js 15** with App Router
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui** components

## Project Structure

```
oakshire-website/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx            # Homepage
│   │   ├── case-studies/       # Case studies listing + detail pages
│   │   ├── services/           # Services page
│   │   ├── process/            # Process/How We Work page
│   │   └── contact/            # Contact page
│   ├── components/
│   │   ├── navbar.tsx          # Navigation
│   │   ├── footer.tsx          # Footer
│   │   ├── ui/                 # shadcn/ui components
│   │   └── sections/           # Homepage sections
│   └── styles/
│       └── globals.css         # Global styles + theme
```

## Pages Created

1. **Homepage** (`/`) - Full landing page with:
   - Hero section with CTA
   - Stats/Social proof section
   - Services overview
   - Featured case studies
   - Why Choose Us
   - Process timeline
   - Industries served
   - Testimonials
   - FAQ accordion
   - CTA section

2. **Case Studies** (`/case-studies`) - Case studies list with 4 projects:
   - Fintech Bank - AI-Powered Digital Lending Platform
   - Cordelia Cruises - Premium Booking Engine
   - Fincent - AI Accounting SaaS
   - Emcode - Vehicle Tracking & AI Analytics

3. **Services** (`/services`) - Detailed service offerings:
   - AI/ML Solutions
   - Financial Software
   - Enterprise Web & Mobile
   - Technology capabilities

4. **Process** (`/process`) - How we work:
   - 4-phase process timeline
   - Engagement models
   - Quality assurance

5. **Contact** (`/contact`) - Contact page with form

## Content Sources

- Homepage content from `home_page.md`
- Case studies from `case_studies.md`

## Getting Started

```bash
cd oakshire-website
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Build for Production

```bash
cd oakshire-website
SKIP_ENV_VALIDATION=true npm run build
npm start
```

## Deployment

Deploy to Vercel, Netlify, or any Next.js-compatible platform.

See `oakshire-website/README.md` for detailed documentation.
