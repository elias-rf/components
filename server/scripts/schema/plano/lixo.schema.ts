import { TTableDef } from "@/types/model";

export const lixo: TTableDef = {
  database: "plano",
  table: "lixo",
  fields: [
    {
      field: "lote",
      label: "lote",
      name: "lixo_id",
      typeField: "string",

      primaryKey: true,
      allowNull: false,
    },
  ],
};
