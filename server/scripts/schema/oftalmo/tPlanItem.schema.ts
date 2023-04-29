import { TTableDef } from "@mono/types/model";

export const tPlanItem: TTableDef = {
  database: "oftalmo",
  table: "tPlanItem",
  fields: [
    {
      field: "kPlanItem",
      label: "kPlanItem",
      name: "tPlanItem_id",
      typeField: "int",
      size: 4,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "NomeItem",
      label: "NomeItem",
      name: "NomeItem",
      typeField: "string",
      size: 50,
      allowNull: false,
    },
    {
      field: "fkPlanGrupo",
      label: "fkPlanGrupo",
      name: "fkPlanGrupo",
      typeField: "int",
      size: 4,
      allowNull: false,
    },
  ],
};
