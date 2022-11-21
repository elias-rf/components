import { TTable } from "../../../../types";

export const TEFRetorno: TTable = {
  database: "plano",
  table: "TEFRetorno",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      type: "int",
      size: 9,
      allowNull: false,
    },
    {
      field: "NumCupom",
      label: "NumCupom",
      name: "NumCupom",
      type: "int",
      size: 9,
      allowNull: false,
    },
    {
      field: "Sequencia",
      label: "Sequencia",
      name: "Sequencia",
      type: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "TipoCampo",
      label: "TipoCampo",
      name: "TipoCampo",
      type: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "Texto",
      label: "Texto",
      name: "Texto",
      type: "string",
      size: 2048,
      allowNull: false,
    },
  ],
};
