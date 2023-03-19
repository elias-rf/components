import { TTableDef } from "../../../../types/model";

export const Conhecimentos: TTableDef = {
  database: "plano",
  table: "Conhecimentos",
  fields: [
    {
      field: "NumDocumento",
      label: "NumDocumento",
      name: "NumDocumento",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
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
      field: "NumPedido",
      label: "NumPedido",
      name: "NumPedido",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "NumNota",
      label: "NumNota",
      name: "NumNota",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "Serie",
      label: "Serie",
      name: "Serie",
      typeField: "string",
      size: 2,
      allowNull: false,
    },
    {
      field: "Tipo",
      label: "Tipo",
      name: "Tipo",
      typeField: "string",
      size: 1,
      allowNull: false,
    },
    {
      field: "Data",
      label: "Data",
      name: "Data",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "CdTransportadora",
      label: "CdTransportadora",
      name: "CdTransportadora",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "Valor",
      label: "Valor",
      name: "Valor",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "FgStatus",
      label: "FgStatus",
      name: "FgStatus",
      typeField: "string",
      size: 1,
      allowNull: false,
    },
    {
      field: "Modelo",
      label: "Modelo",
      name: "Modelo",
      typeField: "string",
      size: 3,
      allowNull: false,
    },
  ],
};
