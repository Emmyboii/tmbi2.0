// path: ./config/database.js

import { parse } from "pg-connection-string";

module.exports = ({ env }) => {
  const databaseUrl = env("DATABASE_URL");

  if (!databaseUrl) {
    throw new Error("DATABASE_URL is not set in .env");
  }

  const config = parse(databaseUrl);

  return {
    connection: {
      client: "postgres",
      connection: {
        host: config.host,
        port: config.port,
        database: config.database,
        user: config.user,
        password: config.password,
        ssl: env.bool("DATABASE_SSL", false)
          ? {
            rejectUnauthorized: env.bool(
              "DATABASE_SSL_REJECT_UNAUTHORIZED",
              false
            ),
          }
          : false,
      },
      pool: {
        min: env.int("DATABASE_POOL_MIN", 2),
        max: env.int("DATABASE_POOL_MAX", 10),
      },
      acquireConnectionTimeout: env.int(
        "DATABASE_CONNECTION_TIMEOUT",
        60000
      ),
    },
  };
};
