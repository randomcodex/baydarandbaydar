import fs from 'fs';
import path from 'path';
import { create } from 'xmlbuilder2';
import fetch from 'node-fetch';
import zlib from 'zlib';
import { promisify } from 'util';

const gzipPromise = promisify(zlib.gzip);

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
    // Run ping requests concurrently with a timeout
    const results = await Promise.allSettled(
      pingUrls.map(url => 
        fetch(url, { 
          method: 'GET',
          timeout: 3000 // 3 second timeout to prevent hanging
        }).catch(err => Promise.reject(err))
      )
    );

    const succeeded = results.filter(r => r.status === 'fulfilled').length;
    console.log(`✅ ${succeeded}/${pingUrls.length} search engines notified successfully.`);

    // Only log failures if there are any
    const failures = results.filter(r => r.status === 'rejected');
    if (failures.length > 0) {
      console.warn(`⚠️ Failed to notify ${failures.length} search engines.`);
    }
  } catch (error) {
    console.error('❌ Error notifying search engines:', error);
  }
};

const generateSitemap = async () => {
  try {
    const outputDir = path.dirname(config.outputPath);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    // Generate XML directly to string - more memory efficient
    const now = new Date().toISOString();
    const urlset = create({ version: '1.0', encoding: 'UTF-8' })
      .ele('urlset', { xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9' });

    // Add URLs one by one
    for (const page of config.pages) {
      const url = urlset.ele('url');
      url.ele('loc').txt(`${config.baseUrl}${page.loc}`);
      url.ele('lastmod').txt(page.lastmod || now);
      url.ele('priority').txt(page.priority);
      url.ele('changefreq').txt(page.changefreq);
    }

    const xml = urlset.end({ prettyPrint: false }); // Disable pretty print for smaller output
    
    if (config.compressOutput) {
      // Compress directly without reading file twice
      const compressed = await gzipPromise(Buffer.from(xml, 'utf8'));
      fs.writeFileSync(`${config.outputPath}.gz`, compressed);
      console.log(`✅ Compressed sitemap generated at ${config.outputPath}.gz`);
    } else {
      fs.writeFileSync(config.outputPath, xml, 'utf8');
      console.log(`✅ Sitemap generated at ${config.outputPath}`);
    }

    // Notify search engines in the background without waiting
    pingSearchEngines().catch(err => 
      console.error('❌ Error in background search engine notification:', err)
    );
    
  } catch (error) {
    console.error('❌ Error generating sitemap:', error);
    process.exit(1);
  }
};

generateSitemap();