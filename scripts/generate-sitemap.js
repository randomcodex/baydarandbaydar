import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const routes = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/portfolio', priority: '0.9', changefreq: 'weekly' },
  { path: '/vision', priority: '0.8', changefreq: 'monthly' },
  { path: '/igm', priority: '0.8', changefreq: 'monthly' },
]

const generateSitemap = () => {
  const baseUrl = process.env.VITE_SITE_URL || 'https://baydarandbaydar.com'
  const currentDate = new Date().toISOString().split('T')[0]
  const newsSitemap = null // placeholder for optional news or blog in future

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    route => `  <url>
    <loc>${baseUrl}${route.path}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>`

  const outputPath = path.join(__dirname, '../dist/sitemap.xml')

  const distDir = path.dirname(outputPath)
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true })
  }

  fs.writeFileSync(outputPath, sitemap)
  console.log('Sitemap generated successfully at dist/sitemap.xml')
}

generateSitemap()
