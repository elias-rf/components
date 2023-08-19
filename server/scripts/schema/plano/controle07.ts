import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class Controle07 extends ModelBase {
  static tableName = "Controle07";
  static idColumn = [];

  CdFilial!: number;
  NumPDV!: number;
  NumCupom!: number;
  Sequencia!: number;
  CdProduto!: string;
  DescricaoProduto!: string;
  UnidadeProduto!: string;
  Quantidade!: number;
  VlUnitario!: number;
  VlLiquido!: number;
  VlDescDir!: number;
  VlDescGer!: number;
  VlTotal!: number;
  FgSituacaoItem!: string;
  SituacaoTributariaICMS!: number;
  AliquotaICMS!: number;
  AliquotaISS!: number;
  NumCOO!: number;
  NumCCF!: number;
  DtEmissao!: Date;
  NumSerieECF!: string;
  MFAdicional!: string;
  ModeloECF!: string;
  NumUsuario!: number;
  

  static getFields() {
    return [
      "CdFilial",
      "NumPDV",
      "NumCupom",
      "Sequencia",
      "CdProduto",
      "DescricaoProduto",
      "UnidadeProduto",
      "Quantidade",
      "VlUnitario",
      "VlLiquido",
      "VlDescDir",
      "VlDescGer",
      "VlTotal",
      "FgSituacaoItem",
      "SituacaoTributariaICMS",
      "AliquotaICMS",
      "AliquotaISS",
      "NumCOO",
      "NumCCF",
      "DtEmissao",
      "NumSerieECF",
      "MFAdicional",
      "ModeloECF",
      "NumUsuario",
      ];
  }
}

Controle07.knex(connections.plano);

export type TControle07 = ModelObject<Controle07>;
