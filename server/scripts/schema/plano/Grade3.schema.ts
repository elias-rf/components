import { TTable } from "../../../../types";

export const Grade3: TTable = {
  database: "plano",
  table: "Grade3",
  fields: [
    {
      field: "CdGrade3",
      label: "CdGrade3",
      name: "Grade3_id",
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
