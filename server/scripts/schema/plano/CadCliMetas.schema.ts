import { TTableDef } from "@/types/model";

export const CadCliMetas: TTableDef = {
  database: "plano",
  table: "CadCliMetas",
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
      field: "MesReferencia",
      label: "MesReferencia",
      name: "MesReferencia",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "VlMeta",
      label: "VlMeta",
      name: "VlMeta",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlMetaAjustada",
      label: "VlMetaAjustada",
      name: "VlMetaAjustada",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "QtdeMeta",
      label: "QtdeMeta",
      name: "QtdeMeta",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "QtdeMetaAjustada",
      label: "QtdeMetaAjustada",
      name: "QtdeMetaAjustada",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "DtUltAtualizacao",
      label: "DtUltAtualizacao",
      name: "DtUltAtualizacao",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
  ],
};
