import KnexObj, { Knex } from "knex";
import { config } from "../config";
import { knexLogger } from "../lib/knex/knex-logger";

let knexPlano: Knex;

if (config.app.env === "test") {
  knexPlano = KnexObj(config.db.plano);
} else {
  knexPlano = knexLogger(KnexObj(config.db.plano));
}
export default knexPlano;
