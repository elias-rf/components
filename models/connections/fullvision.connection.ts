import { config } from "@mono/config";
import { knexLogger } from "@mono/utils/knex-logger";
import KnexObj, { Knex } from "knex";

let knexFullvision: Knex;

if (config.app.env === "test") {
  knexFullvision = KnexObj(config.db.fullvision);
} else {
  knexFullvision = knexLogger(KnexObj(config.db.fullvision));
}

export default knexFullvision;
