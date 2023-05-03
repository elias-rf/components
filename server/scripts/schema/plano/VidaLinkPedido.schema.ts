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
      size: 8,
      scale: 4,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "PlanoConvenio",
      label: "PlanoConvenio",
      name: "PlanoConvenio",
      typeField: "string",
      size: 10,
      allowNull: false,
    },
    {
      field: "CdConvenio",
      label: "CdConvenio",
      name: "CdConvenio",
      typeField: "string",
      size: 10,
      allowNull: false,
    },
    {
      field: "NmConvenio",
      label: "NmConvenio",
      name: "NmConvenio",
      typeField: "string",
      size: 40,
      allowNull: false,
    },
    {
      field: "NmConveniado",
      label: "NmConveniado",
      name: "NmConveniado",
      typeField: "string",
      size: 40,
      allowNull: false,
    },
    {
      field: "NumCartao",
      label: "NumCartao",
      name: "NumCartao",
      typeField: "string",
      size: 30,
      allowNull: false,
    },
    {
      field: "TipoAutorizacao",
      label: "TipoAutorizacao",
      name: "TipoAutorizacao",
      typeField: "string",
      size: 1,
      allowNull: false,
    },
    {
      field: "Estacao",
      label: "Estacao",
      name: "Estacao",
      typeField: "string",
      size: 64,
      allowNull: false,
    },
    {
      field: "VlTotal",
      label: "VlTotal",
      name: "VlTotal",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlReceberLoja",
      label: "VlReceberLoja",
      name: "VlReceberLoja",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlReceberConvenio",
      label: "VlReceberConvenio",
      name: "VlReceberConvenio",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlReceberVidaLink",
      label: "VlReceberVidaLink",
      name: "VlReceberVidaLink",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "NumPedido",
      label: "NumPedido",
      name: "NumPedido",
      typeField: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "NumDoc",
      label: "NumDoc",
      name: "NumDoc",
      typeField: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "Serie",
      label: "Serie",
      name: "Serie",
      typeField: "string",
      size: 3,
      allowNull: false,
    },
    {
      field: "Modelo",
      label: "Modelo",
      name: "Modelo",
      typeField: "string",
      size: 3,
    },
  ],
};
