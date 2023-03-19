import { TTableDef } from "../../../../types/model";

export const Grade1: TTableDef = {
  database: "plano",
  table: "Grade1",
  fields: [
    {
      field: "CdGrade1",
      label: "CdGrade1",
      name: "Grade1_id",
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
