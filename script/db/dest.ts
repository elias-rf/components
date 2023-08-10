import Knex from "knex";

export const dest = Knex({
  client: "mssql",
  debug: false,
  useNullAsDefault: true,
  connection: {
    database: "OftalmoXPProducao",
    host: "localhost",
    user: "sa",
    password: "1qaz@WSX",
    options: {
      trustServerCertificate: true,
      enableArithAbort: true,
      tdsVersion: "7_3_B",
    },
  },
});
