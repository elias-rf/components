import { TTableDef } from "@/types/model";

export const grupo: TTableDef = {
  database: "oftalmo",
  table: "tbl_Seguranca_Grupo",
  fields: [
    {
      field: "kGrupo",
      label: "Cód Grupo",
      name: "group_id",
      primaryKey: true,
      typeField: "int",
    },
    {
      field: "NomeGrupo",
      label: "Grupo",
      name: "name",
      typeField: "string",
    },
  ],
};
