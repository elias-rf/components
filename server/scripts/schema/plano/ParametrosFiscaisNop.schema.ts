import { TTable } from "../../../../types";

export const ParametrosFiscaisNop: TTable = {
  database: "plano",
  table: "ParametrosFiscaisNop",
  fields: [
    {
      field: "IdParametro",
      label: "IdParametro",
      name: "IdParametro",
      type: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "Nop",
      label: "Nop",
      name: "Nop",
      type: "int",
      size: 2,
      allowNull: false,
    },
  ],
};
