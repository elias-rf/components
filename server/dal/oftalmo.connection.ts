import KnexObj, { Knex } from "knex";
import { config } from "../config";
import { knexLogger } from "../lib/knex/knex-logger";

let knexOftalmo: Knex;

if (config.app.env === "test") {
  knexOftalmo = KnexObj(config.db.oftalmo);
} else {
  knexOftalmo = knexLogger(KnexObj(config.db.oftalmo));
}

export default knexOftalmo;
