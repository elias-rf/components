import { TTableDef } from "@/types/model";

export const tbl_Sistema_AutoNumber: TTableDef = {
  database: "oftalmo",
  table: "tbl_Sistema_AutoNumber",
  fields: [
    {
      field: "Tabela",
      label: "Tabela",
      name: "tbl_Sistema_AutoNumber_id",
      typeField: "string",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Campo",
      label: "Campo",
      name: "Campo",
      typeField: "string",
    },
    {
      field: "NextID",
      label: "NextID",
      name: "NextID",
      typeField: "int",

      allowNull: false,
    },
  ],
};
