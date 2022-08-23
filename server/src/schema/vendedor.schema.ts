import { TEntity } from "@er/types/*";

export const vendedor_meta: TEntity = {
  database: "oftalmo",
  table: "vendedor",
  fields: [
    {
      field: "id",
      label: "id",
      name: "id",
      type: "int",
      allowNull: false,
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
