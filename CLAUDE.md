# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a promotional website for "The Phantom PI: Mission Apparition" mobile game built with Next.js 15. It's a static site configured for deployment to any web hosting service, showcasing the game through sections like hero, trailer, screenshots, testimonials, and download links.

## Development Commands

- `npm run dev` - Start development server on http://localhost:3000
- `npm run build` - Create optimized production build (outputs to `out/` directory)
- `npm run start` - Start production server (not typically needed for static export)
- `npm run lint` - Run ESLint for code quality checks

## Architecture

### Next.js Configuration
- **Static Export**: Configured with `output: 'export'` in `next.config.mjs` for static site generation
- **Image Optimization**: Disabled (`unoptimized: true`) for static hosting compatibility
- **Build Tolerance**: ESLint and TypeScript errors ignored during builds for deployment flexibility

### Key Components Structure
- **app/page.tsx**: Single-page application containing all website sections (header, hero, trailer, screenshots, about, testimonials, CTA, footer)
- **app/layout.tsx**: Root layout with comprehensive SEO metadata, OpenGraph tags, structured data schema for the mobile app
- **components/ScreenshotLightbox.tsx**: Custom lightbox component for screenshot gallery
- **components/ui/**: shadcn/ui component library providing consistent UI primitives

### Styling System
- **Tailwind CSS**: Primary styling framework with custom configuration
- **Design System**: Dark theme with purple/indigo gradients, gray backgrounds
- **shadcn/ui Integration**: CSS variables for consistent theming across components

### Content Management
- **Static Assets**: All images stored in `public/images/` directory
- **Screenshot Gallery**: Hardcoded grid of 6 game screenshots with lightbox functionality
- **App Store Integration**: Multiple download buttons linking to iOS App Store

### SEO & Metadata
- Comprehensive metadata in layout.tsx including OpenGraph, Twitter cards, and structured data
- Canonical URLs and proper meta descriptions configured
- Mobile-optimized viewport settings

## Important Notes

- This is a single-page promotional site - all content is in `app/page.tsx`
- Site is configured for static hosting - build outputs to `out/` directory
- Images are unoptimized for static hosting compatibility
- External links include App Store download and Rocket 5 Studios website
- YouTube trailer is embedded via iframe