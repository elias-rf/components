import { TEntity } from "../../../../types";

export const Grade1: TEntity = {
  database: "plano",
  table: "Grade1",
  fields: [
    {
      field: "CdGrade1",
      label: "CdGrade1",
      name: "Grade1_id",
      type: "int",
      size: 4,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      type: "string",
      size: 20,
    },
  ],
};
