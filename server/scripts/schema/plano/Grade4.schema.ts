import { TEntity } from "../../../../types";

export const Grade4: TEntity = {
  database: "plano",
  table: "Grade4",
  schema: [
    {
      field: "CdGrade4",
      label: "CdGrade4",
      name: "Grade4_id",
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
