import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class PedidoItemPedCliente extends ModelBase {
  static tableName = "PedidoItemPedCliente";
  static idColumn = [];

  CdFilial!: number;
  NumPedido!: number;
  Tipo!: string;
  Sequencia!: number;
  NumPedCliente!: string;
  ItemPedCliente!: string;
  

  static getFields() {
    return [
      "CdFilial",
      "NumPedido",
      "Tipo",
      "Sequencia",
      "NumPedCliente",
      "ItemPedCliente",
      ];
  }
}

PedidoItemPedCliente.knex(connections.plano);

export type TPedidoItemPedCliente = ModelObject<PedidoItemPedCliente>;
