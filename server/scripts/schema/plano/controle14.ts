import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class Controle14 extends ModelBase {
  static tableName = "Controle14";
  static idColumn = [];

  CdFilial!: number;
  NumNota!: number;
  Serie!: string;
  Modelo!: string;
  DtEmissao!: Date;
  CdProduto!: string;
  Quantidade!: number;
  VlUnitario!: number;
  vlDescontoItem!: number;
  VlAcrescimoItem!: number;
  VlTotalItem!: number;
  Unidade!: string;
  SituacaoTributaria!: number;
  AliquotaICMS!: number;
  DescricaoProduto!: string;
  Sequencia!: number;
  IndicadorCancelamento!: string;
  Chave!: string;
  

  static getFields() {
    return [
      "CdFilial",
      "NumNota",
      "Serie",
      "Modelo",
      "DtEmissao",
      "CdProduto",
      "Quantidade",
      "VlUnitario",
      "vlDescontoItem",
      "VlAcrescimoItem",
      "VlTotalItem",
      "Unidade",
      "SituacaoTributaria",
      "AliquotaICMS",
      "DescricaoProduto",
      "Sequencia",
      "IndicadorCancelamento",
      "Chave",
      ];
  }
}

Controle14.knex(connections.plano);

export type TControle14 = ModelObject<Controle14>;
