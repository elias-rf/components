import { TTableDef } from "@mono/types/model";

export const Grade2: TTableDef = {
  database: "plano",
  table: "Grade2",
  fields: [
    {
      field: "CdGrade2",
      label: "CdGrade2",
      name: "Grade2_id",
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
