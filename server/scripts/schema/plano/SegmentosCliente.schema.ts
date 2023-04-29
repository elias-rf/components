import { TTableDef } from "@mono/types/model";

export const SegmentosCliente: TTableDef = {
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
