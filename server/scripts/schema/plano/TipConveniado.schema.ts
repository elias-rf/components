import { TTableDef } from "../../../../types/model";

export const TipConveniado: TTableDef = {
  database: "plano",
  table: "TipConveniado",
  fields: [
    {
      field: "CdTipConveniado",
      label: "CdTipConveniado",
      name: "TipConveniado_id",
      typeField: "int",
      size: 2,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "DsTipConveniado",
      label: "DsTipConveniado",
      name: "DsTipConveniado",
      typeField: "string",
      size: 30,
      allowNull: false,
    },
  ],
};
