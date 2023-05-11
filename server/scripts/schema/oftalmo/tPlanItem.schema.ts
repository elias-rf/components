import { TTableDef } from "@/types/model";

export const tPlanItem: TTableDef = {
  database: "oftalmo",
  table: "tPlanItem",
  fields: [
    {
      field: "kPlanItem",
      label: "kPlanItem",
      name: "tPlanItem_id",
      typeField: "int",

      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "NomeItem",
      label: "NomeItem",
      name: "NomeItem",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "fkPlanGrupo",
      label: "fkPlanGrupo",
      name: "fkPlanGrupo",
      typeField: "int",

      allowNull: false,
    },
  ],
};
