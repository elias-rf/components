import { TTableDef } from "@/types/model";

export const VidaLinkPedido: TTableDef = {
  database: "plano",
  table: "VidaLinkPedido",
  fields: [
    {
      field: "NumAutorizacao",
      label: "NumAutorizacao",
      name: "VidaLinkPedido_id",
      typeField: "float",

      scale: 4,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "PlanoConvenio",
      label: "PlanoConvenio",
      name: "PlanoConvenio",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "CdConvenio",
      label: "CdConvenio",
      name: "CdConvenio",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "NmConvenio",
      label: "NmConvenio",
      name: "NmConvenio",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "NmConveniado",
      label: "NmConveniado",
      name: "NmConveniado",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "NumCartao",
      label: "NumCartao",
      name: "NumCartao",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "TipoAutorizacao",
      label: "TipoAutorizacao",
      name: "TipoAutorizacao",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Estacao",
      label: "Estacao",
      name: "Estacao",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "VlTotal",
      label: "VlTotal",
      name: "VlTotal",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlReceberLoja",
      label: "VlReceberLoja",
      name: "VlReceberLoja",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlReceberConvenio",
      label: "VlReceberConvenio",
      name: "VlReceberConvenio",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlReceberVidaLink",
      label: "VlReceberVidaLink",
      name: "VlReceberVidaLink",
      typeField: "float",

      scale: 4,
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
      field: "NumDoc",
      label: "NumDoc",
      name: "NumDoc",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "Serie",
      label: "Serie",
      name: "Serie",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Modelo",
      label: "Modelo",
      name: "Modelo",
      typeField: "string",
    },
  ],
};
