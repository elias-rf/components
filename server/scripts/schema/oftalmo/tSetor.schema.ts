import { TTable } from "../../../../types/model";

export const tSetor: TTable = {
  database: "oftalmo",
  table: "tSetor",
  fields: [
    {
      field: "kSetor",
      label: "kSetor",
      name: "kSetor",
      typeField: "int",
      size: 4,
      autoIncrement: true,
      allowNull: false,
    },
    {
      field: "fkDivisao",
      label: "fkDivisao",
      name: "fkDivisao",
      typeField: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "Setor",
      label: "Setor",
      name: "Setor",
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
