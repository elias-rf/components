import { config } from "@mono/config";
import { knexLogger } from "@mono/utils/knex-logger";
import KnexObj, { Knex } from "knex";

let connectionOftalmo: Knex;

if (config.app.env === "test") {
  connectionOftalmo = KnexObj(config.db.oftalmo);
} else {
  connectionOftalmo = knexLogger(KnexObj(config.db.oftalmo));
}

export default connectionOftalmo;
