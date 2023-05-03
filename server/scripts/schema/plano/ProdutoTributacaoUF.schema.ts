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
      size: 9,
      allowNull: false,
    },
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "CdProduto",
      typeField: "string",
      size: 16,
      allowNull: false,
    },
    {
      field: "UF",
      label: "UF",
      name: "UF",
      typeField: "string",
      size: 2,
      allowNull: false,
    },
    {
      field: "TipoTributacaoICMS",
      label: "TipoTributacaoICMS",
      name: "TipoTributacaoICMS",
      typeField: "string",
      size: 1,
    },
    {
      field: "PercMVA",
      label: "PercMVA",
      name: "PercMVA",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "PercReduICMSSub",
      label: "PercReduICMSSub",
      name: "PercReduICMSSub",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "AliquotaICMSSub",
      label: "AliquotaICMSSub",
      name: "AliquotaICMSSub",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "AliquotaICMSCont",
      label: "AliquotaICMSCont",
      name: "AliquotaICMSCont",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "AliquotaICMSNaoCont",
      label: "AliquotaICMSNaoCont",
      name: "AliquotaICMSNaoCont",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "AliquotaICMSSimplesCont",
      label: "AliquotaICMSSimplesCont",
      name: "AliquotaICMSSimplesCont",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "AliquotaICMSSimplesNaoCont",
      label: "AliquotaICMSSimplesNaoCont",
      name: "AliquotaICMSSimplesNaoCont",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "PercReduICMSCont",
      label: "PercReduICMSCont",
      name: "PercReduICMSCont",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "PercReduICMSNaoCont",
      label: "PercReduICMSNaoCont",
      name: "PercReduICMSNaoCont",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "PercReduICMSSimplesCont",
      label: "PercReduICMSSimplesCont",
      name: "PercReduICMSSimplesCont",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "PercReduICMSSimplesNaoCont",
      label: "PercReduICMSSimplesNaoCont",
      name: "PercReduICMSSimplesNaoCont",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "DtUltAlteracao",
      label: "DtUltAlteracao",
      name: "DtUltAlteracao",
      typeField: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "VlPautaPMC",
      label: "VlPautaPMC",
      name: "VlPautaPMC",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "TipoTributacaoICMSConsumidorFinal",
      label: "TipoTributacaoICMSConsumidorFinal",
      name: "TipoTributacaoICMSConsumidorFinal",
      typeField: "string",
      size: 1,
    },
    {
      field: "PercMVASimples",
      label: "PercMVASimples",
      name: "PercMVASimples",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "FgReducaoICMS",
      label: "FgReducaoICMS",
      name: "FgReducaoICMS",
      typeField: "string",
      size: 1,
    },
    {
      field: "FgReducaoICMSNC",
      label: "FgReducaoICMSNC",
      name: "FgReducaoICMSNC",
      typeField: "string",
      size: 1,
    },
    {
      field: "PercReducaoICMSST",
      label: "PercReducaoICMSST",
      name: "PercReducaoICMSST",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "FgVlBrutoCalculo",
      label: "FgVlBrutoCalculo",
      name: "FgVlBrutoCalculo",
      typeField: "string",
      size: 1,
    },
    {
      field: "AliqICMSCompra",
      label: "AliqICMSCompra",
      name: "AliqICMSCompra",
      typeField: "int",
      size: 5,
      scale: 2,
    },
    {
      field: "FgCompoeGNRE",
      label: "FgCompoeGNRE",
      name: "FgCompoeGNRE",
      typeField: "string",
      size: 1,
    },
    {
      field: "FgIsentoICMSCompra",
      label: "FgIsentoICMSCompra",
      name: "FgIsentoICMSCompra",
      typeField: "string",
      size: 1,
    },
    {
      field: "PercFCP",
      label: "PercFCP",
      name: "PercFCP",
      typeField: "int",
      size: 5,
      scale: 2,
    },
    {
      field: "CdBeneficioFiscalRed",
      label: "CdBeneficioFiscalRed",
      name: "CdBeneficioFiscalRed",
      typeField: "string",
      size: 10,
    },
    {
      field: "CdBeneficioFiscalDif",
      label: "CdBeneficioFiscalDif",
      name: "CdBeneficioFiscalDif",
      typeField: "string",
      size: 10,
    },
    {
      field: "CdBeneficioFiscalIse",
      label: "CdBeneficioFiscalIse",
      name: "CdBeneficioFiscalIse",
      typeField: "string",
      size: 10,
    },
    {
      field: "CdBeneficioFiscalNT",
      label: "CdBeneficioFiscalNT",
      name: "CdBeneficioFiscalNT",
      typeField: "string",
      size: 10,
    },
    {
      field: "CdBeneficioFiscalST",
      label: "CdBeneficioFiscalST",
      name: "CdBeneficioFiscalST",
      typeField: "string",
      size: 10,
    },
    {
      field: "CdBeneficioFiscalSus",
      label: "CdBeneficioFiscalSus",
      name: "CdBeneficioFiscalSus",
      typeField: "string",
      size: 10,
    },
    {
      field: "PercDiferimento",
      label: "PercDiferimento",
      name: "PercDiferimento",
      typeField: "int",
      size: 5,
      scale: 2,
    },
  ],
};
