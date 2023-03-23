import KnexObj, { Knex } from "knex";
import { config } from "../config";
import { knexLogger } from "../lib/knex/knex-logger";

let connectionOftalmo: Knex;

if (config.app.env === "test") {
  connectionOftalmo = KnexObj(config.db.oftalmo);
} else {
  connectionOftalmo = knexLogger(KnexObj(config.db.oftalmo));
}

export default connectionOftalmo;
