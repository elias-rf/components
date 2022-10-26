import { TEntity } from "../../../../types";

export const tPlanItem: TEntity = {
  database: "oftalmo",
  table: "tPlanItem",
  schema: [
    {
      field: "kPlanItem",
      label: "kPlanItem",
      name: "tPlanItem_id",
      type: "int",
      size: 4,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "NomeItem",
      label: "NomeItem",
      name: "NomeItem",
      type: "string",
      size: 50,
      allowNull: false,
    },
    {
      field: "fkPlanGrupo",
      label: "fkPlanGrupo",
      name: "fkPlanGrupo",
      type: "int",
      size: 4,
      allowNull: false,
    },
  ],
};
