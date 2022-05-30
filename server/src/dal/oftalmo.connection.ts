import KnexObj, { Knex } from "knex";
import knexLogger from "../lib/knex/knex-logger";
import { optionsOftalmo } from "../config/knex";
import config from "../config";

let knexOftalmo: Knex;

if (config.app.env === "test") {
  knexOftalmo = KnexObj(optionsOftalmo);
} else {
  knexOftalmo = knexLogger(KnexObj(optionsOftalmo));
}

export default knexOftalmo;
