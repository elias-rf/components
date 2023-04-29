import { TTableDef } from "@mono/types/model";

export const lixo: TTableDef = {
  database: "plano",
  table: "lixo",
  fields: [
    {
      field: "lote",
      label: "lote",
      name: "lixo_id",
      typeField: "string",
      size: 100,
      primaryKey: true,
      allowNull: false,
    },
  ],
};
