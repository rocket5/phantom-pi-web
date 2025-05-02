# Phantom Hunters - Game Promotional Website

This is a promotional website for The Phantom PI Mission Apparition mobile game, built using Next.js, React, and Tailwind CSS. The website showcases the game's features, screenshots, and provides information about the game to visitors.

## Project Overview

The website includes the following sections:
- Header with navigation links
- Hero section with game introduction
- Features section highlighting key game functionalities
- Trailer section with embedded video
- Screenshots gallery
- About section with game information
- Download section with App Store link

## Technologies Used

- **Next.js 15** - React framework for server-rendered React applications
- **React 19** - JavaScript library for building user interfaces
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Unstyled, accessible UI components
- **Lucide React** - Icons library
- **Next Themes** - Theme toggling utilities for Next.js

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
├── app/                 # Next.js app folder
│   ├── globals.css      # Global CSS
│   ├── layout.tsx       # Root layout component
│   └── page.tsx         # Home page component
├── components/          # React components
│   ├── ui/              # UI components from shadcn/ui
│   └── theme-provider.tsx
├── public/              # Static assets
│   ├── logo.png
│   ├── hero-bg.jpg
│   ├── screenshot*.jpg
│   └── ...
├── next.config.mjs      # Next.js configuration
├── tailwind.config.ts   # Tailwind CSS configuration
└── package.json         # Project dependencies and scripts
```

## Building for Production

To create an optimized production build:

```bash
pnpm build
```

This will generate a `.next` folder with the production build files.

## Deploying to a Static Web Host

Since this is a static website, you can export it as static HTML:

1. In your `next.config.mjs`, ensure you have the proper export configuration:
```javascript
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // ...other configuration
}
```

2. Build and export the site:
```bash
pnpm build
```

3. The static site will be generated in the `out` directory. You can upload these files to any static web hosting service like:
   - Netlify
   - Vercel
   - GitHub Pages
   - AWS S3
   - Any traditional web hosting service

4. If using a traditional web host:
   - Upload all contents of the `out` directory to your webhost's public directory (often public_html, www, or htdocs)
   - Ensure your host is configured to serve the index.html file when a directory is requested

## Customization

- Edit the content in `app/page.tsx` to update the website text and images
- Replace images in the `public` directory with your own
- Modify colors and styling in `tailwind.config.ts`

## Troubleshooting

If you encounter any issues with dependencies, check the `dependency-troubleshooting.md` file for common solutions.

## License

This project is intended for personal use only. All game assets and content remain the property of their respective owners. 