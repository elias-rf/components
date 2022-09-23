import { TEntity } from "@er/types/*";

export const ProdutoTributacaoUF: TEntity =
  {
  "database": "plano",
  "table": "ProdutoTributacaoUF",
  "fields": [
    {
      "field": "CdFilial",
      "label": "CdFilial",
      "name": "CdFilial",
      "type": "int",
      "size": 9,
      "allowNull": false
    },
    {
      "field": "CdProduto",
      "label": "CdProduto",
      "name": "CdProduto",
      "type": "string",
      "size": 16,
      "allowNull": false
    },
    {
      "field": "UF",
      "label": "UF",
      "name": "UF",
      "type": "string",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "TipoTributacaoICMS",
      "label": "TipoTributacaoICMS",
      "name": "TipoTributacaoICMS",
      "type": "string",
      "size": 1
    },
    {
      "field": "PercMVA",
      "label": "PercMVA",
      "name": "PercMVA",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "PercReduICMSSub",
      "label": "PercReduICMSSub",
      "name": "PercReduICMSSub",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "AliquotaICMSSub",
      "label": "AliquotaICMSSub",
      "name": "AliquotaICMSSub",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "AliquotaICMSCont",
      "label": "AliquotaICMSCont",
      "name": "AliquotaICMSCont",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "AliquotaICMSNaoCont",
      "label": "AliquotaICMSNaoCont",
      "name": "AliquotaICMSNaoCont",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "AliquotaICMSSimplesCont",
      "label": "AliquotaICMSSimplesCont",
      "name": "AliquotaICMSSimplesCont",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "AliquotaICMSSimplesNaoCont",
      "label": "AliquotaICMSSimplesNaoCont",
      "name": "AliquotaICMSSimplesNaoCont",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "PercReduICMSCont",
      "label": "PercReduICMSCont",
      "name": "PercReduICMSCont",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "PercReduICMSNaoCont",
      "label": "PercReduICMSNaoCont",
      "name": "PercReduICMSNaoCont",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "PercReduICMSSimplesCont",
      "label": "PercReduICMSSimplesCont",
      "name": "PercReduICMSSimplesCont",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "PercReduICMSSimplesNaoCont",
      "label": "PercReduICMSSimplesNaoCont",
      "name": "PercReduICMSSimplesNaoCont",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "DtUltAlteracao",
      "label": "DtUltAlteracao",
      "name": "DtUltAlteracao",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "VlPautaPMC",
      "label": "VlPautaPMC",
      "name": "VlPautaPMC",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "TipoTributacaoICMSConsumidorFinal",
      "label": "TipoTributacaoICMSConsumidorFinal",
      "name": "TipoTributacaoICMSConsumidorFinal",
      "type": "string",
      "size": 1
    },
    {
      "field": "PercMVASimples",
      "label": "PercMVASimples",
      "name": "PercMVASimples",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "FgReducaoICMS",
      "label": "FgReducaoICMS",
      "name": "FgReducaoICMS",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgReducaoICMSNC",
      "label": "FgReducaoICMSNC",
      "name": "FgReducaoICMSNC",
      "type": "string",
      "size": 1
    },
    {
      "field": "PercReducaoICMSST",
      "label": "PercReducaoICMSST",
      "name": "PercReducaoICMSST",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "FgVlBrutoCalculo",
      "label": "FgVlBrutoCalculo",
      "name": "FgVlBrutoCalculo",
      "type": "string",
      "size": 1
    },
    {
      "field": "AliqICMSCompra",
      "label": "AliqICMSCompra",
      "name": "AliqICMSCompra",
      "type": "int",
      "size": 5,
      "scale": 2
    },
    {
      "field": "FgCompoeGNRE",
      "label": "FgCompoeGNRE",
      "name": "FgCompoeGNRE",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgIsentoICMSCompra",
      "label": "FgIsentoICMSCompra",
      "name": "FgIsentoICMSCompra",
      "type": "string",
      "size": 1
    },
    {
      "field": "PercFCP",
      "label": "PercFCP",
      "name": "PercFCP",
      "type": "int",
      "size": 5,
      "scale": 2
    },
    {
      "field": "CdBeneficioFiscalRed",
      "label": "CdBeneficioFiscalRed",
      "name": "CdBeneficioFiscalRed",
      "type": "string",
      "size": 10
    },
    {
      "field": "CdBeneficioFiscalDif",
      "label": "CdBeneficioFiscalDif",
      "name": "CdBeneficioFiscalDif",
      "type": "string",
      "size": 10
    },
    {
      "field": "CdBeneficioFiscalIse",
      "label": "CdBeneficioFiscalIse",
      "name": "CdBeneficioFiscalIse",
      "type": "string",
      "size": 10
    },
    {
      "field": "CdBeneficioFiscalNT",
      "label": "CdBeneficioFiscalNT",
      "name": "CdBeneficioFiscalNT",
      "type": "string",
      "size": 10
    },
    {
      "field": "CdBeneficioFiscalST",
      "label": "CdBeneficioFiscalST",
      "name": "CdBeneficioFiscalST",
      "type": "string",
      "size": 10
    },
    {
      "field": "CdBeneficioFiscalSus",
      "label": "CdBeneficioFiscalSus",
      "name": "CdBeneficioFiscalSus",
      "type": "string",
      "size": 10
    },
    {
      "field": "PercDiferimento",
      "label": "PercDiferimento",
      "name": "PercDiferimento",
      "type": "int",
      "size": 5,
      "scale": 2
    }
  ]
}