import { TTable } from "../../../../types";

export const tDivisao: TTable = {
  database: "oftalmo",
  table: "tDivisao",
  fields: [
    {
      field: "kDivisao",
      label: "kDivisao",
      name: "tDivisao_id",
      type: "int",
      size: 4,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Divisao",
      label: "Divisao",
      name: "Divisao",
      type: "string",
      size: 30,
      allowNull: false,
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      type: "string",
      size: 200,
    },
  ],
};
