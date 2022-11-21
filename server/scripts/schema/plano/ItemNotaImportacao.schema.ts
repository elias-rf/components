import { TTable } from "../../../../types";

export const ItemNotaImportacao: TTable = {
  database: "plano",
  table: "ItemNotaImportacao",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      type: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "NumNota",
      label: "NumNota",
      name: "NumNota",
      type: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "Serie",
      label: "Serie",
      name: "Serie",
      type: "string",
      size: 3,
      allowNull: false,
    },
    {
      field: "Modelo",
      label: "Modelo",
      name: "Modelo",
      type: "string",
      size: 3,
      allowNull: false,
    },
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "CdProduto",
      type: "string",
      size: 15,
      allowNull: false,
    },
    {
      field: "Sequencia",
      label: "Sequencia",
      name: "Sequencia",
      type: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "NumDocImportacao",
      label: "NumDocImportacao",
      name: "NumDocImportacao",
      type: "string",
      size: 10,
      allowNull: false,
    },
    {
      field: "DtDocImportacao",
      label: "DtDocImportacao",
      name: "DtDocImportacao",
      type: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "DtDesembaraco",
      label: "DtDesembaraco",
      name: "DtDesembaraco",
      type: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "CdExportador",
      label: "CdExportador",
      name: "CdExportador",
      type: "string",
      size: 60,
      allowNull: false,
    },
    {
      field: "CdFabricante",
      label: "CdFabricante",
      name: "CdFabricante",
      type: "string",
      size: 60,
      allowNull: false,
    },
    {
      field: "LocalDesembaraco",
      label: "LocalDesembaraco",
      name: "LocalDesembaraco",
      type: "string",
      size: 60,
      allowNull: false,
    },
    {
      field: "UFDesembaraco",
      label: "UFDesembaraco",
      name: "UFDesembaraco",
      type: "string",
      size: 2,
      allowNull: false,
    },
    {
      field: "NumAdicao",
      label: "NumAdicao",
      name: "NumAdicao",
      type: "string",
      size: 3,
      allowNull: false,
    },
    {
      field: "SeqAdicao",
      label: "SeqAdicao",
      name: "SeqAdicao",
      type: "string",
      size: 3,
      allowNull: false,
    },
    {
      field: "VlDesconto",
      label: "VlDesconto",
      name: "VlDesconto",
      type: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlBaseCalculoICMS",
      label: "VlBaseCalculoICMS",
      name: "VlBaseCalculoICMS",
      type: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlICMS",
      label: "VlICMS",
      name: "VlICMS",
      type: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlBaseCalculoII",
      label: "VlBaseCalculoII",
      name: "VlBaseCalculoII",
      type: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlII",
      label: "VlII",
      name: "VlII",
      type: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlIOF",
      label: "VlIOF",
      name: "VlIOF",
      type: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlBaseCalculoIPI",
      label: "VlBaseCalculoIPI",
      name: "VlBaseCalculoIPI",
      type: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "VlIPI",
      label: "VlIPI",
      name: "VlIPI",
      type: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "VlDespesaAduaneira",
      label: "VlDespesaAduaneira",
      name: "VlDespesaAduaneira",
      type: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "VlBaseCalculoPIS",
      label: "VlBaseCalculoPIS",
      name: "VlBaseCalculoPIS",
      type: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "VlPIS",
      label: "VlPIS",
      name: "VlPIS",
      type: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "VlBaseCalculoCOFINS",
      label: "VlBaseCalculoCOFINS",
      name: "VlBaseCalculoCOFINS",
      type: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "VlCOFINS",
      label: "VlCOFINS",
      name: "VlCOFINS",
      type: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "VlCustosDiversosItem",
      label: "VlCustosDiversosItem",
      name: "VlCustosDiversosItem",
      type: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "ViaTransporte",
      label: "ViaTransporte",
      name: "ViaTransporte",
      type: "int",
      size: 5,
    },
    {
      field: "VlAFRMM",
      label: "VlAFRMM",
      name: "VlAFRMM",
      type: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "TipoIntermedio",
      label: "TipoIntermedio",
      name: "TipoIntermedio",
      type: "int",
      size: 5,
    },
    {
      field: "CNPJAdquirente",
      label: "CNPJAdquirente",
      name: "CNPJAdquirente",
      type: "int",
      size: 9,
    },
    {
      field: "UFCNPJAdquirente",
      label: "UFCNPJAdquirente",
      name: "UFCNPJAdquirente",
      type: "string",
      size: 2,
    },
    {
      field: "NumDrawback",
      label: "NumDrawback",
      name: "NumDrawback",
      type: "string",
      size: 11,
    },
    {
      field: "ChaveNFeImportacao",
      label: "ChaveNFeImportacao",
      name: "ChaveNFeImportacao",
      type: "string",
      size: 44,
    },
  ],
};
