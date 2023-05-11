import { TTableDef } from "@/types/model";

export const ComponentesRAT: TTableDef = {
  database: "plano",
  table: "ComponentesRAT",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NumeroRAT",
      label: "NumeroRAT",
      name: "NumeroRAT",
      typeField: "int",

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
    },
    {
      field: "VlLiquido",
      label: "VlLiquido",
      name: "VlLiquido",
      typeField: "float",

      scale: 4,
    },
    {
      field: "VlTotal",
      label: "VlTotal",
      name: "VlTotal",
      typeField: "float",

      scale: 4,
    },
    {
      field: "AliqIcms",
      label: "AliqIcms",
      name: "AliqIcms",
      typeField: "float",

      scale: 4,
    },
    {
      field: "PercDescItem",
      label: "PercDescItem",
      name: "PercDescItem",
      typeField: "float",

      scale: 4,
    },
    {
      field: "VlVenda",
      label: "VlVenda",
      name: "VlVenda",
      typeField: "float",

      scale: 4,
    },
    {
      field: "VlCusto",
      label: "VlCusto",
      name: "VlCusto",
      typeField: "float",

      scale: 4,
    },
    {
      field: "ReducaoICMS",
      label: "ReducaoICMS",
      name: "ReducaoICMS",
      typeField: "float",

      scale: 4,
    },
    {
      field: "PercComissao",
      label: "PercComissao",
      name: "PercComissao",
      typeField: "float",

      scale: 4,
    },
    {
      field: "TipoEstoque",
      label: "TipoEstoque",
      name: "TipoEstoque",
      typeField: "string",
    },
  ],
};
