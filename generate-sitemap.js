import SitemapGenerator from 'sitemap-generator';

// Create generator
const generator = SitemapGenerator('https://www.baydarandbaydar.com', {
  filepath: './sitemap.xml',
  stripQuerystring: true,
  maxEntriesPerFile: 50000,
  lastMod: true,
});

// Register event listeners
generator.on('done', () => {
  console.log('Sitemap successfully created!');
});

generator.on('error', (error) => {
  console.error('Error occurred:', error);
});

// Start the crawler
generator.start();