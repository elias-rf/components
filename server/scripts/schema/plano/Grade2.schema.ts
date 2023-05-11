import { TTableDef } from "@/types/model";

export const Grade2: TTableDef = {
  database: "plano",
  table: "Grade2",
  fields: [
    {
      field: "CdGrade2",
      label: "CdGrade2",
      name: "Grade2_id",
      typeField: "int",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      typeField: "string",
    },
  ],
};
