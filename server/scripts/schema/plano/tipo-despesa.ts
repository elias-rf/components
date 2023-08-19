import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TipoDespesa extends ModelBase {
  static tableName = "TipoDespesa";
  static idColumn = ["CdTipoDespesa"];

  CdTipoDespesa!: number;
  Historico!: string;
  

  static getFields() {
    return [
      "CdTipoDespesa",
      "Historico",
      ];
  }
}

TipoDespesa.knex(connections.plano);

export type TTipoDespesa = ModelObject<TipoDespesa>;
