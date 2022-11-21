import { TTable } from "../../../../types";

export const Sugestao: TTable = {
  database: "plano",
  table: "Sugestao",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      type: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "NumPedido",
      label: "NumPedido",
      name: "NumPedido",
      type: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "CdEmitente",
      label: "CdEmitente",
      name: "CdEmitente",
      type: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "CdVendedor",
      label: "CdVendedor",
      name: "CdVendedor",
      type: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "DtEntrega",
      label: "DtEntrega",
      name: "DtEntrega",
      type: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "LocalEntrega",
      label: "LocalEntrega",
      name: "LocalEntrega",
      type: "string",
      size: 1024,
    },
    {
      field: "NmFavorecido",
      label: "NmFavorecido",
      name: "NmFavorecido",
      type: "string",
      size: 40,
    },
    {
      field: "Obs",
      label: "Obs",
      name: "Obs",
      type: "string",
      size: 1024,
    },
    {
      field: "Posicao",
      label: "Posicao",
      name: "Posicao",
      type: "string",
      size: 1,
    },
    {
      field: "Proximidades",
      label: "Proximidades",
      name: "Proximidades",
      type: "string",
      size: 40,
    },
    {
      field: "VlPago",
      label: "VlPago",
      name: "VlPago",
      type: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "Tipo",
      label: "Tipo",
      name: "Tipo",
      type: "string",
      size: 1,
    },
    {
      field: "DtEmissao",
      label: "DtEmissao",
      name: "DtEmissao",
      type: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "Horario",
      label: "Horario",
      name: "Horario",
      type: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "VlTotal",
      label: "VlTotal",
      name: "VlTotal",
      type: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "FgSituacao",
      label: "FgSituacao",
      name: "FgSituacao",
      type: "string",
      size: 1,
    },
  ],
};
