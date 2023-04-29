import { TTableDef } from "@mono/types/model";

export const tPlanGrupo: TTableDef = {
  database: "oftalmo",
  table: "tPlanGrupo",
  fields: [
    {
      field: "kPlanGrupo",
      label: "kPlanGrupo",
      name: "tPlanGrupo_id",
      typeField: "int",
      size: 4,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "NomeGrupo",
      label: "NomeGrupo",
      name: "NomeGrupo",
      typeField: "string",
      size: 50,
      allowNull: false,
    },
  ],
};
