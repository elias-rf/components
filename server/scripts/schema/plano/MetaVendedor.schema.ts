import { TEntity } from "../../../../types";

export const MetaVendedor: TEntity = {
  database: "plano",
  table: "MetaVendedor",
  schema: [
    {
      field: "CdVendedor",
      label: "CdVendedor",
      name: "CdVendedor",
      type: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "MesReferencia",
      label: "MesReferencia",
      name: "MesReferencia",
      type: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "VlMeta",
      label: "VlMeta",
      name: "VlMeta",
      type: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "QtdeMeta",
      label: "QtdeMeta",
      name: "QtdeMeta",
      type: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "VlRealizado",
      label: "VlRealizado",
      name: "VlRealizado",
      type: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "QtdeRealizado",
      label: "QtdeRealizado",
      name: "QtdeRealizado",
      type: "float",
      size: 8,
      scale: 4,
    },
  ],
};
