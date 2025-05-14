/**
 * This script generates a sitemap.xml file for the website.
 * It dynamically creates entries for each page with their respective priority, last modified date, and change frequency.
 * The generated sitemap is saved in the root directory.
 * After generating the sitemap, search engines are notified.
 */

import fs from 'fs';
import { create } from 'xmlbuilder2';
import fetch from 'node-fetch';

const pingSearchEngines = async () => {
  const sitemapUrl = 'https://baydarandbaydar.com/sitemap.xml';
  try {
    await fetch(`https://www.google.com/ping?sitemap=${sitemapUrl}`);
    await fetch(`https://www.bing.com/ping?sitemap=${sitemapUrl}`);
    console.log('Search engines notified of sitemap update.');
  } catch (error) {
    console.error('Error notifying search engines:', error);
  }
};

const generateSitemap = () => {
  const baseUrl = 'https://baydarandbaydar.com';
  const pages = [
    { loc: '/', priority: 1.0, lastmod: new Date().toISOString(), changefreq: 'daily' },
    { loc: '/vision', priority: 0.8, lastmod: new Date().toISOString(), changefreq: 'daily' },
    { loc: '/brands', priority: 0.8, lastmod: new Date().toISOString(), changefreq: 'daily' },
    { loc: '/igm', priority: 0.7, lastmod: new Date().toISOString(), changefreq: 'weekly' },
  ];

  const urlset = create({ version: '1.0', encoding: 'UTF-8' })
    .ele('urlset', { xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9' });

  pages.forEach((page) => {
    const url = urlset.ele('url');
    url.ele('loc').txt(`${baseUrl}${page.loc}`);
    url.ele('lastmod').txt(page.lastmod);
    url.ele('priority').txt(page.priority);
    url.ele('changefreq').txt(page.changefreq);
  });

  const xml = urlset.end({ prettyPrint: true });

  // Write the sitemap to the root directory
  fs.writeFileSync('./sitemap.xml', xml, 'utf8');
  console.log('Sitemap generated successfully!');

  // Notify search engines
  pingSearchEngines();
};

generateSitemap();