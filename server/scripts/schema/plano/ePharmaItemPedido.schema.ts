import { TTableDef } from "@/types/model";

export const ePharmaItemPedido: TTableDef = {
  database: "plano",
  table: "ePharmaItemPedido",
  fields: [
    {
      field: "NumAutorizacao",
      label: "NumAutorizacao",
      name: "NumAutorizacao",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "CdProdutoePharma",
      label: "CdProdutoePharma",
      name: "CdProdutoePharma",
      typeField: "float",

      scale: 4,
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
      field: "Quantidade",
      label: "Quantidade",
      name: "Quantidade",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlBruto",
      label: "VlBruto",
      name: "VlBruto",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlLoja",
      label: "VlLoja",
      name: "VlLoja",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlReceberLoja",
      label: "VlReceberLoja",
      name: "VlReceberLoja",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlePharma",
      label: "VlePharma",
      name: "VlePharma",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlAquisicao",
      label: "VlAquisicao",
      name: "VlAquisicao",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlRepasse",
      label: "VlRepasse",
      name: "VlRepasse",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "FgMenorPreco",
      label: "FgMenorPreco",
      name: "FgMenorPreco",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "CdCategoria",
      label: "CdCategoria",
      name: "CdCategoria",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "FgConciliacao",
      label: "FgConciliacao",
      name: "FgConciliacao",
      typeField: "string",

      allowNull: false,
    },
  ],
};
