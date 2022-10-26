import { TEntity } from "../../../../types";

export const tbl_Sistema_Variavel: TEntity = {
  database: "oftalmo",
  table: "tbl_Sistema_Variavel",
  schema: [
    {
      field: "kVar",
      label: "kVar",
      name: "tbl_Sistema_Variavel_id",
      type: "string",
      size: 50,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Vlr",
      label: "Vlr",
      name: "Vlr",
      type: "string",
      size: 250,
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      type: "string",
      size: 50,
    },
  ],
};
