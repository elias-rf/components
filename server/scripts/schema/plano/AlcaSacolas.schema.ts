import { TTable } from "../../../../types";

export const AlcaSacolas: TTable = {
  database: "plano",
  table: "AlcaSacolas",
  fields: [
    {
      field: "CdAlca",
      label: "CdAlca",
      name: "AlcaSacolas_id",
      type: "int",
      size: 9,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      type: "string",
      size: 70,
      allowNull: false,
    },
  ],
};
