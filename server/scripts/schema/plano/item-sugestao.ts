import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ItemSugestao extends ModelBase {
  static tableName = "ItemSugestao";
  static idColumn = [];

  CdFilial!: number;
  NumPedido!: number;
  Sequencia!: number;
  CdProduto!: string;
  Descricao!: string;
  Qtde!: number;
  VlUnitario!: number;
  VlLiquido!: number;
  VlTotal!: number;
  

  static getFields() {
    return [
      "CdFilial",
      "NumPedido",
      "Sequencia",
      "CdProduto",
      "Descricao",
      "Qtde",
      "VlUnitario",
      "VlLiquido",
      "VlTotal",
      ];
  }
}

ItemSugestao.knex(connections.plano);

export type TItemSugestao = ModelObject<ItemSugestao>;
