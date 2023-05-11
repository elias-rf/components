import { TTableDef } from "@/types/model";

export const Sugestao: TTableDef = {
  database: "plano",
  table: "Sugestao",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NumPedido",
      label: "NumPedido",
      name: "NumPedido",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdEmitente",
      label: "CdEmitente",
      name: "CdEmitente",
      typeField: "float",

      scale: 4,
    },
    {
      field: "CdVendedor",
      label: "CdVendedor",
      name: "CdVendedor",
      typeField: "float",

      scale: 4,
    },
    {
      field: "DtEntrega",
      label: "DtEntrega",
      name: "DtEntrega",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "LocalEntrega",
      label: "LocalEntrega",
      name: "LocalEntrega",
      typeField: "string",
    },
    {
      field: "NmFavorecido",
      label: "NmFavorecido",
      name: "NmFavorecido",
      typeField: "string",
    },
    {
      field: "Obs",
      label: "Obs",
      name: "Obs",
      typeField: "string",
    },
    {
      field: "Posicao",
      label: "Posicao",
      name: "Posicao",
      typeField: "string",
    },
    {
      field: "Proximidades",
      label: "Proximidades",
      name: "Proximidades",
      typeField: "string",
    },
    {
      field: "VlPago",
      label: "VlPago",
      name: "VlPago",
      typeField: "float",

      scale: 4,
    },
    {
      field: "Tipo",
      label: "Tipo",
      name: "Tipo",
      typeField: "string",
    },
    {
      field: "DtEmissao",
      label: "DtEmissao",
      name: "DtEmissao",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "Horario",
      label: "Horario",
      name: "Horario",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "VlTotal",
      label: "VlTotal",
      name: "VlTotal",
      typeField: "float",

      scale: 4,
    },
    {
      field: "FgSituacao",
      label: "FgSituacao",
      name: "FgSituacao",
      typeField: "string",
    },
  ],
};
