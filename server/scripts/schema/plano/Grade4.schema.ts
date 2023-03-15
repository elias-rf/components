import { TTable } from "../../../../types/model";

export const Grade4: TTable = {
  database: "plano",
  table: "Grade4",
  fields: [
    {
      field: "CdGrade4",
      label: "CdGrade4",
      name: "Grade4_id",
      typeField: "int",
      size: 4,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      typeField: "string",
      size: 20,
    },
  ],
};
