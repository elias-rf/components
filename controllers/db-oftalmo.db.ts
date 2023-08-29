import { OrmDatabase } from "@/orm";
import Knex from "knex";
import { config } from "@/config";

export const dbOftalmo = new OrmDatabase(Knex(config.db.oftalmo));
