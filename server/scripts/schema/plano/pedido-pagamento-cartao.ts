import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class PedidoPagamentoCartao extends ModelBase {
  static tableName = "PedidoPagamentoCartao";
  static idColumn = [];

  CdEmpresa!: number;
  CdFilial!: number;
  NumPedido!: number;
  Sequencia!: number;
  CdAdministradora!: string;
  VlCartao!: number;
  NumParcelas!: number;
  

  static getFields() {
    return [
      "CdEmpresa",
      "CdFilial",
      "NumPedido",
      "Sequencia",
      "CdAdministradora",
      "VlCartao",
      "NumParcelas",
      ];
  }
}

PedidoPagamentoCartao.knex(connections.plano);

export type TPedidoPagamentoCartao = ModelObject<PedidoPagamentoCartao>;
