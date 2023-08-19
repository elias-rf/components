import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class PedidoLogConferencia extends ModelBase {
  static tableName = "PedidoLogConferencia";
  static idColumn = [];

  CdEmpresa!: number;
  CdFilial!: number;
  NumPedido!: number;
  NumOrdemFaturamento!: number;
  DtInclusao!: Date;
  CdProduto!: string;
  NumLote!: string;
  Quantidade!: number;
  SaldoLote!: number;
  

  static getFields() {
    return [
      "CdEmpresa",
      "CdFilial",
      "NumPedido",
      "NumOrdemFaturamento",
      "DtInclusao",
      "CdProduto",
      "NumLote",
      "Quantidade",
      "SaldoLote",
      ];
  }
}

PedidoLogConferencia.knex(connections.plano);

export type TPedidoLogConferencia = ModelObject<PedidoLogConferencia>;
