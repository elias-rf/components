import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class SpedMestre extends ModelBase {
  static tableName = "SpedMestre";
  static idColumn = [];

  CdFilial!: number;
  CdEmitente!: number;
  TipoEmitente!: string;
  NumDocumento!: number;
  Serie!: string;
  SubSerie!: string;
  Modelo!: string;
  NumECF!: number;
  TipoOperacao!: string;
  TipoNotaFiscal!: string;
  SituacaoDocumento!: string;
  ChaveEletronica!: string;
  DtEmissao!: Date;
  DtOperacao!: Date;
  FormaPagamento!: string;
  TipoFrete!: string;
  VlProdutos!: number;
  VlFrete!: number;
  VlSeguro!: number;
  VlDespesaAcessoria!: number;
  VlTotalNota!: number;
  VlBaseCalculoICMS!: number;
  VlICMS!: number;
  VlBaseCalculoICMSST!: number;
  VlICMSST!: number;
  VlIPI!: number;
  VlPIS!: number;
  VlPISST!: number;
  VlCofins!: number;
  VlCofinsST!: number;
  VlBaseCalculoPIS!: number;
  VlBaseCalculoCofins!: number;
  VLISS!: number;
  

  static getFields() {
    return [
      "CdFilial",
      "CdEmitente",
      "TipoEmitente",
      "NumDocumento",
      "Serie",
      "SubSerie",
      "Modelo",
      "NumECF",
      "TipoOperacao",
      "TipoNotaFiscal",
      "SituacaoDocumento",
      "ChaveEletronica",
      "DtEmissao",
      "DtOperacao",
      "FormaPagamento",
      "TipoFrete",
      "VlProdutos",
      "VlFrete",
      "VlSeguro",
      "VlDespesaAcessoria",
      "VlTotalNota",
      "VlBaseCalculoICMS",
      "VlICMS",
      "VlBaseCalculoICMSST",
      "VlICMSST",
      "VlIPI",
      "VlPIS",
      "VlPISST",
      "VlCofins",
      "VlCofinsST",
      "VlBaseCalculoPIS",
      "VlBaseCalculoCofins",
      "VLISS",
      ];
  }
}

SpedMestre.knex(connections.plano);

export type TSpedMestre = ModelObject<SpedMestre>;
