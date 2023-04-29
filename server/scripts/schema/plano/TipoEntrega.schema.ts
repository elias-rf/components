import { TTableDef } from "@mono/types/model";

export const TipoEntrega: TTableDef = {
  database: "plano",
  table: "TipoEntrega",
  fields: [
    {
      field: "Codigo",
      label: "Codigo",
      name: "TipoEntrega_id",
      typeField: "int",
      size: 2,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      typeField: "string",
      size: 30,
      allowNull: false,
    },
    {
      field: "VlMinimo",
      label: "VlMinimo",
      name: "VlMinimo",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlTaxaEntrega",
      label: "VlTaxaEntrega",
      name: "VlTaxaEntrega",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "FgCalculaEntrega",
      label: "FgCalculaEntrega",
      name: "FgCalculaEntrega",
      typeField: "string",
      size: 1,
    },
    {
      field: "FgImprimePedido",
      label: "FgImprimePedido",
      name: "FgImprimePedido",
      typeField: "string",
      size: 1,
    },
    {
      field: "Impressora",
      label: "Impressora",
      name: "Impressora",
      typeField: "string",
      size: 128,
    },
    {
      field: "PercAdicional",
      label: "PercAdicional",
      name: "PercAdicional",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "FiguraOrdemFaturamento",
      label: "FiguraOrdemFaturamento",
      name: "FiguraOrdemFaturamento",
      typeField: "string",
      size: 64,
    },
    {
      field: "FgAtivo",
      label: "FgAtivo",
      name: "FgAtivo",
      typeField: "string",
      size: 1,
    },
  ],
};
