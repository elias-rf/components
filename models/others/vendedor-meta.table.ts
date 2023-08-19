import { TTableDef } from "@/types/model";

export const vendedor_meta: TTableDef = {
  database: "oftalmo",
  table: "vendedor",
  fields: [
    {
      field: "id",
      label: "id",
      name: "vendedor_id",
      typeField: "int",
      typeForm: "text",
      allowNull: false,
      primaryKey: true,
    },
    {
      field: "uf",
      label: "uf",
      name: "uf",
      typeField: "string",
      typeForm: "text",
    },
    {
      field: "meta",
      label: "meta",
      name: "meta",
      typeField: "float",
      typeForm: "text",
    },
  ],
};
