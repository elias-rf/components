import { TTable } from "../../../../types";

export const ModEtiqExterna: TTable = {
  database: "plano",
  table: "ModEtiqExterna",
  fields: [
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
