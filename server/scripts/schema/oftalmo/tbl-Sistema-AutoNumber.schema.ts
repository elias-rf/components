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
      size: 50,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Campo",
      label: "Campo",
      name: "Campo",
      typeField: "string",
      size: 30,
    },
    {
      field: "NextID",
      label: "NextID",
      name: "NextID",
      typeField: "int",
      size: 4,
      allowNull: false,
    },
  ],
};
