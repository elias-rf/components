import type { TTableDef } from "@/types/model";

export const sys_resource: TTableDef = {
  database: "sys",
  table: "resource",
  fields: [
    {
      allowNull: false,
      field: "resource_id",
      label: "Resource",
      name: "resource_id",
      primaryKey: true,
      typeField: "int",
    },
    {
      field: "description",
      label: "Description",
      name: "description",
      typeField: "string",
    },
  ],
};
