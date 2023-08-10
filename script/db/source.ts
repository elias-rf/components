import Knex from "knex";

export const source = Knex({
  client: "mssql",
  debug: false,
  useNullAsDefault: true,
  connection: {
    database: "OftalmoXPProducao",
    host: "192.168.192.10",
    user: "sa",
    password: "#$3pol3-3",
    options: {
      trustServerCertificate: true,
      enableArithAbort: true,
      tdsVersion: "7_3_B",
    },
  },
});
