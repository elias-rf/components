import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ProdutoTributacaoUf extends ModelBase {
  static tableName = "ProdutoTributacaoUF";
  static idColumn = [];

  CdFilial!: number;
  CdProduto!: string;
  UF!: string;
  TipoTributacaoICMS!: string;
  PercMVA!: number;
  PercReduICMSSub!: number;
  AliquotaICMSSub!: number;
  AliquotaICMSCont!: number;
  AliquotaICMSNaoCont!: number;
  AliquotaICMSSimplesCont!: number;
  AliquotaICMSSimplesNaoCont!: number;
  PercReduICMSCont!: number;
  PercReduICMSNaoCont!: number;
  PercReduICMSSimplesCont!: number;
  PercReduICMSSimplesNaoCont!: number;
  DtUltAlteracao!: Date;
  VlPautaPMC!: number;
  TipoTributacaoICMSConsumidorFinal!: string;
  PercMVASimples!: number;
  FgReducaoICMS!: string;
  FgReducaoICMSNC!: string;
  PercReducaoICMSST!: number;
  FgVlBrutoCalculo!: string;
  AliqICMSCompra!: number;
  FgCompoeGNRE!: string;
  FgIsentoICMSCompra!: string;
  PercFCP!: number;
  CdBeneficioFiscalRed!: string;
  CdBeneficioFiscalDif!: string;
  CdBeneficioFiscalIse!: string;
  CdBeneficioFiscalNT!: string;
  CdBeneficioFiscalST!: string;
  CdBeneficioFiscalSus!: string;
  PercDiferimento!: number;
  AliquotaICMSConsumidorFinal!: number;
  

  static getFields() {
    return [
      "CdFilial",
      "CdProduto",
      "UF",
      "TipoTributacaoICMS",
      "PercMVA",
      "PercReduICMSSub",
      "AliquotaICMSSub",
      "AliquotaICMSCont",
      "AliquotaICMSNaoCont",
      "AliquotaICMSSimplesCont",
      "AliquotaICMSSimplesNaoCont",
      "PercReduICMSCont",
      "PercReduICMSNaoCont",
      "PercReduICMSSimplesCont",
      "PercReduICMSSimplesNaoCont",
      "DtUltAlteracao",
      "VlPautaPMC",
      "TipoTributacaoICMSConsumidorFinal",
      "PercMVASimples",
      "FgReducaoICMS",
      "FgReducaoICMSNC",
      "PercReducaoICMSST",
      "FgVlBrutoCalculo",
      "AliqICMSCompra",
      "FgCompoeGNRE",
      "FgIsentoICMSCompra",
      "PercFCP",
      "CdBeneficioFiscalRed",
      "CdBeneficioFiscalDif",
      "CdBeneficioFiscalIse",
      "CdBeneficioFiscalNT",
      "CdBeneficioFiscalST",
      "CdBeneficioFiscalSus",
      "PercDiferimento",
      "AliquotaICMSConsumidorFinal",
      ];
  }
}

ProdutoTributacaoUf.knex(connections.plano);

export type TProdutoTributacaoUf = ModelObject<ProdutoTributacaoUf>;
