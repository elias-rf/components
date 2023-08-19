import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class NotaAgrupamento extends ModelBase {
  static tableName = "NotaAgrupamento";
  static idColumn = [];

  CdEmpresa!: number;
  CdFilial!: number;
  NumNotaAgrupada!: number;
  SerieNotaAgrupada!: string;
  ModeloNotaAgrupada!: string;
  NumAgrupamento!: number;
  DtInclusao!: Date;
  NumNotaAgrupamento!: number;
  SerieNotaAgrupamento!: string;
  ModeloNotaAgrupamento!: string;
  

  static getFields() {
    return [
      "CdEmpresa",
      "CdFilial",
      "NumNotaAgrupada",
      "SerieNotaAgrupada",
      "ModeloNotaAgrupada",
      "NumAgrupamento",
      "DtInclusao",
      "NumNotaAgrupamento",
      "SerieNotaAgrupamento",
      "ModeloNotaAgrupamento",
      ];
  }
}

NotaAgrupamento.knex(connections.plano);

export type TNotaAgrupamento = ModelObject<NotaAgrupamento>;
