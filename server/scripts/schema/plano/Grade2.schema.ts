import { TTable } from "../../../../types";

export const Grade2: TTable = {
  database: "plano",
  table: "Grade2",
  fields: [
    {
      field: "CdGrade2",
      label: "CdGrade2",
      name: "Grade2_id",
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
