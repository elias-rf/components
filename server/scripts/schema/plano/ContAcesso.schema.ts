import { TTable } from "../../../../types/model";

export const ContAcesso: TTable = {
  database: "plano",
  table: "ContAcesso",
  fields: [
    {
      field: "Base",
      label: "Base",
      name: "Base",
      typeField: "string",
      size: 128,
      allowNull: false,
    },
    {
      field: "Estacao",
      label: "Estacao",
      name: "Estacao",
      typeField: "string",
      size: 128,
      allowNull: false,
    },
  ],
};
