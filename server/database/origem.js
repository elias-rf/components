const Knex = require("knex");
const configOftalmo = {
  client: "mssql",
  connection: {
    host: "192.168.192.10",
    user: "sa",
    password: "#$3pol3-3",
    database: "OftalmoXPProducao",
    options: {
      enableArithAbort: true,
      trustServerCertificate: true,
    },
  },
  debug: false,
  useNullAsDefault: true,
};
const configPlano = {
  client: "mssql",
  connection: {
    host: "192.168.192.10",
    user: "sa",
    password: "#$3pol3-3",
    database: "Visiontech",
    options: {
      enableArithAbort: true,
      trustServerCertificate: true,
    },
  },
  debug: false,
  useNullAsDefault: true,
};

const oftalmo = Knex(configOftalmo);
const plano = Knex(configPlano);

module.exports = { oftalmo, plano };
