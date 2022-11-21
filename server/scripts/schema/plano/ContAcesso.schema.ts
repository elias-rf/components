import { TTable } from "../../../../types";

export const ContAcesso: TTable = {
  database: "plano",
  table: "ContAcesso",
  fields: [
    {
      field: "Base",
      label: "Base",
      name: "Base",
      type: "string",
      size: 128,
      allowNull: false,
    },
    {
      field: "Estacao",
      label: "Estacao",
      name: "Estacao",
      type: "string",
      size: 128,
      allowNull: false,
    },
  ],
};
