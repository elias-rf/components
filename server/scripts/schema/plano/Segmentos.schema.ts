import { TEntity } from "../../../../types";

export const Segmentos: TEntity = {
  database: "plano",
  table: "Segmentos",
  fields: [
    {
      field: "CdSegmento",
      label: "CdSegmento",
      name: "Segmentos_id",
      type: "int",
      size: 2,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "NmSegmento",
      label: "NmSegmento",
      name: "NmSegmento",
      type: "string",
      size: 40,
      allowNull: false,
    },
  ],
};
