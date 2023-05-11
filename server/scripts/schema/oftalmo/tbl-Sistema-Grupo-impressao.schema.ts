import { TTableDef } from "@/types/model";

export const tbl_Sistema_Grupo_impressao: TTableDef = {
  database: "oftalmo",
  table: "tbl_Sistema_Grupo_impressao",
  fields: [
    {
      field: "Grupo",
      label: "Grupo",
      name: "Grupo",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "fkObjeto",
      label: "fkObjeto",
      name: "fkObjeto",
      typeField: "string",

      allowNull: false,
    },
  ],
};
