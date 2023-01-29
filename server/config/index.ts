// @ts-check
import dotenv from "dotenv-flow";
import tls from "tls";

dotenv.config();
// const envFile = process.env.NODE_ENV ? `.env.${process.env.NODE_END}` : ".env";
// dotenv.config({ path: envFile });

tls.DEFAULT_MIN_VERSION = "TLSv1";

interface Config {
  app: {
    port?: string;
    env?: string;
    mock?: boolean;
  };
  db: {
    local: { connection: any };
    oftalmo: { connection: any };
    plano: { connection: any };
    fullvision: { connection: any };
  };
  auth: {
    expiration?: string;
    secret?: string;
  };
}

export const config: Config = {
  app: {
    port: process.env.PORT,
    env: process.env.NODE_ENV,
    mock: process.env.MOCK === "true",
  },
  auth: {
    expiration: process.env.auth_expiration,
    secret: process.env.auth_secret,
  },
  db: {
    local: {
      connection: process.env.db_local_connection,
    },
    oftalmo: {
      connection: {
        database: process.env.db_oftalmo_connection_database,
        host: process.env.db_oftalmo_connection_host,
        user: process.env.db_oftalmo_connection_user,
        password: process.env.db_oftalmo_connection_password,
      },
    },
    plano: {
      connection: {
        database: process.env.db_plano_connection_database,
        host: process.env.db_plano_connection_host,
        user: process.env.db_plano_connection_user,
        password: process.env.db_plano_connection_password,
      },
    },
    fullvision: {
      connection: {
        database: process.env.db_fullvision_connection_database,
        host: process.env.db_fullvision_connection_host,
        user: process.env.db_fullvision_connection_user,
        password: process.env.db_fullvision_connection_password,
      },
    },
  },
};
