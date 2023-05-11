import { TTableDef } from "@/types/model";

export const SegmentosCliente: TTableDef = {
  database: "plano",
  table: "SegmentosCliente",
  fields: [
    {
      field: "CdCliente",
      label: "CdCliente",
      name: "CdCliente",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "CdSegmento",
      label: "CdSegmento",
      name: "CdSegmento",
      typeField: "int",

      allowNull: false,
    },
  ],
};
