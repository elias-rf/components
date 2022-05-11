import config from "../config/index";

import type { Knex } from "knex";

export const optionsPlano: Knex.Config = {
  client: "mssql",
  connection: {
    host: config.db.plano.connection?.host,
    user: config.db.plano.connection?.user,
    password: config.db.plano.connection?.password,
    database: config.db.plano.connection?.database,
    options: {
      enableArithAbort: true,
      trustServerCertificate: true,
    },
  },
  debug: false,
  useNullAsDefault: true,
};

export const optionsFullvision: Knex.Config = {
  client: "mssql",
  connection: {
    host: config.db.fullvision.connection?.host,
    user: config.db.fullvision.connection?.user,
    password: config.db.fullvision.connection?.password,
    database: config.db.fullvision.connection?.database,
    options: {
      enableArithAbort: true,
      trustServerCertificate: true,
    },
  },
  debug: false,
  useNullAsDefault: true,
};

export const optionsOftalmo: Knex.Config = {
  client: "mssql",
  connection: {
    host: config.db.oftalmo.connection?.host,
    user: config.db.oftalmo.connection?.user,
    password: config.db.oftalmo.connection?.password,
    database: config.db.oftalmo.connection?.database,
    options: {
      trustServerCertificate: true,
      enableArithAbort: true,
      tdsVersion: "7_3_B",
    },
  },
  debug: false,
  useNullAsDefault: true,
};

if (config.app.mock === true) {
  optionsOftalmo.client = "mysql";
  optionsOftalmo.connection = {
    host: "localhost",
    port: 3306,
    user: "sa",
    password: "123",
    database: "OftalmoXPProducao",
  };
  optionsPlano.client = "mysql";
  optionsPlano.connection = {
    host: "localhost",
    port: 3306,
    user: "sa",
    password: "123",
    database: "Visiontech",
  };
  optionsFullvision.client = "mysql";
  optionsFullvision.connection = {
    host: "localhost",
    port: 3306,
    user: "sa",
    password: "123",
    database: "Visiontech",
  };
}
