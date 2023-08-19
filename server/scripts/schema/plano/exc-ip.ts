import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ExcIp extends ModelBase {
  static tableName = "ExcIP";
  static idColumn = [];

  CdFilial!: number;
  NroPDV!: number;
  NumCupom!: number;
  Sequencia!: number;
  CdProduto!: string;
  CdRefEstoque!: string;
  Quantidade!: number;
  VlUnitario!: number;
  VlDescGer!: number;
  VlDescDir!: number;
  VlTotal!: number;
  VlLiquido!: number;
  ClasFiscal!: string;
  AliqISS!: number;
  Aliquota!: number;
  VlComissaoPrazo!: number;
  VlComissaoVista!: number;
  FgSituacao!: string;
  CustoMedio!: number;
  FgEstoque!: string;
  ImprimeComponentes!: string;
  CdProdutoAssociado!: string;
  PercLimiteComissao!: number;
  CRM!: string;
  ComplementoDescricao!: string;
  VlCusto!: number;
  

  static getFields() {
    return [
      "CdFilial",
      "NroPDV",
      "NumCupom",
      "Sequencia",
      "CdProduto",
      "CdRefEstoque",
      "Quantidade",
      "VlUnitario",
      "VlDescGer",
      "VlDescDir",
      "VlTotal",
      "VlLiquido",
      "ClasFiscal",
      "AliqISS",
      "Aliquota",
      "VlComissaoPrazo",
      "VlComissaoVista",
      "FgSituacao",
      "CustoMedio",
      "FgEstoque",
      "ImprimeComponentes",
      "CdProdutoAssociado",
      "PercLimiteComissao",
      "CRM",
      "ComplementoDescricao",
      "VlCusto",
      ];
  }
}

ExcIp.knex(connections.plano);

export type TExcIp = ModelObject<ExcIp>;
