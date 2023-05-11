import { TTableDef } from "@/types/model";

export const tbl_Sistema_Objeto_Grupo: TTableDef = {
  database: "oftalmo",
  table: "tbl_Sistema_Objeto_Grupo",
  fields: [
    {
      field: "fkGrupo",
      label: "fkGrupo",
      name: "fkGrupo",
      typeField: "int",

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
