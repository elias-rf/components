import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ExcIn extends ModelBase {
  static tableName = "ExcIN";
  static idColumn = [];

  CdFilial!: number;
  NumNota!: number;
  Serie!: string;
  CdProduto!: string;
  Sequencia!: number;
  Quantidade!: number;
  VlUnitario!: number;
  VlTotal!: number;
  AliqIcms!: number;
  BaseCalculo!: number;
  VlICms!: number;
  VlLiquido!: number;
  FgEstoque!: string;
  VlCusto!: number;
  CustoMedio!: number;
  CdProdutoAssociado!: string;
  CdRefEstoque!: string;
  PercDesconto!: number;
  AliqIPI!: number;
  BaseSub!: number;
  FgKit!: string;
  FgPeso!: string;
  ImprimeComponentes!: string;
  Irrf!: number;
  MargemSub!: number;
  Peso!: string;
  ReducaoICMS!: number;
  TaxaFCA!: number;
  TipoMovimentacao!: string;
  VlComissaoPrazo!: number;
  VlComissaoVista!: number;
  VlICMSSub!: number;
  VLIPI!: number;
  VLISS!: number;
  PercLimiteComissao!: number;
  Modelo!: string;
  

  static getFields() {
    return [
      "CdFilial",
      "NumNota",
      "Serie",
      "CdProduto",
      "Sequencia",
      "Quantidade",
      "VlUnitario",
      "VlTotal",
      "AliqIcms",
      "BaseCalculo",
      "VlICms",
      "VlLiquido",
      "FgEstoque",
      "VlCusto",
      "CustoMedio",
      "CdProdutoAssociado",
      "CdRefEstoque",
      "PercDesconto",
      "AliqIPI",
      "BaseSub",
      "FgKit",
      "FgPeso",
      "ImprimeComponentes",
      "Irrf",
      "MargemSub",
      "Peso",
      "ReducaoICMS",
      "TaxaFCA",
      "TipoMovimentacao",
      "VlComissaoPrazo",
      "VlComissaoVista",
      "VlICMSSub",
      "VLIPI",
      "VLISS",
      "PercLimiteComissao",
      "Modelo",
      ];
  }
}

ExcIn.knex(connections.plano);

export type TExcIn = ModelObject<ExcIn>;
