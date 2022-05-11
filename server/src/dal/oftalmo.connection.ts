import KnexObj, { Knex } from "knex";
import knexLogger from "../lib/knex/knex-logger";
import { optionsOftalmo } from "../config/knex";
import config from "../config";

let knex: Knex;

if (config.app.env === "test") {
  knex = KnexObj(optionsOftalmo);
} else {
  knex = knexLogger(KnexObj(optionsOftalmo));
}

export default knex;
