import { TTableDef } from "@/types/model";

export const TipoEntrega: TTableDef = {
  database: "plano",
  table: "TipoEntrega",
  fields: [
    {
      field: "Codigo",
      label: "Codigo",
      name: "TipoEntrega_id",
      typeField: "int",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "VlMinimo",
      label: "VlMinimo",
      name: "VlMinimo",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlTaxaEntrega",
      label: "VlTaxaEntrega",
      name: "VlTaxaEntrega",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "FgCalculaEntrega",
      label: "FgCalculaEntrega",
      name: "FgCalculaEntrega",
      typeField: "string",
    },
    {
      field: "FgImprimePedido",
      label: "FgImprimePedido",
      name: "FgImprimePedido",
      typeField: "string",
    },
    {
      field: "Impressora",
      label: "Impressora",
      name: "Impressora",
      typeField: "string",
    },
    {
      field: "PercAdicional",
      label: "PercAdicional",
      name: "PercAdicional",
      typeField: "float",

      scale: 4,
    },
    {
      field: "FiguraOrdemFaturamento",
      label: "FiguraOrdemFaturamento",
      name: "FiguraOrdemFaturamento",
      typeField: "string",
    },
    {
      field: "FgAtivo",
      label: "FgAtivo",
      name: "FgAtivo",
      typeField: "string",
    },
  ],
};
