import path from 'path';

export default ({ env }) => ({
  connection: {
    client: env('DATABASE_CLIENT', 'sqlite'),

    connection:
      env('DATABASE_CLIENT') === 'postgres'
        ? {
            connectionString: env('DATABASE_URL'),
            ssl:
              env.bool('DATABASE_SSL', false) && {
                rejectUnauthorized: env.bool(
                  'DATABASE_SSL_REJECT_UNAUTHORIZED',
                  true
                ),
              },
          }
        : {
            filename: path.join(
              __dirname,
              '..',
              '..',
              env('DATABASE_FILENAME', '.tmp/data.db')
            ),
          },

    pool: {
      min: env.int('DATABASE_POOL_MIN', 2),
      max: env.int('DATABASE_POOL_MAX', 10),
    },

    acquireConnectionTimeout: env.int('DATABASE_CONNECTION_TIMEOUT', 60000),
  },
});
