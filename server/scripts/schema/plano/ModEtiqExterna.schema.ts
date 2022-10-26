import { TEntity } from "../../../../types";

export const ModEtiqExterna: TEntity = {
  database: "plano",
  table: "ModEtiqExterna",
  schema: [
    {
      field: "Codigo",
      label: "Codigo",
      name: "ModEtiqExterna_id",
      type: "int",
      size: 5,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      type: "string",
      size: 64,
      allowNull: false,
    },
  ],
};
