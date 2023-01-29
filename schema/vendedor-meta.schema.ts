import { TTable } from "../types";

export const vendedor_meta: TTable = {
  database: "oftalmo",
  table: "vendedor",
  fields: [
    {
      field: "id",
      label: "id",
      name: "vendedor_id",
      type: "int",
      allowNull: false,
      primaryKey: true,
    },
    {
      field: "uf",
      label: "uf",
      name: "uf",
      type: "string",
    },
    {
      field: "meta",
      label: "meta",
      name: "meta",
      type: "float",
    },
  ],
};
