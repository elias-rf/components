import { TTableDef } from "@/types/model";

export const RetencaoImposto: TTableDef = {
  database: "plano",
  table: "RetencaoImposto",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "CNPJ",
      label: "CNPJ",
      name: "CNPJ",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "Tipo",
      label: "Tipo",
      name: "Tipo",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "NumDocumentoCredito",
      label: "NumDocumentoCredito",
      name: "NumDocumentoCredito",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "SerieCredito",
      label: "SerieCredito",
      name: "SerieCredito",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "DtCredito",
      label: "DtCredito",
      name: "DtCredito",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "VlCredito",
      label: "VlCredito",
      name: "VlCredito",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "NumDocumentoDebito",
      label: "NumDocumentoDebito",
      name: "NumDocumentoDebito",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "SerieDebito",
      label: "SerieDebito",
      name: "SerieDebito",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "DtDebito",
      label: "DtDebito",
      name: "DtDebito",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "VlDebito",
      label: "VlDebito",
      name: "VlDebito",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
  ],
};
