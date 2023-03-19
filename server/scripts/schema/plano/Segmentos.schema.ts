import { TTableDef } from "../../../../types/model";

export const Segmentos: TTableDef = {
  database: "plano",
  table: "Segmentos",
  fields: [
    {
      field: "CdSegmento",
      label: "CdSegmento",
      name: "Segmentos_id",
      typeField: "int",
      size: 2,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "NmSegmento",
      label: "NmSegmento",
      name: "NmSegmento",
      typeField: "string",
      size: 40,
      allowNull: false,
    },
  ],
};
