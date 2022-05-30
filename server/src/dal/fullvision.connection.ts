import KnexObj, { Knex } from "knex";
import knexLogger from "../lib/knex/knex-logger";
import { optionsFullvision } from "../config/knex";
import config from "../config";

let knexFullvision: Knex;

if (config.app.env === "test") {
  knexFullvision = KnexObj(optionsFullvision);
} else {
  knexFullvision = knexLogger(KnexObj(optionsFullvision));
}

export default knexFullvision;
