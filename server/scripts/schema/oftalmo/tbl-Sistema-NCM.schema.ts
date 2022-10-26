import { TEntity } from "../../../../types";

export const tbl_Sistema_NCM: TEntity = {
  database: "oftalmo",
  table: "tbl_Sistema_NCM",
  schema: [
    {
      field: "KNCM",
      label: "KNCM",
      name: "tbl_Sistema_NCM_id",
      type: "int",
      size: 2,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "NCM",
      label: "NCM",
      name: "NCM",
      type: "string",
      size: 10,
      allowNull: false,
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      type: "string",
      size: 2000,
    },
  ],
};
