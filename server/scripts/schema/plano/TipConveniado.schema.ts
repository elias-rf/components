import { TTable } from "../../../../types";

export const TipConveniado: TTable = {
  database: "plano",
  table: "TipConveniado",
  fields: [
    {
      field: "CdTipConveniado",
      label: "CdTipConveniado",
      name: "TipConveniado_id",
      type: "int",
      size: 2,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "DsTipConveniado",
      label: "DsTipConveniado",
      name: "DsTipConveniado",
      type: "string",
      size: 30,
      allowNull: false,
    },
  ],
};
