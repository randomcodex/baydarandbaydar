# Baydar & Baydar - Premium Wine Imports

A modern, responsive website for Baydar & Baydar, showcasing premium wine imports from Italy.

## 🚀 Live Site

- **Production**: [https://baydarandbaydar.com](https://baydarandbaydar.com)
- **Staging**: [https://baydarandbaydar.netlify.app](https://baydarandbaydar.netlify.app)

## 🛠 Technology Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: SCSS with modern CSS features
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **State Management**: Zustand
- **Build Tool**: Vite with SWC
- **Deployment**: Netlify with auto-deployment from GitHub

## 📁 Project Structure

```
baydarandbaydar/
├── public/                    # Static assets
│   ├── _redirects            # Netlify SPA redirects
│   ├── assets/               # Images, fonts, icons
│   └── manifest.json         # PWA manifest
├── src/                      # Source code
│   ├── components/           # Reusable UI components
│   ├── pages/               # Page components (Home, Portfolio, etc.)
│   ├── ui/                  # Base UI components (Button, Card, etc.)
│   ├── hooks/               # Custom React hooks
│   ├── utils/               # Utility functions
│   ├── styles/              # SCSS styles
│   ├── animations/          # Framer Motion animations
│   ├── config/              # Environment & configuration
│   └── router/              # React Router setup
├── netlify/                 # Netlify-specific files
│   └── edge-functions/      # Edge functions
├── scripts/                 # Build scripts
└── netlify.toml            # Netlify configuration
```

## 🏗 Development Setup

### Prerequisites
- Node.js 20+
- npm 10+

### Installation
```bash
# Clone the repository
git clone https://github.com/randomcodex/baydarandbaydar.git
cd baydarandbaydar

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts
```bash
# Development
npm run dev              # Start dev server at localhost:3000
npm run dev:open         # Start dev server and open browser

# Building
npm run build            # Build for production
npm run build:production # Build for production + generate sitemap
npm run build:netlify    # Full build with type checking
npm run preview          # Preview production build

# Code Quality
npm run lint             # Run ESLint
npm run lint:fix         # Fix ESLint issues
npm run format           # Format code with Prettier
npm run type-check       # TypeScript type checking

# Utilities
npm run clean            # Clean dist folder
npm run generate:sitemap # Generate XML sitemap
npm run analyze          # Analyze bundle size
```

## 🚀 Deployment

### Netlify Configuration

The project is configured for automatic deployment on Netlify:

- **Build Command**: `npm install && npm run build:production`
- **Publish Directory**: `dist`
- **Node Version**: `20`

### Environment Variables

Set these in Netlify dashboard:

```env
NODE_ENV=production
VITE_SITE_URL=https://baydarandbaydar.com
VITE_API_BASE_URL=https://api.baydarandbaydar.com
VITE_COMPANY_EMAIL=baydarandbaydar@gmail.com
VITE_COMPANY_PHONE=+90 533 869 2852
VITE_GOOGLE_ANALYTICS_ID=YOUR_GA_ID
```

### Build Process

1. **Dependencies**: Install all packages including TypeScript
2. **Compilation**: Vite builds with SWC TypeScript compiler
3. **Optimization**: Asset minification, tree-shaking, code splitting
4. **Sitemap**: Auto-generated XML sitemap
5. **Deploy**: Static files deployed to CDN

### Deployment Fixes Applied

- ✅ **TypeScript Issue**: Moved TypeScript to devDependencies with proper installation
- ✅ **SPA Routing**: Added `_redirects` file for client-side routing
- ✅ **Build Command**: Optimized for Netlify environment
- ✅ **Environment Variables**: All required vars configured
- ✅ **Asset Optimization**: Proper caching and compression headers

## 🎨 Features

- **Responsive Design**: Mobile-first approach with modern CSS Grid/Flexbox
- **Performance Optimized**: Lazy loading, code splitting, optimized assets
- **SEO Ready**: Meta tags, structured data, XML sitemap
- **Accessibility**: WCAG compliant with proper ARIA labels
- **PWA Ready**: Service worker and manifest for app-like experience
- **Security**: Content Security Policy and security headers

## 🔧 Configuration Files

- `vite.config.ts` - Vite build configuration
- `netlify.toml` - Netlify deployment configuration  
- `tsconfig.json` - TypeScript configuration
- `package.json` - Dependencies and scripts
- `public/_redirects` - SPA routing fallback

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for Google's performance metrics
- **Bundle Size**: Optimized with tree-shaking and code splitting
- **Asset Optimization**: Images, fonts, and static assets optimized

## 🐛 Troubleshooting

### Common Issues

**Green Screen on Deployment**:
- Check browser console for JavaScript errors
- Verify all environment variables are set in Netlify
- Ensure build completed successfully

**Build Failures**:
- Verify Node.js version is 20+ in Netlify settings
- Check that all dependencies are properly installed
- Review Netlify build logs for specific errors

**404 Errors**:
- SPA redirects configured in both `netlify.toml` and `_redirects`
- Ensure publish directory is set to `dist`

## 📄 License

MIT License - see LICENSE file for details

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

---

**Baydar & Baydar** - Premium Wine Imports from Italy