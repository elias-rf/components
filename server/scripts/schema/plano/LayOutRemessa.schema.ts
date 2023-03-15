import { TTable } from "../../../../types/model";

export const LayOutRemessa: TTable = {
  database: "plano",
  table: "LayOutRemessa",
  fields: [
    {
      field: "IdLayOut",
      label: "IdLayOut",
      name: "LayOutRemessa_id",
      typeField: "string",
      size: 124,
      primaryKey: true,
      allowNull: false,
    },
  ],
};
