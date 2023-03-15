import { TTable } from "../../../../types/model";

export const tbl_Sistema_Variavel: TTable = {
  database: "oftalmo",
  table: "tbl_Sistema_Variavel",
  fields: [
    {
      field: "kVar",
      label: "kVar",
      name: "tbl_Sistema_Variavel_id",
      typeField: "string",
      size: 50,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Vlr",
      label: "Vlr",
      name: "Vlr",
      typeField: "string",
      size: 250,
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      typeField: "string",
      size: 50,
    },
  ],
};
