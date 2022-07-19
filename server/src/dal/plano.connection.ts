import KnexObj, { Knex } from "knex";
import { config } from "../config";
import { optionsPlano } from "../config/knex";
import { knexLogger } from "../lib/knex/knex-logger";

let knexPlano: Knex;

if (config.app.env === "test") {
  knexPlano = KnexObj(optionsPlano);
} else {
  knexPlano = knexLogger(KnexObj(optionsPlano));
}
export default knexPlano;
