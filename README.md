# Baydar and Baydar

A modern, React-based web application built with Vite and TailwindCSS, featuring optimized performance and responsive design.

![Baydar and Baydar](./public/logo.png)

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Development](#development)
  - [Available Scripts](#available-scripts)
- [Deployment](#deployment)
- [Technologies Used](#technologies-used)
- [Performance Optimizations](#performance-optimizations)
- [License](#license)

## Overview

Baydar and Baydar is a professional website featuring multiple pages including Home, Portfolio, Vision, and IGM. The website uses modern React development practices with code splitting, lazy loading, and performance optimizations.

## Features

- **Responsive Design**: Fully responsive layout that works across devices
- **Modern UI**: Sleek, modern interface with animations using AOS, GSAP, and Framer Motion
- **Performance Optimized**: Code splitting with lazy loading, compression, and caching
- **SEO Friendly**: Includes sitemap generation and other SEO best practices
- **PWA Support**: Progressive Web App capabilities for offline use

## Project Structure

```
baydarandbaydar/
├── public/                 # Static assets
│   ├── AppImages/          # App icons for PWA (Android, iOS, Windows)
│   ├── _redirects          # Netlify redirects
│   ├── favicon.ico         # Website favicon
│   ├── pwa-manager.js      # PWA management
│   ├── service-worker.js   # Service worker for offline capabilities
│   └── sitemap.xml         # Generated sitemap
├── src/                    # Source code
│   ├── assets/             # Project assets
│   │   ├── fonts/          # Custom fonts
│   │   └── images/         # Image assets
│   ├── components/         # Reusable UI components
│   │   ├── layout/         # Layout components (Header, Footer, etc.)
│   │   ├── navigation/     # Navigation components
│   │   ├── sections/       # Page section components
│   │   └── ui/             # UI components (buttons, dividers, etc.)
│   ├── hooks/              # Custom React hooks
│   ├── pages/              # Application pages
│   │   ├── Home/           # Home page
│   │   ├── IGM/            # IGM page
│   │   ├── Portfolio/      # Portfolio page
│   │   └── Vision/         # Vision page
│   ├── styles/             # Global styles and themes
│   ├── utils/              # Utility functions
│   ├── App.jsx             # Main application component
│   ├── globals.css         # Global CSS
│   └── main.jsx           # Application entry point
├── eslint.config.js        # ESLint configuration
├── generate-sitemap.js     # Script to generate sitemap
├── index.html              # HTML entry point
├── manifest.json           # PWA manifest
├── netlify.toml            # Netlify configuration
├── package.json            # Dependencies and scripts
├── postcss.config.cjs      # PostCSS configuration
├── tailwind.config.js      # TailwindCSS configuration
└── vite.config.js          # Vite configuration
```

### Component Structure Explanation

The application follows a modular component structure:

1. **Layout Components**: Define the overall structure of the application, including `Header`, `Footer`, and page containers.

2. **UI Components**: Reusable UI elements like buttons, dividers, and animations that maintain consistent styling.

3. **Section Components**: Larger components that represent specific sections of pages (Hero, Portfolio, etc.).

4. **Page Components**: Top-level components that compose a complete page from various section and UI components.

5. **Navigation Components**: Handle site navigation with both desktop and mobile versions.

## Getting Started

### Prerequisites

- Node.js (v16.0.0 or later)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/randomcodex/baydarandbaydar.git

# Navigate to the project directory
cd baydarandbaydar

# Install dependencies
npm install
```

## Development

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Lint code
npm run lint

# Preview production build
npm run preview
```

## Deployment

The site is configured for deployment on Netlify with GitHub Actions handling the deployment process. The `netlify.toml` file defines build settings and redirects.

## Technologies Used

- **Frontend Framework**: React 19
- **Build Tool**: Vite 6
- **Styling**: TailwindCSS 4
- **Routing**: React Router 7
- **Animation Libraries**:
  - Framer Motion
  - GSAP
  - AOS (Animate on Scroll)
- **Data Visualization**: amCharts 5
- **Optimization**:
  - Code splitting and lazy loading
  - Compression (Brotli, Gzip)
  - Cache optimization
  - PostCSS transformations

## Performance Optimizations

The project implements several performance optimizations:

1. **Code Splitting**: Routes are lazy-loaded to reduce initial bundle size.
2. **Asset Optimization**: Images are optimized and properly sized for different devices.
3. **Compression**: Files are compressed using Brotli and Gzip.
4. **Caching Strategy**: Implements proper cache headers for static assets.
5. **CSS Optimization**: Uses PostCSS and cssnano to optimize CSS.
6. **Progressive Web App**: Service worker for offline capabilities and improved load times.

## License

[Copyright 2025 Baydar & Baydar. All rights reserved.]
