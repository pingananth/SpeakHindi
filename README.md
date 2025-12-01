# SpeakHindi - Hindi Learning Platform

A modern, SEO-optimized language learning platform built with Next.js, designed to help people learn Hindi quickly through English.

## Tech Stack

- **Frontend**: Next.js 14 + React + TypeScript
- **Backend/Auth/DB**: Supabase (to be integrated)
- **CMS**: Contentful (to be integrated)
- **Analytics**: Google Analytics 4
- **Hosting**: Netlify (deployment ready)

## Features

### Current Implementation
- ✅ Responsive landing page with 3 folds
- ✅ Hero section with CTA
- ✅ Why Us section (5 key features)
- ✅ Testimonials section (3 success stories)
- ✅ Footer with navigation and social links
- ✅ Google Analytics integration
- ✅ SEO optimization (metadata, semantic HTML)
- ✅ Mobile-first responsive design
- ✅ Premium UI with animations and micro-interactions

### Planned Features
- Course page structure
- Lesson page framework with:
  - Lesson goals and outcomes
  - Video section
  - Worksheets
  - Quiz section
  - Flashcards (optional)
  - Additional resources with search
  - Lesson feedback
  - Questions section
- Authentication (first 2-3 lessons free)
- Payment integration
- Contentful CMS integration

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
\`\`\`bash
npm install
\`\`\`

2. Create a \`.env.local\` file in the root directory:
\`\`\`
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
\`\`\`
Replace with your actual Google Analytics ID.

3. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## Design System

### Color Palette
- **Primary Blue**: #004D7A (Deep Navy)
- **Neutral White**: #FFFFFF
- **Neutral Gray**: #F8F8F8
- **High-Contrast Orange**: #FF8C00 (CTA buttons)
- **Action Teal**: #00A38C (Accents, icons)

### Typography
- **Headlines**: Poppins (Bold/ExtraBold)
- **Alternative Headlines**: Inter
- **Body Text**: Roboto

## Project Structure

\`\`\`
SpeakHindi/
├── app/
│   ├── layout.tsx          # Root layout with SEO & Analytics
│   ├── page.tsx            # Home page
│   └── globals.css         # Design system & global styles
├── components/
│   ├── Analytics.tsx       # GA tracking utility
│   ├── Hero.tsx            # Hero section (Fold 1)
│   ├── WhyUs.tsx           # Why Us section (Fold 2)
│   ├── Testimonials.tsx    # Testimonials (Fold 3)
│   └── Footer.tsx          # Footer with copyright
├── public/                 # Static assets
├── package.json
├── next.config.js
├── tsconfig.json
└── README.md
\`\`\`

## Deployment

### Netlify Deployment

1. Connect your repository to Netlify
2. Set build command: \`npm run build\`
3. Set publish directory: \`.next\`
4. Add environment variables in Netlify dashboard
5. Deploy!

## Analytics

Google Analytics events are tracked for:
- Page views
- CTA button clicks
- Navigation interactions

See [ANALYTICS.md](./ANALYTICS.md) for setup instructions.

## License

© 2024 SpeakHindi. All rights reserved.
