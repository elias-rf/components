import { TTable } from "../../../../types";

export const Formulas: TTable = {
  database: "plano",
  table: "Formulas",
  fields: [
    {
      field: "Origem",
      label: "Origem",
      name: "Origem",
      type: "string",
      size: 5,
      allowNull: false,
    },
    {
      field: "Destino",
      label: "Destino",
      name: "Destino",
      type: "string",
      size: 5,
      allowNull: false,
    },
    {
      field: "Formula",
      label: "Formula",
      name: "Formula",
      type: "string",
      size: 50,
    },
  ],
};
