import { TTable } from "../../../../types/model";

export const SegmentosCliente: TTable = {
  database: "plano",
  table: "SegmentosCliente",
  fields: [
    {
      field: "CdCliente",
      label: "CdCliente",
      name: "CdCliente",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "CdSegmento",
      label: "CdSegmento",
      name: "CdSegmento",
      typeField: "int",
      size: 4,
      allowNull: false,
    },
  ],
};
