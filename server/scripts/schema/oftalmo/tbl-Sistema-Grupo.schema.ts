import { TTableDef } from "../../../../types/model";

export const tbl_Sistema_Grupo: TTableDef = {
  database: "oftalmo",
  table: "tbl_Sistema_Grupo",
  fields: [
    {
      field: "kSistemaGrupo",
      label: "kSistemaGrupo",
      name: "tbl_Sistema_Grupo_id",
      typeField: "int",
      size: 2,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "DescricaoGrupo",
      label: "DescricaoGrupo",
      name: "DescricaoGrupo",
      typeField: "string",
      size: 60,
    },
  ],
};
