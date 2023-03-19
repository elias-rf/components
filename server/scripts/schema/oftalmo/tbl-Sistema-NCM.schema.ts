import { TTableDef } from "../../../../types/model";

export const tbl_Sistema_NCM: TTableDef = {
  database: "oftalmo",
  table: "tbl_Sistema_NCM",
  fields: [
    {
      field: "KNCM",
      label: "KNCM",
      name: "tbl_Sistema_NCM_id",
      typeField: "int",
      size: 2,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "NCM",
      label: "NCM",
      name: "NCM",
      typeField: "string",
      size: 10,
      allowNull: false,
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      typeField: "string",
      size: 2000,
    },
  ],
};
