import { TTableDef } from "@/types/model";

export const ProdutoUnidadeTributavel: TTableDef = {
  database: "plano",
  table: "ProdutoUnidadeTributavel",
  fields: [
    {
      field: "CdEmpresa",
      label: "CdEmpresa",
      name: "CdEmpresa",
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
      field: "UnidadeTributavel",
      label: "UnidadeTributavel",
      name: "UnidadeTributavel",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "QtdeComercial",
      label: "QtdeComercial",
      name: "QtdeComercial",
      typeField: "int",

      scale: 5,
      allowNull: false,
    },
    {
      field: "QtdeTributavel",
      label: "QtdeTributavel",
      name: "QtdeTributavel",
      typeField: "int",

      scale: 5,
      allowNull: false,
    },
  ],
};
