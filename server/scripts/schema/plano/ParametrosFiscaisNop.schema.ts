import { TEntity } from "../../../../types";

export const ParametrosFiscaisNop: TEntity = {
  database: "plano",
  table: "ParametrosFiscaisNop",
  schema: [
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
