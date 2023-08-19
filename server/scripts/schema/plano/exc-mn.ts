import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ExcMn extends ModelBase {
  static tableName = "ExcMN";
  static idColumn = [];

  CdFilial!: number;
  NumNota!: number;
  Serie!: string;
  DtEmissao!: Date;
  Horario!: Date;
  Nop!: number;
  FgEstatistica!: string;
  fgEstoque!: string;
  VlBaseCalculo!: number;
  Tipo!: string;
  CdCliente!: number;
  CdVendedor!: number;
  PercComissao!: number;
  VlTotal!: number;
  BaseSubstituicao!: number;
  IcmsSubstituicao!: number;
  VlIcms!: number;
  VlIrrf!: number;
  VlIss!: number;
  VlProdutos!: number;
  VlFrete!: number;
  VlSeguro!: number;
  VlAcessorias!: number;
  VlIpi!: number;
  VlServico!: number;
  VlDesconto!: number;
  Modelo!: string;
  

  static getFields() {
    return [
      "CdFilial",
      "NumNota",
      "Serie",
      "DtEmissao",
      "Horario",
      "Nop",
      "FgEstatistica",
      "fgEstoque",
      "VlBaseCalculo",
      "Tipo",
      "CdCliente",
      "CdVendedor",
      "PercComissao",
      "VlTotal",
      "BaseSubstituicao",
      "IcmsSubstituicao",
      "VlIcms",
      "VlIrrf",
      "VlIss",
      "VlProdutos",
      "VlFrete",
      "VlSeguro",
      "VlAcessorias",
      "VlIpi",
      "VlServico",
      "VlDesconto",
      "Modelo",
      ];
  }
}

ExcMn.knex(connections.plano);

export type TExcMn = ModelObject<ExcMn>;
