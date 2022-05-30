import KnexObj, { Knex } from "knex";
import knexLogger from "../lib/knex/knex-logger";
import { optionsPlano } from "../config/knex";
import config from "../config";

let knexPlano: Knex;

if (config.app.env === "test") {
  knexPlano = KnexObj(optionsPlano);
} else {
  knexPlano = knexLogger(KnexObj(optionsPlano));
}
export default knexPlano;
