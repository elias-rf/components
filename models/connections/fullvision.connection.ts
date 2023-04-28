import KnexObj, { Knex } from "knex";
import { config } from "../../config";
import { knexLogger } from "../../utils/knex-logger";

let knexFullvision: Knex;

if (config.app.env === "test") {
  knexFullvision = KnexObj(config.db.fullvision);
} else {
  knexFullvision = knexLogger(KnexObj(config.db.fullvision));
}

export default knexFullvision;
