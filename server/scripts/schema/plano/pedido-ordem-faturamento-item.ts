import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class PedidoOrdemFaturamentoItem extends ModelBase {
  static tableName = "PedidoOrdemFaturamentoItem";
  static idColumn = [];

  CdEmpresa!: number;
  CdFilial!: number;
  NumPedido!: number;
  NumOrdemFaturamento!: number;
  Sequencia!: number;
  CdProduto!: string;
  Quantidade!: number;
  FgSituacao!: string;
  

  static getFields() {
    return [
      "CdEmpresa",
      "CdFilial",
      "NumPedido",
      "NumOrdemFaturamento",
      "Sequencia",
      "CdProduto",
      "Quantidade",
      "FgSituacao",
      ];
  }
}

PedidoOrdemFaturamentoItem.knex(connections.plano);

export type TPedidoOrdemFaturamentoItem = ModelObject<PedidoOrdemFaturamentoItem>;
