import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ItemPedidoComissao extends ModelBase {
  static tableName = "ItemPedidoComissao";
  static idColumn = [];

  CdFilial!: number;
  NumPedido!: number;
  Tipo!: string;
  Sequencia!: number;
  CdVendedor!: number;
  PercComissaoVista!: number;
  PercComissaoPrazo!: number;
  

  static getFields() {
    return [
      "CdFilial",
      "NumPedido",
      "Tipo",
      "Sequencia",
      "CdVendedor",
      "PercComissaoVista",
      "PercComissaoPrazo",
      ];
  }
}

ItemPedidoComissao.knex(connections.plano);

export type TItemPedidoComissao = ModelObject<ItemPedidoComissao>;
