import { TTableDef } from "@/types/model";

export const ItemNotaImportacao: TTableDef = {
  database: "plano",
  table: "ItemNotaImportacao",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "NumNota",
      label: "NumNota",
      name: "NumNota",
      typeField: "float",

      scale: 4,
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
      field: "Modelo",
      label: "Modelo",
      name: "Modelo",
      typeField: "string",

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
      field: "Sequencia",
      label: "Sequencia",
      name: "Sequencia",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NumDocImportacao",
      label: "NumDocImportacao",
      name: "NumDocImportacao",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "DtDocImportacao",
      label: "DtDocImportacao",
      name: "DtDocImportacao",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "DtDesembaraco",
      label: "DtDesembaraco",
      name: "DtDesembaraco",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "CdExportador",
      label: "CdExportador",
      name: "CdExportador",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "CdFabricante",
      label: "CdFabricante",
      name: "CdFabricante",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "LocalDesembaraco",
      label: "LocalDesembaraco",
      name: "LocalDesembaraco",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "UFDesembaraco",
      label: "UFDesembaraco",
      name: "UFDesembaraco",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "NumAdicao",
      label: "NumAdicao",
      name: "NumAdicao",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "SeqAdicao",
      label: "SeqAdicao",
      name: "SeqAdicao",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "VlDesconto",
      label: "VlDesconto",
      name: "VlDesconto",
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
      field: "VlBaseCalculoII",
      label: "VlBaseCalculoII",
      name: "VlBaseCalculoII",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlII",
      label: "VlII",
      name: "VlII",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlIOF",
      label: "VlIOF",
      name: "VlIOF",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlBaseCalculoIPI",
      label: "VlBaseCalculoIPI",
      name: "VlBaseCalculoIPI",
      typeField: "float",

      scale: 4,
    },
    {
      field: "VlIPI",
      label: "VlIPI",
      name: "VlIPI",
      typeField: "float",

      scale: 4,
    },
    {
      field: "VlDespesaAduaneira",
      label: "VlDespesaAduaneira",
      name: "VlDespesaAduaneira",
      typeField: "float",

      scale: 4,
    },
    {
      field: "VlBaseCalculoPIS",
      label: "VlBaseCalculoPIS",
      name: "VlBaseCalculoPIS",
      typeField: "float",

      scale: 4,
    },
    {
      field: "VlPIS",
      label: "VlPIS",
      name: "VlPIS",
      typeField: "float",

      scale: 4,
    },
    {
      field: "VlBaseCalculoCOFINS",
      label: "VlBaseCalculoCOFINS",
      name: "VlBaseCalculoCOFINS",
      typeField: "float",

      scale: 4,
    },
    {
      field: "VlCOFINS",
      label: "VlCOFINS",
      name: "VlCOFINS",
      typeField: "float",

      scale: 4,
    },
    {
      field: "VlCustosDiversosItem",
      label: "VlCustosDiversosItem",
      name: "VlCustosDiversosItem",
      typeField: "float",

      scale: 4,
    },
    {
      field: "ViaTransporte",
      label: "ViaTransporte",
      name: "ViaTransporte",
      typeField: "int",
    },
    {
      field: "VlAFRMM",
      label: "VlAFRMM",
      name: "VlAFRMM",
      typeField: "float",

      scale: 4,
    },
    {
      field: "TipoIntermedio",
      label: "TipoIntermedio",
      name: "TipoIntermedio",
      typeField: "int",
    },
    {
      field: "CNPJAdquirente",
      label: "CNPJAdquirente",
      name: "CNPJAdquirente",
      typeField: "int",
    },
    {
      field: "UFCNPJAdquirente",
      label: "UFCNPJAdquirente",
      name: "UFCNPJAdquirente",
      typeField: "string",
    },
    {
      field: "NumDrawback",
      label: "NumDrawback",
      name: "NumDrawback",
      typeField: "string",
    },
    {
      field: "ChaveNFeImportacao",
      label: "ChaveNFeImportacao",
      name: "ChaveNFeImportacao",
      typeField: "string",
    },
  ],
};
