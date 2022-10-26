import { TEntity } from "../../../../types";

export const LayOutRemessa: TEntity = {
  database: "plano",
  table: "LayOutRemessa",
  schema: [
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
