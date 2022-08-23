import { TEntity } from "@er/types/*";

export const ComprovanteTRN: TEntity =
  {
  "database": "plano",
  "table": "ComprovanteTRN",
  "fields": [
    {
      "field": "CdFilial",
      "label": "CdFilial",
      "name": "CdFilial",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "NumPedido",
      "label": "NumPedido",
      "name": "NumPedido",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "NumLinha",
      "label": "NumLinha",
      "name": "NumLinha",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "Texto",
      "label": "Texto",
      "name": "Texto",
      "type": "string",
      "size": 40,
      "allowNull": false
    }
  ]
}
