import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ItemPedidoDescServico extends ModelBase {
  static tableName = "ItemPedidoDescServico";
  static idColumn = [];

  CdFilial!: number;
  NumPedido!: number;
  Tipo!: string;
  Sequencia!: number;
  DescricaoServico!: string;
  

  static getFields() {
    return [
      "CdFilial",
      "NumPedido",
      "Tipo",
      "Sequencia",
      "DescricaoServico",
      ];
  }
}

ItemPedidoDescServico.knex(connections.plano);

export type TItemPedidoDescServico = ModelObject<ItemPedidoDescServico>;
