import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ItemPedidoDescComercial extends ModelBase {
  static tableName = "ItemPedidoDescComercial";
  static idColumn = [];

  CdEmpresa!: number;
  CdFilial!: number;
  NumPedido!: number;
  Sequencia!: number;
  CdProduto!: string;
  PercRepasseComercial!: number;
  VlRepasseComercial!: number;
  PercDescontoComercial!: number;
  VlDescontoComercial!: number;
  

  static getFields() {
    return [
      "CdEmpresa",
      "CdFilial",
      "NumPedido",
      "Sequencia",
      "CdProduto",
      "PercRepasseComercial",
      "VlRepasseComercial",
      "PercDescontoComercial",
      "VlDescontoComercial",
      ];
  }
}

ItemPedidoDescComercial.knex(connections.plano);

export type TItemPedidoDescComercial = ModelObject<ItemPedidoDescComercial>;
