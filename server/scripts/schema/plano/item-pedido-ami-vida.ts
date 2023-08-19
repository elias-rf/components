import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ItemPedidoAmiVida extends ModelBase {
  static tableName = "ItemPedidoAMIVida";
  static idColumn = [];

  CdFilial!: number;
  NumPedido!: number;
  Sequencia!: number;
  CdProduto!: string;
  Posologia!: number;
  MedidaDoses!: string;
  NumDosesDia!: number;
  

  static getFields() {
    return [
      "CdFilial",
      "NumPedido",
      "Sequencia",
      "CdProduto",
      "Posologia",
      "MedidaDoses",
      "NumDosesDia",
      ];
  }
}

ItemPedidoAmiVida.knex(connections.plano);

export type TItemPedidoAmiVida = ModelObject<ItemPedidoAmiVida>;
