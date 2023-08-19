import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class PedidoPagamentoObservacao extends ModelBase {
  static tableName = "PedidoPagamentoObservacao";
  static idColumn = [];

  CdEmpresa!: number;
  CdFilial!: number;
  NumPedido!: number;
  Tipo!: string;
  Observacao!: string;
  

  static getFields() {
    return [
      "CdEmpresa",
      "CdFilial",
      "NumPedido",
      "Tipo",
      "Observacao",
      ];
  }
}

PedidoPagamentoObservacao.knex(connections.plano);

export type TPedidoPagamentoObservacao = ModelObject<PedidoPagamentoObservacao>;
