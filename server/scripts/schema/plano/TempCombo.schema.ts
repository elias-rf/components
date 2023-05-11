import { TTableDef } from "@/types/model";

export const TempCombo: TTableDef = {
  database: "plano",
  table: "TempCombo",
  fields: [
    {
      field: "Estacao",
      label: "Estacao",
      name: "Estacao",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Origem",
      label: "Origem",
      name: "Origem",
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
      field: "CdCombo",
      label: "CdCombo",
      name: "CdCombo",
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
      field: "QtdeMinima",
      label: "QtdeMinima",
      name: "QtdeMinima",
      typeField: "int",

      scale: 5,
      allowNull: false,
    },
    {
      field: "QtdeMaxima",
      label: "QtdeMaxima",
      name: "QtdeMaxima",
      typeField: "int",

      scale: 5,
      allowNull: false,
    },
    {
      field: "VlUnidadeCombo",
      label: "VlUnidadeCombo",
      name: "VlUnidadeCombo",
      typeField: "int",

      scale: 5,
      allowNull: false,
    },
    {
      field: "QtdeVendida",
      label: "QtdeVendida",
      name: "QtdeVendida",
      typeField: "int",

      scale: 5,
      allowNull: false,
    },
    {
      field: "VlUnidadeVenda",
      label: "VlUnidadeVenda",
      name: "VlUnidadeVenda",
      typeField: "int",

      scale: 5,
      allowNull: false,
    },
    {
      field: "QtdeUtilizada",
      label: "QtdeUtilizada",
      name: "QtdeUtilizada",
      typeField: "int",

      scale: 5,
      allowNull: false,
    },
    {
      field: "QtdeCombo",
      label: "QtdeCombo",
      name: "QtdeCombo",
      typeField: "int",

      scale: 5,
      allowNull: false,
    },
  ],
};
