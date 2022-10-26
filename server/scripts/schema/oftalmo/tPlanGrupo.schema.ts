import { TEntity } from "../../../../types";

export const tPlanGrupo: TEntity = {
  database: "oftalmo",
  table: "tPlanGrupo",
  schema: [
    {
      field: "kPlanGrupo",
      label: "kPlanGrupo",
      name: "tPlanGrupo_id",
      type: "int",
      size: 4,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "NomeGrupo",
      label: "NomeGrupo",
      name: "NomeGrupo",
      type: "string",
      size: 50,
      allowNull: false,
    },
  ],
};
