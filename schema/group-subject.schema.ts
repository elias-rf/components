import { TEntity } from "../types";

export const group_subject: TEntity = {
  database: "oftalmo",
  table: "groupSubject",
  schema: [
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
      type: "string",
      allowNull: false,
    },
  ],
};
