import KnexObj, { Knex } from "knex";
import knexLogger from "../lib/knex/knex-logger";
import { optionsPlano } from "../config/knex";
import config from "../config";

let knex: Knex;

if (config.app.env === "test") {
  knex = KnexObj(optionsPlano);
} else {
  knex = knexLogger(KnexObj(optionsPlano));
}
export default knex;
