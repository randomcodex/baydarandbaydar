#!/bin/bash

# Netlify build script for automated optimization
echo "🚀 Starting Netlify build process..."

# Set NODE_ENV to production
export NODE_ENV=production

# Install dependencies with npm ci for faster, reliable builds
echo "📦 Installing dependencies..."
npm ci --prefer-offline --no-audit

# Type checking
echo "🔍 Running type checks..."
npm run type-check

# Linting
echo "🧹 Running linter..."
npm run lint

# Build the application
echo "🔨 Building application..."
npm run build

# Generate sitemap
echo "🗺️ Generating sitemap..."
npm run generate:sitemap

# Optimize images (placeholder - would need actual optimization tool)
echo "🖼️ Optimizing images..."
npm run optimize:images

echo "✅ Build completed successfully!"

# Check build size
if [ -d "dist" ]; then
  BUILD_SIZE=$(du -sh dist | cut -f1)
  echo "📊 Build size: $BUILD_SIZE"
fi

# Create build info file
echo "{\"buildTime\": \"$(date -u +%Y-%m-%dT%H:%M:%SZ)\", \"buildId\": \"$BUILD_ID\", \"commitSha\": \"$COMMIT_REF\"}" > dist/build-info.json

echo "🎉 Netlify build process completed!"
