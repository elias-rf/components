import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TipoPagamento extends ModelBase {
  static tableName = "TipoPagamento";
  static idColumn = ["CdTipoPagamento"];

  CdTipoPagamento!: number;
  Descricao!: string;
  

  static getFields() {
    return [
      "CdTipoPagamento",
      "Descricao",
      ];
  }
}

TipoPagamento.knex(connections.plano);

export type TTipoPagamento = ModelObject<TipoPagamento>;
