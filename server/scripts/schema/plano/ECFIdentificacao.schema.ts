import { TTable } from "../../../../types/model";

export const ECFIdentificacao: TTable = {
  database: "plano",
  table: "ECFIdentificacao",
  fields: [
    {
      field: "CNPJFilial",
      label: "CNPJFilial",
      name: "CNPJFilial",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "NumECF",
      label: "NumECF",
      name: "NumECF",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "NumFabricacao",
      label: "NumFabricacao",
      name: "NumFabricacao",
      typeField: "string",
      size: 64,
      allowNull: false,
    },
    {
      field: "ControleFilial",
      label: "ControleFilial",
      name: "ControleFilial",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "ControleFab",
      label: "ControleFab",
      name: "ControleFab",
      typeField: "string",
      size: 64,
      allowNull: false,
    },
  ],
};
