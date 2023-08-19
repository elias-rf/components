import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class NotaEntradaPagamentos extends ModelBase {
  static tableName = "NotaEntradaPagamentos";
  static idColumn = [];

  CdFilial!: number;
  NumNota!: number;
  Serie!: string;
  Modelo!: string;
  CdFornecedor!: number;
  Sequencia!: number;
  NumDocumento!: number;
  DtVencimento!: Date;
  VlDocumento!: number;
  VlDeducao!: number;
  VlAcrescimo!: number;
  

  static getFields() {
    return [
      "CdFilial",
      "NumNota",
      "Serie",
      "Modelo",
      "CdFornecedor",
      "Sequencia",
      "NumDocumento",
      "DtVencimento",
      "VlDocumento",
      "VlDeducao",
      "VlAcrescimo",
      ];
  }
}

NotaEntradaPagamentos.knex(connections.plano);

export type TNotaEntradaPagamentos = ModelObject<NotaEntradaPagamentos>;
