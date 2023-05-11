import { TTableDef } from "@/types/model";

export const ModEtiqInterna: TTableDef = {
  database: "plano",
  table: "ModEtiqInterna",
  fields: [
    {
      field: "Codigo",
      label: "Codigo",
      name: "ModEtiqInterna_id",
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
