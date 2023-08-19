import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class NumeroNota extends ModelBase {
  static tableName = "NumeroNota";
  static idColumn = [];

  CdFilial!: number;
  NumUltNota!: number;
  Serie!: string;
  Modelo!: string;
  

  static getFields() {
    return [
      "CdFilial",
      "NumUltNota",
      "Serie",
      "Modelo",
      ];
  }
}

NumeroNota.knex(connections.plano);

export type TNumeroNota = ModelObject<NumeroNota>;
