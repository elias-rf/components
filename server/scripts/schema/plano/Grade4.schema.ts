import { TTable } from "../../../../types";

export const Grade4: TTable = {
  database: "plano",
  table: "Grade4",
  fields: [
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
