/**
 * Global configuration for the LogiNews platform.
 * In production, replace MOCK with your real headless CMS endpoint
 * (Contentful, Sanity, Strapi, Hygraph, etc.).
 */
window.LOGINEWS_CONFIG = {
  // Set to false to use a real CMS
  USE_MOCK: true,

  // Real CMS settings (used when USE_MOCK = false)
  CMS: {
    // Example: Contentful
    // endpoint: 'https://cdn.contentful.com/spaces/YOUR_SPACE/environments/master/entries',
    // token: 'YOUR_ACCESS_TOKEN',
    // Example: Strapi
    // endpoint: 'https://your-strapi.example.com/api/articles',
    // token: 'YOUR_API_TOKEN',
    endpoint: '',
    token: '',
  },

  // Site metadata
  SITE: {
    name: 'LogiNews',
    company: 'National Logistics Company',
    tagline: 'News, insights and stories from the road',
    email: 'newsroom@nationallogistics.example',
    phone: '+1 (555) 010-2030',
  },

  // Pagination
  PAGE_SIZE: 6,
};