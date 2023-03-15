import { TTable } from "../../../../types/model";

export const ItemNotaImportacao: TTable = {
  database: "plano",
  table: "ItemNotaImportacao",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "NumNota",
      label: "NumNota",
      name: "NumNota",
      typeField: "float",
      size: 8,
      scale: 4,
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
      field: "Modelo",
      label: "Modelo",
      name: "Modelo",
      typeField: "string",
      size: 3,
      allowNull: false,
    },
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "CdProduto",
      typeField: "string",
      size: 15,
      allowNull: false,
    },
    {
      field: "Sequencia",
      label: "Sequencia",
      name: "Sequencia",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "NumDocImportacao",
      label: "NumDocImportacao",
      name: "NumDocImportacao",
      typeField: "string",
      size: 10,
      allowNull: false,
    },
    {
      field: "DtDocImportacao",
      label: "DtDocImportacao",
      name: "DtDocImportacao",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "DtDesembaraco",
      label: "DtDesembaraco",
      name: "DtDesembaraco",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "CdExportador",
      label: "CdExportador",
      name: "CdExportador",
      typeField: "string",
      size: 60,
      allowNull: false,
    },
    {
      field: "CdFabricante",
      label: "CdFabricante",
      name: "CdFabricante",
      typeField: "string",
      size: 60,
      allowNull: false,
    },
    {
      field: "LocalDesembaraco",
      label: "LocalDesembaraco",
      name: "LocalDesembaraco",
      typeField: "string",
      size: 60,
      allowNull: false,
    },
    {
      field: "UFDesembaraco",
      label: "UFDesembaraco",
      name: "UFDesembaraco",
      typeField: "string",
      size: 2,
      allowNull: false,
    },
    {
      field: "NumAdicao",
      label: "NumAdicao",
      name: "NumAdicao",
      typeField: "string",
      size: 3,
      allowNull: false,
    },
    {
      field: "SeqAdicao",
      label: "SeqAdicao",
      name: "SeqAdicao",
      typeField: "string",
      size: 3,
      allowNull: false,
    },
    {
      field: "VlDesconto",
      label: "VlDesconto",
      name: "VlDesconto",
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
      field: "VlBaseCalculoII",
      label: "VlBaseCalculoII",
      name: "VlBaseCalculoII",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlII",
      label: "VlII",
      name: "VlII",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlIOF",
      label: "VlIOF",
      name: "VlIOF",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlBaseCalculoIPI",
      label: "VlBaseCalculoIPI",
      name: "VlBaseCalculoIPI",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "VlIPI",
      label: "VlIPI",
      name: "VlIPI",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "VlDespesaAduaneira",
      label: "VlDespesaAduaneira",
      name: "VlDespesaAduaneira",
      typeField: "float",
      size: 8,
      scale: 4,
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
      field: "VlPIS",
      label: "VlPIS",
      name: "VlPIS",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "VlBaseCalculoCOFINS",
      label: "VlBaseCalculoCOFINS",
      name: "VlBaseCalculoCOFINS",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "VlCOFINS",
      label: "VlCOFINS",
      name: "VlCOFINS",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "VlCustosDiversosItem",
      label: "VlCustosDiversosItem",
      name: "VlCustosDiversosItem",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "ViaTransporte",
      label: "ViaTransporte",
      name: "ViaTransporte",
      typeField: "int",
      size: 5,
    },
    {
      field: "VlAFRMM",
      label: "VlAFRMM",
      name: "VlAFRMM",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "TipoIntermedio",
      label: "TipoIntermedio",
      name: "TipoIntermedio",
      typeField: "int",
      size: 5,
    },
    {
      field: "CNPJAdquirente",
      label: "CNPJAdquirente",
      name: "CNPJAdquirente",
      typeField: "int",
      size: 9,
    },
    {
      field: "UFCNPJAdquirente",
      label: "UFCNPJAdquirente",
      name: "UFCNPJAdquirente",
      typeField: "string",
      size: 2,
    },
    {
      field: "NumDrawback",
      label: "NumDrawback",
      name: "NumDrawback",
      typeField: "string",
      size: 11,
    },
    {
      field: "ChaveNFeImportacao",
      label: "ChaveNFeImportacao",
      name: "ChaveNFeImportacao",
      typeField: "string",
      size: 44,
    },
  ],
};
