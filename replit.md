# Portfolio Website

## Overview
A React-based web application that displays a static portfolio website. The React app wraps a pre-generated `portfolio.html` file (exported from Canva) inside an iframe.

## Tech Stack
- **Frontend**: React 19 + TypeScript
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS v4 + PostCSS
- **Package Manager**: npm

## Project Structure
- `src/` - React source code
  - `main.tsx` - Entry point
  - `App.tsx` - Main component (renders iframe pointing to `/portfolio.html`)
  - `index.css` - Global styles with Tailwind directives
- `public/` - Static assets served directly
  - `portfolio.html` - The full portfolio content (Canva export)
  - `_assets/` - Fonts, media, and video assets for the portfolio
- `index.html` - Root HTML for the React app
- `vite.config.ts` - Vite configuration (port 5000, host 0.0.0.0, all hosts allowed)

## Development
```bash
npm run dev    # Start dev server on port 5000
npm run build  # Build for production (outputs to dist/)
```

## Deployment
- **Type**: Static site
- **Build command**: `npm run build`
- **Public directory**: `dist`
