import { TTableDef } from "@/types/model";

export const ItemNotaIPI: TTableDef = {
  database: "plano",
  table: "ItemNotaIPI",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "NumNota",
      label: "NumNota",
      name: "NumNota",
      typeField: "float",

      scale: 4,
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
      field: "CdEnquadramentoIPI",
      label: "CdEnquadramentoIPI",
      name: "CdEnquadramentoIPI",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "ClasseEnquadramentoIPI",
      label: "ClasseEnquadramentoIPI",
      name: "ClasseEnquadramentoIPI",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "CdSeloIPI",
      label: "CdSeloIPI",
      name: "CdSeloIPI",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "QtdeSelo",
      label: "QtdeSelo",
      name: "QtdeSelo",
      typeField: "int",

      allowNull: false,
    },
  ],
};
