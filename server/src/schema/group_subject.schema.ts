import { TEntity } from "@er/types/*";

export const agenda_telefone: TEntity = {
  database: "oftalmo",
  table: "phonebook",
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
      type: "string",
      allowNull: false,
    },
  ],
};
