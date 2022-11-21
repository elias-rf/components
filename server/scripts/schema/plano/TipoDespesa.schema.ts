import { TTable } from "../../../../types";

export const TipoDespesa: TTable = {
  database: "plano",
  table: "TipoDespesa",
  fields: [
    {
      field: "CdTipoDespesa",
      label: "CdTipoDespesa",
      name: "TipoDespesa_id",
      type: "int",
      size: 2,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Historico",
      label: "Historico",
      name: "Historico",
      type: "string",
      size: 30,
    },
  ],
};
