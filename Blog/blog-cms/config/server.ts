// config/server.js
module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  allowedHosts: [
    'localhost',
    '127.0.0.1',
    'devm.westus2.cloudapp.azure.com'
  ]
});
