export default function sitemap() {
  const baseUrl = 'https://starwaywebdigital.com';
  
  const routes = [
    '', '/services', '/portfolio', '/about', '/contact', '/plans', '/services/brand-identity-design', '/services/ppc-management-services', '/services/social-media-marketing', '/services/google-maps-optimization', '/services/content-marketing-services', '/services/search-engine-optimization', '/services/ui-ux-design', '/services/ai-search-optimization', '/services/web-app-development'
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'monthly',
    priority: route === '' ? 1.0 : 0.8,
  }));
}