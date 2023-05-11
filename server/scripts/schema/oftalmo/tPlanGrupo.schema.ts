import { TTableDef } from "@/types/model";

export const tPlanGrupo: TTableDef = {
  database: "oftalmo",
  table: "tPlanGrupo",
  fields: [
    {
      field: "kPlanGrupo",
      label: "kPlanGrupo",
      name: "tPlanGrupo_id",
      typeField: "int",

      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "NomeGrupo",
      label: "NomeGrupo",
      name: "NomeGrupo",
      typeField: "string",

      allowNull: false,
    },
  ],
};
