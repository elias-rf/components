import { TTableDef } from "../../../../types/model";

export const LayOutRemessa: TTableDef = {
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
