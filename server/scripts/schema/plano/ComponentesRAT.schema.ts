import { TTable } from "../../../../types";

export const ComponentesRAT: TTable = {
  database: "plano",
  table: "ComponentesRAT",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      type: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "NumeroRAT",
      label: "NumeroRAT",
      name: "NumeroRAT",
      type: "int",
      size: 4,
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
      field: "Quantidade",
      label: "Quantidade",
      name: "Quantidade",
      type: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "VlLiquido",
      label: "VlLiquido",
      name: "VlLiquido",
      type: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "VlTotal",
      label: "VlTotal",
      name: "VlTotal",
      type: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "AliqIcms",
      label: "AliqIcms",
      name: "AliqIcms",
      type: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "PercDescItem",
      label: "PercDescItem",
      name: "PercDescItem",
      type: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "VlVenda",
      label: "VlVenda",
      name: "VlVenda",
      type: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "VlCusto",
      label: "VlCusto",
      name: "VlCusto",
      type: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "ReducaoICMS",
      label: "ReducaoICMS",
      name: "ReducaoICMS",
      type: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "PercComissao",
      label: "PercComissao",
      name: "PercComissao",
      type: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "TipoEstoque",
      label: "TipoEstoque",
      name: "TipoEstoque",
      type: "string",
      size: 1,
    },
  ],
};
