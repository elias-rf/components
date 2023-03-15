import { TTable } from "../../../../types/model";

export const TipoDespesa: TTable = {
  database: "plano",
  table: "TipoDespesa",
  fields: [
    {
      field: "CdTipoDespesa",
      label: "CdTipoDespesa",
      name: "TipoDespesa_id",
      typeField: "int",
      size: 2,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Historico",
      label: "Historico",
      name: "Historico",
      typeField: "string",
      size: 30,
    },
  ],
};
