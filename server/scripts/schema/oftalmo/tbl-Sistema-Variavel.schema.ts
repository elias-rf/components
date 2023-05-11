import { TTableDef } from "@/types/model";

export const tbl_Sistema_Variavel: TTableDef = {
  database: "oftalmo",
  table: "tbl_Sistema_Variavel",
  fields: [
    {
      field: "kVar",
      label: "kVar",
      name: "tbl_Sistema_Variavel_id",
      typeField: "string",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Vlr",
      label: "Vlr",
      name: "Vlr",
      typeField: "string",
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      typeField: "string",
    },
  ],
};
