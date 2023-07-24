import { config } from "@/config";
import { knexLogger } from "@/utils/knex-logger";
import KnexObj, { Knex } from "knex";

let connectionSys: Knex;

if (config.app.env === "test") {
  connectionSys = KnexObj(config.db.sys);
} else {
  connectionSys = knexLogger(KnexObj(config.db.sys));
}

export default connectionSys;
