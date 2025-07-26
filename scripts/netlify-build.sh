echo "Starting Netlify build process..."

export NODE_ENV=production

echo "Installing dependencies..."
npm ci --prefer-offline --no-audit

echo "Running type checks..."
npm run type-check

echo "Running linter..."
npm run lint

echo "Building application..."
npm run build

echo "Generating sitemap..."
npm run generate:sitemap

echo "Optimizing images..."
npm run optimize:images

echo "Build completed successfully!"

if [ -d "dist" ]; then
  BUILD_SIZE=$(du -sh dist | cut -f1)
  echo "Build size: $BUILD_SIZE"
fi

echo "{\"buildTime\": \"$(date -u +%Y-%m-%dT%H:%M:%SZ)\", \"buildId\": \"$BUILD_ID\", \"commitSha\": \"$COMMIT_REF\"}" > dist/build-info.json

echo "Netlify build