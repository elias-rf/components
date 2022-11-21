import { TTable } from "../../../../types";

export const lixo: TTable = {
  database: "plano",
  table: "lixo",
  fields: [
    {
      field: "lote",
      label: "lote",
      name: "lixo_id",
      type: "string",
      size: 100,
      primaryKey: true,
      allowNull: false,
    },
  ],
};
