import { TTableDef } from "@/types/model";

export const NotaCombustivel: TTableDef = {
  database: "plano",
  table: "NotaCombustivel",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NumNota",
      label: "NumNota",
      name: "NumNota",
      typeField: "int",

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
      field: "CdANP",
      label: "CdANP",
      name: "CdANP",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "CdCODIF",
      label: "CdCODIF",
      name: "CdCODIF",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "QtdeFatTemp",
      label: "QtdeFatTemp",
      name: "QtdeFatTemp",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "UFConsumo",
      label: "UFConsumo",
      name: "UFConsumo",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "QtdeBaseCalculoCIDE",
      label: "QtdeBaseCalculoCIDE",
      name: "QtdeBaseCalculoCIDE",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "AliquotaCIDE",
      label: "AliquotaCIDE",
      name: "AliquotaCIDE",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlCIDE",
      label: "VlCIDE",
      name: "VlCIDE",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "PercGasNatural",
      label: "PercGasNatural",
      name: "PercGasNatural",
      typeField: "float",

      scale: 4,
    },
  ],
};
