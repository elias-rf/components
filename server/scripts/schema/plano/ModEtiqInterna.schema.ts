import { TTable } from "../../../../types";

export const ModEtiqInterna: TTable = {
  database: "plano",
  table: "ModEtiqInterna",
  fields: [
    {
      field: "Codigo",
      label: "Codigo",
      name: "ModEtiqInterna_id",
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
