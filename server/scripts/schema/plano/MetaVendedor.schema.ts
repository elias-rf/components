import { TTableDef } from "@/types/model";

export const MetaVendedor: TTableDef = {
  database: "plano",
  table: "MetaVendedor",
  fields: [
    {
      field: "CdVendedor",
      label: "CdVendedor",
      name: "CdVendedor",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "MesReferencia",
      label: "MesReferencia",
      name: "MesReferencia",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "VlMeta",
      label: "VlMeta",
      name: "VlMeta",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "QtdeMeta",
      label: "QtdeMeta",
      name: "QtdeMeta",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "VlRealizado",
      label: "VlRealizado",
      name: "VlRealizado",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "QtdeRealizado",
      label: "QtdeRealizado",
      name: "QtdeRealizado",
      typeField: "float",
      size: 8,
      scale: 4,
    },
  ],
};
