import { env } from '../config'

interface SitemapUrl {
  url: string
  lastmod?: string
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  priority?: number
}

const sitemapUrls: SitemapUrl[] = [
  {
    url: '/',
    changefreq: 'weekly',
    priority: 1.0,
  },
  {
    url: '/about',
    changefreq: 'monthly',
    priority: 0.8,
  },
  {
    url: '/wines',
    changefreq: 'weekly',
    priority: 0.9,
  },
  {
    url: '/knowledge',
    changefreq: 'weekly',
    priority: 0.7,
  },
  {
    url: '/contact',
    changefreq: 'monthly',
    priority: 0.6,
  },
]

export const generateSitemap = (): string => {
  const currentDate = new Date().toISOString().split('T')[0]

  const urlElements = sitemapUrls
    .map(({ url, lastmod, changefreq, priority }) => {
      return `  <url>
    <loc>${env.SITE_URL}${url}</loc>
    <lastmod>${lastmod || currentDate}</lastmod>
    <changefreq>${changefreq || 'monthly'}</changefreq>
    <priority>${priority || 0.5}</priority>
  </url>`
    })
    .join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlElements}
</urlset>`
}

export const generateRobotsTxt = (): string => {
  return `User-agent: *
Allow: /

Sitemap: ${env.SITE_URL}/sitemap.xml`
}
