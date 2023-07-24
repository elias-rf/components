import dotenv from "dotenv-flow";
import type { Knex } from "knex";
import tls from "tls";

dotenv.config({
  silent: true,
});

tls.DEFAULT_MIN_VERSION = "TLSv1";

interface Config {
  app: {
    port: number;
    env: string;
    mock?: boolean;
  };
  db: {
    sys: Knex.Config;
    oftalmo: Knex.Config;
    plano: Knex.Config;
    fullvision: Knex.Config;
  };
  auth: {
    expiration: number;
    secret: string;
  };
}

export const config: Config = {
  app: {
    port: parseInt(process.env.PORT ? process.env.PORT : "3000"),
    env: process.env.NODE_ENV || "development",
    mock: process.env.MOCK === "true",
  },
  auth: {
    expiration: parseInt(process.env.auth_expiration || "3600"),
    secret: process.env.auth_secret || "S3gr3d0",
  },
  db: {
    sys: {
      client: "better-sqlite3",
      debug: false,
      useNullAsDefault: true,
      connection: {
        filename: "./sys.sqlite",
      },
    },
    oftalmo: {
      client: "mssql",
      debug: false,
      useNullAsDefault: true,
      connection: {
        database: process.env.db_oftalmo_connection_database,
        host: process.env.db_oftalmo_connection_host,
        user: process.env.db_oftalmo_connection_user,
        password: process.env.db_oftalmo_connection_password,
        options: {
          trustServerCertificate: true,
          enableArithAbort: true,
          tdsVersion: "7_3_B",
        },
      },
    },
    plano: {
      client: "mssql",
      debug: false,
      useNullAsDefault: true,
      connection: {
        database: process.env.db_plano_connection_database,
        host: process.env.db_plano_connection_host,
        user: process.env.db_plano_connection_user,
        password: process.env.db_plano_connection_password,
        options: {
          enableArithAbort: true,
          trustServerCertificate: true,
        },
      },
    },
    fullvision: {
      client: "mssql",
      debug: false,
      useNullAsDefault: true,
      connection: {
        database: process.env.db_fullvision_connection_database,
        host: process.env.db_fullvision_connection_host,
        user: process.env.db_fullvision_connection_user,
        password: process.env.db_fullvision_connection_password,
        options: {
          enableArithAbort: true,
          trustServerCertificate: true,
        },
      },
    },
  },
};
