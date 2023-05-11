import { TTableDef } from "@/types/model";

export const ECFItem: TTableDef = {
  database: "plano",
  table: "ECFItem",
  fields: [
    {
      field: "CNPJFilial",
      label: "CNPJFilial",
      name: "CNPJFilial",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "NumECF",
      label: "NumECF",
      name: "NumECF",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "DtEmissao",
      label: "DtEmissao",
      name: "DtEmissao",
      typeField: "datetime",

      scale: 3,
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
      field: "NumCupom",
      label: "NumCupom",
      name: "NumCupom",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "NumCOO",
      label: "NumCOO",
      name: "NumCOO",
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
      field: "VlUnitario",
      label: "VlUnitario",
      name: "VlUnitario",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlTotal",
      label: "VlTotal",
      name: "VlTotal",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "AliqImposto",
      label: "AliqImposto",
      name: "AliqImposto",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlImposto",
      label: "VlImposto",
      name: "VlImposto",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
  ],
};
