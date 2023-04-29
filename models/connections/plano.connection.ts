import { config } from "@mono/config";
import { knexLogger } from "@mono/utils/knex-logger";
import KnexObj, { Knex } from "knex";

let knexPlano: Knex;

if (config.app.env === "test") {
  knexPlano = KnexObj(config.db.plano);
} else {
  knexPlano = knexLogger(KnexObj(config.db.plano));
}
export default knexPlano;
