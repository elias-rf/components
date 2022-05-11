import KnexObj, { Knex } from "knex";
import knexLogger from "../lib/knex/knex-logger";
import { optionsFullvision } from "../config/knex";
import config from "../config";

let knex: Knex;

if (config.app.env === "test") {
  knex = KnexObj(optionsFullvision);
} else {
  knex = knexLogger(KnexObj(optionsFullvision));
}

export default knex;
