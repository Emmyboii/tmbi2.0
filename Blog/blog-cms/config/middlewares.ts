module.exports = [
  'strapi::errors',
  {
    name: 'strapi::cors',
    config: {
      origin: [
        'http://localhost:3001',
        'http://localhost:3000',
        'https://tmbi-black.vercel.app',
        'https://thronebusinessinstituteswitzerland.com',
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
