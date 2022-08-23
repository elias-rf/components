import { TEntity } from "@er/types/*";

export const MapaEntregaProtocoloItem: TEntity =
  {
  "database": "plano",
  "table": "MapaEntregaProtocoloItem",
  "fields": [
    {
      "field": "CdMapaEntregaProtocolo",
      "label": "CdMapaEntregaProtocolo",
      "name": "CdMapaEntregaProtocolo",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "NumMapa",
      "label": "NumMapa",
      "name": "NumMapa",
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
      "field": "NumPedido",
      "label": "NumPedido",
      "name": "NumPedido",
      "type": "int",
      "size": 4
    },
    {
      "field": "DtInsercao",
      "label": "DtInsercao",
      "name": "DtInsercao",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "DsObservacao",
      "label": "DsObservacao",
      "name": "DsObservacao",
      "type": "string",
      "size": 250
    }
  ]
}
