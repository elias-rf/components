import { TEntity } from "@er/types/*";

export const VidaLinkPedido: TEntity =
  {
  "database": "plano",
  "table": "VidaLinkPedido",
  "fields": [
    {
      "field": "NumAutorizacao",
      "label": "NumAutorizacao",
      "name": "VidaLinkPedido_id",
      "type": "float",
      "size": 8,
      "scale": 4,
      "primaryKey": true,
      "allowNull": false
    },
    {
      "field": "CdFilial",
      "label": "CdFilial",
      "name": "CdFilial",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "PlanoConvenio",
      "label": "PlanoConvenio",
      "name": "PlanoConvenio",
      "type": "string",
      "size": 10,
      "allowNull": false
    },
    {
      "field": "CdConvenio",
      "label": "CdConvenio",
      "name": "CdConvenio",
      "type": "string",
      "size": 10,
      "allowNull": false
    },
    {
      "field": "NmConvenio",
      "label": "NmConvenio",
      "name": "NmConvenio",
      "type": "string",
      "size": 40,
      "allowNull": false
    },
    {
      "field": "NmConveniado",
      "label": "NmConveniado",
      "name": "NmConveniado",
      "type": "string",
      "size": 40,
      "allowNull": false
    },
    {
      "field": "NumCartao",
      "label": "NumCartao",
      "name": "NumCartao",
      "type": "string",
      "size": 30,
      "allowNull": false
    },
    {
      "field": "TipoAutorizacao",
      "label": "TipoAutorizacao",
      "name": "TipoAutorizacao",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "Estacao",
      "label": "Estacao",
      "name": "Estacao",
      "type": "string",
      "size": 64,
      "allowNull": false
    },
    {
      "field": "VlTotal",
      "label": "VlTotal",
      "name": "VlTotal",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlReceberLoja",
      "label": "VlReceberLoja",
      "name": "VlReceberLoja",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlReceberConvenio",
      "label": "VlReceberConvenio",
      "name": "VlReceberConvenio",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlReceberVidaLink",
      "label": "VlReceberVidaLink",
      "name": "VlReceberVidaLink",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "NumPedido",
      "label": "NumPedido",
      "name": "NumPedido",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "NumDoc",
      "label": "NumDoc",
      "name": "NumDoc",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "Serie",
      "label": "Serie",
      "name": "Serie",
      "type": "string",
      "size": 3,
      "allowNull": false
    },
    {
      "field": "Modelo",
      "label": "Modelo",
      "name": "Modelo",
      "type": "string",
      "size": 3
    }
  ]
}