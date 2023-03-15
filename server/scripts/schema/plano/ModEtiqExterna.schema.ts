import { TTable } from "../../../../types/model";

export const ModEtiqExterna: TTable = {
  database: "plano",
  table: "ModEtiqExterna",
  fields: [
    {
      field: "Codigo",
      label: "Codigo",
      name: "ModEtiqExterna_id",
      typeField: "int",
      size: 5,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      typeField: "string",
      size: 64,
      allowNull: false,
    },
  ],
};
