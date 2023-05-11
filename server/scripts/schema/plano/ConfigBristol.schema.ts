import { TTableDef } from "@/types/model";

export const ConfigBristol: TTableDef = {
  database: "plano",
  table: "ConfigBristol",
  fields: [
    {
      field: "CdFornecedor",
      label: "CdFornecedor",
      name: "ConfigBristol_id",
      typeField: "float",

      scale: 4,
      primaryKey: true,
      allowNull: false,
    },
  ],
};
