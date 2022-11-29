import { TTable } from "../types";

export const group_subject: TTable = {
  database: "oftalmo",
  table: "groupSubject",
  fields: [
    {
      field: "idGroup",
      label: "Grupo",
      name: "group_id",
      primaryKey: true,
      type: "string",
      allowNull: false,
    },
    {
      field: "idSubject",
      label: "Recurso",
      name: "subject_id",
      primaryKey: true,
      type: "string",
      allowNull: false,
    },
  ],
};
