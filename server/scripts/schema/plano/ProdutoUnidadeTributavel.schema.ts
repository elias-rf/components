import { TTable } from "../../../../types/model";

export const ProdutoUnidadeTributavel: TTable = {
  database: "plano",
  table: "ProdutoUnidadeTributavel",
  fields: [
    {
      field: "CdEmpresa",
      label: "CdEmpresa",
      name: "CdEmpresa",
      typeField: "int",
      size: 9,
      allowNull: false,
    },
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "CdProduto",
      typeField: "string",
      size: 18,
      allowNull: false,
    },
    {
      field: "UnidadeTributavel",
      label: "UnidadeTributavel",
      name: "UnidadeTributavel",
      typeField: "string",
      size: 4,
      allowNull: false,
    },
    {
      field: "QtdeComercial",
      label: "QtdeComercial",
      name: "QtdeComercial",
      typeField: "int",
      size: 5,
      scale: 5,
      allowNull: false,
    },
    {
      field: "QtdeTributavel",
      label: "QtdeTributavel",
      name: "QtdeTributavel",
      typeField: "int",
      size: 5,
      scale: 5,
      allowNull: false,
    },
  ],
};
