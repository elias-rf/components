import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class PedidoPagamentosEntrada extends ModelBase {
  static tableName = "PedidoPagamentosEntrada";
  static idColumn = [];

  CdFilial!: number;
  NumPedido!: number;
  Tipo!: string;
  DtVencimento!: Date;
  Valor!: number;
  Seq!: number;
  

  static getFields() {
    return [
      "CdFilial",
      "NumPedido",
      "Tipo",
      "DtVencimento",
      "Valor",
      "Seq",
      ];
  }
}

PedidoPagamentosEntrada.knex(connections.plano);

export type TPedidoPagamentosEntrada = ModelObject<PedidoPagamentosEntrada>;
