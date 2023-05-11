import { TTableDef } from "@/types/model";

export const ECFIdentificacao: TTableDef = {
  database: "plano",
  table: "ECFIdentificacao",
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
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NumFabricacao",
      label: "NumFabricacao",
      name: "NumFabricacao",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "ControleFilial",
      label: "ControleFilial",
      name: "ControleFilial",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "ControleFab",
      label: "ControleFab",
      name: "ControleFab",
      typeField: "string",

      allowNull: false,
    },
  ],
};
