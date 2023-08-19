import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class NumeroFormula extends ModelBase {
  static tableName = "NumeroFormula";
  static idColumn = ["CdFilial"];

  CdFilial!: number;
  NumUltFormula!: number;
  

  static getFields() {
    return [
      "CdFilial",
      "NumUltFormula",
      ];
  }
}

NumeroFormula.knex(connections.plano);

export type TNumeroFormula = ModelObject<NumeroFormula>;
