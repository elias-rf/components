import KnexObj, { Knex } from "knex";
import { config } from "../config";
import { optionsFullvision } from "../config/knex";
import { knexLogger } from "../lib/knex/knex-logger";

let knexFullvision: Knex;

if (config.app.env === "test") {
  knexFullvision = KnexObj(optionsFullvision);
} else {
  knexFullvision = knexLogger(KnexObj(optionsFullvision));
}

export default knexFullvision;
