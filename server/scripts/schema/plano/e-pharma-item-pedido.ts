import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class EPharmaItemPedido extends ModelBase {
  static tableName = "ePharmaItemPedido";
  static idColumn = [];

  NumAutorizacao!: number;
  CdProdutoePharma!: number;
  CdProduto!: string;
  Quantidade!: number;
  VlBruto!: number;
  VlLoja!: number;
  VlReceberLoja!: number;
  VlePharma!: number;
  VlAquisicao!: number;
  VlRepasse!: number;
  FgMenorPreco!: string;
  CdCategoria!: number;
  FgConciliacao!: string;
  

  static getFields() {
    return [
      "NumAutorizacao",
      "CdProdutoePharma",
      "CdProduto",
      "Quantidade",
      "VlBruto",
      "VlLoja",
      "VlReceberLoja",
      "VlePharma",
      "VlAquisicao",
      "VlRepasse",
      "FgMenorPreco",
      "CdCategoria",
      "FgConciliacao",
      ];
  }
}

EPharmaItemPedido.knex(connections.plano);

export type TEPharmaItemPedido = ModelObject<EPharmaItemPedido>;
