import { TTableDef } from "../../../../types/model";

export const ePharmaItemPedido: TTableDef = {
  database: "plano",
  table: "ePharmaItemPedido",
  fields: [
    {
      field: "NumAutorizacao",
      label: "NumAutorizacao",
      name: "NumAutorizacao",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "CdProdutoePharma",
      label: "CdProdutoePharma",
      name: "CdProdutoePharma",
      typeField: "float",
      size: 8,
      scale: 4,
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
      field: "Quantidade",
      label: "Quantidade",
      name: "Quantidade",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlBruto",
      label: "VlBruto",
      name: "VlBruto",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlLoja",
      label: "VlLoja",
      name: "VlLoja",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlReceberLoja",
      label: "VlReceberLoja",
      name: "VlReceberLoja",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlePharma",
      label: "VlePharma",
      name: "VlePharma",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlAquisicao",
      label: "VlAquisicao",
      name: "VlAquisicao",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlRepasse",
      label: "VlRepasse",
      name: "VlRepasse",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "FgMenorPreco",
      label: "FgMenorPreco",
      name: "FgMenorPreco",
      typeField: "string",
      size: 1,
      allowNull: false,
    },
    {
      field: "CdCategoria",
      label: "CdCategoria",
      name: "CdCategoria",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "FgConciliacao",
      label: "FgConciliacao",
      name: "FgConciliacao",
      typeField: "string",
      size: 1,
      allowNull: false,
    },
  ],
};
