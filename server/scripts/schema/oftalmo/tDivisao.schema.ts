import { TTable } from "../../../../types/model";

export const tDivisao: TTable = {
  database: "oftalmo",
  table: "tDivisao",
  fields: [
    {
      field: "kDivisao",
      label: "kDivisao",
      name: "tDivisao_id",
      typeField: "int",
      size: 4,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Divisao",
      label: "Divisao",
      name: "Divisao",
      typeField: "string",
      size: 30,
      allowNull: false,
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      typeField: "string",
      size: 200,
    },
  ],
};
