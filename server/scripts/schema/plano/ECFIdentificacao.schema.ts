import { TTable } from "../../../../types";

export const ECFIdentificacao: TTable = {
  database: "plano",
  table: "ECFIdentificacao",
  fields: [
    {
      field: "CNPJFilial",
      label: "CNPJFilial",
      name: "CNPJFilial",
      type: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "NumECF",
      label: "NumECF",
      name: "NumECF",
      type: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "NumFabricacao",
      label: "NumFabricacao",
      name: "NumFabricacao",
      type: "string",
      size: 64,
      allowNull: false,
    },
    {
      field: "ControleFilial",
      label: "ControleFilial",
      name: "ControleFilial",
      type: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "ControleFab",
      label: "ControleFab",
      name: "ControleFab",
      type: "string",
      size: 64,
      allowNull: false,
    },
  ],
};
