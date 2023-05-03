import { config } from "@/config";
import { knexLogger } from "@/utils/knex-logger";
import KnexObj, { Knex } from "knex";

let connectionOftalmo: Knex;

if (config.app.env === "test") {
  connectionOftalmo = KnexObj(config.db.oftalmo);
} else {
  connectionOftalmo = knexLogger(KnexObj(config.db.oftalmo));
}

export default connectionOftalmo;
