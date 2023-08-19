import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ComponentesRat extends ModelBase {
  static tableName = "ComponentesRAT";
  static idColumn = [];

  CdFilial!: number;
  NumeroRAT!: number;
  CdProduto!: string;
  Quantidade!: number;
  VlLiquido!: number;
  VlTotal!: number;
  AliqIcms!: number;
  PercDescItem!: number;
  VlVenda!: number;
  VlCusto!: number;
  ReducaoICMS!: number;
  PercComissao!: number;
  TipoEstoque!: string;
  

  static getFields() {
    return [
      "CdFilial",
      "NumeroRAT",
      "CdProduto",
      "Quantidade",
      "VlLiquido",
      "VlTotal",
      "AliqIcms",
      "PercDescItem",
      "VlVenda",
      "VlCusto",
      "ReducaoICMS",
      "PercComissao",
      "TipoEstoque",
      ];
  }
}

ComponentesRat.knex(connections.plano);

export type TComponentesRat = ModelObject<ComponentesRat>;
