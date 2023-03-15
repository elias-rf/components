import { TTable } from "../../../../types/model";

export const RetencaoImposto: TTable = {
  database: "plano",
  table: "RetencaoImposto",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "CNPJ",
      label: "CNPJ",
      name: "CNPJ",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "Tipo",
      label: "Tipo",
      name: "Tipo",
      typeField: "string",
      size: 2,
      allowNull: false,
    },
    {
      field: "NumDocumentoCredito",
      label: "NumDocumentoCredito",
      name: "NumDocumentoCredito",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "SerieCredito",
      label: "SerieCredito",
      name: "SerieCredito",
      typeField: "string",
      size: 3,
      allowNull: false,
    },
    {
      field: "DtCredito",
      label: "DtCredito",
      name: "DtCredito",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "VlCredito",
      label: "VlCredito",
      name: "VlCredito",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "NumDocumentoDebito",
      label: "NumDocumentoDebito",
      name: "NumDocumentoDebito",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "SerieDebito",
      label: "SerieDebito",
      name: "SerieDebito",
      typeField: "string",
      size: 3,
      allowNull: false,
    },
    {
      field: "DtDebito",
      label: "DtDebito",
      name: "DtDebito",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "VlDebito",
      label: "VlDebito",
      name: "VlDebito",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
  ],
};
