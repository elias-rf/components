import { TTable } from "../../../../types";

export const tbl_Sistema_AutoNumber: TTable = {
  database: "oftalmo",
  table: "tbl_Sistema_AutoNumber",
  fields: [
    {
      field: "Tabela",
      label: "Tabela",
      name: "tbl_Sistema_AutoNumber_id",
      type: "string",
      size: 50,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Campo",
      label: "Campo",
      name: "Campo",
      type: "string",
      size: 30,
    },
    {
      field: "NextID",
      label: "NextID",
      name: "NextID",
      type: "int",
      size: 4,
      allowNull: false,
    },
  ],
};
