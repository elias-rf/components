import { TTableDef } from "@/types/model";

export const ProdutoTributacaoUF: TTableDef = {
  database: "plano",
  table: "ProdutoTributacaoUF",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "CdProduto",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "UF",
      label: "UF",
      name: "UF",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "TipoTributacaoICMS",
      label: "TipoTributacaoICMS",
      name: "TipoTributacaoICMS",
      typeField: "string",
    },
    {
      field: "PercMVA",
      label: "PercMVA",
      name: "PercMVA",
      typeField: "float",

      scale: 4,
    },
    {
      field: "PercReduICMSSub",
      label: "PercReduICMSSub",
      name: "PercReduICMSSub",
      typeField: "float",

      scale: 4,
    },
    {
      field: "AliquotaICMSSub",
      label: "AliquotaICMSSub",
      name: "AliquotaICMSSub",
      typeField: "float",

      scale: 4,
    },
    {
      field: "AliquotaICMSCont",
      label: "AliquotaICMSCont",
      name: "AliquotaICMSCont",
      typeField: "float",

      scale: 4,
    },
    {
      field: "AliquotaICMSNaoCont",
      label: "AliquotaICMSNaoCont",
      name: "AliquotaICMSNaoCont",
      typeField: "float",

      scale: 4,
    },
    {
      field: "AliquotaICMSSimplesCont",
      label: "AliquotaICMSSimplesCont",
      name: "AliquotaICMSSimplesCont",
      typeField: "float",

      scale: 4,
    },
    {
      field: "AliquotaICMSSimplesNaoCont",
      label: "AliquotaICMSSimplesNaoCont",
      name: "AliquotaICMSSimplesNaoCont",
      typeField: "float",

      scale: 4,
    },
    {
      field: "PercReduICMSCont",
      label: "PercReduICMSCont",
      name: "PercReduICMSCont",
      typeField: "float",

      scale: 4,
    },
    {
      field: "PercReduICMSNaoCont",
      label: "PercReduICMSNaoCont",
      name: "PercReduICMSNaoCont",
      typeField: "float",

      scale: 4,
    },
    {
      field: "PercReduICMSSimplesCont",
      label: "PercReduICMSSimplesCont",
      name: "PercReduICMSSimplesCont",
      typeField: "float",

      scale: 4,
    },
    {
      field: "PercReduICMSSimplesNaoCont",
      label: "PercReduICMSSimplesNaoCont",
      name: "PercReduICMSSimplesNaoCont",
      typeField: "float",

      scale: 4,
    },
    {
      field: "DtUltAlteracao",
      label: "DtUltAlteracao",
      name: "DtUltAlteracao",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "VlPautaPMC",
      label: "VlPautaPMC",
      name: "VlPautaPMC",
      typeField: "float",

      scale: 4,
    },
    {
      field: "TipoTributacaoICMSConsumidorFinal",
      label: "TipoTributacaoICMSConsumidorFinal",
      name: "TipoTributacaoICMSConsumidorFinal",
      typeField: "string",
    },
    {
      field: "PercMVASimples",
      label: "PercMVASimples",
      name: "PercMVASimples",
      typeField: "float",

      scale: 4,
    },
    {
      field: "FgReducaoICMS",
      label: "FgReducaoICMS",
      name: "FgReducaoICMS",
      typeField: "string",
    },
    {
      field: "FgReducaoICMSNC",
      label: "FgReducaoICMSNC",
      name: "FgReducaoICMSNC",
      typeField: "string",
    },
    {
      field: "PercReducaoICMSST",
      label: "PercReducaoICMSST",
      name: "PercReducaoICMSST",
      typeField: "float",

      scale: 4,
    },
    {
      field: "FgVlBrutoCalculo",
      label: "FgVlBrutoCalculo",
      name: "FgVlBrutoCalculo",
      typeField: "string",
    },
    {
      field: "AliqICMSCompra",
      label: "AliqICMSCompra",
      name: "AliqICMSCompra",
      typeField: "int",

      scale: 2,
    },
    {
      field: "FgCompoeGNRE",
      label: "FgCompoeGNRE",
      name: "FgCompoeGNRE",
      typeField: "string",
    },
    {
      field: "FgIsentoICMSCompra",
      label: "FgIsentoICMSCompra",
      name: "FgIsentoICMSCompra",
      typeField: "string",
    },
    {
      field: "PercFCP",
      label: "PercFCP",
      name: "PercFCP",
      typeField: "int",

      scale: 2,
    },
    {
      field: "CdBeneficioFiscalRed",
      label: "CdBeneficioFiscalRed",
      name: "CdBeneficioFiscalRed",
      typeField: "string",
    },
    {
      field: "CdBeneficioFiscalDif",
      label: "CdBeneficioFiscalDif",
      name: "CdBeneficioFiscalDif",
      typeField: "string",
    },
    {
      field: "CdBeneficioFiscalIse",
      label: "CdBeneficioFiscalIse",
      name: "CdBeneficioFiscalIse",
      typeField: "string",
    },
    {
      field: "CdBeneficioFiscalNT",
      label: "CdBeneficioFiscalNT",
      name: "CdBeneficioFiscalNT",
      typeField: "string",
    },
    {
      field: "CdBeneficioFiscalST",
      label: "CdBeneficioFiscalST",
      name: "CdBeneficioFiscalST",
      typeField: "string",
    },
    {
      field: "CdBeneficioFiscalSus",
      label: "CdBeneficioFiscalSus",
      name: "CdBeneficioFiscalSus",
      typeField: "string",
    },
    {
      field: "PercDiferimento",
      label: "PercDiferimento",
      name: "PercDiferimento",
      typeField: "int",

      scale: 2,
    },
  ],
};
