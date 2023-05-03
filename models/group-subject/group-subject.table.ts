import { TTableDef } from "@/types";

export const group_subject: TTableDef = {
  database: "oftalmo",
  table: "groupSubject",
  fields: [
    {
      field: "idGroup",
      label: "Grupo",
      name: "group_id",
      primaryKey: true,
      typeField: "string",
      allowNull: false,
    },
    {
      field: "idSubject",
      label: "Recurso",
      name: "subject_id",
      primaryKey: true,
      typeField: "string",
      allowNull: false,
    },
  ],
};
