module.exports = [
  'strapi::errors',
  {
    name: 'strapi::cors',
    config: {
      origin: [
        'http://localhost:3001',
        'https://my-frontend.netlify.app',
        'https://my-production-site.com',
      ],
      credentials: true,
    },
  },
  'strapi::security',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
