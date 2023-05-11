import { TTableDef } from "@/types/model";

export const SpedMestre: TTableDef = {
  database: "plano",
  table: "SpedMestre",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdEmitente",
      label: "CdEmitente",
      name: "CdEmitente",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "TipoEmitente",
      label: "TipoEmitente",
      name: "TipoEmitente",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "NumDocumento",
      label: "NumDocumento",
      name: "NumDocumento",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "Serie",
      label: "Serie",
      name: "Serie",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "SubSerie",
      label: "SubSerie",
      name: "SubSerie",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Modelo",
      label: "Modelo",
      name: "Modelo",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "NumECF",
      label: "NumECF",
      name: "NumECF",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "TipoOperacao",
      label: "TipoOperacao",
      name: "TipoOperacao",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "TipoNotaFiscal",
      label: "TipoNotaFiscal",
      name: "TipoNotaFiscal",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "SituacaoDocumento",
      label: "SituacaoDocumento",
      name: "SituacaoDocumento",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "ChaveEletronica",
      label: "ChaveEletronica",
      name: "ChaveEletronica",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "DtEmissao",
      label: "DtEmissao",
      name: "DtEmissao",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "DtOperacao",
      label: "DtOperacao",
      name: "DtOperacao",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "FormaPagamento",
      label: "FormaPagamento",
      name: "FormaPagamento",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "TipoFrete",
      label: "TipoFrete",
      name: "TipoFrete",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "VlProdutos",
      label: "VlProdutos",
      name: "VlProdutos",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlFrete",
      label: "VlFrete",
      name: "VlFrete",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlSeguro",
      label: "VlSeguro",
      name: "VlSeguro",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlDespesaAcessoria",
      label: "VlDespesaAcessoria",
      name: "VlDespesaAcessoria",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlTotalNota",
      label: "VlTotalNota",
      name: "VlTotalNota",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlBaseCalculoICMS",
      label: "VlBaseCalculoICMS",
      name: "VlBaseCalculoICMS",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlICMS",
      label: "VlICMS",
      name: "VlICMS",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlBaseCalculoICMSST",
      label: "VlBaseCalculoICMSST",
      name: "VlBaseCalculoICMSST",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlICMSST",
      label: "VlICMSST",
      name: "VlICMSST",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlIPI",
      label: "VlIPI",
      name: "VlIPI",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlPIS",
      label: "VlPIS",
      name: "VlPIS",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlPISST",
      label: "VlPISST",
      name: "VlPISST",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlCofins",
      label: "VlCofins",
      name: "VlCofins",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlCofinsST",
      label: "VlCofinsST",
      name: "VlCofinsST",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlBaseCalculoPIS",
      label: "VlBaseCalculoPIS",
      name: "VlBaseCalculoPIS",
      typeField: "float",

      scale: 4,
    },
    {
      field: "VlBaseCalculoCofins",
      label: "VlBaseCalculoCofins",
      name: "VlBaseCalculoCofins",
      typeField: "float",

      scale: 4,
    },
    {
      field: "VLISS",
      label: "VLISS",
      name: "VLISS",
      typeField: "float",

      scale: 4,
    },
  ],
};
