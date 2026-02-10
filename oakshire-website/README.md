# Oakshire Labs Website

A professional website for Oakshire Labs - Enterprise Software Development & AI/ML Solutions company. Built with the T3 Stack (TypeScript, Next.js, Tailwind CSS) and shadcn/ui.

## Features

- **Homepage** with hero section, stats, services, case studies, testimonials, FAQ, and CTA
- **Case Studies** with detailed project pages for:
  - Fintech Bank - AI-Powered Digital Lending Platform
  - Cordelia Cruises - Premium Booking Engine
  - Fincent - AI-Powered Financial SaaS
  - Emcode - Vehicle Tracking & AI Analytics
- **Services** page with detailed service offerings
- **Process** page explaining how the company works
- **Contact** page with contact form
- Responsive design for all devices
- SEO optimized with proper meta tags

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **State Management**: (Optional - tRPC configured but not used for static content)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd oakshire-website
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
# Copy the example env file
cp .env.example .env

# Edit .env with your values (optional for basic site functionality)
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
oakshire-website/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── case-studies/       # Case study pages
│   │   ├── contact/            # Contact page
│   │   ├── process/            # Process page
│   │   ├── services/           # Services page
│   │   ├── layout.tsx          # Root layout
│   │   └── page.tsx            # Homepage
│   ├── components/
│   │   ├── navbar.tsx          # Navigation component
│   │   ├── footer.tsx          # Footer component
│   │   ├── ui/                 # shadcn/ui components
│   │   └── sections/           # Page sections
│   │       ├── hero.tsx
│   │       ├── stats.tsx
│   │       ├── services.tsx
│   │       ├── case-studies-preview.tsx
│   │       ├── process.tsx
│   │       ├── testimonials.tsx
│   │       ├── faq.tsx
│   │       ├── cta.tsx
│   │       ├── why-choose-us.tsx
│   │       └── industries.tsx
│   ├── lib/
│   │   └── utils.ts            # Utility functions
│   └── styles/
│       └── globals.css         # Global styles
├── public/                     # Static assets
├── next.config.js             # Next.js configuration
├── tailwind.config.ts         # Tailwind CSS configuration
├── tsconfig.json              # TypeScript configuration
└── package.json               # Dependencies
```

## Customization

### Colors

The primary brand color is defined in `src/styles/globals.css`:
- Primary: `#5c6b56` (Olive green)
- Primary Light: `#7a8a74`
- Primary Dark: `#3d4a38`

### Content

Update content in the following files:
- `src/components/sections/` - Homepage sections
- `src/app/case-studies/page.tsx` - Case studies listing
- `src/app/case-studies/[slug]/page.tsx` - Individual case study pages
- `src/app/services/page.tsx` - Services page
- `src/app/process/page.tsx` - Process page
- `src/app/contact/page.tsx` - Contact page

### Company Info

Update company details in:
- `src/components/navbar.tsx` - Logo/Brand name
- `src/components/footer.tsx` - Contact info, links
- `src/app/layout.tsx` - Metadata, SEO
- `src/app/contact/page.tsx` - Contact information

## Deployment

### Vercel (Recommended)

The easiest way to deploy is using Vercel:

1. Push your code to GitHub
2. Import the project on [Vercel](https://vercel.com)
3. Deploy!

### Other Platforms

This project can also be deployed to:
- [Netlify](https://netlify.com)
- [AWS Amplify](https://aws.amazon.com/amplify/)
- Any platform supporting Next.js

### Static Export (Limited)

For a static HTML export (note: API routes won't work):

1. Update `next.config.js`:
```javascript
const config = {
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
};
```

2. Build:
```bash
npm run build
```

3. The static files will be in the `dist` folder.

## Content Sources

The website content is based on:
- `home_page.md` - Homepage content and messaging
- `case_studies.md` - Detailed case studies

## License

This project is private and proprietary.

## Support

For questions or support, contact:
- Email: hello@oakshirelabs.com
- Website: [oakshirelabs.com](https://oakshirelabs.com)
