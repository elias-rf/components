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
      size: 2,
      allowNull: false,
    },
    {
      field: "fkObjeto",
      label: "fkObjeto",
      name: "fkObjeto",
      typeField: "string",
      size: 4,
      allowNull: false,
    },
  ],
};
