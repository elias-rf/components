import { TEntity } from "../../../../types";

export const SegmentosCliente: TEntity = {
  database: "plano",
  table: "SegmentosCliente",
  schema: [
    {
      field: "CdCliente",
      label: "CdCliente",
      name: "CdCliente",
      type: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "CdSegmento",
      label: "CdSegmento",
      name: "CdSegmento",
      type: "int",
      size: 4,
      allowNull: false,
    },
  ],
};
