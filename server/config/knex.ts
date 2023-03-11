import { config } from "./index";

import type { Knex } from "knex";

export const optionsPlano: Knex.Config = config.db.plano;

export const optionsFullvision: Knex.Config = config.db.fullvision;

export const optionsOftalmo: Knex.Config = config.db.oftalmo;
