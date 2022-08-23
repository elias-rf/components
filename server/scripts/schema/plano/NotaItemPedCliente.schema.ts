import { TEntity } from "@er/types/*";

export const NotaItemPedCliente: TEntity =
  {
  "database": "plano",
  "table": "NotaItemPedCliente",
  "fields": [
    {
      "field": "CdFilial",
      "label": "CdFilial",
      "name": "CdFilial",
      "type": "int",
      "size": 9,
      "allowNull": false
    },
    {
      "field": "NumNota",
      "label": "NumNota",
      "name": "NumNota",
      "type": "float",
      "size": 8,
      "scale": 4,
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
      "size": 3,
      "allowNull": false
    },
    {
      "field": "Sequencia",
      "label": "Sequencia",
      "name": "Sequencia",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "NumPedCliente",
      "label": "NumPedCliente",
      "name": "NumPedCliente",
      "type": "string",
      "size": 16,
      "allowNull": false
    },
    {
      "field": "ItemPedCliente",
      "label": "ItemPedCliente",
      "name": "ItemPedCliente",
      "type": "string",
      "size": 32,
      "allowNull": false
    }
  ]
}
