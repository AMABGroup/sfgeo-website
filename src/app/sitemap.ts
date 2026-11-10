import { MetadataRoute } from 'next';

type Route = {
  path: string;
  lastModified: string;
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
  priority: number;
};

// lastModified is a literal per route and moves only when that page's
// content changes — a shared build-time timestamp is ignored by Google.
// Set from each route's last content commit (git log -1 --format=%cs -- src/app/<route>/; for '' and /faq
// also src/data/faqs.ts) on 10 Nov 2026. When you change a page's words, move its date in the same commit.
const ROUTES: Route[] = [
  { path: '', lastModified: '2026-11-11', changeFrequency: 'weekly', priority: 1.0 },
  { path: '/about', lastModified: '2026-11-06', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/services', lastModified: '2026-11-06', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/geotechnical', lastModified: '2026-11-10', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/environmental', lastModified: '2026-11-10', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/geotechnical-investigations', lastModified: '2026-11-11', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/site-classification', lastModified: '2026-11-11', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/drilling', lastModified: '2026-11-10', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/borehole-drilling', lastModified: '2026-11-06', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/subcontract-drilling', lastModified: '2026-11-10', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/tight-access-drilling', lastModified: '2026-11-10', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/concrete-coring', lastModified: '2026-11-10', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/other-services', lastModified: '2026-11-02', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/construction-phase-support', lastModified: '2026-11-10', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/geotechnical-assessments', lastModified: '2026-11-10', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/geotechnical-design', lastModified: '2026-11-10', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/geotechnical-report-cost-sydney', lastModified: '2026-11-11', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/projects', lastModified: '2026-11-11', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/geotechnical-engineer-north-shore', lastModified: '2026-11-11', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/geotechnical-engineer-eastern-suburbs', lastModified: '2026-11-11', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/geotechnical-engineer-inner-west', lastModified: '2026-11-11', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/geotechnical-engineer-parramatta', lastModified: '2026-11-11', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/geotechnical-engineer-hills-district', lastModified: '2026-11-11', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/geotechnical-engineer-south-west-sydney', lastModified: '2026-11-11', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/geotechnical-engineer-canterbury-bankstown', lastModified: '2026-11-11', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/geotechnical-engineer-st-george-sutherland-shire', lastModified: '2026-11-11', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/faq', lastModified: '2026-11-11', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/contact', lastModified: '2026-11-10', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/privacy-policy', lastModified: '2026-11-01', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/terms-and-conditions', lastModified: '2026-09-09', changeFrequency: 'yearly', priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://sfgeo.com.au';

  return ROUTES.map(({ path, lastModified, changeFrequency, priority }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(lastModified),
    changeFrequency,
    priority,
  }));
}
