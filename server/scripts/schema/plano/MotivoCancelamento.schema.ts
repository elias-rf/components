import { TTable } from "../../../../types";

export const MotivoCancelamento: TTable = {
  database: "plano",
  table: "MotivoCancelamento",
  fields: [
    {
      field: "Codigo",
      label: "Codigo",
      name: "MotivoCancelamento_id",
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
      size: 60,
    },
  ],
};
