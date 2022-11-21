import { TTable } from "../../../../types";

export const NumeroFormula: TTable = {
  database: "plano",
  table: "NumeroFormula",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "NumeroFormula_id",
      type: "int",
      size: 4,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "NumUltFormula",
      label: "NumUltFormula",
      name: "NumUltFormula",
      type: "int",
      size: 4,
      allowNull: false,
    },
  ],
};
