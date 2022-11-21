import { TTable } from "../../../../types";

export const ContAjuda: TTable = {
  database: "plano",
  table: "ContAjuda",
  fields: [
    {
      field: "Funcao",
      label: "Funcao",
      name: "Funcao",
      type: "string",
      size: 64,
      allowNull: false,
    },
    {
      field: "Usuario",
      label: "Usuario",
      name: "Usuario",
      type: "string",
      size: 64,
      allowNull: false,
    },
  ],
};
