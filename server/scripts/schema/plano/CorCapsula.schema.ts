import { TTableDef } from "@/types/model";

export const CorCapsula: TTableDef = {
  database: "plano",
  table: "CorCapsula",
  fields: [
    {
      field: "CdCorCapsula",
      label: "CdCorCapsula",
      name: "CorCapsula_id",
      typeField: "int",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "NmCorCapsula",
      label: "NmCorCapsula",
      name: "NmCorCapsula",
      typeField: "string",

      allowNull: false,
    },
  ],
};
