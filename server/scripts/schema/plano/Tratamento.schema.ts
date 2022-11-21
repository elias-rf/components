import { TTable } from "../../../../types";

export const Tratamento: TTable = {
  database: "plano",
  table: "Tratamento",
  fields: [
    {
      field: "Comprimento",
      label: "Comprimento",
      name: "Comprimento",
      type: "int",
      size: 9,
      scale: 2,
      allowNull: false,
    },
    {
      field: "NumCliche",
      label: "NumCliche",
      name: "NumCliche",
      type: "int",
      size: 9,
      scale: 2,
      allowNull: false,
    },
    {
      field: "FormulaTratamento",
      label: "FormulaTratamento",
      name: "FormulaTratamento",
      type: "string",
      size: 70,
      allowNull: false,
    },
  ],
};
