import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const baseUrl = 'https://releafe.nl';

// Hauptseiten der Website
const staticRoutes = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/wachtlijst', changefreq: 'weekly', priority: '0.8' },
  { path: '/kennisbank', changefreq: 'weekly', priority: '0.8' },
  { path: '/mentaal-fit', changefreq: 'monthly', priority: '0.7' },
  { path: '/mentale-klachten', changefreq: 'monthly', priority: '0.7' },
  { path: '/releafe-app', changefreq: 'monthly', priority: '0.7' },
  { path: '/releafe-dashboard', changefreq: 'monthly', priority: '0.7' },
  { path: '/privacy', changefreq: 'yearly', priority: '0.5' },
  { path: '/terms', changefreq: 'yearly', priority: '0.5' },
];

// Kennisbank-Artikel (alle 18) — bei neuen Artikeln hier ergänzen
const kennisbankArticles = [
  'Wat kost een burn-out een werkgever echt?',
  'Hoe herken je mentale overbelasting bij medewerkers?',
  'Zo verlaag je verzuim in je bedrijf',
  'Wat is een platform voor mentaal welzijn op het werk?',
  'Hoe helpt een werkgeversdashboard bij mentale preventie?',
  'Waarom privacy essentieel is bij mentale gezondheid op de werkvloer',
  'Hoe mentale klachten leiden tot productiviteitsverlies op de werkvloer',
  'De verborgen kosten van stress binnen organisaties',
  'Waarom preventie belangrijker is dan ooit binnen organisaties',
  'Preventie van burn-out: wat werkt echt?',
  'Wat is werkgeluk en waarom is het belangrijk?',
  'Hoe mentale gezondheid invloed heeft op werkgeluk',
  '7 manieren om werkgeluk binnen teams te vergroten',
  'Waarom mentale gezondheid een strategisch HR-thema is',
  'Hoe HR mentale belasting eerder zichtbaar kan maken',
  'Van reactief naar preventief HR-beleid',
  'Hoe organisaties mentale gezondheid bespreekbaar maken',
  'Mentale gezondheid en AVG: wat mag je als werkgever wel en niet weten?',
];

// Slug-Generator (identisch zur React-Komponente)
const generateSlug = (title) =>
  title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

const articleRoutes = kennisbankArticles.map((title) => ({
  path: `/kennisbank/${generateSlug(title)}`,
  changefreq: 'monthly',
  priority: '0.6',
}));

const routes = [...staticRoutes, ...articleRoutes];

const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${baseUrl}${route.path}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

const outputPath = path.join(__dirname, '../public/sitemap.xml');
fs.writeFileSync(outputPath, sitemapContent, 'utf-8');
console.log(`Sitemap generated: ${outputPath} (${routes.length} URLs)`);
