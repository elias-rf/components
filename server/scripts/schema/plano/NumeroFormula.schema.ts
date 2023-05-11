import { TTableDef } from "@/types/model";

export const NumeroFormula: TTableDef = {
  database: "plano",
  table: "NumeroFormula",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "NumeroFormula_id",
      typeField: "int",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "NumUltFormula",
      label: "NumUltFormula",
      name: "NumUltFormula",
      typeField: "int",

      allowNull: false,
    },
  ],
};
