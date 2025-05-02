# Phantom Hunters - Game Promotional Website

This is a promotional website for The Phantom PI Mission Apparition mobile game, built using Next.js, React, and Tailwind CSS. The website showcases the game's features, screenshots, and provides information about the game to visitors.

## Project Overview

The website includes the following sections:
- Header with navigation links
- Hero section with game introduction
- Features section highlighting key game functionalities
- Trailer section with embedded video
- Screenshots gallery with lightbox functionality
- About section with game information
- Download section with App Store link
- Awards section showcasing recognition

## Technologies Used

- **Next.js 15** - React framework for server-rendered React applications
- **React 18** - JavaScript library for building user interfaces
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Comprehensive library of unstyled, accessible UI components
- **Lucide React** - Icons library
- **Next Themes** - Theme toggling utilities for Next.js
- **Embla Carousel** - Carousel/slider component
- **React Hook Form** - Form handling with validation
- **Zod** - TypeScript-first schema validation

## Prerequisites

- Node.js 18.x or later
- pnpm (recommended) or npm or yarn

## Getting Started

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/phatom-pi-web.git
cd phatom-pi-web
```

2. Install dependencies:
```bash
pnpm install
```

### Running Locally

To run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
phatom-pi-web/
├── app/                     # Next.js app folder
│   ├── globals.css          # Global CSS
│   ├── layout.tsx           # Root layout component
│   ├── page.tsx             # Home page component
│   ├── sitemap.ts           # Sitemap generation
│   ├── robots.ts            # Robots.txt configuration
│   └── manifest.ts          # PWA manifest configuration
├── components/              # React components
│   ├── ui/                  # UI components from shadcn/ui library
│   ├── ScreenshotLightbox.tsx # Custom lightbox for screenshots
│   └── theme-provider.tsx   # Theme provider component
├── hooks/                   # Custom React hooks
│   ├── use-mobile.tsx       # Hook for detecting mobile devices
│   └── use-toast.ts         # Toast notification hook
├── lib/                     # Utility functions
│   └── utils.ts             # General utility functions
├── public/                  # Static assets
│   ├── images/              # Images folder with game screenshots and assets
│   └── favicon.ico          # Site favicon
├── styles/                  # Additional styles
├── next.config.mjs          # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS configuration
└── package.json             # Project dependencies and scripts
```

## Building for Production

To create an optimized production build:

```bash
npm run build
```

This will generate a static export in the `out` folder with the production build files, as configured in `next.config.mjs` with `output: 'export'`.

## Deploying to a Static Web Host

This website is configured as a static site for easy deployment to any hosting platform:

1. The project is configured for static export in `next.config.mjs`:
```javascript
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // ...other configuration
}
```

2. After building with `npm run build`, the static site is generated in the `out` directory. You can upload these files to any static web hosting service like:
   - Netlify
   - Vercel
   - GitHub Pages
   - AWS S3
   - Any traditional web hosting service

3. If using a traditional web host:
   - Upload all contents of the `out` directory to your webhost's public directory (often public_html, www, or htdocs)
   - Ensure your host is configured to serve the index.html file when a directory is requested

## Customization

- Edit the content in `app/page.tsx` to update the website text and images
- Replace images in the `public/images` directory with your own
- Modify colors and styling in `tailwind.config.ts`
- Adjust theme settings in the theme provider

## Troubleshooting

If you encounter any issues with dependencies, check the `dependency-troubleshooting.md` file for common solutions.

## License

This project is intended for personal use only. All game assets and content remain the property of their respective owners. 