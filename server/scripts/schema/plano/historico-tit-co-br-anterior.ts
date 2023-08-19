import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class HistoricoTitCoBrAnterior extends ModelBase {
  static tableName = "HistoricoTitCoBrAnterior";
  static idColumn = [];

  CdFilial!: number;
  NumDoc!: number;
  Serie!: string;
  SiglaDoc!: string;
  ItemDoc!: number;
  Data!: Date;
  Horario!: Date;
  Usuario!: string;
  Historico!: string;
  

  static getFields() {
    return [
      "CdFilial",
      "NumDoc",
      "Serie",
      "SiglaDoc",
      "ItemDoc",
      "Data",
      "Horario",
      "Usuario",
      "Historico",
      ];
  }
}

HistoricoTitCoBrAnterior.knex(connections.plano);

export type THistoricoTitCoBrAnterior = ModelObject<HistoricoTitCoBrAnterior>;
