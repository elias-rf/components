import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class PedidoPagamentoFinanciamento extends ModelBase {
  static tableName = "PedidoPagamentoFinanciamento";
  static idColumn = [];

  CdFilial!: number;
  NumPedido!: number;
  CdFinanceira!: number;
  NumParcelas!: number;
  VlParcela!: number;
  DtUltAtualizacao!: Date;
  

  static getFields() {
    return [
      "CdFilial",
      "NumPedido",
      "CdFinanceira",
      "NumParcelas",
      "VlParcela",
      "DtUltAtualizacao",
      ];
  }
}

PedidoPagamentoFinanciamento.knex(connections.plano);

export type TPedidoPagamentoFinanciamento = ModelObject<PedidoPagamentoFinanciamento>;
