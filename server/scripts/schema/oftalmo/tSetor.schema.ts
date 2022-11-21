import { TTable } from "../../../../types";

export const tSetor: TTable = {
  database: "oftalmo",
  table: "tSetor",
  fields: [
    {
      field: "kSetor",
      label: "kSetor",
      name: "kSetor",
      type: "int",
      size: 4,
      autoIncrement: true,
      allowNull: false,
    },
    {
      field: "fkDivisao",
      label: "fkDivisao",
      name: "fkDivisao",
      type: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "Setor",
      label: "Setor",
      name: "Setor",
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
