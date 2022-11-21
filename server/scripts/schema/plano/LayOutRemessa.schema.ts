import { TTable } from "../../../../types";

export const LayOutRemessa: TTable = {
  database: "plano",
  table: "LayOutRemessa",
  fields: [
    {
      field: "IdLayOut",
      label: "IdLayOut",
      name: "LayOutRemessa_id",
      type: "string",
      size: 124,
      primaryKey: true,
      allowNull: false,
    },
  ],
};
