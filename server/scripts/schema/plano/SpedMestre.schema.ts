import { TTableDef } from "@mono/types/model";

export const SpedMestre: TTableDef = {
  database: "plano",
  table: "SpedMestre",
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
      field: "CdEmitente",
      label: "CdEmitente",
      name: "CdEmitente",
      typeField: "int",
      size: 9,
      allowNull: false,
    },
    {
      field: "TipoEmitente",
      label: "TipoEmitente",
      name: "TipoEmitente",
      typeField: "string",
      size: 1,
      allowNull: false,
    },
    {
      field: "NumDocumento",
      label: "NumDocumento",
      name: "NumDocumento",
      typeField: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "Serie",
      label: "Serie",
      name: "Serie",
      typeField: "string",
      size: 3,
      allowNull: false,
    },
    {
      field: "SubSerie",
      label: "SubSerie",
      name: "SubSerie",
      typeField: "string",
      size: 3,
      allowNull: false,
    },
    {
      field: "Modelo",
      label: "Modelo",
      name: "Modelo",
      typeField: "string",
      size: 3,
      allowNull: false,
    },
    {
      field: "NumECF",
      label: "NumECF",
      name: "NumECF",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "TipoOperacao",
      label: "TipoOperacao",
      name: "TipoOperacao",
      typeField: "string",
      size: 1,
      allowNull: false,
    },
    {
      field: "TipoNotaFiscal",
      label: "TipoNotaFiscal",
      name: "TipoNotaFiscal",
      typeField: "string",
      size: 1,
      allowNull: false,
    },
    {
      field: "SituacaoDocumento",
      label: "SituacaoDocumento",
      name: "SituacaoDocumento",
      typeField: "string",
      size: 2,
      allowNull: false,
    },
    {
      field: "ChaveEletronica",
      label: "ChaveEletronica",
      name: "ChaveEletronica",
      typeField: "string",
      size: 64,
      allowNull: false,
    },
    {
      field: "DtEmissao",
      label: "DtEmissao",
      name: "DtEmissao",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "DtOperacao",
      label: "DtOperacao",
      name: "DtOperacao",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "FormaPagamento",
      label: "FormaPagamento",
      name: "FormaPagamento",
      typeField: "string",
      size: 1,
      allowNull: false,
    },
    {
      field: "TipoFrete",
      label: "TipoFrete",
      name: "TipoFrete",
      typeField: "string",
      size: 1,
      allowNull: false,
    },
    {
      field: "VlProdutos",
      label: "VlProdutos",
      name: "VlProdutos",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlFrete",
      label: "VlFrete",
      name: "VlFrete",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlSeguro",
      label: "VlSeguro",
      name: "VlSeguro",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlDespesaAcessoria",
      label: "VlDespesaAcessoria",
      name: "VlDespesaAcessoria",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlTotalNota",
      label: "VlTotalNota",
      name: "VlTotalNota",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlBaseCalculoICMS",
      label: "VlBaseCalculoICMS",
      name: "VlBaseCalculoICMS",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlICMS",
      label: "VlICMS",
      name: "VlICMS",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlBaseCalculoICMSST",
      label: "VlBaseCalculoICMSST",
      name: "VlBaseCalculoICMSST",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlICMSST",
      label: "VlICMSST",
      name: "VlICMSST",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlIPI",
      label: "VlIPI",
      name: "VlIPI",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlPIS",
      label: "VlPIS",
      name: "VlPIS",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlPISST",
      label: "VlPISST",
      name: "VlPISST",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlCofins",
      label: "VlCofins",
      name: "VlCofins",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlCofinsST",
      label: "VlCofinsST",
      name: "VlCofinsST",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlBaseCalculoPIS",
      label: "VlBaseCalculoPIS",
      name: "VlBaseCalculoPIS",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "VlBaseCalculoCofins",
      label: "VlBaseCalculoCofins",
      name: "VlBaseCalculoCofins",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "VLISS",
      label: "VLISS",
      name: "VLISS",
      typeField: "float",
      size: 8,
      scale: 4,
    },
  ],
};
