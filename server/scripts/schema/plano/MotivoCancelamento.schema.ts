import { TTableDef } from "@/types/model";

export const MotivoCancelamento: TTableDef = {
  database: "plano",
  table: "MotivoCancelamento",
  fields: [
    {
      field: "Codigo",
      label: "Codigo",
      name: "MotivoCancelamento_id",
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
      size: 60,
    },
  ],
};
