import { TTableDef } from "@/types/model";

export const ModEtiqExterna: TTableDef = {
  database: "plano",
  table: "ModEtiqExterna",
  fields: [
    {
      field: "Codigo",
      label: "Codigo",
      name: "ModEtiqExterna_id",
      typeField: "int",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      typeField: "string",

      allowNull: false,
    },
  ],
};
