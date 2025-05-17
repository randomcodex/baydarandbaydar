import fs from 'fs';
import path from 'path';
import { create } from 'xmlbuilder2';
import fetch from 'node-fetch';
import zlib from 'zlib';
import { promisify } from 'util';

const config = {
  baseUrl: 'https://baydarandbaydar.com',
  outputPath: './public/sitemap.xml',
  compressOutput: false,
  notifySearchEngines: true,
  pages: [
    { loc: '/', priority: 1.0, changefreq: 'daily' },
    { loc: '/portfolio', priority: 0.8, changefreq: 'daily' },
    { loc: '/vision', priority: 0.8, changefreq: 'daily' },
    { loc: '/igm', priority: 0.7, changefreq: 'weekly' },
  ],
  searchEngines: [
    'https://www.google.com/ping?sitemap=',
    'https://www.bing.com/ping?sitemap=',
    'https://www.yandex.com/ping?sitemap=',
  ]
};

const pingSearchEngines = async () => {
  if (!config.notifySearchEngines) return;
  
  const sitemapUrl = `${config.baseUrl}/sitemap.xml`;
  const pingUrls = config.searchEngines.map(engine => `${engine}${encodeURIComponent(sitemapUrl)}`);
  
  try {
    const results = await Promise.allSettled(
      pingUrls.map(url => fetch(url, { method: 'GET' }))
    );
    
    const succeeded = results.filter(r => r.status === 'fulfilled').length;
    console.log(`✅ ${succeeded}/${pingUrls.length} search engines notified successfully.`);
    
    results
      .filter(r => r.status === 'rejected')
      .forEach((result, i) => {
        console.warn(`⚠️ Failed to notify search engine (${pingUrls[i]}):`, result.reason);
      });
  } catch (error) {
    console.error('❌ Error notifying search engines:', error);
  }
};

const generateSitemapContent = () => {
  const urlset = create({ version: '1.0', encoding: 'UTF-8' })
    .ele('urlset', { xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9' });

  const now = new Date().toISOString();

  config.pages.forEach((page) => {
    const url = urlset.ele('url');
    url.ele('loc').txt(`${config.baseUrl}${page.loc}`);
    url.ele('lastmod').txt(page.lastmod || now);
    url.ele('priority').txt(page.priority);
    url.ele('changefreq').txt(page.changefreq);
  });

  return urlset.end({ prettyPrint: true });
};

const generateSitemap = async () => {
  try {
    const xml = generateSitemapContent();
    const outputDir = path.dirname(config.outputPath);
    
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    if (config.compressOutput) {
      const gzip = promisify(zlib.gzip);
      const compressed = await gzip(Buffer.from(xml, 'utf8'));
      fs.writeFileSync(`${config.outputPath}.gz`, compressed);
      console.log(`✅ Sitemap generated and compressed successfully at ${config.outputPath}.gz`);
    } else {
      fs.writeFileSync(config.outputPath, xml, 'utf8');
      console.log(`✅ Sitemap generated successfully at ${config.outputPath}`);
    }

    await pingSearchEngines();
  } catch (error) {
    console.error('❌ Error generating sitemap:', error);
    process.exit(1);
  }
};

generateSitemap();