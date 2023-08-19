import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class Formulas extends ModelBase {
  static tableName = "Formulas";
  static idColumn = [];

  Origem!: string;
  Destino!: string;
  Formula!: string;
  

  static getFields() {
    return [
      "Origem",
      "Destino",
      "Formula",
      ];
  }
}

Formulas.knex(connections.plano);

export type TFormulas = ModelObject<Formulas>;
