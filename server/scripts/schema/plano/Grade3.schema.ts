import { TTableDef } from "../../../../types/model";

export const Grade3: TTableDef = {
  database: "plano",
  table: "Grade3",
  fields: [
    {
      field: "CdGrade3",
      label: "CdGrade3",
      name: "Grade3_id",
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
