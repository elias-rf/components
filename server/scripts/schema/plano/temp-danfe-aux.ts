import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TempDanfeAux extends ModelBase {
  static tableName = "TempDanfeAux";
  static idColumn = [];

  CdFilial!: number;
  NumNota!: number;
  Serie!: string;
  Modelo!: string;
  SequenciaNota!: number;
  Sequencia!: number;
  Descricao!: string;
  

  static getFields() {
    return [
      "CdFilial",
      "NumNota",
      "Serie",
      "Modelo",
      "SequenciaNota",
      "Sequencia",
      "Descricao",
      ];
  }
}

TempDanfeAux.knex(connections.plano);

export type TTempDanfeAux = ModelObject<TempDanfeAux>;
