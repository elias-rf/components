import { TTableDef } from "@mono/types/model";

export const tbl_Seguranca_Grupo: TTableDef = {
  database: "oftalmo",
  table: "tbl_Seguranca_Grupo",
  fields: [
    {
      field: "kGrupo",
      label: "kGrupo",
      name: "tbl_Seguranca_Grupo_id",
      typeField: "int",
      size: 4,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "NomeGrupo",
      label: "NomeGrupo",
      name: "NomeGrupo",
      typeField: "string",
      size: 50,
    },
  ],
};
