import { TTable } from "../../../../types";

export const tbl_Sistema_Grupo: TTable = {
  database: "oftalmo",
  table: "tbl_Sistema_Grupo",
  fields: [
    {
      field: "kSistemaGrupo",
      label: "kSistemaGrupo",
      name: "tbl_Sistema_Grupo_id",
      type: "int",
      size: 2,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "DescricaoGrupo",
      label: "DescricaoGrupo",
      name: "DescricaoGrupo",
      type: "string",
      size: 60,
    },
  ],
};
