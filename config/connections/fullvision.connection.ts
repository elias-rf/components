import { knexLogger } from "@/utils/knex-logger";
import KnexObj, { Knex } from "knex";
import { config } from "../index";

let knexFullvision: Knex;

if (config.app.env === "test") {
  knexFullvision = KnexObj(config.db.fullvision);
} else {
  knexFullvision = knexLogger(KnexObj(config.db.fullvision));
}

export default knexFullvision;
