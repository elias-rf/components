import { TTable } from "../../../../types/model";

export const NumeroFormula: TTable = {
  database: "plano",
  table: "NumeroFormula",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "NumeroFormula_id",
      typeField: "int",
      size: 4,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "NumUltFormula",
      label: "NumUltFormula",
      name: "NumUltFormula",
      typeField: "int",
      size: 4,
      allowNull: false,
    },
  ],
};
