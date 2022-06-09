import KnexObj, { Knex } from "knex";
import config from "../config";
import { optionsOftalmo } from "../config/knex";
import knexLogger from "../lib/knex/knex-logger";

let knexOftalmo: Knex;

if (config.app.env === "test") {
  knexOftalmo = KnexObj(optionsOftalmo);
} else {
  knexOftalmo = knexLogger(KnexObj(optionsOftalmo));
}

export default knexOftalmo;
