import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class HistoricoTitCoBr extends ModelBase {
  static tableName = "HistoricoTitCoBr";
  static idColumn = [];

  CdFilial!: number;
  NumDoc!: number;
  Serie!: string;
  SiglaDoc!: string;
  ItemDoc!: number;
  Data!: Date;
  Horario!: Date;
  usuario!: string;
  Historico!: string;
  Modelo!: string;
  

  static getFields() {
    return [
      "CdFilial",
      "NumDoc",
      "Serie",
      "SiglaDoc",
      "ItemDoc",
      "Data",
      "Horario",
      "usuario",
      "Historico",
      "Modelo",
      ];
  }
}

HistoricoTitCoBr.knex(connections.plano);

export type THistoricoTitCoBr = ModelObject<HistoricoTitCoBr>;
