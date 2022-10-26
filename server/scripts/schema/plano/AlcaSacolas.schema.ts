import { TEntity } from "../../../../types";

export const AlcaSacolas: TEntity = {
  database: "plano",
  table: "AlcaSacolas",
  schema: [
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
