import { TTableDef } from "@/types/model";

export const LayOutRemessa: TTableDef = {
  database: "plano",
  table: "LayOutRemessa",
  fields: [
    {
      field: "IdLayOut",
      label: "IdLayOut",
      name: "LayOutRemessa_id",
      typeField: "string",

      primaryKey: true,
      allowNull: false,
    },
  ],
};
