const Knex = require("knex");
const path = require("path");

const configOftalmo = {
  client: "sqlite",
  connection: {
    filename: path.join(__dirname, "../../oftalmo.sqlite"),
  },
  debug: false,
  useNullAsDefault: true,
};

const configPlano = {
  client: "sqlite",
  connection: {
    filename: path.join(__dirname, "../../plano.sqlite"),
  },
  debug: false,
  useNullAsDefault: true,
};

const oftalmo = Knex(configOftalmo);
const plano = Knex(configPlano);

module.exports = { oftalmo, plano };
